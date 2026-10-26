# Icônes du site

Un fichier par icône. Une page les importe comme composants (import SVG d'Astro) : le SVG est
écrit dans la page au build, sans requête, et prend la couleur du texte. Toutes sont rendues
côte à côte sur `/dev/composants/#icones`.

```astro
---
import Loupe from '../icons/loupe.svg';
---
<Loupe width="18" height="18" aria-hidden="true" />
```

Règles de dessin, pour que les icônes restent cohérentes :
- cadre `viewBox="0 0 24 24"`, sans `width` ni `height` (la taille se donne à l'usage) ;
- trait seul : `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, extrémités et angles
  arrondis (`stroke-linecap` et `stroke-linejoin` à `round`) ;
- aucune couleur écrite dans le fichier : la couleur vient du CSS (`color`) ;
- formes simples, lisibles à 18 px.

`fleche.svg` ouvre une page depuis une carte ou une tuile (en-tête de domaine, tuile de concept) ;
`marque.svg` est la marque du site (un backlog : trois cartes rangées par priorité) ;
`public/favicon.svg` en reprend le dessin, avec ses couleurs écrites (un favicon ne suit pas le
CSS de la page).

`drapeau-en.svg` marque le terme anglais du glossaire : seule exception aux règles de dessin, il
garde ses couleurs (bleu #0052B4, rouge #D80027) et se dessine carré ; la page l'arrondit en CSS
(`border-radius`), sans `clipPath` dont l'identifiant se répéterait à chaque terme.
