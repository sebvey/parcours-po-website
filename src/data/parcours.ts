// La carte du cours : blocs et concepts. Les titres viennent de course/plan.md.
// Un concept est cliquable seulement si sa page existe dans la collection `concepts`.
export interface ConceptRef {
  /** "0".."17", "A1", "A2" */
  n: string;
  titre: string;
}
export interface Bloc {
  id: string;
  titre: string;
  question: string;
  concepts: ConceptRef[];
}

export const blocs: Bloc[] = [
  { id: 'cadre', titre: 'Le cadre', question: "Qu’est-ce qu’on construit, pour qui, et qui décide ?", concepts: [
    { n: '0', titre: "Scrum en bref et l’incrément" },
    { n: '1', titre: 'Le produit et le rôle du PO' },
    { n: '2', titre: 'Objectif produit et résultat' },
  ] },
  { id: 'backlog', titre: 'Le backlog', question: 'Où vit le travail, sous quelle forme ?', concepts: [
    { n: '3', titre: 'Le backlog produit' },
    { n: '4', titre: 'Hiérarchie du backlog' },
  ] },
  { id: 'story', titre: 'La story', question: 'Comment écrire un besoin qu’on peut tester ?', concepts: [
    { n: '5', titre: 'La user story' },
    { n: '6', titre: 'Rôles et personas' },
    { n: '7', titre: 'INVEST' },
    { n: '8', titre: "Critères d’acceptation et règles métier" },
  ] },
  { id: 'decouper', titre: 'Découper', question: 'Comment le rendre assez petit pour servir seul ?', concepts: [
    { n: '9', titre: 'Découpage en tranches verticales' },
    { n: '10', titre: 'Hors périmètre et dépendances' },
  ] },
  { id: 'cadrer', titre: 'Cadrer le travail', question: 'Quand est-ce prêt, fini, et de quelles données parle-t-on ?', concepts: [
    { n: '11', titre: 'Definition of Done, Definition of Ready' },
    { n: '12', titre: 'Les données du produit' },
  ] },
  { id: 'decider', titre: 'Décider', question: 'Dans quel ordre, et avec qui ?', concepts: [
    { n: '13', titre: 'Ordonner le backlog' },
    { n: '14', titre: 'Les parties prenantes' },
  ] },
  { id: 'conduire', titre: 'Conduire', question: "De l’idée à l’incrément, et « pour quand ? »", concepts: [
    { n: '15', titre: 'La vie d’une story : refinement, planning, revue' },
    { n: '16', titre: 'Story map et première version' },
  ] },
  { id: 'explorer', titre: 'Explorer', question: 'Que sait-on, que suppose-t-on ?', concepts: [
    { n: '17', titre: 'Hypothèses et exploration' },
  ] },
  { id: 'annexes', titre: 'Annexes', question: 'À consulter selon le besoin, hors de l’ordre.', concepts: [
    { n: 'A1', titre: 'Structurer le backlog dans un outil' },
    { n: 'A2', titre: 'Travailler sans sprint' },
  ] },
];

export const tousLesConcepts: (ConceptRef & { bloc: Bloc })[] = blocs.flatMap((bloc) =>
  bloc.concepts.map((c) => ({ ...c, bloc })),
);

/** Identifiant d’URL d’un concept : "9" -> "09", "A1" -> "A1". */
export function slugOf(n: string): string {
  return /^\d+$/.test(n) ? n.padStart(2, '0') : n;
}

/** Extrait le numéro de concept d’une référence : "8a2" -> "8", "A1a" -> "A1". */
export function conceptOf(ref: string): string {
  return ref.match(/^(A\d+|\d+)/)?.[1] ?? ref;
}
