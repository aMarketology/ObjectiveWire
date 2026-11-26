// =============================================================================
// /api/discord/comments
// =============================================================================
// GET  — fetch comments for a given article slug (from Supabase)
// POST — submit a new comment (requires Discord session), saves to Supabase,
//         forwards to Discord Forum Channel via webhook.
//         First comment on an article auto-creates a Forum Post (thread).
//         Subsequent comments append to the same thread.
//
// Required environment variables:
//   DISCORD_COMMENTS_WEBHOOK_URL   — Discord Forum Channel webhook URL
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient, createClient } from '@/lib/supabase/server';
import { SITE_CONFIG } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

function resolveSiteContext(req: NextRequest): { siteDomain: string; siteBaseUrl: string } {
  const rawHost = (req.headers.get('x-forwarded-host') || req.headers.get('host') || '').toLowerCase();
  const hostNoPort = rawHost.split(':')[0].replace(/^www\./, '');

  if (hostNoPort && hostNoPort !== 'localhost' && hostNoPort !== '127.0.0.1') {
    return {
      siteDomain: hostNoPort,
      siteBaseUrl: `https://www.${hostNoPort}`,
    };
  }

  if (rawHost.includes(':3001') || SITE_CONFIG.domain === 'objectivewire.org') {
    return {
      siteDomain: 'objectivewire.org',
      siteBaseUrl: 'https://www.objectivewire.org',
    };
  }

  return {
    siteDomain: SITE_CONFIG.domain,
    siteBaseUrl: SITE_CONFIG.url,
  };
}

const HOURLY_COMMENT_LIMIT = 10;
const ONE_HOUR_MS = 60 * 60 * 1000;
const memoryTimestamps: number[] = [];

function checkMemoryRateLimit(now: number): boolean {
  while (memoryTimestamps.length > 0 && now - memoryTimestamps[0] > ONE_HOUR_MS) {
    memoryTimestamps.shift();
  }
  return memoryTimestamps.length < HOURLY_COMMENT_LIMIT;
}

// ── GET /api/discord/comments?slug=<slug> ─────────────────────────────────────
export async function GET(req: NextRequest) {
  const rawSlug = req.nextUrl.searchParams.get('slug');
  if (!rawSlug) {
    return NextResponse.json({ error: 'Missing slug param' }, { status: 400 });
  }
  const cleanSlug = rawSlug.replace(/^\/+/, '');

  const supabase = await createClient();
  let { data, error } = await supabase
    .from('discord_comments')
    .select('id, slug, parent_id, discord_id, discord_username, discord_avatar, body, created_at')
    .in('slug', [cleanSlug, `/${cleanSlug}`])
    .order('created_at', { ascending: false });

  // Graceful fallback if parent_id column hasn't been migrated yet
  if (error?.code === '42703') {
    const fallback = await supabase
      .from('discord_comments')
      .select('id, slug, discord_id, discord_username, discord_avatar, body, created_at')
      .in('slug', [cleanSlug, `/${cleanSlug}`])
      .order('created_at', { ascending: false });
    data = (fallback.data ?? []).map((row) => ({ ...row, parent_id: null }));
    error = fallback.error;
  }

  if (error) {
    console.error('[discord/comments GET]', error.message);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }

  // Map DB column names to the camelCase the frontend expects
  const comments = (data ?? []).map((row: any) => ({
    id: row.id,
    slug: row.slug,
    parentId: row.parent_id ?? null,
    discordId: row.discord_id,
    discordUsername: row.discord_username,
    discordAvatar: row.discord_avatar,
    body: row.body,
    createdAt: row.created_at,
  }));

  return NextResponse.json(
    { comments },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}

// ── POST /api/discord/comments ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  let body: {
    slug: string;
    body: string;
    articleTitle?: string;
    guestName?: string;
    parentId?: string | null;
    replyToUsername?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { slug: rawSlug, body: text, articleTitle, parentId, replyToUsername } = body;

  if (!rawSlug || typeof rawSlug !== 'string') {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  const slug = rawSlug.replace(/^\/+/, '');
  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'Empty comment' }, { status: 400 });
  }
  if (text.trim().length > 1000) {
    return NextResponse.json({ error: 'Comment exceeds 1000 characters' }, { status: 400 });
  }

  // ── Determine commenter identity (Discord OAuth exclusive) ───────────────
  const authSupabase = await createAuthClient();
  const { data: { user } } = await authSupabase.auth.getUser();

  if (!user?.id || user.is_anonymous) {
    return NextResponse.json({ error: 'Sign in with Discord to comment.' }, { status: 401 });
  }

  const discordIdentity = user.identities?.find((id: { provider?: string }) => id.provider === 'discord');
  const isDiscordAuthed = user.app_metadata?.provider === 'discord' || !!discordIdentity;

  if (!isDiscordAuthed) {
    return NextResponse.json(
      { error: 'Commenting is exclusively a Discord feature. Connect your Discord account to comment.' },
      { status: 403 },
    );
  }

  const identityData = (discordIdentity?.identity_data ?? {}) as {
    provider_id?: string;
    sub?: string;
    full_name?: string;
    name?: string;
    avatar_url?: string;
    custom_claims?: { global_name?: string };
  };
  const commenterId = identityData.provider_id ?? identityData.sub ?? user.id;
  const commenterName =
    identityData.custom_claims?.global_name
    ?? identityData.full_name
    ?? identityData.name
    ?? user.user_metadata?.custom_claims?.global_name
    ?? user.user_metadata?.full_name
    ?? user.user_metadata?.name
    ?? user.email?.split('@')[0]
    ?? 'Discord User';
  const commenterAvatar =
    identityData.avatar_url
    ?? user.user_metadata?.avatar_url
    ?? '';

  const supabase = authSupabase;

  // ── Hard rate limit: max 10 comments & replies per hour ──────────────────
  const now = Date.now();
  const oneHourAgoIso = new Date(now - ONE_HOUR_MS).toISOString();
  const { count: hourlyCount, error: countError } = await supabase
    .from('discord_comments')
    .select('id', { count: 'exact', head: true })
    .gte('created_at', oneHourAgoIso);

  const overDbLimit = !countError && typeof hourlyCount === 'number' && hourlyCount >= HOURLY_COMMENT_LIMIT;
  const overMemLimit = !checkMemoryRateLimit(now);

  if (overDbLimit || overMemLimit) {
    return NextResponse.json(
      { error: 'Hourly comment limit reached (10 per hour). Please try again later.' },
      { status: 429, headers: { 'Retry-After': '3600' } },
    );
  }
  memoryTimestamps.push(now);

  // ── Save to Supabase ─────────────────────────────────────────────────────
  const cleanParentId = typeof parentId === 'string' && parentId.trim() ? parentId.trim() : null;
  let { data: inserted, error: insertError } = await supabase
    .from('discord_comments')
    .insert({
      slug,
      ...(cleanParentId ? { parent_id: cleanParentId } : {}),
      discord_id: commenterId,
      discord_username: commenterName,
      discord_avatar: commenterAvatar,
      body: text.trim(),
    })
    .select('id, slug, parent_id, discord_id, discord_username, discord_avatar, body, created_at')
    .single();

  // Graceful fallback if parent_id column hasn't been migrated yet
  if (insertError?.code === '42703') {
    const fallback = await supabase
      .from('discord_comments')
      .insert({
        slug,
        discord_id: commenterId,
        discord_username: commenterName,
        discord_avatar: commenterAvatar,
        body: text.trim(),
      })
      .select('id, slug, discord_id, discord_username, discord_avatar, body, created_at')
      .single();
    inserted = fallback.data ? { ...fallback.data, parent_id: null } : null;
    insertError = fallback.error;
  }

  if (insertError || !inserted) {
    console.error('[discord/comments POST]', insertError?.message, insertError?.code);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === 'development' && insertError?.message
            ? `Failed to save comment: ${insertError.message}`
            : 'Failed to save comment',
      },
      { status: 500 },
    );
  }

  const comment = {
    id: inserted.id,
    slug: inserted.slug,
    parentId: inserted.parent_id ?? cleanParentId ?? null,
    discordId: inserted.discord_id,
    discordUsername: inserted.discord_username,
    discordAvatar: inserted.discord_avatar,
    body: inserted.body,
    createdAt: inserted.created_at,
  };

  // ── Forward to Discord Forum Channel webhook ─────────────────────────────
  const webhookUrl = process.env.DISCORD_COMMENTS_WEBHOOK_URL;
  let discordSynced = false;
  let discordThreadId: string | null = null;

  if (webhookUrl) {
    try {
      const { siteDomain, siteBaseUrl } = resolveSiteContext(req);
      const threadKey = `${siteDomain}:${slug}`;

      // Check if a Forum Post (thread) already exists for this site + article
      const { data: thread } = await supabase
        .from('discord_threads')
        .select('thread_id')
        .in('slug', [threadKey, slug, `/${slug}`])
        .limit(1)
        .maybeSingle();

      // Always use the site's production URL for article links in Discord
      const articleUrl = `${siteBaseUrl}/${slug}`;
      const rawTitle = articleTitle || slug.split('/').pop()?.replace(/-/g, ' ') || slug;
      const prefix = `[${siteDomain}] `;
      const threadTitle = `${prefix}${rawTitle}`.slice(0, 100);

      const buildPayload = (isNewThread: boolean): Record<string, unknown> => ({
        username: `${commenterName} via ${siteDomain}`,
        avatar_url: commenterAvatar || undefined,
        ...(isNewThread ? { thread_name: threadTitle } : {}),
        embeds: [
          {
            color: 0x5865f2,
            author: {
              name: commenterName,
              icon_url: commenterAvatar || undefined,
            },
            description: text.trim(),
            fields: [
              ...(replyToUsername
                ? [{ name: '↩️ Replying to', value: `@${replyToUsername}`, inline: true }]
                : []),
              {
                name: '📰 Article',
                value: `[${rawTitle.slice(0, 100)}](${articleUrl})`,
              },
            ],
            footer: { text: siteDomain },
            timestamp: comment.createdAt,
          },
        ],
      });

      const sendToDiscord = async (existingThreadId?: string) => {
        const params = new URLSearchParams({ wait: 'true' });
        if (existingThreadId) params.set('thread_id', existingThreadId);
        return fetch(`${webhookUrl}?${params.toString()}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'DiscordBot (https://objectivewire.com, 1.0)',
          },
          body: JSON.stringify(buildPayload(!existingThreadId)),
        });
      };

      let webhookRes = await sendToDiscord(thread?.thread_id);

      // If the cached Discord thread was deleted in Discord (404), recreate it
      if (thread?.thread_id && webhookRes.status === 404) {
        await supabase.from('discord_threads').delete().eq('thread_id', thread.thread_id);
        webhookRes = await sendToDiscord(undefined);
      }

      if (webhookRes.ok) {
        const webhookData = await webhookRes.json().catch(() => ({} as { channel_id?: string }));
        const resolvedThreadId = webhookData.channel_id ?? thread?.thread_id ?? null;
        discordThreadId = resolvedThreadId;
        discordSynced = true;

        if (!thread?.thread_id && resolvedThreadId) {
          await supabase
            .from('discord_threads')
            .insert({ slug: threadKey, thread_id: resolvedThreadId, thread_name: threadTitle });
        }
      } else {
        const errBody = await webhookRes.text().catch(() => '');
        console.error('[discord/comments] webhook error', webhookRes.status, errBody);
      }
    } catch (err) {
      console.error('[discord/comments] webhook failed:', err);
      // Never fail the whole request over a webhook error
    }
  }

  return NextResponse.json({ comment, discordSynced, discordThreadId }, { status: 201 });
}
