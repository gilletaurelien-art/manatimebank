# Données brutes — MANA TIME BANK

Séries publiques utilisées par la page /donnees (Méthode MANA, v0.2 —
chaque chiffre porte sa source, chaque série son état : mesuré).

## Sources

1. **heures-travail-2023.csv** — Heures de travail annuelles par
   travailleur, millésime 2023. Source : Penn World Table 11.0, via
   Our World in Data (`annual-working-hours-per-worker`). Licence et
   provenance : voir OWID. État : mesuré.
   Endpoint public : https://ourworldindata.org/grapher/annual-working-hours-per-worker.csv

2. **care-non-remunere.csv** — Temps de care et travail domestique non
   rémunéré par sexe (heures/jour), dernière enquête disponible par pays.
   Source : ONU, SDG 5.4.1, via Our World in Data
   (`time-spend-in-domestic-work-female-vs-male`). État : mesuré dans les
   pays enquêtés, invisible ailleurs.
   Endpoint public : https://ourworldindata.org/grapher/time-spend-in-domestic-work-female-vs-male.csv

## Reproductibilité

Les tableaux publiés sur /donnees sont un extrait contrasté (lisibilité)
de ces séries complètes. Pour vérifier, étendre ou actualiser :

    node scripts/fetch-data.mjs           # retélécharge les deux séries
    node scripts/fetch-data.mjs --check   # compare sans écrire (exit 1 si différent)

- la série heures est réduite au millésime le plus récent disponible ;
- la série care garde chaque enquête par pays (l'ancienneté des enquêtes
  fait partie du constat) ;
- vérifier le diff, puis committer : doctrine — mesuré, sourcé, daté.

Aucune donnée identifiante. Aucun scraping : endpoints publics, accès
direct. La doctrine MANA s'applique à nos propres données : mesuré,
sourcé, daté, vérifiable.
