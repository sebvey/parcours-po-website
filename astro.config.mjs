import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import { remarkTypoFr } from './src/lib/typo-fr.ts';

// Déploiement : GitHub Pages sert un site de projet sous /<dépôt>/.
// Définir SITE_URL et BASE_PATH au build (voir .github/workflows/deploy.yml).
//   SITE_URL=https://<compte>.github.io  BASE_PATH=/<dépôt>
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Typographie française (espaces insécables) : demande le processeur unified de remark.
  markdown: { processor: unified({ remarkPlugins: [remarkTypoFr] }) },
  integrations: [mdx()],
  // Français par défaut, sans préfixe d'URL. Pour l'anglais : ajouter 'en' ici,
  // un dossier src/pages/en/ et src/content/concepts/en/.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    routing: { prefixDefaultLocale: false },
  },
});
