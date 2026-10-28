import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  PAGES,
  PAGES_VIVANTES,
  REDIRIGEES,
  TITRE_GENERIQUE,
  canonique,
  construireSitemap,
  titreDeLaRoute,
  descriptionDeLaRoute,
} from "./canonique";

const app = readFileSync(new URL("./App.tsx", import.meta.url), "utf8");

// Ces tests LISENT les fichiers plutôt que de recopier une liste : c'est la
// seule forme qui échoue quand une page est ajoutée, fusionnée ou renommée.
describe("la carte des routes est la source unique", () => {
  it("toute page vivante a un composant dans la table PAGES d'App.tsx", () => {
    const table = app.match(/const PAGES[\s\S]*?\n\};/)?.[0] ?? "";
    expect(table).not.toBe("");
    const manquantes = PAGES_VIVANTES.filter(
      (s) => !new RegExp(`(^|\\n)\\s+"?${s}"?:`).test(table),
    );
    expect(manquantes).toEqual([]);
  });

  it("toute entrée de la table PAGES est déclarée vivante ou redirigée", () => {
    const table = app.match(/const PAGES[\s\S]*?\n\};/)?.[0] ?? "";
    const clefs = [...table.matchAll(/\n\s+"?([\w-]+)"?:\s/g)].map((m) => m[1]);
    const connues = new Set<string>([...PAGES_VIVANTES, ...Object.keys(REDIRIGEES)]);
    expect(clefs.filter((k) => !connues.has(k))).toEqual([]);
  });

  it("aucune redirection ne pointe sur une page morte", () => {
    const mortes = Object.values(REDIRIGEES).filter(
      (c) => !(PAGES_VIVANTES as readonly string[]).includes(c),
    );
    expect(mortes).toEqual([]);
  });

  it("une redirection se canonicalise vers sa DESTINATION, jamais elle-même", () => {
    for (const [ancienne, cible] of Object.entries(REDIRIGEES)) {
      const u = canonique(`/${ancienne}`, "https://manatimebank.org", "/");
      expect(u).toBe(`https://manatimebank.org/${cible}`);
    }
  });

  it("chaque page vivante se canonicalise sur elle-même, à l'hôte demandé", () => {
    for (const s of PAGES_VIVANTES) {
      expect(canonique(`/${s}`, "https://manatimebank.org", "/")).toBe(
        `https://manatimebank.org/${s}`,
      );
    }
    expect(canonique("/", "https://manatimebank.org", "/")).toBe("https://manatimebank.org/");
  });

  // ── LES TITRES ──────────────────────────────────────────────────────────
  // Le défaut du 28/10 : les titres étaient posés en JS, donc absents du HTML
  // livré. Les aperçus de lien (Slack, WhatsApp, LinkedIn…) n'exécutent pas le
  // JS : chaque lien partagé montrait la vignette de l'accueil.
  it("chaque page vivante a un titre non vide", () => {
    const sans = PAGES.filter((p) => !p.titre || !p.titre.trim());
    expect(sans.map((p) => p.slug)).toEqual([]);
  });

  it("deux pages ne partagent JAMAIS le même titre", () => {
    const vus = new Map<string, string[]>();
    for (const p of PAGES) vus.set(p.titre, [...(vus.get(p.titre) ?? []), p.slug]);
    const doublons = [...vus.entries()].filter(([, s]) => s.length > 1);
    expect(doublons).toEqual([]);
  });

  it("chaque route plate rend un titre, suffixé par la marque", () => {
    for (const s of PAGES_VIVANTES) {
      const t = titreDeLaRoute(`/${s}`);
      expect(t).toBeTruthy();
      expect(t).toMatch(/ — MANA TIME BANK$/);
      expect(t).not.toBe(TITRE_GENERIQUE);
    }
    expect(titreDeLaRoute("/")).toBe(TITRE_GENERIQUE);
  });

  // ⚠️ Une route qui REDIRIGE porte le titre de sa destination, exactement
  // comme elle en porte la canonique : les deux doivent raconter la même chose.
  it("une redirection porte le titre de sa DESTINATION", () => {
    for (const [ancienne, cible] of Object.entries(REDIRIGEES)) {
      expect(titreDeLaRoute(`/${ancienne}`)).toBe(titreDeLaRoute(`/${cible}`));
    }
  });

  it("une route inconnue porte le GÉNÉRIQUE, pas un titre de page", () => {
    expect(titreDeLaRoute("/inexistant-xyz")).toBeNull();
  });

  // ⛔ On ne REMPLIT PAS les descriptions manquantes : une description inventée
  // est pire qu'une description générique. C'est de l'écriture, pas un réglage.
  it("une description n'est rendue que si elle est ÉCRITE", () => {
    for (const p of PAGES) {
      expect(descriptionDeLaRoute(`/${p.slug}`)).toBe(p.description ?? null);
    }
    expect(descriptionDeLaRoute("/inexistant-xyz")).toBeNull();
  });

  it("une route inconnue n'a PAS de canonique", () => {
    expect(canonique("/inexistant-xyz", "https://manatimebank.org", "/")).toBeNull();
  });

  it("la canonique suit la cible, elle ne cite jamais Pages en dur", () => {
    const sousDomaine = canonique("/observer", "https://manatimebank.org", "/");
    expect(sousDomaine).not.toContain("github.io");
  });

  // Le défaut du 28/10 : le sitemap décrivait l'ancien jeu de routes — six
  // redirections annoncées comme canoniques, et les quatre destinations absentes.
  it("le sitemap annonce exactement les pages vivantes, et la racine", () => {
    const xml = construireSitemap("https://manatimebank.org", "/");
    const locs = [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
    expect(locs).toEqual([
      "https://manatimebank.org/",
      ...PAGES_VIVANTES.map((s) => `https://manatimebank.org/${s}`),
    ]);
  });

  it("le sitemap n'annonce aucune URL qui redirige", () => {
    const xml = construireSitemap("https://manatimebank.org", "/");
    for (const ancienne of Object.keys(REDIRIGEES)) {
      expect(xml).not.toContain(`/${ancienne}</loc>`);
    }
  });

  it("le sitemap suit la cible — il ne cite jamais Pages quand on sert un domaine", () => {
    expect(construireSitemap("https://manatimebank.org", "/")).not.toContain("github.io");
  });
});
