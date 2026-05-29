#!/usr/bin/env tsx
// =============================================================================
// scripts/notify-discord.ts
// =============================================================================
// Posts newly published articles to the ObjectWire Discord #new-articles
// channel via webhook. This is the "Discord -> site" half of the growth
// flywheel: every article that ships becomes a rich embed in Discord with a
// thumbnail, category, excerpt, and a link back to the site.
//
// SOURCE OF TRUTH:  lib/registry-data.json  (written by sync-registry.ts)
// LEDGER:           lib/discord-announced.json  (slugs already posted)
//
// IDEMPOTENT: a slug is only ever posted once. The ledger prevents duplicates,
// so this is safe to run on every build (postbuild).
//
// FIRST RUN (no ledger): seeds the ledger with ALL current slugs WITHOUT
// posting, so the existing ~137-article backlog never floods the channel.
// Only articles added after the first run get announced.
//
// Usage:
//   npm run discord:notify              — post new articles (default)
//   npm run discord:notify -- --dry-run — show what would post, send nothing
//   npm run discord:notify -- --seed    — mark everything announced, post nothing
//   npm run discord:notify -- --limit 5 — cap posts this run (safety)
//
// Required env:
//   DISCORD_NEW_ARTICLES_WEBHOOK_URL — Discord #new-articles channel webhook
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const REGISTRY_PATH = path.join(ROOT, 'lib', 'registry-data.json');
const LEDGER_PATH = path.join(ROOT, 'lib', 'discord-announced.json');

const SITE = 'https://www.objectivewire.com';
const WEBHOOK = process.env.DISCORD_NEW_ARTICLES_WEBHOOK_URL;

const DRY_RUN = process.argv.includes('--dry-run');
const SEED = process.argv.includes('--seed');
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg !== -1 ? parseInt(process.argv[limitArg + 1] ?? '0', 10) || Infinity : Infinity;

// Per-category embed accent colors (decimal int for Discord).
const CATEGORY_COLOR: Record<string, number> = {
  Sports:        0x15803d,
  YouTube:       0xdc2626,
  Technology:    0x2563eb,
  Science:       0x0d9488,
  Finance:       0x16a34a,
  Crypto:        0xf59e0b,
  Business:      0x7c3aed,
  Politics:      0xdc2626,
  Entertainment: 0xb45309,
  Culture:       0xdb2777,
  Creator:       0xb45309,
  News:          0xb91c1c,
};

interface RegistryEntry {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  category: string;
  tags?: string[];
  author?: string;
  imageUrl?: string;
}

function readJson<T>(p: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf-8')) as T;
  } catch {
    return fallback;
  }
}

function fullUrl(slug: string): string {
  const clean = slug.startsWith('/') ? slug : `/${slug}`;
  return `${SITE}${clean}`;
}

function colorFor(category: string): number {
  return CATEGORY_COLOR[category] ?? 0x5865f2;
}

function truncate(s: string, n: number): string {
  if (!s) return '';
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '\u2026';
}

async function postArticle(entry: RegistryEntry): Promise<boolean> {
  const url = fullUrl(entry.slug);
  const payload = {
    // username/avatar make the bot post read as the ObjectWire newsroom
    username: 'ObjectWire',
    embeds: [
      {
        title: truncate(entry.title, 240),
        url,
        description: truncate(entry.description, 300),
        color: colorFor(entry.category),
        fields: [
          { name: 'Category', value: entry.category || 'News', inline: true },
          ...(entry.author ? [{ name: 'By', value: entry.author, inline: true }] : []),
        ],
        ...(entry.imageUrl ? { image: { url: entry.imageUrl } } : {}),
        footer: { text: 'objectivewire.com' },
        timestamp: new Date(entry.publishDate).toISOString(),
      },
    ],
  };

  const res = await fetch(`${WEBHOOK}?wait=true`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'ObjectWire (https://objectivewire.com, 1.0)',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    console.error(`   \u2717 ${entry.slug} \u2014 ${res.status} ${txt.slice(0, 200)}`);
    return false;
  }
  return true;
}

async function main() {
  const registry = readJson<RegistryEntry[]>(REGISTRY_PATH, []);
  if (registry.length === 0) {
    console.warn('\u26a0\ufe0f  registry-data.json is empty or missing. Run `npm run registry:write` first.');
    return;
  }

  const ledgerExists = fs.existsSync(LEDGER_PATH);
  const announced = new Set(readJson<string[]>(LEDGER_PATH, []));

  // First run OR explicit --seed: mark everything announced, post nothing.
  if (!ledgerExists || SEED) {
    const allSlugs = registry.map((e) => e.slug);
    if (!DRY_RUN) {
      fs.writeFileSync(LEDGER_PATH, JSON.stringify(allSlugs.sort(), null, 2) + '\n', 'utf-8');
    }
    console.log(
      `\ud83c\udf31  Seeded Discord ledger with ${allSlugs.length} existing slugs (posted nothing).` +
        (DRY_RUN ? ' [dry-run, not written]' : '') +
        '\n    New articles added from here on will be announced.'
    );
    return;
  }

  // Find articles not yet announced.
  const fresh = registry.filter((e) => !announced.has(e.slug));

  if (fresh.length === 0) {
    console.log('\u2705  Discord up to date \u2014 no new articles to announce.');
    return;
  }

  // Newest first, then apply safety cap.
  fresh.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
  const toPost = fresh.slice(0, LIMIT);

  console.log(`\ud83d\udce3  ${fresh.length} new article(s) to announce${toPost.length < fresh.length ? ` (capped to ${toPost.length})` : ''}:`);

  if (DRY_RUN) {
    for (const e of toPost) console.log(`   + ${e.slug}  \u2014 ${e.title}`);
    console.log('\n[dry-run] Sent nothing. Remove --dry-run to post.');
    return;
  }

  if (!WEBHOOK) {
    console.warn('\u26a0\ufe0f  DISCORD_NEW_ARTICLES_WEBHOOK_URL not set \u2014 skipping (this is fine in CI/local without the env var).');
    return;
  }

  let posted = 0;
  for (const entry of toPost) {
    const ok = await postArticle(entry);
    if (ok) {
      announced.add(entry.slug);
      posted++;
      console.log(`   \u2713 ${entry.slug}`);
    }
    // Discord webhook rate limit: be gentle, ~1 post / 1.2s
    await new Promise((r) => setTimeout(r, 1200));
  }

  // Persist ledger (only slugs that actually posted are added).
  fs.writeFileSync(LEDGER_PATH, JSON.stringify([...announced].sort(), null, 2) + '\n', 'utf-8');
  console.log(`\n\u2705  Announced ${posted}/${toPost.length} article(s) to Discord.`);
}

main().catch((err) => {
  console.error('[notify-discord] fatal:', err);
  // Never fail a build over a notification error.
  process.exit(0);
});
