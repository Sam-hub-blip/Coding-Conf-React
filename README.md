# Coding Conf 2025 — Ticket Generator

Application React qui permet de générer un billet virtuel pour la conférence **Coding Conf 2025**. L'utilisateur remplit un formulaire (nom, email, pseudo GitHub, avatar), puis un billet personnalisé est généré avec un numéro d'identifiant unique.

## Fonctionnalités

- **Formulaire d'inscription** : nom complet, adresse email (avec validation par regex), pseudo GitHub
- **Upload d'avatar** avec glisser-déposer, validation du format (JPG/PNG) et de la taille (max 500 Ko)
- **Génération de billet** : affichage d'un ticket stylisé avec l'avatar, le nom, le pseudo GitHub et un identifiant aléatoire à 6 chiffres
- **Design responsive** avec Tailwind CSS

## Stack technique

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- ESLint pour le linting

## Installation

```bash
git clone <url-du-repo>
cd Coding-Conf-React
npm install
```

## Utilisation

```bash
# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linter le code
npm run lint
```

L'application sera accessible sur `http://localhost:5173` par défaut.

## Structure du projet

```
src/
├── components/
│   ├── firstPage.jsx    # Formulaire d'inscription (Title, Text, Form)
│   └── secondPage.jsx   # Affichage du billet généré (TextSecondPage, Ticket)
├── assets/               # Icônes et logos
├── App.jsx               # Composant principal, gestion de l'état global
├── main.jsx              # Point d'entrée
└── index.css             # Styles globaux
public/
├── images/                # Images de fond et motifs
├── design/                 # Maquettes de référence
└── fonts/                  # Police Inconsolata
```

## Origine du projet

Ce projet est basé sur le challenge [Coding Conf ticket generator](https://www.frontendmentor.io/) de Frontend Mentor.

## Points d'amélioration possibles

- Les valeurs par défaut de `Username`, `UserAddress` et `Github` dans `App.jsx` contiennent des chaînes de test qui devraient être remplacées par des valeurs vides ou `null`
- L'`id` du ticket dans `Ticket` (via `useMemo`) est régénéré côté client uniquement ; pas de persistance côté serveur
- Pas de gestion d'erreur si l'utilisateur clique sur "Generate My Ticket" sans email valide (seul le nom, l'image et le GitHub sont vérifiés)
