// Thème visuel et géométrie du plateau pour les 4 phases du cycle PDCA.

// Palette par phase : couleurs de tuile, bordure néon, halo, badge, libellé...
export const PHASES = {
  "P": {
    "tile": "#6B0A0A",
    "lit": "#9B1414",
    "border": "#FF3030",
    "glow": "#FF0000",
    "badge": "#8B0000",
    "label": "PLAN",
    "desc": [
      "Planifier",
      "Anticiper",
      "Définir"
    ],
    "shape": "rect"
  },
  "D": {
    "tile": "#080D50",
    "lit": "#101A7A",
    "border": "#4466FF",
    "glow": "#2244FF",
    "badge": "#0A1040",
    "label": "DO",
    "desc": [
      "Réaliser",
      "Mettre en oeuvre",
      "Exécuter"
    ],
    "shape": "circle"
  },
  "C": {
    "tile": "#083808",
    "lit": "#104E10",
    "border": "#33BB44",
    "glow": "#22AA33",
    "badge": "#0A3A0A",
    "label": "CHECK",
    "desc": [
      "Vérifier",
      "Mesurer",
      "Évaluer"
    ],
    "shape": "rect"
  },
  "A": {
    "tile": "#4A2800",
    "lit": "#6E3E00",
    "border": "#FF9922",
    "glow": "#FF8800",
    "badge": "#3A2000",
    "label": "ACT",
    "desc": [
      "Agir",
      "Améliorer",
      "Optimiser"
    ],
    "shape": "circle"
  }
};

// Arcs du plateau (angles de début/fin en degrés) pour positionner le pion et l'étoile.
// Le pion progresse de 0 (case lettre) à 5 (case symbole) le long de l'arc de sa phase.
export const ARCS = {
  "P": {
    "s": 196,
    "e": 264
  },
  "D": {
    "s": 276,
    "e": 344
  },
  "C": {
    "s": 16,
    "e": 84
  },
  "A": {
    "s": 96,
    "e": 164
  }
};

// Libellés et couleurs d'accent par phase.
export const LABELS = {
  "P": {
    "label": "PLAN",
    "color": "#00BDD5",
    "light": "#e0f7fa"
  },
  "D": {
    "label": "DO",
    "color": "#E6187D",
    "light": "#fce4ec"
  },
  "C": {
    "label": "CHECK",
    "color": "#F56533",
    "light": "#fff3e0"
  },
  "A": {
    "label": "ACT",
    "color": "#55B84E",
    "light": "#e8f5e9"
  }
};

// Ordre du cycle PDCA.
export const ORDER = [
  "P",
  "D",
  "C",
  "A"
];

// Rayon (en % du plateau) sur lequel se déplace le pion.
export const PAWN_RADIUS = 43;
