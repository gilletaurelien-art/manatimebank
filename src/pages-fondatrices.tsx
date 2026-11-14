import { PageDoctrine } from "./doctrine";

// Texte fondateur « Rendre les mots au temps d'une vie » (14/11/2026)
// et chapitre « Pourquoi le temps donné n'est pas compté » (14/11/2026).
// Pages longues extraites du projet de fusion dans App.tsx (découpage 64 Ko).

const SEC_RENDRE_LES_MOTS: { label: string; corps: React.ReactNode }[] = [
        {
          label: "Les mots confisqués",
          corps: (
            <p>
              Les mots que ce monde utilise pour parler d'argent n'ont
              jamais été des mots d'argent. Ils ont été pris à la vie, un à
              un, il y a des siècles — et ils n'ont jamais été rendus.
            </p>
          ),
        },
        {
          label: "Crédit, dette, capital",
          corps: (
            <p>
              <strong>Crédit</strong> vient de <em>credere</em> : croire,
              confier. Le mot qui disait la confiance entre les êtres a été
              donné aux banques. <strong>Dette</strong> et{" "}
              <strong>devoir</strong> ont la même racine — <em>debere</em>.
              C'est pour cela que la dette écrase : elle a détourné le
              devoir. On ne s'acquitte pas d'une dette comme on s'acquitte
              d'un devoir ; on la rembourse, en tremblant.{" "}
              <strong>Capital</strong> vient de <em>caput</em> : la tête. Le
              mot qui disait la vie qu'on a dans la tête a été donné aux
              choses.
            </p>
          ),
        },
        {
          label: "Intérêt, salaire, monnaie",
          corps: (
            <p>
              <strong>Intérêt</strong> vient d'<em>interesse</em> : être
              entre, être concerné, faire partie de ce qui arrive. Le mot
              qui disait l'attention portée au monde a été donné aux taux.{" "}
              <strong>Salaire</strong> vient du sel — <em>salarium</em> —,
              la ration du soldat romain : la vie entière convertie en
              provision. Et <strong>monnaie</strong> vient de{" "}
              <em>Moneta</em> : Junon l'Avertisseuse, la déesse qui
              prévenait Rome — <em>monere</em>, avertir. La monnaie porte
              le nom d'une divinité qui criait gare aux Romains. On peut se
              demander ce qu'elle voulait leur dire.
            </p>
          ),
        },
        {
          label: "La confiscation",
          corps: (
            <p>
              Chacun de ces mots était un mot de la vie avant d'être un
              mot du marché. La confiscation n'est pas une métaphore :
              quand un mot change de sens, ce qu'il nommait cesse d'être
              vu. Le monde a gardé le vocabulaire et perdu l'objet. Il ne
              reste plus personne, dans les comptes des nations, pour
              dire la confiance, le devoir, la tête, l'intérêt porté à
              autrui. Il ne reste que des soldes.
            </p>
          ),
        },
        {
          label: "Ce que ce monde compte, et ce qu'il ne compte pas",
          corps: (
            <>
              <p>
                Une vie humaine dure environ deux milliards et demi de
                secondes. <strong>Mesuré</strong> (arithmétique : ~80 ans ×
                86 400 secondes). Pas une seule de ces secondes n'existe
                dans le produit intérieur brut si elle a été donnée : la
                deuxième heure de garde d'un parent malade, l'après-midi
                d'un chemin entretenu, la nuit d'un enfant malade tenue
                par quelqu'un qui ne dormira pas. Les statistiques suivent
                les transactions ; ces secondes-là n'ont pas de facture.
                Elles n'ont donc pas de ligne. <strong>Mesuré</strong> : 72
                pays au monde ont mesuré une fois le temps non rémunéré, 27
                au moins deux fois — le monde compte sa monnaie chaque
                trimestre dans près de 200 pays.
              </p>
              <p>
                Ce n'est pas un oubli. C'est une décision, prise quand
                les comptabilités nationales sont nées, jamais révisée
                (voir « Pourquoi le temps donné n'est pas compté »). Et le
                plus invisible de l'invisible n'est même pas le care :
                c'est l'entraide — le coup de main, la garde entre
                voisins, le secours qui ne dit pas son nom. Le care, au
                moins, a un indicateur onusien. L'entraide n'a même pas un
                aveu.
              </p>
            </>
          ),
        },
        {
          label: "Rendre les mots",
          corps: (
            <p>
              MANA TIME BANK rend à chaque mot confisqué son objet vivant.{" "}
              <strong>Le crédit devient ce qu'il a toujours dit : la
              croyance.</strong> On ne vous accorde aucun crédit ici. On
              vous en accorde un dès le premier jour : celui d'être cru
              quand vous dites ce que vous avez donné.{" "}
              <strong>La dette devient ce qu'elle a toujours dit : le
              devoir.</strong> Et le devoir, ici, ne se rembourse pas — il
              s'honore ou il s'assume, il ne s'acquitte jamais en
              secondes. Personne ne peut finir sa vie à découvert de temps.
              Celui qui reçoit ne doit rien : la veille consignée est un
              fait, pas une obligation.
            </p>
          ),
        },
        {
          label: "Capital, intérêt, dépôt",
          corps: (
            <p>
              <strong>Le capital devient ce qu'il a toujours dit : la
              tête, la vie.</strong> Deux milliards et demi de secondes :
              c'est le seul capital que chacun détient en naissant, le seul
              qui ne fructifie pas, le seul dont on ne peut hériter et
              qu'on ne peut léguer. Il ne se place pas. Il se vit.{" "}
              <strong>L'intérêt devient ce qu'il a toujours dit : être
              concerné.</strong> Aucun taux. Ce qui s'accumule quand on
              s'occupe des autres n'est pas un intérêt composé — c'est le
              monde qui tient debout. <strong>Le dépôt devient ce qu'il a
              toujours dit : ce qu'on confie.</strong> La banque de
              données : les faits de temps donné y sont déposés, pas
              investis. Ils ne rapportent rien, ne circulent pas comme
              valeur, ne s'échangent jamais. Ils n'ont jamais cessé
              d'appartenir à ceux qui les ont vécus.
            </p>
          ),
        },
        {
          label: "Le temps d'une vie, rendu au sens",
          corps: (
            <>
              <p>
                Chaque jour, quatre-vingt-six mille quatre cents secondes
                sont distribuées à chaque être humain — du billionnaire au
                sans-abri, la seule ressource parfaitement partagée du
                monde, remise à zéro chaque nuit. Aucune banque ne
                distribue cela. Aucun régime politique ne l'a promis. C'est
                la seule fortune universelle, et elle ne se garde pas : ce
                qui n'est pas vécu s'éteint à minuit.
              </p>
              <p>
                Ce monde vous demande combien vous valez — et il répond en
                soldant. Ce projet pose l'autre question, celle qu'aucun
                grand courant de pensée n'a placée au centre :{" "}
                <strong>qu'as-tu donné de ta vie — et qu'en reste-t-il
                pour toi ?</strong>
              </p>
              <p>
                La charge : ce que vous avez donné, consigné au geste et à
                la veille, dans le cercle qui est le vôtre — sans jamais
                créer de dette envers quiconque. La demande : ce que votre
                territoire demande de care, lisible dans les données
                ouvertes. La réserve : ce qu'il vous reste — la mesure que
                personne au monde ne publie, et celle qui s'effondre
                toujours avant les crises.
              </p>
              <p>
                Rien de tout cela ne se solde. Rien ne se compare. Rien ne
                se transmet comme valeur. Le compte ne se clôt jamais,
                parce qu'il n'a pas de clôture : une vie n'est pas un
                bilan, c'est une chronique — des secondes, des faits, des
                visages, dans l'ordre du temps.
              </p>
              <p>
                Le monde a gardé les mots et perdu les objets. Nous
                rendons les objets. Les mots suivront.
              </p>
            </>
          ),
        },
        {
          label: "La banque où l'on ne retire rien",
          corps: (
            <p>
              MANA TIME BANK — la banque où l'on ne retire rien, parce que
              tout ce qui y est déposé ne nous a jamais appartenu de la
              même façon : <em>ce qui est donné n'appartient pas au
              compte. Il appartient à la vie.</em>
            </p>
          ),
        },
];

const SEC_TEMPS_DONNE: { label: string; corps: React.ReactNode }[] = [
        {
          label: "La règle des états",
          corps: (
            <p>
              Chaque Observation se cite « Méthode MANA, v0.2, date ».
              Chaque fait porte son état : <strong>mesuré</strong>{" "}
              (source publique, datée), <strong>interprété</strong>{" "}
              (lecture d'un mesuré), <strong>hypothèse</strong> (piste non
              tranchée), <strong>invisible</strong> (aucune base ne le
              voit).
            </p>
          ),
        },
        {
          label: "L'aveu",
          corps: (
            <p>
              En 2015, les Nations unies inscrivent dans leurs objectifs
              de développement durable une phrase qui est un aveu :
              « Reconnaître et valoriser les soins et le travail
              domestiques non rémunérés » (objectif 5.4). L'indicateur
              chargé de la mesure — le 5.4.1, la part du temps consacré aux
              soins et au travail domestique non rémunérés — repose sur
              les enquêtes emploi du temps. <strong>Mesuré</strong> : 72
              pays en ont conduit une, 27 au moins deux. Le monde compte sa
              monnaie chaque trimestre dans près de 200 pays ; il ne mesure
              le temps de la vie que par de rares enquêtes, espacées d'une
              décennie.
            </p>
          ),
        },
        {
          label: "L'aveu a un précédent et un corps",
          corps: (
            <p>
              L'aveu a un précédent : la moitié de l'humanité déclare
              n'avoir pas eu le temps de faire ce qui comptait pour elle
              hier. <strong>Mesuré</strong> (Gallup World Poll). L'aveu a
              aussi un corps : 745 000 décès par an sont attribuables aux
              longues heures de travail. <strong>Mesuré</strong> (OMS/OIT,
              estimations conjointes). Mais pourquoi ce trou ? La réponse
              n'est ni la paresse ni l'impossibilité technique. C'est une
              décision, prise au moment où le monde a choisi ses
              instruments de mesure — et jamais révisée depuis.
            </p>
          ),
        },
        {
          label: "La décision",
          corps: (
            <p>
              Les comptabilités nationales naissent dans les années
              1930-1940, au moment même où les États ont besoin de piloter
              la production de guerre puis la reconstruction. Elles
              mesurent ce qui passe par le marché : ce qui est vendu, ce
              qui est payé. La « frontière de production » du système de
              comptabilité nationale — le standard mondial, révisé à
              plusieurs reprises mais jamais sur ce point — exclut de droit
              les services non rémunérés rendus au sein des ménages.{" "}
              <strong>Mesuré</strong> (système de comptabilité nationale,
              Nations unies, versions 1953 à 2008).
            </p>
          ),
        },
        {
          label: "La frontière",
          corps: (
            <p>
              La frontière a une exception qui dit tout : les services
              domestiques produits par du personnel rémunéré, eux, comptent
              dans le produit intérieur brut. La même heure de soin,
              donnée, est invisible ; achetée, elle crée de la richesse.
              L'outil de pilotage des États ne voit le temps donné aux
              autres qu'au moment où il cesse d'être donné.
            </p>
          ),
        },
        {
          label: "L'avertissement consigné",
          corps: (
            <p>
              Celui qui a posé la première pierre de ces comptes avait
              déjà prévenu : « Le bien-être d'une nation peut difficilement
              être déduit de la mesure du revenu national. »{" "}
              <strong>Mesuré</strong> (Simon Kuznets, rapport au Congrès
              américain, 1934). L'avertissement a été consigné — puis
              laissé de côté, parce qu'il fallait bien choisir une
              frontière, et que l'argent en fournissait une toute tracée :
              les statistiques suivent les transactions. Ce qui n'a pas de
              prix n'a pas de facture ; ce qui n'a pas de facture n'a pas de
              ligne. L'exclusion a été nommée en 1988 : si les femmes
              comptaient, le travail non rémunéré — massivement porté par
              elles — est la grande invisible des comptes qui gouvernent.{" "}
              <strong>Interprété</strong> (Marilyn Waring, <em>If Women
              Counted</em>, 1988).
            </p>
          ),
        },
        {
          label: "Le compte qu'on ne rend jamais",
          corps: (
            <p>
              La France est l'un des pays qui mesurent le mieux cette part
              invisible : son enquête emploi du temps (1985-86, 1998-99,
              2009-10) a chiffré le travail domestique non rémunéré à{" "}
              <strong>60 milliards d'heures en 2010</strong> — plus d'heures
              que l'ensemble du travail salarié du pays.{" "}
              <strong>Mesuré</strong> (INSEE, Insee Première n° 1423,
              2012). Mais ce chiffre vit en compte satellite, à côté du
              PIB, jamais dedans : il éclaire, il ne pèse pas. Une réforme
              de l'outil de pilotage ? Non — un annexe. Et l'enquête a lieu
              une fois par décennie. Le travail payé est compté chaque
              trimestre ; le temps donné, tous les dix ans, s'il y a une
              enquête — et seulement dans 72 pays.
            </p>
          ),
        },
        {
          label: "Le trou en dessous du trou",
          corps: (
            <>
              <p>
                Le care domestique, au moins, a son indicateur onusien.{" "}
                <strong>L'entraide informelle n'a même pas ça.</strong> Le
                coup de main au voisin, la garde des enfants entre
                familles, l'entretien bénévole d'un chemin,
                l'accompagnement d'une personne âgée par sa voisine :
                aucune statistique mondiale ne les compte, aucun outil de
                pilotage ne les voit. Les enquêtes emploi du temps les
                captent en partie, quand les nomenclatures le prévoient —
                et la nomenclature est récente. <strong>Interprété</strong>{" "}
                (classification internationale ICATUS 2016) ; l'ampleur
                réelle de l'entraide informelle dans le monde :{" "}
                <strong>invisible</strong>.
              </p>
              <p>
                C'est le trou en dessous du trou : le care non rémunéré
                est l'invisible reconnu ; l'entraide est l'invisible sans
                même un indicateur pour reconnaître son invisibilité.
              </p>
              <p>
                Ce non-dit a des conséquences. Des services publics se
                calibrent sans voir la charge invisible qui les précède :
                quand l'aidante lâche, le système découvre le pilier qu'elle
                était. Le régime du care massif — le plus massif du monde
                et le moins compté — imprègne tous les autres régimes
                temporels sans être assuré par aucun (voir la fiche 04). Le
                corps paie ce que les comptes ne voient pas.
              </p>
            </>
          ),
        },
        {
          label: "Ce que MANAtimebank fait de ce constat",
          corps: (
            <p>
              Le monde a un instrument de mesure du temps donné : l'enquête
              emploi du temps. Elle est exacte, savante — et rare,
              coûteuse, nationale, rétrospective. Elle photographie une
              fois par décennie ce qui se vit chaque jour. MANAtimebank
              ajoute l'autre instrument : <strong>compter le temps donné
              au geste, là et au moment où il est donné</strong> —
              continu, territorial, léger. Non pour concurrencer l'enquête
              : pour la précéder, la prolonger, lui montrer ce qu'elle ne
              peut pas voir entre deux passages.
            </p>
          ),
        },
        {
          label: "Ce que la mesure fait",
          corps: (
            <>
              <p>
                Chaque temps donné dans l'écosystème MANA — l'heure
                d'entretien d'un chemin, l'accompagnement, le coup de
                main — est consigné au geste, par la personne qui le
                donne, dans le cercle qui est le sien.
              </p>
              <p>
                Le cercle seul voit les contributions de ses membres. Le
                territoire ne voit jamais les personnes — il ne voit que
                des agrégats : combien d'heures données, pour quels
                régimes, où, quand. Le portrait temporel du territoire
                s'enrichit de ce qu'aucune base ne mesure.
              </p>
            </>
          ),
        },
        {
          label: "Ce que la mesure ne fait jamais",
          corps: (
            <>
              <p>
                Elle ne doit rien. Compter n'est pas échanger : aucun
                crédit, aucun équilibre, aucune réciprocité exigée. Une
                heure donnée n'ouvre aucun droit à une heure reçue — sinon
                ce n'est plus du temps donné, c'est une transaction.
              </p>
              <p>
                Elle ne classe pas les personnes. Pas de score de
                générosité, pas de palmarès, pas de badge : la
                reconnaissance vit dans le cercle, la comparaison n'existe
                pas.
              </p>
              <p>
                Elle ne se prétend pas représentative. Les instruments
                déclaratifs ont leurs biais — auto-sélection,
                sous-déclaration, enthousiasme des premiers jours. Ces
                biais sont déclarés, documentés, affichés. La mesure
                MANAtimebank est un faisceau complémentaire des
                statistiques publiques, jamais leur remplaçant.
              </p>
              <p>
                La donnée appartient au territoire qui la produit. Elle ne
                se vend pas, ne se revend pas, ne qualifie personne.
              </p>
              <p>
                Le temps donné est la plus grande richesse non comptée du
                monde. On ne peut pas piloter ce qu'on ne voit pas ; on ne
                peut pas reconnaître ce qu'on ne compte pas. MANAtimebank
                compte — pour reconnaître, jamais pour exiger.
              </p>
            </>
          ),
        },
];

export function PageRendreLesMots() {
  return (
    <PageDoctrine
      nom="Rendre les mots"
      slug="rendre-les-mots"
      sections={[...SEC_RENDRE_LES_MOTS]}
    />
  );
}

export function PageTempsDonne() {
  return (
    <PageDoctrine
      nom="Pourquoi le temps donné n'est pas compté"
      slug="temps-donne"
      sections={[...SEC_TEMPS_DONNE]}
    />
  );
}
