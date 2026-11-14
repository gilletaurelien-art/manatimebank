import { useEffect } from "react";
import { usePath, baseUrl } from "./router";
import { REDIRIGEES, poserCanonique } from "./canonique";
import {
  GlyphTemps,
  GlyphIndice,
  GlyphPortrait,
  GlyphMethode,
  GlyphSources } from "./Glyphs";
import {
  NavVision,
  NavIndice,
  NavPortrait,
  NavMethode,
  NavCharte,
  NavManifeste,
  NavDonnees,
  NavTempsVecu } from "./NavGlyphs";
import { DIMENSIONS, METHODE_VERSION, Brand } from "./doctrine";
import { ContactForm } from "./ContactForm";
import {
  PageMethode,
  PageMentions,
  PageComprendre,
  PageObserver,
  PageSoutenir,
  PageEtudePilote } from "./pages-doctrine";
import {
  PageRegimes,
  PageRegimeInsomniaque,
  PageRegimeSynchronise,
  PageRegimeFragmente,
  PageRegimeCare,
  PageRegimeSaisonnier } from "./pages-regimes";
import { PageTempsVecu } from "./pages-temps-vecu";
import { PageRendreLesMots, PageTempsDonne } from "./pages-fondatrices";


// manatimebank.org — visage doctrine : mission, méthode versionnée,
// indice, portrait, charte. Ton publication scientifique et civique,
// vouvoiement. Rien n'est publié qui ne soit éprouvé.

const ACCENTS = ["accent-jaune", "accent-vert", "accent-orange", "accent-bleu"] as const;

const SECTIONS = [
  {
    glyphe: GlyphTemps,
    num: "01",
    titre: "Manifeste du temps retrouvé",
    accroche: "Le droit au temps — le bien commun premier de l'humanité.",
    texte:
      "Vingt-quatre heures par jour, pour chaque être humain, du billionnaire au sans-abri : la seule ressource parfaitement partagée. Aucun grand courant de pensée n'en a fait le centre — tous l'ont mis au service d'autre chose. Nous dressons un constat sourcé, nous questionnons sans accuser, et nous revendiquons le droit au temps : familial, d'oisiveté, de contemplation.",
    cta: { label: "Lire le manifeste", href: "/comprendre" },
  },
  {
    glyphe: GlyphPortrait,
    num: "02",
    titre: "Ce que le monde mesure — et ce qu'il ne voit pas",
    accroche: "L'argent chaque trimestre ; le temps une fois par décennie.",
    texte:
      "Le travail payé est compté dans 160 pays ; le care non rémunéré, lui, n'est mesuré que par de rares enquêtes — 72 pays une fois, 27 au moins deux fois. 745 000 décès par an sont attribuables aux longues heures. La moitié de l'humanité déclare n'avoir pas eu le temps de faire ce qui comptait pour elle hier.",
    cta: { label: "Voir les observations", href: "/observer" },
  },
  {
    glyphe: GlyphIndice,
    num: "03",
    titre: "L'indice MANA",
    accroche: "La visibilité des circuits, jamais un classement.",
    texte:
      "Le MANA est partout — l'indice ne mesure pas sa présence, mais la visibilité de ses circuits : ce qui circule entre les êtres et avec le vivant, ce qu'on en voit, ce qu'on n'en voit pas. Six chapitres de lecture, quatre grandeurs, quatre états de la donnée — mesuré, interprété, hypothèse, invisible.",
    cta: { label: "Comprendre l'indice", href: "/observer" },
  },
  {
    glyphe: GlyphMethode,
    num: "04",
    titre: "Une méthode publique et versionnée",
    accroche: "Cité, vérifiable, critiquable.",
    texte:
      "Dix articles, un faisceau de regards — anthropologique, écolosociologique, historique, psychologique, philosophique — et des interdits : pas de score, pas de classement de pays, pas de prescriptif. Chaque résultat se cite « Méthode MANA, vX.Y, date ».",
    cta: { label: "Lire la méthode", href: "/methode" },
  },
  {
    glyphe: GlyphSources,
    num: "05",
    titre: "Des données publiques, rien d'autre",
    accroche: "Sources ouvertes, incertitudes explicites.",
    texte:
      "ILOSTAT, ONU (SDG 5.4.1), OCDE Time Use, enquêtes nationales : l'indice MANA n'invente rien. Une donnée manquante est dite manquante ; une interprétation est dite interprétation. Le mesuré, l'interprété, l'hypothèse et l'invisible ne se mélangent jamais.",
    cta: { label: "Notre approche", href: "/comprendre" },
  },
];

const DIMENSIONS_GRID = [
  "Temps humain",
  "Solidarité",
  "Écologie",
  "Régénération",
  "Équité temporelle",
  "Durabilité",
];

const B = baseUrl();




function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(baseUrl() + to);
  }, [to]);
  return (
    <main className="publier">
      <div className="wrap">
        <p className="territoire-intro">Redirection…</p>
      </div>
    </main>
  );
}


const PAGES: Record<string, () => React.JSX.Element> = {
  comprendre: PageComprendre,
  soutenir: PageSoutenir,
  "etude-pilote": PageEtudePilote,
  observer: PageObserver,
  "rendre-les-mots": PageRendreLesMots,
  regimes: PageRegimes,
  methode: PageMethode,
  "temps-donne": PageTempsDonne,
  "temps-vecu": PageTempsVecu,
  "regime-insomniaque-connecte": PageRegimeInsomniaque,
  "regime-synchronise-institutionnel": PageRegimeSynchronise,
  "regime-fragmente-marchand": PageRegimeFragmente,
  "regime-care-massif": PageRegimeCare,
  "regime-saisonnier": PageRegimeSaisonnier,
  "mentions-legales": PageMentions,
};

// Les anciennes routes fusionnées sont DÉRIVÉES de la carte unique
// (src/canonique.ts) : une entrée ajoutée là redirige ET se canonicalise vers sa
// destination, sans retouche ici. Les deux ne peuvent plus diverger.
for (const [ancienne, cible] of Object.entries(REDIRIGEES)) {
  PAGES[ancienne] = () => <Redirect to={`/${cible}`} />;
}

export default function App() {
  const path = usePath();
  // La canonique suit la route (SPA sans prérendu : un seul HTML pour tout).
  useEffect(() => { poserCanonique(path); }, [path]);
  const slug = path.match(/^\/([\w-]+)\/?$/)?.[1] ?? null;
  const Page = slug ? PAGES[slug] : null;

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href={`${B}/`}>
            <Brand />
          </a>
          <nav className="nav">
            <a href={`${B}/comprendre`}>
              <NavManifeste className="nav-acc-jaune" />
              <span>Comprendre</span>
            </a>
            <a href={`${B}/observer`}>
              <NavDonnees className="nav-acc-bleu" />
              <span>Observer</span>
            </a>
            <a href={`${B}/regimes`}>
              <NavIndice className="nav-acc-orange" />
              <span>Régimes</span>
            </a>
            <a href={`${B}/methode`} className="nav-cta">
              <NavMethode className="nav-acc-vert" />
              <span>Méthode</span>
            </a>
          </nav>
        </div>
      </header>

      {Page ? (
        <Page />
      ) : (
        <>
          <section className="hero">
            <div className="wrap">
              <p className="hero-label">
                Manifeste du temps retrouvé · Indice mondial
              </p>
              <h1 className="brand-grand">
                <Brand />
              </h1>
              <p className="lede">
                Dans les cultures du Pacifique, le mana est la force vitale
                qui circule en toute chose — invisible, non mesurable,
                présente partout. Nous empruntons le mot et retournons la
                démarche : le MANA est partout, alors nous n'en mesurons pas
                la présence — nous observons ce qu'on en voit.
              </p>
              <p className="lede">
                Et pour regarder le temps, nous prenons l'âme de l'enfant :
                celui qui se questionne sans les outils des adultes, qui
                s'étonne de tout, qui vit ici et maintenant. Manger, rire,
                être avec les siens — c'est tout ce qui l'intéresse. C'est
                peut-être tout ce qui a jamais compté.
              </p>
              <p className="lede">
                Le temps est la ressource. La société, le système
                d'organisation. Le vivant, l'environnement. On observe comment
                l'humanité utilise sa ressource temporelle — son MANA.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href={`${B}/comprendre`}>
                  Comprendre
                </a>
                <a className="btn btn-ghost" href={`${B}/observer`}>
                  Observer
                </a>
                <a className="btn btn-ghost" href={`${B}/regimes`}>
                  Régimes
                </a>
                <a className="btn btn-ghost" href={`${B}/methode`}>
                  Méthode
                </a>
              </div>
              <p className="hero-note">{METHODE_VERSION}</p>
            </div>
          </section>

          <main className="wrap">
            {SECTIONS.map((s, i) => (
              <section key={s.num} className="landing-section bulle">
                <p className="section-num">{s.num}</p>
                <div className={`section-glyphe ${ACCENTS[i % 4]}`}>
                  <s.glyphe className={ACCENTS[i % 4]} />
                </div>
                <h2 className="section-title">{s.titre}</h2>
                <div className={`sous-bulle ${ACCENTS[i % 4]}`}>
                  <p className={`section-accroche ${ACCENTS[i % 4]}`}>{s.accroche}</p>
                  <p className="section-texte">{s.texte}</p>
                  <div className="est-actions">
                    {s.cta && (
                      <a className="btn btn-clair" href={`${B}${s.cta.href}`}>
                        {s.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              </section>
            ))}

            {/* Les six dimensions en un regard */}
            <section className="landing-section bulle">
              <h2 className="section-title">Les six dimensions</h2>
              <div className="dimensions-grid">
                {DIMENSIONS_GRID.map((nom, i) => {
                  const d = DIMENSIONS.find((x) => x.nom === nom)!;
                  return (
                    <div key={d.nom} className={`dimension-bulle ${ACCENTS[i % 4]}`}>
                      <h3>{d.nom}</h3>
                      <p>{d.texte}</p>
                    </div>
                  );
                })}
              </div>
              <p className="catalogue-note">
                Pas de score global ni de couleur synthétique tant que la
                méthode n'est pas éprouvée.
              </p>
            </section>
          </main>
        </>
      )}

      <footer className="site-footer">
        <div className="wrap footer-colonnes">
          <div>
            <p className="brand">
              <Brand />
            </p>
            <p className="footer-note">
              Infrastructure d'observation mondiale du temps humain —
              écosystème MANA. Méthode publique et versionnée ; conclusions
              soumises aux données, jamais au montant du contrat. Pas de
              score, pas de classement des pays : des régimes temporels
              décrits, sourcés, à trous déclarés. Le mot « banque » est utilisé
              au sens de la ressource temporelle, pas de l'établissement
              financier.
            </p>
            <ContactForm />
          </div>
          <nav className="footer-nav" aria-label="Pied de page">
            <a href={`${B}/comprendre`}>Comprendre — manifeste, vision, charte</a>
            <a href={`${B}/observer`}>Observer — données, indice, portrait</a>
            <a href={`${B}/rendre-les-mots`}>Rendre les mots — texte fondateur</a>
            <a href={`${B}/temps-donne`}>Pourquoi le temps donné n'est pas compté</a>
            <a href={`${B}/temps-vecu`}>Du temps possédé au temps vécu — essai</a>
            <a href={`${B}/regimes`}>Régimes — typologie et cinq fiches</a>
            <a href={`${B}/methode`}>Méthode</a>
            <a href={`${B}/soutenir`}>Soutenir — don et adhésion</a>
            <a href={`${B}/etude-pilote`}>Étude pilote · collectivités</a>
            <a href={`${B}/mentions-legales`}>Mentions légales</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
