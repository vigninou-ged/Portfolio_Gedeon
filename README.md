# Portfolio

Petit portfolio personnel construit avec TypeScript et React (configuration compatible Vite / bundler). Ce dépôt contient le code source, la configuration TypeScript et les scripts pour développement, build et déploiement.

## Fonctionnalités
- Pages et composants React en TypeScript
- Configuration moderne (ES2020, JSX React)
- Alias de chemins: `@/*` → `src/*`
- Prêt pour build et déploiement statique

## Prérequis
- Node.js >= 16
- npm ou yarn

## Installation
```bash
# depuis la racine du projet
npm install
# ou
yarn
```

## Scripts usuels
```bash
npm run dev     # lance le serveur de développement
npm run build   # crée la version de production
npm run preview # prévisualisation locale de la build
npm test        # (si des tests sont configurés)
```

(Vérifier package.json pour la liste exacte des scripts.)

## Structure du projet (extrait)
- src/       — code source (composants, pages, styles)
- public/    — ressources publiques (favicon, images statiques)
- tsconfig.app.json — configuration TypeScript (target ES2020, JSX react-jsx)
- package.json — dépendances et scripts

## Configuration TypeScript
Le fichier principal de config TypeScript utilisé pour l'application se trouve dans:
`tsconfig.app.json` (target ES2020, moduleResolution: bundler, alias `@/*` → `src/*`).

## Déploiement
1. Générer la build: `npm run build`
2. Servir le dossier `dist` avec un serveur statique (Netlify, Vercel, Surge, GitHub Pages, etc.)

## Contribution
- Ouvrir une issue pour discuter des changements
- Faire une branche dédiée et soumettre une pull request claire

## Licence
Ajouter ici la licence choisie (ex: MIT). Si aucune licence fournie, les droits sont réservés à l'auteur.
