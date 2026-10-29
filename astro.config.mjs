import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine définitif : à changer ici et dans src/config.ts
export default defineConfig({
  site: 'https://www.electricien-givors.fr',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'always' },
});
