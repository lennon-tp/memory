# Memory Game - Ionic + Capacitor (Android)

## Description

Ce projet est un jeu de Memory (jeu de paires) développé avec Ionic Framework et Angular.  
L’objectif est de retrouver les 8 paires de cartes dans une grille 4x4.

Le jeu est conçu pour fonctionner sur Android grâce à Capacitor.

## Fonctionnalités

- Grille de jeu 4x4 (16 cartes)
- Mélange aléatoire des cartes à chaque partie
- Retourner les cartes au clic
- Vérification des paires :
  - Si identiques : elles restent visibles
  - Sinon : elles se retournent après un délai
- Blocage des interactions pendant la vérification
- Compteur de coups
- Détection de la victoire
- Bouton "Rejouer"
- Animations de retournement (flip CSS)
- Interface responsive

## Stack technique

- Ionic Framework (Angular)
- Capacitor (Android)
- TypeScript
- HTML / SCSS

## Installation

### Prérequis

- Node.js (version recommandée LTS)
- Ionic CLI :
  ```bash
  npm install -g @ionic/cli