// L'ordre de lecture du cours : chaque domaine, puis ses concepts (domaine 1, concepts 0 à 2,
// domaine 2, concepts 3 à 8…). Les annexes restent hors de cet ordre. Sert aux cartes précédent /
// suivant des pages de domaine et de concept.
import { domaines, type Domaine } from '../data/domaines';
import { url } from '../i18n/ui';
import { conceptUrl } from './concepts';

export interface Etape {
  /** « D3 » pour un domaine, « 9 » pour un concept. */
  cle: string;
  /** Libellé court de la flèche : « D3 », « 9 ». */
  court: string;
  /** Libellé de la carte : « Domaine 3 : Découper et cadrer la story », « 9. Découpage… ». */
  long: string;
  /** Absent si la page n'existe pas encore. */
  href?: string;
}

export function domaineUrl(d: Domaine | number): string {
  return url(`domaines/${typeof d === 'number' ? d : d.n}/`);
}

/** Les étapes de lecture, dans l'ordre. `dispo` : numéros des concepts rédigés. */
export function lecture(dispo: { has(n: string): boolean }): Etape[] {
  return domaines.flatMap((d) => [
    { cle: `D${d.n}`, court: `D${d.n}`, long: `Domaine ${d.n} : ${d.titre}`, href: domaineUrl(d) },
    ...d.concepts.map((c) => ({
      cle: c.n,
      court: c.n,
      long: `${c.n}. ${c.titre}`,
      href: dispo.has(c.n) ? conceptUrl(c.n) : undefined,
    })),
  ]);
}

/** Les étapes voisines d'une étape (`cle` : « D3 » ou « 9 »). */
export function voisins(etapes: Etape[], cle: string): { prev?: Etape; next?: Etape } {
  const i = etapes.findIndex((e) => e.cle === cle);
  return i < 0 ? {} : { prev: etapes[i - 1], next: etapes[i + 1] };
}
