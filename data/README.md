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
de ces séries complètes. Pour vérifier ou étendre :
- télécharger les CSV complets depuis les endpoints ci-dessus ;
- les valeurs de la page correspondent aux lignes millésime 2023
  (heures) ou à la dernière année disponible par pays (care).

Aucune donnée identifiante. Aucun scraping : endpoints publics, accès
direct. La doctrine MANA s'applique à nos propres données : mesuré,
sourcé, daté, vérifiable.
