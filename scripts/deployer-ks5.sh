#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════════
#  DÉPLOYER manatimebank.org SUR LE KS-5 — là où le domaine sert VRAIMENT
# ═══════════════════════════════════════════════════════════════════════════
#
#  🔴 POURQUOI CE SCRIPT EXISTE. Mesuré le 17/11/2026 : `manatimebank.org`
#  résout sur le KS-5 (147.135.254.25), servi par Caddy depuis
#  `/srv/www-manatimebank` — PAS par GitHub Pages, malgré un workflow
#  `.github/workflows/deploy.yml` qui y déployait à chaque push, et qui
#  RÉUSSISSAIT à chaque fois (vert). Le contenu réellement servi datait du
#  28/10, pendant que 35 commits (9 PR, le 14/11 seul) s'accumulaient sans
#  jamais atteindre le public. Un déploiement qui réussit vers la mauvaise
#  cible est indiscernable d'un déploiement qui réussit, jusqu'à ce qu'on
#  compare le SITE à ce que CI prétend avoir expédié.
#
#  ⭐ LA PARADE N'EST PAS CE SCRIPT SEUL — c'est qu'un humain n'ait plus à se
#  souvenir de le lancer. `.github/workflows/deploy.yml` l'appelle désormais à
#  CHAQUE push sur main, remplaçant le déploiement Pages qui ne servait rien.
#
# ── LA CIBLE N'EST PAS UN DÉTAIL DE COMMANDE, ELLE EST DANS LE CODE ─────────
#
#  `vite.config.ts` décide du chemin de base et de l'URL canonique d'après
#  trois variables d'environnement, dont les DÉFAUTS sont ceux de GitHub
#  Pages — donc les OUBLIER ici redéploierait un site aux chemins cassés sur
#  le domaine propre (CSS/JS en 404, page blanche). Le build porte son PROPRE
#  garde : il échoue si une URL `github.io` survit dans la sortie quand
#  `SITE_URL` diffère de Pages. Ce script ne duplique pas ce garde, il le
#  DÉCLENCHE en passant les bonnes variables.
#
# ── LE PIÈGE RENCONTRÉ EN DÉPLOYANT À LA MAIN, ET POURQUOI LA PARADE EST ICI ─
#
#  🔴 `/srv/www-manatimebank` appartient à `root`. Un premier essai en `rsync`
#  nu (utilisateur `debian`, sans sudo) n'a pas rendu une erreur de droits
#  PROPRE : la connexion s'est coupée en plein protocole rsync
#  (« connection unexpectedly closed »), ce qui ressemble à un problème
#  réseau et ne l'est pas. `--rsync-path="sudo rsync"` fait exécuter rsync
#  côté serveur EN ROOT — c'est ce qui a réellement résolu l'écriture, pas un
#  nouvel essai du même geste.
#
# ── LA VÉRIFICATION, PARCE QU'UN rsync QUI REND 0 NE PROUVE PAS QUE LE SITE
#    PUBLIC A CHANGÉ (cache Caddy, CDN, DNS pas encore propagé…) ──────────────
#
#  Le script compare l'empreinte de CHAQUE route du build à ce que le domaine
#  rend RÉELLEMENT par HTTPS, après coup. Une divergence fait échouer le
#  déploiement bruyamment plutôt que de laisser un déploiement "réussi" qui ne
#  l'était pas — exactement le défaut que ce script corrige à l'échelle d'en
#  dessus.
set -euo pipefail
cd "$(dirname "$0")/.."

HOTE="${MANA_HOTE:-debian@147.135.254.25}"
CLE_SSH="${MANA_SSH_KEY:-}"
CIBLE="/srv/www-manatimebank"
DOMAINE="https://manatimebank.org"

SSH_OPTS=(-o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15)
[ -n "$CLE_SSH" ] && SSH_OPTS=(-i "$CLE_SSH" "${SSH_OPTS[@]}")

dire()  { printf '%s\n' "$*"; }
rouge() { printf '\033[31m%s\033[0m\n' "$*" >&2; }
vert()  { printf '\033[32m%s\033[0m\n' "$*"; }

# ── 0. Construire pour LE DOMAINE, pas pour Pages ───────────────────────────
# ⚠️ CES TROIS VARIABLES, ENSEMBLE — `vite.config.ts` le dit lui-même :
#    « quand une valeur dépend de la cible, elle en dépend PARTOUT ». En
#    oublier une ferait un build à moitié configuré, et la page s'afficherait
#    quand même (donc rien ne le signalerait) : chemins de base corrects mais
#    canonique Pages, ou l'inverse.
dire "→ build pour $DOMAINE (pas Pages)"
BASE_PATH=/ OUT_DIR=dist SITE_URL="$DOMAINE" npm run build

[ -d dist ] || { rouge "🔴 dist/ absent après le build — rien à déployer"; exit 1; }
[ -f dist/index.html ] || { rouge "🔴 dist/index.html absent — build incomplet"; exit 1; }

# ── 1. Un essai à blanc, pour voir CE QUI va bouger avant d'écrire ──────────
dire "→ essai à blanc"
ssh "${SSH_OPTS[@]}" "$HOTE" "sudo -n true" \
  || { rouge "🔴 sudo sans mot de passe indisponible pour $HOTE — on ne continue pas à l'aveugle"; exit 1; }

rsync -azn --delete --rsync-path="sudo rsync" \
  -e "ssh ${SSH_OPTS[*]}" \
  dist/ "$HOTE:$CIBLE/" > /tmp/manatimebank-essai-$$.txt
SUPPRESSIONS=$(grep -c '^deleting ' /tmp/manatimebank-essai-$$.txt || true)
dire "   $(wc -l < /tmp/manatimebank-essai-$$.txt | tr -d ' ') ligne(s) à transférer, ${SUPPRESSIONS} suppression(s)"
rm -f /tmp/manatimebank-essai-$$.txt

# ⛔ UNE SAUVEGARDE AVANT D'ÉCRASER — jamais de `--delete` sans filet.
# Rotation : on n'en garde que 3, sinon /srv se remplit d'une sauvegarde par
# déploiement sans que rien ne les purge (vécu ailleurs sur cette machine).
TS="$(date -u +%Y%m%d-%H%M%S)"
dire "→ sauvegarde avant écrasement"
ssh "${SSH_OPTS[@]}" "$HOTE" "
  sudo cp -a '$CIBLE' '$CIBLE.avant-deploiement-$TS' &&
  ls -1dt '$CIBLE'.avant-deploiement-* 2>/dev/null | tail -n +4 | xargs -r sudo rm -rf
"

# ── 2. Le déploiement réel ──────────────────────────────────────────────────
dire "→ déploiement"
rsync -az --delete --rsync-path="sudo rsync" \
  -e "ssh ${SSH_OPTS[*]}" \
  dist/ "$HOTE:$CIBLE/"

ssh "${SSH_OPTS[@]}" "$HOTE" "sudo chown -R root:root '$CIBLE'"

# ── 3. LA VÉRIFICATION QUI COMPTE : le DOMAINE, pas le code de sortie de rsync.
#
# ⭐ C'est la leçon du 17/11 appliquée à elle-même : un rsync qui réussit ne
#    prouve rien sur ce que le visiteur reçoit. On compare chaque route du
#    build à ce que https://manatimebank.org rend RÉELLEMENT, après coup.
dire "→ vérification contre le domaine public"
ECART=0
for route_dir in dist/*/; do
  slug="$(basename "$route_dir")"
  [ "$slug" = "assets" ] && continue
  [ -f "$route_dir/index.html" ] || continue
  local_empreinte="$(shasum -a 256 "$route_dir/index.html" | cut -d' ' -f1)"
  distant_empreinte="$(curl -sf --max-time 15 "$DOMAINE/$slug/" | shasum -a 256 | cut -d' ' -f1)"
  if [ "$local_empreinte" = "$distant_empreinte" ]; then
    dire "   ✓ /$slug/"
  else
    rouge "   🔴 /$slug/ : build=$local_empreinte  public=$distant_empreinte"
    ECART=1
  fi
done

# L'accueil, séparément : sa route n'est pas un sous-dossier.
local_empreinte="$(shasum -a 256 dist/index.html | cut -d' ' -f1)"
distant_empreinte="$(curl -sf --max-time 15 "$DOMAINE/" | shasum -a 256 | cut -d' ' -f1)"
if [ "$local_empreinte" = "$distant_empreinte" ]; then
  dire "   ✓ /"
else
  rouge "   🔴 / : build=$local_empreinte  public=$distant_empreinte"
  ECART=1
fi

# ⭐ ET UN TÉMOIN QU'ON N'A PAS DÉPLOYÉ : github.io ne doit survivre NULLE
#    PART dans ce qui est servi, pas seulement dans le build local.
if curl -sf --max-time 15 "$DOMAINE/" | grep -q "github.io"; then
  rouge "   🔴 le domaine public sert encore une URL github.io"
  ECART=1
fi

if [ "$ECART" -ne 0 ]; then
  rouge "🔴 LE DÉPLOIEMENT A ÉTÉ ENVOYÉ MAIS NE SE VÉRIFIE PAS — restauration possible :"
  rouge "   ssh ${HOTE} sudo rsync -a --delete $CIBLE.avant-deploiement-$TS/ $CIBLE/"
  exit 1
fi

vert "✅ déployé et vérifié — $DOMAINE sert exactement ce build."
