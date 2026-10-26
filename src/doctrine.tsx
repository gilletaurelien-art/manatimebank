import { useEffect } from "react";
import { baseUrl } from "./router";

// Contenu doctrinal versionné — miroir du futur schéma SQL
// (contenus_doctrine) : chaque bloc daté et sourcé, cité
// « Méthode MANA, vX.Y, date ». Rien n'est publié ici qui ne soit
// eprouvé : le declencheur de publication est la solidite du contenu.

export const METHODE_VERSION = "Méthode MANA, v0.1 (état initial)";

export const DIMENSIONS = [
  {
    nom: "Temps humain",
    texte:
      "Comment l'humanité répartit sa ressource temporelle : temps contraint, temps choisi, temps contraint par autrui.",
  },
  {
    nom: "Solidarité",
    texte:
      "Les systèmes d'entraide réels — formels et informels — qui prennent en charge le temps des uns et des autres.",
  },
  {
    nom: "Écologie",
    texte:
      "L'empreinte des usages du temps sur le système vivant dont la communauté dépend.",
  },
  {
    nom: "Régénération",
    texte:
      "Ce que les usages du temps rendent au vivant : restauration, entretien, soin des milieux et des liens.",
  },
  {
    nom: "Équité temporelle",
    texte:
      "La répartition du temps disponible entre groupes : qui dispose de son temps, qui le perd, qui le donne.",
  },
  {
    nom: "Durabilité",
    texte:
      "La capacité du système à maintenir dans la durée les usages du temps qu'il organise.",
  },
];

export function useTitre(titre: string | null) {
  useEffect(() => {
    const defaut =
      "MANA TIME BANK — Le temps comme ressource, l'humanité comme système";
    document.title = titre ? `${titre} — MANA TIME BANK` : defaut;
    return () => {
      document.title = defaut;
    };
  }, [titre]);
}

const SPECTRE = ["sp-bleu", "sp-vert", "sp-jaune", "sp-orange"] as const;

// La marque entière porte le spectre : les douze lettres de
// MANAtimebank cyclent les quatre teintes de la charte (3 cycles).
export function Brand() {
  return (
    <span className="marque-spectre">
      {"MANAtimebank".split("").map((l, i) => (
        <span key={i} className={SPECTRE[i % 4]}>
          {l}
        </span>
      ))}
    </span>
  );
}

export function PageDoctrine({ nom, titre, sections }: {
  nom: string;
  titre: string;
  sections: { label: string; corps: React.ReactNode }[];
}) {
  useTitre(titre);
  const B = baseUrl();
  return (
    <main className="publier">
      <div className="wrap">
        <a className="retour" href={`${B}/`}>
          ← Retour
        </a>
        <p className="hero-label">{nom}</p>
        <h1 className="fiche-titre">{titre}</h1>
        {sections.map((s) => (
          <section key={s.label} className="publier-panel">
            <p className="apercu-label">{s.label}</p>
            <div className="territoire-intro">{s.corps}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
