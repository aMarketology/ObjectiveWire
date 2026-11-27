# ObjectiveWire — Next Steps Roadmap (`next_steps.md`)

> **Related Docs:**
> - [warc_karma.md](file:///Users/thelegendofzjui/Documents/GitHub/0zonetwork/objectiveWire/warc_karma.md) — **ARC (Aura Reading Credit)** reputation & anti-troll system
> - [wikipedia_competitor.md](file:///Users/thelegendofzjui/Documents/GitHub/0zonetwork/objectiveWire/wikipedia_competitor.md) — **Fact-Checking, Community Updates & Owner Override**

---

## Where We Are Right Now

### Already Built & Working
- **Multi-Site Newsroom (`.com` & `.org`):** Dynamic domain routing, `NewsArticle` & `QuickArticle` templates, and synced registries.
- **Multi-Provider Auth (Supabase `vgxzkkigomwmdxtwazeg`):** Email, Google/Gmail, and Discord OAuth with PKCE + implicit-hash fallback (`app/login/page.tsx`, `app/auth/callback/route.ts`, `lib/supabase/client.ts`).
- **Discord-Exclusive Comments & Multi-Site Thread Sync:**
  - Comments & nested replies (`discord_comments` with `parent_id`).
  - Per-site Discord Forum thread mapping (`[objectivewire.com]` / `[objectivewire.org]` in `🎙️article-discussion`, with `[💬 Reply on Site]` & `[📰 Read Article]` links).
  - `@Mentions` autocomplete (`GET /api/discord/mentions`) + live `<@discord_id>` Discord pings + `notifications` rows.
- **Social Graph & Pseudonymous Profiles:**
  - `public_profiles` synced on Discord comment/login, `/u/[username]` profile page (pseudonymous by default with optional linked socials, no KYC required), Watchlist/Track toggle (`FollowButton`), `/api/follows`, `/api/notifications`, and unread badge in `NavUserButton`.
- **Account Vault & Reading Streak:**
  - `/account` (`VaultDashboard.tsx`) + `/api/vault` tracking saved articles, liked articles, comments, and 30-day reading streaks.

### Current Gaps to Close First
- `/account` does not yet display the user’s **Notifications** inbox or **Watchlist** (tracked stories, beats, and contributors).
- `npx tsc --noEmit` still has 7 pre-existing errors from missing exports (`isRealArticle`, `toAbsoluteUrl`) in `lib/registry-service.ts`.
- Production env vars (`DISCORD_COMMENTS_WEBHOOK_URL` and `vgxzkkigomwmdxtwazeg` Supabase keys) still need to be synced to Vercel for `.com` and `.org`.

---

## Step-by-Step Execution Plan

### Phase A — Harden Existing Social & Core Features (Do First)
- [ ] **Step A1: Notifications & Watchlist UI in `/account`**
  - Add a **Notifications** panel/tab in `app/account/VaultDashboard.tsx` wired to `GET / PATCH /api/notifications` (mark individual or all unread alerts as read, link directly to the article `#discord-comments`).
  - Reframe `FollowButton` / `user_follows` as **Track Contributor / Watchlist** (not social-media followers), and prepare **Story / Investigation Watchlists** (*"Track this Story"* for developing updates & verified resolutions).
  - Allow pseudonymous/anonymous profiles by default (no KYC) with optional social links on `public_profiles` / `/u/[username]`.
- [ ] **Step A2: Fix `lib/registry-service.ts` TypeScript Exports**
  - Export `isRealArticle` and `toAbsoluteUrl` so `npx tsc --noEmit` and `npm run build` pass with **0 errors** across the entire repo.
- [ ] **Step A3: End-to-End Local & Production Verification**
  - Test full flow locally on both `.com` (`:3000`) and `.org` (`:3001`): sign in, post comment, reply, `@mention` ping in Discord, follow user on `/u/[username]`, check notification badge & `/account`.
  - Sync `DISCORD_COMMENTS_WEBHOOK_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel Production and redeploy.

---

### Phase B — ARC (Aura Reading Credit) (`warc_karma.md`)
- [ ] **Step B1: ARC Database Migration**
  - Add `arc_score INTEGER NOT NULL DEFAULT 0` and `role TEXT NOT NULL DEFAULT 'reader'` (`'reader' | 'editor' | 'owner'`) to `public_profiles`.
  - Create append-only `arc_ledger (id, user_id, delta, reason, ref_slug, created_at)` with RLS.
- [ ] **Step B2: ARC Award Hooks**
  - Award capped daily reading ARC (`+2 ARC/read`, daily cap) when `article_view_history` logs a valid read.
  - Award streak bonuses (`+5 ARC/day`) and helpful-reply/upvote ARC.
- [ ] **Step B3: ARC Profile & UI Display**
  - Display **ARC Score & Tier** (`Reader`, `Contributor 50+`, `Trusted Reader 250+`) on `/account` (`VaultDashboard.tsx`), `/u/[username]`, and comment badges.

---

### Phase C — Fact-Checking, Community Updates & Owner Override (`wikipedia_competitor.md`)
- [ ] **Step C1: Fact-Check & Revision Log Migration**
  - Create `fact_check_proposals`, `fact_check_votes`, and `article_revision_log` tables in Supabase.
- [ ] **Step C2: Proposal Submission & Discord Triage Queue**
  - Build `/api/fact-checks` (`POST` gated by `arc_score >= 50` and ≥1 required source URL; works for Email, Google, or Discord logins).
  - Forward new proposals to Discord `#fact-check-queue`.
  - Add the **"Suggest Fact-Check / Update"** modal to `NewsArticle` and `QuickArticle`.
- [ ] **Step C3: Owner Override & Editorial Approval Queue**
  - Build an `(admin)` review queue where **you (the Owner)** can approve, reject, or issue an **Owner Override** (`status = 'overridden'`) on any highly contested claim, locking the authoritative resolution.
- [ ] **Step C4: Live Article Overlay & Revision History**
  - Render approved/overridden updates automatically by `site_domain` + `slug` on articles, plus a **"Revision History"** drawer linked to `/corrections`.
