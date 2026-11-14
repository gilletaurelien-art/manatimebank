import { PageDoctrine } from "./doctrine";
import { baseUrl } from "./router";

// « Le tribunal des fantômes » — annexe légère, hors canon doctrinal
// (section sourires). Les grands morts comparaissent volontairement ;
// aucune sentence n'est exécutoire. Validé par Aurélien le 14/11/2026.

const B = baseUrl();

const SEC_TRIBUNAL: { label: string; corps: React.ReactNode }[] = [
  {
    label: "Les quatre clauses soumises au tribunal",
    corps: (
      <>
        <p>
          MANA TIME BANK convoque les grands morts et leur soumet les
          quatre clauses du canon, telles qu'elles furent tranchées le
          14 novembre 2026 :{" "}
          <strong>
            libres les êtres, véridique le registre, mortel le système,
            éternelle la lumière émise
          </strong>
          . Chaque fantôme a comparu volontairement. Aucune sentence
          n'est exécutoire. Sourires autorisés.
        </p>
        <p>
          La physique soumise au tribunal : le donneur est une étoile à
          noyau fini (~2,4 milliards de secondes) ; chaque seconde
          donnée est brûlée, comme le soleil brûle son noyau pour
          émettre de la lumière. Au geste, deux traces sont frappées —
          la combustion du donneur, la lumière reçue du receveur — et
          rien ne circule jamais : la seconde donnée n'a pas de cours.
        </p>
      </>
    ),
  },
  {
    label: "Première session — les contemporains et les sages",
    corps: (
      <>
        <p>
          <strong>Marx (1818-1883) — « Approuvé à moitié, rejeté aux trois
          quarts ».</strong> Approuve le temps de travail comme unité (il
          l'a proposé lui-même, Critique du programme de Gotha, 1875) et
          le dé-fétichisme. Rejette : ses certificats servaient à
          consommer, les nôtres ne servent à rien. « Un miroir sans
          mains. Vous consignez le care au lieu d'exproprier le
          capital. » Applaudit le compteur, vandalise l'interdit de s'en
          servir.
        </p>
        <p>
          <strong>Hayek (1899-1992) — « Horreur coordonnée ».</strong> «
          Un registre public qui agrège les dons ? Une donnée de plan.
          Heureusement qu'il ne sert à rien. » Approuve le refus du
          coordinateur, déteste le miroir public, repart en demandant le
          prix du café. Allergique mais poli.
        </p>
        <p>
          <strong>Bouddha (~Ve s. av. J.-C.) — « Déjà dit ».</strong> « Le
          don sans attaché au fruit — karma yoga. Vous avez mis 2 500 ans
          et un dépôt Git à redécouvrir la gratuité. Le noyau fini,
          c'est anitya, l'impermanence, avec un meilleur design. »
          Approuve, suggère un stage.
        </p>
        <p>
          <strong>Jésus de Nazareth (~-4/~33) — « Approuvé, avec un
          plaidoyer ».</strong> Réclame un mode privé (« que ta main
          gauche ne sache pas ce que fait ta main droite »). Contre-argument : le miroir public est une statistique, pas un
          palmarès ; personne n'y est nommé. Il concède le point, inquiet.
          Premier donateur canonique : une vie brûlée en 33 ans,
          record de vitesse.
        </p>
        <p>
          <strong>Gandhi (1869-1948) — « Approuvé, et il file un
          tissu ».</strong> « Sarvodaya, le soulèvement de tous, se
          construit par les villages. Votre miroir est un swaraj
          statistique. » Approuve la mortalité assumée (« tout empire
          tombe ; prévoir la sienne, c'est sain ») et réclame un
          compteur de filage.
        </p>
        <p>
          <strong>Robespierre (1758-1794) — « Suspicious ».</strong> «
          Une vertu mesurée, c'est une vertu surveillée. Votre registre
          véridique me plaît plus que je ne voudrais l'admettre. Mais
          vous ne punissez pas les faux rayons ? La Vertu sans
          Terreur… » On lui explique : le mensonge est libre, et
          visible. Il note « idée douce, faiblement exécutoire ». Refusé
          au motif qu'il veut un tribunal ; on lui fait remarquer qu'il
          est dans le nôtre. Il n'a pas ri.
        </p>
        <p>
          <strong>Adam Smith (1723-1790) — « Perdu en route vers la
          boulangerie ».</strong> « Le boulanger compte, c'est
          fondamental. Mais la bienveillance désintéressée ? Page 1 de
          la Théorie des sentiments moraux (1759), avant que tout le
          monde ne retienne la main invisible. Merci de la réédition. »
          Deux livres, un seul lu — il est habitué.
        </p>
        <p>
          <strong>Rousseau (1712-1778) — « Approuvé avec réserve ».</strong> «
          Enfin, une mesure du lien social ! Mais attention au regard
          public : on est estimable quand on n'est pas regardé. » On lui
          accorde l'anonymat — obtenu par construction, les agrégats ne
          portent jamais de noms.
        </p>
        <p>
          <strong>Nietzsche (1844-1900) — « Méprisant, donc conquis ».</strong> « Compter les dons ? Morale du troupeau. SAUF : le
          don qui ne peut même pas être remboursé, c'est la dépense
          comme art — Gabe der Kraft. Enfin une comptabilité des
          forces. » Premier refus retourné en éloge ; il signe le livre
          d'or.
        </p>
        <p>
          <strong>Simone Weil (1909-1943) — « Approuvé, d'une voix très
          basse ».</strong> « Attention = le don sans objet échangeable.
          Le motif qualifié, c'est l'attention rendue visible. Il ne
          manquait à la métaphysique de l'attention qu'un compteur
          public. » Elle approuve ; le canon s'incline.
        </p>
      </>
    ),
  },
  {
    label: "Deuxième session — les anciens, le prince et la physique",
    corps: (
      <>
        <p>
          <strong>Lao Tseu (~VIe s. av. J.-C.) — « Approuvé sans
          comparaître ».</strong> Il envoie un mot par un disciple : «
          Le Tao qui se compte n'est pas le Tao. Trente rayons partent
          du moyeu — c'est le vide du moyeu qui fait la roue. Votre
          compteur est le moyeu : ce qui compte est le don, ce qui sert
          est le vide — la non-circulation. Ne me demandez pas de
          venir : le sage arrive quand tout est fini. » Le plus
          taoïste du tribunal.
        </p>
        <p>
          <strong>Confucius (~551-479 av. J.-C.) — « Approuvé, exige le
          rituel ».</strong> « Le ren commence à la famille et s'étend
          par concentriques — votre cercle est un manuel. Mais sans li,
          les rites, la vertu s'éparpille : il me faut une procédure. »
          On lui signale que le motif est facultatif. Il fronce les
          sourcils, note « laxisme rituel », approuve quand même.
        </p>
        <p>
          <strong>Socrate (470-399 av. J.-C.) — « Approuvé, et il pose
          une question ».</strong> « Que te demande la sonde ? —
          Pourquoi je donne. — Et si tu ne sais pas ? — Le don est
          complet sans motif. — Donc l'ignorance admise vaut mieux que
          la sagesse exigée. J'approuve une machine qui ne prétend pas
          savoir. » Il interroge l'invariant trois heures et conclut
          que le registre véridique est « la maïeutique du fait ».
          Ravi qu'on refuse sa section questions ; un refus, c'est sa
          boisson.
        </p>
        <p>
          <strong>Jules César (~100-44 av. J.-C.) — « Perd son temps,
          il le sait ».</strong> « Veni, vidi, vici — moi aussi je
          comptais : les Gaules, les deniers, les légions. Vous
          comptez des caresses. » Il demande si un territoire peut
          envahir un autre au compteur. Non : jamais de classement. Il
          soupire : « J'aurais envahi la Bretagne pour l'indice de
          solidarité. » Suspect de coup d'État virtuel ; placé sous
          surveillance du juge Bouddha.
        </p>
        <p>
          <strong>David (~1040-970 av. J.-C.) — « Approuvé en
          psaume ».</strong> Le berger-roi comparaît avec une harpe. «
          Les cieux racontent la gloire — voilà, votre registre est un
          ciel qui raconte. » Il prononce la première dédicace
          officielle du tribunal : 4 kiloMANA pour Jonathan, motif
          énoncé : <em>l'amitié ne se rend pas</em>. Le photon est
          parti ; il ne reviendra pas.
        </p>
        <p>
          <strong>Kropotkine (1842-1921) — « Enfin, la preuve de mes
          relevés ».</strong> Il arrive avec des fiches de marmottes. «
          L'entraide, un facteur de l'évolution (1902) — quarante ans
          que je répète que la coopération prime la concurrence. Vous,
          vous produisez la donnée. La marmotte survit à l'hiver par le
          terrier collectif ; l'humain, par le care. » Approuvé à
          100 %, le seul du tribunal — inquiétant, mais vérifié :
          c'est de la marmotte. Installé à la synthèse des agrégats.
        </p>
        <p>
          <strong>Mao Zedong (1893-1976) — « Désapprouvé, avec
          self-critique demandée ».</strong> « Grand Bond en avant :
          nous avons compté l'acier des cours de ferme — et la faim.
          Votre registre véridique m'aurait empêché de mentir à
          moi-même ; les marqueurs auraient dit déclaré au lieu de
          constaté. C'est un système pour empêcher les grands bonds.
          Je le désapprouve pour cette raison exacte. » Le canon
          considère c'est le plus beau compliment reçu : la seconde
          n'a pas de cours pour que jamais un compteur ne reçoive de
          plan.
        </p>
        <p>
          <strong>Shiva — « Convoqué en tant que physique ».</strong>{" "}
          Il comparaît sous forme de Nataraja, danse dans un anneau de
          feu. « Le tandava : création et destruction en un seul
          geste — votre noyau brûlé et votre lumière émise, je fais
          ça depuis avant le temps SI. La dissolution n'est plus dans
          la base depuis votre v0.3 ; je m'en remets à la physique du
          système. » Il approuve et pose le troisième œil sur
          l'interdit de conversion : la seconde n'a pas de cours, «
          sinon je le saurais ».
        </p>
      </>
    ),
  },
  {
    label: "Synthèse et levée du tribunal",
    corps: (
      <>
        <p>
          La grille des verdicts tient en quelques cases :{" "}
          <strong>approuvent l'instrument, refusent l'inaction</strong>{" "}
          (Marx, Robespierre) ; <strong>approuvent le lien, négocient
          le regard</strong> (Jésus, Rousseau, Gandhi) ;{" "}
          <strong>approuvent tout et demandent un stage</strong>{" "}
          (Bouddha, Weil, Kropotkine, et Smith qui vient chercher sa
          page 1) ; <strong>approuvent sans comparaître</strong>{" "}
          (Lao Tseu, Confucius, David) ;{" "}
          <strong>Socrate approuve d'un refus</strong> ; César cherche
          l'angle d'invasion du compteur ;{" "}
          <strong>Mao désapprouve explicitement</strong> — le plus beau
          compliment reçu ; <strong>Shiva approuve en tant que
          physique</strong>.
        </p>
        <p>
          Aucun ne peut se l'approprier — c'est le test le plus
          rassurant du canon : un système que ni Marx ni Hayek, ni
          Robespierre ni Bouddha, ni Mao ni César ne peuvent annexer
          est un système que personne ne récupérera. La critique du{" "}
          <a href={`${B}/ce-qui-vient`}>duopole de mesures</a> reste
          le fond du dossier ; ce tribunal en est le sourire.
        </p>
        <p>
          <em>
            Le tribunal est levé. Les fantômes n'ont rien à payer : la
            lumière émise est déjà dans le registre.
          </em>
        </p>
      </>
    ),
  },
];

export function PageTribunalDesFantomes() {
  return (
    <PageDoctrine
      nom="Annexe"
      slug="tribunal-des-fantomes"
      sections={[...SEC_TRIBUNAL]}
    />
  );
}
