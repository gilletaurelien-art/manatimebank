#!/usr/bin/env node
// scripts/fetch-data.mjs — MANA TIME BANK
// Retélécharge les séries publiques utilisées par la page /donnees
// depuis leurs endpoints officiels (Our World in Data, miroir des
// sources primaires). Doctrine : endpoints publics, aucun scraping,
// aucune donnée identifiante, millésime affiché.
//
// Usage :
//   node scripts/fetch-data.mjs              # télécharge les deux séries
//   node scripts/fetch-data.mjs --check      # compare sans écrire (exit 1 si différent)
//
// Sortie : data/heures-travail-2023.csv, data/care-non-remunere.csv
// Le millésime "2023" du nom de fichier est historique : la série
// heures est filtrée sur l'année la plus récente disponible.

import { writeFile, readFile } from "node:fs/promises";
import { mkdir } from "node:fs/promises";

const SOURCES = [
  {
    id: "heures-travail",
    url: "https://ourworldindata.org/grapher/annual-working-hours-per-worker.csv",
    file: "data/heures-travail-2023.csv",
    // Filtre : ne garder que l'année la plus récente de chaque pays
    // (la série complète couvre 1870-2023 ; le dépôt garde le millésime).
    latestYearOnly: true,
  },
  {
    id: "care-non-remunere",
    url: "https://ourworldindata.org/grapher/time-spend-in-domestic-work-female-vs-male.csv",
    file: "data/care-non-remunere.csv",
    // Pas de filtre : chaque enquête par pays est une donnée datée
    // (l'ancienneté des enquêtes fait partie du constat).
    latestYearOnly: false,
  },
];

const checkOnly = process.argv.includes("--check");

async function fetchSource(src) {
  const res = await fetch(src.url, {
    headers: { "User-Agent": "manatimebank-data-fetch/1.0 (public endpoints)" },
  });
  if (!res.ok) {
    throw new Error(`${src.id}: HTTP ${res.status} sur ${src.url}`);
  }
  let text = await res.text();
  if (src.latestYearOnly) {
    const lines = text.trim().split("\n");
    const header = lines[0];
    const cols = header.split(",").map((c) => c.trim().toLowerCase());
    const yearIdx = cols.indexOf("year");
    if (yearIdx === -1) throw new Error(`${src.id}: colonne year introuvable`);
    // année max globale, puis lignes de cette année uniquement
    let maxYear = 0;
    for (let i = 1; i < lines.length; i++) {
      const y = parseInt(lines[i].split(",")[yearIdx], 10);
      if (y > maxYear) maxYear = y;
    }
    const kept = lines.filter((l, i) => i === 0 || parseInt(l.split(",")[yearIdx], 10) === maxYear);
    text = kept.join("\n") + "\n";
  }
  return text;
}

async function main() {
  await mkdir("data", { recursive: true });
  let diffs = 0;
  for (const src of SOURCES) {
    process.stdout.write(`${src.id} : téléchargement… `);
    const fresh = await fetchSource(src);
    let existing = null;
    try {
      existing = await readFile(src.file, "utf8");
    } catch {
      // fichier absent : première exécution
    }
    if (checkOnly) {
      const same = existing !== null && existing === fresh;
      console.log(same ? "identique" : "DIFFÉRENT");
      if (!same) diffs++;
    } else {
      await writeFile(src.file, fresh);
      console.log(`écrit (${fresh.split("\n").length - 1} lignes) → ${src.file}`);
    }
  }
  if (checkOnly) {
    if (diffs > 0) {
      console.error(`${diffs} série(s) diffèrent — relancer sans --check pour actualiser.`);
      process.exit(1);
    }
    console.log("Séries à jour.");
  } else {
    console.log("Fait. Vérifier le diff, puis committer : doctrine — mesuré, sourcé, daté.");
  }
}

main().catch((e) => {
  console.error(`Erreur : ${e.message}`);
  process.exit(1);
});
