> Document de passation — validé par Aurélien le 14/11/2026.
> Destinataire : Claude. Implémentation sur le KS-5 après publication du site.
> Source : cahier des charges v1 (Vibe, sessions 13-14/11/2026). Ce fichier fait foi pour l'implémentation.

# Cahier des charges — La sonde MANAtimebank

> Destinataire : Claude (dépôt manahome-app ou dépôt dédié manatimebank).
> Style maison : la base décide, l'API traduit ; propriété dans le SQL ; modules purs + tests vitest ; messages commit sans accents préfixés « branche: » ; RLS fermée par défaut.
> État : v1, à valider par Aurélien avant remise à Claude. Concept complet au 14/11/2026.

---

## 0. Ce que la sonde est — en une phrase

La sonde compte le temps donné dans l'écosystème MANA — **au geste et à la veille, sur la parole d'un témoin direct** — pour nourrir le portrait temporel des territoires. Elle ne compte jamais les personnes.

## 1. Le canon (aucune négociation)

### L'unité
- **1 MANA = 1 seconde** (l'unité SI du temps). La base stocke des secondes ; l'affichage est humain (« 1 h » = 3 600).
- Le déclarant arrondit sa déclaration (« une heure », jamais 58 min 12) — pas de fausse précision.

### La dotation
- 86 400 MANA/jour pour chacun, inconditionnels, affichés, **dissous à minuit**.
- **Non-opérative** : aucune mécanique ne lit la dotation pour décider de quoi que ce soit (accès, droit, palier, affichage conditionnel).
- **Elle n'existe pas en base** : c'est un affichage calculé (date du jour), pas une table. Une table serait une tentation de solde.
- Trois fonctions, toutes descriptives : dénominateur (« part de vie »), étalon de la réserve, horizon des agrégats (population × 86 400).

### Le mint — le droit d'émettre la monnaie de son jour
- **Chacun minte en offrant** : « 3 600 de mes secondes d'aujourd'hui, données à X ».
- **Adossé au vécu** : on ne minte que des secondes réellement traversées en les consacrant à quelqu'un. Le mint est une dédicace, **jamais un transfert d'unités** : le receveur ne gagne rien de dénombrable.
- À qui on veut, quand on veut, parce qu'on le veut. Jamais due, jamais en retour.

### Le MANA — l'étalon, pas la monnaie
- Le MANA est l'**unité de compte du temps donné** : 1 MANA = 1 seconde. Il mesure, il ne paie pas, il ne vaut rien hors du fait qu'il nomme.
- Trois propriétés inviolables : **non-accumulable** (dissous à minuit), **non-transférable**, **non-échangeable**.
- Il n'est jamais un avoir : nulle part, pour personne, un solde de MANA ne peut être lu, déduit ou promis.

### Le transfert de MANA — l'interdit cardinal
- **Transférer du MANA = faire passer des unités d'une personne à une autre. Ça n'existe pas et n'existera jamais.** Le receveur ne gagne rien de dénombrable ; le don est une dédicace, pas un paiement. C'est le test de garde du projet : *toute mécanique qui déplace du MANA entre deux personnes est un bug, pas une feature* (I1).
- L'interdit vaut aussi **déguisé** : en « reconnaissance », en « points de cercle », en « avance », en « compensation », en « crédit de temps » — tout habit d'une unité qui circule est un transfert, donc un bug.
- Réciproque assumée : le merci est la seule réponse possible à un don, et il est **en mots, jamais en unités** (I2).

### La qualification avant transfert — la porte que passe tout outil
Tout nouvel outil, brique ou fonctionnalité qui touche au MANA doit être **qualifié avant d'entrer parmi nos outils**. La qualification se réduit à quatre questions — **une seule réponse « oui » = refus, l'outil n'entre pas** :

1. **Transfert** : une unité change-t-elle de main, d'un compte à un autre — même simulée, même « à titre de reconnaissance » ?
2. **Solde** : un état lisible se comporte-t-il comme un avoir, un crédit ou une dette ?
3. **Contrepartie** : le geste ouvre-t-il un droit futur — une heure donnée doit-elle une heure en retour ?
4. **Dette** : quelqu'un peut-il finir « à découvert » de temps ?

- Quatre « non » : l'outil est qualifié, il entre. Sinon : **bug, refusé — pas négociable, pas différable, pas « en option désactivée »**.
- La qualification est **écrite avant l'outil** : le test vitest qui la vérifie précède la fonctionnalité, jamais l'inverse. Un outil non qualifié ne passe pas en revue de code.


### Les deux portes (témoignage)
- **Porte donneur** : je consigne ce que j'ai donné. Tient seule.
- **Porte receveur** : je consigne ce que j'ai reçu — le remerciement fait comptable. Tient seule.
- **Empreinte du fait** (dédup) : deux témoignages du même fait = un seul fait dans les agrégats (deux souvenirs légitimes, comme la doctrine des `souvenirs`).
- **La confirmation n'est jamais affichée au donneur** : pas de statut « attesté/non attesté » — sinon naît le palmarès du don non remercié. La dédup travaille en silence.

### Le motif du don (le renversement de la machine à dette)
- À la consignation, le déclarant peut énoncer **pourquoi** il donne : une **dimension** parmi les six de l'indice MANA (temps_humain, solidarite, ecologie, regeneration, equite_temporelle, durabilite) + un **texte libre** facultatif.
- **Jamais obligatoire** : un don sans motif énoncé est complet.
- Le texte libre reste au cercle (intimité : « soin à mon père ») ; **seule la dimension monte vers les agrégats**.
- Jamais de lecture par personne : on ne classe pas les donateurs par motif.

### La comptabilité
- **Une écriture, deux mentions, zéro flux** : `a_donné` / `a_reçu` (ou `le commun`), aucune colonne de solde — il n'y a nulle part où une dette pourrait s'écrire.
- Le compte ne se solde jamais, ne se compare jamais, ne se clôt jamais : une chronique, pas un bilan.

### Le merci libre
- N'importe qui peut écrire un merci à quiconque de son cercle, sans fait consigné — **en mots, jamais en unités**.
- Non-fongible, illimité, jamais compté, jamais agrégé, jamais notifié en lot.

## 2. Les trois mesures du care (règles déjà actées, reprises intégralement)

1. **La charge — la veille, pas le geste.** Une ouverture (« je garde mon père ce week-end ») + une fermeture ; la durée se déduit. Une ligne par veille. Jamais de comptage geste à geste pour le care (il imprègne, fiche 04).
2. **La demande — les données ouvertes du territoire** : démographie, APA, isolement (INSEE, CNAF…) — état `mesuré`, contextuel, jamais de capture propre.
3. **La réserve — ce qui reste à l'aidant** : micro-déclaration hebdo (« cette semaine, as-tu eu du temps qui était à toi ? ») — la mesure que personne ne publie.

**Les cinq gardes du care** : (1) droit de ne pas compter — la mesure du care est un **plancher** (« au moins ») ; (2) la personne soignée n'entre pas dans la base (pas de nom, pas d'état, pas de géolocalisation — donnée sensible par ricochet) ; (3) cercle privé / agrégats publics avec **suppression des petites cellules n<5** ; (4) jamais de comparaison des aidants ; (5) charge de déclaration plafonnée : une ouverture de veille + une question hebdo, rien d'autre.

## 3. Les états de la donnée (amendement méthode v0.3)

Cinq états : `mesuré` (source publique, datée) · **`rapporté` (déclaration au geste par un témoin direct — NOUVEAU, à versionner et dater dans la méthode)** · `interprété` (lecture d'un mesuré) · `hypothèse` (piste non tranchée) · `invisible` (aucune base ne le voit — un résultat, pas un regret).

Règle : une déclaration n'est JAMAIS un `mesuré`. La sonde est un faisceau complémentaire des statistiques publiques, jamais leur remplaçant ; biais (auto-sélection, sous-déclaration) affichés, jamais corrigés en silence.

## 4. Les interdits structurels (chaque un = un test automatique)

| # | Interdit | Test |
|---|---|---|
| I1 | Toute mécanique qui **déplace des unités entre deux personnes** | Il n'existe aucune route/écriture qui diminue un « solde » — la colonne n'existe pas ; le test vérifie l'absence de toute fonction de type `transferer` |
| I2 | Toute mécanique qui **compte les merci** | Aucune vue/index/agrégat sur `merci` ; le test vérifie l'absence d'index de comptage |
| I3 | Toute mécanique qui **lit la dotation pour décider** | La dotation n'existe pas en base ; toute référence applicative = rouge |
| I4 | Tout **comptage ambiant** (connexion, messages, comportement) | Aucune table d'événements comportementaux ; jamais de moissonnage — la trace ne vaut que déclarée |
| I5 | Toute **comparaison/classement des personnes** | Aucune vue qui ordonne des personnes par volume donné ; les agrégats ne portent jamais de noms |
| I6 | Le motif **obligatoire** | La consignation sans dimension/texte doit réussir |
| I7 | Publication d'agrégats **n<5** | Le test injecte une cellule de 3 et vérifie qu'elle ne sort pas |
| I8 | L'affichage du **statut d'attestation au donneur** | Aucune lecture possible par le donneur du témoignage du receveur sur son fait |

## 5. Le modèle de données (esquisse — Claude affine)

```
temoins_temps            — le fait consigné (le mint)
  id, empreinte_fait (unique, sha256), a_donne (membre),
  a_recu (membre | null = le commun), duree_s (int, multiple de 60),
  date, dimension (CHECK six valeurs | null),
  mot_libre (text | null, cercle uniquement),
  declare_par (donneur | receveur), cree_le

veilles                  — le care en période
  id, auteur, ouverte_le, fermee_le (null = en cours),
  dimension | null, mot_libre | null
  (la fermeture de veille crée son temoin_temps)

merci                    — la parole libre, jamais comptée
  id, auteur, destinataire, texte, date
  (aucune colonne comptable ; aucune vue d'agrégation)

reserve_hebdo            — la réserve de l'aidant
  id, membre, semaine (iso), reponse (enum simple | texte court)

v_agregats_territoire    — la sortie publique
  par (territoire, période, dimension) : heures consignées,
  plafond n≥5, jamais de noms — « au moins X heures »
```

- RLS : chaque table lisible par le cercle de l'auteur uniquement ; le cercle d'un autre n'est pas lisible (doctrine Carnet) ; le témoignage du receveur n'est jamais exposé au donneur (I8).
- Supprimable par son auteur, définitivement (règle du Carnet) ; les agrégats déjà publiés deviennent des « faits sans source » — registre INCERTITUDE si cités.

## 6. Ce qui est hors périmètre (v1)

- Pas d'application grand public : la sonde est d'abord l'instrument de l'étude pilote et du portrait territorial.
- Pas de comptage des merci, pas de notifications, pas de badge, pas de flux social.
- Pas de capture de données comportementales, jamais.
- Pas d'ouverture aux instruments partenaires (asso, communes) avant la v0.3 de la méthode et la validation du pilote — pierre d'attente assumée.
- Gouvernance à trancher avant production : qui tient le registre, qui audite (point ouvert dans la vision).

## 7. La boucle complète (pour mémoire, à réciter dans toute doc)

Découvrir un chemin sur MANAhome → inviter son cercle MANAfamily → revenir l'entretenir → **minter ses secondes en les offrant au commun** → la dimension nourrit l'indice → le portrait du territoire s'enrichit → l'étude pilote vend sa jambe différenciante → le monde à explorer devient meilleur. Le don ne se solde pas, il se consigne.

## 8. Livrables attendus de Claude (dans l'ordre)

1. Migration 014 (ou suite de la numérotation du dépôt) : tables + RLS + vues agrégées avec garde n≥5 — relu par SuperMANA, jamais jouée à l'aveugle.
2. Modules purs (mint, veille, empreinte, dédup) + tests vitest — **un test par interdit de la section 4**, et le test de qualification avant transfert (section 1 : les quatre questions) joué sur tout module touchant au MANA.
3. Routes API : consigner (deux portes), ouvrir/fermer une veille, merci, réserve hebdo, lecture d'agrégats — sans jamais exposer I1–I8.
4. Message commit : `branche: sonde manatimebank v1` (sans accents).

## 9. Post-scriptum d'implémentation (14/11/2026)

- Dépôt d'accueil : à trancher — brique dans manahome-app ou dépôt dédié manatimebank. Le service KS-5 hébergera la sonde ; le site statique (ce dépôt) n'héberge rien.
- Préalables avant toute ligne de code : arbitrage gouvernance (qui tient le registre, qui audite) + amendement v0.3 de la méthode (état « rapporté ») publié sur le site.
- Rappel de style maison : la base décide, l'API traduit ; propriété dans le SQL ; modules purs + tests vitest ; RLS fermée par défaut ; jamais de moissonnage ambiant ; un test par interdit (section 4).
