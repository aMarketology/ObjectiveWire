import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient, createClient } from '@/lib/supabase/server';
import { SITE_CONFIG } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

function resolveSiteDomain(req: NextRequest): string {
  const rawHost = (req.headers.get('x-forwarded-host') || req.headers.get('host') || '').toLowerCase();
  const hostNoPort = rawHost.split(':')[0].replace(/^www\./, '');
  if (hostNoPort && hostNoPort !== 'localhost' && hostNoPort !== '127.0.0.1') {
    return hostNoPort;
  }
  if (rawHost.includes(':3001') || SITE_CONFIG.domain === 'objectivewire.org') {
    return 'objectivewire.org';
  }
  return SITE_CONFIG.domain;
}

async function computeSummary(siteDomain: string, slug: string, userId?: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('article_scores')
    .select('user_id, verdict, arc_weight')
    .eq('site_domain', siteDomain)
    .eq('slug', slug);

  if (error || !data) {
    return {
      objectivePct: null as number | null,
      totalRatings: 0,
      objectiveCount: 0,
      needsContextCount: 0,
      userVerdict: null as 'objective' | 'needs_context' | null,
    };
  }

  let objWeight = 0;
  let totalWeight = 0;
  let objectiveCount = 0;
  let needsContextCount = 0;
  let userVerdict: 'objective' | 'needs_context' | null = null;

  for (const row of data as Array<{ user_id: string; verdict: 'objective' | 'needs_context'; arc_weight: number }>) {
    const w = Math.max(1, row.arc_weight || 1);
    totalWeight += w;
    if (row.verdict === 'objective') {
      objWeight += w;
      objectiveCount += 1;
    } else {
      needsContextCount += 1;
    }
    if (userId && row.user_id === userId) {
      userVerdict = row.verdict;
    }
  }

  const totalRatings = objectiveCount + needsContextCount;
  const objectivePct = totalWeight > 0 ? Math.round((objWeight / totalWeight) * 100) : null;

  return { objectivePct, totalRatings, objectiveCount, needsContextCount, userVerdict };
}

export async function GET(req: NextRequest) {
  const slug = (req.nextUrl.searchParams.get('slug') ?? '').replace(/^\/+/, '').trim();
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  const siteDomain = resolveSiteDomain(req);

  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  const summary = await computeSummary(siteDomain, slug, user?.id);

  return NextResponse.json(summary, { headers: { 'Cache-Control': 'no-store, max-age=0' } });
}

export async function POST(req: NextRequest) {
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();
  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ error: 'Sign in to rate article objectivity.' }, { status: 401 });
  }

  let body: { slug?: string; verdict?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const slug = body.slug?.replace(/^\/+/, '').trim() ?? '';
  const verdict = body.verdict;
  if (!slug || (verdict !== 'objective' && verdict !== 'needs_context')) {
    return NextResponse.json({ error: 'Invalid slug or verdict.' }, { status: 400 });
  }

  const siteDomain = resolveSiteDomain(req);

  // Weight rating by user's ARC tier (1x Reader, 2x Contributor, 3x Trusted)
  let arcWeight = 1;
  try {
    const { data: profile } = await authSupabase
      .from('public_profiles')
      .select('arc_score')
      .or(`auth_user_id.eq.${user.id},id.eq.${user.id}`)
      .limit(1)
      .maybeSingle();
    const score = profile?.arc_score ?? 0;
    if (score >= 250) arcWeight = 3;
    else if (score >= 50) arcWeight = 2;
  } catch {
    /* default 1x */
  }

  const { error } = await authSupabase.from('article_scores').upsert(
    {
      site_domain: siteDomain,
      slug,
      user_id: user.id,
      verdict,
      arc_weight: arcWeight,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'site_domain,slug,user_id' },
  );

  if (error) {
    console.error('[api/article-scores POST]', error.message);
    return NextResponse.json({ error: 'Failed to save rating.' }, { status: 500 });
  }

  const summary = await computeSummary(siteDomain, slug, user.id);
  return NextResponse.json(summary, { status: 200 });
}
