# ZWire Predictions Hub | Build Roadmap

**Created:** June 30, 2026  
**Status:** Active development  
**Base component:** `components/PredictionsPage.tsx`  
**Data file:** `data/prediction-markets.ts`  
**Hub index:** `app/predictions/page.tsx`

---

## What We Built (June 30, 2026)

### Core System

| File | Purpose |
|---|---|
| `data/prediction-markets.ts` | Single source of truth for all market data. Typed. Add new topics here. |
| `components/PredictionsPage.tsx` | Reusable hub dashboard component. Renders: live odds leaderboard, match results, upcoming fixtures, market alerts, editorial summary, related markets. |
| `app/predictions/page.tsx` | Hub index at `/predictions`. Shows all active topics as cards. ISR 1h. |
| `lib/registry-service.ts` | `/predictions` added to `HUB_SLUGS`. `predict` added to `HUB_ONLY_ROOTS`. |

### First Live Hub

**Route:** `/predict/world-cup/2026`  
**File:** `app/predict/world-cup/2026/page.tsx`  
**Data:** `WORLD_CUP_2026_TOPIC` in `data/prediction-markets.ts`  
**Status:** Live, 200 OK  

What it shows:
- Live odds leaderboard (France 20%, England 16%, Brazil 14%, Germany OUT)
- 3 market movement alerts (Germany resolved, England surge, France volume)
- 5 upcoming Round of 32 fixtures with match odds (kickoff times, venues)
- 5 recent group stage results linked to match reports
- Editorial summary with internal links
- Related markets (NBA Finals, MLB, Golf)

---

## PredictionsPage Component API

```tsx
<PredictionsPage
  topic={topic}              // PredictionTopic from data/prediction-markets.ts
  hubHref="/predictions"     // breadcrumb back link
  relatedTopics={[...]}      // other PredictionTopic[] shown at bottom
  results={RESULTS}          // MatchResult[] — recent scores with report links
  fixtures={FIXTURES}        // Fixture[] — upcoming games with odds
  alerts={ALERTS}            // MarketAlert[] — market movement notifications
  summary={<>...</>}         // JSX editorial analysis block
/>
```

### MatchResult shape
```ts
{
  homeTeam, awayTeam: string
  homeScore, awayScore: number
  homeFlag, awayFlag: string       // emoji flags
  stage: string                    // "Group E", "Round of 32"
  date: string                     // ISO 8601
  reportHref?: string              // link to match report article
  badge?: string                   // "UPSET" | "RESULT" | "LIVE"
  badgeColor?: 'red' | 'green' | 'blue' | 'gray'
}
```

### Fixture shape
```ts
{
  homeTeam, awayTeam: string
  homeFlag, awayFlag: string
  stage: string
  kickoff: string                  // ISO 8601
  venue?: string
  homeOdds, drawOdds, awayOdds?: string  // American odds e.g. "-280"
}
```

### MarketAlert shape
```ts
{
  text: string                     // headline
  detail?: string                  // supporting detail
  type: 'surge' | 'crash' | 'resolved' | 'info'
  timestamp: string                // ISO 8601
}
```

---

## How to Add a New Topic

1. Add a `PredictionMarket[]` array to `data/prediction-markets.ts`
2. Add a `PredictionTopic` object and export it
3. Create `app/predict/[sport]/[event]/page.tsx` — copy World Cup page, swap data
4. Run `npx tsx scripts/sync-registry.ts --write` to register in content_registry
5. Add the topic to `PREDICTION_TOPICS` array so it appears on the hub index

---

## How to Update Odds

Open `data/prediction-markets.ts`, update:
- `probability` (0-100 integer)
- `americanOdds` (string, e.g. "+400")
- `change24h` (integer, pp movement)
- `lastUpdated` (ISO 8601 timestamp)
- `status` — set to `'resolved'` when a market closes

Then run: `npx tsx scripts/sync-registry.ts --write`

---

## Data Sources

| Source | Cost | Latency | Use For |
|---|---|---|---|
| **Kalshi API** | Free (read) | ~30s | Tournament winner markets, political markets |
| **Polymarket API** | Free (read) | ~30s | Crypto-settled sports markets |
| **API-Football** | Free tier (100 req/day) / $20/mo | 30s-2min | Live scores, fixtures, lineups |
| **Sportmonks** | $20-100/mo | 5-30s | Expanded league coverage, stats |
| **Sportradar / Opta** | $1,000+/mo | <1s | Professional real-time feed (future) |

**Current approach:** Manual daily updates to `data/prediction-markets.ts`.  
**Next step:** `scripts/sync-markets.ts` — pulls Kalshi REST API at build time, auto-writes the data file.

---

## Build Roadmap

### Phase 1 — Build This Week (Live Events, July 1 2026)

#### 1. Wimbledon 2026
- **Route:** `/predict/tennis/wimbledon-2026`
- **Starts:** July 1, 2026 (tomorrow)
- **Why:** Nobody ranking for "Wimbledon 2026 Kalshi odds" yet. Zero editorial coverage.
- **Existing content:** 3 tennis articles already written:
  - `/tennis/wimbledon-2026-preview-contenders`
  - `/tennis/serena-williams-queens-club-2026-return`
  - `/tennis/queens-club-championships-2026-guide`
- **Key markets:** Djokovic to win, Alcaraz to win, Sinner to win, Swiatek to win (women's)
- **Fixtures:** Full draw released July 1 — 128 players, 2 weeks
- **SEO keywords:** `wimbledon 2026 odds`, `wimbledon 2026 Kalshi`, `who wins wimbledon 2026`

#### 2. NBA Finals 2026
- **Route:** `/predict/nba/2026-finals`
- **Status:** Series live — Knicks vs Spurs
- **Why:** Series is live right now. Knicks 52% on Kalshi.
- **Existing content:** `/news/nba-finals-2026-knicks-spurs-preview-prediction`
- **Key markets:** Knicks to win series, Spurs to win series, series length (5/6/7 games), MVP
- **Fixtures:** Games 5, 6, 7 (if needed)
- **SEO keywords:** `NBA Finals 2026 odds`, `Knicks Spurs prediction market`, `Kalshi NBA Finals`

#### 3. World Cup Round of 32
- **Route:** `/predict/world-cup/2026/round-of-32`
- **Starts:** July 1, 2026
- **Why:** Extends the existing World Cup hub. 32 matches to cover.
- **Existing content:** 34 match articles at `/world-cup/2026/`
- **Key markets:** Individual match winner markets on Kalshi
- **Fixtures:** Full R32 bracket — France vs Saudi Arabia, England vs Morocco, Brazil vs Switzerland, Argentina vs Ecuador, Spain vs USA

---

### Phase 2 — Build This Month (July 2026)

#### 4. The Open Championship 2026
- **Route:** `/predict/golf/open-championship-2026`
- **Dates:** July 16-19, 2026 — Royal Portrush, Northern Ireland
- **Why:** McIlroy on home soil. Huge search volume. Golf hub already exists.
- **Existing content:** `/golf` hub
- **Key markets:** McIlroy to win (+614), Scheffler to win (+733), Woods to win (+3233)
- **SEO keywords:** `Open Championship 2026 odds`, `Rory McIlroy Open 2026`, `Kalshi golf 2026`

#### 5. MLS Cup 2026
- **Route:** `/predict/mls/2026`
- **Why:** Season in full swing. 5 MLS articles already written.
- **Existing content:**
  - `/mls/messi-100-goal-contributions-toronto-fc-inter-miami-2026`
  - `/mls/san-diego-fc-1904-fairytale`
  - `/mls/lafc-black-gold-lockdown`
  - `/mls/cavan-sullivan-first-mls-goal-philadelphia-union`
  - `/mls/san-jose-quakes-defensive-resurgence`
- **Key markets:** Inter Miami to win MLS Cup, LAFC to win, Philadelphia Union to win
- **SEO keywords:** `MLS Cup 2026 odds`, `Inter Miami MLS Cup prediction`, `Kalshi MLS`

#### 6. MLB World Series 2026
- **Route:** `/predict/mlb/world-series-2026`
- **Why:** Dodgers heavy favorites at 22%. 4 MLB articles written.
- **Existing content:**
  - `/mlb/mlb-standings-june-2026`
  - `/mlb/home-run-prop-analysis-may-15-2026`
  - `/mlb/2026-season-standings-april-update`
  - `/mlb/robot-umpires-abs-challenge-2026`
- **Key markets:** Dodgers to win (+355), Yankees (+614), Phillies (+809)
- **SEO keywords:** `MLB World Series 2026 odds`, `Dodgers World Series prediction`, `Kalshi MLB`

---

### Phase 3 — Build This Quarter (Aug-Sep 2026)

#### 7. Premier League 2026/27 Title Race
- **Route:** `/predict/premier-league/2026-27`
- **Starts:** August 2026
- **Why:** New season. 5 PL articles already written. Massive search volume.
- **Existing content:** 5 Premier League match articles
- **Key markets:** Man City to win title, Arsenal to win, Liverpool to win
- **SEO keywords:** `Premier League 2026 winner odds`, `Premier League title prediction`, `Kalshi Premier League`

#### 8. Formula 1 2026 Championship
- **Route:** `/predict/formula-1/2026`
- **Why:** Season ongoing. `/formula-1` hub exists.
- **Existing content:** `/formula-1` hub, `/redbull` hub
- **Key markets:** Verstappen to win championship, Hamilton, Leclerc
- **SEO keywords:** `F1 2026 championship odds`, `Verstappen 2026 title`, `Formula 1 Kalshi`

#### 9. MLS Playoffs 2026
- **Route:** `/predict/mls/playoffs-2026`
- **Why:** Builds directly on MLS hub and MLS Cup hub
- **Existing content:** All MLS articles above
- **Key markets:** Conference winners, MLS Cup finalist markets

---

## SEO Opportunity Summary

These are the keywords with **zero current editorial coverage** that we can own:

| Keyword | Monthly Searches (est.) | Competition |
|---|---|---|
| `wimbledon 2026 odds` | 40K+ | None |
| `wimbledon 2026 Kalshi` | 8K | None |
| `NBA Finals 2026 prediction market` | 25K | Low |
| `World Cup 2026 Kalshi odds` | 30K | None |
| `Open Championship 2026 odds` | 15K | Low |
| `MLS Cup 2026 prediction` | 5K | None |
| `MLB World Series 2026 Kalshi` | 10K | None |
| `Premier League 2026 winner odds` | 35K | Low |
| `F1 2026 championship prediction market` | 12K | None |

**The editorial angle nobody owns:** We are not a betting site. We are the editorial layer on top of prediction markets — explaining what the markets mean, why they moved, and what happened on the pitch that caused the move. That framing is unique and defensible.

---

## Future: Automated Market Sync

Once we are ready to move beyond manual updates, the pipeline is:

```
scripts/sync-markets.ts
  → Kalshi REST API (GET /markets?series=worldcup)
  → Polymarket subgraph (GraphQL)
  → Writes updated probabilities to data/prediction-markets.ts
  → Runs as part of npm run build (prebuild hook)
  → ISR revalidate = 3600 means pages refresh hourly
```

For real-time (sub-minute) updates, the upgrade path is:
```
Railway cron job (every 5 min)
  → Kalshi WebSocket or polling
  → Writes to Supabase live_markets table
  → /predict pages switch to force-dynamic + Supabase read
  → Client polls /api/markets every 30s for live score updates
```

This is the architecture that gets us to "0 ping down to the pitch."
