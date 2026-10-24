# Journal du site

Le site est versionné `MAJOR.MINOR.PATCH`, avec le MAJOR du cours (voir `README.md`). Chaque version
dit sur quelle version du cours elle est alignée.

## Non publié

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
