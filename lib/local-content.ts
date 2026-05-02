/**
 * local-content.ts
 *
 * File-system content loader. All content DB components call these instead of
 * Supabase. Data is populated once by running `npm run dump-content`.
 *
 * Slug → filename mapping:
 *   forward slashes in slugs are stored as double underscores in filenames.
 *   e.g. slug "creator-abby-berner" → "creator-abby-berner.json"
 *        slug "creator/abby-berner" → "creator__abby-berner.json"
 *
 * Alias translation:
 *   Historically, page.tsx files used "creator-*" / "creator/*" slugs but the
 *   Supabase rows were stored under "influencer-*" / "influencer/*". The loader
 *   auto-falls-back to the influencer prefix when the creator-prefixed file is
 *   not found, so no page files need to change.
 */

import fs from 'fs';
import path from 'path';

const DATA_ROOT = path.resolve(process.cwd(), 'data');

function slugToFilename(slug: string): string {
  return slug.replace(/\//g, '__') + '.json';
}

function readRow(dir: string, slug: string): Record<string, unknown> | null {
  const filePath = path.join(DATA_ROOT, dir, slugToFilename(slug));
  if (fs.existsSync(filePath)) {
    try { return JSON.parse(fs.readFileSync(filePath, 'utf-8')); } catch { return null; }
  }

  // Alias: creator- prefix → influencer- prefix (legacy slug mismatch)
  if (slug.startsWith('creator-')) {
    const alias = 'influencer-' + slug.slice('creator-'.length);
    const aliasPath = path.join(DATA_ROOT, dir, slugToFilename(alias));
    if (fs.existsSync(aliasPath)) {
      try { return JSON.parse(fs.readFileSync(aliasPath, 'utf-8')); } catch { return null; }
    }
  }

  // Alias: creator/ prefix → influencer/ prefix
  if (slug.startsWith('creator/')) {
    const alias = 'influencer/' + slug.slice('creator/'.length);
    const aliasPath = path.join(DATA_ROOT, dir, slugToFilename(alias));
    if (fs.existsSync(aliasPath)) {
      try { return JSON.parse(fs.readFileSync(aliasPath, 'utf-8')); } catch { return null; }
    }
  }

  return null;
}

export function getCreatorArticle(slug: string): Record<string, unknown> | null {
  return readRow('creator-articles', slug);
}

export function getArticlePage(slug: string): Record<string, unknown> | null {
  return readRow('article-pages', slug);
}

export function getWikiArticle(slug: string): Record<string, unknown> | null {
  return readRow('wiki-articles', slug);
}

/** List all slugs available locally for a given content type. */
export function listLocalSlugs(type: 'creator-articles' | 'article-pages' | 'wiki-articles'): string[] {
  const dir = path.join(DATA_ROOT, type);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace(/__/g, '/').replace(/\.json$/, ''));
}
