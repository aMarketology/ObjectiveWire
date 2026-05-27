# ZeroWire | ROADMAP
## Last Updated: May 6, 2026

> **Mission:** Reach 100K monthly organic sessions. Become the verified-first news platform Google News trusts.
> **Production:** `objectivewire.org` | Railway | Next.js 15 + React 19 + Supabase + Tailwind
> **Repo:** `aMarketology/ZeroWire` | Branch: `main`

---

## Current State | May 2026 Snapshot

| Metric | Count | Notes |
|---|---|---|
| Total page routes | 151 | `app/**/page.tsx` (excl. admin) |
| Registry entries (local JSON) | 120 | `lib/registry-data.json` |
| Pages not yet in registry | 31 | DB stubs, utility pages |
| Named author pages | 5 | jack-sterling, jack-wang, jack-brennan, alfansa, conan-boyle |
| Articles attributed to named authors | 3 | jack-brennan (1), objectwire-entertainment-desk (1), objectwire-sports-desk (1) |
| JackArticle stubs in Supabase | ~28 | In `jack_articles` table, not in registry, need internal links |
| Google News publisher registration | Not started | Blocking Top Stories eligibility |
| High-traffic content pillars live | 0 | GTA 6, Switch 2, OpenAI, Apple, Google, Finance all missing |

### Registry Breakdown by Category (May 2026)

| Category | Count | Priority |
|---|---|---|
| Creator | 37 | Low — oversaturated |
| YouTube | 33 | Low — thin traffic |
| Sports | 13 | Medium |
| Meta | 12 | Medium |
| Cars | 6 | Medium |
| MLS | 4 | Low |
| MLB | 3 | Low |
| Gaming / Tech / AI / Finance / News | 0 | **Critical gap** |

**The core problem:** 58% of the registry is Creator + YouTube. Zero gaming, tech, AI, finance, or news category entries. The highest-traffic search verticals are completely absent.

---

## Architecture Status

### What Is Solid

| System | Status | File |
|---|---|---|
| Local content registry | Operational | `lib/registry-data.json` (120 entries) |
| Registry sync at build | Operational | `scripts/sync-registry.ts` (prebuild hook) |
| Registry service layer | Operational | `lib/registry-service.ts` |
| Sitemap (main) | Operational | `app/sitemap.ts` |
| News sitemap | Operational | `app/news-sitemap.xml/route.ts` |
| RSS feed | Operational | `app/rss.xml/route.ts` |
| JSON-LD (NewsArticle + BreadcrumbList) | Operational | `components/articles/NewsArticle.tsx` |
| Article components (static) | Operational | `NewsArticle`, `JackArticle`, `CreatorArticle` |
| Author pages | 5 built | `app/authors/[slug]/page.tsx` |
| Canonical URLs | Enforced per-page | `validate-canonicals.ts` at prebuild |
| No static robots.txt/sitemap.xml | Validated | `validate-public.ts` at prebuild |

### What Is Broken or Missing

| Gap | Impact | Urgency |
|---|---|---|
| ~28 JackArticle Supabase stubs have 0 internal links | Google ignores orphaned pages | P1 |
| Zero high-traffic pillar content (GTA 6, OpenAI, etc.) | No organic traffic growth | P1 |
| Google Publisher Center not registered | Ineligible for Google News/Top Stories | P1 |
| Author attribution: only 3 registry entries have `authorSlug` | Author pages show no articles | P1 |
| 31 pages missing from registry | Invisible to sitemap, RSS, related articles | P2 |
| No `imageUrl` on most articles | Ineligible for Google Image Top Stories | P2 |
| Jack Brennan bio claims "10+ articles" but only 1 exists | Credibility issue | P2 |
| No hub pages for: GTA 6, Switch 2, OpenAI, Google, Apple, Nvidia, Finance | No topical authority clusters | P2 |
| Category field inconsistency: Gaming vs Video Games, Tech vs Technology | Weak topical signals | P3 |

---

## Phase 1 | Fix the Foundation (May 6–May 20)

**Goal:** Make every existing page count. Fix what's broken before building new.

### 1.1 Google Publisher Center Registration — P1 (30 min)

Required for Google News eligibility and Top Stories placement. Unblocks 3x CTR on news content.

- [ ] Register at [publishercenter.google.com](https://publishercenter.google.com)
- [ ] Verify ownership of `objectivewire.org` (Google Search Console)
- [ ] Upload 1000x1000 publisher logo
- [ ] Submit `/news-sitemap.xml`
- [ ] Set publication name: "ObjectWire"

Also register at [Bing PubHub](https://www.bing.com/webmasters/pubhub) — 10 min.

---

### 1.2 Fix JackArticle Internal Links — P1 (1–2 days)

There are ~28 JackArticle pages in `jack_articles` with 0 internal links. Google's internal link signal is weak across the entire site. Every JackArticle needs minimum 5 internal links per the OStandard spec.

**Priority list (from `Docs/seo-reports/internal-links-gap.csv`):**

| Slug | Pillar | Fix |
|---|---|---|
| `/trump/god-squad-gulf-drilling-esa-exemption` | Investigations | Add 4 more internal links |
| `/video-games/forza-horizon-6/news/...` | Video Games | Link to `/video-games` hub, 3 siblings |
| `/video-games/battlefield-6/news/...` | Video Games | Link to `/video-games` hub |
| `/finance/dollar-surges-euro-slumps-...` | Finance | Link to `/finance` hub (create it) |
| `/tech/news/...` (6 articles) | Tech / AI | Link to `/tech` or `/open-ai` hub |
| `/trump/...` (3 articles) | Politics | Cross-link all 3, link to politics hub |
| `/google/...` (2 articles) | Google | Link to `/google` hub |

The fix is simple: open each `page.tsx` DB stub or static page, add `<Link>` calls to siblings and hub.

---

### 1.3 Sync Registry for All DB Stubs — P1 (1 day)

28 JackArticle stubs live in Supabase but are absent from `registry-data.json`. This means they are:
- Not in `sitemap.xml`
- Not in `news-sitemap.xml`
- Not in RSS feed
- Not in related articles
- Invisible to author pages

**Fix:** Convert high-value DB stubs to static `NewsArticle` or `JackArticle` pages with content in code. Then re-run `npx tsx scripts/sync-registry.ts --write`. Start with the Tech/AI cluster — highest traffic potential.

Priority conversion order:
1. `/technology/cursor` — Cursor $2B ARR (high search volume)
2. `/tech/news/tsmc-asml-record-earnings-q1-2026-ai-chip-demand` — chip demand
3. `/video-games/forza-horizon-6/news/pre-launch-511k-steam-presales-alinea-analytics-2026`
4. `/finance/dollar-surges-euro-slumps-jobs-report-april-3-2026`
5. `/entertainment/hbo-max/euphoria-season-3-premiere-hbo-5-year-time-jump-2026`

---

### 1.4 Fix Author Attribution — P2 (2 hours)

Only 3 of 120 registry entries have a named `authorSlug`. The author pages show nothing because `AuthorArticlesServer` queries registry by `authorSlug`. Every `NewsArticle` and `JackArticle` page needs an `author` prop with `authorSlug`.

**Standard prop pattern:**
```tsx
author={{ name: 'Jack Sterling', role: 'Senior Reporter', authorSlug: 'jack-sterling' }}
```

Author slugs to target:
- `jack-sterling` — crypto, finance, tech investigations
- `jack-wang` — gaming, tech, Asia coverage
- `jack-brennan` — investigations, politics, environmental
- `alfansa` — entertainment, culture, influencer
- `conan-boyle` — sports, MLS, soccer

After adding `authorSlug` props, run `npx tsx scripts/sync-registry.ts --write` to propagate.

---

### 1.5 Jack Brennan Author Page Audit — P2 (1 day)

The bio claims "10+ Published Articles" but only 1 exists in registry. Options:
- Update the stat to match reality ("1+ Published Articles") until more are written
- Write 2–3 more Jack Brennan investigations to match the claim

Additional Jack Brennan article ideas (his beat: environmental law, national security, federal agencies):
- Follow-up: `CBD/Earthjustice TRO against God Squad exemption` — the D.C. District court case
- ESA enforcement rollback: `Trump admin suspends NMFS vessel speed restrictions for Rice's whale`
- FERC energy infrastructure: `FERC fast-tracks Gulf LNG terminal permits under national security rule`

---

## Phase 2 | Build the Content Engine (May 20 – June 30)

**Goal:** Launch 5 high-traffic content pillars. Hit 500+ indexed pages.

### 2.1 Priority Pillar Hubs to Build

All hubs use `Hub.tsx` (already battle-tested in `/video-games`, `/crypto`, `/mls`, `/influencer`, `/mha`).

| Hub URL | Keyword Target | Monthly Volume | Sub-articles needed |
|---|---|---|---|
| `/video-games/gta-6` | "GTA 6" | 5M+/mo | Pre-orders, PC release, map, characters, online, specs (6 articles) |
| `/video-games/switch2` | "Nintendo Switch 2" | 2M+/mo | Specs, games, price, Joy-Con, backward compat (5 articles) |
| `/open-ai` | "OpenAI" | 3M+/mo | GPT-5 pricing, o1 updates, government deals, enterprise (4–5 articles) |
| `/google` | "Google news" | 2M+/mo | Gemini 3, Pixel 11, AI Plus, Project Genie (4 articles, 2 stubs exist) |
| `/finance` | "finance news" | 500K+/mo | Fed rate, bank earnings, crypto regulation, market moves (5 articles) |
| `/apple` | "Apple news" | 1M+/mo | iPhone 18, WWDC 2026, Core AI, M5 MacBook (11 pages exist, add 4 more) |

**Hub page pattern:**
```tsx
// app/video-games/gta-6/page.tsx
export const revalidate = 3600;  // ISR, 1-hour TTL for hub pages
```

Each hub must link to all sub-articles. Each sub-article must link back to the hub.

---

### 2.2 GTA 6 Cluster | Highest Priority

Search volume: 5M+ monthly. Launch timeline: Fall 2026. **Write this now** while anticipation is building.

| Article | Slug | Component |
|---|---|---|
| Hub | `/video-games/gta-6` | `Hub.tsx` |
| Release Date | `/video-games/gta-6/release-date` | `NewsArticle` |
| Pre-Orders | `/video-games/gta-6/pre-order` | `NewsArticle` |
| System Requirements | `/video-games/gta-6/system-requirements` | `NewsArticle` |
| Map | `/video-games/gta-6/map` | `NewsArticle` |
| PC Release | `/video-games/gta-6/pc-release-date` | `NewsArticle` |
| Characters | `/video-games/gta-6/characters` | `NewsArticle` |

All should have `authorSlug: 'jack-wang'` (gaming coverage).

---

### 2.3 OpenAI Cluster

Search volume: 3M+ monthly. Only 3 pages exist now.

| Article | Slug | Author |
|---|---|---|
| Hub | `/open-ai` | Hub.tsx |
| GPT-5 Pricing | `/open-ai/gpt-5-pricing` | jack-sterling |
| GPT-5 vs GPT-4 | `/open-ai/gpt-5-vs-gpt-4` | jack-sterling |
| OpenAI o1 Updates | `/open-ai/o1-model-updates-2026` | jack-sterling |
| Enterprise / Government deals | `/open-ai/government-deals-2026` | jack-brennan |

---

### 2.4 Publishing Cadence

Target: **5–7 new articles per week.** Minimum to maintain Google News freshness signal.

| Day | Pillar | Author |
|---|---|---|
| Monday | Tech / AI (OpenAI, Google) | jack-sterling |
| Tuesday | Gaming (GTA 6 cluster) | jack-wang |
| Wednesday | Finance / Investigations | jack-brennan |
| Thursday | Entertainment / Culture | alfansa |
| Friday | Sports / Creator | jack-sterling or conan-boyle |
| Weekend | Gaming hub article or definition page | any |

---

## Phase 3 | Scale to 500+ Pages (July – September 2026)

**Goal:** Programmatic + editorial mix. Establish topical authority in 5 verticals.

### 3.1 Definition Pages (`/define/`)

Currently ~13 pages. Target: 200+.

High-value examples: "What is CUDA", "What is LLM", "What is a prediction market", "What is ESA Section 7", "What is RTX 5090", "What is Gemini 2.5 Pro".

Low competition, high volume. Each definition page should be 400–700 words with `NewsArticle` component and internal links to relevant cluster pages.

---

### 3.2 Evergreen Company Profiles

| Path | Target | Component |
|---|---|---|
| `/nvidia` | Hub + 5 sub-articles (RTX 5090, GTC, CUDA, GB200, NIM) | `Hub.tsx` + `NewsArticle` |
| `/apple` | 4 more sub-articles to fill out existing 11 | `NewsArticle` |
| `/google` | Fill out 4 stubs | Convert `JackArticleDB` ? static |
| `/amazon` | AWS stubs already exist, convert to static | `NewsArticle` |

---

### 3.3 Content Automation: OG Images

Every article needs a 1200x675 OG image with `imageUrl`, `imageWidth: 1200`, `imageHeight: 675` in the registry. Missing images block Google Top Stories.

**Options:**
1. Vercel OG image generation at `/api/og?title=...&category=...` — generates on demand, zero manual work
2. Use Unsplash API for hero images — key already stored in user memory

---

## Phase 4 | Monetization + Distribution (Q4 2026)

| Channel | Action |
|---|---|
| Google AdSense | Apply once Google News approval in hand |
| Newsletter | Already built (`NewsletterSignupInline`). Goal: 500 subscribers by end of year |
| Apple News | Submit after Google News approval |
| MSN News | Register at Microsoft PubHub after Google News |
| ObjectWire BlackBook | Prediction market integration — see `Docs/BLACKBOOK_BLUEPRINT.md` |

---

## Immediate Action Queue (This Week)

Ordered by impact-to-effort ratio:

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Register Google Publisher Center | 30 min | Unlocks Top Stories |
| 2 | Convert 5 high-value JackArticle stubs to static pages | 1 day | Adds to sitemap/RSS |
| 3 | Write GTA 6 hub + release date article | 2 hours | 5M+/mo keyword cluster |
| 4 | Add `authorSlug` props to top 20 articles | 2 hours | Fixes all 5 author pages |
| 5 | Write 2 more Jack Brennan articles | 1 day | Fixes "10+ articles" bio claim |
| 6 | Create `/finance` hub page | 1 hour | Anchor for finance cluster |
| 7 | Run registry sync after all above | 5 min | Propagates everything |

---

## Key Commands

```bash
# Sync registry after adding/editing pages
npx tsx scripts/sync-registry.ts --write

# Check current state
npm run wiki:status

# Full build (runs prebuild pipeline: validate + sync + build)
npm run build

# Audit internal link gaps
# See Docs/seo-reports/internal-links-gap.csv
```

---

## Files to Know

| File | Purpose |
|---|---|
| `lib/registry-data.json` | Single source of truth for all content metadata |
| `scripts/sync-registry.ts` | Scans app/**/page.tsx and writes registry |
| `lib/registry-service.ts` | API layer: getAllEntries, getArticlesByCategory, getRelatedArticles, etc. |
| `components/articles/NewsArticle.tsx` | Default component for all new articles |
| `components/Hub.tsx` | Hub page component for all pillar pages |
| `.github/copilot-instructions.md` | Full OStandard and architecture rules |
| `Docs/seo-reports/internal-links-gap.csv` | All pages with internal link deficits |

---

## Success Metrics (12-Month Targets)

| Metric | Now | 3-Month | 6-Month | 12-Month |
|---|---|---|---|---|
| Indexed pages | ~151 | 300 | 500 | 800+ |
| Registry entries | 120 | 300 | 500 | 800+ |
| Monthly organic sessions | Unknown | 5K | 25K | 100K |
| Articles with author attribution | 3 | 50 | 150 | 400+ |
| Content pillars with hub + 5 sub-articles | 0 | 3 | 6 | 12 |
| Google News approved | No | Target | Yes | Yes |
| Newsletter subscribers | 0 | 100 | 500 | 2,000 |
