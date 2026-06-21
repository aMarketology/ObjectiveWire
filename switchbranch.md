# Branch Switching Guide | ObjectiveWire

## The Two Branches

| Branch | Domain | Deployment | Content Pillar |
|---|---|---|---|
| `main` | `objectivewire.com` | Railway (sports network) | World Cup 2026, Premier League, MLS, MLB, golf, supercars, creators, creator economy |
| `org` | `objectivewire.org` | Railway (investigative branch) | Texas investigative reporting, PI services, public records, courts, local coverage |

These are **two separate products** sharing one codebase. Never merge content between them.

---

## The Registry Bug (June 20, 2026) — Fixed

### What Happened

`lib/registry-data.json` is the flat JSON file that powers the homepage feed, hub pages, sitemaps, and `/blog` article listings. It is rebuilt by `scripts/sync-registry.ts --write` and reflects the articles that exist as `page.tsx` files on the current branch.

**The bug:** Line 56 of `.gitignore` had the pattern `*-[a-f0-9]*.json` — intended to block Google service account credential files like `objectwireorg-76d014b98819.json`. The substring `"-d"` in `registry-data` accidentally matched this pattern (`d` is in hex range `a–f`), so `registry-data.json` was **gitignored on both branches**.

**Consequence:** Because git never tracked the file, switching `main → org` left the 176-entry World Cup registry sitting on disk unchanged. The `/blog` page on `org` was showing World Cup match reports that don't exist on the `org` branch.

### What Was Fixed

Added `!lib/registry-data.json` to `.gitignore` immediately after the credential pattern:

```gitignore
# Google service account credential files — NEVER commit these
*-[a-f0-9]*.json
objectwireorg-76d014b98819.json

# Un-ignore registry-data.json — must be branch-tracked so each branch
# has its own correct version. The pattern above accidentally matches
# "registry-data" because 'd' falls in the hex range a-f.
!lib/registry-data.json
```

`lib/registry-data.json` is now **tracked by git per branch**. Each branch will have its own correct registry version once both are committed.

---

## Correct Branch Switch Protocol

### Before Switching Away From Any Branch

**Always run this sequence before `git checkout`:**

```bash
# 1. Sync the registry from the current branch's actual pages
npx tsx scripts/sync-registry.ts --write

# 2. Stage everything including the registry
git add -A

# 3. Commit (only when ready to publish — batch all changes)
git commit -m "your message"

# 4. Now safe to switch
git checkout main   # or git checkout org
```

**Why this matters:** If you switch branches with an unstaged `registry-data.json`, the other branch will inherit whatever was on disk — wrong articles in the feed, phantom entries, ghost thumbnails.

### After Switching To a Branch

Always re-sync immediately after switching to rebuild from the current branch's actual pages:

```bash
git checkout org    # or main
npx tsx scripts/sync-registry.ts --write
```

This removes any orphaned entries and ensures the feed only shows content that actually exists on the branch.

---

## Current Registry State (June 20, 2026)

### `org` branch — 180 entries
Content that exists:
- 7 Texas investigative blog articles (`/blog/...`)
- 12 PI service pages (`/service/...`)
- 5 local coverage pages (`/local/...`)
- 12 directory pages (`/directory/...`)
- World Cup hub only (no match reports)
- Some car articles

### `main` branch — 176 entries (as of last sync)
Content that exists:
- 15+ World Cup 2026 match reports (`/world-cup/2026/...`)
- 5 group-stage preview articles (written June 20)
- Creator/influencer profiles
- Car articles (Ferrari, Bugatti, McLaren, etc.)
- YouTube/creator news

---

## What Belongs on Each Branch

### `org` (objectivewire.org) — Investigative / Texas

Write about:
- Texas court cases and convictions (sourced from court records)
- Texas AG lawsuits and enforcement actions
- Public corruption, bid rigging, misconduct
- Missing persons pattern reporting
- Workers compensation fraud investigations
- Consumer fraud (utility scams, Ponzi schemes, elder fraud)
- Austin APD / HPD accountability
- FOIA / open records findings
- PI service pages under `/service/`
- Local coverage under `/local/austin`, `/local/houston`, `/local/greater-texas`

**Author:** Conan D. Boyle (`conan-boyle`) for investigative beats  
**Component:** `NewsArticle` (body in code), route under `/blog/[story-slug]/`  
**Domain in all canonical URLs:** `https://www.objectivewire.org`

### `main` (objectivewire.com) — Sports / Creators / Cars

Write about:
- World Cup 2026 match reports and previews
- Premier League, MLS, MLB, golf
- Supercar reveals, reviews, specs (Ferrari, Bugatti, Porsche, McLaren)
- Creator/influencer profiles
- YouTube and TikTok news
- Creator economy stories

**Authors:** Jack Brennan (sports), Conan D. Boyle (cars), Jack Sterling (creators)  
**Component:** `NewsArticle` (body in code), routes under `/world-cup/`, `/cars/`, `/creator/`, etc.  
**Domain in all canonical URLs:** `https://www.objectivewire.com`

---

## Existing `org` Blog Articles (do not duplicate)

| Slug | Title |
|---|---|
| `/blog/bexar-county-towing-bribery-conviction` | Bexar County Towing Bribery | Two Convicted in FBI Sting |
| `/blog/houston-zo-frost-jewelers-gold-laundering-elder-fraud` | Houston Jewelers Indicted | Gold Laundering Elder Fraud |
| `/blog/karmelo-anthony-murder-trial-frisco-track-meet-stabbing` | Karmelo Anthony Trial | Frisco Track Meet Murder Case 2026 |
| `/blog/san-antonio-dje-texas-ponzi-scheme-69-million` | San Antonio CEO Pleads Guilty | $69.5M Real Estate Ponzi |
| `/blog/texas-ag-cam-solar-lawsuit-deceptive-practices` | CAM Solar Lawsuit | Texas AG Sues San Antonio Company |
| `/blog/texas-ag-golden-qi-h1b-visa-fraud-north-texas` | Golden Qi Holdings H-1B Fraud | Texas AG Lawsuit North Texas |
| `/blog/texas-utility-impersonation-scam-warning-2026` | Texas Utility Scam Warning 2026 | Fake Disconnection Calls |

---

## Next Articles to Write on `org`

Suggested pipeline (none of these exist yet):

| Story | Route | Beat |
|---|---|---|
| Texas AG vs major landlord / rent fraud | `/blog/texas-ag-rent-fraud-lawsuit-2026` | Consumer fraud |
| Austin APD officer discipline — FOIA findings | `/blog/austin-apd-officer-discipline-foia-2026` | Accountability |
| Harris County felony backlog — case delay data | `/blog/harris-county-felony-case-backlog-2026` | Courts |
| Workers comp fraud ring — Travis County indictment | `/blog/travis-county-workers-comp-fraud-ring-2026` | Fraud |
| Missing persons pattern — Central Texas 2025–2026 | `/blog/central-texas-missing-persons-pattern-2026` | Pattern reporting |
| Texas AG vs debt collector — illegal practices | `/blog/texas-ag-debt-collector-lawsuit-2026` | Consumer fraud |

---

## Article Pattern for `org` Blog Articles

```tsx
// app/blog/[story-slug]/page.tsx

import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'blog-[story-slug]';
const URL_PATH = '/blog/[story-slug]';
const CANONICAL = `https://www.objectivewire.org${URL_PATH}`;  // NOTE: .org not .com
const OG_IMAGE = '/thumbnails/blog-[story-slug].jpg';

export const metadata: Metadata = {
  title: 'Story Title | Specific Detail',  // max 60 chars, no brand suffix
  description: '130-155 chars. Primary keyword in first 60 chars.',
  keywords: ['keyword 1', 'keyword 2'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'OG Title',
    description: 'OG description',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-06-20T12:00:00Z',
    modifiedTime: '2026-06-20T12:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: '...', description: '...' },
};

export default function StoryPage() {
  return (
    <NewsArticle
      // ... props
      author={{ name: 'Conan D. Boyle', authorSlug: 'conan-boyle', ... }}
      thumbnail={{ src: OG_IMAGE, alt: '...' }}
    >
      <div className="prose prose-lg max-w-none">
        {/* Full article body */}
      </div>
    </NewsArticle>
  );
}
```

**Key difference from `main` articles:** All canonical URLs use `https://www.objectivewire.org` — not `.com`.

---

## Mint + Sync After Writing

After writing any new article on `org`:

```bash
# Mint thumbnail
npx tsx scripts/mint-thumbnails.ts --file app/blog/[story-slug]/page.tsx --force

# Sync registry
npx tsx scripts/sync-registry.ts --write
```

Then when ready to commit:

```bash
git add -A
git commit -m "add: [story description]"
```

---

## Quick Reference Cheatsheet

```bash
# --- SWITCHING org → main ---
npx tsx scripts/sync-registry.ts --write   # lock org registry
git add -A && git commit -m "..."          # commit org state
git checkout main
npx tsx scripts/sync-registry.ts --write   # rebuild main registry

# --- SWITCHING main → org ---
npx tsx scripts/sync-registry.ts --write   # lock main registry
git add -A && git commit -m "..."          # commit main state
git checkout org
npx tsx scripts/sync-registry.ts --write   # rebuild org registry

# --- NEW ARTICLE on org ---
# 1. Write app/blog/[slug]/page.tsx
# 2. npx tsx scripts/mint-thumbnails.ts --file app/blog/[slug]/page.tsx --force
# 3. npx tsx scripts/sync-registry.ts --write
# 4. git add -A  (commit when session is done)
```
