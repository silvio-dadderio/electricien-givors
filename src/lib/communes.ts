import data from '../data/communes.json';

export type Commune = {
  slug: string;
  nom: string;
  cp: string[];
  dep: string;
  depNom: string;
  epci: string | null;
  pop: number;
  km: number;
  lat: number;
  lon: number;
  page: boolean;
};

export const communes = data as Commune[];
export const communesAvecPage = communes.filter((c) => c.page);

function distance(a: Commune, b: Commune) {
  const r = (x: number) => (x * Math.PI) / 180;
  const dLat = r(b.lat - a.lat);
  const dLon = r(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

export function voisines(c: Commune, n = 6) {
  return communesAvecPage
    .filter((o) => o.slug !== c.slug)
    .map((o) => ({ ...o, d: distance(c, o) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, n);
}

// Communes sans page dédiée proches de c, pour les citer dans le texte
export function villagesProches(c: Commune, n = 5) {
  return communes
    .filter((o) => !o.page && o.slug !== c.slug)
    .map((o) => ({ ...o, d: distance(c, o) }))
    .filter((o) => o.d <= 8)
    .sort((a, b) => a.d - b.d)
    .slice(0, n);
}

// Choix stable d'une variante de texte selon la commune
export function variante<T>(slug: string, options: T[]): T {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return options[h % options.length];
}

export function formatPop(n: number) {
  return n.toLocaleString('fr-FR').replace(/ /g, ' ');
}

export function lienCommune(nom: string) {
  const c = communesAvecPage.find((o) => o.nom === nom);
  return c ? `/electricien/${c.slug}/` : null;
}
