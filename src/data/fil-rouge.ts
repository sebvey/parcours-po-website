// Le fil rouge : un cas fictif d'opérateur de vélos en libre-service. Contenu propre au site.
// Les textes admettent *italique*, **gras** et les renvois [[11b]] (voir src/lib/renvois.ts).
export interface Acteur {
  /** Ancre stable : /fil-rouge/#regis */
  id: string;
  nom: string;
  titre: string;
  role: string;
  besoin: string;
  /** Concepts où l'acteur est central. */
  concepts: string[];
}

export interface SourceDonnees {
  id: string;
  source: string;
  contenu: string;
  proprietaire: string;
  fraicheur: string;
}

export const entreprise: string[] = [
  'Un opérateur exploite le service de vélos en libre-service d’une métropole : environ 300 stations, 3 000 vélos et 40 000 abonnés.',
  'La métropole (la collectivité) finance le service par une subvention et attend des indicateurs pour la justifier devant son conseil. Le conseil examine la subvention une fois par an, et la collectivité y présente un bilan.',
  'La DSI de l’opérateur gère les systèmes (bornes, location, appli) et donne les accès à leurs données.',
  'Le comité de direction de l’opérateur réunit notamment la directrice des opérations (Odile) et le DSI (Sid). Leurs désaccords s’y tranchent, comme ceux entre la plateforme et l’appli que leurs PO et Scarlette ne règlent pas.',
];

export const produit: string[] = [
  'Le produit est la plateforme de données de l’opérateur. Elle collecte les données des systèmes dans un entrepôt et en tire des vues, des alertes et des indicateurs pour les métiers de l’opérateur et pour la collectivité. Elle existe depuis environ un an.',
];

export const objectifProduit =
  'Que les stations du centre-ville restent le moins longtemps possible vides aux heures de pointe, grâce à des données à jour pour l’exploitation.';
export const mesureResultat =
  'Sa mesure de résultat : le temps cumulé pendant lequel une station du centre-ville est vide aux heures de pointe, calculé depuis les relevés des stations.';

export const equipe: string[] = [
  'Dans les exemples, le Product Owner, c’est vous, le lecteur.',
  'L’**équipe vélos**, celle de la plateforme, compte deux data engineers (Dana et Diego) et une analyste (Anna), qui travaillent en sprints de deux semaines. Sa Scrum Master, Scarlette, l’est aussi de l’équipe appli.',
];

export const frontieres: string[] = [
  'L’appli des abonnés et ses canaux (notifications, SMS) relèvent de l’**équipe appli**, qui a sa propre PO (Pia) et consomme des données de la plateforme.',
  'Les accès aux données des systèmes relèvent de la DSI.',
];
export const frontieresNote =
  'Ces deux frontières sont des dépendances naturelles : elles reviennent aux concepts [[10:10]], [[11:11]] et [[14:14]].';

export const acteursNote =
  'L’initiale du prénom rappelle le rôle : Dana et Diego (data), Anna (analyste), Scarlette (Scrum Master), Odile (opérations), Étienne (exploitation), Régis (régulateur), Théo (technicien), Maud (maintenance), Abba (abonnée), Charlotte (chargée de mission), Pia (PO de l’appli), Sid (DSI : S, I, D).';

export const acteurs: Acteur[] = [
  { id: 'odile', nom: 'Odile', titre: 'Directrice des opérations', role: 'Encadre l’exploitation (Étienne) et la maintenance (Maud). Sponsor de la plateforme, dont elle porte le budget.', besoin: 'Que la plateforme améliore le service (objectif produit).', concepts: ['2', '14'] },
  { id: 'scarlette', nom: 'Scarlette', titre: 'Scrum Master', role: 'Scrum Master de l’équipe vélos et de l’équipe appli.', besoin: 'Lever les obstacles des deux équipes.', concepts: ['0', '14'] },
  { id: 'regis', nom: 'Régis', titre: 'Régulateur', role: 'Conduit une camionnette et redistribue les vélos entre stations.', besoin: 'Savoir quelles stations vont se vider, pour y aller avant.', concepts: ['9', '17'] },
  { id: 'etienne', nom: 'Étienne', titre: 'Responsable d’exploitation', role: 'Encadre les régulateurs et pilote la flotte au quotidien.', besoin: 'Suivre l’état du réseau dans plusieurs vues (stations vides, vélos en panne, locations du jour).', concepts: ['4', '11', '16'] },
  { id: 'theo', nom: 'Théo', titre: 'Technicien de maintenance', role: 'Répare les vélos sur le terrain et confirme ou infirme sur place une panne signalée.', besoin: 'Préparer sa tournée de réparation à partir des vélos signalés.', concepts: ['6', '10', '15'] },
  { id: 'maud', nom: 'Maud', titre: 'Responsable maintenance', role: 'Encadre les techniciens.', besoin: 'Qu’un vélo signalé en panne ne soit plus louable.', concepts: ['5', '10', '13'] },
  { id: 'abba', nom: 'Abba', titre: 'Abonnée (persona)', role: 'Persona des abonnés sans l’appli, avec un téléphone basique (un tiers des abonnés), construit à partir d’abonnés interrogés.', besoin: 'Savoir avant de partir s’il reste un vélo à sa station.', concepts: ['6', '7', '8'] },
  { id: 'charlotte', nom: 'Charlotte', titre: 'Chargée de mission mobilité', role: 'Côté collectivité, suit le service que celle-ci finance.', besoin: 'Justifier la subvention au conseil (locations par quartier).', concepts: ['10', '12', '13'] },
  { id: 'pia', nom: 'Pia', titre: 'PO de l’équipe appli', role: 'Porte l’appli des abonnés.', besoin: 'Recevoir de la plateforme les données qu’affiche l’appli.', concepts: ['13', '14'] },
  { id: 'sid', nom: 'Sid', titre: 'DSI', role: 'Gère les systèmes et leurs accès.', besoin: 'Donner les accès aux données dans les règles.', concepts: ['11', '12', '14'] },
];

export const sources: SourceDonnees[] = [
  { id: 'releves-stations', source: 'Relevés des stations', contenu: 'Nombre de vélos à quai par station et, pour chacun, s’il est louable.', proprietaire: 'Système des bornes, via la DSI', fraicheur: 'En continu. La plateforme se rafraîchit toutes les 5 minutes et garde l’historique depuis son lancement (environ un an). Relevés en double ([[11]]).' },
  { id: 'locations', source: 'Table des locations', contenu: 'Chaque location : vélo, abonné (identifiant), stations de départ et d’arrivée, heures.', proprietaire: 'Système de location, via la DSI', fraicheur: 'Historique sur plusieurs années dans le système de location. Accès demandé, pas encore obtenu ([[11b]]) ; la DSI demande de justifier chaque colonne demandée.' },
  { id: 'signalements', source: 'Signalements de pannes', contenu: 'Vélo signalé, par l’abonné dans l’appli.', proprietaire: 'Équipe appli', fraicheur: 'Les signalements par téléphone ne sont pas saisis dans l’appli.' },
  { id: 'abonnes', source: 'Abonnés', contenu: 'Nom et coordonnées de l’abonné, abonnement, station favorite.', proprietaire: 'Équipe appli', fraicheur: '' },
  { id: 'quartiers', source: 'Référentiel des quartiers', contenu: 'Quartier de chaque station.', proprietaire: 'La collectivité', fraicheur: '' },
  { id: 'meteo', source: 'Météo', contenu: 'Pluie, par heure.', proprietaire: 'Service externe', fraicheur: 'Source envisagée, pas encore collectée.' },
];
