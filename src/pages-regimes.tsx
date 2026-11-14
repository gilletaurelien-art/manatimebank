import { PageDoctrine } from "./doctrine";
import { baseUrl } from "./router";

// Les six régimes temporels — extraits d'App.tsx (14/11/2026, découpage 64 Ko).

const ACCENTS = ["accent-jaune", "accent-vert", "accent-orange", "accent-bleu"] as const;

const B = baseUrl();

export function PageRegimeInsomniaque() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 01"
      slug="regime-insomniaque-connecte"
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

export function PageRegimeSynchronise() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 02"
      slug="regime-synchronise-institutionnel"
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

export function PageRegimeFragmente() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 03"
      slug="regime-fragmente-marchand"
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

export function PageRegimeCare() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 04"
      slug="regime-care-massif"
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

export function PageRegimeSaisonnier() {
  return (
    <PageDoctrine
      nom="Typologie des régimes temporels — fiche 05"
      slug="regime-saisonnier"
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

export function PageRegimes() {
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

