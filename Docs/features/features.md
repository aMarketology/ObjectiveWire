# ObjectiveWire — Platform Features & Step-by-Step Test Plan (`features.md`)

> **Platform Scope:** Multi-site investigative & breaking-news network (`objectivewire.com` on `:3000` and `objectivewire.org` on `:3001`) powered by Next.js App Router, Supabase (`vgxzkkigomwmdxtwazeg`), and Discord (`🎙️article-discussion`).

---

## 1. Core Platform Features

### A. Multi-Site Publishing & Article Formats
- **Dual-Site Architecture:** Shared codebase serving `objectivewire.com` (sports, national news, cars, tech, business) and `objectivewire.org` (local Austin / Texas investigative reporting & public safety) via `OBJECTWIRE_SITE` and host detection.
- **Unified Reader Engagement Stack Across All Formats:**
  - `NewsArticle`, `SportArticle`, `ArticlePage`, `CreatorArticle`, `YoutubeCreatorPage`, `QuickArticle`, and `WikiArticle` (news mode) all include:
    1. `ArticleViewTracker` (reading history, dwell time, scroll depth, and ARC credit)
    2. `ReactionBar` (Like / Heart, Comment jump, Save / Bookmark)
    3. `ObjectiveMeter` (`✅` Reader Accuracy & Objectivity Score)
    4. `DiscordComments` (comments, nested replies, `@mentions`, citations, Discord sync)
- **SEO & Feeds:** Canonical guards (`validate-canonicals.ts`), dynamic sitemaps, `rss.xml`, `feed.json`, `news-sitemap.xml`, and `NewsArticleSchema` JSON-LD.

### B. Multi-Provider Auth & Pseudonymous Profiles
- **Sign-In Options (`/login`):** Continue with **Google**, **Continue with Discord**, or **Email / Password** (`createAuthBrowserClient()` using PKCE + implicit-hash fallback via `/auth/callback`).
- **Pseudonymous by Default (No KYC):** Readers can stay pseudonymous with a handle and ARC score, or optionally add bio/location/website/socials.
- **Public Profile Pages (`/u/[username]`):** Displays avatar, `@username`, compact **✅ ARC Badge**, optional Discord handle, **Track / Tracking** button (`FollowButton`), bio, and recent comments linked back to articles.

### C. Objective Meter (`✅ Objective Score`)
- **Pure Reader Scoring (No Text Editing):** Readers rate whether an article is **`✅ Objective & True`** or **`⚠️ Needs Context`** (`article_scores` table, 1 vote per user per article).
- **ARC-Weighted:** Ratings are weighted by the reader's ARC tier (`1x` Reader, `2x` Contributor, `3x` Trusted Reader).

### D. ARC — Aura Reading Credit (`warc_karma.md`)
- **Verified Reading Karma:** Signed-in readers earn `+2 ARC` per article after 10 seconds of active dwell time (capped at `20 ARC/day`, 1 award per article per day), logged in `arc_ledger`.
- **Tiers:** `🌱 Building ARC (0–49)` → `✅ Objective Contributor (50+)` → `✅ Certified Trusted (250+)`.
- **Display:** Full progress meter in `/account` (`VaultDashboard`) and compact badge on `/u/[username]`.

### E. Discord-Exclusive Comments, Replies, Citations & Breadcrumbs
- **Discord Auth Gate:** Commenting requires a connected Discord identity (Google/Email users can link Discord via **"Connect Discord Account"**).
- **Nested Replies:** Inline reply composer + indented chronological reply threads (`parent_id`).
- **`@Mentions`:** Live `@` autocomplete (`GET /api/discord/mentions`) prioritizing thread participants, clickable `/u/<username>` pills in comments, real `<@discord_id>` pings in Discord, and `notifications` rows.
- **Clickable Citations:** External `https://...` primary sources render as `🔗 <domain>` pills; on-site `.com` / `.org` URLs and `/section/slug` paths render as `📰` internal article citation pills.
- **Multi-Site Discord Breadcrumbs (`🎙️article-discussion`):**
  - Thread title prefixed with `[<siteDomain>/<sectionPath>]`
  - Clickable `📍 Breadcrumbs` starting from full site URL (`https://www.objectivewire.com › ...` or `https://www.objectivewire.org › ...`)
  - `🌐 Full URL` + `🔗 Navigate` (`💬 Reply on Site`, `📰 Read Article`, `👤 Profile`)

### F. Personal Vault (`/account`), Alerts & Messaging Preview
- **Your Vault (`/account`):**
  - **Overview:** ARC Audience Score meter, total likes/saves/views/comments, 30-day reading streak, topic interests, and recent comments.
  - **Alerts:** `@mentions`, `replies`, and `watchlist` notifications with **Mark all read** + unread badge in `NavUserButton`.
  - **Liked / Saved / History / Profile:** Full reader history and profile editor.
- **LinkedIn-Style Messaging Preview (`/messages`):** Two-pane UI prototype for forwarding articles, highlighted quotes, source pills, ARC scores, and edit-eligibility status (live `direct_messages` backend planned for Phase D).

---

## 2. Step-by-Step Testing Checklist

### Step 1: Restart Dev Servers
Restart `npm run dev` so both `:3000` (`.com`) and `:3001` (`.org`) have the latest `.env.local` and `next.config.ts`.

### Step 2: Auth & Account Vault (`/login` & `/account`)
1. Open `http://localhost:3000/login` — verify **Continue with Google**, **Continue with Discord**, and **Email/Password** are visible.
2. Sign in with **Discord** — verify it returns you cleanly without `auth_failed` and navbar shows your username.
3. Open `http://localhost:3000/account`:
   - Confirm **Overview** renders your **ARC Audience Score** meter, stats, and reading streak.
   - Check **Alerts**, **Liked**, **Saved**, **History**, and **Profile** tabs.

### Step 3: Reader Engagement & Objective Meter (`.com` & `.org`)
1. Open `http://localhost:3000/mlb/tarik-skubal-450-million-mets-deal-explained`.
2. Click **Like** and **Save** in `ReactionBar` → refresh `/account` and confirm the article appears under **Liked** and **Saved**.
3. Wait 10+ seconds on the article (active tab) → refresh `/account` and confirm **ARC** increased by `+2`.
4. Click **`✅ Objective & True`** (and test toggling **`⚠️ Needs Context`**) on the **Objective Meter** → refresh the page and verify the percentage and your selected state persist.

### Step 4: Comments, Replies, `@Mentions`, Citations & Discord Breadcrumbs
1. On `http://localhost:3000/mlb/tarik-skubal-450-million-mets-deal-explained`, post a comment containing an `@mention` (using the `@` dropdown), an external URL (e.g. `https://apnews.com`), and an on-site path (e.g. `/mlb`).
2. Click **Reply** on an existing comment and post a reply.
3. Refresh the page (`Cmd + Shift + R`) — confirm the comment, nested reply, `@username` link, `🔗` external source pill, and `📰` internal article pill all persist.
4. Click **"See it in Discord →"** — verify `🎙️article-discussion` shows `[objectivewire.com/mlb]`, clickable `📍 Breadcrumbs`, `🌐 Full URL`, and `<@discord_id>` ping.
5. Repeat on `.org`: `http://localhost:3001/local/austin/east-austin-m-station-apartments-shooting-three-arrested-2026` — verify Discord creates a separate `[objectivewire.org/local/austin]` thread.

### Step 5: Public Profile (`/u/[username]`), Track & Messaging Preview
1. Click your `@username` in a comment → verify `/u/<username>` displays your **✅ ARC badge**, **Track** button, and recent comments.
2. Open `http://localhost:3000/messages` → verify the LinkedIn-style two-pane messaging & forwarded quote UI works.
