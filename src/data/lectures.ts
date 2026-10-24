// Parcours de lecture par situation. Contenu propre au site.
// `ref` désigne une section d'un concept : "9a" -> /concepts/09/#9a (l'ancre existe dans la page).
// `minutes` : lecture attentive des sections listées (environ 200 mots par minute), plus
// une minute et demie par concept pour le chapeau et le schéma.
export interface Etape {
  ref: string;
  titre: string;
  pourquoi: string;
}
export interface Lecture {
  id: string;
  titre: string;
  situation: string;
  minutes: number;
  etapes: Etape[];
  apres: string;
  /** Ce que le parcours suppose déjà lu. */
  avant?: string;
}

export const lectures: Lecture[] = [
  {
    id: 'decouvrir',
    titre: 'Je découvre le métier de PO data',
    situation: 'Vous devenez Product Owner d’un produit data et vous voulez comprendre le cadre, votre rôle et ce que vous cherchez à obtenir, avant d’entrer dans le détail.',
    minutes: 15,
    etapes: [
      { ref: '0a', titre: 'Le cadre', pourquoi: 'Qui fait quoi dans une équipe Scrum, les quatre événements du sprint et les trois artefacts.' },
      { ref: '0b', titre: 'Sprint et incrément', pourquoi: 'Une durée d’un côté, un état du produit de l’autre : deux notions qu’on confond souvent.' },
      { ref: '1a', titre: 'Le produit : problème, utilisateurs, valeur', pourquoi: 'Décrire ce que le produit change, et pour qui, avant de parler de technique.' },
      { ref: '1b', titre: 'Qui tranche quoi', pourquoi: 'Ce qui revient au PO et ce qui revient aux Developers : le cœur du rôle.' },
      { ref: '2a', titre: 'Livrable et résultat', pourquoi: 'Livrer ne suffit pas : seul le résultat dit si la valeur est là.' },
      { ref: '2b', titre: 'L’objectif produit', pourquoi: 'L’état futur que l’équipe vise, un seul à la fois, formulé comme un résultat.' },
    ],
    apres: 'Vous saurez situer le PO dans une équipe Scrum, dire ce qui lui revient et ce qui revient aux Developers, distinguer un livrable d’un résultat et reconnaître un objectif produit bien formulé.',
  },
  {
    id: 'premiere-story',
    titre: 'J’écris ma première story',
    situation: 'Vous avez un besoin à mettre dans le backlog et vous voulez l’écrire de façon qu’on puisse le comprendre, le tester et le discuter.',
    minutes: 20,
    etapes: [
      { ref: '5a', titre: 'Les trois parties et les 3C', pourquoi: 'La forme « en tant que, je veux, afin de », et pourquoi la phrase n’est qu’une carte.' },
      { ref: '5b', titre: 'Le « afin de » et les « pourquoi ? » successifs', pourquoi: 'Trouver la vraie raison du besoin en la demandant à l’utilisateur.' },
      { ref: '6a', titre: 'L’acteur de la story', pourquoi: 'Choisir un rôle plutôt qu’un prénom, et le vérifier auprès des utilisateurs.' },
      { ref: '7a', titre: 'Les six lettres et le mot flou', pourquoi: 'Six questions pour juger la story, et un réflexe quand plusieurs réponses restent floues.' },
      { ref: '7b', titre: 'N : le besoin, pas la solution', pourquoi: 'Garder le besoin dans la story, et mettre les contraintes réelles dans un critère.' },
      { ref: '8a', titre: 'Critère ou règle métier', pourquoi: 'Ce qui est propre à la story et ce qui vaut au-delà, donc doit être fixé avant.' },
      { ref: '8b', titre: 'Given/When/Then, une variable à la fois', pourquoi: 'Une forme simple pour écrire des critères qui restent lisibles.' },
    ],
    apres: 'Vous saurez écrire une story avec son acteur et sa raison, la juger avec INVEST, et lui donner des critères d’acceptation vérifiables, en repérant les règles métier qui ne sont pas encore fixées.',
  },
  {
    id: 'decouper',
    titre: 'Je découpe une story trop grosse',
    situation: 'Une story ne tient pas dans un sprint, ou l’équipe n’arrive pas à s’accorder sur ce qu’elle contient : il faut la découper sans la vider de sa valeur.',
    minutes: 10,
    avant: 'Suppose de savoir écrire une story et ses critères (parcours « J’écris ma première story »).',
    etapes: [
      { ref: '9a', titre: 'La tranche verticale', pourquoi: 'Juger une tranche à ce qu’elle apporte à l’utilisateur, pas aux couches qu’elle traverse.' },
      { ref: '9b', titre: 'Les patrons de découpage', pourquoi: 'Des catalogues de patrons pour trouver où couper une story trop grosse.' },
      { ref: '10a', titre: 'Le hors périmètre', pourquoi: 'Dire ce que la story ne fait pas, et savoir où va chaque demande écartée.' },
      { ref: '10b', titre: 'Les dépendances', pourquoi: 'Écrire la dépendance, puis ordonner ou s’accorder selon qu’elle reste dans l’équipe ou non.' },
    ],
    apres: 'Vous saurez reconnaître une tranche qui sert seule, choisir un patron pour découper, écrire ce qui reste hors périmètre et traiter une dépendance, dans l’équipe ou envers une autre.',
  },
  {
    id: 'refinement-sprint',
    titre: 'Je prépare un refinement et un sprint',
    situation: 'Un refinement ou un Sprint Planning approche, et vous voulez arriver avec des stories assez précises et un objectif clair.',
    minutes: 10,
    avant: 'Suppose de connaître la forme d’une story et ses critères.',
    etapes: [
      { ref: '15a', titre: 'Le refinement', pourquoi: 'Préparer une story avant qu’elle soit choisie, sans réunion imposée.' },
      { ref: '11b', titre: 'La Definition of Ready', pourquoi: 'Un repère d’entrée dans le sprint, utile s’il ne devient pas une barrière.' },
      { ref: '15b', titre: 'Sprint Planning et objectif de sprint', pourquoi: 'Choisir le travail du sprint pour un pourquoi.' },
      { ref: '11a', titre: 'La Definition of Done', pourquoi: 'Ce que toute story remplit pour compter dans l’incrément, à ne pas confondre avec un critère.' },
    ],
    apres: 'Vous saurez préparer des stories avec l’utilisateur concerné, vous servir d’une DoR sans en faire une barrière, proposer un objectif de sprint et distinguer la DoD d’un critère d’acceptation.',
  },
  {
    id: 'ordre-backlog',
    titre: 'J’ordonne mon backlog et je le défends',
    situation: 'Plusieurs demandes se disputent la première place, et des parties prenantes veulent savoir pourquoi la leur n’est pas devant.',
    minutes: 12,
    etapes: [
      { ref: '13a', titre: 'Ordonner, c’est décider', pourquoi: 'Une place par demande, avec les critères qui la justifient.' },
      { ref: '13b', titre: 'Valeur et coût du retard', pourquoi: 'Une demande vaut aussi selon le moment où elle arrive.' },
      { ref: '13c', titre: 'MoSCoW pour une échéance', pourquoi: 'Classer ce qui doit être là à une date, sans toucher à l’ordre du backlog.' },
      { ref: '14a', titre: 'Qui sont-elles', pourquoi: 'Cinq familles de parties prenantes, dont une qu’on oublie.' },
      { ref: '14b', titre: 'Arbitrer et dire non avec l’objectif produit', pourquoi: 'Dire non sans fermer la porte : pas maintenant, pourquoi, et où est la demande.' },
      { ref: '14c', titre: 'Escalader un obstacle', pourquoi: 'Quand saisir quelqu’un d’autre, et pourquoi un désaccord sur l’ordre n’est pas un obstacle.' },
    ],
    apres: 'Vous saurez justifier la place de chaque demande, raisonner en coût du retard, répondre à une partie prenante en gardant sa demande visible, et escalader un obstacle sans vous défaire de l’ordre du backlog.',
  },
  {
    id: 'indicateur',
    titre: 'Je définis un indicateur et je cadre les données',
    situation: 'On vous demande un indicateur, ou l’équipe a besoin de données qu’elle n’a pas : il faut dire ce qu’on calcule, avec quelles données et à quelles conditions.',
    minutes: 7,
    etapes: [
      { ref: '12a', titre: 'Définir un indicateur', pourquoi: 'Une définition écrite pour que deux personnes calculent le même nombre.' },
      { ref: '12b', titre: 'La qualité des données', pourquoi: 'Traduire « de qualité » en règles mesurables, et les ranger au bon endroit.' },
      { ref: '12c', titre: 'Accès et données personnelles', pourquoi: 'Demander les colonnes qui servent une finalité dite, et reconnaître une donnée personnelle.' },
    ],
    apres: 'Vous saurez écrire la définition d’un indicateur et repérer ce qui manque, formuler des règles de qualité mesurables et justifier chaque colonne demandée par une finalité.',
  },
  {
    id: 'idee-vaut-le-coup',
    titre: 'Je doute qu’une idée vaille le coup',
    situation: 'Une idée séduisante arrive, mais personne ne sait vraiment si elle servira ni si on sait la construire : avant de l’ordonner, il faut savoir ce qu’on suppose.',
    minutes: 10,
    etapes: [
      { ref: '2a', titre: 'Livrable et résultat', pourquoi: 'Se demander ce que l’idée change pour l’utilisateur, pas seulement ce qu’on livre.' },
      { ref: '2b', titre: 'L’objectif produit', pourquoi: 'Mesurer l’idée à l’état futur que l’équipe vise.' },
      { ref: '17a', titre: 'Savoir ou supposer', pourquoi: 'Séparer ce qui est vérifié de ce que tout le monde répète, et ranger les suppositions en valeur et faisabilité.' },
      { ref: '17b', titre: 'Explorer à moindre coût', pourquoi: 'Décider l’exploration avant de la lancer, puis choisir la façon d’explorer.' },
    ],
    apres: 'Vous saurez relier une idée à l’objectif produit, dire ce qui est su et ce qui est supposé, et choisir une exploration bornée plutôt que de construire pour voir.',
  },
  {
    id: 'pour-quand',
    titre: 'On me demande « pour quand ? »',
    situation: 'Une partie prenante veut une date. La section 16c donne la réponse ; les deux autres montrent sur quoi elle s’appuie.',
    minutes: 7,
    avant: 'Suppose de connaître le refinement et le Sprint Planning (concept 15).',
    etapes: [
      { ref: '16c', titre: 'Pour quand ?', pourquoi: 'Répondre par une fourchette fondée sur les Developers, qui se revoit et ne se promet pas.' },
      { ref: '16b', titre: 'La tranche de version', pourquoi: 'Proposer une première version utile et son résultat visé, plutôt qu’une date pour tout.' },
      { ref: '16a', titre: 'La carte', pourquoi: 'Voir le parcours de l’utilisateur et ranger les stories pour décider ce qui entre dans la version.' },
    ],
    apres: 'Vous saurez répondre par une fourchette révisable, dire ce qui la fait bouger et proposer une première version plutôt qu’une date ferme.',
  },
  {
    id: 'sans-sprint',
    titre: 'Mon équipe travaille sans sprint',
    situation: 'Votre équipe est en flux continu, sans sprint : vous voulez savoir ce qui reste valable du cours et ce qui change.',
    minutes: 5,
    avant: 'Suppose de connaître la DoR et la DoD (concept 11), le Sprint Planning (concept 15) et la prévision (concept 16).',
    etapes: [
      { ref: 'A2a', titre: 'Tirer l’élément, la DoR au début du flux', pourquoi: 'Sans Sprint Planning, une place libre sous la limite déclenche le prochain élément.' },
      { ref: 'A2b', titre: 'Sans objectif de sprint, ce qui donne la direction', pourquoi: 'La direction vient de l’objectif produit et de l’ordre du backlog.' },
      { ref: 'A2c', titre: 'Sans revue de sprint, inspecter ce qui est livré', pourquoi: 'Livrer n’attend plus la revue, mais inspecter ce qu’on a livré reste nécessaire.' },
      { ref: 'A2d', titre: 'Prévoir en flux', pourquoi: 'Le temps de cycle donne une durée et une probabilité, pas une promesse.' },
    ],
    apres: 'Vous saurez dire ce qui ne change pas sans sprint, comment l’équipe tire son travail, d’où vient la direction et comment prévoir avec le temps de cycle.',
  },
];
