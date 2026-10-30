import type { ImageMetadata } from 'astro';
import infos from '../data/photos.json';

type Info = { fichier: string; alt: string; auteur: string; source: string; licence: string };
export type Photo = Info & { src: ImageMetadata };

const fichiers = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });
const parNom = Object.fromEntries(Object.entries(fichiers).map(([chemin, m]) => [chemin.split('/').pop()!, m.default]));

const photos: Record<string, Photo> = {};
for (const [cle, info] of Object.entries(infos as Record<string, Info>)) {
  const src = parNom[info.fichier];
  if (!src) throw new Error(`Photo introuvable pour « ${cle} » : src/assets/photos/${info.fichier}`);
  photos[cle] = { ...info, src };
}

export function photo(...cles: (string | undefined)[]): Photo | undefined {
  for (const cle of cles) if (cle && photos[cle]) return photos[cle];
  return undefined;
}

// Photos de services, pour illustrer les pages villes à tour de rôle
export const photosServices = Object.entries(photos)
  .filter(([cle]) => cle.startsWith('services/'))
  .map(([, p]) => p);

// Lien vers le texte de la licence Creative Commons, quand il y en a un
export function lienLicence(licence: string) {
  if (/^CC0/i.test(licence)) return 'https://creativecommons.org/publicdomain/zero/1.0/deed.fr';
  const m = licence.match(/^CC (BY(?:-SA)?) ([0-9.]+)/i);
  return m ? `https://creativecommons.org/licenses/${m[1].toLowerCase()}/${m[2]}/deed.fr` : undefined;
}

// Une ligne par fichier, pour les crédits des mentions légales
export const credits = [...new Map(Object.values(photos).map((p) => [p.fichier, p])).values()];

// URL absolue d'une version 1200 px en jpg, pour les partages et les données structurées
export async function urlPartage(p: Photo | undefined, site: string) {
  if (!p) return undefined;
  const { getImage } = await import('astro:assets');
  const img = await getImage({ src: p.src, width: 1200, format: 'jpg' });
  return new URL(img.src, site).href;
}
