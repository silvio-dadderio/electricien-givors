# Guide de rédaction du site

Site d'un service d'électricité basé à Givors (69700), zone d'intervention : 30 km autour (Grigny-sur-Rhône, Chasse-sur-Rhône, Ternay, Mornant, Brignais, Vienne, Rive-de-Gier, Saint-Genis-Laval, Oullins-Pierre-Bénite, Lyon sud...).
Clients : particuliers, copropriétés, commerces, locaux professionnels.
Contact : téléphone 06 05 75 57 28, page devis `/contact/`.

## Règles absolues

1. **Aucun tiret cadratin (—) ni demi-cadratin (–)**, nulle part. À la place : virgule, point, deux-points, parenthèses. Le trait d'union simple dans les mots composés est normal (Grigny-sur-Rhône, peut-être).
2. **Aucun chiffre inventé** : pas de prix, pas de tarif, pas de délai d'intervention, pas de pourcentage d'économie, pas de statistique, pas d'années d'expérience, pas de nombre de clients.
3. **Aucune promesse non vérifiée** : pas de « 24h/24 », pas de « 7j/7 », pas de « intervention en 30 minutes », pas de garantie chiffrée, pas d'avis clients, pas de témoignages.
4. **Aucune qualification ni label** : ne jamais citer Qualifelec, RGE, IRVE, QualiPAC, « certifié », « agréé ».
5. **Normes et règles : uniquement ce qui est sûr.** Faits autorisés :
   - La norme NF C 15-100 encadre les installations électriques basse tension dans les logements.
   - Une protection différentielle 30 mA protège les personnes contre les contacts avec un courant de fuite.
   - Le diagnostic électrique est obligatoire pour vendre ou louer un logement dont l'installation a plus de 15 ans. Il est valable 3 ans pour une vente, 6 ans pour une location. Il est réalisé par un diagnostiqueur certifié, pas par l'électricien. L'électricien intervient ensuite pour corriger les anomalies.
   - Pour une installation neuve, une attestation de conformité visée par le Consuel est demandée avant la mise en service.
   - Les pannes du réseau public relèvent d'Enedis : le numéro de dépannage figure sur la facture d'électricité.
   Si un détail technique précis n'est pas certain (cote, section de câble, distance, nombre de prises par circuit), rester général : « votre électricien vérifie la règle applicable à votre cas ».
6. **Sécurité** : ne jamais pousser au bricolage électrique. Les vérifications autorisées pour le lecteur : réarmer un disjoncteur, débrancher des appareils, regarder si les voisins ont du courant, couper le courant au tableau. Pour tout le reste : appeler un électricien.
7. **Interdit** : tarifs, « pas cher », « le moins cher », comparaison avec des concurrents nommés, bornes de recharge pour véhicule électrique (pas proposé).

## Ton

- Vouvoiement. Français simple, phrases courtes, zéro jargon. Quand un terme technique est utile (différentiel, fil pilote, liaison équipotentielle), l'expliquer en une phrase.
- Concret : situations réelles (« le disjoncteur saute quand le four et le lave-linge tournent en même temps »).
- Utiliser « nous » pour l'entreprise. Phrases d'appel à l'action variées : « Appelez le 06 05 75 57 28 », « Demandez votre devis gratuit », lien vers `/contact/`.

## SEO

- Le `title` du frontmatter est le H1. **Ne pas écrire de H1 (`#`) dans le corps.** Le corps commence par un paragraphe d'intro de 2 à 4 phrases qui contient le mot-clé principal.
- Structure en `##` et `###`. Titres explicites, souvent sous forme de question ou d'action.
- `seoTitle` : 60 caractères maximum, mot-clé au début, souvent avec « Givors ».
- `description` : 140 à 160 caractères, donne envie de cliquer, contient le mot-clé.
- Mentionner Givors et 2 ou 3 communes de la zone de façon naturelle, sans bourrage.
- 2 à 4 liens internes par page vers les pages listées ci-dessous, avec un texte d'ancre descriptif (jamais « cliquez ici »).
- 3 à 5 questions de FAQ dans le frontmatter (questions que les gens tapent dans Google). Les réponses : 2 à 4 phrases. Ne pas répéter la FAQ dans le corps.
- Listes à puces quand ça aide la lecture. Pas de tableau de prix.

## Pages services (`src/content/services/<slug>.md`)

| slug | sujet |
|---|---|
| depannage-electrique | Dépannage électrique, recherche de panne |
| tableau-electrique | Remplacement et mise à niveau du tableau électrique |
| mise-aux-normes-electrique | Mise en sécurité et mise aux normes de l'installation |
| renovation-electrique | Rénovation électrique complète (maison, appartement) |
| installation-electrique | Installation neuve, extension, ajout de prises et de circuits |
| eclairage | Éclairage intérieur et extérieur |
| chauffage-electrique | Radiateurs, sèche-serviettes, programmation du chauffage |
| vmc | VMC et ventilation |
| interphone-visiophone | Interphone, visiophone, raccordement de portail motorisé |
| volets-roulants | Raccordement et dépannage de volets roulants électriques |
| copropriete-tertiaire | Copropriétés, commerces, bureaux, locaux professionnels |
| travaux-apres-diagnostic | Travaux de mise en conformité après un diagnostic électrique |

Frontmatter :

```yaml
---
title: "Dépannage électrique à Givors et alentours"
seoTitle: "Dépannage électrique Givors : panne, disjoncteur"
description: "..."
excerpt: "Une ou deux phrases pour les cartes de la page d'accueil."
order: 1
faq:
  - q: "..."
    a: "..."
---
```

Corps : 700 à 1000 mots. Sections conseillées : quand faire appel à nous (situations), ce que nous faisons concrètement, comment se passe l'intervention (appel, diagnostic, devis, travaux), conseils / à savoir, zone d'intervention (quelques communes), appel à l'action final.

## Articles de blog (`src/content/blog/<slug>.md`)

| slug | sujet |
|---|---|
| disjoncteur-qui-saute | Disjoncteur qui saute : causes et que faire |
| panne-courant-une-piece | Plus de courant dans une seule pièce : que vérifier |
| differentiel-qui-saute-pluie-nuit | Différentiel qui saute quand il pleut ou la nuit |
| quand-changer-tableau-electrique | Quand faut-il changer son tableau électrique ? |
| diagnostic-electrique-vente-location | Diagnostic électrique avant une vente ou une location |
| norme-nf-c-15-100-renovation | NF C 15-100 : l'essentiel avant une rénovation |
| prise-qui-chauffe | Prise qui chauffe, grésille ou noircit : que faire |
| renovation-electrique-maison-ancienne | Rénover l'électricité d'une maison ancienne : les étapes |
| electricite-salle-de-bains | Électricité dans la salle de bains : les règles de sécurité |
| bien-choisir-electricien | Bien choisir son électricien : les questions à poser |
| coupure-de-courant-que-faire | Coupure de courant : panne chez vous ou panne Enedis ? |
| chauffage-electrique-reduire-facture | Chauffage électrique : réduire sa consommation sans tout changer |

Frontmatter :

```yaml
---
title: "Disjoncteur qui saute : les causes et que faire"
seoTitle: "Disjoncteur qui saute : causes et solutions"
description: "..."
date: 2026-10-29
service: depannage-electrique   # slug du service le plus lié
faq:
  - q: "..."
    a: "..."
---
```

Corps : 900 à 1300 mots. Répondre à la question dès le premier paragraphe. Puis le détail, les cas fréquents, ce que le lecteur peut vérifier sans danger, quand appeler un électricien, appel à l'action final (Givors et alentours, 06 05 75 57 28, lien `/contact/`).

## Liens internes disponibles

- Services : `/services/<slug>/`
- Articles : `/blog/<slug>/`
- Devis : `/contact/`
- Zone d'intervention : `/zone-intervention/`
- Pages villes : `/electricien/<commune>/` (ex. `/electricien/givors/`, `/electricien/mornant/`, `/electricien/brignais/`, `/electricien/vienne/`, `/electricien/grigny-sur-rhone/`, `/electricien/chasse-sur-rhone/`, `/electricien/rive-de-gier/`)
