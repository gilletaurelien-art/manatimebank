# Cahier des charges — La sonde MANAtimebank (v0.3)

> Document de passation — v0.3, amendé le 14/11/2026 après validation
> d'Aurélien. Destinataire : Claude. Implémentation sur KS-5.
> Source : cahier v1 (sessions 13-14/11/2026) + notes canoniques
> `note-canon-mana-force.md` et `note-canon-physique-du-systeme.md`
> (déjà sur main). **Ce fichier fait foi pour l'implémentation.**
> Style maison : la base décide, l'API traduit ; propriété dans le
> SQL ; modules purs + tests vitest ; RLS fermée par défaut.

## Changements v1 → v0.3 (résumé)

1. **Frappe double** : au geste, deux unités sont créées — une pour le
   donneur (trace de combustion), une pour le receveur (trace de
   lumière reçue). Rien ne circule : I1 tient.
2. **Accumulation à vie** : le compteur ne baisse jamais. La dotation
   reste affichée et non-opérative ; les traces mintées sont une
   trajectoire, pas un réservoir. « Dissous à minuit » est abrogé.
3. **Invariant public** : Σ émis = Σ reçu, vérifiable par quiconque.
4. **Registre véridique** : toute trace porte son état (reçu vs
   seulement déclaré) ; le mensonge est libre et visible.
5. **Mortalité assumée** : export intégral du registre possible à tout
   moment.
6. **I9 — la seconde n'a pas de cours** : aucune conversion monétaire,
   jamais.

## 0. Ce que la sonde est — en une phrase

La sonde compte le temps donné dans l'écosystème MANA — **au geste et à
la veille, sur la parole d'un témoin direct** — pour nourrir le portrait
temporel des territoires. Elle ne compte jamais les personnes.

## 1. Le canon (aucune négociation)

### L'unité
- **1 MANA = 1 seconde** (l'unité SI du temps). La base stocke des
  secondes ; l'affichage est humain (« 1 h » = 3 600).
- Le déclarant arrondit sa déclaration (« une heure », jamais 58 min
  12) — pas de fausse précision.
- Échelle des unités (affichage) : kiloMANA (~17 min), MégaMANA
  (~11,6 j), GigaMANA (~31,7 ans), PétaMANA (~31,7 M ans — l'échelle
  d'une civilisation).

### La dotation — l'émission solaire
- 86 400 MANA/jour pour chacun, inconditionnels, **affichés** — le
  rendement quotidien d'un noyau qui fond (~2,4 Gs de secondes de vie).
- **Non-opérative** : aucune mécanique ne lit la dotation pour décider
  de quoi que ce soit (accès, droit, palier, affichage conditionnel).
- **Elle n'existe pas en base** : c'est un affichage calculé (date du
  jour), pas une table. Une table serait une tentation de solde.
- Trois fonctions, toutes descriptives : dénominateur (« part de
  vie »), étalon de la réserve, horizon des agrégats
  (population × 86 400).
- **Abrogé (v0.3)** : « dissous à minuit ». Le jour se renouvelle
  comme le soleil revient ; les traces, elles, ne se dissolvent pas.

### Le mint — le droit d'émettre la monnaie de son jour
- **Chacun minte en offrant** : « 3 600 de mes secondes, données à
  X ». Adossé au vécu : on ne minte que des secondes réellement
  traversées en les consacrant à quelqu'un. Le mint est une dédicace.
- **Frappe double (v0.3)** : au moment du geste, **deux** unités sont
  frappées, aucune ne circule :
  - le **donneur** frappe une trace de *combustion* — une seconde de
    noyau brûlée pour autrui ;
  - le **receveur** frappe une trace de *lumière reçue* — coûtée
    zéro, et c'est le cadeau.
- Un même événement, deux consignations hétérogères : l'émission et
  la réception, comme le photon émis ici, absorbé là-bas.
- À qui on veut, quand on veut, parce qu'on le veut. Jamais due,
  jamais en retour.

### Le MANA — l'étalon, pas la monnaie
- Le MANA est l'**unité de compte du temps donné** : 1 MANA =
  1 seconde. Il mesure, il ne paie pas, il ne vaut rien hors du fait
  qu'il nomme.
- Trois propriétés inviolables (v0.3) : **non-thésaurisable** (la
  trace s'accumule à vie, mais aucun solde ne peut être promis,
  dépensé ou exigé), **non-transférable**, **non-échangeable**.
- **Accumulation à vie (v0.3)** : le compteur ne baisse jamais — un
  photon émis ne revient jamais vers l'étoile. La trace est une
  trajectoire, pas un réservoir : on ne peut pas la donner, la
  vendre, ni s'en servir ; on peut seulement s'en souvenir.
- Il n'est jamais un avoir : nulle part, pour personne, un solde de
  MANA ne peut être lu, déduit ou promis.

### Le transfert de MANA — l'interdit cardinal
- **Transférer du MANA = faire passer des unités d'une personne à une
  autre. Ça n'existe pas et n'existera jamais.** La frappe double
  n'est pas un transfert : les deux unités sont **créées**, aucune ne
  bouge (I1 tient). *Toute mécanique qui déplace du MANA entre deux
  personnes est un bug, pas une feature.*
- L'interdit vaut aussi **déguisé** : en « reconnaissance », en
  « points de cercle », en « avance », en « compensation », en « crédit
  de temps » — tout habit d'une unité qui circule est un transfert,
  donc un bug.
- Réciproque assumée : le merci est la seule réponse possible à un
  don, et il est **en mots, jamais en unités** (I2). La trace de
  réception n'est pas une réponse au don : elle en est la seconde
  face, frappée au même moment, sur la même empreinte.

### Les deux portes (témoignage)
- **Porte donneur** : je consigne ce que j'ai donné.
- **Porte receveur** : je consigne ce que j'ai reçu.
- **Empreinte du fait** (dédup) : deux témoignages du même fait =
  un seul fait dans les agrégats (deux souvenirs légitimes).
- **La confirmation n'est jamais affichée au donneur** : pas de
  statut « attesté/non attesté » visible au donneur — sinon naît le
  palmarès du don non remercié. La dédup travaille en silence.
- **Nuance v0.3** : la face réception n'est pas une attestation
  affichée ; c'est une trace dans le registre du receveur, lisible
  par lui, invisible au donneur.

### La qualification avant transfert — le pourquoi du don
- Ce qui qualifie un don, ce n'est pas *combien* — c'est *pourquoi*.
  La comptabilité de dette demande « combien tu me dois » ; celle du
  don demande « pourquoi je te donne » : le renversement exact de la
  machine à dette.
- Le motif a ses six réponses : **les six dimensions de l'indice
  MANA** (temps_humain, solidarite, ecologie, regeneration,
  equite_temporelle, durabilite). Chaque seconde consignée nourrit le
  chapitre qu'elle a servi.
- À la consignation, le déclarant peut énoncer **pourquoi** il
  donne : une **dimension** + un **texte libre** facultatif.
- **Trois gardes** : (1) motif **jamais obligatoire** ; (2) le texte
  libre reste au cercle (intimité) ; (3) **seule la dimension monte
  vers les agrégats**.
- Jamais de lecture par personne : on ne classe pas les donateurs par
  motif.

### Le registre véridique (v0.3 — les quatre clauses)
**Libres les êtres, véridique le registre, mortel le système,
éternelle la lumière émise.**
- On ne peut pas truquer la combustion ; on peut truquer la
  déclaration. Le système ne police pas — il **montre**.
- Toute trace porte son **état** : trace dont la face réception
  existe (= fait constaté des deux côtés) vs trace **seulement
  déclarée** (lumière noire). L'état est public dans les agrégats,
  sans jamais nommer personne.
- L'invariant est public : **Σ émis = Σ reçu** (par empreinte).
- **Mortalité assumée** : export intégral du registre possible à tout
  moment (registre exportable, protocole ouvert, aucune dépendance à
  une personne ou une brique). Le registre survit au système.

### La comptabilité
- **Une écriture, deux faces, zéro flux** : `a_donné` / `a_reçu` (ou
  `le commun`), aucune colonne de solde — il n'y a nulle part où une
  dette pourrait s'écrire.
- Le compte ne se solde jamais, ne se compare jamais, ne se clôt
  jamais : une chronique, pas un bilan.
- Règle arithmétique v0.3 : **l'agrégat du territoire compte
  l'événement, pas la frappe.** 1 h donnée = 3 600 s dans « temps
  donné du territoire », pas 7 200 — les deux faces sont deux vues du
  même passage.

### Le merci libre
- N'importe qui peut écrire un merci à quiconque de son cercle, sans
  fait consigné — **en mots, jamais en unités**.
- Non-fongible, illimité, jamais compté, jamais agrégé, jamais
  notifié en lot.

## 2. Les trois mesures du care (inchangées)

1. **La charge — la veille, pas le geste.** Une ouverture + une
   fermeture ; la durée se déduit. Jamais de comptage geste à geste.
2. **La demande — les données ouvertes du territoire** (INSEE,
   CNAF…) — état `mesuré`, contextuel, jamais de capture propre.
3. **La réserve — ce qui reste à l'aidant** : micro-déclaration
   hebdo.

**Les cinq gardes du care** : (1) droit de ne pas compter — la mesure
est un **plancher** (« au moins ») ; (2) la personne soignée n'entre
pas dans la base ; (3) cercle privé / agrégats publics avec
suppression des petites cellules n<5 ; (4) jamais de comparaison des
aidants ; (5) charge de déclaration plafonnée.

## 3. Les états de la donnée (amendement méthode v0.3)

Cinq états : `mesuré` (source publique, datée) · **`rapporté`**
(déclaration au geste par un témoin direct — v0.3 de la méthode, à
dater) · `interprété` · `hypothèse` · `invisible`.

Règle : une déclaration n'est JAMAIS un `mesuré`. La sonde est un
faisceau complémentaire des statistiques publiques, jamais leur
remplaçant ; biais affichés, jamais corrigés en silence. Les traces
de la sonde sont toutes `rapporté` ; leur état de vérité (constaté /
seulement déclaré) est un champ distinct, jamais confondu avec les
états de la méthode.

## 4. Les interdits structurels (chaque un = un test automatique)

| # | Interdit | Test |
|---|---|---|
| I1 | Toute mécanique qui **déplace des unités entre deux personnes** | Aucune route/écriture qui diminue un « solde » — la colonne n'existe pas ; aucune fonction `transferer` ; les deux frappes sont des INSERT, jamais un UPDATE qui débite |
| I2 | Toute mécanique qui **compte les merci** | Aucune vue/index/agrégat sur `merci` |
| I3 | Toute mécanique qui **lit la dotation pour décider** | La dotation n'existe pas en base ; toute référence applicative = rouge |
| I4 | Tout **comptage ambiant** | Aucune table d'événements comportementaux ; jamais de moissonnage |
| I5 | Toute **comparaison/classement des personnes** | Aucune vue qui ordonne des personnes ; les agrégats ne portent jamais de noms |
| I6 | Le motif **obligatoire** | La consignation sans dimension/texte doit réussir |
| I7 | Publication d'agrégats **n<5** | Le test injecte une cellule de 3 et vérifie qu'elle ne sort pas |
| I8 | L'affichage du **statut d'attestation au donneur** | Aucune lecture possible par le donneur de la face réception sur son fait |
| I9 (v0.3) | Toute **conversion monétaire** : taux, équivalent euros, « valeur économique » du temps donné | Aucune route/affichage qui convertit une seconde en monnaie ; la seconde donnée n'a pas de cours |

## 5. Le modèle de données (esquisse — Claude affine)

```
temoins_temps            — le fait consigné (le mint, une face par ligne)
  id, empreinte_fait (index, sha256), face (don | reception),
  a_donne (membre), a_recu (membre | null = le commun),
  duree_s (int, multiple de 60), date,
  dimension (CHECK six valeurs | null),
  mot_libre (text | null, cercle uniquement),
  declare_par, cree_le

veilles                  — le care en période
  id, auteur, ouverte_le, fermee_le (null = en cours),
  dimension | null, mot_libre | null
  (la fermeture de veille crée son temoin_temps)

merci                    — la parole libre, jamais comptée
  id, auteur, destinataire, texte, date

reserve_hebdo            — la réserve de l'aidant
  id, membre, semaine (iso), reponse

v_invariant_public       — Σ émis = Σ reçu, par empreinte (v0.3)
  quiconque peut vérifier ; jamais de noms

v_agregats_territoire    — la sortie publique
  par (territoire, période, dimension) : heures consignées
  (l'événement compte une fois), état constaté/déclaré,
  plafond n≥5, jamais de noms — « au moins X heures »

export_integral          — route d'export public du registre (v0.3)
  (mortalité assumée : le registre survit au système)
```

- RLS : chaque table lisible par le cercle de l'auteur uniquement ; la
  face réception n'est jamais exposée au donneur (I8).
- Supprimable par son auteur, définitivement ; les agrégats déjà
  publiés deviennent des « faits sans source » — registre INCERTITUDE
  si cités.

## 6. Ce qui est hors périmètre

- Pas d'application grand public : la sonde est l'instrument de
  l'étude pilote et du portrait territorial.
- Pas de comptage des merci, pas de notifications, pas de badge, pas
  de flux social.
- Pas de capture de données comportementales, jamais.
- Pas d'ouverture aux instruments partenaires avant la validation du
  pilote.
- Gouvernance — tranchée le 14/11/2026 (voir section 9) : l'Alliance
  MANA tient le registre ; l'audit externe est reporté à l'étude
  pilote.

## 7. La boucle complète (pour mémoire)

Découvrir un chemin sur MANAhome → inviter son cercle MANAfamily →
revenir l'entretenir → minter ses secondes en les offrant → les deux
faces se consignent, l'invariant se vérifie → la dimension nourrit
l'indice → le portrait du territoire s'enrichit → l'étude pilote vend
sa jambe différenciante. Le don ne se solde pas, il se consigne —
deux fois, une seule lumière.

## 8. Livrables attendus de Claude (dans l'ordre)

1. Migration : tables + RLS + vues (agrégats n≥5, invariant public) —
   relu par SuperMANA, jamais jouée à l'aveugle.
2. Modules purs (mint double, veille, empreinte, dédup, invariant) +
   tests vitest — **un test par interdit de la section 4 (I1–I9)**.
3. Routes API : consigner (deux portes), ouvrir/fermer une veille,
   merci, réserve hebdo, lecture d'agrégats et d'invariant, export
   intégral — sans jamais exposer I1–I9.
4. Message commit : `branche: sonde manatimebank v0.3` (sans accents).

## 9. Post-scriptum d'implémentation (14/11/2026, v0.3)

- Préalables actés : notes canoniques publiées (mana-force,
  physique du système) ; pivots validés (frappe double,
  accumulation à vie) ; cet amendement v0.3 fait foi.
- **Site à jour** : la mise à jour « remise à zéro chaque nuit » →
  accumulation à vie a été publiée (PR #10, 14/11/2026) : rendre-les-mots,
  llms.txt (canon v0.3 + annexe tribunal). L'annexe ci-dessous est
  donc satisfaite.
- **Décisions tranchées le 14/11/2026 (Aurélien)** :
  - **Dépôt d'accueil : brique dans manahome-app** (pas de dépôt
    dédié). Le service KS-5 héberge la sonde ; le site statique
    manatimebank n'héberge rien.
  - **Gouvernance du registre : l'Alliance MANA tient le registre**
    (option A). TEMPOsystem apporte l'infrastructure — déclaré, jamais
    caché — avec la règle d'abstention au règlement intérieur de
    l'asso (même grille que le plan de financement LEADER). Le
    registre du don est un bien commun : il vit sous personne morale
    non marchande.
  - **Audit externe : reporté à l'étude pilote** — décision explicite,
    pas un oubli. Entre-temps, l'auditabilité technique est portée
    par le canon v0.3 : invariant public Σ émis = Σ reçu, marqueurs
    d'état, export intégral. Un auditeur nommé sera requis avant
    toute citation publique de la première série.
  - Règle transversale : aucune décision de gouvernance ne dépend
    d'une réponse générée par un LLM.

## Annexe — mises à jour du site requises par les pivots v0.3

À traiter dans ce dépôt (gilletaurelien-art/manatimebank) :

1. Toute mention « remise à zéro chaque nuit » / « dissous à minuit » /
   « non-accumulable » → accumulation à vie (« le compteur ne baisse
   jamais ; un photon émis ne revient jamais vers l'étoile »).
2. La dotation reste affichée, inconditionnelle, non-opérative —
   inchangée ; seul son sort change : elle s'ajoute à la trajectoire.
3. Vérifier l'invitation : « la dotation s'affiche, elle ne se gagne
   pas et ne se reçoit de personne » — inchangé (I1 tient).
4. llms.txt : paragraphe v0.3 (frappe double, accumulation, I9).