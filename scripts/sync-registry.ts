#!/usr/bin/env tsx
// =============================================================================
// scripts/sync-registry.ts
// =============================================================================
// Adds any page that isn't yet in lib/content-registry.ts.
//
// Usage:
//   npm run registry:sync            — preview new entries (dry-run)
//   npm run registry:sync -- --write — apply changes to content-registry.ts
//
// How it works:
//   1. Scans app/**/page.tsx and reads the `metadata` export via regex
//   2. Compares slugs against existing contentRegistry entries
//   3. For each missing slug, generates a ContentEntry with sensible defaults:
//      - category auto-detected from slug prefix
//      - tags generated from slug segments
//      - publishDate = today (update after the fact)
//      - priority derived from slug depth / category
//   4. With --write, appends the new entries into content-registry.ts
//      without touching existing entries
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

// Load .env.local so Supabase env vars are available when run via tsx
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const dotenv = require('dotenv') as { config: (opts?: { path?: string }) => void };
  dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });
} catch { /* dotenv not installed — env vars must be set externally */ }

// ---------------------------------------------------------------------------
// config
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const DEFAULT_AUTHOR = 'ObjectWire Editorial';
const DEFAULT_AUTHOR_SLUG = undefined; // only set on named-author entries
const TODAY = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
const WRITE_FLAG = process.argv.includes('--write');

// ---------------------------------------------------------------------------
// category / tag detection
// ---------------------------------------------------------------------------
const CATEGORY_MAP: { prefix: string; category: string; tags: string[] }[] = [
  { prefix: '/winter-olympics',    category: 'Sports',        tags: ['Winter Olympics', 'Milan Cortina 2026'] },
  { prefix: '/world-cup',          category: 'Sports',        tags: ['World Cup', 'Soccer', 'FIFA'] },
  { prefix: '/formula-1',          category: 'Sports',        tags: ['Formula 1', 'F1', 'Motorsport'] },
  { prefix: '/redbull',            category: 'Sports',        tags: ['Red Bull', 'Motorsport'] },
  { prefix: '/youtube',            category: 'YouTube',       tags: ['YouTube', 'Creator Economy'] },
  { prefix: '/nvidia',             category: 'Technology',    tags: ['NVIDIA', 'AI Hardware', 'GPU'] },
  { prefix: '/microsoft',          category: 'Technology',    tags: ['Microsoft', 'Big Tech'] },
  { prefix: '/google',             category: 'Technology',    tags: ['Google', 'Big Tech'] },
  { prefix: '/apple',              category: 'Technology',    tags: ['Apple', 'Big Tech'] },
  { prefix: '/open-ai',            category: 'Technology',    tags: ['OpenAI', 'Artificial Intelligence'] },
  { prefix: '/intel',              category: 'Technology',    tags: ['Intel', 'Semiconductors'] },
  { prefix: '/blitzy',             category: 'Technology',    tags: ['Blitzy', 'AI', 'SaaS'] },
  { prefix: '/tech',               category: 'Technology',    tags: ['Technology'] },
  { prefix: '/technology',         category: 'Technology',    tags: ['Technology'] },
  { prefix: '/saas',               category: 'Technology',    tags: ['SaaS', 'Software'] },
  { prefix: '/github',             category: 'Technology',    tags: ['GitHub', 'Open Source'] },
  { prefix: '/nasa',               category: 'Science',       tags: ['NASA', 'Space'] },
  { prefix: '/bio-hacking',        category: 'Science',       tags: ['Biohacking', 'Health', 'Science'] },
  { prefix: '/neurophos',          category: 'Science',       tags: ['Neurophos', 'AI Hardware', 'Photonics'] },
  { prefix: '/earth',              category: 'Science',       tags: ['Earth', 'Environment', 'Science'] },
  { prefix: '/research',           category: 'Research',      tags: ['Research', 'Analysis'] },
  { prefix: '/finance',            category: 'Finance',       tags: ['Finance', 'Economy'] },
  { prefix: '/bank-of-america',    category: 'Finance',       tags: ['Bank of America', 'Finance'] },
  { prefix: '/crypto',             category: 'Finance',       tags: ['Crypto', 'Cryptocurrency', 'Web3'] },
  { prefix: '/elon-musk',          category: 'Business',      tags: ['Elon Musk', 'Tesla', 'xAI'] },
  { prefix: '/trump',              category: 'Politics',      tags: ['Donald Trump', 'US Politics'] },
  { prefix: '/disney',             category: 'Entertainment', tags: ['Disney', 'Entertainment'] },
  { prefix: '/artists',            category: 'Entertainment', tags: ['Music', 'Artists'] },
  { prefix: '/entertainment',      category: 'Entertainment', tags: ['Entertainment'] },
  { prefix: '/video-games',        category: 'Gaming',        tags: ['Video Games', 'Gaming'] },
  { prefix: '/beastgames',         category: 'YouTube',       tags: ['Beast Games', 'MrBeast', 'YouTube'] },
  { prefix: '/cars',               category: 'Automotive',    tags: ['Cars', 'Automotive'] },
  { prefix: '/college',            category: 'Education',     tags: ['College', 'Education'] },
  { prefix: '/influencer',         category: 'YouTube',       tags: ['Influencer', 'Social Media'] },
  { prefix: '/social',             category: 'Social Media',  tags: ['Social Media'] },
  { prefix: '/ngos',               category: 'World Affairs', tags: ['NGO', 'Nonprofits'] },
  { prefix: '/missing-persons',    category: 'Investigations',tags: ['Missing Persons', 'Investigations'] },
  { prefix: '/investigations',     category: 'Investigations',tags: ['Investigations'] },
  { prefix: '/austin-private',     category: 'Investigations',tags: ['Private Investigations', 'Austin'] },
  { prefix: '/ironspring',         category: 'Business',      tags: ['Startups', 'Venture Capital', 'Construction Tech'] },
  { prefix: '/objectwire',         category: 'Meta',          tags: ['ObjectWire'] },
  { prefix: '/news',               category: 'News',          tags: ['News'] },
  { prefix: '/blog',               category: 'Blog',          tags: ['Blog'] },
  { prefix: '/podcasts',           category: 'Media',         tags: ['Podcasts'] },
  { prefix: '/service',            category: 'Services',      tags: ['Services'] },
  { prefix: '/about',              category: 'Meta',          tags: ['About', 'ObjectWire'] },
  { prefix: '/team',               category: 'Meta',          tags: ['Team', 'ObjectWire'] },
  { prefix: '/authors',            category: 'Meta',          tags: ['Author', 'ObjectWire'] },
  { prefix: '/clothing',           category: 'Lifestyle',     tags: ['Clothing', 'Fashion'] },
  { prefix: '/define',             category: 'Reference',     tags: ['Definitions', 'Reference'] },
  { prefix: '/get-help',           category: 'Support',       tags: ['Help', 'Support'] },
  { prefix: '/search',             category: 'Meta',          tags: ['Search'] },
  { prefix: '/site-index',         category: 'Meta',          tags: ['Site Index', 'Sitemap'] },
  { prefix: '/index',              category: 'Meta',          tags: ['Index'] },
  { prefix: '/events',             category: 'Events',        tags: ['Events'] },
  { prefix: '/privacy-policy',     category: 'Legal',         tags: ['Privacy', 'Legal'] },
  { prefix: '/terms-of-service',   category: 'Legal',         tags: ['Terms', 'Legal'] },
  { prefix: '/copyright',          category: 'Legal',         tags: ['Copyright', 'Legal'] },
  { prefix: '/corrections',        category: 'Meta',          tags: ['Corrections', 'Editorial'] },
  { prefix: '/editorial-standards',category: 'Meta',          tags: ['Editorial', 'Standards'] },
];

function detectCategory(slug: string): { category: string; tags: string[] } {
  for (const rule of CATEGORY_MAP) {
    if (slug.startsWith(rule.prefix)) {
      // merge slug-segment tags with rule tags
      const extraTags = slug
        .split('/')
        .filter(Boolean)
        .slice(1) // skip the top-level segment already in rule.tags
        .map(s =>
          s.replace(/-/g, ' ')
           .replace(/\b\w/g, c => c.toUpperCase())
        )
        .filter(t => t.length > 2 && !rule.tags.some(rt => rt.toLowerCase() === t.toLowerCase()));
      return { category: rule.category, tags: [...rule.tags, ...extraTags] };
    }
  }
  // fallback — derive from first slug segment
  const topSegment = slug.split('/').filter(Boolean)[0] ?? 'general';
  const category = topSegment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return { category, tags: [category] };
}

function detectPriority(slug: string, category: string): number {
  const depth = slug.split('/').filter(Boolean).length;
  if (depth === 1) return 0.8;  // hub pages
  if (['Sports', 'Technology', 'Finance', 'News'].includes(category)) return 0.7;
  if (['Legal', 'Meta', 'Support'].includes(category)) return 0.3;
  return 0.6;
}

function detectChangeFrequency(category: string): string {
  if (['Sports', 'News', 'Technology'].includes(category)) return 'weekly';
  if (['Legal', 'Meta', 'Support', 'Reference'].includes(category)) return 'monthly';
  return 'weekly';
}

// ---------------------------------------------------------------------------
// scan all page.tsx files → extract slug + metadata
// ---------------------------------------------------------------------------
interface PageMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorSlug?: string;
  publishedTime?: string;  // ISO-8601 from openGraph.publishedTime
  imageUrl?: string;       // from openGraph.images[0].url
  imageAlt?: string;       // from openGraph.images[0].alt
  extractedTags?: string[]; // from openGraph.tags
  filePath: string;
}

// Categories we still register (sitemap + homepage need them), but that are
// NOT real articles — filtered at query time by isRealArticle in registry-service.
// We still want them in the registry for the sitemap; they just don't surface in feeds.

const SKIP_PREFIXES = ['/api/', '/(', '/feeds/', '/rss', '/news-sitemap', '/robots', '/sitemap'];
const SKIP_EXACT   = ['/', '', '/page.tsx'];

// Non-article route prefixes that add no value to the registry at all
const SKIP_REGISTRY_PREFIXES = [
  '/api/',
  '/auth/',
  '/account/',
  '/login/',
  '/profile/',
  '/saved/',
  '/search/',
  '/admin/',
  '/(admin)',
  '/feed.json',
  '/rss',
  '/feeds/',
  '/news-sitemap',
  '/image-sitemap',
  '/sitemap',
  '/robots',
  '/cursor/',       // internal test pages
  '/articlepage/',  // legacy test stubs
  '/newsarticle/',  // legacy test stubs
];

function extractMetadataFromFile(filePath: string): PageMeta | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // derive slug
    const relative = path.relative(APP_DIR, filePath).replace(/\\/g, '/');

    // skip admin route group entirely
    if (relative.startsWith('(admin)')) return null;

    const rawSlug = '/' + relative
      .replace(/\/page\.tsx$/, '')
      .replace(/^page\.tsx$/, '')
      .replace(/^\(public\)\//, '')
      .replace(/^\(admin\)\//, '');

    const slug = rawSlug === '/page.tsx' ? '/' : rawSlug;

    if (SKIP_EXACT.includes(slug)) return null;
    if (SKIP_PREFIXES.some(p => slug.startsWith(p))) return null;
    if (SKIP_REGISTRY_PREFIXES.some(p => slug.startsWith(p))) return null;

    // ── Quality gate 1: must have a real metadata export ──────────────────
    if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) {
      return null;
    }

    // ── Extract title ──────────────────────────────────────────────────────
    const titleMatch =
      content.match(/title\s*:\s*['"`]([^'"`\r\n]{3,200})['"`]/) ||
      content.match(/<h1[^>]*>([^<]{3,200})<\/h1>/);
    const rawTitle = titleMatch?.[1]?.trim() ?? '';

    // Quality gate 2: reject fallback/slug-derived titles
    const slugDerived = slug.replace(/\//g, ' › ').trim();
    if (!rawTitle || rawTitle === slugDerived) return null;

    // ── Extract description ────────────────────────────────────────────────
    const descMatch =
      content.match(/description\s*:\s*['"`]([^'"`\r\n]{10,300})['"`]/) ||
      content.match(/content\s*:\s*['"`]([^'"`\r\n]{10,300})['"`]/);
    const rawDesc = descMatch?.[1]?.trim() ?? '';

    // Quality gate 3: reject fallback description and very short ones
    if (!rawDesc || rawDesc.startsWith('ObjectWire coverage of') || rawDesc.length < 60) return null;

    // ── Extract openGraph.publishedTime ───────────────────────────────────
    const pubTimeMatch = content.match(/publishedTime\s*:\s*['"`]([^'"`\r\n]{10,30})['"`]/);
    const publishedTime = pubTimeMatch?.[1]?.trim();

    // ── Extract openGraph.images[0].url ──────────────────────────────────
    const ogImageMatch =
      content.match(/images\s*:\s*\[\s*\{[^}]*url\s*:\s*['"`]([^'"`]+)['"`]/) ||
      content.match(/imageUrl\s*:\s*['"`]([^'"`]+)['"`]/);
    const imageUrl = ogImageMatch?.[1]?.trim();

    // ── Extract openGraph.images[0].alt ──────────────────────────────────
    const ogAltMatch = content.match(/images\s*:\s*\[\s*\{[^}]*alt\s*:\s*['"`]([^'"`]+)['"`]/);
    const imageAlt = ogAltMatch?.[1]?.trim();

    // ── Extract openGraph.tags ────────────────────────────────────────────
    const ogTagsMatch = content.match(/openGraph[\s\S]{0,500}tags\s*:\s*\[([^\]]+)\]/);
    let extractedTags: string[] | undefined;
    if (ogTagsMatch) {
      extractedTags = ogTagsMatch[1]
        .match(/['"`]([^'"`]+)['"`]/g)
        ?.map(t => t.replace(/['"`]/g, '').trim())
        .filter(t => t.length > 1);
    }

    // ── Extract authorSlug ────────────────────────────────────────────────
    const authorSlugMatch =
      content.match(/author_slug\s*:\s*['"`]([^'"`\r\n]{2,80})['"`]/) ||
      content.match(/authorSlug\s*:\s*['"`]([^'"`\r\n]{2,80})['"`]/);
    const authorSlug = authorSlugMatch?.[1]?.trim();

    // ── Extract author display name ───────────────────────────────────────
    const authorMatch =
      content.match(/author\s*:\s*['"`]([^'"`\r\n]{3,80})['"`]/) ||
      content.match(/author\s*:\s*\{[^}]*name\s*:\s*['"`]([^'"`]{3,80})['"`]/);
    const author = authorMatch?.[1]?.trim() ?? DEFAULT_AUTHOR;

    return {
      slug,
      title: rawTitle.slice(0, 300),
      description: rawDesc.slice(0, 500),
      author,
      authorSlug,
      publishedTime,
      imageUrl,
      imageAlt,
      extractedTags,
      filePath,
    };
  } catch {
    return null;
  }
}

function scanApp(dir: string, results: PageMeta[] = []): PageMeta[] {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === '_next') continue;
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      scanApp(fullPath, results);
    } else if (item.name === 'page.tsx' || item.name === 'page.ts') {
      const meta = extractMetadataFromFile(fullPath);
      if (meta) results.push(meta);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// read existing registry slugs — from Supabase (source of truth)
// ---------------------------------------------------------------------------
async function getRegisteredSlugsFromSupabase(): Promise<Set<string>> {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
            ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return new Set();

  let createClient: (url: string, key: string) => { from: (t: string) => { select: (cols: string) => Promise<{ data: { slug: string }[] | null; error: { message: string } | null }> } };
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ({ createClient } = require('@supabase/supabase-js'));
  } catch { return new Set(); }

  const supabase = createClient(url, key);
  const { data, error } = await supabase.from('content_registry').select('slug');
  if (error || !data) return new Set();
  return new Set(data.map((r: { slug: string }) => r.slug));
}

// ---------------------------------------------------------------------------
// generate ContentEntry TypeScript source for a missing page
// ---------------------------------------------------------------------------
function sanitizeStr(s: string): string {
  return s
    .replace(/\\n/g, ' ')         // literal \n escape sequences → space
    .replace(/\\t/g, ' ')         // literal \t escape sequences → space
    .replace(/\\r/g, ' ')         // literal \r escape sequences → space
    .replace(/[\r\n\t]+/g, ' ')   // actual control characters → space
    .replace(/\\/g, '\\\\')       // escape remaining backslashes
    .replace(/"/g, '\\"')         // escape double-quotes
    .replace(/\s{2,}/g, ' ')      // collapse multiple spaces
    .trim();
}

// Supabase row shape (snake_case column names)
interface RegistryRow {
  slug: string;
  title: string;
  description: string;
  publish_date: string;
  modified_date: string;
  category: string;
  tags: string[];
  author: string;
  author_slug?: string;
  priority: number;
  change_frequency: string;
  image_url?: string;
  image_alt?: string;
}

function buildEntryObject(meta: PageMeta): RegistryRow {
  const { category, tags: categoryTags } = detectCategory(meta.slug);

  // Prefer openGraph tags extracted from the file; fall back to slug-derived tags
  const tags = (meta.extractedTags && meta.extractedTags.length >= 2)
    ? meta.extractedTags
    : categoryTags;

  // Use the real published date from openGraph.publishedTime if available.
  // Fall back to TODAY only for pages that genuinely don't have a date yet.
  const publishDate = meta.publishedTime
    ? meta.publishedTime.split('T')[0]  // "2026-04-28T00:00:00Z" → "2026-04-28"
    : TODAY;

  return {
    slug: meta.slug,
    title: meta.title.slice(0, 300),
    description: meta.description.slice(0, 500),
    publish_date: publishDate,
    modified_date: publishDate,
    category,
    tags,
    author: meta.author,
    author_slug: meta.authorSlug,
    priority: detectPriority(meta.slug, category),
    change_frequency: detectChangeFrequency(category),
    image_url: meta.imageUrl,
    image_alt: meta.imageAlt,
  };
}

async function upsertToSupabase(rows: RegistryRow[]): Promise<void> {
  const url  = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
            ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.warn('⚠️   NEXT_PUBLIC_SUPABASE_URL or SUPABASE key not set — skipping Supabase upsert.');
    return;
  }

  // Dynamic import so the script doesn't crash if @supabase/supabase-js isn't found
  let createClient: (url: string, key: string) => { from: (t: string) => { upsert: (rows: RegistryRow[], opts?: object) => Promise<{ error: { message: string } | null }> } };
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    ({ createClient } = require('@supabase/supabase-js'));
  } catch {
    console.warn('⚠️   @supabase/supabase-js not found — skipping Supabase upsert.');
    return;
  }

  const supabase = createClient(url, key);
  const BATCH = 200;

  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    const { error } = await supabase
      .from('content_registry')
      .upsert(batch, { onConflict: 'slug' });
    if (error) {
      console.error(`❌  Supabase upsert failed (batch ${i / BATCH + 1}): ${error.message}`);
    } else {
      console.log(`    ✓ Supabase: upserted batch ${i / BATCH + 1} (${batch.length} rows)`);
    }
  }
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
async function main() {
  console.log('🔍  Scanning app directory for page.tsx files…');
  const allPages = scanApp(APP_DIR);
  console.log(`    Found ${allPages.length} pages with real metadata\n`);

  if (allPages.length === 0) {
    console.warn('⚠️  No pages passed the metadata quality gate. Check that your page.tsx files export `metadata` with a real title and description (≥60 chars).');
    return;
  }

  // Source of truth is now Supabase — check what's already registered there
  const registeredSlugs = await getRegisteredSlugsFromSupabase();
  console.log(`📋  Currently registered in Supabase: ${registeredSlugs.size} entries\n`);

  const missing = allPages.filter(p => !registeredSlugs.has(p.slug));

  // Separate pages with real dates from ones that will get TODAY as fallback
  const withDate    = missing.filter(p => p.publishedTime);
  const withoutDate = missing.filter(p => !p.publishedTime);

  console.log(`➕  Missing from registry: ${missing.length} pages`);
  if (withDate.length)    console.log(`    ✓ ${withDate.length} have a real publishedTime from openGraph`);
  if (withoutDate.length) console.log(`    ⚠ ${withoutDate.length} will get today's date (no openGraph.publishedTime found) — update these manually in Supabase`);
  console.log('');

  if (missing.length === 0) {
    console.log('✅  Registry is fully up to date!');
    return;
  }

  if (!WRITE_FLAG) {
    // Preview mode — just print what would be added
    console.log('--- PREVIEW (pass --write to apply) ---\n');
    for (const page of missing.slice(0, 20)) {
      console.log(`  ${page.slug}`);
    }
    if (missing.length > 20) console.log(`  … and ${missing.length - 20} more`);
    console.log('\n--- END PREVIEW ---');
    console.log('\nRun:  npm run registry:sync -- --write');
    return;
  }

  // Upsert missing entries to Supabase only (TS file is no longer the store)
  const rows = missing.map(buildEntryObject);
  await upsertToSupabase(rows);

  console.log('✅  Done. Review the new entries in Supabase and fill in real publishDates + imageUrls.');
}

main().catch(err => { console.error(err); process.exit(1); });

