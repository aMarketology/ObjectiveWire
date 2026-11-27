# ARC — Aura Reading Credit (`arc_karma.md`)

> **Core Mission:** ARC (Aura Reading Credit) is ObjectiveWire’s Reddit-Karma-style reputation system built for one primary goal: **ensuring accurate, verified information is always displayed in our writing and articles**.
>
> ARC separates genuine, well-read community members (signed in via Email, Google/Gmail, or Discord) from drive-by trolls—while preserving **direct Owner/Editor Override authority** whenever a fact or claim is highly contested.

---

## 1. How ARC Works

### A. Earning ARC (Positive Reputation)
ARC is earned organically through real reading and verified accuracy—never bought or faked:

| Action | ARC Earned | Notes / Anti-Farm Guardrail |
| :--- | :--- | :--- |
| **Reading Articles** | `+2 ARC` per verified read | Capped daily (e.g., max `20 ARC/day`) and requires minimum dwell time |
| **Daily Reading Streak** | `+5 ARC` per streak day | Builds on existing 30-day streak tracking in `/api/vault` |
| **Helpful Discussion** | `+3 ARC` per upvote / helpful reply | Only from other authenticated readers |
| **Approved Fact-Check / Update** | `+25 ARC` (major reward) | Highest multiplier—rewards primary-source accuracy |
| **Accurate Triage Vote** | `+2 ARC` | Awarded when your triage vote aligns with final editorial verification |

### B. Losing ARC (Anti-Troll Penalties)
- **Bad-Faith / Unsourced Proposals (`-15 ARC`):** Submitting spam, fabricated claims, or proposals without valid primary sources.
- **Repeated Rejected Edits:** Drops a user below the proposal threshold, automatically pausing their ability to submit updates.

### C. ARC Tiers & What They Unlock (No KYC by Default)
- **Reader (`0–49 ARC`):** Read, save, like, **Track Stories/Beats/Contributors (Watchlist)**, and comment (via Discord). Users may remain **anonymous/pseudonymous** or optionally link socials on `/u/[username]`—**no KYC required by default** (only a future fallback if severe spam issues occur).
- **Contributor (`50+ ARC`):** Unlocks **"Suggest Fact-Check / Update"** ([wikipedia_competitor.md](file:///Users/thelegendofzjui/Documents/GitHub/0zonetwork/objectiveWire/wikipedia_competitor.md)) and community triage voting—regardless of whether they signed up with Email, Google, or Discord.
- **Trusted Reader (`250+ ARC`):** Higher triage weight + **Trusted Reader** badge on `/u/[username]` and comment cards.

---

## 2. Contested Information & Owner Override Authority

Accuracy comes before crowdsourcing. On breaking news, legal disputes, or politically/factually contested topics, **majority votes alone cannot decide truth**:

1. **No Auto-Publishing:** Community votes never auto-edit an article. They only triage and surface primary sources.
2. **Contested Flag (`status = 'contested'`):** If a proposal receives conflicting triage votes (`helpful` vs. `needs_source`) or touches a disputed claim, it is automatically flagged as **Contested** and escalated.
3. **Owner / Editor Override (`status = 'overridden'`):**
   - **You (the Owner / Lead Editor) step in directly** to review the primary evidence (court dockets, official filings, raw transcripts) and write/lock the authoritative answer.
   - Once overridden, the claim displays an **"Editor-Verified Resolution"** stamp with your citation and is **locked** against repeat community proposals unless new primary documentation is submitted.

---

## 3. How Far Are We From Implementing This?

We already have **~60% of the underlying infrastructure** live in the codebase:

### Already Built
- **Multi-Provider Auth:** Email, Google/Gmail, and Discord OAuth (`app/login/page.tsx`, `app/auth/callback/route.ts`).
- **Reading History & Streak Engine:** `article_view_history` and 30-day `readingStreak` calculation already implemented in `app/api/vault/route.ts` and `app/account/VaultDashboard.tsx`.
- **Social & Identity Layer:** `public_profiles`, `discord_comments` (with replies & `@mentions`), `user_follows`, `notifications`, and `/u/[username]`.

### What Remains to Build
1. **ARC Ledger Schema (~1 migration):**
   - Add `arc_score INTEGER NOT NULL DEFAULT 0` and `role TEXT NOT NULL DEFAULT 'reader'` (`'reader' | 'editor' | 'owner'`) to `public_profiles`.
   - Create `arc_ledger (id, user_id, delta, reason, ref_slug, created_at)` as an append-only audit log so ARC can never be silently spoofed.
2. **ARC Award Hooks (~2–3 small API updates):**
   - Award capped daily reading ARC when `article_view_history` records a valid read, and award streak bonuses.
3. **ARC Display (~2 UI updates):**
   - Show the user’s live **ARC Score & Tier** on `/account` (`VaultDashboard.tsx`) and `/u/[username]`.
4. **Fact-Check Proposals + Owner Override Queue (`wikipedia_competitor.md`):**
   - Build the proposal modal, `#fact-check-queue` Discord webhook, and an **Owner Override** review view in `(admin)` so you can approve, reject, or personally override any contested claim.
