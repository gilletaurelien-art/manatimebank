import { usePath, baseUrl } from "./router";
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
  NavCharte } from "./NavGlyphs";
import { DIMENSIONS, METHODE_VERSION, PageDoctrine, Brand } from "./doctrine";
import { ContactForm } from "./ContactForm";

// manatimebank.org — visage doctrine : mission, méthode versionnée,
// indice, portrait, charte. Ton publication scientifique et civique,
// vouvoiement. Rien n'est publié qui ne soit éprouvé.

const ACCENTS = ["accent-jaune", "accent-vert", "accent-orange", "accent-bleu"] as const;

const SECTIONS = [
  {
    glyphe: GlyphTemps,
    num: "01",
    titre: "Le temps est une ressource",
    accroche: "Ni banque de dépôt, ni bourse du temps : une observation.",
    texte:
      "MANA TIME BANK n'est pas une banque de temps classique. Pas de dépôt, d'échange ni de crédit d'heures. C'est une infrastructure d'observation : comment l'humanité utilise sa ressource temporelle dans le système vivant dont elle dépend. Le temps est la ressource, la société le système d'organisation, le vivant l'environnement.",
  },
  {
    glyphe: GlyphIndice,
    num: "02",
    titre: "L'indice MANA",
    accroche: "Six dimensions, aucun score global.",
    texte:
      "Temps humain, Solidarité, Écologie, Régénération, Équité temporelle, Durabilité : un profil multidimensionnel, des données sourcées, des incertitudes explicites. Pas de score global ni de couleur synthétique tant que la méthode n'est pas éprouvée — une représentation spectrale, à terme.",
  },
  {
    glyphe: GlyphPortrait,
    num: "03",
    titre: "Le Portrait MANA",
    accroche: "Un diagnostic territorial, un état initial documenté.",
    texte:
      "Fondé sur des données existantes (INSEE, Agreste, observatoires, documents de la collectivité), le Portrait MANA livre trois choses : un portrait territorial documenté où le mesuré, l'interprété et l'hypothèse sont distingués ; une première signature MANA avec niveaux de confiance et données manquantes ; une feuille de route de questions prioritaires et d'indicateurs annuels.",
  },
  {
    glyphe: GlyphMethode,
    num: "04",
    titre: "Une méthode publique et versionnée",
    accroche: "Citée, vérifiable, critiquable.",
    texte:
      "La méthode est publiée et versionnée : chaque résultat se cite « Méthode MANA, vX.Y, date ». Les sources sont nommées. Les conclusions sont soumises aux données et à la méthode — jamais au montant du contrat.",
  },
  {
    glyphe: GlyphSources,
    num: "05",
    titre: "Des données publiques, rien d'autre",
    accroche: "Sources ouvertes, incertitudes explicites.",
    texte:
      "INSEE, Agreste, observatoires, documents de la collectivité : le Portrait MANA n'invente rien. Une donnée manquante est dite manquante ; une interprétation est dite interprétation. Le mesuré, l'interprété et l'hypothèse ne se mélangent jamais.",
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

function PageVision() {
  return (
    <PageDoctrine
      nom="Vision"
      titre="Une infrastructure d'observation du temps"
      sections={[
        {
          label: "La décision fondatrice",
          corps: (
            <p>
              MANA TIME BANK n'est plus une banque de temps classique. Pas de
              dépôt, d'échange ni de crédit d'heures. C'est une infrastructure
              d'observation : comment l'humanité utilise sa ressource
              temporelle dans le système vivant dont elle dépend. Le temps est
              la ressource, la société le système d'organisation, le vivant
              l'environnement.
            </p>
          ),
        },
        {
          label: "Une heure n'a pas de valeur morale fixe",
          corps: (
            <p>
              On étudie les systèmes qui orientent l'usage du temps et leurs
              conséquences, pas la « valeur » de chaque heure. Aucune heure
              n'est classée, notée ou hiérarchisée : on observe comment le
              territoire organise le temps, ce que cela produit, et on le
              documente honnêtement.
            </p>
          ),
        },
        {
          label: "Positionnement",
          corps: (
            <p>
              Pilote territorial de Crozon (Finistère), même écosystème MANA.
              La prestation de diagnostic est portée par l'Alliance MANA
              (association) : production de connaissance d'intérêt général.
              L'usage réglementé du mot « banque » est en cours de
              vérification juridique avant tout devis public.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageIndice() {
  return (
    <PageDoctrine
      nom="Indice MANA"
      titre="Six dimensions, aucun score global"
      sections={[
        {
          label: "Un profil, pas une note",
          corps: (
            <>
              <p>
                L'indice MANA est le cœur méthodologique : six dimensions
                observées séparément, sans agrégation tant que la méthode
                n'est pas éprouvée.
              </p>
              <ul>
                {DIMENSIONS.map((d) => (
                  <li key={d.nom}>
                    <strong>{d.nom}.</strong> {d.texte}
                  </li>
                ))}
              </ul>
            </>
          ),
        },
        {
          label: "Règles de publication",
          corps: (
            <p>
              Pas de score global ni de couleur synthétique tant que la méthode
              n'est pas éprouvée : profil multidimensionnel, données sourcées,
              incertitudes explicites, représentation spectrale à terme.
            </p>
          ),
        },
      ]}
    />
  );
}

function PagePortrait() {
  return (
    <PageDoctrine
      nom="Premier produit"
      titre="Le Portrait MANA"
      sections={[
        {
          label: "Nature du produit",
          corps: (
            <p>
              Diagnostic territorial, état initial documenté, fondé sur des
              données existantes (INSEE, Agreste, observatoires, documents de
              la collectivité). Premier client visé : l'EPCI, pas la commune.
            </p>
          ),
        },
        {
          label: "Trois livrables",
          corps: (
            <>
              <p>
                <strong>1.</strong> Un portrait territorial documenté, où le
                mesuré, l'interprété et l'hypothèse sont distingués.
              </p>
              <p>
                <strong>2.</strong> Une première signature MANA : dimensions
                séparées, niveaux de confiance, données manquantes.
              </p>
              <p>
                <strong>3.</strong> Une feuille de route : questions
                prioritaires, indicateurs annuels.
              </p>
            </>
          ),
        },
        {
          label: "Facturation",
          corps: (
            <p>
              La prestation est facturée par l'Alliance MANA (association) :
              nature du produit = production de connaissance d'intérêt
              général. Vente sur devis, facturation directe associative ;
              aucun mur payant sur ce site.
            </p>
          ),
        },
        {
          label: "Données et périmètres",
          corps: (
            <p>
              Les données internes d'une collectivité ne transitent jamais par
              le socle public : périmètre serveur dédié au diagnostic, purgé à
              la clôture du portrait. Les conclusions ne se stockent pas comme
              statut : constats sourcés, datés, avec niveau de confiance, profil
              dérivé.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageMethode() {
  return (
    <PageDoctrine
      nom="Méthode"
      titre="Méthode publique et versionnée"
      sections={[
        {
          label: "Version",
          corps: (
            <p>
              État actuel : <strong>{METHODE_VERSION}</strong>. La méthode est
              publique, versionnée et citée dans chaque résultat : « Méthode
              MANA, vX.Y, date ». Une correction fait l'objet d'une nouvelle
              version, jamais d'une retouche silencieuse.
            </p>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p>
              Données publiques existantes uniquement : INSEE, Agreste,
              observatoires, documents de la collectivité. Aucune donnée
              identifiante, aucun scraping. Une source manquante est
              documentée comme manquante.
            </p>
          ),
        },
        {
          label: "Ce que la méthode refuse",
          corps: (
            <p>
              Pas de score global, pas de classement des territoires, pas de
              promesse d'amélioration d'évaluation contre paiement. Le mesuré,
              l'interprété et l'hypothèse restent distingués partout.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageCharte() {
  return (
    <PageDoctrine
      nom="Confiance"
      titre="Charte de confiance"
      sections={[
        {
          label: "Engagement",
          corps: (
            <p style={{ fontStyle: "italic" }}>
              « La méthode est publique et versionnée. La prestation est
              payante. Les conclusions sont soumises aux données et à la
              méthode — jamais au montant du contrat. »
            </p>
          ),
        },
        {
          label: "Test d'acceptation",
          corps: (
            <p>
              Aucun contenu de ce site ne promet score, classement ni
              amélioration d'évaluation contre paiement. Si un contenu
              contredit cet engagement, il est corrigé.
            </p>
          ),
        },
        {
          label: "Caisse et non-lucrativité",
          corps: (
            <p>
              Facturation par l'Alliance MANA (association), sous conditions de
              tenue : non-lucrativité réelle (barème de couverture de coûts,
              test des 4P : produit, public, prix, publicité), résultats
              publiables, méthode ouverte. Si les prix montent vers des prix de
              cabinet, transfert côté TEMPOsystem (sous-traitant technique
              éventuel).
            </p>
          ),
        },
      ]}
    />
  );
}

function PageMentions() {
  return (
    <PageDoctrine
      nom="Informations légales"
      titre="Mentions légales"
      sections={[
        {
          label: "Éditeur",
          corps: (
            <p>
              MANA TIME BANK est édité dans le cadre de l'écosystème MANA.
              La prestation de diagnostic est portée par l'Alliance MANA
              (association). Les coordonnées complètes de l'éditeur seront
              publiées avec la structure juridique définitive. L'usage
              réglementé du mot « banque » (ACPR) est en cours de vérification
              juridique.
            </p>
          ),
        },
        {
          label: "Hébergement",
          corps: (
            <p>
              Site statique hébergé sur GitHub Pages (GitHub, Inc.). Aucune
              donnée personnelle n'est collectée par le site en l'état : le
              formulaire de contact reste local à votre navigateur tant que
              le backend n'existe pas.
            </p>
          ),
        },
        {
          label: "Données",
          corps: (
            <p>
              Aucune donnée ni lead n'est revendu. Aucune donnée identifiante
              n'est collectée. Les données internes d'une collectivité ne
              transitent jamais par le socle public.
            </p>
          ),
        },
      ]}
    />
  );
}

const PAGES: Record<string, () => React.JSX.Element> = {
  vision: PageVision,
  indice: PageIndice,
  portrait: PagePortrait,
  methode: PageMethode,
  charte: PageCharte,
  "mentions-legales": PageMentions,
};

export default function App() {
  const path = usePath();
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
            <a href={`${B}/vision`}>
              <NavVision className="nav-acc-jaune" />
              <span>Vision</span>
            </a>
            <a href={`${B}/indice`}>
              <NavIndice className="nav-acc-vert" />
              <span>Indice</span>
            </a>
            <a href={`${B}/portrait`}>
              <NavPortrait className="nav-acc-orange" />
              <span>Portrait</span>
            </a>
            <a href={`${B}/methode`}>
              <NavMethode className="nav-acc-bleu" />
              <span>Méthode</span>
            </a>
            <a href={`${B}/charte`} className="nav-cta">
              <NavCharte className="nav-acc-vert" />
              <span>Charte</span>
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
                Infrastructure d'observation · Pilote Crozon
              </p>
              <h1 className="brand-grand">
                <Brand />
              </h1>
              <p className="lede">
                Le temps est la ressource. La société, le système
                d'organisation. Le vivant, l'environnement. On observe comment
                un territoire utilise sa ressource temporelle — on ne note pas
                la valeur de chaque heure.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href={`${B}/vision`}>
                  Lire la vision
                </a>
                <a className="btn btn-ghost" href={`${B}/portrait`}>
                  Découvrir le Portrait MANA
                </a>
              </div>
              <p className="hero-note">{METHODE_VERSION} — en cours d'éprouval</p>
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
                    <a
                      className="btn btn-clair"
                      href={`${B}/${["vision", "indice", "portrait", "methode", "methode"][Number(s.num) - 1]}`}
                    >
                      {s.num === "01"
                        ? "Comprendre la décision fondatrice"
                        : s.num === "02"
                          ? "Les six dimensions"
                          : s.num === "03"
                            ? "Les trois livrables"
                            : "Lire la méthode"}
                    </a>
                  </div>
                </div>
              </section>
            ))}

            {/* Les six dimensions en un regard */}
            <section className="landing-section bulle">
              <h2 className="section-title">Les six dimensions</h2>
              <div className="promesses-grid" style={{ paddingTop: 0 }}>
                {DIMENSIONS_GRID.map((nom, i) => {
                  const d = DIMENSIONS.find((x) => x.nom === nom)!;
                  return (
                    <div key={d.nom} className="promesse">
                      <h3 className={ACCENTS[i % 4]}>{d.nom}</h3>
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
              Infrastructure d'observation du temps humain sur le territoire —
              pilote Crozon, écosystème MANA. Méthode publique et versionnée ;
              conclusions soumises aux données, jamais au montant du contrat.
              Le mot « banque » est utilisé au sens de la ressource temporelle,
              pas de l'établissement financier.
            </p>
            <ContactForm />
          </div>
          <nav className="footer-nav" aria-label="Pied de page">
            <a href={`${B}/vision`}>Vision</a>
            <a href={`${B}/indice`}>Indice MANA</a>
            <a href={`${B}/portrait`}>Portrait MANA</a>
            <a href={`${B}/methode`}>Méthode</a>
            <a href={`${B}/charte`}>Charte de confiance</a>
            <a href={`${B}/mentions-legales`}>Mentions légales</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
