// Glossaire du cours : reprise de course/glossary.md (mêmes termes, mêmes définitions, mêmes
// termes à éviter) ; à réaligner quand le glossaire du cours change.
// Un seul terme par notion. `concepts` : les concepts qui introduisent le terme ("0".."17", "A1", "A2").
// Les textes admettent *italique* et **gras** (voir src/lib/inline.ts).
export interface Terme {
  /** Ancre stable : /glossaire/#valeur */
  id: string;
  terme: string;
  en: string;
  def: string;
  concepts: string[];
}

export interface AEviter {
  evite: string;
  plutot: string;
  pourquoi: string;
}

export const termes: Terme[] = [
  { id: "scrum", terme: "Scrum", en: "Scrum", def: "Cadre de travail décrit par le Scrum Guide (Schwaber, Sutherland, 2020)", concepts: ["0"] },
  { id: "equipe-scrum", terme: "Équipe Scrum", en: "Scrum Team", def: "Le PO, le Scrum Master et les Developers", concepts: ["0"] },
  { id: "product-owner", terme: "Product Owner (PO)", en: "Product Owner", def: "Personne seule qui répond de la valeur du produit et de l'ordre du backlog", concepts: ["0", "1"] },
  { id: "scrum-master", terme: "Scrum Master", en: "Scrum Master", def: "Personne qui répond de l'efficacité de l'équipe, dont la levée des obstacles", concepts: ["0", "14"] },
  { id: "developers", terme: "Developers", en: "Developers", def: "Les membres de l'équipe qui réalisent l'incrément (ici data engineers et analyste)", concepts: ["0"] },
  { id: "responsabilite", terme: "Responsabilité", en: "accountability", def: "Ce dont répond chacun des trois rôles de l'équipe Scrum (PO, Scrum Master, Developers)", concepts: ["0"] },
  { id: "evenement", terme: "Événement", en: "event", def: "Le sprint et les quatre événements qu'il contient (Sprint Planning, Daily Scrum, revue de sprint, rétrospective)", concepts: ["0"] },
  { id: "artefact", terme: "Artefact", en: "artifact", def: "Ce qui représente le travail ou la valeur : backlog produit, backlog de sprint, incrément", concepts: ["0"] },
  { id: "engagement", terme: "Engagement", en: "commitment", def: "Repère attaché à chaque artefact : objectif produit, objectif de sprint, DoD", concepts: ["0"] },
  { id: "sprint", terme: "Sprint", en: "Sprint", def: "Période fixe d'un mois au plus, qui contient les autres événements", concepts: ["0"] },
  { id: "sprint-planning", terme: "Sprint Planning", en: "Sprint Planning", def: "Événement où l'équipe fixe l'objectif de sprint et où les Developers choisissent, avec le PO, le travail du sprint", concepts: ["0", "15"] },
  { id: "daily-scrum", terme: "Daily Scrum", en: "Daily Scrum", def: "Point quotidien des Developers sur l'avancement vers l'objectif de sprint", concepts: ["0"] },
  { id: "revue-de-sprint", terme: "Revue de sprint", en: "Sprint Review", def: "Événement où l'équipe et les parties prenantes inspectent l'incrément et adaptent le backlog", concepts: ["0", "15"] },
  { id: "retrospective", terme: "Rétrospective", en: "Sprint Retrospective", def: "Événement où l'équipe inspecte sa façon de travailler, DoD comprise", concepts: ["0"] },
  { id: "increment", terme: "Incrément", en: "Increment", def: "Le produit dans un nouvel état utilisable, qui remplit la DoD", concepts: ["0"] },
  { id: "produit", terme: "Produit", en: "product", def: "Ce qui résout un problème d'utilisateurs et leur apporte une valeur", concepts: ["1"] },
  { id: "utilisateur", terme: "Utilisateur", en: "user", def: "Personne qui se sert du produit (un consommateur de données en est un)", concepts: ["1"] },
  { id: "partie-prenante", terme: "Partie prenante", en: "stakeholder", def: "Toute personne ou équipe concernée par le produit (utilisateur, financeur, sponsor, équipe voisine, fournisseur de données)", concepts: ["1", "14"] },
  { id: "valeur", terme: "Valeur", en: "value", def: "Ce que l'utilisateur ou l'organisation gagne (temps, meilleure décision, risque évité)", concepts: ["1"] },
  { id: "livrable", terme: "Livrable", en: "output", def: "Ce que l'équipe produit (une vue, un indicateur, un pipeline)", concepts: ["2"] },
  { id: "resultat", terme: "Résultat", en: "outcome", def: "Ce qui change chez l'utilisateur grâce au livrable", concepts: ["2"] },
  { id: "objectif-produit", terme: "Objectif produit", en: "Product Goal", def: "État futur visé du produit, cible à long terme de l'équipe", concepts: ["0", "2"] },
  { id: "vision-produit", terme: "Vision produit", en: "product vision", def: "Raison d'être du produit à long terme ; absente du Scrum Guide (choix d'école)", concepts: ["2"] },
  { id: "mesure-de-resultat", terme: "Mesure de résultat", en: "outcome metric", def: "Mesure qui dit si on s'approche du résultat visé", concepts: ["2"] },
  { id: "backlog-produit", terme: "Backlog produit", en: "Product Backlog", def: "Liste ordonnée et émergente de ce qui pourrait améliorer le produit", concepts: ["0", "3"] },
  { id: "element-du-backlog", terme: "Élément du backlog", en: "Product Backlog item", def: "Toute entrée du backlog, quel que soit son niveau", concepts: ["0", "3"] },
  { id: "epic-feature-story-tache", terme: "Epic, feature, story, tâche", en: "epic, feature, story, task", def: "Niveaux de découpage d'un besoin, choisis par l'équipe ; la tâche est du travail des Developers, pas un besoin", concepts: ["4"] },
  { id: "user-story", terme: "User story (story)", en: "user story", def: "Un besoin précis d'un utilisateur, vu de lui ; format courant (choix d'école) : en tant que, je veux, afin de", concepts: ["5"] },
  { id: "3c", terme: "3C", en: "Card, Conversation, Confirmation", def: "Une story est une carte, une conversation et une confirmation (Jeffries)", concepts: ["5"] },
  { id: "acteur", terme: "Acteur (d'une story)", en: "actor", def: "Rôle qui fait l'action du « je veux » et y gagne ce que dit le « afin de » (heuristique du cours)", concepts: ["6"] },
  { id: "role", terme: "Rôle", en: "user role", def: "Catégorie d'utilisateurs aux besoins communs", concepts: ["6"] },
  { id: "persona", terme: "Persona", en: "persona", def: "Portrait fictif d'un rôle, construit à partir d'utilisateurs réels (choix d'école, Cooper)", concepts: ["6"] },
  { id: "invest", terme: "INVEST", en: "INVEST", def: "Six critères d'une story bien formée (Wake)", concepts: ["7"] },
  { id: "exploration-bornee", terme: "Exploration bornée (spike)", en: "spike", def: "Travail limité dans le temps pour répondre à une question, sans livrer de fonction", concepts: ["7", "17"] },
  { id: "contrainte", terme: "Contrainte", en: "constraint", def: "Exigence réelle de l'usage, qui ne se négocie pas ; elle s'écrit dans un critère d'acceptation, sans nommer de solution", concepts: ["7", "8"] },
  { id: "mot-flou", terme: "Mot flou", en: "vague term", def: "Mot d'une story ou d'un critère dont le sens n'est pas fixé, qui rend plusieurs lettres d'INVEST douteuses ; le PO le fait préciser par l'utilisateur concerné", concepts: ["7", "15"] },
  { id: "critere-d-acceptation", terme: "Critère d'acceptation", en: "acceptance criterion", def: "Condition vérifiable, propre à une story, qui dit quand elle est faite", concepts: ["8"] },
  { id: "regle-metier", terme: "Règle métier", en: "business rule", def: "Vérité du domaine, valable hors de la story", concepts: ["8"] },
  { id: "given-when-then", terme: "Given/When/Then", en: "Given/When/Then", def: "Forme d'un critère en exemple (issue du BDD, choix d'école)", concepts: ["8"] },
  { id: "fraicheur", terme: "Fraîcheur", en: "freshness", def: "Âge maximal des données au moment où on les lit", concepts: ["1", "8", "12"] },
  { id: "couche", terme: "Couche", en: "layer", def: "Partie empilée du produit (ingestion, transformation, données prêtes, restitution, dans l'exemple du cours)", concepts: ["9"] },
  { id: "tranche-horizontale", terme: "Tranche horizontale", en: "horizontal slice", def: "Une couche entière du produit, qui ne sert pas seule à l'utilisateur", concepts: ["9"] },
  { id: "tranche-verticale", terme: "Tranche verticale", en: "vertical slice", def: "Découpage qui traverse les couches et sert seul à l'utilisateur", concepts: ["9"] },
  { id: "walking-skeleton", terme: "Walking skeleton", en: "walking skeleton", def: "Toute petite implémentation de bout en bout qui relie les composants de l'architecture (Cockburn) ; sert l'équipe, pas une tranche verticale", concepts: ["9"] },
  { id: "patron-de-decoupage", terme: "Patron de découpage", en: "splitting pattern", def: "Façon type de découper une story trop grosse (choix d'école)", concepts: ["9"] },
  { id: "hors-perimetre", terme: "Hors périmètre", en: "out of scope", def: "Ce qu'une story ne fait pas alors qu'on pourrait l'attendre", concepts: ["10"] },
  { id: "dependance", terme: "Dépendance", en: "dependency", def: "Une story ne peut pas être livrée, ou n'a pas de sens, avant une autre story ou le travail d'une autre équipe", concepts: ["10"] },
  { id: "definition-of-done", terme: "Definition of Done (DoD)", en: "Definition of Done", def: "Exigences de qualité que tout élément remplit pour faire partie de l'incrément", concepts: ["0", "11"] },
  { id: "definition-of-ready", terme: "Definition of Ready (DoR)", en: "Definition of Ready", def: "Conditions qu'un élément remplit avant d'être commencé : entrer dans un sprint, ou franchir le début du flux (annexe A2) ; choix d'école", concepts: ["11"] },
  { id: "indicateur", terme: "Indicateur", en: "metric", def: "Valeur calculée par le produit pour ses utilisateurs (locations par quartier)", concepts: ["2", "12"] },
  { id: "definition-d-un-indicateur", terme: "Définition d'un indicateur", en: "metric definition", def: "Ce qu'il compte, sa règle de calcul, son grain, sa période, sa source, sa fraîcheur", concepts: ["12"] },
  { id: "grain", terme: "Grain", en: "grain", def: "Ce que représente une valeur d'un indicateur ou une ligne d'une table (par station, par quartier ; Kimball)", concepts: ["12"] },
  { id: "qualite-des-donnees", terme: "Qualité des données", en: "data quality", def: "Respect de règles mesurables sur des dimensions (six chez DAMA UK : complétude, unicité, fraîcheur, validité, exactitude, cohérence ; la liste est un choix d'école)", concepts: ["12"] },
  { id: "source-de-donnees", terme: "Source de données", en: "data source", def: "Système qui produit les données, avec son propriétaire", concepts: ["12"] },
  { id: "donnee-personnelle", terme: "Donnée personnelle", en: "personal data", def: "Information sur une personne identifiée ou identifiable (RGPD)", concepts: ["12"] },
  { id: "finalite", terme: "Finalité", en: "purpose", def: "Ce pour quoi des données sont demandées, dit avant de les collecter (RGPD)", concepts: ["12"] },
  { id: "minimisation", terme: "Minimisation", en: "data minimisation", def: "Ne demander que les données nécessaires à la finalité (RGPD)", concepts: ["12"] },
  { id: "ordonner", terme: "Ordonner", en: "order", def: "Décider de la place de chaque élément dans le backlog", concepts: ["3", "13"] },
  { id: "pret-a-etre-choisi", terme: "Prêt à être choisi", en: "ready for selection", def: "Élément que l'équipe peut finir en un sprint, une fois précisé (Scrum Guide) ; la DoR en est une version écrite par l'équipe", concepts: ["3", "11"] },
  { id: "cout-du-retard", terme: "Coût du retard", en: "cost of delay", def: "Ce qu'on perd à livrer plus tard (choix d'école)", concepts: ["13"] },
  { id: "wsjf", terme: "WSJF", en: "Weighted Shortest Job First", def: "Coût du retard divisé par la durée, pour ordonner (choix d'école, SAFe)", concepts: ["13"] },
  { id: "moscow", terme: "MoSCoW", en: "MoSCoW", def: "Classement Must, Should, Could, Won't pour une échéance (choix d'école)", concepts: ["13"] },
  { id: "sponsor", terme: "Sponsor", en: "sponsor", def: "Responsable qui porte le budget du produit et porte plus haut les obstacles qui dépassent le PO, sans ordonner le backlog", concepts: ["1", "14"] },
  { id: "obstacle", terme: "Obstacle", en: "impediment", def: "Ce qui bloque l'équipe et qu'elle ne lève pas seule", concepts: ["14"] },
  { id: "escalade", terme: "Escalade", en: "escalation", def: "Porter un obstacle au niveau qui peut le lever", concepts: ["14"] },
  { id: "refinement", terme: "Refinement", en: "Product Backlog refinement", def: "Activité continue qui précise et découpe les éléments du backlog", concepts: ["15"] },
  { id: "objectif-de-sprint", terme: "Objectif de sprint", en: "Sprint Goal", def: "Objectif unique du sprint, fixé au Sprint Planning", concepts: ["0", "15"] },
  { id: "backlog-de-sprint", terme: "Backlog de sprint", en: "Sprint Backlog", def: "Objectif de sprint, éléments choisis et plan des Developers", concepts: ["0", "15"] },
  { id: "story-map", terme: "Story map", en: "story map", def: "Carte du backlog selon le parcours de l'utilisateur (Patton)", concepts: ["16"] },
  { id: "colonne-vertebrale", terme: "Colonne vertébrale", en: "backbone", def: "Ligne des activités de l'utilisateur en haut de la story map, dans l'ordre de son récit ; elle ne s'ordonne pas (Patton)", concepts: ["16"] },
  { id: "tranche-de-version", terme: "Tranche de version", en: "release slice", def: "Ensemble de stories de la carte qui forme une version utile", concepts: ["16"] },
  { id: "mvp", terme: "MVP", en: "minimum viable product", def: "Au sens de Ries : version qui apporte le plus d'apprentissage pour le moindre effort ; l'usage courant en fait la première version", concepts: ["16", "17"] },
  { id: "prevision", terme: "Prévision", en: "forecast", def: "Estimation de ce qui sera fait et quand, tirée de la taille et du rythme mesurés des Developers ; pas une promesse. À ne pas confondre avec la prévision des stations à risque, une fonction du produit (9, 17)", concepts: ["16"] },
  { id: "story-points-velocite", terme: "Story points, vélocité", en: "story points, velocity", def: "Unité d'estimation de la taille, et quantité finie par sprint dans cette unité : pratiques courantes, absentes du Scrum Guide, nommées sans être enseignées (choix d'école)", concepts: ["16"] },
  { id: "mesure-de-succes", terme: "Mesure de succès", en: "success metric", def: "Mesure qui dit si une version a réussi, de préférence un changement de comportement de l'utilisateur (Patton) ; distincte de la mesure de résultat de l'objectif produit", concepts: ["2", "16"] },
  { id: "hypothese", terme: "Hypothèse", en: "assumption", def: "Ce qu'on tient pour vrai sans l'avoir vérifié", concepts: ["2", "17"] },
  { id: "risques-valeur-faisabilite", terme: "Risque de valeur, risque de faisabilité", en: "value risk, feasibility risk", def: "Hypothèse sur ce que l'utilisateur fera du produit et sur ce qu'il sert l'objectif produit ; hypothèse sur ce qu'on peut construire, données comprises (deux des quatre risques de Cagan ; les données : choix du cours)", concepts: ["17"] },
  { id: "prototype", terme: "Prototype", en: "prototype", def: "Version rapide et peu chère d'une idée, faite pour la tester et souvent jetée : maquette montrée à l'utilisateur, ou prototype sur données réelles, utilisé pour de vrai par de vrais utilisateurs (Cagan)", concepts: ["17"] },
  { id: "etat", terme: "État (d'un élément)", en: "status, state", def: "Étape où se trouve un élément dans le tableau de l'équipe (à faire, en cours, fait), réglée dans l'outil ; absent du Scrum Guide ; Jira dit « statut »", concepts: ["A1"] },
  { id: "kanban-dans-scrum", terme: "Kanban dans Scrum", en: "Kanban with Scrum", def: "Équipe qui garde ses sprints et y ajoute des pratiques de flux (*Kanban Guide for Scrum Teams*) : le cours s'applique sans l'annexe A2", concepts: ["A2"] },
  { id: "flux-continu", terme: "Flux continu", en: "continuous flow", def: "Travail sans sprint : un élément commence quand l'équipe a de la place et se livre quand il est fini (terme du cours)", concepts: ["A2"] },
  { id: "travail-en-cours", terme: "Travail en cours", en: "work in progress (WIP)", def: "Éléments commencés et pas finis (*Kanban Guide*)", concepts: ["A2"] },
  { id: "limite-du-travail-en-cours", terme: "Limite du travail en cours", en: "WIP limit", def: "Nombre d'éléments en cours que l'équipe s'autorise (*Kanban Guide for Scrum Teams* ; le *Kanban Guide* dit « contrôler »)", concepts: ["A2"] },
  { id: "definition-of-workflow", terme: "Definition of Workflow", en: "Definition of Workflow", def: "Ce que l'équipe écrit de son flux : ce qu'est un élément, quand il commence et finit, ses états, ses règles de passage (*Kanban Guide*)", concepts: ["A2"] },
  { id: "point-d-engagement", terme: "Point d'engagement", en: "commitment point", def: "Moment où l'on décide de commencer un élément (choix d'école, Kanban University)", concepts: ["A2"] },
  { id: "reapprovisionnement", terme: "Réapprovisionnement", en: "replenishment", def: "Moment régulier où l'on revoit les éléments prêts et choisit ceux qui entreront selon la place (choix d'école, Kanban University)", concepts: ["A2"] },
  { id: "debit", terme: "Débit", en: "throughput", def: "Nombre d'éléments finis par unité de temps (*Kanban Guide*)", concepts: ["A2"] },
  { id: "temps-de-cycle", terme: "Temps de cycle", en: "cycle time", def: "Durée entre le début et la fin d'un élément (*Kanban Guide*)", concepts: ["A2"] },
  { id: "age-d-un-element", terme: "Âge d'un élément", en: "work item age", def: "Durée depuis le début d'un élément encore en cours (*Kanban Guide*)", concepts: ["A2"] },
  { id: "attente-de-niveau-de-service", terme: "Attente de niveau de service", en: "service level expectation (SLE)", def: "Prévision du temps de cycle en durée et probabilité, tirée de l'historique (*Kanban Guide*)", concepts: ["A2"] },
];

export const aEviter: AEviter[] = [
  { evite: "« le métier »", plutot: "l'acteur nommé (Étienne, Maud), « les utilisateurs » ou « les parties prenantes »", pourquoi: "Flou : on ne sait pas qui décide" },
  { evite: "« prioriser » au sens d'ordonner", plutot: "« ordonner » ; « priorité » seulement pour MoSCoW", pourquoi: "Le Scrum Guide parle d'ordre ; « priorité » laisse croire à des ex aequo" },
  { evite: "« équipe de développement »", plutot: "« Developers »", pourquoi: "Terme du Scrum Guide 2017, remplacé en 2020" },
  { evite: "« livrer un sprint »", plutot: "« livrer un incrément »", pourquoi: "Le sprint est une durée, l'incrément un état du produit" },
  { evite: "« ticket »", plutot: "« élément du backlog »", pourquoi: "Terme d'outil, absent du Scrum Guide" },
  { evite: "« KPI », « métrique »", plutot: "« indicateur » (ce que calcule le produit) ou « mesure de résultat » (ce qui juge le produit)", pourquoi: "Deux notions, deux termes" },
];
