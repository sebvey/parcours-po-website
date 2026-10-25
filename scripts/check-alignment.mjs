#!/usr/bin/env node
// Compare chaque page de concept et de domaine à la fiche du cours dont elle dérive.
//
// Le frontmatter d'une page de concept porte l'empreinte (sha256) de la fiche course/concepts et
// de la fiche course/sources lues au dernier alignement ; celui d'une page de domaine, celle de
// la fiche course/domains. Le script relit ces fiches dans le dépôt du
// cours et liste les pages dont une fiche a changé depuis.
//
//   npm run check-alignment                       # chemin par défaut : ../parcours-po/course
//   npm run check-alignment -- --course <dossier>  # ou COURS_DIR=<dossier>
//   npm run check-alignment -- --stamp [NN ...]    # inscrit les empreintes actuelles (après
//                                                  # avoir réaligné la page, pour tous ou
//                                                  # pour les concepts nommés ; un domaine
//                                                  # se nomme D1 à D7)
//
// Code de sortie : 0 si tout est aligné, 1 s'il reste un écart, 2 si le dépôt du cours est
// illisible.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = join(racine, 'src/content/concepts/fr');
const domainesDir = join(racine, 'src/content/domaines/fr');
const pkg = JSON.parse(readFileSync(join(racine, 'package.json'), 'utf8'));
const versionAlignee = pkg.parcoursPo?.coursVersion;

const args = process.argv.slice(2);
const stamp = args.includes('--stamp');
const iCourse = args.indexOf('--course');
const coursDir = resolve(
  racine,
  (iCourse >= 0 && args[iCourse + 1]) || process.env.COURS_DIR || '../parcours-po/course',
);
const filtre = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--course');

const sha = (f) => createHash('sha256').update(readFileSync(f)).digest('hex');
const fin = (m, code = 2) => {
  console.error(m);
  process.exit(code);
};

if (!versionAlignee) fin('package.json : parcoursPo.coursVersion manque.');
for (const sous of ['concepts', 'sources', 'domains']) {
  if (!existsSync(join(coursDir, sous))) {
    fin(`Dépôt du cours illisible : ${join(coursDir, sous)} n'existe pas (voir --course ou COURS_DIR).`);
  }
}

// Le bloc `alignement:` du frontmatter :
//   alignement:
//     coursVersion: "1.0.0"
//     fiche: "<sha256 de course/concepts/NN-slug.md>"
//     sources: "<sha256 de course/sources/NN-slug.md>"
const bloc = /^alignement:\n(?:[ \t]+.*\n)*/m;
const lire = (cle, texte) => texte.match(new RegExp(`^[ \\t]+${cle}: "([^"]*)"`, 'm'))?.[1];

let ecarts = 0;
const pages = readdirSync(pagesDir).filter((f) => f.endsWith('.mdx')).sort();
for (const page of pages) {
  const nom = page.replace(/\.mdx$/, '');
  if (filtre.length && !filtre.some((n) => nom.startsWith(n.toUpperCase().replace(/^(\d)$/, '0$1')))) continue;
  const chemin = join(pagesDir, page);
  const texte = readFileSync(chemin, 'utf8');
  const fiche = join(coursDir, 'concepts', `${nom}.md`);
  const src = join(coursDir, 'sources', `${nom}.md`);
  const manquants = [fiche, src].filter((f) => !existsSync(f));
  if (manquants.length) {
    console.log(`${nom} : fiche absente du cours (${manquants.map((f) => f.replace(coursDir + '/', '')).join(', ')})`);
    ecarts++;
    continue;
  }
  const attendu = { fiche: sha(fiche), sources: sha(src) };

  if (stamp) {
    const nouveau = `alignement:\n  coursVersion: "${versionAlignee}"\n  fiche: "${attendu.fiche}"\n  sources: "${attendu.sources}"\n`;
    const [, ouv, reste] = texte.match(/^(---\n)([\s\S]*)$/);
    const fm = reste.indexOf('\n---\n');
    let tete = reste.slice(0, fm + 1);
    tete = bloc.test(tete) ? tete.replace(bloc, nouveau) : tete + nouveau;
    writeFileSync(chemin, ouv + tete + reste.slice(fm + 1));
    console.log(`${nom} : empreintes inscrites`);
    continue;
  }

  const notes = [];
  if (!bloc.test(texte)) notes.push('pas de bloc `alignement` dans le frontmatter');
  else {
    if (lire('fiche', texte) !== attendu.fiche) notes.push(`la fiche course/concepts/${nom}.md a changé`);
    if (lire('sources', texte) !== attendu.sources) notes.push(`la fiche course/sources/${nom}.md a changé`);
    if (lire('coursVersion', texte) !== versionAlignee) notes.push(`version ${lire('coursVersion', texte)} ≠ ${versionAlignee} (package.json)`);
  }
  if (notes.length) {
    console.log(`${nom} : ${notes.join(' ; ')}`);
    ecarts++;
  }
}

// Pages de domaine : src/content/domaines/fr/N-slug.mdx <- course/domains/N-slug.md.
const pagesDom = existsSync(domainesDir) ? readdirSync(domainesDir).filter((f) => f.endsWith('.mdx')).sort() : [];
for (const page of pagesDom) {
  const nom = page.replace(/\.mdx$/, '');
  if (filtre.length && !filtre.some((n) => n.toUpperCase() === `D${nom.split('-')[0]}`)) continue;
  const chemin = join(domainesDir, page);
  const texte = readFileSync(chemin, 'utf8');
  const fiche = join(coursDir, 'domains', `${nom}.md`);
  if (!existsSync(fiche)) {
    console.log(`${nom} : fiche absente du cours (domains/${nom}.md)`);
    ecarts++;
    continue;
  }
  const attendu = sha(fiche);
  if (stamp) {
    const nouveau = `alignement:\n  coursVersion: "${versionAlignee}"\n  fiche: "${attendu}"\n`;
    const [, ouv, reste] = texte.match(/^(---\n)([\s\S]*)$/);
    const fm = reste.indexOf('\n---\n');
    let tete = reste.slice(0, fm + 1);
    tete = bloc.test(tete) ? tete.replace(bloc, nouveau) : tete + nouveau;
    writeFileSync(chemin, ouv + tete + reste.slice(fm + 1));
    console.log(`${nom} : empreinte inscrite`);
    continue;
  }
  const notes = [];
  if (!bloc.test(texte)) notes.push('pas de bloc `alignement` dans le frontmatter');
  else {
    if (lire('fiche', texte) !== attendu) notes.push(`la fiche course/domains/${nom}.md a changé`);
    if (lire('coursVersion', texte) !== versionAlignee) notes.push(`version ${lire('coursVersion', texte)} ≠ ${versionAlignee} (package.json)`);
  }
  if (notes.length) {
    console.log(`${nom} : ${notes.join(' ; ')}`);
    ecarts++;
  }
}

if (stamp) process.exit(0);
const orphelines = readdirSync(join(coursDir, 'concepts'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''))
  .filter((n) => !pages.includes(`${n}.mdx`));
for (const n of orphelines) {
  console.log(`${n} : fiche du cours sans page sur le site`);
  ecarts++;
}
for (const n of readdirSync(join(coursDir, 'domains')).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))) {
  if (!pagesDom.includes(`${n}.mdx`)) {
    console.log(`domains/${n} : fiche du cours sans page sur le site`);
    ecarts++;
  }
}
console.log(
  ecarts
    ? `\n${ecarts} écart(s) : réaligner la page sur la fiche, puis \`npm run check-alignment -- --stamp NN\`.`
    : `Aligné sur le cours ${versionAlignee} : ${pages.length} pages de concept, ${pagesDom.length} de domaine, aucun écart.`,
);
process.exit(ecarts ? 1 : 0);
