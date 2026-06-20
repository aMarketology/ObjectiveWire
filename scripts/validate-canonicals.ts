#!/usr/bin/env tsx
// =============================================================================
// scripts/validate-canonicals.ts — M4 Canonical Guardrail
// =============================================================================
// Three checks in one script:
//
// CHECK 1 — Layout canonical guard
//   Scans app/layout.tsx for a hardcoded `<link rel="canonical"` JSX element.
//   If found, fails the build.
//
// CHECK 2 — Per-page canonical presence
//   Scans every app/**/page.tsx that exports a `metadata` object and flags
//   pages that have NO `alternates` / `canonical` defined.
//
// CHECK 3 — Hub page force-dynamic guard (warning)
//   Hub pages (1 path segment, /mlb, /golf, /soccer, etc.) should use
//   `revalidate` (ISR) not `force-dynamic`. `force-dynamic` kills caching
//   and causes a live Supabase hit on every Googlebot crawl.
//
// Excluded from check 2:
//   - Pages in non-indexable routes: (admin), api, auth, account, saved, search, login, profile
//   - System route files (robots.ts, sitemap.ts, not-found.tsx, layout.tsx)
//
// Wire-up (already in package.json prebuild):
//   "prebuild": "... && npx tsx scripts/validate-canonicals.ts && ..."
//
// To intentionally skip (emergencies only):
//   OBJECTWIRE_OVERRIDE=true npm run build
// =============================================================================

import fs from 'fs';
import path from 'path';

const OVERRIDE_FLAG = process.env.OBJECTWIRE_OVERRIDE === 'true';
const APP_DIR = path.join(process.cwd(), 'app');

// Directories skipped for per-page canonical check (non-indexable routes)
const SKIP_DIRS = new Set([
  '(admin)',
  'api',
  'auth',
  'account',
  'saved',
  'search',
  'login',
  'profile',
  '_components',
  'feeds',
  'rss.xml',
  'feed.json',
  'news-sitemap.xml',
]);

// Layout files to check for hardcoded canonicals
const LAYOUT_FILES = [
  path.join(APP_DIR, 'layout.tsx'),
];

// =============================================================================
// CHECK 1 — Layout canonical guard
// =============================================================================

function checkLayoutCanonical(): string[] {
  const violations: string[] = [];
  for (const filePath of LAYOUT_FILES) {
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    // CHECK 1a — JSX hardcoded <link rel="canonical" ...>
    const jsxMatch = content.match(/<link\s[^>]*rel=["']canonical["'][^>]*>/);
    if (jsxMatch) {
      const lineNum = lines.findIndex(l => l.includes('rel="canonical"') || l.includes("rel='canonical'")) + 1;
      violations.push(
        `  ✗  ${path.relative(process.cwd(), filePath)}:${lineNum}  →  hardcoded <link rel="canonical"> JSX ` +
        `overrides every page's self-canonical. Remove it — use metadata.alternates.canonical per page instead.`
      );
    }

    // CHECK 1b — metadata export with canonical in alternates block
    // This catches: alternates: { canonical: ... } inside export const metadata = { ... }
    // A root layout canonical acts as a fallback and overrides pages that don't set their own.
    const metadataBlock = content.match(/export\s+const\s+metadata[^=]*=\s*\{[\s\S]*?\}\s*;/);
    if (metadataBlock) {
      const block = metadataBlock[0];
      if (/alternates\s*:\s*\{[^}]*canonical\s*:/.test(block)) {
        const lineNum = lines.findIndex(l => /canonical\s*:/.test(l) && !l.trim().startsWith('//')) + 1;
        violations.push(
          `  ✗  ${path.relative(process.cwd(), filePath)}:${lineNum}  →  metadata.alternates.canonical in root layout ` +
          `acts as a fallback canonical for every page that does not set its own. Remove it from the layout. ` +
          `Each page.tsx must set its own alternates.canonical.`
        );
      }
    }
  }
  return violations;
}

// =============================================================================
// CHECK 2 — Per-page canonical presence
// =============================================================================

function collectPages(dir: string, pages: string[] = []): string[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return pages;
  }
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry.name)) continue;
    if (entry.isDirectory()) {
      collectPages(path.join(dir, entry.name), pages);
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      pages.push(path.join(dir, entry.name));
    }
  }
  return pages;
}

function checkPageCanonicals(): string[] {
  const violations: string[] = [];
  const pages = collectPages(APP_DIR);

  for (const filePath of pages) {
    const content = fs.readFileSync(filePath, 'utf8');
    const rel = path.relative(APP_DIR, filePath);

    // Skip pages that don't export metadata at all (pure layout wrappers, etc.)
    if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) {
      continue;
    }

    // Detect article component type
    const isLegacyDbStub =
      content.includes('NewsArticleDB') ||
      content.includes('JackArticleDB') ||
      content.includes('ArticlePageDB') ||
      content.includes('CreatorArticleDB') ||
      content.includes('AlysaArticleDB');

    // New code-first articles — body stays in page.tsx, no DB fetch
    const isCodeFirstArticle =
      content.includes('<NewsArticle') ||
      content.includes('<JackArticle') ||
      content.includes('<CreatorArticle') ||
      content.includes('<WikiArticle') ||
      content.includes('<AlysaArticle');

    // For any article page (legacy DB or new code-first), verify canonical is set
    if (isLegacyDbStub || isCodeFirstArticle) {
      if (!content.includes('canonical')) {
        violations.push(
          `  ✗  app/${rel}  →  article page exports metadata but no canonical URL found. ` +
          `Add: alternates: { canonical: \`https://www.objectivewire.com/your/path\` }`
        );
      }
      continue;
    }

    // For all other pages with metadata: require alternates.canonical
    const hasCanonical =
      (content.includes('alternates') && content.includes('canonical')) ||
      content.includes('canonicalUrl') ||
      content.includes('canonical:');

    if (!hasCanonical) {
      violations.push(
        `  ⚠  app/${rel}  →  no canonical URL in metadata export. ` +
        `Add: alternates: { canonical: \`https://www.objectivewire.com/your/path\` }`
      );
    }
  }

  return violations;
}

// =============================================================================
// CHECK 3 — Hub page force-dynamic guard
// =============================================================================

// Hub pages are top-level routes (1 path segment). They should never use
// force-dynamic — that disables ISR and makes every Googlebot crawl hit Supabase.
const HUB_SKIP_DIRS = new Set(['(admin)', 'api', 'auth', 'account', 'saved', 'search', 'login', 'profile', '_components']);

function checkHubForceDynamic(): string[] {
  const warnings: string[] = [];
  let entries: fs.Dirent[];
  try { entries = fs.readdirSync(APP_DIR, { withFileTypes: true }); } catch { return []; }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (HUB_SKIP_DIRS.has(entry.name)) continue;
    if (entry.name.startsWith('(') || entry.name.startsWith('[') || entry.name.startsWith('.')) continue;

    const hubPage = path.join(APP_DIR, entry.name, 'page.tsx');
    if (!fs.existsSync(hubPage)) continue;

    const content = fs.readFileSync(hubPage, 'utf8');
    if (content.includes("dynamic = 'force-dynamic'") || content.includes('dynamic = "force-dynamic"')) {
      warnings.push(
        `  ⚠  app/${entry.name}/page.tsx  →  hub page uses force-dynamic. ` +
        `Replace with: export const revalidate = 3600  ` +
        `(ISR 1h — saves a Supabase hit on every Googlebot crawl)`
      );
    }
  }

  return warnings;
}

// =============================================================================
// MAIN
// =============================================================================

const layoutViolations = checkLayoutCanonical();
const pageViolations = checkPageCanonicals();
const hubWarnings = checkHubForceDynamic();

const allViolations = [...layoutViolations, ...pageViolations, ...hubWarnings];
const errors = layoutViolations; // layout violations are hard errors — always block
const warnings = [...pageViolations, ...hubWarnings]; // soft warnings

if (allViolations.length === 0) {
  console.log('✓ validate-canonicals: all canonical checks passed');
  process.exit(0);
}

// ── Layout violations (hard error) ───────────────────────────────────────────
if (errors.length > 0) {
  console.error('\n┌────────────────────────────────────────────────────────────────────┐');
  console.error('│  validate-canonicals: BUILD BLOCKED — hardcoded canonical detected  │');
  console.error('└────────────────────────────────────────────────────────────────────┘');
  console.error('\nHardcoded site-wide canonical tags were found in shared layout files.');
  console.error('These override every article\'s self-canonical and tell Google all pages');
  console.error('are duplicates of the homepage — causing an impressions cliff.\n');
  errors.forEach(v => console.error(v));
  console.error('\nFix: remove the <link rel="canonical"> from layout files.');
  console.error('Override (emergencies only): OBJECTWIRE_OVERRIDE=true npm run build\n');
}

// ── Page canonical + hub warnings (soft error — logged but non-blocking by default) ─
if (warnings.length > 0) {
  const canonicalWarnings = pageViolations.length;
  const dynamicWarnings   = hubWarnings.length;
  console.warn(`\n⚠ validate-canonicals: ${warnings.length} warning(s) found`);
  if (canonicalWarnings) console.warn(`  → ${canonicalWarnings} page(s) missing alternates.canonical`);
  if (dynamicWarnings)   console.warn(`  → ${dynamicWarnings} hub page(s) using force-dynamic (should be revalidate = 3600)`);
  console.warn('');
  // Show first 20 to avoid flooding the terminal
  warnings.slice(0, 20).forEach(v => console.warn(v));
  if (warnings.length > 20) {
    console.warn(`  ... and ${warnings.length - 20} more. Run "npm run audit:meta" for the full list.`);
  }
  console.warn('\nThese are warnings. Fix them when you next touch the affected pages.\n');
}

// Hard-error path
if (errors.length > 0) {
  if (OVERRIDE_FLAG) {
    console.warn('⚠ OBJECTWIRE_OVERRIDE=true — skipping exit(1). PRODUCTION RISK.');
    process.exit(0);
  }
  process.exit(1);
}

// Warnings only — exit 0 so build continues
process.exit(0);
