// Réglages du site : tout ce qui change (domaine, nom, mentions légales) se modifie ici.
export const SITE = {
  // À remplacer par le domaine définitif (aussi dans astro.config.mjs)
  url: 'https://www.electricien-givors.fr',
  brand: 'Électricien Givors',
  baseline: 'Dépannage et travaux électriques à Givors et 30 km autour',
  phone: '06 05 75 57 28',
  phoneIntl: '+33605755728',
  whatsapp: '33605755728',
  center: { nom: 'Givors', cp: '69700', lat: 45.58131, lon: 4.75823 },
  radiusKm: 30,
  // Mentions légales (micro-entreprise). Les champs vides s'affichent « à compléter ».
  legal: {
    editeur: "Enzo D'Adderio, entrepreneur individuel (EI)",
    siret: '',
    adresse: '',
    email: '',
    hebergeur: '',
    hebergeurAdresse: '',
  },
};

export const telHref = `tel:${SITE.phoneIntl}`;
