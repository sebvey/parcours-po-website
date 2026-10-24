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
src/data/parcours.ts                  la carte du cours (blocs et concepts)
src/data/objectifs.ts                 les sept objectifs du cours et les concepts qui les servent
src/lib/transversal.ts                index Consensus ou école et bibliographie, générés depuis les concepts
src/i18n/ui.ts                        textes de l'interface (le français est la langue par défaut)
src/pages/                            accueil, parcours, consensus ou école, sources, à propos, recherche, concepts/[num]
```

Ajouter un concept : copier `09-decoupage-vertical.mdx` sous `src/content/concepts/fr/`. Le parcours
le rend cliquable dès que le fichier existe. Les renvois internes s'écrivent `<Renvoi n="8" />`.

## Déploiement

`.github/workflows/deploy.yml` construit et publie sur GitHub Pages (lancement manuel seulement).
L'adresse de base se règle par `SITE_URL` et `BASE_PATH` à la construction.

## Langues

Le français est la langue par défaut, sans préfixe d'URL. Pour l'anglais : ajouter `en` à `i18n.locales`
dans `astro.config.mjs`, des chaînes `en` dans `src/i18n/ui.ts`, un dossier `src/content/concepts/en/`
et `src/pages/en/`.

## Licence

© Sébastien Vey. Contenu sous licence CC BY 4.0 : voir `LICENSE`. La licence du code du site reste à préciser.
