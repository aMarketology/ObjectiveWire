-- =============================================================================
-- Phase 1 & 2: Public Profiles Discord Sync, @Mentions, Notifications & Follows
-- Safe to re-run (IF NOT EXISTS / DROP POLICY IF EXISTS).
-- =============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 1. Public Profiles (ensures table + Discord columns + auth_user_id exist)
CREATE TABLE IF NOT EXISTS public_profiles (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_hash        TEXT        UNIQUE NOT NULL,
  auth_user_id     UUID        UNIQUE,
  username         TEXT        UNIQUE,
  display_name     TEXT        NOT NULL,
  email            TEXT,
  bio              TEXT        CHECK (char_length(bio) <= 500),
  avatar_url       TEXT,
  location         TEXT,
  website          TEXT,
  primary_provider TEXT        NOT NULL DEFAULT 'discord',
  google_id        TEXT,
  discord_id       TEXT        UNIQUE,
  discord_username TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public_profiles ADD COLUMN IF NOT EXISTS auth_user_id UUID UNIQUE;
ALTER TABLE public_profiles ADD COLUMN IF NOT EXISTS discord_id TEXT;
ALTER TABLE public_profiles ADD COLUMN IF NOT EXISTS discord_username TEXT;

CREATE INDEX IF NOT EXISTS idx_pp_user_hash        ON public_profiles (user_hash);
CREATE INDEX IF NOT EXISTS idx_pp_auth_user_id     ON public_profiles (auth_user_id);
CREATE INDEX IF NOT EXISTS idx_pp_username         ON public_profiles (username);
CREATE INDEX IF NOT EXISTS idx_pp_discord_id       ON public_profiles (discord_id);
CREATE INDEX IF NOT EXISTS idx_pp_discord_username ON public_profiles (discord_username);

ALTER TABLE public_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "pp_public_read" ON public_profiles;
CREATE POLICY "pp_public_read" ON public_profiles
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "pp_auth_insert" ON public_profiles;
CREATE POLICY "pp_auth_insert" ON public_profiles
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "pp_auth_update" ON public_profiles;
CREATE POLICY "pp_auth_update" ON public_profiles
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP TRIGGER IF EXISTS public_profiles_updated_at ON public_profiles;
CREATE TRIGGER public_profiles_updated_at
  BEFORE UPDATE ON public_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 2. Notifications (@mentions, replies, follows)
CREATE TABLE IF NOT EXISTS notifications (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id      UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  actor_name   TEXT        NOT NULL,
  actor_avatar TEXT,
  type         TEXT        NOT NULL CHECK (type IN ('mention', 'reply', 'follow')),
  slug         TEXT,
  comment_id   UUID,
  body_preview TEXT,
  read_at      TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notif_user_created ON notifications (user_id, created_at DESC);

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "notif_read_own" ON notifications;
CREATE POLICY "notif_read_own" ON notifications
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "notif_insert_auth" ON notifications;
CREATE POLICY "notif_insert_auth" ON notifications
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "notif_update_own" ON notifications;
CREATE POLICY "notif_update_own" ON notifications
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- 3. User Follows (Phase 2)
CREATE TABLE IF NOT EXISTS user_follows (
  follower_id  UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  following_id UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (follower_id, following_id),
  CHECK (follower_id <> following_id)
);

CREATE INDEX IF NOT EXISTS idx_uf_follower  ON user_follows (follower_id);
CREATE INDEX IF NOT EXISTS idx_uf_following ON user_follows (following_id);

ALTER TABLE user_follows ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "uf_public_read" ON user_follows;
CREATE POLICY "uf_public_read" ON user_follows
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "uf_auth_insert" ON user_follows;
CREATE POLICY "uf_auth_insert" ON user_follows
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = follower_id);

DROP POLICY IF EXISTS "uf_auth_delete" ON user_follows;
CREATE POLICY "uf_auth_delete" ON user_follows
  FOR DELETE TO authenticated USING (auth.uid() = follower_id);
