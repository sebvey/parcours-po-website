import { getCollection, type CollectionEntry } from 'astro:content';
import { slugOf, conceptOf, tousLesConcepts } from '../data/parcours';
import { url } from '../i18n/ui';

export type ConceptEntry = CollectionEntry<'concepts'>;

/** Les concepts rédigés, par numéro ("9" -> entrée). */
export async function disponibles(lang = 'fr'): Promise<Map<string, ConceptEntry>> {
  const all = await getCollection('concepts');
  return new Map(all.filter((e) => e.id.startsWith(`${lang}/`)).map((e) => [e.data.numero, e]));
}

export function conceptUrl(n: string, hash = ''): string {
  return url(`concepts/${slugOf(n)}/${hash ? `#${hash}` : ''}`);
}

/** Lien vers un concept s'il existe, sinon rien (le concept est « bientôt »). */
export async function lien(ref: string) {
  const n = conceptOf(ref);
  const dispo = await disponibles();
  const known = tousLesConcepts.find((c) => c.n === n);
  const exists = dispo.has(n);
  return {
    n,
    exists,
    titre: known?.titre ?? '',
    href: exists ? conceptUrl(n, /[a-z]/i.test(ref.slice(n.length)) ? ref : '') : undefined,
  };
}
