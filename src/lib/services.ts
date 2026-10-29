// Libellés courts des services pour les menus, cartes et listes
const noms: Record<string, string> = {
  'depannage-electrique': 'Dépannage électrique',
  'tableau-electrique': 'Tableau électrique',
  'mise-aux-normes-electrique': 'Mise aux normes',
  'renovation-electrique': 'Rénovation électrique',
  'installation-electrique': 'Installation et prises',
  eclairage: 'Éclairage',
  'chauffage-electrique': 'Chauffage électrique',
  vmc: 'VMC et ventilation',
  'interphone-visiophone': 'Interphone et visiophone',
  'volets-roulants': 'Volets roulants',
  'copropriete-tertiaire': 'Copropriétés et pros',
  'travaux-apres-diagnostic': 'Travaux après diagnostic',
};

export function nomCourt(s: { id: string; data: { title: string } }) {
  return noms[s.id] ?? s.data.title.split(' à ')[0];
}
