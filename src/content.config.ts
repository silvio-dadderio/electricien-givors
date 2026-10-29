import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import communes from './data/communes.json';

const slugsCommunes = new Set(communes.map((c) => c.slug));

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    excerpt: z.string(),
    order: z.number(),
    faq,
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    service: z.string().optional(),
    faq,
  }),
});

// Un chantier = un dossier avec index.md et ses photos (modèle : _MODELE.md)
const chantiers = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/chantiers' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      commune: z.string().refine((s) => slugsCommunes.has(s), {
        message: 'Commune inconnue : utiliser le champ slug de src/data/communes.json',
      }),
      date: z.coerce.date(),
      service: z.string().optional(),
      photos: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

export const collections = { services, blog, chantiers };
