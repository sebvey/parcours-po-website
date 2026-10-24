// La lecture rapide de chaque domaine, et celle de l'annexe A2. Contenu propre au site.
// Une lecture enchaîne des sections des concepts de son domaine, au moins une par concept, et
// aucune d'un autre domaine : ce qu'elle suppose déjà lu va dans `avant`.
// `ref` désigne une section d'un concept : "9a" -> /concepts/09/#9a (l'ancre existe dans la page).
// `minutes` : lecture attentive des sections listées (environ 200 mots par minute), plus
// une minute et demie par concept pour le chapeau et le schéma.
export interface Etape {
  ref: string;
  titre: string;
  pourquoi: string;
}
export interface Lecture {
  /** Numéro du domaine (1..7), ou 0 pour la lecture d'annexe. */
  domaine: number;
  /** Titre propre, pour une lecture d'annexe seulement (un domaine donne son titre). */
  titre?: string;
  /** La situation de départ, pour une lecture d'annexe seulement. */
  situation?: string;
  minutes: number;
  etapes: Etape[];
  /** Ce que la lecture suppose déjà lu. */
  avant?: string;
}

export const lectures: Lecture[] = [
  {
    domaine: 1,
    minutes: 17,
    etapes: [
      { ref: '0a', titre: 'Le cadre', pourquoi: 'Qui fait quoi dans une équipe Scrum, les quatre événements du sprint et les trois artefacts.' },
      { ref: '0b', titre: 'Sprint et incrément', pourquoi: 'Une durée d’un côté, un état du produit de l’autre : deux notions qu’on confond souvent.' },
      { ref: '1a', titre: 'Le produit : problème, utilisateurs, valeur', pourquoi: 'Décrire ce que le produit change, et pour qui, avant de parler de technique.' },
      { ref: '1b', titre: 'Qui tranche quoi', pourquoi: 'Ce qui revient au PO et ce qui revient aux Developers : le cœur du rôle.' },
      { ref: '2a', titre: 'Livrable et résultat', pourquoi: 'Livrer ne suffit pas : seul le résultat dit si la valeur est là.' },
      { ref: '2b', titre: 'L’objectif produit', pourquoi: 'L’état futur que l’équipe vise, un seul à la fois, formulé comme un résultat.' },
      { ref: '2c', titre: 'Choisir une mesure de résultat', pourquoi: 'Partir du but, chercher le signal, puis construire la mesure.' },
    ],
  },
  {
    domaine: 2,
    minutes: 24,
    etapes: [
      { ref: '3a', titre: 'Une liste ordonnée, émergente', pourquoi: 'Une place pour chaque élément, et un contenu qui change avec ce que l’équipe apprend.' },
      { ref: '4b', titre: 'Feature ou story : compter les « je veux »', pourquoi: 'Le niveau d’un besoin se lit au nombre de « je veux » qu’il reste à livrer.' },
      { ref: '5a', titre: 'Les trois parties et les 3C', pourquoi: 'La forme « en tant que, je veux, afin de », et pourquoi la phrase n’est qu’une carte.' },
      { ref: '5b', titre: 'Le « afin de » et les « pourquoi ? » successifs', pourquoi: 'Trouver la vraie raison du besoin en la demandant à l’utilisateur.' },
      { ref: '6a', titre: 'L’acteur de la story', pourquoi: 'Choisir un rôle plutôt qu’un prénom, et le vérifier auprès des utilisateurs.' },
      { ref: '7a', titre: 'Les six lettres et le mot flou', pourquoi: 'Six questions pour juger la story, et un réflexe quand plusieurs réponses restent floues.' },
      { ref: '7b', titre: 'N : le besoin, pas la solution', pourquoi: 'Garder le besoin dans la story, et mettre les contraintes réelles dans un critère.' },
      { ref: '8a', titre: 'Critère ou règle métier', pourquoi: 'Ce qui est propre à la story et ce qui vaut au-delà, donc doit être fixé avant.' },
      { ref: '8b', titre: 'Given/When/Then, une variable à la fois', pourquoi: 'Une forme simple pour écrire des critères qui restent lisibles.' },
    ],
  },
  {
    domaine: 3,
    minutes: 14,
    avant: 'Suppose de savoir écrire une story et ses critères (domaine 2).',
    etapes: [
      { ref: '9a', titre: 'La tranche verticale', pourquoi: 'Juger une tranche à ce qu’elle apporte à l’utilisateur, pas aux couches qu’elle traverse.' },
      { ref: '9b', titre: 'Les patrons de découpage', pourquoi: 'Des catalogues de patrons pour trouver où couper une story trop grosse.' },
      { ref: '10a', titre: 'Le hors périmètre', pourquoi: 'Dire ce que la story ne fait pas, et savoir où va chaque demande écartée.' },
      { ref: '10b', titre: 'Les dépendances', pourquoi: 'Écrire la dépendance, puis ordonner ou s’accorder selon qu’elle reste dans l’équipe ou non.' },
      { ref: '11a', titre: 'La Definition of Done', pourquoi: 'Ce que toute story remplit pour compter dans l’incrément, à ne pas confondre avec un critère.' },
      { ref: '11b', titre: 'La Definition of Ready', pourquoi: 'Un repère d’entrée dans le sprint, utile s’il ne devient pas une barrière.' },
    ],
  },
  {
    domaine: 4,
    minutes: 7,
    etapes: [
      { ref: '12a', titre: 'Définir un indicateur', pourquoi: 'Une définition écrite pour que deux personnes calculent le même nombre.' },
      { ref: '12b', titre: 'La qualité des données', pourquoi: 'Traduire « de qualité » en règles mesurables, et les ranger au bon endroit.' },
      { ref: '12c', titre: 'Accès et données personnelles', pourquoi: 'Demander les colonnes qui servent une finalité dite, et reconnaître une donnée personnelle.' },
    ],
  },
  {
    domaine: 5,
    minutes: 12,
    etapes: [
      { ref: '13a', titre: 'Ordonner, c’est décider', pourquoi: 'Une place par demande, avec les critères qui la justifient.' },
      { ref: '13b', titre: 'Valeur et coût du retard', pourquoi: 'Une demande vaut aussi selon le moment où elle arrive.' },
      { ref: '13c', titre: 'MoSCoW pour une échéance', pourquoi: 'Classer ce qui doit être là à une date, sans toucher à l’ordre du backlog.' },
      { ref: '14a', titre: 'Qui sont-elles', pourquoi: 'Cinq familles de parties prenantes, dont une qu’on oublie.' },
      { ref: '14b', titre: 'Arbitrer et dire non avec l’objectif produit', pourquoi: 'Dire non sans fermer la porte : pas maintenant, pourquoi, et où est la demande.' },
      { ref: '14c', titre: 'Escalader un obstacle', pourquoi: 'Quand saisir quelqu’un d’autre, et pourquoi un désaccord sur l’ordre n’est pas un obstacle.' },
    ],
  },
  {
    domaine: 6,
    minutes: 14,
    avant: 'Suppose de connaître la DoR et la DoD (concept 11).',
    etapes: [
      { ref: '15a', titre: 'Le refinement', pourquoi: 'Préparer une story avant qu’elle soit choisie, sans réunion imposée.' },
      { ref: '15b', titre: 'Sprint Planning et objectif de sprint', pourquoi: 'Choisir le travail du sprint pour un pourquoi.' },
      { ref: '15c', titre: 'La revue de sprint', pourquoi: 'Inspecter l’incrément avec les parties prenantes, puis adapter le backlog.' },
      { ref: '16a', titre: 'La carte', pourquoi: 'Voir le parcours de l’utilisateur et ranger les stories pour décider ce qui entre dans la version.' },
      { ref: '16b', titre: 'La tranche de version', pourquoi: 'Proposer une première version utile et son résultat visé, plutôt qu’une date pour tout.' },
      { ref: '16c', titre: 'Pour quand ?', pourquoi: 'Répondre par une fourchette fondée sur les Developers, qui se revoit et ne se promet pas.' },
    ],
  },
  {
    domaine: 7,
    minutes: 9,
    avant: 'Suppose de distinguer livrable et résultat, et de connaître l’objectif produit (concept 2).',
    etapes: [
      { ref: '17a', titre: 'Savoir ou supposer', pourquoi: 'Séparer ce qui est vérifié de ce que tout le monde répète, et ranger les suppositions en valeur et faisabilité.' },
      { ref: '17b', titre: 'Explorer à moindre coût', pourquoi: 'Décider l’exploration avant de la lancer, puis choisir la façon d’explorer.' },
      { ref: '17c', titre: 'Accepter un résultat incertain', pourquoi: 'Fixer après l’exploration le niveau à atteindre, par celui qui paie les erreurs.' },
    ],
  },
  {
    domaine: 0,
    titre: 'Mon équipe travaille sans sprint',
    situation: 'Votre équipe est en flux continu, sans sprint : ce qui reste valable du cours, et ce qui change.',
    minutes: 5,
    avant: 'Suppose de connaître la DoR et la DoD (concept 11), le Sprint Planning (concept 15) et la prévision (concept 16).',
    etapes: [
      { ref: 'A2a', titre: 'Tirer l’élément, la DoR au début du flux', pourquoi: 'Sans Sprint Planning, une place libre sous la limite déclenche le prochain élément.' },
      { ref: 'A2b', titre: 'Sans objectif de sprint, ce qui donne la direction', pourquoi: 'La direction vient de l’objectif produit et de l’ordre du backlog.' },
      { ref: 'A2c', titre: 'Sans revue de sprint, inspecter ce qui est livré', pourquoi: 'Livrer n’attend plus la revue, mais inspecter ce qu’on a livré reste nécessaire.' },
      { ref: 'A2d', titre: 'Prévoir en flux', pourquoi: 'Le temps de cycle donne une durée et une probabilité, pas une promesse.' },
    ],
  },
];

/** La lecture d'un domaine (ou des annexes, pour 0). */
export function lectureDe(domaine: number): Lecture | undefined {
  return lectures.find((l) => l.domaine === domaine);
}
