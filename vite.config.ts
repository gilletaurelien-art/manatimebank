import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Le chemin de base dépend de la CIBLE, pas du code.
//   • GitHub Pages sert sous /manatimebank/ → sans base, les bundles 404, page blanche.
//   • Un domaine propre (manatimebank.org) sert à la RACINE → le base de Pages y 404 pareil.
// Les défauts ci-dessous sont ceux de Pages : la CI n'a rien à changer.
// Pour un domaine : BASE_PATH=/ OUT_DIR=dist npm run build
//   (OUT_DIR sort dans dist/, gitignoré, pour ne pas écraser le site/ suivi par git)
// ⚠️ public/sitemap.xml et public/robots.txt portent l'URL de Pages en dur : le
//    déploiement sur un domaine les réécrit APRÈS le build, dans OUT_DIR.
const base = process.env.BASE_PATH ?? "/manatimebank/";
const outDir = process.env.OUT_DIR ?? "site";

export default defineConfig({
  plugins: [react()],
  base,
  build: { outDir },
});
