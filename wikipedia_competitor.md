# ObjectiveWire — Wikipedia-Style Fact-Checking & Community Updates Blueprint

> **Goal:** Allow any signed-in reader (Email, Google/Gmail, or Discord) with sufficient **ARC (Aura Reading Credit)** to propose source-backed fact-checks, corrections, and live updates on ObjectiveWire (`.com`, `.org`, and future domains) with transparent revision history and contributor credit—without exposing static TSX article pages to unverified edits or troll spam.

---

## Core Architecture: Supabase Verification & Update Overlay

Because most ObjectiveWire articles are static Next.js TSX pages (`app/mlb/...`, `app/local/austin/...`), community members do **not** edit raw TSX source files. Instead, community fact-checks and updates live in Supabase as an **overlay layer** matched by `site_domain` + `slug` and rendered automatically inside `NewsArticle`, `QuickArticle`, and `ArticleFooter`.

---

## The 4-Stage Workflow

### Stage 1 — ARC-Gated, Source-Required Proposal (`fact_check_proposals`)
- Every article displays a **"Suggest Fact-Check / Update"** button and a **"Track this Story"** Watchlist button.
- **Who Can Propose (No KYC, Anti-Troll Gate):** Any signed-in user—whether authenticated via **Email, Google/Gmail, or Discord**—who meets the minimum **ARC (Aura Reading Credit)** threshold. Contributors can remain **pseudonymous/anonymous** by default (or optionally add social links to their profile). **No KYC by default** (only considered as a future fallback if severe automated spam arises).
- Submitting a proposal requires:
  1. **Category:** `Factual Correction` | `New Development` | `Primary Source` | `Context Note`
  2. **Target Quote / Section:** The exact claim or section in the article being referenced.
  3. **Proposed Update:** Concise, neutral-tone correction or new development.
  4. **Required Source URL(s):** At least one verifiable URL (court docket, government filing, official statement, or primary reporting). Submissions without a source URL are rejected.

### Stage 2 — Community Triage (Web + Discord `#fact-check-queue`)
- Proposals are saved with `status = 'pending'` and posted to a dedicated Discord `#fact-check-queue` channel with:
  - `[siteDomain]` tag + clickable article link
  - Quoted claim + proposed update
  - Submitted source URL(s) and contributor `/u/<username>` link (showing their ARC tier)
- Signed-in readers who meet the ARC threshold (Email, Google/Gmail, or Discord) can vote **Verify / Helpful** or **Needs Better Source** (1 vote per user) to surface high-confidence updates and filter low-quality submissions.

### Stage 3 — Editorial Sign-Off (Anti-Vandalism Gate)
- **Nothing renders publicly on an article until an editor approves it** (checked via an `editor` / `admin` role on `public_profiles` or an admin review route).
- Approving a proposal:
  - Marks `fact_check_proposals.status = 'approved'` with `reviewer_id` and `reviewed_at`.
  - Inserts an immutable record into `article_revision_log`.
  - Sends a `fact_check_approved` alert to the contributor via `notifications`.
  - Increments `verified_edits_count` on the contributor's `public_profiles` row.

### Stage 4 — Live Article Overlay & Immutable Revision Log
- Approved updates render automatically on the article (matched by `site_domain` + `slug`) as a timestamped **"Verified Update / Fact-Check"** callout showing:
  - Update category badge + timestamp
  - Verified summary + clickable primary source link(s)
  - Contributor attribution (`@username` linking to `/u/<username>`)
- Every article exposes a **"Revision History (N)"** drawer/link connecting to `/corrections` (`app/corrections/page.tsx`) for full newsroom transparency.

---

## Planned Database Tables

```sql
-- 1. Proposed fact-checks / updates
CREATE TABLE IF NOT EXISTS fact_check_proposals (
  id             UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  site_domain    TEXT        NOT NULL DEFAULT 'objectivewire.com',
  slug           TEXT        NOT NULL,
  author_id      UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  arc_at_submit  INTEGER     NOT NULL DEFAULT 0, -- Snapshot of contributor's ARC (Aura Reading Credit)
  discord_id     TEXT,                           -- Optional: populated if user also linked Discord
  category       TEXT        NOT NULL CHECK (category IN ('correction', 'update', 'source', 'context')),
  claim_quote    TEXT,
  proposed_text  TEXT        NOT NULL CHECK (char_length(proposed_text) <= 2000),
  source_urls    TEXT[]      NOT NULL CHECK (array_length(source_urls, 1) >= 1),
  status         TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewer_id    UUID        REFERENCES auth.users(id),
  review_note    TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reviewed_at    TIMESTAMPTZ
);

-- 2. Community triage votes (1 per user per proposal)
CREATE TABLE IF NOT EXISTS fact_check_votes (
  proposal_id    UUID        NOT NULL REFERENCES fact_check_proposals(id) ON DELETE CASCADE,
  user_id        UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  vote           TEXT        NOT NULL CHECK (vote IN ('helpful', 'needs_source')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (proposal_id, user_id)
);

-- 3. Immutable public revision log
CREATE TABLE IF NOT EXISTS article_revision_log (
  id             UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  site_domain    TEXT        NOT NULL DEFAULT 'objectivewire.com',
  slug           TEXT        NOT NULL,
  proposal_id    UUID        REFERENCES fact_check_proposals(id),
  contributor_id UUID        REFERENCES auth.users(id),
  approved_by    UUID        REFERENCES auth.users(id),
  summary        TEXT        NOT NULL,
  source_urls    TEXT[]      NOT NULL,
  published_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

## Immediate Hardening Roadmap (Before Building the Overlay)

1. **Wire Notifications & Watchlists into `/account` (`app/account/VaultDashboard.tsx`):**
   - Display `@mention`, `reply`, and `story_update` notifications with a "Mark all read" action (`PATCH /api/notifications`).
   - Reframe contributor tracking as **Beat & Contributor Watchlists** (pseudonymous-friendly, optional socials, no KYC) and add **Story / Investigation Watchlists** (*"Track this Story"*).
2. **Fix Pre-Existing TypeScript Errors (`lib/registry-service.ts`):**
   - Export `isRealArticle` and `toAbsoluteUrl` so `npx tsc --noEmit` and `npm run build` pass with 0 errors across the entire repository.
3. **End-to-End Verification & Production Env Sync:**
   - Test replies, `@mentions` (web autocomplete + Discord `<@id>` ping), `/u/[username]`, and `FollowButton` locally.
   - Sync `DISCORD_COMMENTS_WEBHOOK_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (`vgxzkkigomwmdxtwazeg`) to Vercel Production for both `.com` and `.org`.
