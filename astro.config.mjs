import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { estProche } from './src/lib/regles.mjs';

// Pages exclues de Google, donc du sitemap : pages légales, pages villes sans
// contenu propre (voir src/lib/regles.mjs) et page chantiers tant qu'elle est vide
const communes = JSON.parse(fs.readFileSync('./src/data/communes.json', 'utf8'));
const dossierChantiers = './src/content/chantiers';
const communesAvecChantier = new Set(
  fs
    .readdirSync(dossierChantiers, { recursive: true })
    .filter((f) => f.endsWith('.md') && !path.basename(f).startsWith('_'))
    .map((f) => (fs.readFileSync(path.join(dossierChantiers, f), 'utf8').match(/^commune:\s*["']?([a-z0-9-]+)/m) || [])[1])
    .filter(Boolean),
);
const horsGoogle = [
  '/404/',
  '/mentions-legales/',
  '/confidentialite/',
  ...(communesAvecChantier.size === 0 ? ['/chantiers/'] : []),
  ...communes.filter((c) => !estProche(c) && !communesAvecChantier.has(c.slug)).map((c) => `/electricien/${c.slug}/`),
];

// Domaine définitif : à changer ici et dans src/config.ts
export default defineConfig({
  site: 'https://www.electricien-givors.fr',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !horsGoogle.some((u) => page.endsWith(u)) })],
  build: { inlineStylesheets: 'always' },
});
