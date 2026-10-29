# Site électricien Givors

Site statique (Astro) optimisé SEO local : Givors et 30 km autour.

## Contenu

| Dossier | Rôle |
|---|---|
| `src/config.ts` | Domaine, nom, téléphone, mentions légales |
| `src/content/services/` | 12 pages services (Markdown) |
| `src/content/blog/` | Articles de conseils (Markdown) |
| `src/data/communes.json` | 234 communes à moins de 30 km, `page: true` = page dédiée |
| `src/pages/electricien/[slug].astro` | Modèle des pages villes |
| `CONTENT_GUIDE.md` | Règles de rédaction (à suivre pour tout nouvel article) |

## Commandes

```bash
npm install
npm run dev      # aperçu local sur http://localhost:4321
npm run build    # site compilé dans dist/
```

## Changer le domaine

Remplacer `https://www.electricien-givors.fr` dans `astro.config.mjs` et `src/config.ts`.

## Mise en ligne sur Hostinger

1. Chaque push sur `main` compile le site et le pousse sur la branche `deploy` (GitHub Actions).
2. hPanel > Sites web > Gérer > Avancé > Git : dépôt de ce projet, branche `deploy`, dossier `public_html`.
3. Dépôt privé : copier la clé SSH donnée par Hostinger dans GitHub > Settings > Deploy keys.
4. Activer le déploiement automatique (webhook) pour que chaque push mette le site à jour.

## Ajouter un article

Créer `src/content/blog/<slug>.md` avec le même frontmatter que les autres, en respectant `CONTENT_GUIDE.md`. Le sitemap, les liens et les données structurées se mettent à jour seuls.
