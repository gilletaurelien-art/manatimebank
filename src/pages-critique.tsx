import { PageDoctrine } from "./doctrine";
import { baseUrl } from "./router";

// « Le vivant d'abord » et « L'heure pour monnaie » — les deux chapitres
// du dossier critique, validés par Aurélien le 14/11/2026.

const B = baseUrl();

const SEC_VIVANT: { label: string; corps: React.ReactNode }[] = [
  {
    label: "Pourquoi ce projet existe",
    corps: (
      <p>
        Ce projet ne le disait pas encore partout sur ce site, alors le
        voici : MANA TIME BANK existe parce que le monde capitaliste a
        organisé ses sociétés autour d'une mesure qui ne voit ni le
        temps, ni le soin, ni le vivant. Non pas autour du marché —
        autour de sa comptabilité. Le capitalisme n'est pas d'abord
        une morale ni un complot : c'est un instrument de mesure devenu
        système. On ne pilote bien que ce qu'on compte ; on ne protège
        que ce qu'on voit ; et le vivant, dans ces comptes-là, n'a pas
        de ligne.
      </p>
    ),
  },
  {
    label: "La première confiscation — le temps",
    corps: (
      <p>
        La comptabilité nationale, née dans les années 1930-1940, a posé
        sa frontière là où l'argent s'arrête : ce qui se vend se compte ;
        ce qui se donne s'évapore. Kuznets avait prévenu dès 1934 — le
        bien-être d'une nation ne se déduit pas du revenu national.
        L'avertissement est consigné, puis contourné, depuis
        quatre-vingt-dix ans (voir{" "}
        <a href={`${B}/temps-donne`}>
          « Pourquoi le temps donné n'est pas compté »
        </a>{" "}
        et{" "}
        <a href={`${B}/rendre-les-mots`}>« Rendre les mots »</a>).
      </p>
    ),
  },
  {
    label: "La deuxième confiscation — le soin",
    corps: (
      <p>
        Le care — ce travail massivement donné, massivement porté par
        les femmes, qui précède et soutient toute activité marchande —
        n'existe pas dans les comptes. Ses ravages sont documentés :
        le capitalisme, écrit Nancy Fraser, puise dans des capacités
        de soin qu'il ne comptabilise pas et ne restaure pas.{" "}
        <strong>Interprété d'un fait mesuré</strong> (la frontière de
        production du système de comptabilité nationale, 1953-2008).
        Joan Tronto l'a dit plus simplement : ce système privilégie
        les désirs aux besoins, et détruit les écosystèmes qui portent
        les uns comme les autres.
      </p>
    ),
  },
  {
    label: "La troisième confiscation — le vivant",
    corps: (
      <p>
        Traité en « externalité » : ce qui reste quand le compte est
        clos. Or l'équilibre même de la planète est une affaire de
        comptes : neuf limites planétaires ont été établies en 2009
        par vingt-huit scientifiques menés par Johan Rockström — le
        climat, la biodiversité, les sols, l'eau — et plusieurs sont
        déjà franchies. <strong>Mesuré</strong> (Rockström et al.,
        Nature, 2009). En 2019, l'IPBES documente l'effondrement des
        espèces : environ un million d'êtres vivants menacés.{" "}
        <strong>Mesuré</strong>. Une société qui compte son argent
        chaque trimestre et son vivant une fois par décennie n'a pas
        de biais technique : elle a une hiérarchie. Et cette
        hiérarchie, elle la tient de sa comptabilité.
      </p>
    ),
  },
  {
    label: "Les alternatives existent — et elles sont sérieuses",
    corps: (
      <>
        <p>
          La critique est ancienne ; les alternatives sont déjà là,
          datées, documentées, parfois déjà écrites dans des
          constitutions. Ce n'est pas l'imagination qui manque au
          monde — c'est l'instrument.
        </p>
        <p>
          <strong>Les institutions le reconnaissent</strong> : dès
          2009, la commission Stiglitz-Sen-Fitoussi, saisie par les
          chefs d'État, remet un rapport sur les limites du PIB et
          sur ce qu'il faut mesurer à la place — le bien-être, la
          qualité de vie, la soutenabilité. <strong>Mesuré</strong>{" "}
          (rapport officiel, 2009). Le monde le sait ; il ne l'a pas
          encore mis dans sa comptabilité.
        </p>
        <p>
          <strong>Le cadre existe</strong> : les limites planétaires
          en bas, les besoins humains en haut — Kate Raworth en a
          fait le beigne économique (2017) : prospérer dans l'espace
          entre les deux. <strong>Mesuré</strong>.
        </p>
        <p>
          <strong>Le droit existe</strong> : l'Équateur a inscrit dans
          sa constitution de 2008 que la nature — la Pachamama — a
          « le droit à l'existence, à la régénération, au maintien de
          ses cycles vitaux et à sa restauration » ; la Bolivie a voté
          la Loi des droits de la Terre-Mère en 2010, le Vivre-Bien
          en cadre de développement en 2012. <strong>Mesuré</strong>.
          Le vivant avant toute autre logique n'est pas une utopie :
          c'est déjà, quelque part, du droit constitutionnel.
        </p>
        <p>
          <strong>L'économiste existe</strong> : Tim Jackson a
          démontré en 2009, dans un rapport officiel britannique,
          qu'une prospérité sans croissance est pensable et même
          nécessaire ; la convivialité d'Illich, les communs
          d'Ostrom, l'esprit du don de Caillé et Godbout — des pans
          entiers de la pensée sociale ont préparé le terrain depuis
          des décennies. <strong>Mesuré</strong>.
        </p>
      </>
    ),
  },
  {
    label: "Compter ce qui maintient la vie",
    corps: (
      <p>
        L'alternative sérieuse ne promet pas un homme nouveau et
        n'abolit rien. Elle change ce que les sociétés comptent —
        parce que les sociétés s'organisent autour de leurs comptes,
        et jamais autour de leurs serments. Premier geste : la sonde
        consigne le temps donné — le care, l'entraide — au geste et à
        la veille. Ce que la comptabilité nationale ignore depuis sa
        naissance devient, pour un territoire, une statistique
        continue. Un quartier peut enfin lire ses heures de soin
        comme il lit sa population. On ne protège que ce qu'on voit.
      </p>
    ),
  },
  {
    label: "Faire du vivant le chapitre premier de l'indice",
    corps: (
      <p>
        Les six dimensions de l'indice MANA — temps humain,
        solidarité, écologie, régénération, équité temporelle,
        durabilité — ne sont pas des rubriques parmi d'autres :
        chaque temps donné est qualifié par ce qu'il a servi, et les
        chapitres du vivant y ont leur place, pas leur ghetto. Le
        « pourquoi » du don nourrit le portrait ; le portrait dit au
        territoire où va sa vie. La réserve de l'aidant — ce qui lui
        reste — est le modèle en miniature de ce que toutes les
        sociétés doivent apprendre à mesurer : ce qui reste quand
        tout le reste a été donné.
      </p>
    ),
  },
  {
    label: "Faire suivre le budget, jamais la récompense",
    corps: (
      <p>
        Le portrait lu chaque saison par le village, le quartier, la
        commune : les heures de care bondissent — le service public
        se cale avant la crise ; l'entraide s'effiloche d'un
        quartier — le lien redevient une affaire publique avant
        d'être une affaire de police. Le portrait informe, il ne
        rétribue jamais ; il ne classe jamais les personnes ; il rend
        visible ce qui portait tout le reste. Ce n'est pas une
        révolution à programmer : c'est un instrument à poser, une
        grammaire à tenir, et la longue preuve qu'on ne change pas
        les sociétés en criant plus fort — on les change en changeant
        ce qu'elles comptent.
      </p>
    ),
  },
  {
    label: "La même restitution",
    corps: (
      <p>
        Les constitutions de l'Équateur et de Bolivie ont écrit que
        le vivant vient avant ; aucune n'a encore donné aux
        territoires l'instrument de le vérifier. MANA TIME BANK est
        cet instrument : la comptabilité du vivant, à l'échelle où
        la vie se vit. Le monde capitaliste a confisqué les mots de
        la vie — crédit, dette, capital, intérêt : nous les rendons.
        Il a fait de même avec les comptes — le temps donné, le
        soin, le vivant : nous les comptons. C'est la même
        restitution, au même adversaire, avec la même arme que lui :
        les chiffres. Mais ceux-là, personne ne pourra les
        confisquer — parce qu'ils n'achètent rien, ne doivent rien,
        et appartiennent au territoire qui les a produits.
      </p>
    ),
  },
];

const SEC_HEURES: { label: string; corps: React.ReactNode }[] = [
  {
    label: "Une heure vaut une heure",
    corps: (
      <p>
        Une heure vaut une heure. Quels que soient les gestes : celle
        de la nurse, celle du plombier, celle de la voisine qui garde
        les enfants. Cette conviction, le monde la teste depuis près
        de deux siècles — et chaque essai enseigne la même chose,
        sans que la leçon soit jamais retenue.
      </p>
    ),
  },
  {
    label: "Les ancêtres — le travail contre le travail",
    corps: (
      <p>
        En 1827, à Cincinnati, Josiah Warren ouvre une épicerie qui
        dérange : les marchandises s'y paient en heures de travail —
        des notes « travail-contre-travail », l'idée héritée de
        Robert Owen. <strong>Mesuré</strong> (le Cincinnati Time
        Store, 1827-1830). L'expérience ferme ; mais l'essentiel est
        déjà là : la première tentative d'économie du temps est née
        non pour échanger des biens, mais pour rendre le travail
        visible à sa juste mesure. L'idée d'Owen est morte d'une
        loi : les Truck Acts britanniques (1831-1887) exigent que
        les salariés soient payés en monnaie commune.{" "}
        <strong>Mesuré</strong>. Première leçon, vieille de deux
        siècles : dès que le temps ressemble à un salaire, l'État
        s'en mêle.
      </p>
    ),
  },
  {
    label: "Les cercles — l'heure contre l'heure",
    corps: (
      <>
        <p>
          En 1980, l'Américain Edgar Cahn invente les time dollars :
          une heure d'aide donnée vaut un crédit, dépensable auprès
          de n'importe quel membre — une heure égale une heure,
          quels que soient les gestes. <strong>Mesuré</strong>{" "}
          (Time Dollars, 1986). Les systèmes d'échange locaux
          essaient la même piste partout : LETS au Canada (1983),
          SEL en France, Zeitbanken en Allemagne, bancos de tiempo
          en Espagne. Au Québec, l'Accorderie (2002) compte plus de
          113 000 échanges et 290 000 heures échangées en vingt
          ans. <strong>Mesuré</strong>.
        </p>
        <p>
          Au Japon, en 1995, la fondation Sawayaka invente le fureai
          kippu — les « tickets de relation cordiale » : des heures
          d'aide aux personnes âgées, épargnables et transmissibles
          aux proches. Je garde votre grand-mère aujourd'hui ;
          quelqu'un gardera la mienne demain.{" "}
          <strong>Mesuré</strong>. C'est la plus belle des
          tentatives — et la plus proche du piège.
        </p>
      </>
    ),
  },
  {
    label: "Le compte des dérives",
    corps: (
      <>
        <p>
          Chacun de ces systèmes a compris qu'il fallait compter le
          temps donné. Et chacun a cru qu'il fallait le faire
          circuler pour le rendre réel. C'est là que tout se gâte :
          le crédit gagné se dépense — le don redevient une
          transaction, avec ses riches en heures et ses
          débiteurs ; l'heure devient équivalent — tout doit
          s'échanger contre tout, et le don sans contrepartie
          devient une anomalie du système ; le temps s'épargne —
          la dette douce que la société finit par devoir ; le don
          classe — comme dans le potlatch, où donner conférait le
          statut.
        </p>
        <p>
          <strong>Interprété</strong> : la circulation n'est pas un
          accident de ces systèmes, c'est leur hypothèse. Ils ont
          voulu une économie du temps — c'est-à-dire, malgré eux, un
          marché du temps, en mieux. Le marché est revenu par la
          porte qu'on lui avait ouverte pour lui voler son nom.
        </p>
      </>
    ),
  },
  {
    label: "Le tournant — le temps qui ouvre un accès",
    corps: (
      <p>
        La variante qui grandit aujourd'hui fait autre chose : en
        2008, au pays de Galles, les time credits (Spice, devenue
        Tempo) se gagnent en bénévolat — une heure, un crédit — et
        se dépensent auprès d'institutions : cinémas, piscines,
        musées, en partenariat avec les collectivités.{" "}
        <strong>Mesuré</strong>. Ce n'est plus un échange entre
        membres : c'est un pont entre le don et l'accès public. Le
        temps donné n'y circule pas — il ouvre. C'est le seul de
        ces systèmes qui s'étende ; <strong>interprété</strong> :
        parce qu'il a cessé de faire circuler une monnaie.
      </p>
    ),
  },
  {
    label: "Ce que MANA TIME BANK retient — et refuse",
    corps: (
      <>
        <p>
          Tout le monde avait raison sur l'étalon : une heure vaut
          une heure, quels que soient les gestes — l'intuition a
          survécu à Owen, Warren, Cahn, l'Accorderie, Tempo. C'est
          la seule unité parfaitement égale : chacun la reçoit au
          même rythme, et aucun geste n'y perd sa dignité.
        </p>
        <p>
          Et tout le monde s'est trompé sur le reste : le temps
          donné n'a pas besoin de circuler pour exister. Il a
          besoin d'être vu. C'est la séparation que MANA TIME BANK
          opère, radicalement, pour la première fois : on consigne,
          on qualifie — pourquoi ce temps a été donné —, on
          agrège, on publie. <strong>On n'échange jamais.</strong>{" "}
          De Warren et Cahn, la consignation du travail invisible,
          pas la dépense du crédit ; des LETS et des SEL, le
          cercle, l'échelle du lien, pas l'équivalence ; du fureai
          kippu, le care au centre, pas l'épargne ; de Tempo,
          reconnaître jamais rétribuer ; du potlatch, la force
          sociale du don, pas le palmarès — même en pensée.
        </p>
      </>
    ),
  },
  {
    label: "Un miroir, pas un marché",
    corps: (
      <p>
        Dans un SEL, on échange. Avec MANA TIME BANK, on témoigne.
        Le village, le quartier, le territoire n'obtiennent pas un
        marché : ils obtiennent un miroir — la première statistique
        au monde de leur propre temps donné. Une heure vaut une
        heure. Mais elle ne s'achète pas, ne se vend pas, ne se
        doit pas : elle se donne, et elle se consigne. Le détail
        des essais qui ont précédé le nôtre — deux siècles
        d'économies du temps — poursuit sa route ailleurs ; la suite
        —{" "}
        <a href={`${B}/ce-qui-vient`}>pourquoi ils ont échoué, pourquoi
        ils sont deux, et ce qui vient</a>
        {" "}
        — achève le dossier.
      </p>
    ),
  },
];

const SEC_CE_QUI_VIENT: { label: string; corps: React.ReactNode }[] = [
  {
    label: "Trois questions",
    corps: (
      <p>
        Trois questions, auxquelles ce dossier devait répondre avant de
        demander quoi que ce soit à quiconque. Pourquoi les banques de
        temps ont-elles échoué ? Pourquoi le monde n'a-t-il plus que
        deux modèles ? Et pourquoi MANA TIME BANK, précisément,
        serait-il pertinent ?
      </p>
    ),
  },
  {
    label: "Pourquoi les banques de temps ont échoué",
    corps: (
      <>
        <p>
          Elles n'ont pas échoué sur la consignation — elle a toujours
          marché. Elles ont échoué sur la circulation. Six causes,
          toutes documentées :
        </p>
        <p>
          <strong>1. Le piège de la réciprocité.</strong> Le crédit gagné
          doit être dépensé : le système redevient un marché, avec ses
          riches en heures et ses débiteurs. Le don le plus beau —
          celui qui ne veut rien en retour — devient une anomalie
          comptable.
        </p>
        <p>
          <strong>2. Le problème de l'appariement.</strong> Une banque de
          temps a besoin d'une économie de services équilibrée ; les
          offres réelles sont déséquilibrées. Les crédits s'accumulent
          chez ceux qui donnent le plus et ne trouvent pas à dépenser.
          La monnaie meurt de sa propre vertu.
        </p>
        <p>
          <strong>3. Le coût du coordinateur.</strong> Apparier besoins
          et offres demande un animateur — et la subvention part. Les
          études les décrivent comme des organisations civiques
          transitoires : elles vivent le temps de leur financement,
          puis s'éteignent. Ithaca HOURS est morte avec son fondateur.
        </p>
        <p>
          <strong>4. Le no man's land fiscal.</strong> Des crédits
          d'heures qui grossissent ressemblent à un revenu :
          prestations, impôts, contrôles. L'État s'en mêle — depuis les
          Truck Acts de 1831, c'est une constante. Elles restent donc
          petites par construction.
        </p>
        <p>
          <strong>5. L'homophilie sociale.</strong> Les études de
          terrain, dès celle de Gill Seyfang sur la banque de Gorbals
          (Glasgow, 2004), montrent une adhésion concentrée chez les
          femmes éduquées d'âge moyen. Celles et ceux qui en auraient
          le plus besoin n'y entrent pas.
        </p>
        <p>
          <strong>6. La cause profonde : une monnaie sans rive.</strong>{" "}
          Une monnaie sans État n'a pas de plancher de demande. On paie
          ses impôts dans la monnaie nationale parce qu'on doit ; rien
          n'est payable en heures, donc rien ne force personne à les
          vouloir. Une monnaie du temps est un pont sans rive d'en
          face. <strong>Mesuré</strong> (études citées en bas de page) ;
          la lecture commune des six causes : <strong>interprété</strong>.
        </p>
      </>
    ),
  },
  {
    label: "Pourquoi ils sont deux",
    corps: (
      <>
        <p>
          Une précision d'abord : capitalisme et communisme ne sont pas
          les seuls modèles vivants — la social-démocratie nordique,
          les communs, le buen vivir, les économies informelles
          existent. Ce sont les deux seuls systèmes de comptabilité à
          l'échelle planétaire. Et c'est là le point.
        </p>
        <p>
          Les deux sont nés de la même matrice temporelle : la
          discipline horlogère de l'usine, décrite par E.P. Thompson en
          1967 — le travail aux tâches remplacé par le travail à
          l'horloge, la sirène comme agent et symbole de l'hégémonie
          d'un temps unique. Ils sont deux réponses à la même question
          — qui possède l'usine, qui planifie la production — posée
          dans la même mesure : la production, la croissance, le stock
          d'heures extractibles. L'un distribue par le capital, l'autre
          par le plan ; les deux subordonnent le temps à la production ;
          aucun ne compte le soin ni le vivant.
        </p>
        <p>
          Le communisme s'est effondré en 1989-91, en partie sur son
          échec comptable : le plan ne voyait pas mieux que le marché.
          Le capitalisme survit en dévorant ses critiques : il puise
          dans des capacités de soin qu'il ne comptabilise pas et ne
          restaure pas. Les troisièmes voies ont été détruites (le
          fascisme, militairement, en 1945), encloses (les communs),
          absorbées (la social-démocratie, devenue l'État providence du
          capitalisme puis démontée dans les années 1980), ou
          marginalisées (le buen vivir : écrit dans des constitutions,
          absent des économies).
        </p>
        <p>
          Le duopole n'est pas un duopole d'idées. C'est un{" "}
          <strong>duopole de mesures</strong>. Les deux comptent
          pareil ; ils ne se disputent que l'horloge.
        </p>
      </>
    ),
  },
  {
    label: "L'alternative — changer ce que les sociétés comptent",
    corps: (
      <>
        <p>
          Capitalisme et communisme se battent pour savoir à qui
          appartient l'horloge. L'alternative pose la question qu'aucun
          des deux ne pose : <strong>pour qui sonne-t-elle ?</strong> Et
          elle ne s'installe pas par décret : une société s'organise
          autour de ses comptes, jamais autour de ses serments.
        </p>
        <p>
          Donc : <strong>un instrument, pas un régime</strong> — la sonde
          qui consigne le temps donné, ce qu'aucun des deux systèmes n'a
          jamais compté. <strong>Un territoire, pas une
          internationale</strong> — le portrait lu chaque saison, la
          seule échelle où le vivant se vit, le budget qui suit la
          mesure, la mesure qui ne récompense jamais. <strong>Une
          grammaire, pas une utopie</strong> — pas de transfert, pas de
          dette, pas de palmarès : aucun des six échecs des banques de
          temps, aucun des deux péchés du duopole.
        </p>
        <p>
          Le communisme a promis de changer les rapports de propriété
          sans changer la mesure ; le capitalisme a promis que la mesure
          changerait les rapports toute seule. L'alternative commence
          par changer la mesure — en montrant, chiffres à l'appui, ce
          que le vivant donne, ce qui lui reste, et ce qui lui manque.
          On ne descend pas du capitalisme par la colère : on en descend
          par la comptabilité.
        </p>
      </>
    ),
  },
  {
    label: "Pourquoi MANA TIME BANK, précisément",
    corps: (
      <>
        <p>
          La pertinence se démontre contre les échecs connus — chacun
          des six a sa réponse, gravée dans le canon et non dans la
          promesse :
        </p>
        <p>
          <strong>1.</strong> Pas de circulation, pas de débiteurs : le
          don est consigné, jamais dépensé — le piège de la réciprocité
          ne peut pas se refermer (interdit I1, test automatique).{" "}
          <strong>2.</strong> Pas d'appariement à résoudre : on ne
          consomme pas de services, on témoigne de gestes — il n'y a
          pas de marché des offres à équilibrer. <strong>3.</strong> Pas
          de coordinateur à financer : la consignation au geste est assez
          légère pour être tenue par les cercles eux-mêmes ; la sonde
          est un instrument continu, pas une association subventionnée.
          <strong>4.</strong> Hors de la ligne de feu fiscale : rien ne
          circule, rien ne se paie, la donnée n'est pas un revenu —
          l'État n'a rien à prélever sur une chronique.{" "}
          <strong>5.</strong> Contre l'homophilie, le territoire : les
          cercles partent des liens réels, et l'étude pilote porte
          l'instrument auprès de collectivités. <strong>6.</strong> Pas
          de plancher de demande à trouver : MANA n'est pas une monnaie
          — il n'a pas besoin d'être voulu pour mesurer. Un étalon n'a
          pas de marché : c'est un langage.
        </p>
        <p>
          Et contre le duopole, la place stratégique : le compte du
          temps donné est le seul terrain que ni le capital ni le plan
          n'occuperont jamais — <strong>trop pauvre pour la
          propriété</strong> (on ne privatise pas la garde d'une
          mère), <strong>trop horizontal pour le plan</strong> (on ne
          décrète pas la solidarité). C'est le commun que ni l'enclosure
          ni le plan ne peuvent avaler. Quant à la fenêtre : depuis
          2009, le monde demande officiellement quoi compter à la place
          du PIB, et personne n'a encore fait de la réponse un
          instrument territorial continu. La place est vide ; elle ne
          le restera pas.
        </p>
      </>
    ),
  },
  {
    label: "L'honnêteté de la pertinence",
    corps: (
      <p>
        Tout ceci est un argument, pas une preuve. <strong>Hypothèse</strong> —
        notre lecture, assumée comme telle : la pertinence de
        l'instrument se démontrera dans le pilote, ou ne se démontrera
        pas ; l'étude pilote est là pour ça. Ce qui est déjà prouvé,
        c'est l'échec des autres voies — deux siècles d'essais le
        disent — et le vide de la mesure. MANA TIME BANK occupe ce vide
        comme on pose un instrument : à plat, versionné, critiquable.
        Le monde n'a pas besoin d'une foi de plus. Il a besoin d'un
        compte de plus — le bon.
      </p>
    ),
  },
];

export function PageLeVivantDabord() {
  return (
    <PageDoctrine
      nom="Le vivant d'abord"
      slug="le-vivant-d-abord"
      sections={[...SEC_VIVANT]}
    />
  );
}

export function PageEconomiesDuTemps() {
  return (
    <PageDoctrine
      nom="L'heure pour monnaie"
      slug="economies-du-temps"
      sections={[...SEC_HEURES]}
    />
  );
}

export function PageCeQuiVient() {
  return (
    <PageDoctrine
      nom="Ce qui vient"
      slug="ce-qui-vient"
      sections={[...SEC_CE_QUI_VIENT]}
    />
  );
}
