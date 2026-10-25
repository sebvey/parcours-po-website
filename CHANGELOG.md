# Journal du site

Le site est versionné `MAJOR.MINOR.PATCH`, avec le MAJOR du cours (voir `README.md`). Chaque version
dit sur quelle version du cours elle est alignée.

## Non publié

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
