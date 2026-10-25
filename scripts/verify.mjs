#!/usr/bin/env node
// Vérifie le site avant une PR : `npm run verify`.
//
//   1. types (`astro check`), puis build comme en ligne (préfixe BASE_PATH du déploiement) dans
//      .verify/dist, et index Pagefind ;
//   2. liens et ancres internes du site construit (href et src de chaque page) ;
//   3. dans un Chromium headless (Playwright), chaque page au bureau (1280 px) et à 375 px, en
//      clair et en sombre : capture pleine page dans .verify/captures/, aucun défilement
//      horizontal (tous les dépliables ouverts et, sur une page de concept, chaque onglet),
//      aucune erreur JavaScript ; et le style du texte rendu : ni tiret long, ni tiret moyen
//      entre espaces, ni flèche (hors code, schémas SVG et `aria-hidden`) ;
//   4. `check-alignment`, en avertissement seulement.
//
//   npm run verify                  # tout
//   npm run verify -- --no-build    # réutilise .verify/dist (après une première passe)
//   npm run verify -- --page domaines --page concepts/09   # seulement ces pages
//
// Code de sortie : 0 si tout passe (avertissements compris), 1 sinon.
// Navigateur absent : `npx playwright install chromium`, une fois.

import { spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sortie = join(racine, '.verify');
const dist = join(sortie, 'dist');
const captures = join(sortie, 'captures');
// Mêmes valeurs que .github/workflows/deploy.yml : un lien qui oublie le préfixe casse ici.
const BASE = '/parcours-po-website/';
const SITE = 'https://sebvey.github.io';

const args = process.argv.slice(2);
const noBuild = args.includes('--no-build');
const filtrePages = args.flatMap((a, i) => (args[i - 1] === '--page' ? [a.replace(/^\/|\/$/g, '')] : []));

const erreurs = [];
const avertissements = [];
const erreur = (m) => erreurs.push(m);

function lancer(titre, cmd, cmdArgs, env = {}) {
  console.log(`\n▶ ${titre}`);
  const r = spawnSync(cmd, cmdArgs, { cwd: racine, stdio: 'inherit', env: { ...process.env, ...env } });
  return r.status === 0;
}

// ---------- 1. Build ----------

if (!noBuild) {
  rmSync(dist, { recursive: true, force: true });
  const ok =
    lancer('Types (astro check)', 'npx', ['astro', 'check']) &&
    lancer(`Build (base ${BASE})`, 'npx', ['astro', 'build', '--outDir', dist], { BASE_PATH: BASE.replace(/\/$/, ''), SITE_URL: SITE }) &&
    lancer('Index Pagefind', 'npx', ['pagefind', '--site', dist]);
  if (!ok) {
    console.error('\n✗ Le build échoue : rien d’autre n’est vérifié.');
    process.exit(1);
  }
} else if (!existsSync(dist)) {
  console.error('✗ --no-build : .verify/dist n’existe pas, lancer d’abord `npm run verify`.');
  process.exit(1);
}

// ---------- 2. Liens et ancres ----------

console.log('\n▶ Liens et ancres internes');

/** Tous les fichiers HTML du site construit, en chemins relatifs à dist (séparateur /). */
function fichiersHtml(dir = dist) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return e.name === 'pagefind' || e.name === '_astro' ? [] : fichiersHtml(p);
    return e.name.endsWith('.html') ? [relative(dist, p).split(sep).join('/')] : [];
  });
}

/** Adresse publique d'un fichier : « concepts/09/index.html » -> « /parcours-po-website/concepts/09/ ». */
const adresseDe = (f) => BASE + f.replace(/(^|\/)index\.html$/, '$1');

/** Fichier servi pour un chemin d'adresse sous BASE, ou null. */
function fichierDe(chemin) {
  if (!chemin.startsWith(BASE)) return null;
  const rel = decodeURIComponent(chemin.slice(BASE.length));
  const p = join(dist, rel);
  if (!p.startsWith(dist)) return null;
  if (existsSync(p) && statSync(p).isFile()) return p;
  const index = join(p, 'index.html');
  return existsSync(index) ? index : null;
}

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const idsCache = new Map();
function idsDe(fichier) {
  if (!idsCache.has(fichier)) {
    const html = readFileSync(fichier, 'utf8');
    idsCache.set(fichier, new Set([...html.matchAll(/\sid="([^"]*)"/g)].map((m) => decode(m[1]))));
  }
  return idsCache.get(fichier);
}

const pages = fichiersHtml();
let nLiens = 0;
for (const f of pages) {
  const html = readFileSync(join(dist, f), 'utf8');
  const ici = new URL(adresseDe(f), SITE);
  for (const [, , brut] of html.matchAll(/\s(href|src)="([^"]*)"/g)) {
    const v = decode(brut);
    if (/^(mailto:|tel:|javascript:|data:)/.test(v)) continue;
    const u = new URL(v, ici);
    if (u.origin !== SITE) continue;
    nLiens++;
    const cible = fichierDe(u.pathname);
    if (!cible) {
      erreur(`lien cassé : ${adresseDe(f)} -> ${v}${u.pathname.startsWith(BASE) ? '' : ' (sans le préfixe BASE_PATH : passer par url())'}`);
      continue;
    }
    const ancre = decodeURIComponent(u.hash.slice(1));
    if (ancre && cible.endsWith('.html') && !idsDe(cible).has(ancre)) erreur(`ancre absente : ${adresseDe(f)} -> ${v}`);
  }
}
console.log(`${pages.length} pages, ${nLiens} liens internes.`);

// ---------- 3. Navigateur ----------

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('✗ Playwright manque : `npm install`.');
  process.exit(1);
}

const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.wasm': 'application/wasm' };
const serveur = createServer((req, res) => {
  const chemin = new URL(req.url, 'http://x').pathname;
  const f = fichierDe(chemin);
  if (!f) {
    res.writeHead(404, { 'content-type': types['.html'] });
    res.end(readFileSync(join(dist, '404.html')));
    return;
  }
  res.writeHead(200, { 'content-type': types[extname(f)] ?? 'application/octet-stream' });
  res.end(readFileSync(f));
});
await new Promise((ok) => serveur.listen(0, '127.0.0.1', ok));
const origine = `http://127.0.0.1:${serveur.address().port}`;

// Les pages de redirection (meta refresh) ne se capturent pas : elles affichent la cible.
const aCapturer = pages
  .filter((f) => !/http-equiv="refresh"/.test(readFileSync(join(dist, f), 'utf8')))
  .filter((f) => !filtrePages.length || filtrePages.includes(f.replace(/\/?index\.html$/, '').replace(/\.html$/, '')));
if (filtrePages.length && !aCapturer.length) erreur(`--page : aucune page ne correspond à ${filtrePages.join(', ')}`);

const formats = [
  { nom: 'bureau-clair', viewport: { width: 1280, height: 800 }, colorScheme: 'light' },
  { nom: 'bureau-sombre', viewport: { width: 1280, height: 800 }, colorScheme: 'dark' },
  { nom: 'mobile-clair', viewport: { width: 375, height: 812 }, colorScheme: 'light' },
  { nom: 'mobile-sombre', viewport: { width: 375, height: 812 }, colorScheme: 'dark' },
];

/** Exécuté dans la page : ce qui dépasse à droite, si la page défile horizontalement. */
function debordement() {
  const largeur = document.documentElement.clientWidth;
  if (document.documentElement.scrollWidth <= largeur + 1) return null;
  const nom = (el) => el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (el.classList.length ? `.${[...el.classList].join('.')}` : '');
  const fautifs = [];
  for (const el of document.body.querySelectorAll('*')) {
    const r = el.getBoundingClientRect();
    if (r.width && r.right > largeur + 1 && !(el.parentElement && el.parentElement.getBoundingClientRect().right > largeur + 1)) {
      fautifs.push(`${nom(el)} « ${el.textContent.trim().slice(0, 50)} » (${Math.round(r.right)} px)`);
      if (fautifs.length === 3) break;
    }
  }
  return `${document.documentElement.scrollWidth} px pour ${largeur} px ; dépasse : ${fautifs.join(', ') || '? (un pseudo-élément ::before ou ::after)'}`;
}

/** Exécuté dans la page : passages de texte qui enfreignent le style (tiret long, flèche). Une
 *  citation entre guillemets « » garde la ponctuation de sa source. */
function style() {
  const ignore = 'script, style, code, pre, svg, [aria-hidden="true"], [data-verify-ignore]';
  const motif = /—|\s–\s|[←→↑↓↔⇐⇒⇔⟵⟶⟹➔➜➝]/g;
  const trouves = [];
  let citation = 0;
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = w.nextNode(); n; n = w.nextNode()) {
    if (n.parentElement.closest(ignore)) continue;
    const t = n.data;
    let k = 0;
    for (const m of t.matchAll(motif)) {
      for (; k < m.index; k++) citation = Math.max(0, citation + (t[k] === '«') - (t[k] === '»'));
      if (!citation) trouves.push(`« ${t.slice(Math.max(0, m.index - 30), m.index + 30).replace(/\s+/g, ' ').trim()} »`);
    }
    for (; k < t.length; k++) citation = Math.max(0, citation + (t[k] === '«') - (t[k] === '»'));
  }
  return trouves;
}

console.log(`\n▶ Navigateur : ${aCapturer.length} pages × ${formats.length} formats`);
let navigateur;
try {
  navigateur = await chromium.launch();
} catch (e) {
  serveur.close();
  console.error(`✗ Chromium ne démarre pas : \`npx playwright install chromium\`.\n${e.message.split('\n')[0]}`);
  process.exit(1);
}
rmSync(captures, { recursive: true, force: true });

await Promise.all(formats.map(async (fmt) => {
  const ctx = await navigateur.newContext({ viewport: fmt.viewport, colorScheme: fmt.colorScheme });
  const page = await ctx.newPage();
  let courante = '';
  page.on('pageerror', (e) => erreur(`erreur JavaScript : ${courante} (${fmt.nom}) : ${e.message}`));
  mkdirSync(join(captures, fmt.nom), { recursive: true });
  for (const f of aCapturer) {
    courante = adresseDe(f);
    const nom = f.replace(/\/?index\.html$/, '').replace(/\.html$/, '').replace(/\//g, '_') || 'accueil';
    await page.goto(origine + courante, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: join(captures, fmt.nom, `${nom}.png`), fullPage: true });
    const verifier = async (etat) => {
      const d = await page.evaluate(debordement);
      if (d) erreur(`défilement horizontal : ${courante} (${fmt.nom}, ${etat}) : ${d}`);
    };
    await verifier('à l’ouverture');
    await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
    await verifier('dépliables ouverts');
    for (const onglet of await page.$$eval('[data-tab]', (as) => as.slice(1).map((a) => a.dataset.tab))) {
      await page.evaluate((id) => { location.hash = id; }, onglet);
      await page.waitForFunction((id) => document.getElementById(id)?.classList.contains('is-active'), onglet);
      await verifier(`onglet ${onglet}`);
    }
    if (fmt.nom === 'bureau-clair') for (const t of await page.evaluate(style)) erreur(`style : ${courante} : ${t}`);
  }
  await ctx.close();
}));
await navigateur.close();
serveur.close();
console.log(`Captures : ${relative(racine, captures)}/`);

// ---------- 4. Alignement sur le cours ----------

console.log('\n▶ Alignement sur le cours (avertissement)');
const al = spawnSync('node', ['scripts/check-alignment.mjs'], { cwd: racine, encoding: 'utf8' });
if (al.status !== 0) avertissements.push(`check-alignment : ${(al.stdout + al.stderr).trim().split('\n').filter(Boolean).join(' | ')}`);
else console.log('aligné.');

// ---------- Bilan ----------

console.log('');
for (const a of avertissements) console.log(`⚠ ${a}`);
for (const e of erreurs) console.log(`✗ ${e}`);
if (erreurs.length) {
  console.log(`\n✗ verify : ${erreurs.length} erreur(s).`);
  process.exit(1);
}
console.log(`\n✓ verify : tout passe${avertissements.length ? `, ${avertissements.length} avertissement(s)` : ''}.`);
