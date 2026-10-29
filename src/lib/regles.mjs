// Pages villes gardées dans Google sans contenu propre : communes à moins de 12 km
// et villes de plus de 10 000 habitants à moins de 20 km. Les autres y entrent
// dès qu'elles ont un chantier réalisé. Règle partagée par les pages et le sitemap.
export const estProche = (c) => c.km <= 12 || (c.km <= 20 && c.pop >= 10000);
