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
  NavCharte,
  NavManifeste } from "./NavGlyphs";
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
      "MANA TIME BANK n'est pas une banque de temps classique. Pas de dépôt, d'échange ni de crédit d'heures. C'est une infrastructure d'observation mondiale : comment l'humanité utilise sa ressource temporelle dans le système vivant dont elle dépend. Le temps est la ressource, la société le système d'organisation, le vivant l'environnement.",
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
    accroche: "Un diagnostic, un état initial documenté — à l'échelle du monde.",
    texte:
      "Fondé sur des données publiques mondiales (ONU, OIT, OCDE, enquêtes nationales d'emploi du temps), le Portrait MANA livre trois choses : un portrait documenté où le mesuré, l'interprété et l'hypothèse sont distingués ; une première signature MANA avec niveaux de confiance et données manquantes ; une feuille de route de questions prioritaires et d'indicateurs annuels.",
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
      "ILOSTAT, ONU (SDG 5.4.1), OCDE Time Use, enquêtes nationales : l'indice MANA n'invente rien. Une donnée manquante est dite manquante ; une interprétation est dite interprétation. Le mesuré, l'interprété et l'hypothèse ne se mélangent jamais.",
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
              n'est classée, notée ou hiérarchisée : on observe comment
              l'humanité organise le temps, ce que cela produit, et on le
              documente honnêtement.
            </p>
          ),
        },
        {
          label: "Positionnement",
          corps: (
            <p>
              Indice mondial, même écosystème MANA. Le MANA est partout —
              il n'y a pas de territoire sans MANA, seulement des circuits
              qu'on ne voit pas encore. La production de connaissance est
              portée par l'Alliance MANA (association) : intérêt général,
              méthode publique. L'usage réglementé du mot « banque » est en
              cours de vérification juridique avant toute publication majeure.
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
              Diagnostic mondial, état initial documenté, fondé sur des
              données publiques existantes (ILOSTAT, ONU SDG 5.4.1, OCDE Time
              Use, enquêtes nationales d'emploi du temps). Le monde compte
              sa monnaie chaque trimestre ; son temps, une fois par décennie
              dans un tiers des pays.
            </p>
          ),
        },
        {
          label: "Trois livrables",
          corps: (
            <>
              <p>
                <strong>1.</strong> Un portrait documenté, où le
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
              Aucune donnée identifiante n'est collectée. Les conclusions ne
              se stockent pas comme statut : constats sourcés, datés, avec
              niveau de confiance, profil dérivé. Les trous de visibilité
              (l'entraide informelle, le care invisible) sont des résultats
              en soi, pas des regrets.
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
              Données publiques existantes uniquement : ILOSTAT, ONU, OCDE,
              instituts nationaux. Aucune donnée identifiante, aucun scraping. Une source manquante est
              documentée comme manquante.
            </p>
          ),
        },
        {
          label: "Ce que la méthode refuse",
          corps: (
            <p>
              Pas de score global, pas de classement des pays, pas de
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
              n'est collectée. Aucune donnée identifiante ne transite par
              le site.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageManifeste() {
  return (
    <PageDoctrine
      nom="Posture de l'Alliance"
      titre="Manifeste du temps retrouvé"
      sections={[
        {
          label: "L'âme de l'enfant",
          corps: (
            <p>
              Un enfant ne comprend pas le monde des adultes — et il a
              raison. Il n'en a pas les outils : ni le rendement, ni la
              carrière, ni la retraite. Il possède d'autres instruments,
              que nous avons tous eus et perdus : l'étonnement, la question
              sans fin, le présent absolu. Il veut bien manger, rire, être
              avec sa famille. C'est tout ce qui l'intéresse. Puis les
              systèmes le forment — l'école, l'horloge, la productivité —
              et l'ici et maintenant devient l'attente de plus tard.
              MANA TIME BANK regarde le temps avec l'âme de cet enfant :
              curieux, sans outils, questionnant ce que les adultes ont
              cessé de voir.
            </p>
          ),
        },
        {
          label: "Le constat",
          corps: (
            <>
              <p>
                Chaque être humain reçoit vingt-quatre heures par jour. Ni plus,
                ni moins — du billionnaire au sans-abri, c'est la seule
                ressource parfaitement partagée de l'humanité. Elle ne se
                cumule pas, ne s'hérite pas, ne se fabrique pas. Et personne
                ne la compte.
              </p>
              <p>
                Le monde publie sa monnaie chaque trimestre, dans près de deux
                cents pays. Il mesure le temps de sa vie une fois par décennie,
                dans soixante-douze d'entre eux (ONU, SDG 5.4.1). Les heures de
                soin données aux enfants et aux aînés — des milliards par an,
                majoritairement portées par des femmes — n'apparaissent dans
                aucune comptabilité nationale en tant que telles (OIT, 2018).
                L'Organisation mondiale de la santé estime à 745 000 les décès
                annuels attribuables aux seules longues heures de travail
                (OMS/OIT, 2021). L'insomnie est devenue un mode de gouvernement
                silencieux : le monde compte son argent en dormant debout.
              </p>
              <p>
                Comment une civilisation qui mesure tout a-t-elle pu ne jamais
                mesurer la seule chose qu'elle possède tous en commun ?
              </p>
            </>
          ),
        },
        {
          label: "Les questions",
          corps: (
            <>
              <p>
                Nous n'accusons personne. Nous remarquons que tous les grands
                courants de pensée, chacun à sa manière, ont placé le temps de
                la vie au service d'autre chose — et nous demandons pourquoi.
              </p>
              <p>
                Celui qui fait du temps une marchandise : pourquoi le rendement
                d'une heure vaudrait-il plus que sa plénitude ? Celui qui en
                fait un devoir : pourquoi la valeur d'une vie se mesurerait-elle
                à sa production ? Celui qui promet d'en abolir le besoin : que
                deviendrait un humain qui ne dort plus ? Celui qui a gagné la
                journée de huit heures : pourquoi s'est-il arrêté là, il y a
                un siècle ? Aucun n'a fait du temps le centre. Tous l'ont mis
                à l'arrière-plan — de la production, de la croissance, du
                progrès, de la révolution. Le bien commun premier de l'humanité
                reste le grand absent de ses pensées politiques.
              </p>
              <p>
                Et nous demandons aussi : qui possède les heures ? Car il
                n'existe pas de marché du temps proprement dit — il existe un
                marché du temps <em>des autres</em>. Certains vendent leurs
                heures pour vivre ; d'autres achètent les heures des premiers
                pour exister. La grande redistribution moderne n'est peut-être
                pas celle des richesses. C'est celle des heures.
              </p>
            </>
          ),
        },
        {
          label: "Ce que nous revendiquons — et ce que nous ne proposons pas",
          corps: (
            <>
              <p>
                Nous revendiquons un droit qui n'a jamais été écrit : le droit
                au temps. Le temps de sa famille, le temps de la paresse au sens
                de Paul Lafargue, le temps de la contemplation, le temps du
                sommeil rendu. Tout ce que chaque époque a essayé de retirer à
                l'humain pour le mettre au travail.
              </p>
              <p>
                Nous n'affirmons pas avoir de solutions. Nous proposons une
                lumière nouvelle : rendre visible ce qui circule entre les
                êtres — les heures de travail, de soin, d'entraide, d'attention
                — et ce que chaque système en fait. Un constat documenté,
                sourcé, vérifiable, est plus redoutable qu'un programme : on
                peut renvoyer une utopie à l'utopie ; on ne peut pas renvoyer
                un chiffre à l'imaginaire.
              </p>
              <p>
                Le MANA, disaient les cultures du Pacifique, est la force
                vitale qui circule en toute chose. Elle est partout. Ce n'est
                pas elle qui manque — c'est notre regard.
              </p>
            </>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              ONU, SDG 5.4.1 (proportion de temps consacré au travail domestique
              et de soin non rémunéré, 72 pays disposant d'enquêtes) · OIT, Care
              work and care jobs (2018) · OMS/OIT, Environmental and societal
              burden of long working hours (745 000 décès/an, 2021) · ILOSTAT,
              heures hebdomadaires effectives, ~160 pays · Paul Lafargue, Le
              Droit à la paresse (1880) · Bertrand Russell, Éloge de l'oisiveté
              (1932) · Byung-Chul Han, La Société de la fatigue · Hartmut
              Rosa, Accélération et résonance.
            </p>
          ),
        },
      ]}
    />
  );
}

const PAGES: Record<string, () => React.JSX.Element> = {
  manifeste: PageManifeste,
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
            <a href={`${B}/manifeste`}>
              <NavManifeste className="nav-acc-jaune" />
              <span>Manifeste</span>
            </a>
            <a href={`${B}/vision`}>
              <NavVision className="nav-acc-bleu" />
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
                Infrastructure d'observation · Indice mondial
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
                <a className="btn btn-primary" href={`${B}/manifeste`}>
                  Lire le manifeste
                </a>
                <a className="btn btn-ghost" href={`${B}/vision`}>
                  La vision
                </a>
                <a className="btn btn-ghost" href={`${B}/portrait`}>
                  Le Portrait MANA
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
            <a href={`${B}/manifeste`}>Manifeste du temps retrouvé</a>
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
