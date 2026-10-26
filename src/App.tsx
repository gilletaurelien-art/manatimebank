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
  NavManifeste,
  NavDonnees } from "./NavGlyphs";
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
    titre: "Manifeste du temps retrouvé",
    accroche: "Le droit au temps — le bien commun premier de l'humanité.",
    texte:
      "Vingt-quatre heures par jour, pour chaque être humain, du billionnaire au sans-abri : la seule ressource parfaitement partagée. Aucun grand courant de pensée n'en a fait le centre — tous l'ont mis au service d'autre chose. Nous dressons un constat sourcé, nous questionnons sans accuser, et nous revendiquons le droit au temps : familial, d'oisiveté, de contemplation.",
    cta: { label: "Lire le manifeste", href: "/manifeste" },
  },
  {
    glyphe: GlyphPortrait,
    num: "02",
    titre: "Ce que le monde mesure — et ce qu'il ne voit pas",
    accroche: "L'argent chaque trimestre ; le temps une fois par décennie.",
    texte:
      "Le travail payé est compté dans 160 pays ; le care non rémunéré, lui, n'est mesuré que par de rares enquêtes — 72 pays une fois, 27 au moins deux fois. 745 000 décès par an sont attribuables aux longues heures. La moitié de l'humanité déclare n'avoir pas eu le temps de faire ce qui comptait pour elle hier.",
    cta: { label: "Voir les observations", href: "/donnees" },
  },
  {
    glyphe: GlyphIndice,
    num: "03",
    titre: "L'indice MANA",
    accroche: "La visibilité des circuits, jamais un classement.",
    texte:
      "Le MANA est partout — l'indice ne mesure pas sa présence, mais la visibilité de ses circuits : ce qui circule entre les êtres et avec le vivant, ce qu'on en voit, ce qu'on n'en voit pas. Six chapitres de lecture, quatre grandeurs, quatre états de la donnée — mesuré, interprété, hypothèse, invisible.",
    cta: { label: "Comprendre l'indice", href: "/indice" },
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
    cta: { label: "Notre approche", href: "/vision" },
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
              MANA TIME BANK observe : comment l'humanité utilise sa ressource
              temporelle dans le système vivant dont elle dépend. Le temps est
              la ressource, la société le système d'organisation, le vivant
              l'environnement. Rien n'y est déposé, échangé ni crédité — la
              ressource observée est le temps lui-même, pas une monnaie.
            </p>
          ),
        },
        {
          label: "Pourquoi « banque » ?",
          corps: (
            <p>
              Le mot banque est utilisé ici hors de tout circuit financier —
              comme dans « banque de données », « banque d'images » ou
              « banque de sons » : le lieu où l'on conserve et organise ce
              qui compte. MANA TIME BANK n'est pas un établissement
              financier : elle ne reçoit, ne détient ni ne manie aucun
              dépôt, aucun crédit, aucune monnaie — d'heures ou d'autre
              chose. C'est une banque au sens ancien et simple : la table
              où l'on pose ce qu'on veut examiner ensemble — en
              l'occurrence, l'usage mondial du temps humain.
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
          label: "Ce que nous ne sommes pas",
          corps: (
            <p>
              Pas une banque de temps d'échange : aucune heure n'y est
              déposée, échangée ou créditée. Pas un classement de pays : aucun
              territoire n'y est noté, comparé ou primé. Pas un prescripteur :
              aucune solution, aucun programme, aucune recommandation. Pas un
              vendeur en l'état : aucune prestation n'est proposée sur ce
              site. Si vous cherchez un système d'échange d'heures, il existe
              de vraies timebanks — ce projet-là observe ; il n'échange pas.
            </p>
          ),
        },
        {
          label: "Positionnement",
          corps: (
            <p>
              Indice mondial, même écosystème MANA. Le MANA est partout —
              il n'y a pas de lieu sans MANA, seulement des circuits
              qu'on ne voit pas encore. La production de connaissance est
              portée par l'Alliance MANA (association) : intérêt général,
              méthode publique.
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
      titre="La visibilité des circuits"
      sections={[
        {
          label: "Le principe-pivot",
          corps: (
            <p>
              Le MANA est partout — il n'y a pas de lieu sans MANA, seulement
              des circuits qu'on ne voit pas encore. L'indice MANA ne mesure
              donc pas la présence du MANA : il observe la <strong>
              visibilité de ses circuits</strong> — ce qui circule entre
              les êtres et avec le vivant, ce qu'on en voit, ce qu'on n'en
              voit pas. Une lunette, jamais un classement.
            </p>
          ),
        },
        {
          label: "Six chapitres",
          corps: (
            <>
              <p>
                Les six dimensions sont les chapitres de lecture du portrait —
                des entrées éditoriales lisibles, jamais des composantes d'un
                score :
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
          label: "Quatre grandeurs, ossature interne",
          corps: (
            <p>
              Chaque chapitre se lit à travers les quatre grandeurs de la
              méthode : le <strong>stock</strong> (la réserve d'heures), la{" "}
              <strong>circulation</strong> (les flux), la{" "}
              <strong>distribution</strong> (la variance entre groupes) et la{" "}
              <strong>tenue</strong> (la persistance des circuits). Un même
              chapitre peut montrer une circulation intense et une tenue
              fragile — le profil montre les tensions, il ne les arbitre pas.
            </p>
          ),
        },
        {
          label: "Règles de publication",
          corps: (
            <p>
              Pas de score global, pas de couleur synthétique, pas de
              classement des pays : profil multidimensionnel, données
              sourcées, incertitudes explicites, carte de visibilité à trous
              affichée, représentation spectrale à terme.
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
          label: "Modèle",
          corps: (
            <p>
              Production de connaissance d'intérêt général portée par
              l'Alliance MANA (association). Le modèle économique est en
              cours de définition ; ce site ne vend rien en l'état et ne
              comporte aucun mur payant.
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
      titre="Méthode MANA v0.2 — publique et versionnée"
      sections={[
        {
          label: "Version et citation",
          corps: (
            <p>
              État actuel : <strong>{METHODE_VERSION}</strong>. Toute
              observation se cite « Méthode MANA, v0.2, date ». Une correction
              fait l'objet d'une nouvelle version, jamais d'une retouche
              silencieuse. La v0.2 est déclarée ce qu'elle est : une
              conjecture en cours de mise à l'épreuve.
            </p>
          ),
        },
        {
          label: "Article 1 — Objet",
          corps: (
            <p>
              La méthode observe comment l'humanité utilise sa ressource
              temporelle dans le système vivant dont elle dépend. Le MANA est
              partout : elle ne mesure donc pas la présence du MANA, mais la
              visibilité de ses circuits — ce qui circule entre les êtres et
              avec le vivant, ce qu'on en voit, ce qu'on n'en voit pas.
            </p>
          ),
        },
        {
          label: "Article 2 — Les quatre grandeurs",
          corps: (
            <>
              <p>
                Toute observation se décline en quatre lectures, chacune avec
                ses unités :
              </p>
              <p><strong>Stock</strong> — la réserve d'heures (population ×
              temps de vie éveillé), en heures.</p>
              <p><strong>Circulation</strong> — les flux qui circulent
              (travail payé, care, entraide, transport, énergie), en heures,
              kWh, kilomètres.</p>
              <p><strong>Distribution</strong> — la variance entre groupes
              (genre, âge, revenu, lieu), jamais transformée en note.</p>
              <p><strong>Tenue</strong> — la persistance des circuits
              (inertie des structures et des porteurs), lisible dans la
              durée.</p>
            </>
          ),
        },
        {
          label: "Article 3 — Les quatre états de la donnée",
          corps: (
            <p>
              Aucune donnée n'est traitée sans son état :{" "}
              <strong>mesuré</strong> (publiée, datée, sourcée) ·{" "}
              <strong>interprété</strong> (calcul MANA à partir de données
              publiques, calcul documenté) · <strong>hypothèse</strong>{" "}
              (modèle ou donnée non locale, déclarée) ·{" "}
              <strong>invisible</strong> (aucune source ne la voit — un
              résultat en soi, jamais un regret).
            </p>
          ),
        },
        {
          label: "Article 4 — Le régime temporel",
          corps: (
            <p>
              L'unité de description n'est ni le pays ni le territoire : c'est
              le régime temporel — une configuration stable d'usage du temps
              (flux + règles), stable au sens systémique (elle se reproduit
              tant que ses boucles tiennent), jamais au sens normatif (elle
              n'est ni bonne ni mauvaise). Les pays et les lieux servent à
              documenter des régimes, jamais à les classer.
            </p>
          ),
        },
        {
          label: "Article 5 — Interdictions",
          corps: (
            <p>
              Pas de score global. Pas de pondération entre grandeurs —
              pondérer la symétrie contre la vitesse serait un choix moral
              déguisé. Pas de classement de pays ou de territoires. Pas de
              promesse d'amélioration contre paiement. Pas de donnée
              identifiante. Aucun scraping.
            </p>
          ),
        },
        {
          label: "Article 6 — Sources",
          corps: (
            <p>
              Données publiques mondiales uniquement : ILOSTAT (heures
              travaillées), ONU (SDG 5.4.1, care non rémunéré), OCDE Time
              Use, enquêtes nationales d'emploi du temps, Gallup World Poll
              (vécu — toujours déclaré comme tel). Chaque source datée ; une
              donnée périmée reste citée comme telle. L'économie fournit des
              données, jamais une lecture : le rendement du temps ne devient
              sous aucun prétexte la valeur de l'heure.
            </p>
          ),
        },
        {
          label: "Article 7 — Biais fondateur",
          corps: (
            <p>
              L'appareil statistique mondial voit mieux les flux monétisés
              que les flux réels. Un pays riche en données n'est pas plus
              riche en MANA. La carte de visibilité à trous fait partie du
              résultat ; elle est affichée, jamais comblée en secret.
            </p>
          ),
        },
        {
          label: "Article 8 — Comment nous regardons (le faisceau)",
          corps: (
            <>
              <p><strong>Neuf regards</strong> portent l'observation :
              anthropologique (le régime comme culture, sans étalon — colonne
              vertébrale), écolosociologique (le métabolisme, avec la
              géographie), historique (la trajectoire, les acquis datés),
              biologique (le substrat qui borne les possibles), psychologique
              (le vécu — déclaré, jamais administré), politique-objet (les
              décisions temporelles décrites, jamais prescrites, avec le
              juridique), analytique (les grandeurs, les états, les unités),
              philosophique (les interdits, la cohérence du socle),
              philanthropique (la finalité : visibilité rendue = capacité
              rendue).</p>
              <p><strong>Trois bornes</strong> contraignent sans interpréter :
              la biologie (le sommeil n'est pas négociable), la psychiatrie
              (les coûts humains de la tenue — OMS/OIT : 745 000 décès/an),
              la géographie (la variabilité naturelle des régimes).</p>
              <p><strong>Quatre outils</strong> calculent sans jamais juger :
              la mathématique, le numérique (l'agrégation ne comble pas —
              les trous entre bases sont des trous de réel), l'économie
              (source contrainte), la statistique publique.</p>
              <p><strong>Quatre vigilances</strong> surveillent l'observateur :
              l'idéologique (l'appareil statistique n'est pas neutre), la
              linguistique (les nomenclatures sont des choix culturels —
              « travail », « loisir », « care » ne découpent pas le même
              temps partout), l'autocritique (l'institut qui observe est
              lui-même situé dans un régime temporel), la falsifiabilité
              (chaque affirmation peut être cassée par une donnée).</p>
            </>
          ),
        },
        {
          label: "Article 9 — La grammaire systémique",
          corps: (
            <p>
              Le mana, disaient les cultures du Pacifique, est la force vitale
              qui circule en toute chose. La science dit la même chose en
              d'autres mots : tout ce qui vit est un système de flux qui se
              maintient. La méthode observe ces flux comme un système — des
              stocks, des circulations, des boucles de retour, une inertie,
              une mortalité — avec une discipline : décrire des
              configurations, ne jamais prédire, et formuler chaque
              affirmation de façon falsifiable.
            </p>
          ),
        },
        {
          label: "Article 10 — Du constat à la capacité",
          corps: (
            <p>
              Le livrable n'est pas une note mais trois choses : l'état du
              visible, la liste des invisibles (qui devient une feuille de
              route d'enquêtes), la description des régimes observés —
              laissant au politique et aux habitants le choix de leurs
              circuits.
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
              La production est portée par l'Alliance MANA (association) :
              non-lucrativité réelle, résultats publiables, méthode ouverte.
              Ce site ne vend rien en l'état ; le jour où une prestation
              existe, elle respectera cet engagement.
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
              La production de connaissance est portée par l'Alliance MANA
              (association). Les coordonnées complètes de l'éditeur seront
              publiées avec la structure juridique définitive. Le mot
              « banque » est employé hors de tout circuit financier — au sens
              de « banque de données » : aucun dépôt, aucun crédit, aucune
              monnaie n'y est manié.
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
              cessé de voir. C'est pour cela que notre nom s'écrit en
              lettres de couleurs — comme les crayons d'un enfant qui
              colore, une à une, chaque lettre de ce qui est important.
              L'enfant sait ce qu'il y a de vrai, en toute innocence.
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
                êtres — la page <a href={`${B}/donnees`}>données</a> en
                assemble les premières observations — les heures de travail, de soin, d'entraide, d'attention
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

function PageDonnees() {
  return (
    <PageDoctrine
      nom="Les observations"
      titre="Données du temps mondial"
      sections={[
        {
          label: "En bref",
          corps: (
            <p>
              Le monde compte l'argent chaque trimestre dans près de 200
              pays ; il ne mesure le temps de la vie que par de rares
              enquêtes — 72 pays une fois, 27 au moins deux fois. Ce que les
              données publiques laissent voir : ~44 heures de travail
              hebdomadaire en moyenne, trois fois plus de temps de soin non
              rémunéré porté par les femmes, 745 000 décès par an liés aux
              longues heures, et la moitié de l'humanité qui n'a pas eu le
              temps de faire ce qui comptait pour elle hier. Cette page
              assemble ces observations, puis en propose une lecture en
              thèse, antithèse et synthèse — chaque chiffre porte sa
              source, chaque question reste ouverte.
            </p>
          ),
        },
        {
          label: "Ce que le monde mesure",
          corps: (
            <>
              <p>
                <strong>Le travail payé est compté partout.</strong> L'OIT
                publie les heures hebdomadaires effectives d'environ 160 pays
                — 43,9 heures en moyenne mondiale, plus de 48 dans les pays
                les plus intensifs (ILOSTAT).
              </p>
              <p>
                <strong>Le care est presque invisible.</strong> Seuls 72 pays
                ont mené une enquête emploi du temps au moins une fois, 27 au
                moins deux fois (OIT, 2018). L'ONU suit le temps de soin non
                rémunéré via l'indicateur SDG 5.4.1 — les femmes y portent
                environ trois fois plus d'heures que les hommes, partout où
                c'est mesuré.
              </p>
              <p>
                <strong>Le corps paie.</strong> L'OMS et l'OIT attribuent
                745 000 décès par an aux longues heures de travail — AVC et
                maladies cardiaques (2021). Le burn-out est reconnu comme
                phénomène professionnel par l'OIT depuis 2024.
              </p>
              <p>
                <strong>Le vécu se déclare.</strong> Le Gallup World Poll
                demande dans plus de 140 pays : « Avez-vous eu le temps de
                faire ce qui comptait pour vous hier ? » — la moitié de
                l'humanité répond non, y compris dans les pays riches.
              </p>
              <p>
                <strong>Certains régimes tiennent mieux.</strong> Les pays
                nordiques combinent horaires courts, care largement
                marchandisé et ressenti du temps parmi les meilleurs mesurés
                — sans que personne n'ait décidé de les classer premiers.
              </p>
            </>
          ),
        },
        {
          label: "La thèse — ce que les données suggèrent",
          corps: (
            <p>
              L'humanité dispose d'un stock inélastique — 24 heures par être,
              ni plus ni moins — et les systèmes qui l'organisent prélèvent
              une part croissante de ce stock pour la production, la
              circulation et la connexion, laissant le care, le repos et
              l'attention dans l'angle mort statistique. Les données
              existantes dessinent un monde qui compte tout ce qu'il
              s'échange contre de l'argent, et presque rien de ce qui
              s'échange entre les êtres. La thèse est documentable : là où
              le temps non monétisé est mesuré, il apparaît massif — des
              milliards d'heures de soin et d'entraide, majoritairement
              portées par les femmes, et nulle part comptées comme
              richesse.
            </p>
          ),
        },
        {
          label: "L'antithèse — ce que les mêmes données autorisent d'autre",
          corps: (
            <p>
              Une lecture opposée est possible, et honnête : le temps mesuré
              n'est pas le temps vécu, et aucun chiffre agrégé ne prouve une
              intention. Les 43,9 heures moyennes incluent le travail
              informel, choisi ou subi, des économies où le salariat
              n'obéit pas aux mêmes catégories. Les enquêtes emploi du
              temps reposent sur des nomenclatures occidentales — une
              même activité est « travail » ici, « vie » là. Le ressenti
              Gallup est un souvenir, pas un relevé. Et le lien entre
              longues heures et mortalité est une corrélation à l'échelle
              des populations, jamais une condamnation de tel système en
              particulier. Le point le plus dérangeant de l'antithèse :
              les pays qui mesurent le mieux leur temps sont aussi ceux
              dont les citoyens se disent les plus pressés — la mesure
              elle-même n'a rendu personne plus libre. Peut-être que le
              problème n'est pas le manque de données, mais le regard.
            </p>
          ),
        },
        {
          label: "La synthèse — ce que MANA TIME BANK retient",
          corps: (
            <>
              <p>
                La thèse et l'antithèse tiennent toutes les deux, et c'est
                précisément le constat : l'humanité vit sur une ressource
                qu'elle ne sait ni compter ni regarder, et les données
                existantes — partielles, situées, nomenclaturées — ne
                permettront jamais ni de prouver une catastrophe ni de
                rassurer. Entre l'alarme et le déni, il y a une troisième
                posture : documenter ce qui est visible, nommer ce qui
                ne l'est pas, et laisser chacun — habitants, élus,
                chercheurs — se saisir du constat.
              </p>
              <p>
                La page de données de MANA TIME BANK n'affirme donc rien
                que ses sources ne disent. Chaque observation porte son
                état — mesuré, interprété, hypothèse, invisible. Ce que
                le monde peut mesurer du temps est assemblé ici ; ce
                qu'il ne peut pas (encore) mesurer est écrit comme tel.
                Le reste — la question du mieux, du juste, du souhaitable —
                n'appartient pas à la donnée.
              </p>
            </>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              ILOSTAT, heures hebdomadaires effectives (~160 pays) · OIT, Care
              work and care jobs (72 pays avec enquête emploi du temps, 27 au
              moins deux fois, 2018) · ONU, SDG 5.4.1 (temps de soin non
              rémunéré par sexe) · OMS/OIT (745 000 décès/an attribuables aux
              longues heures, 2021) · Gallup World Poll (question du temps
              pour soi, 140+ pays) · OCDE, Time Use Database.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageRegimeInsomniaque() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 01"
      titre="Le régime insomniaque connecté"
      sections={[
        {
          label: "Définition",
          corps: (
            <p>
              Configuration stable d'usage du temps où le travail, la connexion
              et l'attention se superposent en continu plutôt qu'ils ne se
              succèdent. Le temps n'y est plus découpé en sphères
              (travail / repos / famille) mais en superposition : on travaille
              le soir, on répond aux messages pendant le dîner, on s'endort
              en scrollant. La lignée intellectuelle existe — société de la
              fatigue (Byung-Chul Han), accélération (Hartmut Rosa) — mais
              aucun cadre ne l'a encore documentée comme régime, avec ses
              marqueurs et ses coûts.
            </p>
          ),
        },
        {
          label: "Stock — la réserve grignotée aux deux bouts",
          corps: (
            <p>
              Vingt-quatre heures comme partout, mais la réserve éveillée est
              rognée aux deux extrémités : le sommeil retardé par l'écran, le
              matin avancé par la première notification.{" "}
              <strong>Marqueurs :</strong> dette de sommeil (enquêtes
              nationales de sommeil — rares, non comparables entre elles) ;
              durée de sommeil moyenne par pays (hypothèse tant que les
              enquêtes ne sont pas harmonisées).
            </p>
          ),
        },
        {
          label: "Circulation — des flux qui ne s'arrêtent plus",
          corps: (
            <p>
              Le travail payé déborde le contrat, l'attention est vendue en
              continu, le care est interrompu par la connexion.{" "}
              <strong>Marqueurs :</strong> heures hebdomadaires effectives vs
              contractuelles (ILOSTAT — mesuré) ; temps de disponibilité
              numérique non compté — invisible dans toutes les bases mondiales,
              et nommé ici comme tel.
            </p>
          ),
        },
        {
          label: "Distribution — ceux qui peuvent couper, ceux qui ne le peuvent pas",
          corps: (
            <p>
              La variance s'aggrave entre ceux qui peuvent « couper » (revenus
              élevés, statut protégé, droit à la déconnexion effectif) et ceux
              qui ne le peuvent pas (précarité connectée, livraison,
              plateformes). <strong>Marqueurs :</strong> temps partiel subi et
              horaires atypiques par catégorie socio-professionnelle
              (enquêtes emploi — mesuré au niveau national, interprété à
              l'échelle mondiale).
            </p>
          ),
        },
        {
          label: "Tenue — un régime qui ne tient que par ses coûts",
          corps: (
            <p>
              Le point le plus falsifiable de la fiche : ce régime se maintient
              en détruisant sa réserve. L'OMS et l'OIT attribuent 745 000
              décès par an aux longues heures de travail (AVC, maladies
              cardiaques, 2021) ; le burn-out est reconnu comme phénomène
              professionnel par l'OIT depuis 2024 ; l'OMS décrit l'insomnie
              comme une préoccupation mondiale croissante. Un régime qui tient
              en détruisant sa réserve est un régime à boucle ouverte — la
              question de sa durée de vie reste ouverte, et n'appartient pas
              à la donnée.
            </p>
          ),
        },
        {
          label: "Les invisibles de ce régime",
          corps: (
            <p>
              Le temps de disponibilité numérique (aucune base mondiale ne le
              compte) et le care interrompu par la connexion (aucune enquête
              ne le relève comme tel). Ces deux invisibles sont des résultats
              en soi : la première carte mondiale du régime insomniaque
              serait, pour l'essentiel, une carte de ce qu'on ne voit pas.
            </p>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              ILOSTAT, heures hebdomadaires effectives (~160 pays) · OMS/OIT,
              Environmental and societal burden of long working hours (745 000
              décès/an, 2021) · OIT, reconnaissance du burn-out (2024) · OMS,
              rapports sur l'insomnie · Gallup World Poll (question du temps
              pour soi, 140+ pays) · Byung-Chul Han, La Société de la fatigue ·
              Hartmut Rosa, Accélération. Fiche établie selon la Méthode MANA,
              v0.2.
            </p>
          ),
        },
      ]}
    />
  );
}

const PAGES: Record<string, () => React.JSX.Element> = {
  manifeste: PageManifeste,
  "regime-insomniaque-connecte": PageRegimeInsomniaque,
  donnees: PageDonnees,
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
            <a href={`${B}/donnees`}>
              <NavDonnees className="nav-acc-orange" />
              <span>Données</span>
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
                <a className="btn btn-primary" href={`${B}/manifeste`}>
                  Lire le manifeste
                </a>
                <a className="btn btn-ghost" href={`${B}/donnees`}>
                  Les observations
                </a>
                <a className="btn btn-ghost" href={`${B}/methode`}>
                  La méthode
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
            <a href={`${B}/manifeste`}>Manifeste du temps retrouvé</a>
            <a href={`${B}/vision`}>Vision</a>
            <a href={`${B}/donnees`}>Données du temps mondial</a>
            <a href={`${B}/indice`}>Indice MANA</a>
            <a href={`${B}/regime-insomniaque-connecte`}>Régime insomniaque connecté — fiche 01</a>
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
