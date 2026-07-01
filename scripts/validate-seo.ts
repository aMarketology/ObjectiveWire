#!/usr/bin/env tsx
// =============================================================================
// scripts/validate-seo.ts  —  prebuild SEO guard
// =============================================================================
// Checks every app/**/page.tsx for common SEO violations and fails the build
// on hard violations. Warnings print but don't block.
//
// Hard fails:
//   1. Em dash (—) or en dash (–) in metadata.title or metadata.description
//   2. Canonical URL domain doesn't match NEXT_PUBLIC_SITE_URL (domain mismatch)
//
// Warnings (exit 0 but logged):
//   3. metadata.title string > 60 characters
//   4. <NewsArticle used but no publishedTime= prop (missing Google News schema)
//
// Usage (auto-run via prebuild):
//   npx tsx scripts/validate-seo.ts
// =============================================================================

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');

// The correct site domain — must match NEXT_PUBLIC_SITE_URL in Railway env.
// Locally falls back to objectivewire.org (same as SITE_CONFIG default).
const EXPECTED_HOST = (() => {
  try {
    const u = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.objectivewire.org';
    return new URL(u).host; // "www.objectivewire.org"
  } catch {
    return 'www.objectivewire.org';
  }
})();

// Domains that are definitively wrong (old typo domain or wrong-branch domain).
// These will always hard-fail regardless of NEXT_PUBLIC_SITE_URL.
const FORBIDDEN_DOMAINS = ['www.objectwire.org', 'objectwire.org'];

const SKIP_PREFIXES = [
  '/api/', '/auth/', '/account/', '/login/', '/profile/', '/saved/',
  '/(admin)', '/feed.json', '/rss', '/feeds/', '/news-sitemap',
  '/image-sitemap', '/sitemap', '/robots',
];

// ---------------------------------------------------------------------------

interface Issue {
  level: 'error' | 'warn';
  file: string;
  message: string;
}

const issues: Issue[] = [];

function walk(dir: string, results: string[] = []): string[] {
  let items: fs.Dirent[];
  try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch { return results; }
  for (const item of items) {
    if (item.name.startsWith('.') || item.name === 'node_modules' || item.name === '_next') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, results);
    else if (item.name === 'page.tsx' || item.name === 'page.ts') results.push(full);
  }
  return results;
}

function relPath(file: string): string {
  return path.relative(ROOT, file);
}

function check(file: string): void {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, '/');
  if (SKIP_PREFIXES.some(p => ('/' + rel).startsWith(p))) return;

  let content: string;
  try { content = fs.readFileSync(file, 'utf-8'); } catch { return; }

  if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) return;

  // ── CHECK 1: em dash / en dash in title or description strings ────────────
  const metadataBlock = content.match(/export\s+const\s+metadata[\s\S]{0,3000}?(?=\nexport\s|\nconst\s|\nfunction\s|\ndefault\s)/)?.[0] ?? content;

  const titleStringMatch = metadataBlock.match(/\btitle\s*:\s*['"`]([^'"`\r\n]{3,200})['"`]/);
  const descStringMatch = metadataBlock.match(/\bdescription\s*:\s*['"`]([^'"`\r\n]{10,400})['"`]/);

  if (titleStringMatch?.[1] && (titleStringMatch[1].includes('\u2014') || titleStringMatch[1].includes('\u2013'))) {
    issues.push({ level: 'error', file: relPath(file), message: `metadata.title contains em/en dash: "${titleStringMatch[1].slice(0, 80)}"` });
  }
  if (descStringMatch?.[1] && (descStringMatch[1].includes('\u2014') || descStringMatch[1].includes('\u2013'))) {
    issues.push({ level: 'error', file: relPath(file), message: `metadata.description contains em/en dash: "${descStringMatch[1].slice(0, 80)}"` });
  }

  // ── CHECK 2: canonical domain mismatch ────────────────────────────────────
  // Look for fully-resolved canonical URL strings (not template expressions using SITE_CONFIG.url)
  const hardcodedUrlPattern = /https?:\/\/([a-z0-9.-]+)\//g;
  const canonicalCtx = metadataBlock.match(/(?:canonical|alternates)[\s\S]{0,300}/)?.[0] ?? '';
  let m: RegExpExecArray | null;
  while ((m = hardcodedUrlPattern.exec(canonicalCtx)) !== null) {
    const host = m[1];
    if (host === EXPECTED_HOST) continue; // correct
    if (host.startsWith('images.unsplash')) continue; // image CDN, not canonical
    if (FORBIDDEN_DOMAINS.includes(host)) {
      issues.push({ level: 'error', file: relPath(file), message: `Canonical uses forbidden domain "${host}" (old wrong domain). Update to use SITE_CONFIG.url.` });
    } else if (host !== EXPECTED_HOST && host.includes('objectiv')) {
      issues.push({ level: 'error', file: relPath(file), message: `Canonical domain "${host}" doesn't match expected "${EXPECTED_HOST}". Use SITE_CONFIG.url.` });
    }
  }

  // ── CHECK 3: title length > 60 chars ─────────────────────────────────────
  if (titleStringMatch?.[1] && titleStringMatch[1].length > 60) {
    issues.push({ level: 'warn', file: relPath(file), message: `metadata.title is ${titleStringMatch[1].length} chars (max 60): "${titleStringMatch[1].slice(0, 60)}…"` });
  }

  // ── CHECK 4: NewsArticle without publishedTime ─────────────────────────────
  if (content.includes('<NewsArticle') && !content.includes('publishedTime=')) {
    issues.push({ level: 'warn', file: relPath(file), message: `Uses <NewsArticle> but has no publishedTime= prop — no Google News Article schema will be emitted.` });
  }
}

// ---------------------------------------------------------------------------

const files = walk(APP_DIR);
for (const f of files) check(f);

const errors = issues.filter(i => i.level === 'error');
const warnings = issues.filter(i => i.level === 'warn');

if (warnings.length) {
  console.warn(`\n⚠️  validate-seo: ${warnings.length} warning(s)`);
  for (const w of warnings) console.warn(`   WARN  ${w.file}: ${w.message}`);
}

if (errors.length) {
  console.error(`\n❌  validate-seo: ${errors.length} hard error(s) — build blocked\n`);
  for (const e of errors) console.error(`   ERR   ${e.file}: ${e.message}`);
  process.exit(1);
}

console.log(`✅  validate-seo: ${files.length} pages checked, 0 errors, ${warnings.length} warnings.`);
