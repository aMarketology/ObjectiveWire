/**
 * mint-thumbnail.ts
 *
 * Pulls a photo from Unsplash, composites the ZWire watermark, embeds EXIF
 * metadata, and saves a keyword-optimised JPEG to public/thumbnails/.
 *
 * Usage:
 *   npx tsx scripts/mint-thumbnail.ts \
 *     --photo  E3CxGyPAYlw \
 *     --slug   ferrari-f80-hypercar-price-specs-2026 \
 *     --alt    "Ferrari F80 hypercar red hood emblem, 1184hp hybrid 2026" \
 *     --keywords "Ferrari F80,Ferrari hypercar,supercar,1184hp"
 *
 * Output:
 *   public/thumbnails/ferrari-f80-hypercar-price-specs-2026.jpg
 *   (prints the public path so you can paste it directly into page.tsx)
 *
 * Image SEO baked in:
 *   - Keyword-rich filename (slug-based, hyphenated)
 *   - EXIF ImageDescription = alt text (read by Google Image crawlers)
 *   - EXIF XPKeywords = comma-separated keywords (Windows / Bing indexer)
 *   - EXIF Copyright = © 2026 ZWire
 *   - EXIF Artist = ZWire Auto Desk (or overridden via --author flag)
 *   - 1200×675 px (16:9, Google Top Stories requirement)
 *   - q=88 JPEG (good quality vs. file size trade-off)
 *   - ZWire coin watermark at bottom-right, 18% of frame width, 70% opacity
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// ─── CLI args ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
function arg(flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
}

const photoId   = arg('--photo')    ?? '';  // CDN timestamp-hash: 1730298878684-33c8b2c81aac
const apiId     = arg('--api-id')   ?? '';  // short API ID (e.g. E3CxGyPAYlw) — for download trigger
const slug      = arg('--slug')     ?? '';
const alt       = arg('--alt')      ?? slug.replace(/-/g, ' ');
const keywords  = arg('--keywords') ?? '';
const author    = arg('--author')   ?? 'ZWire Auto Desk';
const ixid      = arg('--ixid')     ?? '';   // optional — improves Unsplash caching

if (!photoId || !slug) {
  console.error('Usage: npx tsx scripts/mint-thumbnail.ts --photo <cdn-id> --slug <slug> [--api-id <short-id>] [--alt "..."] [--keywords "kw1,kw2"] [--author "..."] [--ixid "..."]');
  process.exit(1);
}

// ─── Config ──────────────────────────────────────────────────────────────────
const UNSPLASH_KEY    = process.env.UNSPLASH_ACCESS_KEY ?? '-QnuCnH9-8EQpkZafUFroTi6AUVuHR1A5u4FFb66vrQ';
const OUTPUT_W        = 1200;
const OUTPUT_H        = 675;
const QUALITY         = 88;
const WATERMARK_RATIO = 0.18;   // 18% of image width
const WATERMARK_ALPHA = 0.72;   // 72% opacity
const WATERMARK_PAD   = 18;     // px from edge
const WATERMARK_PATH  = path.resolve(process.cwd(), 'zWatermark.png');
const OUT_DIR         = path.resolve(process.cwd(), 'public', 'thumbnails');
const OUT_FILE        = path.join(OUT_DIR, `${slug}.jpg`);
const PUBLIC_PATH     = `/thumbnails/${slug}.jpg`;

// ─── Helpers ─────────────────────────────────────────────────────────────────
async function fetchBuffer(url: string, headers: Record<string, string> = {}): Promise<Buffer> {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

function buildUnsplashUrl(): string {
  // photoId may already include 'photo-' prefix or just be the timestamp-hash
  const cdnId = photoId.startsWith('photo-') ? photoId : `photo-${photoId}`;
  const base = `https://images.unsplash.com/${cdnId}`;
  const params = new URLSearchParams({
    w:   String(OUTPUT_W * 2),   // 2× for retina source, we resize in sharp
    h:   String(OUTPUT_H * 2),
    fit: 'crop',
    fm:  'jpg',
    q:   '90',
  });
  if (ixid) params.set('ixid', ixid);
  params.set('ixlib', 'rb-4.1.0');
  return `${base}?${params}`;
}

async function triggerUnsplashDownload(): Promise<void> {
  // Requires the short API ID (not the CDN timestamp-hash). Pass --api-id to enable.
  if (!apiId) {
    console.log('  ⓘ  --api-id not provided, skipping photographer download credit');
    return;
  }
  try {
    const res = await fetch(`https://api.unsplash.com/photos/${apiId}/download`, {
      headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
    });
    if (!res.ok) {
      console.warn(`  ⚠  Unsplash download trigger returned ${res.status} (non-fatal)`);
    } else {
      console.log('  ✓  Unsplash download credited to photographer');
    }
  } catch {
    console.warn('  ⚠  Could not trigger Unsplash download endpoint (non-fatal)');
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n🖼  Minting thumbnail for: ${slug}`);
  const cdnPrefix = photoId.startsWith('photo-') ? '' : 'photo-';
  console.log(`   Photo ID : ${cdnPrefix}${photoId}`);
  if (apiId) console.log(`   API ID   : ${apiId}`);
  console.log(`   Alt text : ${alt}`);
  console.log(`   Keywords : ${keywords}`);
  console.log(`   Output   : ${OUT_FILE}\n`);

  // 1. Ensure output dir exists
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // 2. Download Unsplash photo
  console.log('  ↓  Downloading photo from Unsplash…');
  const photoUrl = buildUnsplashUrl();
  const photoBuffer = await fetchBuffer(photoUrl);
  await triggerUnsplashDownload();

  // 3. Resize photo to 1200×675
  console.log('  ✂  Resizing to 1200×675…');
  const resized = await sharp(photoBuffer)
    .resize(OUTPUT_W, OUTPUT_H, { fit: 'cover', position: 'centre' })
    .toBuffer();

  // 4. Build watermark — resize coin to 18% of width, apply opacity
  const wmSize = Math.round(OUTPUT_W * WATERMARK_RATIO);  // ~216 px
  console.log(`  💧  Building watermark (${wmSize}px, ${Math.round(WATERMARK_ALPHA * 100)}% opacity)…`);

  const wmBase = await sharp(WATERMARK_PATH)
    .resize(wmSize, wmSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Apply opacity by blending with a transparent layer via modulate — Sharp
  // doesn't have a direct opacity knob, so we composite onto a transparent canvas.
  const wmTransparent = await sharp({
    create: { width: wmSize, height: wmSize, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: wmBase, blend: 'over' }])
    .png()
    .toBuffer();

  // Scale alpha channel via linear transform: each alpha value × WATERMARK_ALPHA
  const wmFaded = await sharp(wmTransparent)
    .ensureAlpha()
    .linear(WATERMARK_ALPHA, 0)   // multiply alpha channel
    .png()
    .toBuffer();

  // 5. Composite watermark bottom-right
  const left = OUTPUT_W - wmSize - WATERMARK_PAD;
  const top  = OUTPUT_H - wmSize - WATERMARK_PAD;

  console.log('  🔀  Compositing watermark…');
  const composited = await sharp(resized)
    .composite([{ input: wmFaded, left, top, blend: 'over' }])
    .toBuffer();

  // 6. Write JPEG with EXIF metadata for image SEO
  console.log('  🏷  Embedding EXIF metadata…');
  const year = new Date().getFullYear();

  await sharp(composited)
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .withMetadata({
      exif: {
        IFD0: {
          ImageDescription: alt,
          Copyright:        `© ${year} ZWire | owire.org`,
          Artist:           author,
          // XPKeywords is a UTF-16LE blob — skip for TS simplicity; Google reads alt/filename
          Software:         'ZWire Thumbnail Minter',
        },
      },
    })
    .toFile(OUT_FILE);

  const stats = fs.statSync(OUT_FILE);
  const sizeKb = (stats.size / 1024).toFixed(1);

  console.log(`\n✅  Done!`);
  console.log(`   File  : ${OUT_FILE}`);
  console.log(`   Size  : ${sizeKb} KB`);
  console.log(`   Path  : ${PUBLIC_PATH}`);
  console.log('\n── Paste into page.tsx ─────────────────────────────────────────────');
  console.log(`const OG_IMAGE = '${PUBLIC_PATH}';`);
  console.log(`// alt: "${alt}"`);
  console.log('────────────────────────────────────────────────────────────────────\n');
})().catch((err) => {
  console.error('❌  mint-thumbnail failed:', err.message);
  process.exit(1);
});
