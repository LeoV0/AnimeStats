# YumeTack 🎌

Application full-stack permettant de découvrir des animés et de suivre précisément les épisodes visionnés.
Projet personnel orienté **UX**, **performance** et **architecture scalable**, avec une API REST sécurisée.

**[Démo en ligne](https://yumetrack.netlify.app/)**  
**[Code source](https://github.com/LeoV0/AnimeStats)**

![CI](https://github.com/LeoV0/AnimeStats/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/github/license/LeoV0/AnimeStats)
![Repo Size](https://img.shields.io/github/repo-size/LeoV0/AnimeStats)

---

## Fonctionnalités

- Découverte d’animés
- Suivi des épisodes et animés visionnés
- Filtres avancés (genres, studios)
- Gestion du profil utilisateur
- Authentification sécurisée (JWT)

---

## Stack technique

### Frontend
- React 19
- TypeScript 5.3
- Vite 7
- Tailwind CSS 4
- Radix UI

### Backend
- NestJS 11 (Express)
- Prisma ORM 6.19
- JWT / Passport
- Jest (tests)
- SQLite (développement)

---


## Démarrage rapide

### Prérequis
- Node.js 18+
- npm ou pnpm

## Installation
```bash
git clone https://github.com/LeoV0/AnimeStats.git
cd AnimeStats
```

## Frontend
```bash
cd frontend
npm install
npm run dev
```
Accéder à http://localhost:5173

## Backend (nouveau terminal)
```bash
cd backend
npm install
cp .env.example .env
npm run prisma:migrate
npm run start:dev
```
API accessible à http://localhost:3000

## Scripts disponibles
```bash
Frontend
npm run dev
npm run build
npm run lint
npm test
```

```bash
Backend
npm run start:dev
npm run build
npm test
```
```bash
Prisma
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
```
## Configuration
```bash
Variables d'environnement backend (.env)
DATABASE_URL=file:./dev.db
JWT_SECRET=your_secret_key_here
JWT_EXPIRATION=24h
PORT=3000
NODE_ENV=development
```
## Tests
```bash
Frontend
cd frontend && npm test

Backend
cd backend && npm test
Tests lancés automatiquement via GitHub Actions sur chaque push.
```

## Déploiement
Frontend : Déployé sur Netlify

Backend : Déployé sur Render

## Auteur
**[LéoV0](https://github.com/LeoV0)**