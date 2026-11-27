-- =============================================================================
-- Objective Meter: Reader Accuracy & Objectivity Scoring per Article
-- Safe to re-run (IF NOT EXISTS / DROP POLICY IF EXISTS).
-- =============================================================================

CREATE TABLE IF NOT EXISTS article_scores (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  site_domain TEXT        NOT NULL DEFAULT 'objectivewire.com',
  slug        TEXT        NOT NULL,
  user_id     UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  verdict     TEXT        NOT NULL CHECK (verdict IN ('objective', 'needs_context')),
  arc_weight  INTEGER     NOT NULL DEFAULT 1,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (site_domain, slug, user_id)
);

CREATE INDEX IF NOT EXISTS idx_as_site_slug ON article_scores (site_domain, slug);

ALTER TABLE article_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "as_public_read" ON article_scores;
CREATE POLICY "as_public_read" ON article_scores
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "as_auth_insert" ON article_scores;
CREATE POLICY "as_auth_insert" ON article_scores
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "as_auth_update" ON article_scores;
CREATE POLICY "as_auth_update" ON article_scores
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "as_auth_delete" ON article_scores;
CREATE POLICY "as_auth_delete" ON article_scores
  FOR DELETE TO authenticated USING (auth.uid() = user_id);
