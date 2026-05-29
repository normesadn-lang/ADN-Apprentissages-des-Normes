# ADN — Apprentissage Des Normes

Jeu pédagogique web pour la formation à la norme **ISO 9001** et au **cycle PDCA**
(Plan – Do – Check – Act). 1 à 6 joueurs · 30 à 90 minutes · public adulte
(étudiants, formateurs, équipes qualité).

## Principe

Chaque joueur progresse le long des 4 arcs du plateau (PLAN, DO, CHECK, ACT) en
répondant à des cartes Défi. Chaque bonne réponse fait avancer le pion :

- **Sans indice** : +2 cases.
- **Avec indice** : +1 case (− 1 case de récompense).
- **Mauvaise réponse** : 0 case.

À la **case Étoile** (avant-dernière case de l'arc), la carte se joue
obligatoirement **sans indice**. Une bonne réponse fait franchir la case
**Symbole** et termine la phase ; on récupère son symbole et on passe à la
phase suivante.

Quand les **4 symboles** sont réunis, un **audit** se déclenche : un scénario
réaliste avec 10 questions (Vrai/Faux, QCM, fill-in, association), à traiter en
3 min de lecture puis 2 min de réponses, avec correction automatique et bilan.

Deux modes de jeu :

- **Tour unique** : 1 cycle PDCA + 1 audit.
- **Partie complète** : 3 cycles PDCA + 3 audits.

## Stack

- React 18, Vite 5
- JavaScript / JSX (pas de TypeScript)
- Aucun framework UI : composants natifs avec styles en ligne

## Contenu

- **96 cartes Défi** réparties sur les 4 phases (24 par phase).
- **18 cartes Audit** sectorielles (agroalimentaire, santé, industrie, BTP,
  services, événementiel, etc.).
- **24 cartes Aléa** disponibles dans les données ; non distribuées par défaut
  dans le tirage (composant `AleaCard` fourni pour réactivation, voir
  `src/App.jsx`).

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Le résultat se trouve dans le dossier `dist/`, prêt à être déployé sur n'importe
quel hébergeur statique (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

Pour prévisualiser le build localement :

```bash
npm run preview
```

## Déploiement

### Netlify

1. Pousser le dépôt sur GitHub / GitLab / Bitbucket.
2. Sur Netlify, « New site from Git » → choisir le dépôt.
3. Build command : `npm run build` · Publish directory : `dist`.

### Vercel

Détection automatique de Vite. Aucune configuration nécessaire.

### GitHub Pages

Avec `base: './'` (déjà configuré dans `vite.config.js`), le contenu de `dist/`
peut être servi tel quel depuis n'importe quel sous-chemin.

## Structure du projet

```
adn-pdca/
├── index.html                  # Point d'entrée Vite
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx                # Bootstrap React
│   ├── App.jsx                 # Machine à états + écrans
│   ├── styles.css              # Animations (pion, halos)
│   ├── theme.js                # Couleurs, géométrie, libellés
│   ├── assets/
│   │   ├── board.jpg           # Image du plateau
│   │   └── logo.jpeg
│   ├── data/
│   │   ├── defis.js            # 96 cartes Défi
│   │   ├── audits.js           # 18 cartes Audit
│   │   └── aleas.js            # 24 cartes Aléa
│   └── components/
│       ├── Board.jsx           # Plateau (PNG + superpositions)
│       ├── DefiCard.jsx        # Carte Défi (question + choix)
│       ├── AuditCard.jsx       # Carte Audit (3 phases minutées)
│       ├── AleaCard.jsx        # Carte Aléa (composant disponible)
│       ├── Medal.jsx           # Médaille hexagonale d'une phase
│       ├── icons.jsx           # Pictogrammes SVG des 4 phases
│       └── audit-utils.js      # Parseurs et correction des audits
```

## Modifier les cartes

Toutes les cartes sont en données pures dans `src/data/`, modifiables sans
toucher au code. Format de chaque carte :

```js
// src/data/defis.js
{
  id: "P1",
  titre: "Hôpital et environnement",
  type: "QCM",              // ou "Vrai/Faux"
  scenario: "...",
  question: "...",
  choixA: "A. ...",
  choixB: "B. ...",
  choixC: "C. ...",
  choixD: "D. ...",
  indice1: "...",
  reponse: "B",
  adn: "Explication détaillée...",
  ref: "Article 4.1 — ..."
}
```

Pour les cartes Audit, le format des questions accepte deux variantes :

```
"Q1 – QCM : énoncé A. choix A B. choix B C. choix C"
"QCM : énoncé A. choix A B. choix B C. choix C"
```

et le corrigé deux variantes également :

```
"Q1-Faux · Q2-B · Q3-Faux · ..."
"1-V, 2-A, 3-Compétences, ..."
```

## Licence

Tous droits réservés. Contenu pédagogique propriété du créateur.
