# ObjectiveWire — Next Steps Roadmap (`next_steps.md`)

> **Related Docs:**
> - [warc_karma.md](file:///Users/thelegendofzjui/Documents/GitHub/0zonetwork/objectiveWire/warc_karma.md) — **ARC (Aura Reading Credit)** reputation & anti-troll system
> - [wikipedia_competitor.md](file:///Users/thelegendofzjui/Documents/GitHub/0zonetwork/objectiveWire/wikipedia_competitor.md) — **Fact-Checking, Community Updates & Owner Override**

---

## Where We Are Right Now

### Already Built & Working
- **Multi-Site Newsroom (`.com` & `.org`):** Dynamic domain routing, unified reader engagement stack (`ArticleViewTracker` + `ReactionBar` Like/Save + `DiscordComments`) across all article formats (`NewsArticle`, `SportArticle`, `ArticlePage`, `CreatorArticle`, `YoutubeCreatorPage`, `QuickArticle`, `WikiArticle`).
- **Multi-Provider Auth (Supabase `vgxzkkigomwmdxtwazeg`):** Email, Google/Gmail, and Discord OAuth on `/login` with PKCE + implicit-hash fallback (`app/login/page.tsx`, `app/auth/callback/route.ts`, `lib/supabase/client.ts`).
- **Discord-Exclusive Comments, Citations & Multi-Site Breadcrumbs:**
  - Comments & nested replies (`discord_comments` with `parent_id`).
  - Per-site Discord Forum thread mapping (`[objectivewire.com/section]` / `[objectivewire.org/section]` in `🎙️article-discussion`, with clickable `📍 Breadcrumbs`, `🌐 Full URL`, `[💬 Reply on Site]`, `[📰 Read Article]`, and `[👤 Profile]`).
  - `@Mentions` autocomplete (`GET /api/discord/mentions`), live `<@discord_id>` Discord pings, and clickable on-site `📰` article citations + external `🔗` source citations inside comments.
- **Social Graph & Pseudonymous Profiles:**
  - `public_profiles` synced on Discord comment/login, `/u/[username]` profile page (pseudonymous by default with optional linked socials, no KYC required), Watchlist/Track toggle (`FollowButton`), `/api/follows`, `/api/notifications`, `/account` **Alerts** tab, and unread badge in `NavUserButton`.
- **Account Vault & Messaging Preview:**
  - `/account` (`VaultDashboard.tsx`) + `/api/vault` tracking saved articles, liked articles, comments, reading history, 30-day reading streaks, and Alerts.
  - LinkedIn-style Messaging UI preview at `/messages` (`app/messages/page.tsx`).

### Current Gaps to Close Next
- **Supabase CLI Link & Pull:** Link `vgxzkkigomwmdxtwazeg` (`supabase login` → `supabase link --project-ref vgxzkkigomwmdxtwazeg` → `supabase db pull`) so local `supabase/migrations/` matches the live database 1:1.
- **End-to-End Browser Test & Vercel Production Env Sync (Step A3):** Verify comments, replies, citations, Like/Save, and `/account` Alerts locally after restarting `npm run dev`, then sync `.env` vars to Vercel Production for `.com` and `.org`.

---

## Step-by-Step Execution Plan

### Phase A — Harden Existing Social & Core Features (Do First)
- [x] **Step A1: Notifications & Watchlist UI in `/account`**
  - Added **Alerts** tab in `app/account/VaultDashboard.tsx` wired to `GET / PATCH /api/notifications` and rebranded `FollowButton.tsx` to **Track / Tracking**.
- [x] **Step A2: Fix `lib/registry-service.ts` TypeScript Exports**
  - Exported `isRealArticle` and `toAbsoluteUrl`; `npx tsc --noEmit` passes with **0 errors**.
- [ ] **Step A3: End-to-End Local & Production Verification**
  - Test full flow locally on both `.com` (`:3000`) and `.org` (`:3001`) and sync `DISCORD_COMMENTS_WEBHOOK_URL` + `vgxzkkigomwmdxtwazeg` Supabase keys to Vercel Production.

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

---

### Phase D — LinkedIn-Style Direct Messaging & Article/Quote Forwarding *(Final Piece of the Puzzle)*
- [ ] **Step D1: Direct Messages Schema (`direct_messages`)**
  - Private 1:1 messages (`sender_id`, `recipient_id`, `body`, `article_slug`, `article_title`, `quoted_text`, `source_urls`, `site_domain`, `read_at`) with strict sender/recipient RLS.
- [ ] **Step D2: LinkedIn-Style Messaging UI (`/messages` + Floating Drawer)**
  - Clean two-pane / collapsible LinkedIn-style messaging look & feel (conversation list on the left, active thread on the right, unread badges).
  - Rich forwarded **Article & Quote Cards** showing: article title, highlighted quote/line, attached citations/sources, the sender's **ARC Credit & Tier**, and whether the recipient has **ARC edit eligibility** on that section/article.
- [ ] **Step D3: "Forward Article / Highlighted Line" Action**
  - One-click **Forward** button on articles (and on highlighted text selection) to send an article, specific line, or sourced claim directly to another ObjectiveWire member.
