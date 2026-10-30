# Photos du site

Mettre ici les photos (jpg, png ou webp), puis déclarer chacune dans `src/data/photos.json` :

```json
{
  "accueil": {
    "fichier": "accueil.jpg",
    "alt": "Électricien qui contrôle un tableau électrique",
    "auteur": "Nom du photographe",
    "source": "https://unsplash.com/photos/...",
    "licence": "Licence Unsplash"
  },
  "services/tableau-electrique": { "fichier": "tableau.jpg", "alt": "...", "auteur": "...", "source": "...", "licence": "..." }
}
```

Clés possibles : `accueil`, `services/<slug>`, `blog/<slug>`. Un article sans photo prend celle de son service.
Les pages villes reprennent, à tour de rôle, les photos des services.
Les crédits s'affichent automatiquement dans les mentions légales.
Uniquement des photos libres de droit ou dont on a les droits, jamais présentées comme un chantier réalisé.
