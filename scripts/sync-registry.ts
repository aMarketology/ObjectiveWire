#!/usr/bin/env tsx
// =============================================================================
// scripts/sync-registry.ts  — DIAGNOSTIC ONLY
// =============================================================================
// Scans app/**/page.tsx files and reports what would appear in the registry.
// No file is written. The live registry is now generated at build time by
// lib/registry-loader.ts — no JSON file needed.
//
// Usage:
//   npm run registry:sync   — list all detected pages
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

// ---------------------------------------------------------------------------
// config
// ---------------------------------------------------------------------------
const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const DEFAULT_AUTHOR = 'ObjectWire Editorial';
const TODAY = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
const WRITE_FLAG = false; // writes are disabled — registry lives in lib/registry-loader.ts

// Category/tag detection is handled by lib/category-map.ts (shared source of truth).
// This diagnostic script does not need to re-derive categories — it only lists pages.

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
    // Resolve relative thumbnail paths to absolute objectwire.org URLs for OG consistency
    const imageUrl = rawImageUrl?.startsWith('/')
      ? `https://www.objectwire.org${rawImageUrl}`
      : rawImageUrl;

    const ogImageWidthMatch = content.match(/images\s*:\s*\[\s*\{[^}]*width\s*:\s*(\d+)/);
    const imageWidth = ogImageWidthMatch ? parseInt(ogImageWidthMatch[1], 10) : undefined;

    const ogImageHeightMatch = content.match(/images\s*:\s*\[\s*\{[^}]*height\s*:\s*(\d+)/);
    const imageHeight = ogImageHeightMatch ? parseInt(ogImageHeightMatch[1], 10) : undefined;

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
// readLocalRegistry / writeLocalRegistry — removed (no JSON file)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// main — diagnostic only
// ---------------------------------------------------------------------------
function main() {
  console.log('🔍  Scanning app directory for page.tsx files…');
  const allPages = scanApp(APP_DIR);
  console.log(`    Found ${allPages.length} pages with real metadata\n`);

  if (allPages.length === 0) {
    console.warn('⚠️  No pages passed the metadata quality gate.');
    return;
  }

  const withoutDate = allPages.filter(p => !p.publishedTime);
  if (withoutDate.length) {
    console.log(`⚠️  ${withoutDate.length} pages have no openGraph.publishedTime — will use today's date.`);
    console.log('    Add openGraph.publishedTime for accurate Google News indexing.\n');
  }

  console.log('📄  Detected pages (newest first by publishedTime):');
  const sorted = allPages
    .slice()
    .sort((a, b) => (b.publishedTime ?? '').localeCompare(a.publishedTime ?? ''));
  for (const page of sorted.slice(0, 30)) {
    const date = page.publishedTime?.split('T')[0] ?? '(no date)';
    console.log(`  ${date}  ${page.slug}`);
  }
  if (sorted.length > 30) console.log(`  … and ${sorted.length - 30} more`);

  console.log(`\n✅  Registry is built live from app/ at build time — no JSON write needed.`);
}

main();

