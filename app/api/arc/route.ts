import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

const DAILY_READ_ARC_CAP = 20;
const READ_ARC_DELTA = 2;

function getArcTier(score: number): { label: string; canProposeFactChecks: boolean } {
  if (score >= 250) return { label: 'Trusted Reader', canProposeFactChecks: true };
  if (score >= 50) return { label: 'Contributor', canProposeFactChecks: true };
  return { label: 'Reader', canProposeFactChecks: false };
}

export async function GET() {
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ arcScore: 0, tier: getArcTier(0), ledger: [] });
  }

  const [{ data: profile }, { data: ledger }] = await Promise.all([
    authSupabase
      .from('public_profiles')
      .select('arc_score, role')
      .or(`auth_user_id.eq.${user.id},id.eq.${user.id}`)
      .limit(1)
      .maybeSingle(),
    authSupabase
      .from('arc_ledger')
      .select('id, delta, reason, ref_slug, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20),
  ]);

  const arcScore = profile?.arc_score ?? 0;
  return NextResponse.json(
    {
      arcScore,
      role: profile?.role ?? 'reader',
      tier: getArcTier(arcScore),
      ledger: ledger ?? [],
    },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}

export async function POST(req: NextRequest) {
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { slug?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const slug = body.slug?.replace(/^\/+/, '').trim();
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }

  // Enforce daily cap on reading ARC
  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);

  const { data: todayReads } = await authSupabase
    .from('arc_ledger')
    .select('delta, ref_slug')
    .eq('user_id', user.id)
    .eq('reason', 'article_read')
    .gte('created_at', startOfDay.toISOString());

  const alreadyAwardedForSlug = (todayReads ?? []).some((r: { ref_slug: string | null }) => r.ref_slug === slug);
  const todayTotal = (todayReads ?? []).reduce((sum: number, r: { delta: number }) => sum + r.delta, 0);

  if (alreadyAwardedForSlug || todayTotal >= DAILY_READ_ARC_CAP) {
    return NextResponse.json({ awarded: false, reason: alreadyAwardedForSlug ? 'already_counted' : 'daily_cap' });
  }

  const { error: insertErr } = await authSupabase.from('arc_ledger').insert({
    user_id: user.id,
    delta: READ_ARC_DELTA,
    reason: 'article_read',
    ref_slug: slug,
  });

  if (insertErr) {
    console.error('[api/arc POST]', insertErr.message);
    return NextResponse.json({ error: 'Failed to record ARC' }, { status: 500 });
  }

  // Sync total arc_score on public_profiles
  const { data: profile } = await authSupabase
    .from('public_profiles')
    .select('id, arc_score')
    .or(`auth_user_id.eq.${user.id},id.eq.${user.id}`)
    .limit(1)
    .maybeSingle();

  const newScore = (profile?.arc_score ?? 0) + READ_ARC_DELTA;
  if (profile?.id) {
    await authSupabase.from('public_profiles').update({ arc_score: newScore }).eq('id', profile.id);
  }

  return NextResponse.json({
    awarded: true,
    delta: READ_ARC_DELTA,
    arcScore: newScore,
    tier: getArcTier(newScore),
  });
}
