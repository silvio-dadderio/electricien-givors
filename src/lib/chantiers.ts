import { getCollection } from 'astro:content';

// Évite l'avertissement d'Astro sur une collection vide tant qu'aucun chantier n'est publié
const fichiers = Object.keys(import.meta.glob('../content/chantiers/**/*.md')).filter(
  (f) => !f.split('/').pop()!.startsWith('_'),
);

export async function chantiersRecents() {
  if (fichiers.length === 0) return [];
  return (await getCollection('chantiers')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function communesAvecChantier() {
  return new Set((await chantiersRecents()).map((c) => c.data.commune));
}
