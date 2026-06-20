/**
 * mint-thumbnails.ts  —  Universal Satori Thumbnail Minter
 *
 * Scans page.tsx files, generates a real PNG thumbnail via local Satori,
 * saves it to public/thumbnails/[slug].jpg, then patches the page.tsx so:
 *   - OG_IMAGE  →  '/thumbnails/[slug].jpg'  (local static path)
 *   - <NewsArticle> / <JackArticle> gets  thumbnail={{ src: OG_IMAGE, alt: '...' }}
 *
 * ── Usage ─────────────────────────────────────────────────────────────────────
 *   All articles (skips ones that already have a local thumbnail):
 *     npx tsx scripts/mint-thumbnails.ts
 *
 *   Specific file:
 *     npx tsx scripts/mint-thumbnails.ts --file app/world-cup/2026/germany-7-curacao-1-group-e/page.tsx
 *
 *   All files under a directory:
 *     npx tsx scripts/mint-thumbnails.ts --dir app/world-cup/2026
 *
 *   Force re-mint even if thumbnail already exists:
 *     npx tsx scripts/mint-thumbnails.ts --dir app/world-cup/2026 --force
 *
 *   Limit to N articles (useful for testing):
 *     npx tsx scripts/mint-thumbnails.ts --limit 5
 *
 *   Preview what would run without writing anything:
 *     npx tsx scripts/mint-thumbnails.ts --dry-run
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'fs';
import path from 'path';

// ── Config ────────────────────────────────────────────────────────────────────
const SATORI_BASE    = 'http://localhost:3001';
const SATORI_TOKEN   = 'satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3';
const SATORI_NETWORK = 'ozone';
const UNSPLASH_KEY   = 'Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ';
const ROOT           = path.resolve(process.cwd());
const APP_DIR        = path.join(ROOT, 'app');
const THUMB_DIR      = path.join(ROOT, 'public', 'thumbnails');

// ── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const argVal = (flag: string) => { const i = args.indexOf(flag); return i !== -1 ? args[i + 1] : undefined; };

const DRY_RUN       = args.includes('--dry-run');
const FORCE         = args.includes('--force');
const TARGET_FILE   = argVal('--file');
const TARGET_DIR    = argVal('--dir');
const LIMIT         = argVal('--limit') ? parseInt(argVal('--limit')!, 10) : Infinity;

// Route prefixes that are NOT real articles — skip entirely
const SKIP_PREFIXES = [
  'api/', 'auth/', 'account/', 'login/', 'profile/', 'saved/', 'search/',
  '(admin)', 'feed.json', 'rss', 'feeds/', 'news-sitemap', 'image-sitemap',
  'sitemap', 'robots', 'privacy-policy', 'terms-of-service', 'copyright',
  'corrections', 'editorial-standards', 'get-help', 'service/', 'index/',
  'site-index/', 'tags/', 'about/', 'team/', 'business/',
];

// ── Article component detection ───────────────────────────────────────────────
type ArticleComponent = 'NewsArticle' | 'JackArticle' | 'CreatorArticle' | 'other';

function detectComponent(content: string): ArticleComponent {
  if (content.includes('<NewsArticle'))    return 'NewsArticle';
  if (content.includes('<JackArticle'))    return 'JackArticle';
  if (content.includes('<CreatorArticle')) return 'CreatorArticle';
  return 'other';
}

// ── Extract metadata from page.tsx source ─────────────────────────────────────
interface PageInfo {
  filePath: string;    // absolute
  relPath: string;     // relative to ROOT, e.g. app/world-cup/2026/.../page.tsx
  slug: string;        // e.g. world-cup-2026-germany-7-curacao-1-group-e
  urlPath: string;     // e.g. /world-cup/2026/germany-7-curacao-1-group-e
  title: string;
  subtitle: string;
  category: string;
  component: ArticleComponent;
  hasLocalThumb: boolean;  // OG_IMAGE already points to /thumbnails/
  hasThumbProp: boolean;   // <NewsArticle thumbnail={...}> already present
}

function extractPageInfo(absPath: string): PageInfo | null {
  const content = fs.readFileSync(absPath, 'utf8');

  // ── skip non-article pages ────────────────────────────────────────────────
  const component = detectComponent(content);
  if (component === 'other') return null;

  const relPath = path.relative(ROOT, absPath).replace(/\\/g, '/');

  // ── derive URL path + slug ────────────────────────────────────────────────
  const routeSegments = path
    .relative(APP_DIR, absPath)
    .replace(/\\/g, '/')
    .replace(/\/page\.tsx$/, '')
    .replace(/^\(public\)\//, '');

  const urlPath = '/' + routeSegments;
  const slug = routeSegments.replace(/\//g, '-');

  // ── skip utility routes ───────────────────────────────────────────────────
  if (SKIP_PREFIXES.some(p => relPath.includes(p))) return null;
  if (!content.includes('export const metadata') && !content.includes('export async function generateMetadata')) return null;

  // ── extract title ─────────────────────────────────────────────────────────
  // Prefer the component title prop (more specific) over metadata.title
  const componentTitleMatch = content.match(/\n\s+title="([^"]{3,200})"/);
  const metaTitleMatch = content.match(/title\s*:\s*['"`]([^'"`\r\n]{3,200})['"`]/);
  const title = (componentTitleMatch?.[1] ?? metaTitleMatch?.[1] ?? slug.replace(/-/g, ' ')).trim();
  if (title.length < 4) return null;

  // ── extract subtitle / description ───────────────────────────────────────
  const componentSubtitleMatch = content.match(/\n\s+subtitle="([^"]{3,300})"/);
  const metaDescMatch = content.match(/description\s*:\s*['"`\n\s]*([^'"`\r\n]{10,300})['"`]/);
  const subtitle = (componentSubtitleMatch?.[1] ?? metaDescMatch?.[1] ?? '').trim();

  // ── extract category ──────────────────────────────────────────────────────
  const categoryMatch = content.match(/\n\s+category="([^"]{2,80})"/);
  const category = (categoryMatch?.[1] ?? '').trim();

  // ── already has local thumb? ──────────────────────────────────────────────
  const hasLocalThumb = /const OG_IMAGE = '\/thumbnails\//.test(content);
  const hasThumbProp  = content.includes('thumbnail={{');

  return { filePath: absPath, relPath, slug, urlPath, title, subtitle, category, component, hasLocalThumb, hasThumbProp };
}

// ── Collect files to process ──────────────────────────────────────────────────
function collectFiles(): string[] {
  if (TARGET_FILE) {
    const abs = path.resolve(ROOT, TARGET_FILE);
    return fs.existsSync(abs) ? [abs] : [];
  }

  const baseDir = TARGET_DIR ? path.resolve(ROOT, TARGET_DIR) : APP_DIR;

  const results: string[] = [];
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === 'page.tsx') results.push(full);
    }
  }
  walk(baseDir);
  return results;
}

// ── Unsplash photo search ─────────────────────────────────────────────────────

// Map category/slug keywords → Unsplash search prefix for better results
function buildUnsplashQuery(title: string, category: string, urlPath: string): string {
  const t = title.toLowerCase();
  const c = category.toLowerCase();
  const u = urlPath.toLowerCase();

  // Sports / World Cup
  if (u.includes('/world-cup') || u.includes('/soccer') || u.includes('/mls') || u.includes('/premier-league')) {
    // Extract team names from title for more specific results
    const scoreMatch = title.match(/^([A-Z][a-z]+(?: [A-Z][a-z]+)*)\s+\d/);
    const teamHint = scoreMatch ? scoreMatch[1] : '';
    return teamHint
      ? `${teamHint} soccer football stadium World Cup match`
      : 'soccer football match stadium World Cup crowd';
  }
  if (u.includes('/golf') || c.includes('golf')) return `${title.split('|')[0].trim()} golf PGA Tour`;
  if (u.includes('/mlb') || c.includes('baseball')) return `baseball MLB stadium crowd`;
  if (u.includes('/cars') || u.includes('/ferrari') || u.includes('/porsche') || c.includes('car')) {
    const carMatch = title.match(/^([A-Za-z]+(?: [A-Za-z0-9]+){0,2})/);
    return carMatch ? `${carMatch[1]} supercar luxury sports car` : 'supercar luxury sports car';
  }
  if (u.includes('/youtube') || u.includes('/creator') || u.includes('/influencer')) {
    return `${title.split('|')[0].trim()} social media content creator`;
  }
  if (c.includes('crypto') || u.includes('/crypto')) return 'cryptocurrency blockchain digital finance';
  if (c.includes('tech') || c.includes('ai')) return `${title.split('|')[0].trim()} technology digital`;
  if (t.includes('news') || c.includes('news')) return `${title.split('|')[0].replace(/\|.*/, '').trim()} news journalism`;

  // Generic fallback — use first part of title
  return title.split('|')[0].replace(/[^a-zA-Z0-9 ]/g, ' ').trim().slice(0, 60);
}

async function searchUnsplash(query: string): Promise<string | null> {
  const params = new URLSearchParams({
    query,
    orientation: 'landscape',
    per_page: '5',
    content_filter: 'high',
  });
  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?${params}`, {
      headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    });
    if (!res.ok) { console.warn(`  ⚠️  Unsplash ${res.status}`); return null; }
    const data = await res.json() as { results: Array<{ id: string; urls: { raw: string } }> };
    if (!data.results.length) { console.warn(`  ⚠️  No Unsplash results`); return null; }
    const pick = data.results[1] ?? data.results[0];
    console.log(`  📸  Unsplash: ${pick.id}`);
    return `${pick.urls.raw}&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200`;
  } catch (e) {
    console.warn(`  ⚠️  Unsplash error: ${e}`);
    return null;
  }
}

// ── Download PNG from local Satori ────────────────────────────────────────────
async function downloadPNG(title: string, subtitle: string, imageUrl: string | null): Promise<Buffer | null> {
  const params = new URLSearchParams({
    network: SATORI_NETWORK,
    title,
    layout: 'breaking',
  });
  if (subtitle) params.set('subtitle', subtitle.slice(0, 200));
  if (imageUrl) params.set('image_url', imageUrl);

  const url = `${SATORI_BASE}/api/v1/generate?${params.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) { console.warn(`  ❌  /generate ${res.status}`); return null; }
    const ct = res.headers.get('content-type') ?? '';
    if (!ct.includes('image')) {
      const txt = await res.text();
      console.warn(`  ❌  Expected image, got: ${ct} — ${txt.slice(0, 120)}`);
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    console.log(`  🖼  Downloaded ${Math.round(buf.length / 1024)} KB`);
    return buf;
  } catch (e) {
    console.warn(`  ❌  Download error: ${e}`);
    return null;
  }
}

// ── Register in Satori DB ─────────────────────────────────────────────────────
async function registerSatori(slug: string, title: string, subtitle: string, imageUrl: string | null): Promise<void> {
  const body: Record<string, string> = {
    network: SATORI_NETWORK,
    slug,
    title,
    layout: 'breaking',
  };
  if (subtitle) body.subtitle = subtitle.slice(0, 200);
  if (imageUrl) body.image_url = imageUrl;

  try {
    const res = await fetch(`${SATORI_BASE}/api/v1/quick-generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${SATORI_TOKEN}` },
      body: JSON.stringify(body),
    });
    const data = await res.json() as { saved?: boolean };
    console.log(`  💾  Satori DB: saved=${data.saved}`);
  } catch {
    console.warn(`  ⚠️  Satori DB registration failed (non-fatal)`);
  }
}

// ── Patch page.tsx ─────────────────────────────────────────────────────────────
function patchFile(page: PageInfo, localPath: string): boolean {
  let content = fs.readFileSync(page.filePath, 'utf8');
  const altText = page.title.replace(/'/g, '');

  // ── 1. Set OG_IMAGE to local path ─────────────────────────────────────────
  if (/const OG_IMAGE\s*=/.test(content)) {
    // Replace existing OG_IMAGE value
    content = content.replace(/const OG_IMAGE = '[^']*';/, `const OG_IMAGE = '${localPath}';`);
  } else {
    // Inject OG_IMAGE after the CANONICAL/URL_PATH const block
    const insertAfter = /const CANONICAL\s*=.+\n|const URL_PATH\s*=.+\n/;
    const match = insertAfter.exec(content);
    if (match) {
      const insertPos = match.index + match[0].length;
      content = content.slice(0, insertPos) + `\nconst OG_IMAGE = '${localPath}';\n` + content.slice(insertPos);
    } else {
      // Last resort: add after the last import
      content = content.replace(
        /(import[^\n]+\n)(?!import)/,
        `$1\nconst OG_IMAGE = '${localPath}';\n`,
      );
    }
  }

  // ── 2. Wire OG_IMAGE into openGraph images if not already ─────────────────
  if (!content.includes('images: [{ url: OG_IMAGE') && !content.includes('images: [{url: OG_IMAGE')) {
    // Replace any existing images array, or add it
    if (/images\s*:\s*\[/.test(content)) {
      content = content.replace(
        /images\s*:\s*\[\s*\{[^}]+\}\s*\]/,
        `images: [{ url: OG_IMAGE, width: 1200, height: 630 }]`,
      );
    }
  }

  // ── 3. Add thumbnail prop to article component (NewsArticle / JackArticle) ─
  // Only applies where there's a url={URL_PATH} prop pattern
  if ((page.component === 'NewsArticle' || page.component === 'JackArticle') && content.includes('url={URL_PATH}')) {
    const thumbProp = `      thumbnail={{ src: OG_IMAGE, alt: '${altText}' }}`;
    if (content.includes('thumbnail={{')) {
      // Update existing thumbnail prop
      content = content.replace(/\s+thumbnail=\{\{[^}]+\}\}/, `\n${thumbProp}`);
    } else {
      // Insert after url={URL_PATH}
      content = content.replace('      url={URL_PATH}', `      url={URL_PATH}\n${thumbProp}`);
    }
  }

  if (DRY_RUN) {
    console.log(`  🔍  Would patch: ${page.relPath}`);
    return true;
  }
  fs.writeFileSync(page.filePath, content, 'utf8');
  console.log(`  ✅  Patched: ${page.relPath}`);
  return true;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('════════════════════════════════════════════════════════════════════');
  console.log('  mint-thumbnails — Universal Satori Minter');
  console.log(`  Satori: ${SATORI_BASE} | Output: public/thumbnails/`);
  if (DRY_RUN) console.log('  MODE: DRY-RUN (no writes)');
  if (FORCE)   console.log('  MODE: FORCE (re-mint even if thumbnail exists)');
  console.log('════════════════════════════════════════════════════════════════════\n');

  // ── verify Satori ──────────────────────────────────────────────────────────
  try {
    const h = await fetch(`${SATORI_BASE}/api/health`);
    const { status } = await h.json() as { status: string };
    console.log(`✅  Satori: ${status}\n`);
  } catch {
    console.error(`❌  Cannot reach Satori at ${SATORI_BASE}`);
    console.error('    Make sure Satori is running on port 3001');
    process.exit(1);
  }

  // ── collect pages ──────────────────────────────────────────────────────────
  const allFiles = collectFiles();
  const pages: PageInfo[] = [];

  for (const f of allFiles) {
    try {
      const info = extractPageInfo(f);
      if (info) pages.push(info);
    } catch { /* skip unparseable files */ }
  }

  // Apply --skip-existing (default unless --force)
  const queue = FORCE
    ? pages
    : pages.filter(p => !p.hasLocalThumb);

  const limited = queue.slice(0, LIMIT);

  console.log(`Found ${pages.length} article pages`);
  console.log(`Queue: ${queue.length} need thumbnails${limited.length < queue.length ? ` (capped at ${LIMIT})` : ''}\n`);

  if (limited.length === 0) {
    console.log('Nothing to do. Use --force to re-mint existing thumbnails.');
    return;
  }

  fs.mkdirSync(THUMB_DIR, { recursive: true });

  let succeeded = 0;
  let failed = 0;

  for (const page of limited) {
    console.log(`\n📄  ${page.title}`);
    console.log(`    ${page.relPath}`);
    console.log(`    slug: ${page.slug}`);

    // 1. Build Unsplash query
    const query = buildUnsplashQuery(page.title, page.category, page.urlPath);
    console.log(`  🔍  Query: "${query}"`);

    // 2. Find background photo
    const imageUrl = await searchUnsplash(query);

    // 3. Download PNG from Satori
    const buf = await downloadPNG(page.title, page.subtitle, imageUrl);
    if (!buf) { failed++; continue; }

    // 4. Save to disk
    const localPath = `/thumbnails/${page.slug}.jpg`;
    const outputPath = path.join(THUMB_DIR, `${page.slug}.jpg`);
    if (!DRY_RUN) {
      fs.writeFileSync(outputPath, buf);
      console.log(`  💾  Saved → public/thumbnails/${page.slug}.jpg`);
    }

    // 5. Register in Satori DB
    if (!DRY_RUN) await registerSatori(page.slug, page.title, page.subtitle, imageUrl);

    // 6. Patch page.tsx
    const ok = patchFile(page, localPath);
    if (ok) succeeded++; else failed++;

    // Unsplash rate limit buffer
    await new Promise(r => setTimeout(r, 600));
  }

  console.log('\n════════════════════════════════════════════════════════════════════');
  console.log(`  Done.  ✅ ${succeeded} patched  |  ❌ ${failed} failed`);
  console.log('════════════════════════════════════════════════════════════════════\n');

  if (succeeded > 0 && !DRY_RUN) {
    console.log('Next: run  npm run build  to sync content_registry with the new imageUrls.\n');
  }
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
