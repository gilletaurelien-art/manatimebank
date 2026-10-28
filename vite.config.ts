import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { construireSitemap, PAGES_VIVANTES, REDIRIGEES, canonique } from "./src/canonique";

// La cible décide du chemin de base ET de l'hôte — pas le code.
//   • GitHub Pages sert sous /manatimebank/ → sans base, les bundles 404, page blanche.
//   • Un domaine propre (manatimebank.org) sert à la RACINE → le base de Pages y 404 pareil.
// Les défauts ci-dessous sont ceux de Pages : la CI n'a rien à changer.
// Pour un domaine : BASE_PATH=/ OUT_DIR=dist SITE_URL=https://manatimebank.org npm run build
//
// 🔴 SITE_URL ajouté le 28/10/2026, et c'est le FRÈRE de BASE_PATH. La canonique
// du HTML livré portait l'URL de Pages en dur : servie sur manatimebank.org,
// elle désignait Pages comme l'adresse officielle du site — Google aurait retiré
// le domaine au profit d'une URL github.io. Même cause que le `base` en dur,
// même correctif, découvert le même jour.
// ⭐ QUAND UNE VALEUR DÉPEND DE LA CIBLE, ELLE EN DÉPEND PARTOUT : le chemin des
// bundles, l'hôte de la canonique, le `Sitemap:` des robots, les `<loc>` du plan
// de site. En corriger une seule laisse le défaut vivant — et invisible, puisque
// la page s'affiche parfaitement dans les quatre cas.
const HOTE_PAGES = "https://gilletaurelien-art.github.io";
const base = process.env.BASE_PATH ?? "/manatimebank/";
const outDir = process.env.OUT_DIR ?? "site";
const siteUrl = (process.env.SITE_URL ?? HOTE_PAGES).replace(/\/$/, "");
const racine = siteUrl + base;

/** Remplace la canonique d'une coquille HTML, et y ajoute og:url. */
function injecterCanonique(html: string, url: string): string {
  return html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>(\s*<meta property="og:url"[^>]*>)?/,
    `<link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />`,
  );
}

/**
 * Pose, dans la SORTIE, tout ce qui dépend de la cible : canonique et og:url du
 * HTML (une coquille par route), plan de site, ligne `Sitemap:` des robots.
 * Chacun échoue bruyamment plutôt que de laisser passer une valeur non substituée.
 */
function cible(): Plugin {
  let coquille = "";
  return {
    name: "valeurs-de-la-cible",
    transformIndexHtml(html) {
      const sortie = injecterCanonique(html, racine);
      if (sortie === html) {
        throw new Error('index.html : aucune <link rel="canonical"> à réécrire');
      }
      coquille = sortie;
      return sortie;
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: construireSitemap(siteUrl, base),
      });
    },
    writeBundle: {
      sequential: true,
      async handler(options) {
        const { readFile, writeFile, mkdir, readdir, stat } = await import("node:fs/promises");
        const dir = options.dir!;

        // 1. UNE COQUILLE HTML PAR ROUTE, chacune avec SA canonique.
        //
        // 🔴 POURQUOI. Le site est une SPA : un seul index.html pour les 19
        // routes, donc une seule canonique pour toutes. Le 28/10/2026, les huit
        // URL du plan de site se déclaraient ainsi copies de l'accueil — sept
        // auraient disparu de l'index. Poser la canonique en JS au changement de
        // route (`poserCanonique`, src/canonique.ts) ne répare que pour les
        // robots qui EXÉCUTENT le JS : Google le fait, la plupart des autres non.
        // ⭐ D'où ces coquilles : la canonique est dans le HTML LIVRÉ.
        // ⚠️ `<title>` et `<meta name="description">` restent ceux de l'accueil
        // sur toutes les pages — défaut connu, NON corrigé ici : il demande un
        // texte par page, donc un arbitrage éditorial, pas un réglage.
        if (!coquille) throw new Error("coquille HTML jamais capturée");
        const routes = [...PAGES_VIVANTES, ...Object.keys(REDIRIGEES)];
        for (const slug of routes) {
          const url = canonique(`/${slug}`, siteUrl, base);
          if (!url) throw new Error(`route ${slug} : aucune canonique calculable`);
          await mkdir(`${dir}/${slug}`, { recursive: true });
          await writeFile(`${dir}/${slug}/index.html`, injecterCanonique(coquille, url));
        }

        // 2. robots.txt : l'hôte de la cible à la place du marqueur.
        const chemin = `${dir}/robots.txt`;
        const texte = await readFile(chemin, "utf8");
        if (!texte.includes("__SITE_URL__")) {
          throw new Error("robots.txt : marqueur __SITE_URL__ absent");
        }
        await writeFile(chemin, texte.replaceAll("__SITE_URL__", racine.replace(/\/$/, "")));

        // 3. ⛔ CONTRÔLE FINAL, par mesure et non par confiance : quand on
        // construit pour un domaine, plus AUCUNE URL de Pages ne doit survivre.
        // C'est ce garde qui a attrapé, le 28/10, un `define` qui ne substituait
        // rien et expédiait le repli Pages dans le bundle.
        if (siteUrl !== HOTE_PAGES) {
          const restes: string[] = [];
          const parcourir = async (d: string): Promise<void> => {
            for (const e of await readdir(d)) {
              const chem = `${d}/${e}`;
              if ((await stat(chem)).isDirectory()) await parcourir(chem);
              else if (/\.(html|txt|xml|js|css|json)$/.test(e)) {
                if ((await readFile(chem, "utf8")).includes("gilletaurelien-art.github.io")) {
                  restes.push(chem);
                }
              }
            }
          };
          await parcourir(dir);
          if (restes.length) {
            throw new Error(`URL de GitHub Pages encore présentes dans :\n  ${restes.join("\n  ")}`);
          }
        }

        // 4. Et le contrôle qui vaut tous les autres : chaque route livrée
        // porte-t-elle BIEN sa propre canonique ? Vérifié sur le fichier écrit.
        for (const slug of routes) {
          const h = await readFile(`${dir}/${slug}/index.html`, "utf8");
          const pose = h.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
          const attendu = canonique(`/${slug}`, siteUrl, base);
          if (pose !== attendu) {
            throw new Error(`/${slug} : canonique ${pose}, attendu ${attendu}`);
          }
        }
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), cible()],
  base,
  define: { __SITE_URL__: JSON.stringify(siteUrl) },
  build: { outDir },
});
