// Les sept domaines du cours et leurs concepts, puis les annexes. Source : course/plan.md,
// sections « Domaines du cours », « Concepts » et « Annexes ». Chaque concept appartient à un
// seul domaine ; les domaines se suivent dans l'ordre des concepts. Les annexes restent hors
// domaines. Un concept est cliquable seulement si sa page existe dans la collection `concepts`.
export interface ConceptRef {
  /** "0".."17", "A1", "A2" */
  n: string;
  titre: string;
}
export interface Domaine {
  /** 1..7 ; 0 pour les annexes, hors domaines. */
  n: number;
  titre: string;
  /** Ce que l'on sait à la fin du domaine (course/plan.md). */
  saitFaire: string;
  /** Durée indicative de conversation avec l'agent, en minutes (frontmatter `duree` de
   *  course/domains/N-slug.md). Absente pour les annexes. */
  duree?: number;
  concepts: ConceptRef[];
}

export const domaines: Domaine[] = [
  { n: 1, titre: 'Le cadre', duree: 90, saitFaire: 'Décrire un produit data par le problème, les utilisateurs et la valeur, son objectif produit et le résultat visé, et dire qui tranche quoi entre PO et Developers.', concepts: [
    { n: '0', titre: "Scrum en bref et l’incrément" },
    { n: '1', titre: 'Le produit et le rôle du PO' },
    { n: '2', titre: 'Objectif produit et résultat' },
  ] },
  { n: 2, titre: 'Le backlog et la story', duree: 120, saitFaire: 'Tenir un backlog ordonné, et écrire et juger une story : acteur, besoin, raison, critères d’acceptation qu’un testeur tranche sans poser de question, règles métier qu’ils illustrent.', concepts: [
    { n: '3', titre: 'Le backlog produit' },
    { n: '4', titre: 'Hiérarchie du backlog' },
    { n: '5', titre: 'La user story' },
    { n: '6', titre: 'Rôles et personas' },
    { n: '7', titre: 'INVEST' },
    { n: '8', titre: "Critères d’acceptation et règles métier" },
  ] },
  { n: 3, titre: 'Découper et cadrer la story', duree: 55, saitFaire: 'Découper un besoin data en tranches verticales qui servent seules, avec hors périmètre et dépendances écrits, et dire quand une story est prête et quand elle est finie.', concepts: [
    { n: '9', titre: 'Découpage en tranches verticales' },
    { n: '10', titre: 'Hors périmètre et dépendances' },
    { n: '11', titre: 'Definition of Done, Definition of Ready' },
  ] },
  { n: 4, titre: 'Les données', duree: 25, saitFaire: 'Définir un indicateur sans ambiguïté et placer les exigences de qualité et d’accès aux données au bon endroit.', concepts: [
    { n: '12', titre: 'Les données du produit' },
  ] },
  { n: 5, titre: 'Décider', duree: 40, saitFaire: 'Ordonner un backlog entre des demandes concurrentes en argumentant, et défendre cet ordre devant les parties prenantes.', concepts: [
    { n: '13', titre: 'Ordonner le backlog' },
    { n: '14', titre: 'Les parties prenantes' },
  ] },
  { n: 6, titre: 'Conduire', duree: 50, saitFaire: 'Conduire une story de l’idée à l’incrément (refinement, Sprint Planning et objectif de sprint, revue de sprint), tracer une première version utile et répondre à « pour quand ? ».', concepts: [
    { n: '15', titre: 'La vie d’une story : refinement, planning, revue' },
    { n: '16', titre: 'Story map et première version' },
  ] },
  { n: 7, titre: 'Explorer', duree: 25, saitFaire: 'Séparer ce qu’on sait de ce qu’on suppose, proposer une exploration bornée avant de s’engager, et accepter un résultat incertain.', concepts: [
    { n: '17', titre: 'Hypothèses et exploration' },
  ] },
];

export const annexes: Domaine = { n: 0, titre: 'Annexes', saitFaire: 'À consulter selon le besoin, hors de l’ordre et hors domaines.', concepts: [
  { n: 'A1', titre: 'Structurer le backlog dans un outil' },
  { n: 'A2', titre: 'Travailler sans sprint' },
] };

export const tousLesConcepts: (ConceptRef & { domaine: Domaine })[] = [...domaines, annexes].flatMap((domaine) =>
  domaine.concepts.map((c) => ({ ...c, domaine })),
);

/** Durée en clair : 90 -> "1 h 30", 120 -> "2 h", 55 -> "55 min". */
export function dureeTexte(min: number): string {
  const h = Math.floor(min / 60), m = min % 60;
  if (h === 0) return `${m} min`;
  return m === 0 ? `${h} h` : `${h} h ${String(m).padStart(2, '0')}`;
}

/** Durée indicative du parcours, en minutes : la somme des domaines. */
export const dureeTotale = domaines.reduce((s, d) => s + (d.duree ?? 0), 0);

/** Ancre d'un domaine sur la page Domaines : 3 -> "domaine-3", annexes -> "annexes". */
export function domaineId(d: Domaine): string {
  return d.n === 0 ? 'annexes' : `domaine-${d.n}`;
}

/** Identifiant d’URL d’un concept : "9" -> "09", "A1" -> "A1". */
export function slugOf(n: string): string {
  return /^\d+$/.test(n) ? n.padStart(2, '0') : n;
}

/** Extrait le numéro de concept d’une référence : "8a2" -> "8", "A1a" -> "A1". */
export function conceptOf(ref: string): string {
  return ref.match(/^(A\d+|\d+)/)?.[1] ?? ref;
}
