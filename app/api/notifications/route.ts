import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ notifications: [], unreadCount: 0 });
  }

  const { data, error } = await authSupabase
    .from('notifications')
    .select('id, actor_name, actor_avatar, type, slug, comment_id, body_preview, read_at, created_at')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error('[api/notifications GET]', error.message);
    return NextResponse.json({ notifications: [], unreadCount: 0 });
  }

  const notifications = data ?? [];
  const unreadCount = notifications.filter((n: { read_at: string | null }) => !n.read_at).length;

  return NextResponse.json(
    { notifications, unreadCount },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}

export async function PATCH(req: NextRequest) {
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { id?: string } = {};
  try {
    body = await req.json();
  } catch {
    /* mark all read */
  }

  const query = authSupabase
    .from('notifications')
    .update({ read_at: new Date().toISOString() })
    .eq('user_id', user.id)
    .is('read_at', null);

  const { error } = body.id ? await query.eq('id', body.id) : await query;

  if (error) {
    console.error('[api/notifications PATCH]', error.message);
    return NextResponse.json({ error: 'Failed to mark read' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
