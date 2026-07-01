// =============================================================================
// lib/registry-loader.ts
// =============================================================================
// Server-only. Scans app/**/page.tsx at import time and returns ContentEntry[].
// No JSON file, no Supabase — pure filesystem read at build/server start.
// Result is cached in module scope so the scan runs exactly once per process.
// =============================================================================

import 'server-only';
import * as fs from 'fs';
import * as path from 'path';
import type { ContentEntry } from './content-registry';
import type { RegistryMeta } from './registry-meta';
import { SITE_CONFIG } from './site-config';
import { detectCategory, detectPriority, detectChangeFreq } from './category-map';

// ---------------------------------------------------------------------------
// constants
// ---------------------------------------------------------------------------
const APP_DIR     = path.join(process.cwd(), 'app');
const TODAY       = new Date().toISOString().split('T')[0];
const DEF_AUTHOR  = 'ObjectWire Editorial';

const SKIP_PREFIXES = [
  '/api/', '/auth/', '/account/', '/login/', '/profile/', '/saved/',
  '/search/', '/admin/', '/(admin)', '/feed.json', '/rss', '/feeds/',
  '/news-sitemap', '/image-sitemap', '/sitemap', '/robots',
];
const SKIP_EXACT = new Set(['/', '']);

// detectCategory / detectPriority / detectChangeFreq — imported from ./category-map

// ---------------------------------------------------------------------------
// extract structured registryMeta export (preferred over regex fallback)
// ---------------------------------------------------------------------------

/**
 * Try to extract `export const registryMeta = { ... }` from a page file.
 * Returns null if the export is absent (falls back to regex extraction).
 * The object must use simple string/array literals — no runtime expressions.
 */
function extractRegistryMeta(content: string): Partial<RegistryMeta> | null {
  // Find the export const registryMeta block
  const blockMatch = content.match(/export\s+const\s+registryMeta\s*(?::\s*RegistryMeta)?\s*=\s*\{([\s\S]*?)\};/);
  if (!blockMatch) return null;
  const block = blockMatch[1];

  function str(key: string): string | undefined {
    const m = block.match(new RegExp(`\\b${key}\\s*:\\s*['"\`]([^'"\`\\r\\n]{1,500})['"\`]`));
    return m?.[1]?.trim();
  }
  function arr(key: string): string[] | undefined {
    const m = block.match(new RegExp(`\\b${key}\\s*:\\s*\\[([^\\]]+)\\]`));
    if (!m) return undefined;
    return m[1].match(/['"`]([^'"`]+)['"`]/g)?.map(s => s.replace(/['"`]/g, '').trim());
  }

  const title = str('title');
  const description = str('description');
  if (!title || !description) return null; // minimum required fields

  return {
    title,
    description,
    publishedTime: str('publishedTime'),
    modifiedTime: str('modifiedTime'),
    author: str('author'),
    authorSlug: str('authorSlug'),
    imageUrl: str('imageUrl'),
    imageAlt: str('imageAlt'),
    tags: arr('tags'),
    keyTakeaways: arr('keyTakeaways'),
  };
}

// ---------------------------------------------------------------------------
// extract metadata from a single page.tsx file
// ---------------------------------------------------------------------------
interface RawPage {
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
  tags?: string[];
}

function extractPage(filePath: string): RawPage | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // derive slug from file path relative to app/
    const relative = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
    if (relative.startsWith('(admin)')) return null;

    const rawSlug = '/' + relative
      .replace(/\/page\.tsx$/, '')
      .replace(/^page\.tsx$/, '')
      .replace(/^\(public\)\//, '')
      .replace(/^\(admin\)\//, '');

    const slug = rawSlug === '/page.tsx' ? '/' : rawSlug;

    if (SKIP_EXACT.has(slug)) return null;
    if (SKIP_PREFIXES.some(p => slug.startsWith(p))) return null;

    // must have real metadata export
    if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) return null;

    // ── Try structured registryMeta first ─────────────────────────────────
    const rm = extractRegistryMeta(content);
    if (rm?.title && rm.description) {
      const rawImg = rm.imageUrl;
      const imageUrl = rawImg?.startsWith('/')
        ? `${SITE_CONFIG.url}${rawImg}`
        : rawImg;
      return {
        slug,
        title: rm.title.slice(0, 300),
        description: rm.description.slice(0, 500),
        author: rm.author ?? DEF_AUTHOR,
        authorSlug: rm.authorSlug,
        publishedTime: rm.publishedTime,
        imageUrl,
        imageAlt: rm.imageAlt,
        tags: rm.tags,
      };
    }

    // ── Warn pages that use NewsArticle but have no registryMeta ──────────
    if (content.includes('<NewsArticle') && !content.includes('export const registryMeta')) {
      console.warn(`[registry] ${relative}: uses <NewsArticle> but missing registryMeta export — using regex fallback.`);
    }

    // ── Regex fallback ────────────────────────────────────────────────────
    const titleMatch =
      content.match(/title\s*:\s*['"`]([^'"`\r\n]{3,200})['"`]/) ||
      content.match(/<h1[^>]*>([^<]{3,200})<\/h1>/);
    const title = titleMatch?.[1]?.trim() ?? '';
    if (!title) return null;
    const slugDerived = slug.replace(/\//g, ' › ').trim();
    if (title === slugDerived) return null;

    // description
    const descMatch = content.match(/description\s*:\s*['"`]([^'"`\r\n]{10,300})['"`]/);
    const description = descMatch?.[1]?.trim() ?? '';
    if (!description || description.length < 60 || description.startsWith('ObjectWire coverage of')) return null;

    // publishedTime
    const pubMatch = content.match(/publishedTime\s*:\s*['"`]([^'"`\r\n]{10,30})['"`]/);
    const publishedTime = pubMatch?.[1]?.trim();

    // OG image
    const imgMatch =
      content.match(/images\s*:\s*\[\s*\{[^}]*url\s*:\s*['"`]([^'"`]+)['"`]/) ||
      content.match(/const\s+OG_IMAGE\s*=\s*['"`]([^'"`$\{][^'"`]*)['"`]/) ||
      content.match(/imageUrl\s*:\s*['"`]([^'"`]+)['"`]/);
    const rawImg = imgMatch?.[1]?.trim();
    const imageUrl = rawImg?.startsWith('/')
      ? `${SITE_CONFIG.url}${rawImg}`
      : rawImg;

    const wMatch = content.match(/images\s*:\s*\[\s*\{[^}]*width\s*:\s*(\d+)/);
    const hMatch = content.match(/images\s*:\s*\[\s*\{[^}]*height\s*:\s*(\d+)/);
    const altMatch = content.match(/images\s*:\s*\[\s*\{[^}]*alt\s*:\s*['"`]([^'"`]+)['"`]/);

    // OG tags
    const ogTagsMatch = content.match(/openGraph[\s\S]{0,500}tags\s*:\s*\[([^\]]+)\]/);
    let tags: string[] | undefined;
    if (ogTagsMatch) {
      tags = ogTagsMatch[1]
        .match(/['"`]([^'"`]+)['"`]/g)
        ?.map(t => t.replace(/['"`]/g, '').trim())
        .filter(t => t.length > 1);
    }

    // author
    const authorSlugMatch =
      content.match(/author_slug\s*:\s*['"`]([^'"`\r\n]{2,80})['"`]/) ||
      content.match(/authorSlug\s*:\s*['"`]([^'"`\r\n]{2,80})['"`]/);
    const authorMatch =
      content.match(/author\s*:\s*['"`]([^'"`\r\n]{3,80})['"`]/) ||
      content.match(/author\s*:\s*\{[^}]*name\s*:\s*['"`]([^'"`]{3,80})['"`]/);

    return {
      slug,
      title: title.slice(0, 300),
      description: description.slice(0, 500),
      author: authorMatch?.[1]?.trim() ?? DEF_AUTHOR,
      authorSlug: authorSlugMatch?.[1]?.trim(),
      publishedTime,
      imageUrl,
      imageWidth:  wMatch   ? parseInt(wMatch[1], 10)  : undefined,
      imageHeight: hMatch   ? parseInt(hMatch[1], 10)  : undefined,
      imageAlt:    altMatch?.[1]?.trim(),
      tags,
    };
  } catch {
    return null;
  }
}

function scanApp(dir: string, results: RawPage[] = []): RawPage[] {
  let items: fs.Dirent[];
  try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch { return results; }
  for (const item of items) {
    if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === '_next') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      scanApp(full, results);
    } else if (item.name === 'page.tsx' || item.name === 'page.ts') {
      const p = extractPage(full);
      if (p) results.push(p);
    }
  }
  return results;
}

function buildEntry(raw: RawPage): ContentEntry {
  const { category, tags: catTags } = detectCategory(raw.slug);
  const tags = (raw.tags && raw.tags.length >= 2) ? raw.tags : catTags;
  const publishDate = raw.publishedTime ? raw.publishedTime.split('T')[0] : TODAY;

  return {
    slug:            raw.slug,
    title:           raw.title,
    description:     raw.description,
    publishDate,
    modifiedDate:    publishDate,
    category,
    tags,
    author:          raw.author,
    authorSlug:      raw.authorSlug,
    priority:        detectPriority(raw.slug, category),
    changeFrequency: detectChangeFreq(category),
    imageUrl:        raw.imageUrl ?? `${SITE_CONFIG.url}/api/og?slug=${encodeURIComponent(raw.slug)}`,
    imageWidth:      raw.imageWidth  ?? 1200,
    imageHeight:     raw.imageHeight ?? 630,
    imageAlt:        raw.imageAlt,
    featured:        false,
  };
}

// ---------------------------------------------------------------------------
// public API — cached in module scope (runs once per process)
// ---------------------------------------------------------------------------
let _cache: ContentEntry[] | null = null;

export function loadRegistry(): ContentEntry[] {
  if (_cache) return _cache;
  const pages = scanApp(APP_DIR);
  _cache = pages
    .map(buildEntry)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return _cache;
}
