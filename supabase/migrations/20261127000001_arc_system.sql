-- =============================================================================
-- Phase B1: ARC (Aura Reading Credit)
-- Safe to re-run (IF NOT EXISTS / DROP POLICY IF EXISTS).
-- =============================================================================

-- 1. Add ARC score & editorial role to public_profiles
ALTER TABLE public_profiles
  ADD COLUMN IF NOT EXISTS arc_score INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS role      TEXT    NOT NULL DEFAULT 'reader' CHECK (role IN ('reader', 'editor', 'owner'));

CREATE INDEX IF NOT EXISTS idx_pp_arc_score ON public_profiles (arc_score DESC);

-- 2. Append-only ARC Ledger (auditable karma history)
CREATE TABLE IF NOT EXISTS arc_ledger (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  delta      INTEGER     NOT NULL,
  reason     TEXT        NOT NULL CHECK (reason IN ('article_read', 'reading_streak', 'helpful_reply', 'fact_check_approved', 'triage_match', 'spam_penalty', 'owner_adjustment')),
  ref_slug   TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_arc_user_created ON arc_ledger (user_id, created_at DESC);

ALTER TABLE arc_ledger ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "arc_read_own" ON arc_ledger;
CREATE POLICY "arc_read_own" ON arc_ledger
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "arc_insert_own" ON arc_ledger;
CREATE POLICY "arc_insert_own" ON arc_ledger
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
