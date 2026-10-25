# Site du cours « Product Owner d'un produit data »

Site statique (Astro, MDX, Pagefind, GitHub Pages) qui projette sur le web le cours `course/` du
dépôt `parcours-po` (par défaut `../parcours-po`).

- **Fond au cours, forme au site** : un fait, une définition, un exemple ou une source se corrige
  d'abord dans le cours, puis ici (README, « Le site et le cours »). Composants, mise en page et
  schémas se décident ici.
- **Commandes** par `mise exec -- <commande>` (`mise exec -- npm run build`, `mise exec -- gh …`),
  là où un `mise.toml` couvre le dossier ; sinon, node et npm directement.
- **`npm run verify` passe avant toute PR.** Il ne teste pas les interactions : sommaire,
  dépliables, filtres, onglets et thème se vérifient au navigateur, s'ils sont touchés.
- Français, sans tiret long ni flèche dans la prose ; noms de fichiers en anglais.

Lire selon la tâche : `README.md` (lancer, vérifier, versions), `docs/recipes.md` (comment faire),
`docs/data-map.md` (d'où vient chaque donnée), `docs/pitfalls.md` (ce qui casse),
`/dev/composants/` (composants rendus avec leur code).
