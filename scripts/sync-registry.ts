#!/usr/bin/env tsx
// =============================================================================
// scripts/sync-registry.ts
// =============================================================================
// Scans app/**/page.tsx files, extracts metadata, and writes
// lib/registry-data.json — the single source of truth for the content
// registry (sitemap, RSS, news-sitemap, homepage, hub pages).
//
// No Supabase involved. The JSON is committed to the repo and imported
// as a static asset by all SEO consumers. New article = new build = updated JSON.
//
// Usage:
//   npm run registry:sync            — preview (dry-run)
//   npm run registry:sync -- --write — write lib/registry-data.json
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';
import { getActiveSite, getArticleOwnerSite, getActiveSiteConfig } from '../lib/active-site';
import { detectCategory, detectPriority, detectChangeFreq as detectChangeFrequency } from '../lib/category-map';

// ---------------------------------------------------------------------------
// config
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const activeSite = getActiveSite();
const siteConfig = getActiveSiteConfig();
const LOCAL_REGISTRY_PATH = path.join(ROOT, 'lib', `registry-data-${activeSite}.json`);
const DEFAULT_AUTHOR = 'ObjectWire Editorial';
const TODAY = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
const WRITE_FLAG = process.argv.includes('--write');

// ---------------------------------------------------------------------------
// scan all page.tsx files → extract slug + metadata
// ---------------------------------------------------------------------------
interface PageMeta {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorSlug?: string;
  publishedTime?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  extractedTags?: string[];
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

    // Filter by site ownership
    const siteExportMatch = content.match(/export\s+const\s+registrySite\s*=\s*['"`](org|main)['"`]/);
    const explicitSite = siteExportMatch?.[1];
    const ownerSite = getArticleOwnerSite(slug, explicitSite);

    if (ownerSite !== activeSite) {
      return null;
    }

    // ── Quality gate 1: must have a real metadata export ──────────────────
    if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) {
      return null;
    }

    // ── Extract title ──────────────────────────────────────────────────────
    // Tolerate apostrophes inside double-quoted strings (e.g. "Lam's Seafood")
    // so titles with contractions are not truncated or dropped.
    const titleMatch =
      content.match(/title\s*:\s*"((?:[^"\r\n]|\\"){3,200})"/) ||
      content.match(/title\s*:\s*'((?:[^'\r\n]|\\'){3,200})'/) ||
      content.match(/title\s*:\s*`((?:[^`\r\n]){3,200})`/) ||
      content.match(/<h1[^>]*>([^<]{3,200})<\/h1>/);
    const rawTitle = titleMatch?.[1]?.trim() ?? '';

    // Quality gate 2: reject fallback/slug-derived titles
    const slugDerived = slug.replace(/\//g, ' › ').trim();
    if (!rawTitle || rawTitle === slugDerived) return null;

    // ── Extract description ────────────────────────────────────────────────
    // Tolerate apostrophes inside double-quoted strings (e.g. "Seattle's Lam's")
    // and escaped apostrophes (\') inside single-quoted strings so articles
    // with contractions are not silently dropped by the quality gate.
    const descMatch =
      content.match(/description\s*:\s*"((?:[^"\r\n]|\\"){10,300})"/) ||
      content.match(/description\s*:\s*'((?:[^'\r\n]|\\'){10,300})'/) ||
      content.match(/description\s*:\s*`((?:[^`\r\n]){10,300})`/) ||
      content.match(/content\s*:\s*['"`]((?:[^'"`\r\n]|\\'){10,300})['"`]/);
    const rawDesc = descMatch?.[1]?.trim() ?? '';

    // Quality gate 3: reject fallback description and very short ones
    if (!rawDesc || rawDesc.startsWith('ObjectWire coverage of') || rawDesc.length < 60) return null;

    // ── Extract openGraph.publishedTime ───────────────────────────────────
    // First try: direct string literal  publishedTime: '2026-...'
    const pubTimeMatch = content.match(/publishedTime\s*:\s*['"`]([^'"`\r\n]{10,30})['"`]/);
    // Second try: const PUBLISHED = '2026-...' referenced as publishedTime: PUBLISHED
    const pubConstMatch = !pubTimeMatch
      ? content.match(/const\s+PUBLISHED\s*=\s*['"`]([^'"`\r\n]{10,30})['"`]/)
      : null;
    const publishedTime = (pubTimeMatch?.[1] ?? pubConstMatch?.[1])?.trim();

    // ── Extract openGraph.images[0] — url, width, height, alt ───────────
    // Priority order:
    //   1. images: [{ url: 'literal' }]            — direct string literal
    //   2. const OG_IMAGE = '/thumbnails/...'       — most pages use this pattern
    //   3. imageUrl: 'literal'                      — legacy pattern
    const ogImageMatch =
      content.match(/images\s*:\s*\[\s*\{[^}]*url\s*:\s*['"`]([^'"`]+)['"`]/) ||
      content.match(/const\s+OG_IMAGE\s*=\s*['"`]([^'"`\$\{][^'"`]*)['"`]/) ||
      content.match(/imageUrl\s*:\s*['"`]([^'"`]+)['"`]/);
    const rawImageUrl = ogImageMatch?.[1]?.trim();
    // Keep /thumbnails/ and /public/ paths as relative so they resolve against
    // whatever origin serves them (localhost OR production). External URLs
    // (https://...) are stored as-is for OG image crawlers.
    const imageUrl = rawImageUrl ?? undefined;

    const ogImageWidthMatch = content.match(/images\s*:\s*\[\s*\{[^}]*width\s*:\s*(\d+)/);
    const imageWidth = ogImageWidthMatch ? parseInt(ogImageWidthMatch[1], 10) : undefined;

    const ogImageHeightMatch = content.match(/images\s*:\s*\[\s*\{[^}]*height\s*:\s*(\d+)/);
    const imageHeight = ogImageHeightMatch ? parseInt(ogImageHeightMatch[1], 10) : undefined;

    const ogAltMatch = content.match(/images\s*:\s*\[\s*\{[^}]*alt\s*:\s*['"`]([^'"`]+)['"`]/);
    const imageAlt = ogAltMatch?.[1]?.trim();

    // ── Extract openGraph.tags ────────────────────────────────────────────
    const ogTagsMatch = content.match(/openGraph[\s\S]{0,900}tags\s*:\s*\[([^\]]+)\]/);
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
      imageWidth,
      imageHeight,
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
// Local registry — read / write lib/registry-data.json
// ---------------------------------------------------------------------------
interface RegistryEntry {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  modifiedDate: string;
  category: string;
  tags: string[];
  author: string;
  authorSlug?: string;
  priority: number;
  changeFrequency: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  featured?: boolean;
}

function readLocalRegistry(): Map<string, RegistryEntry> {
  try {
    if (!fs.existsSync(LOCAL_REGISTRY_PATH)) return new Map();
    const raw = fs.readFileSync(LOCAL_REGISTRY_PATH, 'utf-8').trim();
    if (!raw || raw === '[]') return new Map();
    const arr = JSON.parse(raw) as RegistryEntry[];
    return new Map(arr.map(e => [e.slug, e]));
  } catch {
    return new Map();
  }
}

function writeLocalRegistry(entries: RegistryEntry[]): void {
  const sorted = [...entries].sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  fs.writeFileSync(LOCAL_REGISTRY_PATH, JSON.stringify(sorted, null, 2) + '\n', 'utf-8');
}

// ---------------------------------------------------------------------------
// build one RegistryEntry from scanned page metadata
// ---------------------------------------------------------------------------
function buildEntry(meta: PageMeta, existing?: RegistryEntry): RegistryEntry {
  const { category, tags: categoryTags } = detectCategory(meta.slug);

  // Prefer openGraph tags from the file; fall back to slug-derived category tags
  const tags = (meta.extractedTags && meta.extractedTags.length >= 2)
    ? meta.extractedTags
    : categoryTags;

  // Real publishedTime from the file wins.
  // Fall back to existing date ONLY if it looks like a real article date
  // (i.e. it was not assigned by a previous sync that used TODAY as a fallback).
  // If existing date === TODAY it means the page never had a publishedTime and
  // got today's date as a placeholder — reset it to the far-past sentinel so
  // hub/utility pages always sort BELOW real articles in homepage feeds.
  const existingDate = existing?.publishDate;
  const existingIsReal = existingDate && existingDate !== TODAY;
  const publishDate = meta.publishedTime
    ? meta.publishedTime.split('T')[0]
    : existingIsReal ? existingDate : '2020-01-01';

  return {
    slug: meta.slug,
    title: meta.title,
    description: meta.description,
    publishDate,
    modifiedDate: publishDate,
    category,
    tags,
    author: meta.author,
    authorSlug: meta.authorSlug,
    priority: detectPriority(meta.slug, category),
    changeFrequency: detectChangeFrequency(category),
    // Scanned values win; preserve existing if scan didn't find them;
    // fall back to auto-generated Satori OG image so no entry is imageless.
    imageUrl:    meta.imageUrl    ?? existing?.imageUrl    ?? `${siteConfig.url}/api/og?slug=${encodeURIComponent(meta.slug)}`,
    imageWidth:  meta.imageWidth  ?? existing?.imageWidth  ?? 1200,
    imageHeight: meta.imageHeight ?? existing?.imageHeight ?? 630,
    imageAlt:    meta.imageAlt    ?? existing?.imageAlt,
    featured:    existing?.featured ?? false,
  };
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  console.log(`🌐  Active site: ${activeSite} (${siteConfig.domain})`);
  console.log(`🔍  Scanning app directory for ${activeSite}-owned pages…`);
  const allPages = scanApp(APP_DIR);
  console.log(`    Found ${allPages.length} pages matching ${activeSite}\n`);

  if (allPages.length === 0) {
    console.warn('⚠️  No pages passed the metadata quality gate.');
    return;
  }

  const existing = readLocalRegistry();
  console.log(`📋  Current local registry: ${existing.size} entries\n`);

  const newEntries = allPages.map(meta => buildEntry(meta, existing.get(meta.slug)));

  const added   = newEntries.filter(e => !existing.has(e.slug)).length;
  const updated = newEntries.filter(e =>  existing.has(e.slug)).length;
  const removed = existing.size - updated;

  const withoutDate = allPages.filter(p => !p.publishedTime);

  if (added)        console.log(`➕  ${added} new pages added`);
  if (updated)      console.log(`♻️   ${updated} existing pages updated`);
  if (removed > 0)  console.log(`🗑️   ${removed} orphaned entries removed (no matching page.tsx)`);
  if (withoutDate.length) {
    console.log(`\n⚠️  ${withoutDate.length} pages have no openGraph.publishedTime — assigned sentinel date 2020-01-01.`);
    console.log('    These pages sort below all real articles in feeds. Add openGraph.publishedTime for accurate Google News indexing.');
  }

  if (!WRITE_FLAG) {
    console.log('\n--- PREVIEW (pass --write to apply) ---');
    const newSlugs = newEntries.filter(e => !existing.has(e.slug)).map(e => e.slug);
    if (newSlugs.length) {
      for (const slug of newSlugs.slice(0, 20)) console.log(`  + ${slug}`);
      if (newSlugs.length > 20) console.log(`  … and ${newSlugs.length - 20} more`);
    }
    if (removed > 0) {
      const removedSlugs = [...existing.keys()].filter(s => !newEntries.some(e => e.slug === s));
      for (const slug of removedSlugs.slice(0, 10)) console.log(`  - ${slug}`);
      if (removedSlugs.length > 10) console.log(`  … and ${removedSlugs.length - 10} more removed`);
    }
    if (!added && !removed) console.log('  (no changes)');
    console.log('\nRun:  npm run registry:sync -- --write');
    return;
  }

  writeLocalRegistry(newEntries);
  console.log(`\n✅  Wrote ${newEntries.length} entries → lib/registry-data-${activeSite}.json`);
}

main();

