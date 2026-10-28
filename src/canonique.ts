// La carte des routes, et la canonique qui en découle — 28/10/2026.
//
// 🔴 POURQUOI CE FICHIER EXISTE. Le 28/10, les 18 routes du site servaient
// TOUTES la même balise `<link rel="canonical">`, pointant de surcroît sur
// GitHub Pages. Deux dégâts : le domaine propre était déclaré copie de Pages,
// et les 17 autres pages étaient déclarées copies de l'accueil. C'est le
// pendant exact du défaut `base: "/manatimebank/"` corrigé le même jour :
// une valeur de PAGES figée dans un fichier servi sur un domaine.
//
// ⚠️ Le site est une SPA sans prérendu : un seul index.html pour toutes les
// routes. Une canonique statique est donc forcément fausse sur toutes sauf
// une. Elle doit être posée à l'exécution, par route — c'est ce que fait
// `poserCanonique()`. Le HTML livré porte, lui, la canonique de l'accueil au
// bon hôte (voir le greffon `SITE_URL` de vite.config.ts) : c'est ce que lit
// un robot qui n'exécute pas le JS.
//
// ⭐ Et surtout : cette table est la SOURCE UNIQUE. App.tsx y lit ses
// redirections, le générateur de sitemap y lit ses URL, et un test vérifie
// que les trois concordent. Une liste recopiée vieillit en silence.

/** Les pages qui ont un contenu propre. Ordre = ordre du sitemap. */
export const PAGES_VIVANTES = [
  "comprendre",
  "observer",
  "regimes",
  "methode",
  "temps-vecu",
  "soutenir",
  "etude-pilote",
  "regime-insomniaque-connecte",
  "regime-synchronise-institutionnel",
  "regime-fragmente-marchand",
  "regime-care-massif",
  "regime-saisonnier",
  "mentions-legales",
] as const;

/**
 * Anciennes routes dont le contenu a été fusionné : elles redirigent, et leur
 * canonique est leur DESTINATION — jamais elles-mêmes. Se canonicaliser soi-même
 * quand on redirige demande à Google d'indexer une page qui n'existe plus.
 */
export const REDIRIGEES: Record<string, string> = {
  manifeste: "comprendre",
  vision: "comprendre",
  charte: "comprendre",
  donnees: "observer",
  indice: "observer",
  portrait: "observer",
};

/**
 * L'adresse publique du site, substituée au build par `define`.
 *
 * ⚠️ PAS via `import.meta.env` : ce module est aussi importé par vite.config.ts
 * (pour émettre le sitemap), où `import.meta.env` n'existe pas. Une lecture
 * défensive du genre `(import.meta as ImportMeta).env?.VITE_SITE_URL` NE SE FAIT
 * PAS SUBSTITUER — `define` remplace un TEXTE exact — et le bundle emportait
 * alors le repli Pages en croyant porter le domaine. Mesuré le 28/10/2026, juste
 * avant expédition. ⭐ Une substitution qui échoue ne laisse pas de trou : elle
 * laisse la valeur par défaut, qui a l'air normale.
 */
declare const __SITE_URL__: string | undefined;
export const SITE_URL: string =
  typeof __SITE_URL__ !== "undefined" ? __SITE_URL__ : "https://gilletaurelien-art.github.io";

/**
 * L'URL canonique d'un chemin de route (« / », « /observer », « /manifeste »).
 * Rend `null` pour une route inconnue : une page d'erreur ne se canonicalise pas.
 */
export function canonique(path: string, siteUrl = SITE_URL, base = "/"): string | null {
  const racine = siteUrl.replace(/\/$/, "") + "/" + base.replace(/^\/|\/$/g, "");
  const prefixe = racine.replace(/\/$/, "") + "/";
  const slug = path.match(/^\/([\w-]+)\/?$/)?.[1];
  if (!slug) return path === "/" || path === "" ? prefixe : null;
  const cible = REDIRIGEES[slug] ?? slug;
  if (!(PAGES_VIVANTES as readonly string[]).includes(cible)) return null;
  return prefixe + cible;
}

/** Pose (ou retire) la balise canonique du document selon le chemin courant. */
export function poserCanonique(path: string): void {
  const base = (import.meta.env.BASE_URL ?? "/") as string;
  const url = canonique(path, SITE_URL, base);
  let lien = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!url) {
    lien?.remove();
    return;
  }
  if (!lien) {
    lien = document.createElement("link");
    lien.rel = "canonical";
    document.head.appendChild(lien);
  }
  lien.href = url;
  let og = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
  if (!og) {
    og = document.createElement("meta");
    og.setAttribute("property", "og:url");
    document.head.appendChild(og);
  }
  og.content = url;
}

/**
 * Le plan de site, dérivé de la même table que les routes et les canoniques.
 *
 * 🔴 Le 28/10/2026, `public/sitemap.xml` annonçait SEIZE URL : six
 * redirections (manifeste, vision, charte, donnees, indice, portrait)
 * présentées comme canoniques, et il OMETTAIT les quatre pages de destination
 * — dont `comprendre` et `observer`, les deux plus importantes du site. Il
 * décrivait l'ancien jeu de routes, figé au jour de son écriture.
 * ⭐ Le fichier a donc été SUPPRIMÉ du dépôt : il est désormais émis par le
 * build, depuis cette table. Une liste qui ne peut plus être recopiée ne peut
 * plus vieillir.
 */
export function construireSitemap(siteUrl: string, base: string): string {
  const racine =
    (siteUrl.replace(/\/$/, "") + "/" + base.replace(/^\/|\/$/g, "")).replace(/\/$/, "") + "/";
  const prio = (s: string) =>
    s === "mentions-legales" ? "0.3" : s.startsWith("regime-") ? "0.6" : "0.8";
  const lignes = [
    `  <url><loc>${racine}</loc><priority>1.0</priority></url>`,
    ...PAGES_VIVANTES.map(
      (s) => `  <url><loc>${racine}${s}</loc><priority>${prio(s)}</priority></url>`,
    ),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lignes.join(
    "\n",
  )}\n</urlset>\n`;
}
