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

/**
 * Les pages qui ont un contenu propre, avec LEUR TITRE. Ordre = ordre du sitemap.
 *
 * 🔴 POURQUOI LE TITRE VIT ICI (28/10/2026). Il était posé en JS, par
 * `useTitre()`, à l'intérieur de chaque composant de page — donc ABSENT du HTML
 * livré, où les quatorze routes portaient le `<title>` et l'`og:title` de
 * l'accueil.
 * ⭐ ET LE COÛT N'EST PAS CELUI QU'ON CROIT. Un `document.title` posé en JS
 * répare ce que Google voit ; il ne répare PAS ce que les gens voient en
 * PARTAGEANT un lien. Les aperçus de Slack, WhatsApp, LinkedIn, iMessage et
 * Signal lisent l'`og:title` du HTML et n'exécutent aucun JS : chaque lien
 * partagé vers le manifeste, l'indice ou la méthode affichait la vignette de
 * l'accueil. Pour un site doctrinal dont l'objet est d'être CITÉ, c'est une
 * perte directe, et elle se constate sans outil — il suffit de coller un lien
 * dans une conversation.
 * ⚠️ Les `description` restent génériques À DESSEIN : elles n'existent nulle
 * part, pas même en JS. C'est de l'écriture, donc un arbitrage d'Aurélien, et
 * on préfère une description générique à une description inventée.
 */
export interface Page {
  slug: string;
  titre: string;
  /** ⚠️ Facultative À DESSEIN : seules six pages en ont une d'écrite. */
  description?: string;
}

export const PAGES: readonly Page[] = [
  { slug: "comprendre", titre: "La raison d'être de MANA TIME BANK",
    description:
      "Manifeste du temps retrouvé, vision du projet et charte de confiance : pourquoi le temps est le bien commun premier de l'humanité, ce que MANA TIME BANK observe, et les engagements qui garantissent que les conclusions restent soumises aux données." },
  { slug: "observer", titre: "Ce que MANA TIME BANK observe",
    description:
      "Le parcours d'observation : les données disponibles du temps mondial (PWT, SDG 5.4.1), l'indice MANA et la visibilité des circuits, le portrait d'un système temporel — et les limites de ce qu'on peut conclure. Aucun score, aucun classement." },
  { slug: "regimes", titre: "Typologie des régimes temporels" },
  { slug: "methode", titre: "Méthode MANA v0.2 — publique et versionnée",
    description:
      "Dix articles, un faisceau de neuf regards, des interdits : pas de score, pas de classement, mesuré/interprété/hypothèse/invisible. Méthode publique, versionnée, falsifiable." },
  { slug: "temps-vecu", titre: "Du temps possédé au temps vécu",
    description:
      "Essai en trois échelles (individu, collectivités, humanité) : temps vécu et liberté temporelle à l'ère des machines. Avoir, valoir, être ; le paradoxe du progrès technique ; Internet, diapason potentiel." },
  { slug: "soutenir", titre: "Soutenir MANA TIME BANK",
    description:
      "Soutenir la production de connaissances d'intérêt général sur le temps : un don ponctuel ou mensuel à l'Alliance MANA, sans contrepartie, pour documenter les régimes temporels et maintenir la méthode accessible à toutes et tous." },
  { slug: "etude-pilote", titre: "Étude des temporalités d'un territoire",
    description:
      "Une étude documentée des temporalités d'un territoire : cartographie des données et zones d'ombre, régimes temporels observables, contraintes et marges de liberté temporelle — sans score global ni classement. Tarif de lancement pilote." },
  { slug: "regime-insomniaque-connecte", titre: "Le régime insomniaque connecté" },
  { slug: "regime-synchronise-institutionnel", titre: "Le régime synchronisé institutionnel" },
  { slug: "regime-fragmente-marchand", titre: "Le régime fragmenté marchand" },
  { slug: "regime-care-massif", titre: "Le régime du care massif" },
  { slug: "regime-saisonnier", titre: "Le régime saisonnier" },
  { slug: "mentions-legales", titre: "Mentions légales" },
];

export const PAGES_VIVANTES: readonly string[] = PAGES.map((p) => p.slug);

/** Le titre générique : l'accueil, et les pages d'erreur. */
export const TITRE_GENERIQUE =
  "MANA TIME BANK — Le temps comme ressource, l'humanité comme système";

/**
 * Le titre complet d'un chemin de route, ou `null` pour une route inconnue —
 * une page d'erreur porte le générique, comme elle ne porte pas de canonique.
 * ⚠️ Une route qui REDIRIGE porte le titre de sa destination, exactement comme
 * elle en porte la canonique : les deux doivent raconter la même chose.
 */
export function pageDeLaRoute(path: string): Page | null {
  const nu = path.replace(/\/$/, "") || "/";
  const slug = nu.match(/^\/([\w-]+)$/)?.[1];
  if (!slug) return null;
  const cible = REDIRIGEES[slug] ?? slug;
  return PAGES.find((p) => p.slug === cible) ?? null;
}

/**
 * La description d'un chemin, ou `null` : la générique de l'accueil reste alors
 * en place. ⚠️ On ne REMPLIT PAS les sept pages qui n'en ont pas : une
 * description inventée est pire qu'une description générique. C'est de
 * l'écriture, donc un arbitrage d'Aurélien.
 */
export function descriptionDeLaRoute(path: string): string | null {
  return pageDeLaRoute(path)?.description ?? null;
}

export function titreDeLaRoute(path: string): string | null {
  const nu = path.replace(/\/$/, "") || "/";
  if (nu === "/") return TITRE_GENERIQUE;
  const page = pageDeLaRoute(nu);
  return page ? `${page.titre} — MANA TIME BANK` : null;
}

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
  if (!PAGES_VIVANTES.includes(cible)) return null;
  return prefixe + cible;
}

/**
 * Pose titre, canonique, og:url et og:title selon le chemin courant.
 * ⚠️ `og:title` AUTANT que `<title>` : c'est l'og qui décide de l'aperçu d'un
 * lien partagé. Le HTML livré les porte déjà (vite.config.ts) ; ceci tient la
 * navigation côté client.
 */
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

  const titre = titreDeLaRoute(path) ?? TITRE_GENERIQUE;
  document.title = titre;
  poserMeta("property", "og:title", titre);
  const desc = descriptionDeLaRoute(path);
  if (desc) {
    poserMeta("name", "description", desc);
    poserMeta("property", "og:description", desc);
  }
}

function poserMeta(cle: "name" | "property", nom: string, valeur: string): void {
  let m = document.querySelector<HTMLMetaElement>(`meta[${cle}="${nom}"]`);
  if (!m) {
    m = document.createElement("meta");
    m.setAttribute(cle, nom);
    document.head.appendChild(m);
  }
  m.content = valeur;
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
