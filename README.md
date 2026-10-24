# Product Owner d'un produit data (site)

Site public, en français, du cours de gestion de produit « Product Owner d'un produit data ».
Astro (site statique), contenu en MDX, recherche Pagefind, déployable sur GitHub Pages.

## Lancer

Node 22.23.4 ou plus (testé avec Node 24).

```sh
npm install
npm run dev        # développement (la recherche n'y est pas disponible)
npm run build      # vérifie les types, construit dist/, puis indexe avec Pagefind
npm run preview    # sert dist/ sur http://localhost:4321 (recherche comprise)
```

## Structure

```
src/content/concepts/fr/NN-slug.mdx   un fichier par concept : en-tête, onglets Écoles et Sources
                                       (frontmatter) et onglet Comprendre (corps MDX)
src/components/                       pastilles, sous-concepts, « Le réflexe », erreurs, onglets
src/components/schemas/               un schéma SVG par concept, en variables CSS (clair et sombre)
src/data/domaines.ts                  les sept domaines du cours et leurs concepts, puis les annexes
src/data/glossaire.ts                 les termes du glossaire et les termes à éviter
src/data/fil-rouge.ts                 le cas fictif (entreprise, acteurs, sources de données)
src/data/lectures.ts                  la lecture rapide de chaque domaine (et de l'annexe A2)
src/lib/transversal.ts                index Consensus ou école et bibliographie, générés depuis les concepts
src/i18n/ui.ts                        textes de l'interface (le français est la langue par défaut)
src/pages/                            accueil, domaines, fil rouge, glossaire, consensus ou école, sources, à propos, recherche, concepts/[num] ;
                                       parcours et lectures : anciennes adresses, redirigées vers domaines
```

Ajouter un concept : copier `09-decoupage-vertical.mdx` sous `src/content/concepts/fr/`. La page Domaines
le rend cliquable dès que le fichier existe. Les renvois internes s'écrivent `<Renvoi n="8" />`.

## Le site et le cours

Le site est la projection du cours (`course/` du dépôt `parcours-po`). Il n'invente pas de fond.

- **Le fond suit le cours** : même texte, mêmes exemples, mêmes attributions et mêmes sources que
  les fiches `course/concepts/` et `course/sources/`. La banque d'exemples n'est pas reprise.
- **La forme est au site** : schémas, composants, mise en page, onglets, lectures rapides des
  domaines et pages d'orientation. Les domaines eux-mêmes (titres, concepts) viennent du cours. Un schéma ou une mise en page ne contredit pas la fiche.
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
  son MAJOR reste 0 ; la mise en ligne prend le MAJOR du cours.
- **MINOR** : libre de chaque côté. Côté site : une page, un schéma ou une fonction nouvelle, ou
  un réalignement de fond sur une nouvelle version du cours.
- **PATCH** : une correction qui ne change ni le fond ni la structure (faute, style, lien).

Passer sur une nouvelle version du cours : mettre `parcoursPo.coursVersion` à jour, réaligner les
pages que `check-alignment` signale, inscrire les empreintes, noter le changement dans `CHANGELOG.md`.

## Déploiement

`.github/workflows/deploy.yml` construit et publie sur GitHub Pages (lancement manuel seulement).
L'adresse de base se règle par `SITE_URL` et `BASE_PATH` à la construction.

## Langues

Le français est la langue par défaut, sans préfixe d'URL. Pour l'anglais : ajouter `en` à `i18n.locales`
dans `astro.config.mjs`, des chaînes `en` dans `src/i18n/ui.ts`, un dossier `src/content/concepts/en/`
et `src/pages/en/`.

## Licence

© Sébastien Vey. Contenu sous licence CC BY 4.0, code sous licence MIT : voir `LICENSE`.
