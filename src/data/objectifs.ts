// Les sept objectifs du cours et les concepts qui les servent.
// Source : course/plan.md, section « Objectifs du cours ». Un concept peut servir
// plusieurs objectifs ; le concept 3 et les annexes n'en portent aucun en propre.
export interface Objectif {
  n: number;
  /** Intitulé court, pour les pastilles et les filtres. */
  titre: string;
  /** Formulation du plan du cours : « À la fin, l'apprenant sait… » */
  texte: string;
  /** Numéros des concepts qui servent cet objectif. */
  concepts: string[];
}

export const objectifs: Objectif[] = [
  {
    n: 1,
    titre: 'Décrire un produit data',
    texte: 'Décrire un produit data, son objectif produit et le résultat visé, par le problème, les utilisateurs et la valeur, et dire qui tranche quoi entre PO, Developers et parties prenantes.',
    concepts: ['0', '1', '2', '14'],
  },
  {
    n: 2,
    titre: 'Écrire et juger une story',
    texte: 'Écrire et juger une story : acteur, besoin, raison, critères d’acceptation qu’un testeur tranche sans poser de question, règles métier qu’ils illustrent.',
    concepts: ['4', '5', '6', '7', '8'],
  },
  {
    n: 3,
    titre: 'Découper en tranches verticales',
    texte: 'Découper un besoin data en tranches verticales qui servent seules, avec hors périmètre et dépendances écrits.',
    concepts: ['9', '10', '16'],
  },
  {
    n: 4,
    titre: 'Ordonner et défendre l’ordre',
    texte: 'Ordonner un backlog entre des demandes concurrentes en argumentant, et défendre cet ordre devant les parties prenantes.',
    concepts: ['13', '14'],
  },
  {
    n: 5,
    titre: 'Conduire une story jusqu’à l’incrément',
    texte: 'Conduire une story de l’idée à l’incrément : refinement, Definition of Ready, Sprint Planning et objectif de sprint, Definition of Done, revue de sprint.',
    concepts: ['11', '15'],
  },
  {
    n: 6,
    titre: 'Définir un indicateur, placer la qualité des données',
    texte: 'Définir un indicateur sans ambiguïté et placer les exigences de qualité et d’accès aux données au bon endroit.',
    concepts: ['8', '11', '12'],
  },
  {
    n: 7,
    titre: 'Distinguer livrable et résultat, explorer',
    texte: 'Distinguer livrable et résultat, repérer une hypothèse non vérifiée et proposer une exploration bornée avant de s’engager.',
    concepts: ['2', '17'],
  },
];

/** Les objectifs qu'un concept sert (liste vide pour le concept 3 et les annexes). */
export function objectifsDe(concept: string): Objectif[] {
  return objectifs.filter((o) => o.concepts.includes(concept));
}
