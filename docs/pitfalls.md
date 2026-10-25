# Pièges

Ce qui a déjà cassé, ou casse sans bruit. Chaque piège : le symptôme, la cause, la parade.

## Typographie : espaces insécables et middleware

- **Symptôme** : une recherche de `concept 9 :` ou de `l'objectif` ne trouve rien dans le HTML
  construit ; un code d'exemple copié ne marche plus.
- **Cause** : la typographie française s'applique deux fois, par le plugin remark (Markdown, hors
  code) et par `src/middleware.ts` sur tout le HTML rendu, attributs `aria-label`, `title`, `alt`
  et `content` compris. Une espace insécable (U+00A0) précède `:` et `»` et suit `«`, une espace
  fine insécable (U+202F) précède `;`, `?` et `!`, l'apostrophe droite devient `’`.
- **Parade** : chercher avec `\s` ou avec les bons caractères ; mettre le code dans `<pre>` ou
  `<code>`, que le middleware ne touche pas. Un texte écrit par un script de la page (libellé
  d'un bouton) ne passe pas par le middleware : l'écrire déjà typographié (`’`).

## En-tête sur téléphone : l'ordre CSS

- **Symptôme** : un élément ajouté à l'en-tête apparaît avant le titre ou au mauvais rang, sur
  téléphone seulement, ou seulement au bureau.
- **Cause** : l'ordre visuel de l'en-tête est fixé par `order` dans `src/styles/global.css`
  (téléphone : thème 1, Menu 2, navigation 3, recherche 4 ; à partir de 52rem, le thème passe à 5,
  après la recherche). Un élément sans `order` prend 0.
- **Parade** : donner un `order` au nouvel élément dans les deux cas ; vérifier les captures
  `mobile-*` et `bureau-*` de `npm run verify`.

## `BASE_PATH` : le préfixe d'adresse en ligne

- **Symptôme** : un lien marche en local et renvoie une 404 en ligne.
- **Cause** : en ligne, le site est servi sous `/parcours-po-website/` (`BASE_PATH` au build,
  `.github/workflows/deploy.yml`) ; en local, sous `/`. Un `href="/domaines/"` écrit en dur oublie
  le préfixe.
- **Parade** : toute adresse interne passe par `url()` (`src/i18n/ui.ts`) ou `conceptUrl()`
  (`src/lib/concepts.ts`) ; dans une page de concept, `<Renvoi>`. `npm run verify` construit avec
  le préfixe et signale le lien cassé.

## Pagefind absent en `dev`

- **Symptôme** : la recherche ne répond pas sous `npm run dev`.
- **Cause** : l'index Pagefind se construit après le build (`dist/pagefind/`).
- **Parade** : `npm run build`, puis `npm run preview`. Une page n'est indexée que si `<Base>` ne
  porte pas `noindex` ; un bout d'interface s'exclut par `data-pagefind-ignore`.

## `overflow-anchor` et « Tout déplier »

- **Symptôme** : après « Tout déplier », la page saute sur une autre section.
- **Cause** : le bouton compense lui-même la hauteur gagnée au-dessus de l'écran ; l'ancrage de
  défilement natif du navigateur ajouterait un second décalage.
- **Parade** : les blocs dépliables d'une page longue sont dans `.sommaire-contenu`, qui porte
  `overflow-anchor: none` ; ne pas retirer cette règle.

## Collisions de classes et d'identifiants des schémas

- **Symptôme** : un schéma prend un cadre, une marge ou une couleur qu'il ne déclare pas ; une
  flèche d'un schéma prend la pointe d'un autre.
- **Cause** : les styles globaux (`.card`, `.box`, `.panel`, `.note`, `.tag`, `.q`…) s'appliquent
  aussi aux éléments du SVG ; deux schémas d'une même page qui déclarent le même `id` (marqueur,
  titre) se marchent dessus.
- **Parade** : classes propres au schéma, et `id` préfixés par son numéro (`g17-ar`).

## Mise en page : `.prose` sur un élément de grille

- **Symptôme** : à 375 px, la page défile à l'horizontale à cause d'un bloc de code ou d'une
  adresse longue.
- **Cause** : `.prose` centre par `margin-inline: auto` ; posé sur un élément de grille
  (`.sommaire-contenu`), il le dimensionne à son contenu au lieu de la colonne. Même effet d'une
  colonne de grille `1fr` sans `minmax(0, 1fr)` qui contient un mot insécable.
- **Parade** : `.prose` sur un bloc intérieur ; colonnes `minmax(0, 1fr)` ; `overflow-wrap:
  anywhere` pour les listes d'adresses.

## Sommaire inerte

- **Symptôme** : le sommaire collant ne suit plus la lecture, « Tout déplier » n'apparaît pas.
- **Cause** : son script s'arrête si un `id` de `items` n'existe pas dans la page ; il ne gère
  qu'une instance par page.
- **Parade** : un `id` de section par entrée ; un seul `<Sommaire>`.

## Sous-concepts absents de la page Domaines

- **Symptôme** : un sous-concept n'apparaît pas, ou sans titre, dans la page Domaines.
- **Cause** : la page relit les attributs de `<Sous>` dans le texte MDX par une expression
  régulière ; une valeur écrite en expression (`titre={x}`) ou entre guillemets simples lui échappe.
- **Parade** : `<Sous id="9c" titre="…" promesse="…">`, guillemets doubles, texte littéral.

## Titre d'un concept à deux endroits

- **Symptôme** : l'en-tête d'un concept et sa ligne dans Domaines ou dans précédent et suivant
  disent deux titres différents.
- **Parade** : changer ensemble `titre` du frontmatter et `src/data/domaines.ts`
  (`docs/data-map.md`).

## Tester dans le navigateur intégré d'un agent

`npm run verify` voit le rendu, le défilement et les erreurs JavaScript ; les interactions
(sommaire, dépliables, filtres, onglets, bouton de thème) se testent encore au navigateur.

- Panneau masqué : `requestAnimationFrame` ne tourne pas, un code qui en dépend (le sommaire
  collant) paraît cassé ; tester panneau affiché, ou appeler la fonction par script.
- Cache : après un nouveau build, ajouter `?v=N` à l'adresse.
- Clic par `ref` : l'outil fait d'abord défiler l'élément ; pour mesurer une position après un
  clic, cliquer par coordonnées ou par script.
- Un aperçu (`npm run preview`) déjà lancé sert peut-être un ancien build : l'arrêter et le
  relancer.
