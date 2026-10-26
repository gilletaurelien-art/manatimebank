import { useEffect } from "react";
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
  NavDonnees,
  NavTempsVecu } from "./NavGlyphs";
import { DIMENSIONS, METHODE_VERSION, PageDoctrine, Brand, useTitre } from "./doctrine";
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



function PageMethode() {
  return (
    <PageDoctrine
      nom="Méthode"
      titre="Méthode MANA v0.2 — publique et versionnée"
      description="Dix articles, un faisceau de neuf regards, des interdits : pas de score, pas de classement, mesuré/interprété/hypothèse/invisible. Méthode publique, versionnée, falsifiable."
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

function PageRegimeSynchronise() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 02"
      titre="Le régime synchronisé institutionnel"
      sections={[
        {
          label: "Définition",
          corps: (
            <p>
              Configuration stable d'usage du temps où les activités sont
              découpées en sphères successives et coordonnées par une
              horloge commune : journée de travail bornée, école à heures
              fixes, repas à heures sociales, repos protégé. C'est l'héritier
              direct des grandes conquêtes temporelles — la journée de
              huit heures, le repos hebdomadaire, les congés payés, l'école
              obligatoire — et le régime par rapport auquel tous les
              autres se définissent, y compris l'insomniaque connecté
              qui le déborde (fiche 01).
            </p>
          ),
        },
        {
          label: "Stock — une réserve découpée et protégée",
          corps: (
            <p>
              La réserve éveillée est segmentée en blocs nommés (travail,
              école, repas, repos), chacun protégé par des règles. Le
              sommeil y est une institution : horaires réguliers, nuit
              socialement sanctuarisée. <strong>Marqueurs :</strong>{" "}
              durée légale du travail et heures d'école par pays (mesuré) ;
              régularité des horaires de sommeil (enquêtes nationales —
              interprété).
            </p>
          ),
        },
        {
          label: "Circulation — des flux bornés et coordonnés",
          corps: (
            <p>
              Les flux circulent par créneaux synchronisés : le travail
              commence et finit à heures fixes, les repas et les enfants
              rythment la journée, les équipements publics ouvrent et
              ferment ensemble. La coordination est le coût et le bénéfice
              du régime : chacun perd en flexibilité ce que tous gagnent
              en prévisibilité. <strong>Marqueurs :</strong> part des
              horaires standards dans l'emploi (enquêtes emploi — mesuré) ;
              heures d'ouverture des services publics (documentation
              nationale — interprété).
            </p>
          ),
        },
        {
          label: "Distribution — la protection inégale du découpage",
          corps: (
            <p>
              Le découpage protège d'abord ceux qui y sont inclus : le
              salarié protégé, l'écolier, le fonctionnaire. Les exclus du
              régime — indépendants, informels, aidants, travailleurs
              domestiques — vivent sans les bornes qui protègent les
              autres. <strong>Marqueurs :</strong> taux de couverture de
              la protection sociale du travail par pays (mesuré) ;
              synchronisation des horaires scolaires et professionnels —
              charge de garde qui en découle (interprété).
            </p>
          ),
        },
        {
          label: "Tenue — le régime le plus éprouvé de l'histoire",
          corps: (
            <p>
              C'est le seul régime dont la tenue est attestée sur plus
              d'un siècle : conquis par les mouvements ouvriers entre 1850
              et 1936 (journée de huit heures, repos hebdomadaire, congés
              payés), il a survécu aux guerres, aux chocs pétroliers et à
              la tertiarisation — mais les enquêtes d'emploi montrent
              partout l'érosion de ses bornes : horaires atypiques,
              travail du soir, disponibilité. Sa boucle est fermée
              (le repos rend ce que le travail prend), mais sa
              reproduction n'est plus assurée : chaque génération l'en
              hérite un peu plus entamé. La question de sa durée de vie
              appartient au politique, pas à la donnée.
            </p>
          ),
        },
        {
          label: "Les invisibles de ce régime",
          corps: (
            <p>
              Le travail non borné des exclus du découpage (informel,
              domestique, aidant) — invisible tant que l'enquête ne
              regarde que le salarié protégé ; le coût de coordination
              lui-même (le temps de synchronisation que le régime impose
              et que personne ne compte — attentes, trajets aux heures
              pleines, files). Un régime centenaire dont les fondations
              restent, en partie, hors de la comptabilité.
            </p>
          ),
        },
        {
          label: "Contraste avec la fiche 01",
          corps: (
            <p>
              Là où l'insomniaque connecté superpose, le synchronisé
              institutionnel sépare : sphères bornées contre sphères
              superposées, nuit sanctuarisée contre nuit grignotée,
              coordination collective contre disponibilité individuelle.
              Le premier a été construit par un siècle de luttes ; le
              second avance sans avoir été décidé. Aucun des deux n'est
              « meilleur » : ils sont deux manières d'organiser la même
              ressource — et la plupart des vies réelles vivent dans
              leur mélange.
            </p>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              Histoire : E.P. Thompson, Time, Work-Discipline and Industrial
              Capitalism (1967) · Jacques Le Goff, Temps de l'Église et temps
              du marchand · législations nationales (journée de 8h, repos
              hebdomadaire, congés payés) · enquêtes emploi nationales et
              européennes (horaires atypiques, travail du soir) · OCDE, Time
              Use Database · ILOSTAT (horaires standards). Fiche établie
              selon la Méthode MANA, v0.2.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageRegimeFragmente() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 03"
      titre="Le régime fragmenté marchand"
      sections={[
        {
          label: "Définition",
          corps: (
            <p>
              Configuration stable d'usage du temps où le travail arrive en
              fragments imposés : plages courtes, horaires éclatés, semaines
              variables d'une semaine à l'autre, disponibilité exigée sans
              être rémunérée. C'est le régime de la précarité horaire —
              caisses, livraisons, nettoyage, intérim, plateformes — où
              l'heure vendue est trop souvent « trop petite pour compter » :
              chaque fragment isolé semble négligeable, leur somme fait une
              vie. Il ne se superpose pas comme l'insomniaque connecté
              (fiche 01) ni ne se synchronise comme l'institutionnel
              (fiche 02) : il disperse.
            </p>
          ),
        },
        {
          label: "Stock — une réserve saisie par fragments",
          corps: (
            <p>
              La réserve n'est pas découpée en blocs protégés mais prélevée
              en éclats : 4 heures ici, 3 heures là, souvent aux heures
              que les autres régimes laissent libres (soir, nuit, week-end).
              Le repos lui-même est fragmenté — récupérer entre deux
              plages, dormir en anticipation d'un réveil à 4h.
              <strong> Marqueurs :</strong> part de l'emploi à temps
              partiel subi (enquêtes emploi — mesuré) ; horaires
              atypiques et travail de nuit par secteur (mesuré) ;
              variabilité des plages d'une semaine à l'autre — rarement
              documentée, souvent déclarée invisible.
            </p>
          ),
        },
        {
          label: "Circulation — des flux à la demande des autres",
          corps: (
            <p>
              Les flux ne circulent pas au rythme de celui qui les porte :
              ils sont déclenchés par la demande, l'algorithme de tournée,
              le pic commercial, la saison. Le travailleur fragmenté
              n'organise pas ses heures — il les attend. La disponibilité
              est le produit réel vendu : ce n'est pas l'heure travaillée
              qui est rémunérée, c'est la mise à disposition de toutes
              ses heures possibles. <strong>Marqueurs :</strong> travail
              à la demande / gig economy (estimations OIT — hypothèse,
              définitions nationales divergentes) ; heures d'attente
              entre plages — invisibles dans presque toutes les bases.
            </p>
          ),
        },
        {
          label: "Distribution — le régime de la double pénalité",
          corps: (
            <p>
              Le régime fragmenté frappe deux fois : il concentre le temps
              contraint sur ceux qui ont le moins de choix, et il rend la
              reconstruction d'un temps choisi presque impossible (les
              fragments non travaillés sont trop courts, trop aléatoires,
              trop épuisés pour devenir du temps propre). Les femmes,
              les jeunes, les travailleurs informels et migrants en
              portent la part la plus lourde — documenté partout où
              l'enquête les regarde. <strong>Marqueurs :</strong> temps
              partiel subi par genre et âge (mesuré) ; pauvreté malgré
              l'emploi (Eurostat, statistiques nationales — mesuré).
            </p>
          ),
        },
        {
          label: "Tenue — un régime qui s'étend en s'autodétruisant",
          corps: (
            <p>
              Falsifiable : le régime fragmenté s'étend dans presque toutes
              les économies (part du travail précaire et à la demande en
              croissance documentée), mais sa tenue est doublement
              limitée — par le corps (l'éclatement des horaires aggrave
              les troubles du sommeil et cardiovasculaires, documenté par
              les études de santé au travail) et par la reproduction
              sociale (sans temps reconstruisable, ni formation, ni
              engagement, ni care stable — chaque porteur du régime
              s'épuise sans transmettre). C'est le seul régime dont
              l'expansion est attestée en même temps que la tenue
              est contredite : il croît en contradiction avec ses
              propres conditions.
            </p>
          ),
        },
        {
          label: "Les invisibles de ce régime",
          corps: (
            <p>
              Les heures d'attente entre deux plages (ni travaillées, ni
              libres — la catégorie statistique n'existe pas) ; le coût
              de reconstitution du temps propre (ce qu'il faut pour
              transformer des fragments en vie : trajets multiples,
              réorganisation permanente, fatigue cumulée) ; le travail
              informel fragmenté, hors de toute enquête. La somme de
              ces invisibles est probablement supérieure au temps
              officiellement compté — et c'est précisément la
              conjecture que la méthode pose, sans pouvoir encore la
              mesurer.
            </p>
          ),
        },
        {
          label: "Contraste avec les fiches 01 et 02",
          corps: (
            <p>
              L'insomniaque connecté superpose (le temps perd ses bornes) ;
              le synchronisé institutionnel sépare (le temps est borné et
              protégé) ; le fragmenté marchand disperse (le temps est saisi
              par éclats, à la demande). Trois manières de déposséder ou
              d'organiser la même ressource : l'un déborde un cadre
              hérité, l'autre l'a construit, le troisième n'a jamais eu
              de cadre. Les trois fiches ensemble dessinent déjà la
              question commune : qui tient l'horloge ?
            </p>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              OIT, rapports sur le travail à la demande et les plateformes
              (définitions et estimations — hypothèses assumées) · enquêtes
              emploi nationales et européennes (temps partiel subi, horaires
              atypiques) · Eurostat, pauvreté malgré l'emploi · études de
              santé au travail sur le travail fragmenté et de nuit ·
              ILOSTAT (emploi à temps partiel). Fiche établie selon la
              Méthode MANA, v0.2.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageRegimeCare() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 04"
      titre="Le régime du care massif"
      sections={[
        {
          label: "Définition",
          corps: (
            <p>
              Configuration stable d'usage du temps organisée autour de la
              prise en charge d'autrui : enfants, aînés, proches malades,
              ménages. C'est le régime le plus massif du monde — et le
              moins compté : l'OIT estime le travail de care non rémunéré
              à des milliards d'heures par an, majoritairement portées par
              des femmes, et absent des comptabilités nationales en tant
              que richesse. Il ne superpose pas (fiche 01), ne sépare pas
              (fiche 02), ne disperse pas (fiche 03) : il imprègne — le
              care est la nappe phréatique sous tous les autres régimes,
              celle qu'aucun d'eux ne voit parce qu'elle les porte tous.
            </p>
          ),
        },
        {
          label: "Stock — une réserve au service d'une autre",
          corps: (
            <p>
              Le stock du régime n'appartient pas à qui le porte : il est
              dédié à la vie d'autrui. Sa propriété systémique la plus
              troublante : il ne se récupère pas par le repos (une nuit
              ne rend pas l'attention donnée), mais par le care reçu à
              son tour — qui soigne les soignants. <strong>Marqueurs :</strong>{" "}
              heures de care non rémunéré par sexe et âge (enquêtes
              emploi du temps — mesuré dans 72 pays, invisible
              ailleurs) ; temps parental et aidant (enquêtes nationales
              — mesuré, rarement comparable).
            </p>
          ),
        },
        {
          label: "Circulation — le seul régime à circulation nécessairement réciproque",
          corps: (
            <p>
              Le care ne circule pas comme une marchandise : il se donne,
              et sa boucle ne se referme que si quelqu'un donne en
              retour. C'est le seul régime dont la circulation est
              structurellement réciproque — asymétrique dans les faits
              (les femmes donnent trois fois plus d'heures que les
              hommes, partout où c'est mesuré), réciproque dans sa
              condition de tenue. <strong>Marqueurs :</strong> rapport
              hommes / femmes du temps de care (ONU SDG 5.4.1 — mesuré
              dans les pays enquêtés) ; part du care marchandisé
              (emploi domestique, aide à domicile — mesuré) ; entraide
              informelle — invisible.
            </p>
          ),
        },
        {
          label: "Distribution — la grande fracture de genre",
          corps: (
            <p>
              La distribution du care est la plus documentée des
              inégalités temporelles : environ trois fois plus d'heures
              portées par les femmes, dans tous les pays mesurés, quels
              que soient le régime politique et le niveau de
              développement — l'inégalité temporelle la plus stable
              jamais observée. Le régime du care explique aussi les
              autres fractures : il conditionne l'accès de chacune et
              chacun aux trois autres régimes (qui peut se superposer,
              se synchroniser, se disperser — et qui doit d'abord
              donner). <strong>Marqueurs :</strong> SDG 5.4.1 par sexe
              (mesuré) ; retrait d'emploi pour care (enquêtes — mesuré) ;
              coût d'opportunité du care non rémunéré (estimations OIT —
              hypothèse).
            </p>
          ),
        },
        {
          label: "Tenue — le régime qui porte les autres et que personne ne porte",
          corps: (
            <p>
              Falsifiable et documenté : le care non rémunéré soutient
              l'économie mesurée (l'OIT l'estime à des pourcentages
              significatifs du PIB mondial, sans qu'il y soit compté),
              mais sa propre tenue n'est assurée par rien — ni
              reconnaissance, ni rémunération, ni relève. Le
              vieillissement démographique accroît la demande de care
              pendant que sa fourniture informelle se contracte : la
              contradiction est arithmétique, pas morale. Le régime du
              care est le seul dont la tenue conditionne la tenue de
              tous les autres — et le seul qu'aucun autre ne
              rembourse.
            </p>
          ),
        },
        {
          label: "Les invisibles de ce régime",
          corps: (
            <p>
              Le care invisible est la plus grande poche d'invisibilité
              temporelle du monde : les 118 pays sans enquête emploi du
              temps, l'entraide informelle, le care « secondaire »
              (superviser un enfant en travaillant), le care des
              soignants eux-mêmes. La carte mondiale du care est,
              pour l'essentiel, une carte blanche — et cette carte
              blanche est le résultat le plus important de cette fiche.
            </p>
          ),
        },
        {
          label: "Contraste avec les fiches 01, 02, 03",
          corps: (
            <p>
              Les trois premiers régimes décrivent ce que les systèmes
              font du temps des gens ; le régime du care décrit ce que
              les gens font du temps des autres — sans système pour le
              dire. Superposition, séparation, dispersion : trois
              manières d'organiser. Imprégnation : une manière de
              porter. La question « qui tient l'horloge ? » prend ici
              sa réponse la plus dérangeante : dans le care massif,
              l'horloge est tenue par celles et ceux qu'aucune
              horloge ne compte.
            </p>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              OIT, Care work and care jobs for a bright future of work
              (2018) · ONU, SDG 5.4.1 (proportion de temps de care non
              rémunéré par sexe — 72 pays enquêtés) · enquêtes emploi du
              temps nationales · Carol Gilligan, Une voix différente ·
              l'éthique du care (Tronto, Gilligan) · estimations OIT de
              la valeur du travail non rémunéré — hypothèses assumées.
              Fiche établie selon la Méthode MANA, v0.2.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageRegimeSaisonnier() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 05"
      titre="Le régime saisonnier"
      sections={[
        {
          label: "Définition",
          corps: (
            <p>
              Configuration stable d'usage du temps où l'année — et non la
              journée — porte la structure : quelques mois concentrent le
              travail, les revenus, l'activité, la population même du
              lieu ; le reste de l'année est creux. C'est le régime du
              tourisme, de l'agriculture, de la pêche, des vendanges,
              des sports d'hiver : le temps y arrive par vagues
              imposées par un rythme externe — climat, calendrier
              scolaire, affluence. Il ne superpose pas (01), ne sépare
              pas (02), ne disperse pas (03), n'imprègne pas (04) :
              il alterne — la pleine saison et la morte saison ne se
              ressemblent pas, et c'est leur succession qui fait la vie.
            </p>
          ),
        },
        {
          label: "Stock — une réserve annualisée, pas journalière",
          corps: (
            <p>
              Le stock ne se lit pas par jour mais par année : la réserve
              d'heures de pleine saison (journées longues, sept jours sur
              sept, repos différé) est prélevée d'avance sur la morte
              saison (sous-emploi, départ, sommeil de l'économie).
              Le régime vit à crédit temporel : il emprunte ses heures
              d'été à son hiver. <strong>Marqueurs :</strong> emploi
              saisonnier et contrats courts (statistiques nationales —
              mesuré) ; taux d'activité par mois ou trimestre (mesuré) ;
              répartition annuelle effective des heures — rarement
              publiée hors des secteurs enquêtés.
            </p>
          ),
        },
        {
          label: "Circulation — des flux par vagues",
          corps: (
            <p>
              Tout circule par vagues : les travailleurs (qui arrivent,
              repartent, reviennent), les visiteurs (la population du
              lieu double ou triple à date fixe), les revenus (concentrés
              sur la saison), l'attention publique elle-même. Le régime
              saisonnier est le seul où la circulation modifie le stock :
              le lieu se remplit et se vide — la ressource temporelle
              locale change de volume avec le calendrier, pas seulement
              d'organisation. <strong>Marqueurs :</strong> population
              saisonnière vs résidente (recensements, fichiers — mesuré) ;
              flux migratoires de travailleurs saisonniers (estimations
              OIT — hypothèse, forte sous-déclaration).
            </p>
          ),
        },
        {
          label: "Distribution — le régime des deux populations",
          corps: (
            <p>
              La fracture passe entre ceux qui subissent la vague et ceux
              qui la consomment : le résident dont l'année est imposée
              par la saison (horaires d'été massacrés, logement rare,
              services saturés) et le visiteur qui en vit un fragment
              choisi. Une seconde fracture, moins vue : les saisonniers
              eux-mêmes — souvent jeunes, étrangers, logés par
              l'employeur — cumulent le régime saisonnier et le
              fragmenté marchand (fiche 03). <strong>Marqueurs :</strong>
              prix saisonniers du logement (mesuré) ; durée des contrats
              et conditions de logement des saisonniers (enquêtes,
              rapports — mesuré par fragments, invisible dans les
              moyennes annuelles).
            </p>
          ),
        },
        {
          label: "Tenue — éprouvée par les plus vieilles civilisations, érodée par l'accélération",
          corps: (
            <p>
              Le régime saisonnier est le régime le plus ancien de
              l'humanité — agriculture, pêches, saisons — et sa tenue
              historique est millénaire : les sociétés paysannes
              structuraient l'année autour des vagues et savaient
              réparer la ressource pendant la morte saison (fêtes,
              réparations, sommeil). Sa version moderne est plus
              fragile : le tourisme et le climat désynchronisent les
              vagues (saison qui s'allonge, qui se décale, qui se
              double), et l'érosion de la morte saison (le revenu doit
              durer toute l'année, l'attention numérique maintient
              l'activité en creux) empêche la récupération. Un régime
              millénaire dont la boucle annuelle — travailler la vague,
              réparer l'entre-vague — est en train de perdre sa
              seconde moitié.
            </p>
          ),
        },
        {
          label: "Les invisibles de ce régime",
          corps: (
            <p>
              La moyenne annuelle elle-même : toute statistique annuelle
              gomme la vague (un lieu « en moyenne » tranquille qui
              explose trois mois par an) — l'invisible du régime
              saisonnier est produit par l'outil de mesure qui
              l'observe ; le temps de réparation de la morte saison
              (ce que le lieu fait de ses mois creux — visible dans
              la vie, absent des bases) ; le travail informel de
              saison, non déclaré par construction. Falsifiable : la
              plupart des « petites » économies saisonnières du monde
              n'apparaissent dans aucune donnée que pendant la vague
              — et parfois pas même alors.
            </p>
          ),
        },
        {
          label: "Contraste avec les fiches 01 à 04",
          corps: (
            <p>
              Superposition (01), séparation (02), dispersion (03),
              imprégnation (04) : quatre manières d'habiter le temps.
              Alternance (05) : une manière de l'habiter par vagues —
              la seule où le volume même de la ressource locale
              change au calendrier. Et le contraste générationnel
              éclaire les cinq : le saisonnier est le régime le plus
              ancien, l'insomniaque le plus récent ; l'un avait
              appris à réparer son temps dans le creux de la vague,
              l'autre a perdu le creux. Les cinq fiches ensemble
              déplacent la question : qui tient l'horloge ? — et
              à quelle échelle de temps la tient-on ?
            </p>
          ),
        },
        {
          label: "Sources",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              Statistiques nationales d'emploi saisonnier et de tourisme ·
              OIT, travail saisonnier et migration de travail (estimations
              — hypothèses assumées) · recensements et estimation de
              population saisonnière · histoire rurale et calendriers
              agricoles (Braudel, les structures du quotidien) · études
              locales de saisonnalité (saisonnalité résidentielle).
              Fiche établie selon la Méthode MANA, v0.2.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageRegimes() {
  useTitre("Typologie des régimes temporels");
  const B = baseUrl();
  const regimes = [
    {
      num: "01",
      nom: "Insomniaque connecté",
      verbe: "superpose",
      href: "/regime-insomniaque-connecte",
      texte:
        "Travail, connexion et attention superposés en continu : le temps perd ses bornes, la nuit est grignotée.",
    },
    {
      num: "02",
      nom: "Synchronisé institutionnel",
      verbe: "sépare",
      href: "/regime-synchronise-institutionnel",
      texte:
        "Sphères bornées et coordonnées par une horloge commune : l'héritier conquérant de la journée de huit heures.",
    },
    {
      num: "03",
      nom: "Fragmenté marchand",
      verbe: "disperse",
      href: "/regime-fragmente-marchand",
      texte:
        "Le travail arrive en fragments imposés : la disponibilité est le produit vendu, le temps propre impossible à reconstruire.",
    },
    {
      num: "04",
      nom: "Care massif",
      verbe: "imprègne",
      href: "/regime-care-massif",
      texte:
        "Le plus massif des régimes et le moins compté : la nappe phréatique sous tous les autres.",
    },
    {
      num: "05",
      nom: "Saisonnier",
      verbe: "alterne",
      href: "/regime-saisonnier",
      texte:
        "L'année porte la structure : pleine saison et morte saison, le crédit temporel de l'été emprunté à l'hiver.",
    },
  ];
  return (
    <main className="publier">
      <div className="wrap">
        <a className="retour" href={`${B}/`}>
          ← Retour
        </a>
        <p className="hero-label">Méthode MANA, v0.2 — Article 4</p>
        <h1 className="fiche-titre">Typologie des régimes temporels</h1>
        <section className="publier-panel">
          <p className="territoire-intro">
            L'unité de description n'est ni le pays ni le territoire : c'est
            le régime temporel — une configuration stable d'usage du temps,
            stable au sens systémique, jamais au sens normatif. Les pays et
            les lieux servent à documenter des régimes, jamais à les
            classer. Cinq fiches publiées, cinq manières d'habiter la même
            ressource — comparables en structure, incomparables en
            jugement.
          </p>
        </section>
        <section className="publier-panel">
          <h2 className="apercu-label">Préalable — l'horloge du vivant</h2>
          <div className="territoire-intro">
            <p>
              Toute typologie des régimes temporels humains doit commencer
              par les temporalités du vivant. Le sommeil, la fatigue, la
              récupération, la croissance, le vieillissement et les cycles
              écologiques ne se règlent pas entièrement sur les horaires
              institutionnels, les exigences marchandes ou les calendriers
              économiques. Le vivant possède des rythmes multiples, qui se
              superposent, s'accordent ou entrent en tension.
            </p>
            <p>
              Les régimes temporels décrits dans cette méthode ne
              constituent donc pas des systèmes indépendants du vivant :
              ils organisent les conditions dans lesquelles ses
              temporalités peuvent être respectées, contraintes,
              déplacées ou rendues invisibles.
            </p>
            <p>
              L'horloge du vivant n'est pas un sixième régime. Elle
              constitue le préalable à partir duquel les cinq régimes
              sont observés. Elle ne fournit pas davantage une norme
              universelle à laquelle toute société devrait se conformer.
              Elle rappelle une contrainte fondamentale : les heures
              peuvent être organisées, distribuées et comptabilisées,
              mais les besoins du vivant ne sont pas indéfiniment
              reportables.
            </p>
            <p>
              La question devient alors : comment les organisations
              humaines du temps s'articulent-elles aux temporalités du
              vivant ? Et que se passe-t-il lorsque les horloges sociales
              entrent en conflit avec les rythmes du vivant — sommeil et
              rythmes circadiens, fatigue et récupération, maladie,
              vulnérabilité et vieillissement ? Le corps n'est pas
              seulement une ressource sollicitée par les systèmes
              temporels : il possède ses propres rythmes, qui ne
              s'alignent pas nécessairement sur les horaires du travail,
              les exigences de disponibilité ou les calendriers
              économiques. Dimension transversale — pas un régime
              établi, et pas non plus un objet d'affirmations médicales
              ici : une contrainte à garder visible.
            </p>
          </div>
        </section>
        <div className="dimensions-grid">
          {regimes.map((r, i) => (
            <a
              key={r.num}
              className={`dimension-bulle ${ACCENTS[i % 4]}`}
              href={`${B}${r.href}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{r.nom}</h3>
              <p>
                <strong>{r.verbe}</strong> — {r.texte}
              </p>
            </a>
          ))}
        </div>
        <section className="publier-panel">
          <h2 className="apercu-label">Disponibilité et liberté temporelle</h2>
          <div className="territoire-intro">
            <p>
              Disposer de temps ne signifie pas nécessairement être libre
              d'en décider l'usage. Distinguer, sans prétendre que ces
              distinctions correspondent à des mesures déjà disponibles :
              le temps disponible en théorie · le temps réellement
              mobilisable compte tenu des contraintes · la capacité de
              choisir, de déplacer, de refuser ou d'interrompre une
              activité · la possibilité de disposer de plages
              suffisamment continues pour entreprendre ce que l'on
              souhaite.
            </p>
            <p>
              Les horaires imprévisibles, les responsabilités de care, les
              déplacements, l'épuisement et la précarité réduisent le
              temps mobilisable bien en deçà du temps théorique. Mais
              l'agenda rempli n'est pas, à lui seul, la preuve d'une
              absence de liberté : des activités choisies, des relations
              et des engagements donnent aussi du sens au temps. Ne pas
              assimiler automatiquement autonomie, temps libre, bonheur
              et bien-être — ce sont des phénomènes distincts.
            </p>
          </div>
        </section>
        <section className="publier-panel">
          <h2 className="apercu-label">Une même grille pour lire les régimes</h2>
          <div className="territoire-intro">
            <p>
              Six questions qualitatives pour examiner chacun des cinq
              régimes — des axes d'observation, pas un barème : aucune
              pondération, aucune note, aucune couleur évaluative, aucun
              score global. Quand une réponse ne peut pas être établie,
              c'est une limite de connaissance à signaler — pas un
              vide à compléter arbitrairement.
            </p>
            <p>
              <strong>1. Horloge dominante</strong> — qui ou quoi organise
              le rythme ?{" "}
              <strong>2. Frontières temporelles</strong> — les activités
              ont-elles un début et une fin identifiables ?{" "}
              <strong>3. Prévisibilité</strong> — peut-on anticiper son
              temps ?{" "}
              <strong>4. Marge de décision</strong> — peut-on refuser,
              déplacer ou interrompre une activité ?{" "}
              <strong>5. Compatibilité avec le vivant</strong> — les
              rythmes corporels et les besoins de récupération
              peuvent-ils être respectés ?{" "}
              <strong>6. Possibilité de recomposition</strong> — reste-t-il
              du temps suffisamment continu pour choisir ce que l'on
              veut en faire ?
            </p>
          </div>
        </section>
        <section className="publier-panel">
          <h2 className="apercu-label">Trois candidats à examiner — sans les établir</h2>
          <div className="territoire-intro">
            <p>
              Des dimensions qui méritent une attention particulière — des
              pistes d'analyse, pas des catégories validées. L'objectif
              est précisément de montrer qu'une dimension importante du
              temps ne justifie pas automatiquement la création d'un
              nouveau régime.
            </p>
            <p>
              <strong>Le vivant</strong> — dimension transversale qui
              traverse les cinq régimes (voir le préalable).{" "}
              <strong>L'attente</strong> — temps suspendu par une
              décision, une procédure, une promesse ou une incertitude :
              apparaît-elle comme un régime stable, ou traverse-t-elle
              plusieurs régimes existants (l'attente d'une plateau dans
              le fragmenté, d'une réponse dans l'insomniaque, d'une
              saison dans le saisonnier) ? Question ouverte.{" "}
              <strong>L'autonomie temporelle</strong> — capacité
              individuelle ou collective à négocier ses rythmes :
              décrit-elle un régime cohérent, ou plutôt une propriété
              variable à l'intérieur de chacun des cinq régimes ?
              Question ouverte, elle aussi.
            </p>
          </div>
        </section>
        <section className="publier-panel">
          <h2 className="apercu-label">Qui tient l'horloge ?</h2>
          <div className="territoire-intro">
            <p>
              La question commune aux cinq régimes : <strong>qui tient
              l'horloge ?</strong> — et à quelle échelle de temps ?
              Personne (le flux), l'institution (conquise), la demande
              (imposée), les invisibles (celles et ceux qu'aucune horloge
              ne compte), le calendrier (externe). La plupart des vies
              réelles vivent dans le mélange de plusieurs régimes.
            </p>
            <p>
              Deux questions complémentaires l'enrichissent.{" "}
              <strong>Qui peut en changer le rythme, et à quel prix ?</strong>{" "}
              — la marge de décision et le coût de l'autonomie.{" "}
              <strong>Une fois le temps organisé, contraint ou libéré,
              reste-t-il à la personne la possibilité de l'habiter ?</strong>{" "}
              — l'articulation avec le temps vécu, sans réduire celui-ci
              à une quantité mesurable. Trois questions qui ouvrent
              l'observation — elles n'imposent pas de réponse
              universelle.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

const SEC_MANIFESTE: { label: string; corps: React.ReactNode }[] = [
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
                êtres — la page <a href={`${B}/observer`}>Observer</a>
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
];

const SEC_VISION: { label: string; corps: React.ReactNode }[] = [
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
];

const SEC_CHARTE: { label: string; corps: React.ReactNode }[] = [
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
          label: "Transparence des financements",
          corps: (
            <p>
              MANA TIME BANK publie l'identité de ses financeurs, le montant
              et l'objet des financements reçus, sous réserve des obligations
              légales et des exigences légitimes de confidentialité. Aucun
              financement ne donne au financeur le droit de déterminer les
              conclusions. Celles-ci restent soumises aux données, à la
              méthode et à la publication des limites.
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
];

const SEC_DONNEES: { label: string; corps: React.ReactNode }[] = [
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
          label: "Séries — heures de travail payé, 2023 (heures annuelles par travailleur)",
          corps: (
            <>
              <p>
                Mesuré. Source : Penn World Table 11.0 via Our World in Data
                (« annual working hours per worker »), millésime 2023.
              </p>
              <table className="donnees-table">
                <thead>
                  <tr><th>Pays</th><th>Heures / an</th><th>≈ h / semaine</th></tr>
                </thead>
                <tbody>
                  <tr><td>Cambodge</td><td>2 389</td><td>46,0</td></tr>
                  <tr><td>Bangladesh</td><td>2 383</td><td>45,8</td></tr>
                  <tr><td>Botswana</td><td>2 258</td><td>43,4</td></tr>
                  <tr><td>Algérie</td><td>2 232</td><td>42,9</td></tr>
                  <tr><td>Cameroun</td><td>2 181</td><td>41,9</td></tr>
                  <tr><td>Albanie</td><td>2 152</td><td>41,4</td></tr>
                  <tr><td>Brésil</td><td>1 994</td><td>38,3</td></tr>
                  <tr><td>Chili</td><td>1 950</td><td>37,5</td></tr>
                  <tr><td>Canada</td><td>1 731</td><td>33,3</td></tr>
                  <tr><td>Belgique</td><td>1 593</td><td>30,6</td></tr>
                  <tr><td>Autriche</td><td>1 438</td><td>27,7</td></tr>
                </tbody>
              </table>
              <p>
                La plage mondiale est de plus de 1 600 heures par an entre
                les configurations les plus intensives et les moins
                intensives — deux travailleurs ne vivent pas dans le même
                régime. Ces chiffres ne classent rien : ils montrent
                l'ampleur de la variance.
              </p>
            </>
          ),
        },
        {
          label: "Séries — care non rémunéré, heures par jour (femmes / hommes, dernière enquête disponible)",
          corps: (
            <>
              <p>
                Mesuré (dans les pays enquêtés — invisible ailleurs).
                Source : ONU, SDG 5.4.1, via Our World in Data. Année entre
                parenthèses : la plus récente enquête du pays.
              </p>
              <table className="donnees-table">
                <thead>
                  <tr><th>Pays</th><th>Femmes</th><th>Hommes</th><th>Rapport</th></tr>
                </thead>
                <tbody>
                  <tr><td>Inde (2024)</td><td>5,37</td><td>0,70</td><td>7,7×</td></tr>
                  <tr><td>Mexique (2024)</td><td>5,14</td><td>2,04</td><td>2,5×</td></tr>
                  <tr><td>Maroc (2012)</td><td>5,00</td><td>0,72</td><td>6,9×</td></tr>
                  <tr><td>France (2010)</td><td>3,79</td><td>2,28</td><td>1,7×</td></tr>
                  <tr><td>États-Unis (2023)</td><td>3,70</td><td>2,42</td><td>1,5×</td></tr>
                  <tr><td>Japon (2021)</td><td>3,53</td><td>0,90</td><td>3,9×</td></tr>
                  <tr><td>Norvège (2023)</td><td>3,48</td><td>2,76</td><td>1,3×</td></tr>
                  <tr><td>Suède (2011)</td><td>3,85</td><td>3,08</td><td>1,25×</td></tr>
                </tbody>
              </table>
              <p>
                Trois constats dans les données elles-mêmes : la fracture
                de genre existe partout mesurée (jamais inversée) ; son
                ampleur varie de 1,25 à 7,7 — ce ne sont pas les mêmes
                régimes ; et les dates racontent l'asymétrie : la Norvège
                a enquêté en 2023, la France en 2010 — certains pays ne
                regardent leur care que tous les quinze ans.
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
              Heures de travail : Penn World Table 11.0 via Our World in
              Data, « annual working hours per worker », 2023 · Care non
              rémunéré : ONU SDG 5.4.1 via Our World in Data (dernière
              enquête disponible par pays) · ILOSTAT, heures hebdomadaires
              effectives (~160 pays) · OIT, Care work and care jobs (72
              pays avec enquête emploi du temps, 27 au moins deux fois,
              2018) · OMS/OIT (745 000 décès/an attribuables aux longues
              heures, 2021) · Gallup World Poll (question du temps pour
              soi, 140+ pays) · OCDE, Time Use Database.
            </p>
          ),
        },
];

const SEC_INDICE: { label: string; corps: React.ReactNode }[] = [
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
];

const SEC_PORTRAIT: { label: string; corps: React.ReactNode }[] = [
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
];

function PageTempsVecu() {
  return (
    <PageDoctrine
      nom="Chapitre — essai en trois échelles"
      titre="Du temps possédé au temps vécu"
      description="Essai en trois échelles (individu, collectivités, humanité) : temps vécu et liberté temporelle à l'ère des machines. Avoir, valoir, être ; le paradoxe du progrès technique ; Internet, diapason potentiel."
      sections={[
        {
          label: "Des années de vie. De la vie dans des années.",
          corps: (
            <>
              <p>
                Nous savons mesurer la durée chronologique. Nous savons
                beaucoup moins bien décrire ce que les êtres humains
                vivent au cours de cette durée, comment ils en font
                l'expérience, et dans quelle mesure ils peuvent
                réellement en disposer.
              </p>
              <p style={{ fontStyle: "italic" }}>
                Des années de vie. De la vie dans des années.
              </p>
              <p>
                Dix années peuvent être riches en relations, en
                découvertes, en présence et en transmission. Elles
                peuvent également être marquées par l'attente, la
                contrainte, la solitude ou l'épuisement. La durée
                mesurée ne suffit donc pas à décrire la vie vécue.
                Cette intuition ne devient pas pour autant un jugement
                sur la valeur des existences : une vie difficile
                n'est pas nécessairement une vie sans sens ; une vie
                agréable n'est pas automatiquement une vie libre ; une
                vie longue n'est pas d'office une vie riche.
              </p>
              <p>
                Quatre notions à distinguer d'entrée : le{" "}
                <strong>temps chronologique</strong> mesure une durée ;
                le <strong>temps vécu</strong> désigne l'expérience
                subjective de cette durée ; le <strong>temps
                collectif</strong> désigne les rythmes, les contraintes
                et les possibilités organisés par une société ; le{" "}
                <strong>temps civilisationnel</strong> désigne
                l'articulation des temporalités humaines,
                technologiques, économiques, écologiques et
                intergénérationnelles. Ces dimensions interagissent
                sans être réductibles les unes aux autres.
              </p>
              <p>
                Ce chapitre est un essai en trois échelles : il part de
                l'expérience individuelle, montre comment les
                temporalités sont organisées collectivement, puis ouvre
                sur les rythmes de l'humanité et du vivant. La question
                de recherche : comment décrire les relations entre
                ces quatre temps, la liberté temporelle et les
                conditions sociales dans lesquelles les vies se
                déroulent ?
              </p>
            </>
          ),
        },
        {
          label: "Avoir, valoir, être — le socle de la question",
          corps: (
            <>
              <p>
                Nos sociétés associent souvent la réussite à la
                possession, au statut, à la productivité et à la
                consommation. L'avoir ne répond pas seulement à des
                besoins matériels légitimes : il devient un langage
                social — posséder pour être reconnu, consommer pour
                appartenir, travailler pour justifier sa place. Erich
                Fromm décrivait dès 1942 cette tendance à définir
                l'existence par l'avoir plutôt que par l'être. Et la
                possession n'est pas seulement matérielle : les
                sociétés peuvent aussi valoriser l'occupation permanente
                du temps, la disponibilité, la vitesse de réaction et
                la productivité — posséder son agenda comme on possède
                un bien. L'observation n'est pas une condamnation de la
                consommation ou de l'activité : elle repère le moment
                où l'occupation devient une preuve d'existence.
              </p>
              <p>
                Trois dimensions distinctes, souvent confondues :
                <strong> avoir</strong> — disposer de ressources, de
                biens, de moyens d'action ; <strong>valoir</strong> —
                être reconnu socialement à travers son statut, son
                patrimoine, son métier, ses performances ;{" "}
                <strong>être</strong> — exister, éprouver, aimer,
                apprendre, créer, prendre soin et se reposer, sans
                devoir constamment justifier son utilité.
              </p>
              <p>
                Proposition philosophique : la dignité humaine ne
                devrait pas dépendre de la productivité économique
                d'une personne. Et la liberté temporelle ne consiste
                pas simplement à avoir des heures libres : elle
                consiste à pouvoir choisir ce que l'on en fait sans
                devoir constamment justifier son utilité. Les sociétés
                où l'accès à une vie digne semble conditionné à la
                capacité de produire, de gagner ou de consommer
                méritent d'être observées comme des configurations
                temporelles — décrites dans leurs conséquences, non
                jugées.
              </p>
            </>
          ),
        },
        {
          label: "Le paradoxe du progrès technique",
          corps: (
            <>
              <p>
                L'intelligence artificielle et la robotique pourraient
                automatiser une part croissante des tâches humaines.
                Mais un gain de productivité ne devient pas
                automatiquement du temps libre. En 1930, John Maynard
                Keynes prédisait des semaines de travail de quinze
                heures ; un siècle plus tard, l'ILOSTAT mesure une
                moyenne mondiale d'environ quarante-quatre heures
                hebdomadaires. La prédiction n'était pas absurde —
                les gains ont eu lieu — mais ils n'ont pas coulé vers
                le temps libre.
              </p>
              <p>
                Quatre étapes distinguent ce qui se confond :{" "}
                <strong>1.</strong> le temps techniquement économisé ·{" "}
                <strong>2.</strong> la transformation du travail et
                des tâches · <strong>3.</strong> le temps
                effectivement rendu disponible · <strong>4.</strong> la
                liberté réelle de choisir l'usage de ce temps — le
                temps appropriable, celui qu'une personne peut
                réellement faire sien. La question n'est pas de savoir
                ce que les machines peuvent accomplir, mais qui
                bénéficie des gains, qui supporte les coûts, et
                comment les nouvelles possibilités sont distribuées.
                Une société peut devenir plus productive sans
                devenir temporellement plus libre.
              </p>
            </>
          ),
        },
        {
          label: "MICRO — la temporalité vécue : six phénomènes à distinguer",
          corps: (
            <>
              <p>
                À l'échelle de la personne, le vécu temporel se
                déplie en phénomènes distincts — un cadre de
                recherche à examiner, pas une échelle
                psychométrique validée, jamais un score :
              </p>
              <p><strong>Temps ressenti</strong> — la durée qui paraît
              rapide, lente, suspendue, fluide ou interminable.
              Bergson distinguait dès 1889 la durée vécue du temps
              mesuré de l'horloge.</p>
              <p><strong>Temps remémoré</strong> — la manière dont une
              période prend place dans la mémoire et le récit de
              vie : des années intenses se resserrent en souvenirs
              denses, des années plates s'étirent dans le souvenir.</p>
              <p><strong>Temps affectif</strong> — les relations entre
              émotions, attention, désir, peur, ennui, sérénité et
              perception temporelle. L'ennui n'est pas l'absence de
              temps mais une de ses qualités.</p>
              <p><strong>Temps relationnel</strong> — présence
              partagée, attente, solitude, soin, confiance : le
              temps que les liens prennent, donnent et rendent.</p>
              <p><strong>Horizon temporel</strong> — la manière dont
              une personne se représente son avenir, les
              possibilités qui lui restent, les générations qui lui
              succéderont.</p>
              <p><strong>Liberté temporelle</strong> — la capacité
              réelle à choisir l'usage de son temps, compte tenu des
              obligations et contraintes matérielles. Elle comprend
              le repos, l'ennui, la rêverie et le droit de ne rien
              optimiser — le droit à la paresse que Paul Lafargue
              revendiquait dès 1880.</p>
              <p>
                Ne pas confondre ces dimensions : quantité de temps
                libre, expérience agréable, sens, qualité
                relationnelle et liberté temporelle sont des
                phénomènes distincts. Et ne pas confondre liberté
                temporelle et obligation de vivre pleinement chaque
                instant — l'injonction au bonheur permanent
                transforme même le temps libre en performance. Les
                traditions qui méditent sur l'impermanence et la
                présence attentive — le bouddhisme parmi d'autres —
                sont des interlocutrices, pas des recettes ; et la
                présence au moment vécu ne remplace jamais les
                conditions matérielles d'une existence digne :
                pleine conscience et précarité ne font pas bon
                ménage.
              </p>
            </>
          ),
        },
        {
          label: "MÉSO — les temporalités collectives",
          corps: (
            <>
              <p>
                Un collectif n'a ni cerveau unique ni expérience
                subjective homogène. Sa temporalité se construit à
                travers des institutions, des rythmes communs, des
                pratiques culturelles, des contraintes matérielles,
                des mémoires partagées et des visions de l'avenir.
                Cinq entrées d'observation :
              </p>
              <p><strong>Les rythmes sociaux</strong> — horaires de
              travail, temps de soin, scolarité, déplacements,
              services publics, vie associative, saisons, fêtes et
              temps communs.</p>
              <p><strong>La répartition du temps</strong> — temps
              disponible et temps contraint, responsabilités de
              soin, fragmentation des journées, inégalités d'accès
              au repos et aux activités choisies, différences entre
              groupes sociaux et générations.</p>
              <p><strong>La synchronisation sociale</strong> —
              possibilités de se rencontrer, compatibilité des
              horaires, coordination entre institutions, occasions
              d'entraide, capacité à préserver des temps collectifs.</p>
              <p><strong>Le temps historique</strong> — mémoires
              collectives (Maurice Halbwachs en a fondé l'étude),
              transmission des savoirs, continuité et transformation
              des traditions, pluralité des récits au sein d'une même
              société.</p>
              <p><strong>Le temps institutionnel</strong> — urgence
              quotidienne, cycles administratifs et politiques,
              durée des projets, entretien des infrastructures,
              effets différés des décisions.</p>
              <p>
                La question n'est pas de classer les peuples selon un
                prétendu bonheur temporel. Elle est de comprendre
                comment chaque organisation sociale rend certaines
                expériences du temps possibles et en empêche
                d'autres.
              </p>
            </>
          ),
        },
        {
          label: "Le temps d'un peuple",
          corps: (
            <>
              <p>
                Un peuple ne possède pas une expérience temporelle
                unique et homogène. Les temporalités collectives se
                construisent à travers les institutions, les cultures,
                les générations, les conditions matérielles et les
                rythmes partagés. À l'intérieur d'un même peuple,
                observer :
              </p>
              <p>
                les inégalités de temps disponible · les horaires et
                contraintes de travail · les responsabilités de soin ·
                les possibilités de rencontre et d'entraide · les
                rythmes des services et des institutions · les
                mémoires collectives et la transmission · les
                différences de temporalité entre générations.
              </p>
              <p>
                La question n'est pas de classer les peuples selon
                leur bonheur ou leur qualité de vie temporelle. Il
                s'agit de décrire les conditions qui rendent
                certaines expériences possibles et en empêchent
                d'autres — pour chacun et pour tous.
              </p>
            </>
          ),
        },
        {
          label: "L'amour, une piste pour comprendre le temps vécu",
          corps: (
            <>
              <p>
                Proposition de réflexion, traitée comme piste
                interdisciplinaire et non comme explication
                universelle : les relations affectives mettent en
                évidence plusieurs temporalités à la fois. Le temps
                court de l'intensité — désir, passion, rencontre,
                émotion, sentiment d'urgence, l'instant qui prend
                une place immense. Le temps long de la confiance —
                expériences répétées, fiabilité, attention, soin,
                connaissance de l'autre, mémoire commune, continuité
                du lien.
              </p>
              <p>
                Ces dynamiques ne s'excluent pas : la passion peut
                ouvrir une relation qui se construit dans la durée ;
                une relation durable peut renouveler son intensité ;
                et la durée seule ne garantit ni la confiance ni la
                qualité du lien. Distinguer systématiquement :
                l'intensité ressentie · la durée chronologique · la
                confiance construite · la qualité relationnelle · la
                liberté de chacun au sein de la relation.
              </p>
              <p>
                Question de recherche possible : comment les relations
                qui comptent pour nous transforment-elles notre
                expérience du temps et la manière dont nous choisissons
                de l'employer ? L'amour est un cas d'étude — pas la
                définition universelle de toute temporalité humaine,
                et personne ne prétend ici qu'il explique déjà la
                majorité des décisions humaines.
              </p>
            </>
          ),
        },
        {
          label: "MACRO — les temporalités désaccordées",
          corps: (
            <>
              <p>
                À l'échelle civilisationnelle, les rythmes
                économiques, politiques, humains et écologiques se
                désaccordent. La réactivité économique peut être très
                rapide ; la confiance relationnelle se construit dans
                la durée ; les besoins de soin suivent des
                temporalités concrètes ; les écosystèmes répondent à
                des cycles qui varient selon les milieux ; et les
                conséquences des décisions peuvent dépasser
                plusieurs générations.
              </p>
              <p>
                Cette désynchronisation est une piste d'analyse, pas
                un verdict : certains rythmes doivent rester
                différents — une forêt n'a pas à suivre le rythme
                d'une bourse. L'enjeu est d'identifier les décalages
                qui créent des contraintes, des dommages ou des
                difficultés de coopération, et les arrangements qui
                permettent aux temporalités de coexister.
              </p>
              <p>
                Question centrale : comment l'humanité articule-t-elle
                les temporalités de ses individus, de ses
                institutions, de son économie et du vivant, alors que
                les conséquences de ses décisions dépassent souvent
                les horizons de ceux qui les prennent ?
              </p>
            </>
          ),
        },
        {
          label: "Internet et les IA — un diapason potentiel ?",
          corps: (
            <>
              <p>
                Métaphore, signalée comme telle :{" "}
                <em>Internet, un diapason potentiel de l'humanité.
                Les IA, de nouveaux interlocuteurs pour apprendre à
                réfléchir ensemble.</em> Elle donne envie de
                réfléchir — elle ne décrit pas un fait établi.
              </p>
              <p>
                Internet n'est pas le premier outil de synchronisation
                humaine : le télégraphe, la radio, les chemins de fer
                et les fuseaux horaires ont déjà transformé la
                coordination à grande échelle. Sa particularité tient
                à la combinaison de la communication mondiale, de
                l'interactivité, de la disponibilité permanente et de
                la coordination distribuée. Les IA conversationnelles
                ajoutent la possibilité d'un dialogue individualisé,
                accessible à la demande, qui peut accompagner une
                réflexion dans la durée.
              </p>
              <p>
                Les deux faces, sans techno-utopisme ni technophobie.
                <strong> Possibilités :</strong> rapprocher des
                personnes éloignées, faciliter l'accès aux
                connaissances, soutenir l'apprentissage, coordonner
                des initiatives collectives, préserver et transmettre
                des savoirs, aider à examiner les conséquences à long
                terme des décisions. <strong>Risques et limites :</strong>
                accélération permanente des sollicitations,
                fragmentation de l'attention, pression à la réponse
                immédiate, synchronisation de foules autour
                d'informations fausses, dépendance à des plateformes,
                inégalités d'accès, confusion entre disponibilité
                numérique et présence humaine, confusion entre
                dialogue avec une IA et relation humaine réciproque.
              </p>
              <p>
                Internet n'est pas un métronome universel déjà
                partagé par tous, et la synchronisation n'est pas
                une fin en soi : le défi n'est pas de faire vivre
                tout le monde au même rythme, mais de mieux
                articuler des rythmes différents. La vraie force de
                MANA TIME BANK sera de ne pas s'arrêter à la
                métaphore : définir ce que nous pouvons observer,
                ce que nous pouvons comparer et ce que nous devons
                encore apprendre.
              </p>
            </>
          ),
        },
        {
          label: "Ce que nous pouvons observer, comparer — et ce qu'il nous faut apprendre",
          corps: (
            <p>
              <strong>Observables aujourd'hui :</strong> les durées
              mesurées (heures de travail, enquêtes emploi du temps
              — 72 pays au moins une fois), les contraintes
              objectives (horaires, déplacements, interruptions), les
              rythmes institutionnels et saisonniers.{" "}
              <strong>Comparables avec prudence :</strong> les
              répartitions du temps entre groupes et générations,
              dans la limite des nomenclatures nationales.{" "}
              <strong>À apprendre encore :</strong> le temps ressenti
              et remémoré (aucune mesure harmonisée n'existe), le
              temps relationnel et la confiance, la liberté
              temporelle réelle, les effets à long terme des
              désynchronisations. Trois échelles — MICRO, MÉSO,
              MACRO — complémentaires, jamais trois composantes d'un
              indice à additionner : les structures collectives
              influencent le temps vécu ; les pratiques
              individuelles et relationnelles contribuent aux
              dynamiques collectives ; les décisions
              civilisationnelles transforment les conditions de vie
              présentes et futures.
            </p>
          ),
        },
        {
          label: "De la possession à la liberté temporelle",
          corps: (
            <>
              <p>
                Le changement de paradigme ne consiste pas à culpabiliser
                les individus ni à leur demander de renoncer à leurs
                aspirations. Il suppose d'examiner les conditions
                collectives qui rendent la liberté possible : une
                sécurité matérielle suffisante · des revenus et des
                services accessibles · une répartition équitable du
                travail rémunéré et du soin · la possibilité de réduire
                le temps de travail lorsque les gains de productivité le
                permettent · la reconnaissance des contributions non
                marchandes · la préservation des ressources et des
                écosystèmes · le droit de choisir l'usage de son temps,
                y compris celui de ne rien optimiser.
              </p>
              <p>
                Et la liberté temporelle dépend aussi de la
                synchronisation : avoir du temps seul ne garantit pas de
                pouvoir le partager. Des disponibilités qui ne se
                rencontrent pas — horaires incompatibles, proches
                éloignés, services fermés — produisent une solitude
                temporelle qu'aucune heure libre ne comble. Pouvoir
                synchroniser son temps avec celui d'autrui fait partie
                des conditions de la liberté.
              </p>
            </>
          ),
        },
        {
          label: "Méthode — distinguer le mesuré, l'interprété et l'inconnu",
          corps: (
            <p>
              Ce chapitre applique la doctrine MANA : distinguer les
              observations mesurées, les interprétations, les
              hypothèses et les phénomènes invisibles ; relier toute
              affirmation empirique à une source vérifiable ; ne pas
              présenter une métaphore comme un résultat scientifique
              ni une corrélation comme une causalité ; ne pas
              confondre les réponses à un questionnaire avec une
              mesure objective du vécu ; expliciter les limites des
              échantillons et des comparaisons ; ne construire
              aucune note universelle de qualité temporelle, ni
              aucun classement de territoires ou de peuples. La
              méthode documente les incertitudes et les
              contradictions — elle ne les dissimule pas derrière
              une formule synthétique.
            </p>
          ),
        },
        {
          label: "Un programme empirique potentiel",
          corps: (
            <>
              <p>
                Des pistes de recherche — non réalisées à ce jour,
                présentées comme programme potentiel avec ses
                questions ouvertes :
              </p>
              <p>
                1. Journaux de temps vécu, en participation
                volontaire · 2. Entretiens et récits de vie sur les
                périodes ressenties comme longues, courtes, riches
                ou vides · 3. Études des contraintes objectives :
                travail, soin, déplacements, horaires, interruptions ·
                4. Comparaisons entre groupes sociaux, générations et
                territoires · 5. Études de la synchronisation :
                disponibilité commune, coordination des horaires,
                entraide, participation collective ·
                6. Études intergénérationnelles et écologiques des
                horizons temporels des décisions.
              </p>
              <p>
                Toute collecte respecterait le consentement, la
                minimisation des données, la confidentialité et
                l'absence de surveillance individuelle.
              </p>
            </>
          ),
        },
        {
          label: "Le positionnement de MANA TIME BANK",
          corps: (
            <p>
              MANA TIME BANK ne prescrit pas comment vivre son
              temps. Sa vocation : rendre plus visibles les
              relations entre durée mesurée, expérience temporelle,
              liberté de disposer de son temps, relations humaines,
              organisation collective, solidarité, régénération du
              vivant et responsabilités envers les générations
              futures. Pas une promesse de bonheur ni de
              productivité ; pas une banque d'heures ni une monnaie
              d'échange ; un travail exploratoire et d'intérêt
              général.
            </p>
          ),
        },
        {
          label: "Conclusion",
          corps: (
            <>
              <p>
                Une société n'est pas seulement riche de ce qu'elle
                possède ou de ce qu'elle produit. Elle l'est aussi
                des possibilités qu'elle offre à chacun de vivre son
                temps. Trois idées pour finir :{" "}
                <strong>1.</strong> les machines peuvent contribuer à
                économiser du temps, sans garantir que ce temps
                devienne une liberté ; <strong>2.</strong> Internet
                et les IA offrent de nouvelles possibilités de
                communication, de réflexion et de coordination, sans
                garantir que l'humanité sache mieux employer son
                temps ; <strong>3.</strong> MANA TIME BANK cherche à
                comprendre les conditions dans lesquelles les
                individus et les sociétés peuvent disposer de leur
                temps, le partager et préserver les possibilités des
                générations futures.
              </p>
              <p style={{ fontStyle: "italic" }}>
                Le temps ne se possède pas. Il se vit, se partage et
                se préserve.
              </p>
              <p style={{ fontStyle: "italic" }}>
                Nous savons compter les heures. Nous devons encore
                apprendre à décrire les mondes humains que ces
                heures rendent possibles.
              </p>
              <p style={{ fontStyle: "italic" }}>
                Des années de vie. De la vie dans des années.
              </p>
            </>
          ),
        },
        {
          label: "Références",
          corps: (
            <p style={{ fontSize: "var(--t-xs)", opacity: 0.7 }}>
              Henri Bergson, Essai sur les données immédiates de la
              conscience (1889) — durée vécue · Maurice Halbwachs,
              Les Cadres sociaux de la mémoire (1925) · Pitirim
              Sorokin et Robert K. Merton, Social Time (1937) ·
              Eviatar Zerubavel, Hidden Rhythms (1981) et The Seven
              Day Circle (1985) · Erich Fromm, La Peur de la liberté
              (1942) et Avoir ou être ? (1976) · John Maynard
              Keynes, Economic Possibilities for our Grandchildren
              (1930) · Paul Lafargue, Le Droit à la paresse (1880) ·
              Bertrand Russell, Éloge de l'oisiveté (1932) ·
              Byung-Chul Han, La Société de la fatigue · Hartmut
              Rosa, Accélération, et Résonance · ILOSTAT, heures
              hebdomadaires effectives (~160 pays, consulté 2026).
              Les passages philosophiques de ce chapitre sont des
              propositions de réflexion, pas des résultats
              empiriques ; la métaphore du diapason est une
              métaphore.
            </p>
          ),
        },
      ]}
    />
  );
}

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

function PageComprendre() {
  return (
    <PageDoctrine
      nom="Comprendre"
      titre="La raison d'être de MANA TIME BANK"
      description="Manifeste du temps retrouvé, vision du projet et charte de confiance : pourquoi le temps est le bien commun premier de l'humanité, ce que MANA TIME BANK observe, et les engagements qui garantissent que les conclusions restent soumises aux données."
      sections={[
        ...SEC_MANIFESTE,
        ...SEC_VISION,
        ...SEC_CHARTE,
      ]}
    />
  );
}

function PageObserver() {
  return (
    <PageDoctrine
      nom="Observer"
      titre="Ce que MANA TIME BANK observe"
      description="Le parcours d'observation : les données disponibles du temps mondial (PWT, SDG 5.4.1), l'indice MANA et la visibilité des circuits, le portrait d'un système temporel — et les limites de ce qu'on peut conclure. Aucun score, aucun classement."
      sections={[
        ...SEC_DONNEES,
        ...SEC_INDICE,
        ...SEC_PORTRAIT,
      ]}
    />
  );
}

function PageSoutenir() {
  return (
    <PageDoctrine
      nom="Soutenir"
      titre="Soutenir MANA TIME BANK"
      description="Soutenir la production de connaissances d'intérêt général sur le temps : un don ponctuel ou mensuel à l'Alliance MANA, sans contrepartie, pour documenter les régimes temporels et maintenir la méthode accessible à toutes et tous."
      sections={[
        {
          label: "Pourquoi soutenir",
          corps: (
            <p>
              Comprendre le temps vécu et la manière dont nos sociétés
              l'organisent est un travail de recherche et de réflexion de
              long terme. Votre soutien aide l'Alliance MANA à documenter
              les régimes temporels, développer la méthode et maintenir
              ces connaissances accessibles à toutes et tous. Le site
              reste librement accessible : on ne paie pas pour utiliser
              MANA TIME BANK, on soutient le travail qu'il rend visible.
            </p>
          ),
        },
        {
          label: "Comment soutenir",
          corps: (
            <>
              <p>
                <strong>Don ponctuel ou mensuel</strong> — sans
                contrepartie, sans palier, sans contre-donation. Chaque
                soutien, quel que soit son montant, finance la même
                chose : la production de connaissance ouverte.
              </p>
              <p>
                <strong>Adhésion de soutien à l'Alliance MANA</strong> —
                pour celles et ceux qui veulent être membres de
                l'association porteuse.
              </p>
              <p>
                <strong>Mécénat et partenariats scientifiques</strong> —
                fondations, organismes de recherche et acteurs de
                l'économie sociale peuvent financer une étude, un
                terrain d'observation ou une expérimentation. Voir la
                règle de transparence de la charte : un financeur peut
                financer une question — il ne peut pas acheter les
                conclusions.
              </p>
            </>
          ),
        },
        {
          label: "Le dispositif de soutien — en cours de mise en place",
          corps: (
            <p>
              Le paiement en ligne n'est pas encore actif. Le
              dispositif juridique (compte, reçus, éligibilité) est en
              cours de structuration avec l'Alliance MANA ; le bouton
              de don sera installé une fois le destinataire sécurisé.
              En attendant, toute manifestation d'intérêt est
              bienvenue via le formulaire de contact ci-dessous.
              Aucune promesse d'avantage fiscal n'est faite ici tant
              que l'éligibilité de l'organisme n'a pas été vérifiée.
            </p>
          ),
        },
        {
          label: "Transparence",
          corps: (
            <p>
              Conformément à la charte : l'identité des financeurs, le
              montant et l'objet des financements seront publiés, sous
              réserve des obligations légales et des exigences
              légitimes de confidentialité. Aucun financement ne donne
              au financeur le droit de déterminer les conclusions.
            </p>
          ),
        },
      ]}
    />
  );
}

function PageEtudePilote() {
  return (
    <PageDoctrine
      nom="Offre pilote · collectivités"
      titre="Étude des temporalités d'un territoire"
      description="Une étude documentée des temporalités d'un territoire : cartographie des données et zones d'ombre, régimes temporels observables, contraintes et marges de liberté temporelle — sans score global ni classement. Tarif de lancement pilote."
      sections={[
        {
          label: "Pourquoi cette étude",
          corps: (
            <p>
              Un territoire organise le temps de ses habitants —
              horaires des services, mobilités, travail, care,
              saisonnalité — rarement en le voyant. Cette étude rend
              visibles ces articulations : comment elles se combinent,
              où elles produisent des tensions (logement saisonnier,
              désynchronisation des services, charge de care), et où
              se trouvent les marges de liberté temporelle. Elle
              applique la méthode publique MANA, v0.2 : mêmes règles,
              mêmes états de données, aucun score, aucun classement.
            </p>
          ),
        },
        {
          label: "Livrables",
          corps: (
            <>
              <p>
                <strong>1.</strong> Cartographie des données
                disponibles sur le territoire et de ses zones d'ombre.
              </p>
              <p>
                <strong>2.</strong> Analyse des régimes temporels
                observables (typologie MANA — synchronisé, fragmenté,
                saisonnier, care massif, insomniaque connecté).
              </p>
              <p>
                <strong>3.</strong> Portrait documenté des contraintes
                et des marges de liberté temporelle, par grandeur :
                stock, circulation, distribution, tenue.
              </p>
              <p>
                <strong>4.</strong> Pistes de réflexion pour les
                décideurs — sans score global ni classement moral :
                ce que les données montrent, ce qu'elles ne montrent
                pas, et les questions que le territoire pourrait se
                poser.
              </p>
            </>
          ),
        },
        {
          label: "Conditions pilotes",
          corps: (
            <p>
              Tarif de lancement : hypothèse à tester de 3 000 à
              8 000 € selon le périmètre, les données disponibles et le
              temps de travail — un prix d'entrée volontairement bas
              pour éprouver la demande, pas un prix de marché établi.
              Le financement finance une question et un travail ; il
              n'achète pas les conclusions, soumises aux données et à
              la méthode (voir la transparence des financements dans
              la charte). L'étude et ses limites sont publiables.
            </p>
          ),
        },
        {
          label: "Saisir une question temporelle concrète",
          corps: (
            <p>
              Cette offre s'adresse d'abord aux territoires confrontés
              à une tension temporelle documentable : saisonnalité
              forte (logement, services, emplois saisonniers),
              organisation du care et vieillissement, désynchronisation
              des services publics. Si votre territoire vit une de ces
              questions, le formulaire ci-dessous ouvre la
              conversation — sans engagement.
            </p>
          ),
        },
      ]}
    />
  );
}

const PAGES: Record<string, () => React.JSX.Element> = {
  comprendre: PageComprendre,
  soutenir: PageSoutenir,
  "etude-pilote": PageEtudePilote,
  observer: PageObserver,
  regimes: PageRegimes,
  methode: PageMethode,
  "temps-vecu": PageTempsVecu,
  "regime-insomniaque-connecte": PageRegimeInsomniaque,
  "regime-synchronise-institutionnel": PageRegimeSynchronise,
  "regime-fragmente-marchand": PageRegimeFragmente,
  "regime-care-massif": PageRegimeCare,
  "regime-saisonnier": PageRegimeSaisonnier,
  "mentions-legales": PageMentions,
  // Redirections des anciennes routes (contenus fusionnés)
  manifeste: () => <Redirect to="/comprendre" />,
  vision: () => <Redirect to="/comprendre" />,
  charte: () => <Redirect to="/comprendre" />,
  donnees: () => <Redirect to="/observer" />,
  indice: () => <Redirect to="/observer" />,
  portrait: () => <Redirect to="/observer" />,
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
