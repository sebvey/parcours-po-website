# Journal du site

Le site est versionné `MAJOR.MINOR.PATCH`, avec le MAJOR du cours (voir `README.md`). Chaque version
dit sur quelle version du cours elle est alignée.

## Non publié

Pied de page (T-119) : « Ce site accompagne un cours donné par un agent IA · À propos » à gauche,
licence et versions à droite, plus discrètes ; le nom du site en sort. La phrase de fin des pages de
domaine et de concept est retirée.

Durée de conversation avec l'agent (T-118), d'après `duree` des fiches de domaine (cours, non publié) :
- Page Domaines : barre du parcours en tête (un segment en bulle par domaine, proportionnel à sa
  durée, total au bout) et bulle « ≈ 1 h 30 avec l'agent » sur chaque bloc de domaine.
- Page de domaine : bulle de durée, nombre de sessions et de concepts sous le chapeau.
- Composants `Bulle` et `Parcours` ; empreintes des 7 pages de domaine inscrites.

## 2.3.1, 2026-10-26 (aligné sur le cours 2.4.1)

Mise en forme des énumérations nommées :
- Concept 0 : les trois sujets du Sprint Planning (Pourquoi, Quoi, Comment) et les responsabilités
  du PO et des Developers passent en liste ; les noms sont en gras. Concept 15 : mêmes noms en gras.
- `docs/recipes.md` : règle d'écriture des énumérations.

## 2.3.0, 2026-10-26 (aligné sur le cours 2.4.1)

Réalignement sur les cours 2.4.0 et 2.4.1 (T-113) :
- `parcoursPo.coursVersion` 2.4.1 ; empreintes des 20 pages de concept et des 7 pages de domaine
  inscrites (fiches changées : concepts 3, 7, 8, 9, 10, 12, 14 et 17).
- Concept 9 : en 9b1, un besoin trop gros pour un sprint est un epic (concept 4), et il se
  découpe ici (la page disait « une story trop grosse »).
- Autres fiches : situations, réponses attendues et erreurs fréquentes de la banque d'exemples,
  hors des parties publiques ; pages inchangées.

## 2.2.1, 2026-10-26 (aligné sur le cours 2.3.1)

Réalignement sur le cours 2.3.1 (T-111) :
- `parcoursPo.coursVersion` 2.3.1 ; empreintes des 20 pages de concept et des 7 pages de domaine
  inscrites (fiches de sources changées : concepts 7, 8 et 13).
- Concepts 7 et 8 : la règle non fixée que le PO fait fixer renvoie à 7a2, plus au concept 4
  (positions du cours, sources).
- Concept 13 : Odile dite directrice des opérations, qui encadre la maintenance (sources, non
  vérifié).

## 2.2.0, 2026-10-26 (aligné sur le cours 2.3.0)

Réalignement sur le cours 2.3.0 (T-110) :
- `parcoursPo.coursVersion` 2.3.0 ; empreintes des 20 pages de concept et des 7 pages de domaine
  inscrites (fiches changées : concepts 2, 4, 5, 7, 9, 13, 14 et A1).
- Concept 7 : I d'INVEST couvre aussi le travail d'une autre équipe dont la story a besoin, en 7a1
  et dans les positions du cours (choix du cours ; chez Wake, I ne vise que les autres stories).
- Autres fiches : corrections de renvois et de formulations dans la banque d'exemples, hors des
  parties publiques ; pages inchangées.

## 2.1.1, 2026-10-26 (aligné sur le cours 2.2.1)

Réalignement sur le cours 2.2.1 (T-107) :
- `parcoursPo.coursVersion` 2.2.1 ; empreintes des 20 pages de concept et des 7 pages de domaine
  inscrites (fiches changées : concepts 0, 4, 6, 7, 8, 9, 11, 13, 14, 17 et A2).
- Aucun changement de page : le cours 2.2.1 ne retire que des consignes de schéma adressées au prof,
  hors des parties publiques.

## 2.1.0, 2026-10-26 (aligné sur le cours 2.2.0)

Réalignement sur le cours 2.2.0 (T-099) :
- `parcoursPo.coursVersion` 2.2.0 ; empreintes des 20 pages de concept et des 7 pages de domaine
  inscrites.
- Concept 0 : 0a1 et 0a2 détaillés comme dans le cours (ce dont répond chaque responsabilité ; but,
  participants et durée de chaque événement), 0b dit qu'un élément hors DoD retourne au backlog ;
  une position du cours (rétrospective sans les parties prenantes) et neuf affirmations sourcées
  ajoutées.
- Concepts 1, 3, 4, 5, 7, 8, 9, 11, 12, 14, 15, 17, A1 et A2 : précisions reportées des fiches
  (quantité choisie au Sprint Planning, « je veux » défini, forme « En tant que… », exploration
  bornée définie, renvois corrigés, l'équipe Scrum distincte des parties prenantes, exigence de DoD
  propre à une sorte de travail, DoR définie en A2a, rôles du réglage de l'outil en A1a).
- Glossaire : « Élément du backlog » rattaché aux concepts 0 et 3.

## 2.0.0, 2026-10-26 (aligné sur le cours 2.1.0)

Mise en ligne (T-050g) :
- le site quitte l'aperçu : version 2.0.0, MAJOR égal à celui du cours ; les pages ne demandent
  plus aux moteurs de ne pas les indexer.

## 0.10.1, 2026-10-25 (aligné sur le cours 2.1.0)

Numéros de concept en pastilles (T-072) :
- Fil rouge (« Central aux concepts ») et Glossaire (concepts de chaque terme) : les numéros
  soulignés séparés par des virgules deviennent les pastilles de la page Sources, titre du
  concept en infobulle.

## 0.10.0, 2026-10-25 (aligné sur le cours 2.1.0)

Une page par domaine, dans l'ordre de lecture (T-071b) :
- `/domaines/N/` : le problème et d'où l'on vient, où l'on va (projection de
  `course/domains/N-slug.md`), puis ses concepts en tuiles dépliables, chacune avec une accroche
  d'une ligne ; empreinte de la fiche dans `alignement`, contrôlée par `check-alignment` ;
- ordre de lecture : domaine 1, concepts 0 à 2, domaine 2, concepts 3 à 8… ; les cartes
  précédent / suivant et les flèches de la barre d'onglets passent par la page du domaine ;
- `/domaines/` devient la carte : chaque domaine en un bloc, en-tête (ce qu'on sait à la fin) qui mène à sa
  page et ses concepts en tuiles dépliables à l'intérieur ; les ancres `#domaine-N` restent valides ;
- le surtitre d'une page de concept mène à la page de son domaine ;
- les boutons « Lire » (tuiles de concept) et « Ouvrir » (page Sources) deviennent une flèche, icône
  `src/icons/fleche.svg`, la même que celle de l'en-tête d'un domaine ;
- accueil : « Commencer : domaine 1 » à la place de « Commencer : concept 0 » ;
- alignement sur le cours 2.1.0 : pages de concept réestampillées (fiches inchangées).

## 0.9.1, 2026-10-25 (aligné sur le cours 2.0.0)

Icônes (T-070) :
- une icône par fichier dans `src/icons/` (loupe, soleil, lune, marque), importée comme composant :
  la page construite garde le SVG en ligne, à la couleur du texte ; règles de dessin dans
  `src/icons/README.md` ;
- marque du site redessinée au trait (un backlog : trois cartes rangées par priorité), devant le
  nom du site, et favicon assorti, qui suit le thème clair ou sombre du système ;
- `/dev/composants/` : rubrique Icônes, toutes les icônes côte à côte.

## 0.9.0, 2026-10-25 (aligné sur le cours 2.0.0)

En-tête sur une ligne au bureau (T-069) :
- la recherche devient un bouton rond à loupe, à côté du bouton de thème, qui ouvre la page
  Recherche ; au téléphone aussi, à côté de Menu (le champ de l'en-tête et le lien texte
  disparaissent) ;
- « Accueil » quitte le menu : le nom du site y mène, précédé du favicon ; sous 26rem, le favicon
  seul tient lieu de nom ;
- « À propos » passe dans le pied de page ;
- le menu replié prend le relais sous 58rem (au lieu de 52rem), largeur de l'en-tête sur une
  ligne ;
- page Recherche : le champ reçoit le focus à l'arrivée (l'attribut `autofocus` de Pagefind
  restait sans effet).

## 0.8.1, 2026-10-25 (aligné sur le cours 2.0.0)

- Concept 14 (T-068) : empreintes d'alignement réinscrites. La fiche de sources du cours n'avait
  changé que par un renvoi interne renommé (« L'entreprise » devenue « L'opérateur ») ; la page
  ne change pas.

## 0.8.0, 2026-10-25 (aligné sur le cours 2.0.0)

Outillage et documentation pour les développeurs (T-050j) :
- **`npm run verify`** : build avec le préfixe d'adresse en ligne, liens et ancres internes,
  captures de chaque page au bureau et à 375 px en clair et en sombre, échec sur un défilement
  horizontal ou une erreur JavaScript, contrôle du style du texte rendu, alignement sur le cours en
  avertissement (Playwright en dépendance de développement).
- **Page `/dev/composants/`** (et `/dev/sommaire-compact/`) : chaque composant rendu avec son code
  d'usage, hors menu et hors index.
- **Documentation** : `docs/recipes.md`, `docs/data-map.md`, `docs/pitfalls.md`, `CLAUDE.md` ;
  README allégé ; en-tête (rôle, props, invariant) dans chaque composant et fichier de `src/lib/`
  et `src/data/`.
- Corrections trouvées par `verify` : une adresse longue débordait à 375 px dans l'onglet Sources
  (concept 6) ; les flèches de précédent et suivant sont cachées aux lecteurs d'écran ; la page 404
  n'annonce plus d'adresse canonique.
- Les pages hors index (recherche, 404, démonstration) demandent aussi aux moteurs de ne pas les
  indexer ; le middleware typographique ne touche plus le code (`pre`, `code`).

## 0.7.0, 2026-10-25 (aligné sur le cours 2.0.0)

T-065 :
- **Thème clair / sombre** : un bouton dans l'en-tête bascule le thème et mémorise le choix
  (sinon, la préférence du système) ; le thème est appliqué avant l'affichage.
- **À propos** : réduite au cours donné par un agent IA, à la fabrication du site (agentique, à
  partir de la base de connaissances du cours), aux versions (liste plus lisible, qui ne dit plus
  à tort que site et cours partagent le premier chiffre pendant l'aperçu) et à la licence ; « pour
  qui », les pastilles et le cas fictif, déjà ailleurs, sont retirés. La note en bas des pages de
  concept suit.
- **Consensus ou école** : sommaire collant (les trois natures et leur nombre de positions) ;
  consensus et choix du cours en groupes dépliables, avec « Tout déplier » ; choix d'école en
  liste à plat triée par auteur (la plupart des auteurs n'ont qu'une position).
- **Glossaire** : sommaire collant des lettres (en grille au bureau) et des termes à éviter, qui
  suit le filtre ; choix du concept groupé par domaine ; chapeau resserré. Le fond était déjà
  aligné sur le glossaire du cours.
- Le bouton « Tout déplier » devient une option du composant `Sommaire` (Domaines, Sources,
  Consensus ou école).

## 0.6.1, 2026-10-25 (aligné sur le cours 2.0.0)

- Page Sources (T-064) : la légende définit « marketing » par ce que vaut la source (elle vend
  aussi ce dont elle parle ; fiable pour décrire son offre, ce qu'elle recommande est à prendre
  avec recul), comme le modèle de fiche de sources du cours.

## 0.6.0, 2026-10-25 (aligné sur le cours 2.0.0)

Page Sources (T-063) :
- sommaire collant commun, trois sections : Sur quoi repose le cours, Lire une source, Concept par
  concept ;
- « Sur quoi repose le cours » : les sources citées par au moins 3 concepts ;
- « Lire une source » : la légende primaire, secondaire, marketing ;
- « Concept par concept » : groupé par domaine, chaque concept se déplie sur ses références et ses
  points non vérifiés, avec un bouton vers son onglet Sources ; le filtre cherche dans toutes les
  sources et déplie les concepts concernés ;
- la liste alphabétique, la barre de lettres et la liste « Non vérifié » à plat disparaissent.

## 0.5.0, 2026-10-25 (aligné sur le cours 2.0.0)

- Page Domaines (T-062) : un bouton « Lire » à droite de chaque concept, visible plié comme
  déplié ; le lien « Lire le concept N » en bas de la liste disparaît.
- Page de concept (T-062) : précédent / suivant quitte l'en-tête ; deux cartes en bas de page et,
  au bureau, deux flèches dans la barre d'onglets collante.

## 0.4.0, 2026-10-25 (aligné sur le cours 2.0.0)

Page Fil rouge (T-061) :
- même sommaire collant que la page Domaines (composant commun `Sommaire`), à la place des liens
  en haut de page ;
- « L'entreprise » devient deux sections, « L'opérateur » (l'entreprise du cours) et « La
  collectivité » (la métropole, extérieure à l'opérateur : elle finance le service, Charlotte la
  représente, elle tient le référentiel des quartiers), comme le fil rouge du cours ;
- la phrase de renvoi aux concepts 2 et 0 disparaît : l'étiquette « Objectif produit » renvoie au
  concept 2, « équipe vélos » au concept 0.

## 0.3.2, 2026-10-25 (aligné sur le cours 2.0.0)

- Page Domaines (T-060) : « Tout déplier » et « Tout replier » laissent le domaine en cours de
  lecture à sa place à l'écran.

## 0.3.1, 2026-10-25 (aligné sur le cours 2.0.0)

- Page Domaines (T-059) : un bouton « Tout déplier » / « Tout replier » dans le sommaire collant
  (sous la liste au bureau, en tête de la barre sur téléphone) ouvre ou ferme les 20 concepts.

## 0.3.0, 2026-10-25 (aligné sur le cours 2.0.0)

Page Domaines (T-058) :
- chapeau réduit à une phrase ;
- sommaire collant à la place des liens sous le chapeau : colonne à gauche au bureau, barre de
  pastilles en haut sur téléphone ; le domaine en cours de lecture y est mis en évidence ;
- chaque concept se déplie et liste ses sous-concepts (numéro, titre, promesse), chacun lié à sa
  section, puis « Lire le concept » ; les sous-concepts sont lus au build dans les pages de
  concept ;
- les lectures rapides disparaissent (elles citaient 44 des 50 sous-concepts) ; les anciennes
  adresses `#domaine-N-lecture` mènent au domaine.

## 0.2.2, 2026-10-25 (aligné sur le cours 2.0.0)

- Accueil (T-057d) : le fil rouge et le glossaire ont chacun leur porte dans « Par où commencer »
  (un bouton et une description), à la place de la phrase qui les citait.

## 0.2.1, 2026-10-25 (aligné sur le cours 2.0.0)

- Accueil (T-057c) : « Par où commencer » vient juste après le chapeau, en deux portes (commencer
  par le concept 0, voir les sept domaines), chacune avec sa ligne d'explication ; les boutons du
  haut de page disparaissent. « Comment lire une page » suit, sa première phrase simplifiée
  (« Chaque concept suit la même forme, en trois onglets »).

## 0.2.0, 2026-10-25 (aligné sur le cours 2.0.0)

Le cours remplace ses sept objectifs par sept domaines qui le partitionnent (T-057a) ; le site
s'organise par domaines (T-057b).

- Une page **Domaines** remplace les pages Parcours et Lectures : les sept domaines dans l'ordre,
  ce qu'on sait faire à la fin de chacun, ses concepts, et sa lecture rapide (sections ordonnées,
  au moins une par concept du domaine) ; puis les annexes, avec la lecture « Mon équipe travaille
  sans sprint ». Les blocs, le filtre par objectif et la liste des objectifs disparaissent ; la
  lecture « Pour quand ? » rejoint celle du domaine 6.
- Navigation : « Domaines » à la place de « Parcours » et « Lectures ». `/parcours/` et
  `/lectures/` redirigent vers `/domaines/`, les anciennes ancres de lecture vers la lecture du
  domaine correspondant.
- Accueil : deux portes (commencer par le concept 0, voir les domaines), sans liste de lectures.
- Page de concept : l'en-tête donne le domaine du concept, à la place des objectifs servis.
- Les 20 pages portent la version 2.0.0 du cours ; leurs fiches n'avaient pas changé depuis le
  dernier réalignement.

## 0.1.0, 2026-10-24 (aligné sur le cours 1.0.0)

Première version, en aperçu : 18 concepts (0 à 17) et 2 annexes (A1, A2), glossaire, fil rouge,
parcours de lecture, page Consensus ou école, sources, recherche.

- Le fond suit les fiches du cours : les exemples que l'audit avait généralisés pour ne pas
  dévoiler les exercices sont repris des fiches (voir ci-dessous).
- Chaque page de concept porte la version du cours et l'empreinte des fiches dont elle dérive ;
  `npm run check-alignment` liste les pages à réaligner.
- Version du site et du cours dans le pied de page et dans À propos.

### Réalignements avant la première publication

- Contenu d'enseignement propre au site repris dans le cours (T-054) : les pages suivent les fiches
  corrigées. Encadrés « fil rouge » retirés quand ils reprenaient la situation ou le verdict d'une
  question de la banque (concepts 0, 1, 2, 3, 6, 7, 9, 10, 11), alignés sur les fiches pour les autres
  (21 restent, tous présents dans les fiches). Schéma du concept 4 : cas inventé de vols de vélos fixé
  par la fiche. Schéma du concept 6 et encadré 5b2 alignés. Exemples de 15b et 17a2 remplacés par des
  cas que l'équipe vélos maîtrise seule ou des cas inventés dits tels.

- Réalignement sur les corrections du cours (T-053) : concept 3 (« retirer n'est pas définitif »,
  choix du cours), concepts 12 et 13 (« relevé en double »), concept 14 (les cinq catégories, choix
  du cours sans source), concept 17 (« chaque semaine »). Éléments que les fiches n'ont plus,
  retirés : références S3 et S4 et « CSPO 1.6 et 1.7 » (1), entrées « non vérifié » (4, 7),
  affirmation CRISP-DM (17), liste des types de liens Jira et affirmation « ticket » (A1),
  citation « If you only quantify one thing » et référence S15 (13).

- Licences : contenu CC BY 4.0, code MIT (`LICENSE`). Le site demande aux moteurs de recherche de ne pas
  l'indexer tant que sa version est 0.x.

### Réalignement sur les fiches du cours 1.0.0

Les 20 pages ont été relues contre leurs fiches `course/concepts` et `course/sources`. Repris des
fiches : les cas que l'audit avait généralisés seul (concepts 1, 4, 5, 6, 8, 9, 12, 13, 14, A1…), les
pièges avec leurs exemples, les nuances et attributions manquantes, les références et
affirmations de sources absentes. Les schémas des concepts 1, 4, 5, 12, 16 et A1 suivent le cas de la
fiche.
