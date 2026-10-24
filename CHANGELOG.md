# Journal du site

Le site est versionné `MAJOR.MINOR.PATCH`, avec le MAJOR du cours (voir `README.md`). Chaque version
dit sur quelle version du cours elle est alignée.

## Non publié

- Réalignement sur les corrections du cours (T-053) : concept 3 (« retirer n'est pas définitif »,
  choix du cours), concepts 12 et 13 (« relevé en double »), concept 14 (les cinq catégories, choix
  du cours sans source), concept 17 (« chaque semaine »). Éléments que les fiches n'ont plus,
  retirés : références S3 et S4 et « CSPO 1.6 et 1.7 » (1), entrées « non vérifié » (4, 7),
  affirmation CRISP-DM (17), liste des types de liens Jira et affirmation « ticket » (A1),
  citation « If you only quantify one thing » et référence S15 (13).

## 0.1.0, 2026-10-24 (aligné sur le cours 1.0.0)

Première version, en aperçu : 18 concepts (0 à 17) et 2 annexes (A1, A2), glossaire, fil rouge,
parcours de lecture, page Consensus ou école, sources, recherche.

- Le fond suit les fiches du cours : les exemples que l'audit avait généralisés pour ne pas
  dévoiler les exercices sont repris des fiches (voir ci-dessous).
- Chaque page de concept porte la version du cours et l'empreinte des fiches dont elle dérive ;
  `npm run check-alignment` liste les pages à réaligner.
- Version du site et du cours dans le pied de page et dans À propos.

### Réalignement sur les fiches du cours 1.0.0

Les 20 pages ont été relues contre leurs fiches `course/concepts` et `course/sources`. Repris des
fiches : les cas que l'audit avait généralisés seul (concepts 1, 4, 5, 6, 8, 9, 12, 13, 14, A1…), les
pièges avec leurs exemples, les nuances et attributions manquantes, les références et
affirmations de sources absentes. Les schémas des concepts 1, 4, 5, 12, 16 et A1 suivent le cas de la
fiche.

### Écarts connus, à traiter par le cours

Contenu d'enseignement que le site porte et que la fiche n'a pas. Il reste en place tant que le cours ne
l'a pas repris ou refusé (le fond vient d'abord du cours) :

- encadrés « fil rouge » propres au site : Scarlette (0a1), Étienne (1a, 4b1), Odile et Sid (1b),
  Maud (2a), Pia (3a2), Régis (5a1, 6a), Abba (5a2, 9a1, 17a2), météo (14a), SMS (17a2) ;
- 0a3, 1a, 1b, 5a2, 7a2, 7b, 8a2, 8b1, 11a2, 12a1, 14b : exemples ou phrases sans équivalent dans la fiche ;
- 4 : quatre stories et deux tâches du schéma, libellés proposés (la fiche ne fixe que l'epic, les
  features et la story sous l'epic) ;
