import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base "./" => les chemins d'assets sont relatifs, ce qui permet un déploiement
// aussi bien à la racine d'un domaine que dans un sous-dossier (Netlify, GitHub Pages...).
export default defineConfig({
  plugins: [react()],
  base: './',
})
