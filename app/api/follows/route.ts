import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient, createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const targetUserId = req.nextUrl.searchParams.get('targetUserId');
  if (!targetUserId) {
    return NextResponse.json({ error: 'Missing targetUserId' }, { status: 400 });
  }

  const supabase = await createClient();
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();

  const [{ count: followersCount }, { count: followingCount }] = await Promise.all([
    supabase
      .from('user_follows')
      .select('follower_id', { count: 'exact', head: true })
      .eq('following_id', targetUserId),
    supabase
      .from('user_follows')
      .select('following_id', { count: 'exact', head: true })
      .eq('follower_id', targetUserId),
  ]);

  let isFollowing = false;
  if (user?.id && user.id !== targetUserId) {
    const { data: existing } = await supabase
      .from('user_follows')
      .select('follower_id')
      .eq('follower_id', user.id)
      .eq('following_id', targetUserId)
      .maybeSingle();
    isFollowing = Boolean(existing);
  }

  return NextResponse.json(
    {
      followersCount: followersCount ?? 0,
      followingCount: followingCount ?? 0,
      isFollowing,
    },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}

export async function POST(req: NextRequest) {
  let body: { targetUserId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const targetUserId = body.targetUserId?.trim();
  if (!targetUserId) {
    return NextResponse.json({ error: 'Missing targetUserId' }, { status: 400 });
  }

  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ error: 'Sign in to follow users.' }, { status: 401 });
  }
  if (user.id === targetUserId) {
    return NextResponse.json({ error: 'Cannot follow yourself.' }, { status: 400 });
  }

  const { error } = await authSupabase
    .from('user_follows')
    .upsert({ follower_id: user.id, following_id: targetUserId }, { onConflict: 'follower_id,following_id' });

  if (error) {
    console.error('[api/follows POST]', error.message);
    return NextResponse.json({ error: 'Failed to follow user' }, { status: 500 });
  }

  // Best-effort follow notification
  try {
    const actorName =
      user.user_metadata?.custom_claims?.global_name
      ?? user.user_metadata?.full_name
      ?? user.user_metadata?.name
      ?? user.email?.split('@')[0]
      ?? 'Someone';
    await authSupabase.from('notifications').insert({
      user_id: targetUserId,
      actor_name: actorName,
      actor_avatar: user.user_metadata?.avatar_url ?? null,
      type: 'follow',
      body_preview: `${actorName} started following you`,
    });
  } catch {
    /* ignore notification errors */
  }

  return NextResponse.json({ following: true }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const targetUserId = req.nextUrl.searchParams.get('targetUserId')?.trim();
  if (!targetUserId) {
    return NextResponse.json({ error: 'Missing targetUserId' }, { status: 400 });
  }

  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ error: 'Sign in to unfollow users.' }, { status: 401 });
  }

  const { error } = await authSupabase
    .from('user_follows')
    .delete()
    .eq('follower_id', user.id)
    .eq('following_id', targetUserId);

  if (error) {
    console.error('[api/follows DELETE]', error.message);
    return NextResponse.json({ error: 'Failed to unfollow user' }, { status: 500 });
  }

  return NextResponse.json({ following: false });
}
