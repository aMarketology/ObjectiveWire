#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Mint Satori thumbnails for all World Cup 2026 match-report articles
# Usage: bash scripts/mint-worldcup-thumbnails.sh
# ─────────────────────────────────────────────────────────────────────────────

BASE="http://localhost:3000"
TOKEN="satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3"
NETWORK="ozone"
LAYOUT="breaking"

mint() {
  local slug="$1"
  local title="$2"
  local subtitle="$3"

  echo ""
  echo "⚽ Minting: $slug"

  response=$(curl -s -X POST "$BASE/api/v1/quick-generate" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "$(jq -n \
      --arg network "$NETWORK" \
      --arg slug "$slug" \
      --arg title "$title" \
      --arg subtitle "$subtitle" \
      --arg layout "$LAYOUT" \
      '{network:$network, slug:$slug, title:$title, subtitle:$subtitle, layout:$layout}')")

  saved=$(echo "$response" | jq -r '.saved // false')
  generated_url=$(echo "$response" | jq -r '.generated_url // "n/a"')

  if [ "$saved" = "true" ]; then
    echo "   ✅ saved=true"
    echo "   🖼  $generated_url"
  else
    echo "   ⚠️  Response: $response"
  fi
}

echo "═══════════════════════════════════════════════════════════════"
echo "  Satori Thumbnail Minter — World Cup 2026 Match Reports"
echo "  Base: $BASE | Network: $NETWORK | Layout: $LAYOUT"
echo "═══════════════════════════════════════════════════════════════"

# ── Group A ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-mexico-2-south-africa-0-group-a" \
  "Mexico 2–0 South Africa: Co-Hosts Open in Chaos at Estadio Azteca" \
  "Jiménez and Quiñones score as South Africa self-destruct with two red cards in the tournament's opening match"

mint \
  "world-cup-2026-south-korea-2-czechia-1-group-a" \
  "South Korea 2–1 Czechia: Comeback Victory Puts Korea in Command of Group A" \
  "The Taeguk Warriors overturn a first-half deficit with two late goals to complete a remarkable turnaround in Guadalajara"

# ── Group B ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-canada-1-bosnia-1-group-b" \
  "Canada 1–1 Bosnia and Herzegovina: Larin Rescues Point in Rollercoaster Toronto Opener" \
  "A Kolašinac clearance and a late equalizer from substitute Larin define Canada's dramatic home World Cup debut"

mint \
  "world-cup-2026-switzerland-1-qatar-1-group-b" \
  "Switzerland 1–1 Qatar: 23 Shots, a Penalty, and a Last-Gasp Gut Punch" \
  "Switzerland's dominance yields only a draw as Boualem Khoukhi's stoppage-time equalizer denies the Swiss all three points"

# ── Group C ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-scotland-1-haiti-0-group-c" \
  "Scotland 1–0 Haiti: 28-Year Wait Ends With a Winning World Cup Return" \
  "Scotland make their long-awaited World Cup comeback count with a hard-fought victory over Haiti in Atlanta"

mint \
  "world-cup-2026-brazil-1-morocco-1-group-c" \
  "Brazil 1–1 Morocco: The Seleção Are Held as Group C Blows Wide Open" \
  "Morocco's defensive mastery neutralizes Brazil's attack for long stretches in a fixture that lived up to every pre-match billing"

# ── Group D ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-usa-4-paraguay-1-group-d" \
  "USA 4–1 Paraguay: A Statement Performance on Home Soil" \
  "Balogun and Pulisic link brilliantly as the USMNT deliver the most convincing result of the tournament's opening days"

mint \
  "world-cup-2026-australia-2-turkiye-0-group-d" \
  "Australia 2–0 Türkiye: The Shock of Day 3 Sets Up a USA Showdown" \
  "Irankunda's stunning finish and Metcalfe's long-range thunderbolt give the Socceroos a victory that reshapes Group D"

# ── Group E ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-germany-7-curacao-1-group-e" \
  "Germany 7–1 Curaçao: A Statement Scoreline and a Historic Moment for the Island Nation" \
  "Comenencia's equalizer gives Curaçao their first World Cup goal before Germany respond with six in an ominous show of force"

mint \
  "world-cup-2026-ivory-coast-1-ecuador-0-group-e" \
  "Ivory Coast 1–0 Ecuador: Amad Diallo's 90th-Minute Chip Delivers a Classic" \
  "A match that seemed headed for a draw explodes in the final seconds as Diallo produces a stunning finish to give the Elephants all three points"

# ── Group F ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-sweden-5-tunisia-1-group-f" \
  "Sweden 5–1 Tunisia: Ruthless Svensson Side Emerges as Group F Dark Horse" \
  "Goals from Ayari, Isak, Gyökeres, and Svanberg give Sweden a comprehensive opening win as Tunisia's coach pays the price"

mint \
  "world-cup-2026-netherlands-2-japan-2-group-f" \
  "Netherlands 2–2 Japan: Kamada's 88th-Minute Strike Produces the Tournament's Best Match" \
  "Three goals in 13 second-half minutes and a last-gasp equalizer from Kamada make this the defining match of the opening days"

# ── Group G ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-belgium-1-egypt-1-group-g" \
  "Belgium 1–1 Egypt: Ashour's Rocket Stuns the Red Devils and Leaves Group G Open" \
  "Egypt's first international goal from Emam Ashour in 30 appearances shocks Belgium, who need an own goal to rescue a point in Seattle"

# ── Group H ──────────────────────────────────────────────────────────────────
mint \
  "world-cup-2026-spain-0-cape-verde-0-group-h" \
  "Spain 0–0 Cape Verde: One of the Greatest World Cup Shocks — Vozinha, 40, Is Heroic" \
  "Cape Verde's debutant defensive masterclass holds reigning European champions Spain scoreless in one of football's all-time great upsets"

mint \
  "world-cup-2026-saudi-arabia-1-uruguay-1-group-h" \
  "Saudi Arabia 1–1 Uruguay: Al-Owais Produces Legendary Display as Group H Remains Equal" \
  "An astonishing second-half goalkeeping performance from Mohammed Al-Owais denies Uruguay as every team in Group H finishes the opening round on one point"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  Done. 15 thumbnails minted."
echo "═══════════════════════════════════════════════════════════════"
