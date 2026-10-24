// Données des pages transversales (Consensus ou école, Sources), tirées de la collection
// `concepts` : rien n'est recopié à la main.
import { disponibles, conceptUrl, type ConceptEntry } from './concepts';
import { tousLesConcepts } from '../data/parcours';

export type Kind = 'consensus' | 'ecole' | 'cours';

export interface Position {
  n: string;
  titre: string;
  kind: Kind;
  /** Ancre dans l'onglet « Consensus ou école » du concept : ecole-3. */
  anchor: string;
  href: string;
  auteur?: string;
  texte: string;
}

/** Les concepts rédigés, dans l'ordre du cours (annexes à la fin). */
export async function conceptsEnOrdre(): Promise<{ n: string; titre: string; entry: ConceptEntry }[]> {
  const dispo = await disponibles('fr');
  return tousLesConcepts
    .filter((c) => dispo.has(c.n))
    .map((c) => ({ n: c.n, titre: c.titre, entry: dispo.get(c.n)! }));
}

export async function positions(): Promise<Position[]> {
  const out: Position[] = [];
  for (const { n, titre, entry } of await conceptsEnOrdre()) {
    for (const kind of ['consensus', 'ecole', 'cours'] as const) {
      entry.data.ecoles[kind].forEach((it, i) => {
        const anchor = `${kind}-${i + 1}`;
        out.push({ n, titre, kind, anchor, href: conceptUrl(n, anchor), auteur: it.auteur, texte: it.texte });
      });
    }
  }
  return out;
}

/** « Mike Cohn : SPIDR » -> { groupe: "Mike Cohn", sujet: "SPIDR" }. Sans « : », pas de groupe. */
export function scinde(auteur?: string): { groupe?: string; sujet?: string } {
  if (!auteur) return {};
  // Le séparateur est le premier « : » hors parenthèses.
  let i = -1;
  for (let k = 0, depth = 0; k < auteur.length; k++) {
    const c = auteur[k];
    if (c === '(') depth++;
    else if (c === ')') depth = Math.max(0, depth - 1);
    else if (depth === 0 && auteur.startsWith(' : ', k)) { i = k; break; }
  }
  if (i < 0) return { sujet: auteur };
  const groupe = auteur.slice(0, i).replace(/\s*\([^)]*\)\s*$/, '').trim();
  return { groupe, sujet: auteur.slice(i + 3).trim() };
}

/** Groupe d'une position de consensus : le texte de référence ou la pratique. */
export function groupeConsensus(auteur?: string): string {
  const a = auteur ?? 'Sans mention';
  if (a.startsWith('Le Scrum Guide 2020')) return 'Le Scrum Guide 2020';
  if (a.startsWith('Pratique établie')) return 'Pratique établie, hors du Scrum Guide';
  return scinde(a).groupe ?? a;
}

/** Coupe un texte après sa première phrase ; rend aussi la suite (ou rien). */
export function premierePhrase(texte: string): { debut: string; suite: string } {
  const m = texte.match(/^([\s\S]*?[.!?»)])\s+(?=[A-ZÀÂÇÉÈÊÎÔÙÛ«*(])/);
  if (!m) return { debut: texte, suite: '' };
  const debut = m[1];
  // Ne coupe pas au milieu d'un passage en gras ou en italique.
  if ((debut.match(/\*/g) ?? []).length % 2 === 1) return { debut: texte, suite: '' };
  return { debut, suite: texte.slice(m[0].length) };
}

export function slug(s: string): string {
  return s
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ---------- Sources ----------

export interface Citation { n: string; titre: string; id: string; href: string }
export interface Biblio {
  cle: string;
  texte: string;
  url?: string;
  types: string[];
  citations: Citation[];
  tri: string;
}

const cleDe = (r: { url?: string; texte: string }) =>
  r.url ? r.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '').toLowerCase() : `texte:${r.texte.trim().toLowerCase()}`;

const triDe = (texte: string) =>
  texte.replace(/[*«»“”"’']/g, '').replace(/^\s*(le|la|les|l)\s+/i, '').trim();

/** Bibliographie dédoublonnée : une entrée par adresse (ou par texte, sans adresse). */
export async function bibliographie(): Promise<{ entrees: Biblio[]; totalCitations: number }> {
  const map = new Map<string, { textes: Map<string, number>; url?: string; types: Set<string>; citations: Citation[] }>();
  let totalCitations = 0;
  for (const { n, titre, entry } of await conceptsEnOrdre()) {
    for (const r of entry.data.sources.references) {
      totalCitations++;
      const cle = cleDe(r);
      let e = map.get(cle);
      if (!e) { e = { textes: new Map(), url: r.url, types: new Set(), citations: [] }; map.set(cle, e); }
      e.textes.set(r.texte, (e.textes.get(r.texte) ?? 0) + 1);
      e.types.add(r.type);
      e.citations.push({ n, titre, id: r.id, href: conceptUrl(n, `ref-${r.id}`) });
    }
  }
  const entrees: Biblio[] = [...map.entries()].map(([cle, e]) => {
    // Le libellé le plus employé par les concepts ; à égalité, le premier rencontré.
    const texte = [...e.textes.entries()].sort((a, b) => b[1] - a[1])[0][0];
    return { cle, texte, url: e.url, types: [...e.types], citations: e.citations, tri: triDe(texte) };
  });
  entrees.sort((a, b) => a.tri.localeCompare(b.tri, 'fr', { sensitivity: 'base', ignorePunctuation: true }));
  return { entrees, totalCitations };
}

export async function nonVerifie(): Promise<{ n: string; titre: string; href: string; items: string[] }[]> {
  return (await conceptsEnOrdre())
    .filter((c) => c.entry.data.sources.nonVerifie.length > 0)
    .map((c) => ({ n: c.n, titre: c.titre, href: conceptUrl(c.n, 'non-verifie'), items: c.entry.data.sources.nonVerifie }));
}
