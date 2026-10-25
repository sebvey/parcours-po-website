# Recettes

Les tâches courantes, chacune avec ses fichiers, ses commandes et sa vérification. Les composants
cités se voient rendus, avec leur code, sur `/dev/composants/`. D'où vient chaque donnée :
`docs/data-map.md`. Ce qui casse souvent : `docs/pitfalls.md`.

Toute recette finit par `npm run verify`, qui doit passer avant la PR.

## Ajouter un sous-concept

Le fond vient du cours : le sous-concept existe d'abord dans `course/concepts/NN-slug.md`.

1. Dans `src/content/concepts/fr/NN-slug.mdx`, dans l'ordre de la fiche, entre les autres `<Sous>`
   et avant les blocs de fin (`<Reflexe>`, `<Erreurs>`) :

   ```mdx
   <Sous id="9c" titre="Titre court" promesse="Une phrase : ce que le lecteur saura faire.">

   <h4 id="9c1"><span class="num">9c1</span> Premier point</h4>

   Le texte, en Markdown, repris de la fiche.

   </Sous>
   ```

   `id`, `titre` et `promesse` s'écrivent en texte entre guillemets doubles : la page Domaines les
   relit dans le fichier. L'`id` suit la fiche du cours (`9c`, puis `9c1` pour les points) et ne se
   renomme plus.
2. Si le sous-concept a des positions ou des sources nouvelles, les ajouter au frontmatter
   (`ecoles`, `sources`), à la suite : l'ordre fait les ancres (`ecole-3`, `ref-S4`).
3. Inscrire les empreintes, une fois la page alignée sur la fiche :
   `npm run check-alignment -- --stamp NN`. Il lit le dépôt du cours (`../parcours-po` par
   défaut) ; sans lui, l'étape attend, et `verify` n'en fait qu'un avertissement.
4. Ailleurs : un `<Renvoi n="9c" />` y renvoie depuis un autre concept ; la page Domaines le liste
   seule.

Vérification : `npm run verify` ; dans le site construit, `.verify/dist/concepts/NN/index.html`
porte `id="9c"` et `.verify/dist/domaines/index.html` liste `9c` avec sa promesse (au navigateur :
le concept déplié sur `/domaines/`).

## Créer une page longue (sommaire collant, dépliables)

1. Un fichier `src/pages/<adresse>.astro` (adresse en français, sans accent) :

   ```astro
   ---
   import Base from '../layouts/Base.astro';
   import '../styles/transversal.css';
   import Sommaire from '../components/Sommaire.astro';
   const items = [
     { id: 'premiere', titre: 'Première section' },
     { id: 'seconde', titre: 'Seconde section' },
   ];
   ---
   <Base title="Titre" description="Une phrase pour les moteurs de recherche.">
     <div class="container-wide">
       <section class="page tr">
         <p class="eyebrow">Sur-titre court</p>
         <h1>Titre</h1>
         <p class="lead">Le chapeau : une ou deux phrases sur ce que la page apporte.</p>
         <div class="avec-sommaire">
           <Sommaire items={items} label="Dans cette page" deplier />
           <div class="sommaire-contenu">
             <section class="fr-section" id="premiere" aria-labelledby="premiere-t">
               <h2 id="premiere-t">Première section</h2>
               <ul class="cdep-liste">
                 <li class="cdep-item">
                   <details class="cdep" data-deplier>
                     <summary><span class="t">Un bloc long</span></summary>
                     <p>Le contenu du bloc : paragraphes, listes.</p>
                   </details>
                 </li>
               </ul>
             </section>
             <section class="fr-section" id="seconde" aria-labelledby="seconde-t">…</section>
           </div>
         </div>
       </section>
     </div>
   </Base>
   ```

   Les classes viennent de `src/styles/global.css` et `transversal.css` : `page tr` (page
   transversale), `eyebrow` et `lead` (sur-titre, chapeau), `fr-section` (section du sommaire),
   `cdep-liste`, `cdep-item`, `cdep` et `t` (liste de blocs dépliables et leur titre).
   Chaque `id` de `items` existe dans la page, sinon le sommaire reste inerte. Un seul `Sommaire`
   par page. `deplier` seulement s'il y a des `details[data-deplier]` ; `compact` pour des entrées
   d'une ou deux lettres. Une page qui filtre ses sections appelle
   `document.querySelector('nav.sommaire').rafraichir()` après chaque filtre (voir
   `src/pages/glossaire.astro`).
2. Menu : une page n'y entre que par une entrée dans `items` de `src/layouts/Base.astro`, son
   libellé dans `src/i18n/ui.ts`, et `nav="<clé de l'entrée>"` sur `<Base>` (lien actif) ; sinon,
   ni entrée ni `nav`. Recherche : `noindex` sur `<Base>` exclut la page de Pagefind et des
   moteurs (balise `robots`, pas d'adresse canonique).
3. Le chapeau et les textes d'orientation d'une page publique sont relus par le mainteneur avant
   la PR.

Vérification : `npm run verify` (captures, défilement avec les dépliables ouverts) ; au navigateur,
« Tout déplier » garde la section lue en place, le sommaire suit la lecture (bureau et 375 px).

## Ajouter un schéma

1. `src/components/schemas/SchemaNN.astro`, sur le modèle de `Schema17.astro` : un commentaire qui
   dit ce que le schéma montre, un `<svg viewBox="…" role="img" aria-labelledby="gNN-t gNN-d"
   class="sch">` avec `<title>` et `<desc>`, et un `<style>` du composant.
2. Couleurs : les variables `--sch-*` de `src/styles/global.css` seulement (le sombre suit seul).
   Classes et `id` préfixés par le numéro du schéma (`g17-ar`, `xbox`) : jamais `.card`, `.box`,
   `.panel`, `.note`, `.tag`, `.q`, déjà stylés par le site.
3. Dans la page : `import SchemaNN from '../../../components/schemas/SchemaNN.astro';` sous le
   frontmatter, puis `<Figure legende="…"><SchemaNN /></Figure>`.

Vérification : `npm run verify`, puis les captures `.verify/captures/*/concepts_NN.png` : le texte
du schéma reste lisible à 375 px et contrasté en sombre.

## Corriger un texte

- **Fond** (fait du fil rouge, définition, exemple, attribution, source) : corriger d'abord le
  cours (`course/concepts/`, `course/sources/`, `glossary.md`, `fil-rouge-velos.md`), puis la page
  ou le fichier de `src/data/` qui le copie (`docs/data-map.md`). Pour une page de concept,
  inscrire ensuite les empreintes : `npm run check-alignment -- --stamp NN`.
- **Forme** (faute, tournure, mise en page) : directement dans le site.
- **Interface** (menu, onglets, pastilles) : `src/i18n/ui.ts`.
- Style : ni tiret long, ni flèche en prose (une citation entre « » garde sa ponctuation) ; un seul
  terme par notion, celui du glossaire ; « donné par un agent IA ».

Vérification : `npm run verify` (il contrôle le style du texte rendu) ; `npm run check-alignment`
sans écart pour la page touchée.

## Publier une version

1. Choisir le numéro selon « Versions » du `README.md` ; le mettre dans `package.json`
   (`version`, et `parcoursPo.coursVersion` si le site s'aligne sur un nouveau cours).
2. `CHANGELOG.md` : renommer « Non publié » en `## X.Y.Z, AAAA-MM-JJ (aligné sur le cours V)` et
   rouvrir un « Non publié » vide au-dessus.
3. `npm run verify`, puis PR vers `main` (squash) ; après relecture, merge.
4. Déployer (lancement manuel) :

   ```sh
   gh workflow run deploy.yml --ref main -R sebvey/parcours-po-website
   gh run list --workflow deploy.yml -L 1 -R sebvey/parcours-po-website   # l'identifiant du run
   gh run watch <id> --exit-status -R sebvey/parcours-po-website
   ```

Vérification : en ligne (https://sebvey.github.io/parcours-po-website/), le pied de page affiche la
nouvelle version, et le changement est visible (recharger sans cache).
