import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

interface MentionCandidate {
  username: string;
  displayName: string;
  avatarUrl: string;
  discordId: string;
  inThread?: boolean;
}

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get('q') ?? '').trim().toLowerCase();
  const rawSlug = (req.nextUrl.searchParams.get('slug') ?? '').replace(/^\/+/, '');

  const supabase = await createClient();
  const seen = new Map<string, MentionCandidate>();

  // 1. Prioritize participants already in this article's thread
  if (rawSlug) {
    const { data: threadRows } = await supabase
      .from('discord_comments')
      .select('discord_id, discord_username, discord_avatar')
      .in('slug', [rawSlug, `/${rawSlug}`])
      .order('created_at', { ascending: false })
      .limit(40);

    for (const row of threadRows ?? []) {
      const uname = String(row.discord_username ?? '').trim();
      const key = uname.toLowerCase();
      if (!uname || seen.has(key)) continue;
      if (!q || key.includes(q)) {
        seen.set(key, {
          username: uname,
          displayName: uname,
          avatarUrl: row.discord_avatar ?? '',
          discordId: row.discord_id ?? '',
          inThread: true,
        });
      }
    }
  }

  // 2. Also query public_profiles (gracefully ignored if table not yet migrated)
  try {
    let query = supabase
      .from('public_profiles')
      .select('username, discord_username, display_name, avatar_url, discord_id')
      .limit(15);

    if (q) {
      query = query.or(`username.ilike.%${q}%,discord_username.ilike.%${q}%,display_name.ilike.%${q}%`);
    }

    const { data: profiles } = await query;
    for (const p of profiles ?? []) {
      const uname = String(p.username || p.discord_username || '').trim();
      const key = uname.toLowerCase();
      if (!uname || seen.has(key)) continue;
      seen.set(key, {
        username: uname,
        displayName: p.display_name || uname,
        avatarUrl: p.avatar_url ?? '',
        discordId: p.discord_id ?? '',
        inThread: false,
      });
    }
  } catch {
    // public_profiles may not exist yet in some environments
  }

  const candidates = Array.from(seen.values()).slice(0, 8);
  return NextResponse.json(
    { candidates },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}
