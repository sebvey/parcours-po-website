// Chaînes de l'interface. Le français est la langue par défaut.
// Pour ajouter l'anglais : ajouter la clé `en` avec les mêmes entrées.
export const languages = { fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    'site.name': "Product Owner d’un produit data",
    'site.tagline': 'Un cours de gestion de produit, en clair et sourcé',
    'nav.home': 'Accueil',
    'nav.path': 'Parcours',
    // --- Pages transversales : index (début)
    'nav.ecoles': 'Consensus ou école',
    'nav.sources': 'Sources',
    // --- Pages transversales : index (fin)
    'nav.about': 'À propos',
    'nav.lectures': 'Lectures',
    'nav.filrouge': 'Fil rouge',
    'nav.glossary': 'Glossaire',
    'nav.menu': 'Menu',
    'nav.search': 'Recherche',
    'nav.main': 'Navigation principale',
    'skip': 'Aller au contenu',
    'search.label': 'Rechercher dans le cours',
    'search.placeholder': 'Rechercher',
    'footer.licence': '© Sébastien Vey, CC BY 4.0',
    'footer.licenceLink': 'https://creativecommons.org/licenses/by/4.0/deed.fr',
    'pastille.consensus': 'consensus',
    'pastille.ecole': "choix d’école",
    'pastille.cours': 'choix du cours',
    'concept.label': 'Concept',
    'concept.prerequisites': 'Prérequis',
    'concept.none': 'aucun',
    'concept.soon': 'bientôt',
    'concept.previous': 'Précédent',
    'concept.next': 'Suivant',
    'concept.tabs': 'Sections du concept',
    'tab.comprendre': 'Comprendre',
    'tab.ecoles': 'Consensus ou école',
    'tab.sources': 'Sources',
  },
} as const;

export function useT(lang: Lang = defaultLang) {
  return (key: keyof (typeof ui)['fr']) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Adresse d'une page du site, en tenant compte de `base`. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
