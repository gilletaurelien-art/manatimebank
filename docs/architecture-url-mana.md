# Architecture des URL MANA — la maison, les portes, le registre

*Document d'architecture — rédigé le 14/11/2026, position tranchée par
Aurélien le même jour (le compte vit dans manahome). Hypothèses marquées
comme telles. À publier dans docs/ après relecture.*

## 1. La carte, lue en anneaux

Chaque domaine porte **une relation**, pas un produit :

| Domaine | Relation | Nature |
|---|---|---|
| manahome.org | **toi et la maison** | le compte — identité unique (SSO), le socle |
| mana.bzh | toi et le territoire — Bretagne | promenades, radio, le pays |
| manafrance *(hypothèse de nom)* | toi et le territoire — France | toutes les offices de tourisme de France — suite logique de mana.bzh |
| alliancemana.org | **toi et la maison commune** | la vitrine ESS, l'association — la gouvernance (elle tient le registre) |
| mana.love | **toi et MANA** | la relation intime — conversation, care, abonnement |
| manafamily | **toi et les tiens** | les cercles — groupes, familles, tribus, amis |
| manatimebank | **toi et le monde** | le registre — la consignation du temps donné |

Deux axes se croisent :
- **l'axe territorial** (bzh → france) : les offices de tourisme,
  en cercles concentriques — le réseau breton d'abord, toutes les
  OT de France ensuite (suite logique de mana.bzh) ;
- **l'axe des maisons** (home → alliancemana) : la maison des IA
  (le compte, la technique) et la maison commune (l'ESS,
  la gouvernance) ;
- **l'axe relationnel** (love / family / timebank) : la relation
  verticale (toi et MANA), la relation horizontale (toi et les
  tiens), la trace publique (toi et le monde).

## 2. La règle cardinale : le compte vit dans manahome

**Aucun produit ne possède l'identité. Tous la consomment.**

Trois arguments, un par nature :

1. **Nominal.** MANAhome s'appelle *home*. Le compte est l'entrée dans
   la maison, pas dans une pièce. Une personne qui n'utilise que
   mana.bzh pour ses promenades n'a pas à créer un compte dans un
   produit d'IA compagnon qu'elle n'a pas demandé.
2. **Technique.** Le KS-5 sert déjà tout par le même Caddy
   (manahome.org, radio.mana.bzh) ; la sonde est une brique de
   manahome-app (décision du 14/11/2026) ; les cercles MANAfamily sont
   lus par la RLS de la sonde. Un seul service d'identité en amont,
   des fronts en aval : **manahome = l'auth, les produits = des
   portes.** Sinon : comptes dupliqués, et chaque fusion future
   devient une migration.
   ⚠️ Nuance : manahome porte l'identité technique (le compte SSO) ;
   **alliancemana porte la personne morale** (l'asso, la gouvernance
   du registre, la vitrine ESS, le soutien). Les deux maisons ne se
   confondent pas : l'une est l'infrastructure, l'autre l'institution.
   (Décision du 14/11/2026 : la vitrine ESS quitte manafrance pour
   alliancemana.org ; manafrance devient l'anneau territorial.)
3. **Doctrinal.** La mortalité assumée (note « physique du
   système ») : les produits sont mortels. Si le compte vit dans
   mana.love et que mana.love meurt, les personnes meurent avec. La
   clause canonique — le registre survit au système — vaut aussi pour
   l'identité : **la maison reste, les pièces se renouvellent.** Le
   compte est la couche persistante, pas une fonctionnalité.

Et le double sens canonique tombe au bon endroit : *créer un compte ne
se gagne pas et ne se reçoit de personne* — l'entrée est gratuite
comme la dotation. Personne ne mérite un foyer ; tout le monde y entre.

## 3. Correction de nom : manatimebank est un registre

**Le MANA ne circule pas, il se consigne** (I1, frappe double). Le nom
de domaine « time bank » est un héritage — l'expression même du monde
critiqué — ; la doctrine dit : *la banque de données du don*. Règle :
le domaine reste, mais aucun texte, aucune interface, aucune
métadonnée ne doit le laisser reformuler la doctrine. llms.txt,
titres, descriptions : **le registre, le miroir — jamais le marché.**

## 4. Ce que le socle manahome porte (et rien d'autre)

- **L'identité** : un compte unique, tous produits.
- **La gouvernance du registre** : l'Alliance MANA tient le registre ;
  TEMPOsystem apporte l'infrastructure, déclaré, règle d'abstention
  (décision du 14/11/2026).
- **Les services** : Caddy, KS-5, les briques (sonde, radio, apps).

Ce que le socle ne porte pas : les contenus, les promesses, les
tarifs — chaque porte dit ce qu'elle est, la maison ne dit rien.

## 5. Conséquences de conception

1. **Un seul compte, des rôles par porte** : la personne est une ;
   ses cercles (manafamily), ses conversations (mana.love), ses
   traces (manatimebank) sont des vues, des droits, des cercles RLS —
   jamais des identités séparées.
2. **Les cercles vivent dans manafamily, sont lus partout** : la
   sonde consigne au cercle (RLS, doctrine Carnet) ; les cercles sont
   définis une fois, consommés par la sonde et par l'invitation.
3. **La mortalité s'applique aux portes, pas au socle** : fermer une
   porte (mana.love v2, manafrance abandonné) ne détruit ni le compte,
   ni les cercles, ni le registre. L'export intégral (cahier v0.3)
   s'applique à chaque porte.
4. **Règle transversale** : aucune décision d'architecture ne dépend
   d'une réponse générée par un LLM (même grille que la gouvernance).

## 6. Schéma de synthèse

```
manahome.org        — le compte (SSO), la maison des IA
  ├─ mana.bzh        — le territoire proche (les OT de Bretagne, la radio)
  ├─ manafrance      — le territoire large (toutes les OT de France)
  ├─ mana.love       — la relation (toi et MANA)
  ├─ manafamily      — les cercles (toi et les tiens)
  └─ manatimebank    — le registre (toi et le monde)

alliancemana.org    — la maison commune : l'ESS, l'association,
                      la gouvernance — elle tient le registre
```

*La maison tient le compte ; les portes tiennent les relations ; le
registre tient la lumière émise.*