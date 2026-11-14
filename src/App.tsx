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
import { PageLeVivantDabord, PageEconomiesDuTemps, PageCeQuiVient } from "./pages-critique";


// manatimebank.org — visage doctrine : mission, méthode versionnée,
// indice, portrait, charte. Ton publication scientifique et civique,
// vouvoiement. Rien n'est publié qui ne soit éprouvé.

const ACCENTS = ["accent-jaune", "accent-vert", "accent-orange", "accent-bleu"] as const;

const SECTIONS = [
  {
    glyphe: GlyphTemps,
    num: "01",
    titre: "Le vivant d'abord",
    accroche: "La critique — et l'alternative sérieuse.",
    texte:
      "Le monde capitaliste a organisé ses sociétés autour d'une mesure qui ne voit ni le temps, ni le soin, ni le vivant. Les alternatives sont déjà écrites — rapport Stiglitz-Sen-Fitoussi, limites planétaires, droits de la nature. Il ne leur manque qu'un instrument pour devenir pilotables : nous le construisons.",
    cta: { label: "Lire la critique", href: "/le-vivant-d-abord" },
  },
  {
    glyphe: GlyphPortrait,
    num: "02",
    titre: "Rendre les mots",
    accroche: "Crédit, dette, capital : des mots de la vie, pris à la vie.",
    texte:
      "Les mots de la finance ont été pris à la vie, un à un, il y a des siècles — et jamais rendus. Nous les rendons : le crédit redevient la croyance, la dette redevient le devoir, le capital redevient la tête. Le temps d'une vie n'est pas un bilan : c'est une chronique.",
    cta: { label: "Lire le texte fondateur", href: "/rendre-les-mots" },
  },
  {
    glyphe: GlyphIndice,
    num: "03",
    titre: "Ce que le monde mesure — et ce qu'il ne voit pas",
    accroche: "L'argent chaque trimestre ; le temps une fois par décennie.",
    texte:
      "Le travail payé est compté dans 160 pays ; le care non rémunéré n'est mesuré que par de rares enquêtes — 72 pays une fois, 27 au moins deux fois. 745 000 décès par an sont attribuables aux longues heures. Ce n'est pas un oubli : c'est une décision, jamais révisée.",
    cta: { label: "Lire le dossier", href: "/temps-donne" },
  },
  {
    glyphe: GlyphSources,
    num: "04",
    titre: "L'heure pour monnaie",
    accroche: "Deux siècles d'essais — et une erreur commune.",
    texte:
      "De Cincinnati (1827) aux time credits de Tempo (2008), tous les systèmes ont su compter le temps donné ; tous ont cru qu'il fallait le faire circuler. La valeur du temps donné n'a pas besoin de circuler pour exister : elle a besoin d'être vue. Nous séparons la mesure de l'échange.",
    cta: { label: "Lire l'histoire", href: "/economies-du-temps" },
  },
  {
    glyphe: GlyphMethode,
    num: "05",
    titre: "Une méthode publique et versionnée",
    accroche: "Cité, vérifiable, critiquable.",
    texte:
      "Dix articles, un faisceau de regards, des interdits : pas de score, pas de classement, pas de prescriptif. Les données sont publiques — ILOSTAT, ONU, OCDE — une donnée manquante est dite manquante, une interprétation est dite interprétation. Chaque résultat se cite « Méthode MANA, vX.Y, date ».",
    cta: { label: "Lire la méthode", href: "/methode" },
  },
  {
    glyphe: GlyphTemps,
    num: "06",
    titre: "Essayer — rejoindre l'étude pilote",
    accroche: "Votre dotation s'affiche ; elle ne se gagne pas.",
    texte:
      "La sonde MANAtimebank est en construction : elle consignera le temps donné au geste, dans votre cercle. Créer un compte, c'est voir sa dotation s'afficher — 86 400 MANA par jour, inconditionnelle — et consigner ses premiers dons. Aucune heure ne s'échange, ne s'achète, ne se doit.",
    cta: { label: "Rejoindre l'étude pilote", href: "/etude-pilote" },
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
  "le-vivant-d-abord": PageLeVivantDabord,
  comprendre: PageComprendre,
  soutenir: PageSoutenir,
  "etude-pilote": PageEtudePilote,
  observer: PageObserver,
  "rendre-les-mots": PageRendreLesMots,
  "economies-du-temps": PageEconomiesDuTemps,
  "ce-qui-vient": PageCeQuiVient,
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
            <a href={`${B}/methode`}>
              <NavMethode className="nav-acc-vert" />
              <span>Méthode</span>
            </a>
            <a href={`${B}/etude-pilote`} className="nav-cta">
              <NavManifeste className="nav-acc-jaune" />
              <span>Essayer</span>
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
                Le vivant d'abord · Indice mondial du temps humain
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
              <div className="hero-cta">
                <a className="btn btn-primary" href={`${B}/le-vivant-d-abord`}>
                  Pourquoi ce projet existe
                </a>
                <a className="btn btn-ghost" href={`${B}/etude-pilote`}>
                  Essayer — étude pilote
                </a>
                <a className="btn btn-ghost" href={`${B}/observer`}>
                  Observer
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
            <a href={`${B}/le-vivant-d-abord`}>Le vivant d'abord — la critique et l'alternative</a>
            <a href={`${B}/rendre-les-mots`}>Rendre les mots — texte fondateur</a>
            <a href={`${B}/temps-donne`}>Pourquoi le temps donné n'est pas compté</a>
            <a href={`${B}/economies-du-temps`}>L'heure pour monnaie — deux siècles d'essais</a>
            <a href={`${B}/ce-qui-vient`}>Ce qui vient — les échecs, le duopole, la pertinence</a>
            <a href={`${B}/comprendre`}>Comprendre — manifeste, vision, charte</a>
            <a href={`${B}/observer`}>Observer — données, indice, portrait</a>
            <a href={`${B}/temps-vecu`}>Du temps possédé au temps vécu — essai</a>
            <a href={`${B}/regimes`}>Régimes — typologie et cinq fiches</a>
            <a href={`${B}/methode`}>Méthode</a>
            <a href={`${B}/etude-pilote`}>Essayer — rejoindre l'étude pilote</a>
            <a href={`${B}/soutenir`}>Soutenir — don et adhésion</a>
            <a href={`${B}/mentions-legales`}>Mentions légales</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
