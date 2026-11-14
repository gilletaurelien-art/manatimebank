import { PageDoctrine, DIMENSIONS, METHODE_VERSION } from "./doctrine";
import { baseUrl } from "./router";

// Pages doctrine (méthode, mentions, comprendre, observer, soutenir,
// étude pilote) — extraits d'App.tsx (14/11/2026, découpage 64 Ko).

const B = baseUrl();

export function PageMethode() {
  return (
    <PageDoctrine
      nom="Méthode"
      slug="methode"
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

export function PageMentions() {
  return (
    <PageDoctrine
      nom="Informations légales"
      slug="mentions-legales"
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
              de vraies timebanks — deux siècles d'essais racontés dans{" "}
              <a href={`${B}/economies-du-temps`}>
                « L'heure pour monnaie »
              </a>{" "}
              ; ce projet-là observe, il n'échange pas.
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

export function PageComprendre() {
  return (
    <PageDoctrine
      nom="Comprendre"
      slug="comprendre"
      sections={[
        ...SEC_MANIFESTE,
        ...SEC_VISION,
        ...SEC_CHARTE,
      ]}
    />
  );
}

export function PageObserver() {
  return (
    <PageDoctrine
      nom="Observer"
      slug="observer"
      sections={[
        ...SEC_DONNEES,
        ...SEC_INDICE,
        ...SEC_PORTRAIT,
      ]}
    />
  );
}

export function PageSoutenir() {
  return (
    <PageDoctrine
      nom="Soutenir"
      slug="soutenir"
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

export function PageEtudePilote() {
  return (
    <PageDoctrine
      nom="Offre pilote · collectivités"
      slug="etude-pilote"
      sections={[
        {
          label: "Créer votre compte — essayer",
          corps: (
            <>
              <p>
                La sonde MANAtimebank est en cours de construction :
                l'étude pilote ouvrira les premiers cercles. Créer un
                compte, c'est rejoindre un cercle et voir sa dotation
                s'afficher — <strong>86 400 MANA par jour,
                inconditionnelle</strong> : elle ne se gagne pas plus
                qu'elle ne s'achète, et elle ne se reçoit de personne.
                Ce qui se consigne, c'est le geste : chaque temps donné
                y est déclaré par celui qui le donne, qualifié par ce
                qu'il a servi, et jamais échangé.
              </p>
              <p>
                Laissez vos coordonnées via le formulaire ci-dessous
                pour être prévenu de l'ouverture — et dites-nous ce
                que vous aimeriez y consigner en premier.
              </p>
            </>
          ),
        },
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

