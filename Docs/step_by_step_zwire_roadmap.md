# ZWire (ZeroWire) | Step-by-Step Roadmap
## Last Updated: May 6, 2026

> **Domain:** `objectivewire.org` | **Brand:** ZWire (display) / ZeroWire (long form)
> **Stack:** Next.js 15, React 19, Supabase, Tailwind CSS, Railway
> **Goal:** 100K monthly organic sessions. Google News approved.

---

## Where We Are Right Now (May 6, 2026)

| What | Number | Context |
|---|---|---|
| Page routes | 151 | `app/**/page.tsx` (excl. admin) |
| Registry entries | 120 | `lib/registry-data.json` — local JSON, no Supabase |
| Pages not in registry | 31 | DB stubs, utility pages |
| Named author pages | 5 | jack-sterling, jack-wang, jack-brennan, alfansa, conan-boyle |
| Articles attributed to authors | 3 | jack-brennan (1), entertainment-desk (1), sports-desk (1) |
| JackArticle Supabase stubs with 0 internal links | ~28 | Invisible to Google |
| High-traffic content pillars live | 0 | GTA 6, Switch 2, OpenAI, Apple, Finance all missing |
| Google Publisher Center | Not registered | Blocking Top Stories |

**The core problem:** 58% of the registry is Creator + YouTube. Zero gaming, tech, AI, finance, or news entries. The highest-traffic verticals are completely absent from the registry — and therefore from the sitemap, RSS, and related articles.

---

## Architecture: How the Build Works

Understanding this saves hours of debugging.

```
git push main
  +-- Railway triggers: npm run build
        +-- prebuild (runs automatically before build):
              1. validate-public.ts      ? fails if robots.txt or sitemap.xml exist in /public
              2. validate-canonicals.ts  ? fails if a hardcoded canonical is in any layout
              3. sync-registry.ts --write ? scans app/**/page.tsx, writes lib/registry-data.json
        +-- next build
              +-- Generates static pages, ISR hub pages, API routes
```

### Key files

| File | Purpose |
|---|---|
| `lib/registry-data.json` | Single source of truth for all content metadata |
| `scripts/sync-registry.ts` | Scans app/**/page.tsx and writes registry (runs at prebuild) |
| `lib/registry-service.ts` | Query layer: getAllEntries, getArticlesByCategory, getRelatedArticles, etc. |
| `app/sitemap.ts` | Main sitemap — reads registry-data.json directly |
| `app/news-sitemap.xml/route.ts` | Google News sitemap — rolling 2-day window from registry |
| `app/rss.xml/route.ts` | RSS feed — reads registry, last 30 entries |
| `components/articles/NewsArticle.tsx` | Default component for all new articles |
| `components/Hub.tsx` | Hub page component (used by Video Games, Crypto, MLS, Influencer, MHA) |
| `components/articles/NewsArticleSchema.tsx` | JSON-LD: OrganizationSchema, NewsArticleSchema, WebSiteSchema |
| `lib/site-config.ts` | SITE_CONFIG: name="ZWire", url="https://www.objectivewire.org" |

### Article routing rule (critical)

New articles: body content lives in `page.tsx`. No Supabase. Revalidate at build or ISR.

```tsx
// NEW ARTICLE — content in code
import { NewsArticle } from '@/components/articles/NewsArticle';
export const revalidate = 86400;   // static, re-generated daily
// OR omit revalidate entirely for fully static

// LEGACY DB STUB — body in Supabase
import { NewsArticleDB } from '@/components/NewsArticleDB';
export const dynamic = 'force-dynamic';
```

Never use `*DB` components for new content. They call `notFound()` when Supabase has no matching row.

---

## STAGE 1 | Brand + Technical Foundation
### (Do these once — most are already done)

---

### Step 1.1 | Brand Rename to ZWire / ZeroWire ? DONE (May 6, 2026)

The following files were updated to reflect the ZWire brand:

| File | Change |
|---|---|
| `lib/site-config.ts` | `name: "ZWire"`, `author: "ZWire Editorial"` |
| `components/articles/NewsArticleSchema.tsx` | OrganizationSchema, publisher fields ? "ZeroWire" / "ZWire" |
| `components/SEOWrapper.tsx` | `ORG_NAME = 'ZeroWire'` |
| `app/layout.tsx` | Footer text + copyright ? ZWire |
| `app/about/page.tsx` | All "ObjectWire" ? "ZeroWire" |
| `app/editorial-standards/page.tsx` | All "ObjectWire" ? "ZeroWire" |
| `app/editorial-standards/authors/page.tsx` | siteName, descriptions updated |

**Domain stays `objectivewire.org`.** The brand shown on the site and in Google's knowledge graph is now ZeroWire.

---

### Step 1.2 | Local Content Registry Migration ? DONE

`content_registry` Supabase table is replaced by `lib/registry-data.json`. All SEO files (sitemap, RSS, news sitemap) read from local JSON. Zero Supabase reads at render time for content listings.

Workflow: edit a `page.tsx` ? run `npx tsx scripts/sync-registry.ts --write` ? changes propagate everywhere.

---

### Step 1.3 | Canonical + Public Directory Validation ? DONE

- `scripts/validate-canonicals.ts` — blocks build if any layout has a hardcoded canonical
- `scripts/validate-public.ts` — blocks build if `public/robots.txt` or `public/sitemap.xml` exist
- Both run as part of `prebuild` — no manual checks needed

---

### Step 1.4 | Google Publisher Center Registration ?? TODO (30 min)

Required to be eligible for Google News Top Stories. Do this before writing any more news articles.

**Steps:**

1. Go to [publishercenter.google.com](https://publishercenter.google.com)
2. Click "Add publication"
3. Fill in:
   - Publication name: `ZeroWire`
   - Website URL: `https://www.objectivewire.org`
4. Verify site ownership via Google Search Console (DNS TXT or HTML file method)
5. Upload publisher logo — **must be 1000x1000 square PNG**
   - The current `objectwire-logo.png` (horizontal wordmark) does not meet this requirement
   - Create a square ZWire logo: white background, "ZW" or "ZeroWire" centered, min 1000x1000
   - Place it at `public/zwire-logo-square.png` and use URL `https://www.objectivewire.org/zwire-logo-square.png`
   - Update `components/articles/NewsArticleSchema.tsx` logo URL to this new file
6. News settings:
   - News sitemap URL: `https://www.objectivewire.org/news-sitemap.xml`
   - Content language: English
   - Country: United States
7. Editorial policy URLs:
   - About / ownership: `https://www.objectivewire.org/about`
   - Editorial standards: `https://www.objectivewire.org/editorial-standards`
   - Corrections: `https://www.objectivewire.org/corrections`
8. Submit. Google reviews within 1–7 days.

**Also register on Bing News PubHub** (10 min): [bing.com/webmasters/pubhub](https://www.bing.com/webmasters/pubhub)

---

### Step 1.5 | Google Search Console Setup ?? TODO (if not already done)

Required before Publisher Center verification works.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property ? URL prefix ? `https://www.objectivewire.org`
3. Verify via DNS TXT record (add to Railway or your DNS provider)
4. Submit sitemaps:
   - `https://www.objectivewire.org/sitemap.xml`
   - `https://www.objectivewire.org/news-sitemap.xml`

---

## STAGE 2 | Fix What Exists Before Building New
### (Do in Week 1–2)

The 28 JackArticle Supabase stubs have 0 internal links. Google sees these as thin orphan pages. Fix them before creating new content.

---

### Step 2.1 | Convert High-Value JackArticle Stubs to Static Pages (1–2 days)

These stubs live in `jack_articles` Supabase but are NOT in `registry-data.json`. That means they are invisible to: sitemap, RSS, news sitemap, related articles, author pages.

**Priority conversion order** (highest traffic potential first):

| Current stub slug | Route | Why |
|---|---|---|
| `technology-cursor` | `/technology/cursor` | Cursor $2B ARR — high search volume |
| `tech-news-tsmc-asml-record-earnings-q1-2026-ai-chip-demand` | `/tech/news/tsmc-asml-...` | Chip demand, evergreen |
| `video-games-forza-horizon-6-news-pre-launch-511k-steam-presales` | `/video-games/forza-horizon-6/news/...` | 511K Steam pre-sales |
| `finance-dollar-surges-euro-slumps-jobs-report-april-3-2026` | `/finance/dollar-surges-...` | Finance cluster anchor |
| `entertainment-hbo-max-euphoria-season-3-premiere-hbo-5-year-time-jump-2026` | `/entertainment/hbo-max/...` | Entertainment cluster |

**Conversion process for each stub:**

```tsx
// BEFORE: DB stub (content in Supabase)
import { JackArticleDB } from '@/components/JackArticleDB';
export const dynamic = 'force-dynamic';
export default function Page() { return <JackArticleDB slug="..." />; }

// AFTER: Static page (content in code)
import { NewsArticle } from '@/components/articles/NewsArticle';
export const revalidate = 86400;
export const metadata: Metadata = { ... };
export default function Page() {
  return (
    <NewsArticle
      title="..."
      author={{ name: 'Jack Sterling', role: 'Reporter', authorSlug: 'jack-sterling' }}
      ...
    >
      {/* full article body JSX */}
    </NewsArticle>
  );
}
```

After each conversion, run: `npx tsx scripts/sync-registry.ts --write`

---

### Step 2.2 | Add Internal Links to Existing Pages (1 day)

See `Docs/seo-reports/internal-links-gap.csv` for the full list of pages with 0 internal links.

Every page needs minimum links per type:

| Type | Min internal links |
|---|---|
| NewsArticle | 4 |
| JackArticle | 5 |
| CreatorArticle | 3 |

**Required link pattern:**
```tsx
// Always blue + underlined, no exceptions
<Link href="/video-games/gta-6" className="text-blue-600 hover:text-blue-800 underline">
  GTA 6 hub
</Link>

<a href="https://source.com" target="_blank" rel="noopener noreferrer"
   className="text-blue-600 hover:text-blue-800 underline">
  source name
</a>
```

**Quick wins (link to hub from every sub-article):**
- All `/trump/*` articles ? link to each other + `/politics` hub (when built)
- All `/tech/*` articles ? link to each other + a tech hub
- All `/video-games/*` articles ? link to `/video-games` hub (already exists)
- All `/finance/*` articles ? link to `/finance` hub (build it in Stage 3)

---

### Step 2.3 | Fix Author Attribution (2 hours)

Only 3 of 120 registry entries have a named `authorSlug`. The author pages show nothing because `AuthorArticlesServer` queries registry by `authorSlug`. Fix: add `author` prop with `authorSlug` to every article page.

**Author slugs:**

| Author | Slug | Beat |
|---|---|---|
| Jack Sterling | `jack-sterling` | Crypto, finance, tech investigations |
| Jack Wang | `jack-wang` | Gaming, tech, Asia |
| Jack Brennan | `jack-brennan` | Environmental law, national security, regulations |
| Alfansa | `alfansa` | Entertainment, culture, influencer |
| Conan Boyle | `conan-boyle` | Sports, MLS, soccer |

**Add to NewsArticle prop:**
```tsx
author={{ name: 'Jack Sterling', role: 'Senior Reporter', authorSlug: 'jack-sterling' }}
```

After adding props to 20+ articles: `npx tsx scripts/sync-registry.ts --write`

---

### Step 2.4 | Fix Jack Brennan Author Page (1 day)

Currently the bio says "10+ Published Articles" but only 1 exists in registry. Either:
- Update stat to match reality (easy fix), OR
- Write 2–3 more Jack Brennan investigations (recommended)

**Suggested Jack Brennan articles (his beat: environmental law, national security):**

1. `/trump/esa-rice-whale-tro` — CBD/Earthjustice TRO against God Squad exemption in D.C. District Court
2. `/trump/ferc-gulf-lng-terminal-national-security` — FERC fast-tracks Gulf LNG permits under national security rule
3. `/politics/nmfs-vessel-speed-restrictions-suspended-rice-whale` — NMFS suspends whale vessel speed restrictions after God Squad vote

Each should have `authorSlug: 'jack-brennan'` in the author prop. Run sync after creating.

**Quick stat fix if not writing new articles:**
```tsx
// app/authors/jack-brennan/page.tsx — change the HIGHLIGHTS array
const HIGHLIGHTS = [
  { stat: '2+', label: 'Years Reporting' },
  { stat: '8+', label: 'Beats Covered' },
  { stat: '1+', label: 'Published Articles' },  // ? lower until more are written
];
```

---

## STAGE 3 | Build High-Traffic Content Pillars
### (Weeks 2–6)

---

### Step 3.1 | GTA 6 Cluster — Highest Priority

**Search volume: 5M+/month.** Build this cluster before the Fall 2026 launch window drives searches to peak.

**Build order:**

| Step | File | Component | Author |
|---|---|---|---|
| 1 | `app/video-games/gta-6/page.tsx` | `Hub.tsx` | — |
| 2 | `app/video-games/gta-6/release-date/page.tsx` | `NewsArticle` | jack-wang |
| 3 | `app/video-games/gta-6/pre-order/page.tsx` | `NewsArticle` | jack-wang |
| 4 | `app/video-games/gta-6/system-requirements/page.tsx` | `NewsArticle` | jack-wang |
| 5 | `app/video-games/gta-6/map/page.tsx` | `NewsArticle` | jack-wang |
| 6 | `app/video-games/gta-6/pc-release-date/page.tsx` | `NewsArticle` | jack-wang |
| 7 | `app/video-games/gta-6/characters/page.tsx` | `NewsArticle` | jack-wang |

**Hub page pattern:**
```tsx
// app/video-games/gta-6/page.tsx
export const revalidate = 3600;  // ISR — hub pages update hourly
```

**Interlinking rule:** every sub-article links to the hub in paragraph 1–3. Hub links to every sub-article in a card grid.

---

### Step 3.2 | OpenAI Cluster

**Search volume: 3M+/month.** Currently only 3 pages exist.

| File | Component | Author |
|---|---|---|
| `app/open-ai/page.tsx` | `Hub.tsx` | — |
| `app/open-ai/gpt-5-pricing/page.tsx` | `NewsArticle` | jack-sterling |
| `app/open-ai/gpt-5-vs-gpt-4/page.tsx` | `NewsArticle` | jack-sterling |
| `app/open-ai/o1-model-updates-2026/page.tsx` | `NewsArticle` | jack-sterling |
| `app/open-ai/government-deals-2026/page.tsx` | `NewsArticle` | jack-brennan |

---

### Step 3.3 | Finance Hub

Anchors the finance cluster. The `/finance/dollar-surges-...` stub (from Stage 2) becomes the first sub-article.

```tsx
// app/finance/page.tsx
export const revalidate = 3600;
```

Sub-articles: Fed rate decisions, bank earnings, crypto regulation, market index moves.

---

### Step 3.4 | Publishing Cadence

Target: **5–7 new articles per week** to maintain Google News freshness signal.

| Day | Vertical | Author |
|---|---|---|
| Monday | Tech / AI (OpenAI, Google) | jack-sterling |
| Tuesday | Gaming (GTA 6 cluster) | jack-wang |
| Wednesday | Finance / Investigations | jack-brennan |
| Thursday | Entertainment / Culture | alfansa |
| Friday | Sports / Creator | conan-boyle |
| Weekend | Definition page or hub article | any |

---

## STAGE 4 | Per-Article Quality Checklist
### (Every single article, no exceptions)

Run through this before every publish:

```
METADATA
? title = 60 chars, primary keyword first, no em dashes, no brand suffix
? description 130–155 chars, primary keyword in first 60 chars
? keywords[] — 10–18 specific phrases
? alternates.canonical set to full https://www.objectivewire.org/... URL
? openGraph block: title, description, image (1200x675), publishedTime, section, authors[]
? twitter card block
? No em dashes (—) anywhere in metadata. Use | in headings, comma in prose.

CONTENT
? No generic H2s ("Background", "Overview" are banned)
? H2s use | as separator, are keyword-rich and niche
? Every factual claim traceable to a primary source
? Named figures, specific numbers, dates
? No unsourced claims

LINKS
? Min 4 internal links (NewsArticle) | 5 (JackArticle) | 3 (CreatorArticle)
? Hub backlink in first 3 paragraphs
? 2–3 sibling article cross-links
? Author page link (/authors/[slug])
? All links: className="text-blue-600 hover:text-blue-800 underline"
? External links: target="_blank" rel="noopener noreferrer"

COMPONENTS
? author prop with authorSlug set (so article appears on author page)
? breadcrumbs array with 3 levels minimum
? tags[] — 4–8 proper nouns, no generic terms
? category — one of: News, Tech, Finance, Entertainment, World, Politics, Science, Sports, Culture, Crypto, Gaming
? publishDate — human string, e.g. "May 6, 2026"
? topicTag set (gaming, politics, technology, finance, entertainment, etc.)

AFTER WRITING
? npx tsx scripts/sync-registry.ts --write
? Verify new entry appears in lib/registry-data.json with authorSlug populated
? Check no TypeScript errors
```

---

## STAGE 5 | Scale to 500+ Pages
### (July – September 2026)

---

### Step 5.1 | Definition Pages (`/define/`)

Currently ~13 pages. Target: 200+. Low competition, high volume, zero time pressure.

Pattern: "What is [term]", 400–700 words, `NewsArticle` component, `revalidate = false` (fully static), internal links to related cluster pages.

Priority terms: CUDA, LLM, Transformer, RAG, LoRA, ESA Section 7, God Squad, CLOB, Prediction Market, RTX 5090, Inference, Fine-Tuning, Vector Database, VRAM, Tokenizer...

---

### Step 5.2 | Evergreen Company Profiles

| Path | Articles to add |
|---|---|
| `/nvidia` | Hub + RTX 5090, GTC 2026, CUDA 13, GB200, NIM |
| `/apple` | 4 more sub-articles (iPhone 18 specs, WWDC 2026 preview, Core AI, M5 MacBook) |
| `/google` | Convert 2 existing stubs + 2 new (Gemini 3, Project Genie) |
| `/amazon` | AWS stub exists, convert to static + 2 new |

---

### Step 5.3 | OG Image Coverage

Every article needs `imageUrl` (1200x675+) in the registry for Google Top Stories eligibility.

Two options:
1. **Vercel OG generation** — build `/api/og?title=...&category=...` endpoint that generates images on demand. Set these URLs as `imageUrl` in metadata. Zero manual effort per article.
2. **Unsplash API** — source images at article creation time. Key stored in user memory.

Whichever approach: update `imageUrl`, `imageWidth: 1200`, `imageHeight: 675` in every article's metadata openGraph block. Sync picks this up automatically.

---

## STAGE 6 | Monetization + Distribution
### (Q4 2026)

| Channel | Prerequisite | Action |
|---|---|---|
| Google AdSense | Google News approved | Apply at [google.com/adsense](https://google.com/adsense) |
| Apple News | Google News approved | Submit at Apple News Publisher |
| MSN News | 50+ articles, editorial standards live | Register at Microsoft PubHub |
| Newsletter | Already built | Goal: 500 subscribers by EOY |
| ZeroWire BlackBook | Separate build | Prediction market integration — see `Docs/BLACKBOOK_BLUEPRINT.md` |

---

## Key Commands Reference

```bash
# After writing or editing any page.tsx
npx tsx scripts/sync-registry.ts --write

# Check current build state
npm run wiki:status

# Full build (runs: validate-public ? validate-canonicals ? sync-registry ? next build)
npm run build

# Check for TypeScript errors on a specific file
npx tsc --noEmit

# Audit internal link gaps
# See: Docs/seo-reports/internal-links-gap.csv
```

---

## OStandard Non-Negotiables (Zero Exceptions)

| Rule | Wrong | Correct |
|---|---|---|
| No em dashes | `Title — Subtitle` | `Title \| Subtitle` |
| No em dashes in prose | `The update — which ships Friday — adds X` | `The update, which ships Friday, adds X` |
| No brand suffix in title | `GTA 6 Release Date \| ZeroWire` | `GTA 6 Release Date \| Fall 2026 Window` |
| H2 separators | `H2: Background` | `H2: GTA 6 Background \| Vice City Setting` |
| Generic headings banned | `## Overview` | `## GTA 6 Map \| Vice City Confirmed` |
| Link styling | `<Link href="...">text</Link>` | `<Link href="..." className="text-blue-600 hover:text-blue-800 underline">text</Link>` |
| External links | `<a href="...">text</a>` | `<a href="..." target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">text</a>` |

---

## 12-Month Success Targets

| Metric | May 2026 | Aug 2026 | Nov 2026 | May 2027 |
|---|---|---|---|---|
| Registry entries | 120 | 300 | 500 | 900+ |
| Monthly organic sessions | Unknown | 5K | 25K | 100K |
| Author-attributed articles | 3 | 60 | 200 | 500+ |
| Content pillars (hub + 5 sub-articles) | 0 | 3 | 6 | 12 |
| Google News approved | No | Pending | Yes | Yes |
| Newsletter subscribers | 0 | 100 | 500 | 2,000 |

---

*Related docs: [ROADMAP.md](ROADMAP.md) | [100k_organicsearch.md](100k_organicsearch.md) | [what_to_write_next_and_how.md](what_to_write_next_and_how.md)*
