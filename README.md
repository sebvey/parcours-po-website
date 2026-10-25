# Product Owner d'un produit data (site)

Site public, en français, du cours de gestion de produit « Product Owner d'un produit data ».
Astro (site statique), contenu en MDX, recherche Pagefind, publié sur GitHub Pages.

## Lancer

Node 22.23.4 ou plus (testé avec Node 24).

```sh
npm install
npx playwright install chromium   # une fois, pour npm run verify
npm run dev        # développement (la recherche n'y est pas disponible)
npm run build      # vérifie les types, construit dist/, puis indexe avec Pagefind
npm run preview    # sert dist/ sur http://localhost:4321 (recherche comprise)
npm run verify     # tout vérifier avant une PR (ci-dessous)
```

## Vérifier

`npm run verify` (`scripts/verify.mjs`) construit le site comme en ligne, avec le préfixe
`/parcours-po-website/`, dans `.verify/dist`, puis contrôle :

- les liens et ancres internes de chaque page ;
- dans un Chromium headless, chaque page au bureau (1280 px) et à 375 px, en clair et en sombre :
  capture pleine page dans `.verify/captures/`, aucun défilement horizontal (dépliables ouverts et
  chaque onglet d'un concept compris), aucune erreur JavaScript ;
- le style du texte rendu : ni tiret long, ni tiret moyen entre espaces, ni flèche, hors code,
  schémas et citations entre « » ;
- l'alignement sur le cours (`check-alignment`), en avertissement.

`npm run verify -- --no-build` réutilise le dernier build ; `--page domaines` (répétable) limite
le navigateur à ces pages. Restent à tester à la main : les interactions (sommaire, dépliables,
filtres, onglets, bouton de thème) et les autres navigateurs.

## Documentation

| Document | Pour |
|---|---|
| `docs/recipes.md` | faire une tâche : sous-concept, page longue, schéma, texte, publication |
| `docs/data-map.md` | savoir d'où vient chaque information affichée |
| `docs/pitfalls.md` | ce qui casse sans bruit, et la parade |
| `/dev/composants/` | chaque composant rendu, avec son code d'usage (hors menu, hors index) |
| `docs/construction.md` | l'histoire de la première version |

Chaque composant et chaque fichier de `src/lib/` et `src/data/` commence par un commentaire : rôle,
props, invariant.

## Structure

```
src/content/concepts/fr/NN-slug.mdx   une page par concept : frontmatter (en-tête, onglets Consensus ou école
                                       et Sources, alignement) et corps MDX (onglet Comprendre)
src/components/                       composants des pages ; schemas/ : un schéma SVG par concept
src/data/                             domaines, glossaire, fil rouge (copiés du cours), versions
src/lib/                              accès aux concepts, index transversaux, typographie, Markdown en ligne
src/i18n/ui.ts                        libellés de l'interface
src/pages/                            une page par adresse ; dev/ : démonstration des composants
src/middleware.ts                     typographie française sur tout le HTML
scripts/                              check-alignment, verify
```

## Le site et le cours

Le site est la projection du cours (`course/` du dépôt `parcours-po`). Il n'invente pas de fond.

- **Le fond suit le cours** : même texte, mêmes exemples, mêmes attributions et mêmes sources que
  les fiches `course/concepts/` et `course/sources/`. La banque d'exemples n'est pas reprise.
- **La forme est au site** : schémas, composants, mise en page, onglets, sommaire et concepts
  dépliables de la page Domaines, pages d'orientation. Les domaines eux-mêmes (titres, concepts) viennent du cours. Un schéma ou une mise en page ne contredit pas la fiche.
- **Tout contenu d'enseignement nouveau passe d'abord par le cours**, puis par le site. Une page
  qui dit autre chose que sa fiche a tort, sauf si la fiche est corrigée en même temps.

Chaque page de concept porte, dans son frontmatter (`alignement`), la version du cours et les
empreintes sha256 de la fiche `course/concepts` et de la fiche `course/sources` dont elle dérive.

```sh
npm run check-alignment                          # liste les pages dont une fiche a changé
npm run check-alignment -- --course <dossier>    # autre chemin du cours (défaut : ../parcours-po/course, ou COURS_DIR)
npm run check-alignment -- --stamp 09            # inscrit les empreintes, après avoir réaligné la page
```

Réaligner : lire la fiche, reporter le fond sur la page (corps MDX et frontmatter), puis inscrire
les empreintes. Le script signale aussi une fiche du cours sans page.

## Versions

Le site est versionné `MAJOR.MINOR.PATCH` (`package.json`, journal dans `CHANGELOG.md`) et affiche,
dans le pied de page et dans À propos, sa version et celle du cours sur laquelle il est aligné
(`parcoursPo.coursVersion` dans `package.json`).

- **MAJOR** : égal au MAJOR du cours. Il change quand le cours casse un identifiant (numéro de
  concept, sous-concept, adresse, concepts d'un domaine). Tant que le site est en aperçu (0.x),
  son MAJOR reste 0 et les pages demandent aux moteurs de ne pas les indexer ; la mise en ligne
  prend le MAJOR du cours.
- **MINOR** : libre de chaque côté. Côté site : une page, un schéma ou une fonction nouvelle, ou
  un réalignement de fond sur une nouvelle version du cours.
- **PATCH** : une correction qui ne change ni le fond ni la structure (faute, style, lien).

Passer sur une nouvelle version du cours : mettre `parcoursPo.coursVersion` à jour, réaligner les
pages que `check-alignment` signale, inscrire les empreintes, noter le changement dans `CHANGELOG.md`.
Publier : `docs/recipes.md`.

## Thème

Clair ou sombre selon le système ; le bouton de l'en-tête bascule et mémorise le choix
(`localStorage`, clé `theme`), appliqué avant l'affichage par un script de `src/layouts/Base.astro`.
Les couleurs sont des jetons CSS en tête de `src/styles/global.css`.

## Langues

Le français est la langue par défaut, sans préfixe d'URL. Pour l'anglais : ajouter `en` à `i18n.locales`
dans `astro.config.mjs`, des chaînes `en` dans `src/i18n/ui.ts`, un dossier `src/content/concepts/en/`
et `src/pages/en/`.

## Licence

© Sébastien Vey. Contenu sous licence CC BY 4.0, code sous licence MIT : voir `LICENSE`.
