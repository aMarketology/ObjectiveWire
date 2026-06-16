# Satori Thumbnail API — Author Reference

A practical guide for authors and CMS integrators to generate, batch-mint, and look up thumbnails using the Satori image service.

---

## Base URLs

| Environment | Base URL |
|---|---|
| **Local (dev)** | `http://localhost:3000` |
| **LAN (same network)** | `http://192.168.1.186:3000` |
| **Live (production)** | `https://satori-neon.vercel.app` |

Replace `{BASE}` in every example below with the URL that applies to you.

---

## Authentication

The `quick-generate` endpoint requires a **Bearer token** in the `Authorization` header.

```
Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3
```

> ⚠️ Keep this token private. Do not embed it in front-end JavaScript or commit it to a public repo.

The `/generate` and `/og` endpoints are **public** — no token needed.

---

## Endpoints

### 1. `GET /api/v1/generate` — Generate a Thumbnail Image

The core endpoint. Returns a **PNG image** (1200×630 by default) you can drop directly into an `og:image` tag or `<img>` src.

**URL:**
```
{BASE}/api/v1/generate
```

**Query Parameters:**

| Param | Type | Required | Description |
|---|---|---|---|
| `network` | string | ✅ | Brand slug, e.g. `ozone`, `domain`, `texas-signal` |
| `title` | string | ✅ | Article headline (URL-encoded) |
| `subtitle` | string | — | Deck or standfirst text |
| `image_url` | string | — | Background photo URL (URL-encoded) |
| `layout` | string | — | `standard` · `cinematic` · `breaking` · `minimal` · `youtube` · `social` |
| `accent` | string | — | Hex color override for brand accent, e.g. `%23E11D48` |
| `overlay` | number | — | Gradient darkness 0–100 (default: `100`) |

**Output dimensions by layout:**

| Layout | Width | Height | Use case |
|---|---|---|---|
| `standard` *(default)* | 1200 | 630 | Article / Open Graph |
| `cinematic` | 1200 | 630 | Wide cinematic feel |
| `breaking` | 1200 | 630 | Breaking news style |
| `minimal` | 1200 | 630 | Clean, text-forward |
| `youtube` | 1280 | 720 | YouTube thumbnail |
| `social` | 1200 | 1200 | Square — Instagram / LinkedIn |

**Examples:**

```bash
# Minimal — just title + brand
curl "{BASE}/api/v1/generate?network=ozone&title=Rangers+Win+the+Series"

# With background image and cinematic layout
curl "{BASE}/api/v1/generate?network=ozone\
  &title=Rangers+Win+the+Series\
  &image_url=https%3A%2F%2Fexample.com%2Fphoto.jpg\
  &layout=cinematic\
  &overlay=75"

# YouTube thumbnail
curl "{BASE}/api/v1/generate?network=domain\
  &title=Austin+Housing+Market+2025\
  &layout=youtube"

# Square social card
curl "{BASE}/api/v1/generate?network=ozone\
  &title=5+Things+You+Missed+This+Week\
  &layout=social"
```

**Use as an `og:image` tag:**
```html
<meta
  property="og:image"
  content="{BASE}/api/v1/generate?network=ozone&title=My+Article+Title&image_url=https%3A%2F%2F..."
/>
```

---

### 2. `POST /api/v1/quick-generate` — CMS One-Shot Mint

**Machine-to-machine** endpoint for CMS integrations. One call does everything:
- Scrapes article metadata (if you send a URL), OR accepts data directly
- Finds a photo from Unsplash if no image is provided
- Generates the thumbnail URL
- Saves it to the database

**Requires:** `Authorization: Bearer <token>` header

**Request — Mode A: Send an article URL (we scrape it):**
```bash
curl -X POST "{BASE}/api/v1/quick-generate" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -d '{
    "url": "https://yourdomain.com/article/rangers-win-the-series"
  }'
```

**Request — Mode B: Send data directly:**
```bash
curl -X POST "{BASE}/api/v1/quick-generate" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -d '{
    "network":   "ozone",
    "slug":      "rangers-win-the-series",
    "title":     "Rangers Win the Series",
    "subtitle":  "A historic night for Texas baseball",
    "image_url": "https://example.com/photo.jpg",
    "layout":    "cinematic"
  }'
```

**Optional fields (both modes):**

| Field | Type | Description |
|---|---|---|
| `layout` | string | `standard` · `cinematic` · `breaking` · `minimal` |

**Response:**
```json
{
  "generated_url": "https://satori-neon.vercel.app/api/v1/generate?network=ozone&title=...",
  "editor_url":    "https://satori-neon.vercel.app/?url=https%3A%2F%2F...",
  "image_url":     "https://example.com/photo.jpg",
  "brand_slug":    "ozone",
  "slug":          "rangers-win-the-series",
  "title":         "Rangers Win the Series",
  "subtitle":      "A historic night for Texas baseball",
  "saved":         true
}
```

- **`generated_url`** — drop this directly into `og:image`. It's a live PNG.
- **`editor_url`** — share with an author to open the Satori editor pre-loaded with this article.

---

### 3. `POST /api/v1/generate-batch` — Batch Mint All Queued Thumbnails

Processes every article in the thumbnail queue (from `v_thumbnail_queue` in Supabase). Streams progress back as **Server-Sent Events (SSE)** so you can watch it live.

**No auth required** (server-side use only recommended).

**Request:**
```bash
curl -X POST "{BASE}/api/v1/generate-batch" \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "ozone",
    "limit": 20
  }'
```

**Body (all optional):**

| Field | Type | Default | Description |
|---|---|---|---|
| `brand` | string | all brands | Restrict to a single brand slug |
| `limit` | number | 50 (max 100) | Max articles to process this run |

**SSE Events streamed back:**

| Event | Payload | Meaning |
|---|---|---|
| `queued` | `{ total }` | Queue fetched — total jobs ready |
| `start` | `{ id, slug, brand_slug, title }` | Article pipeline starting |
| `stage` | `{ id, stage, label, status }` | Pipeline step update (cutout → outpaint → upload) |
| `done` | `{ id, slug, master_asset_url, generated_url }` | ✅ Article finished |
| `skip` | `{ id, slug, reason }` | Skipped — no source image |
| `fail` | `{ id, slug, error }` | ❌ Pipeline failed |
| `complete` | `{ processed, succeeded, failed, skipped }` | All done summary |

**Watch it live in your terminal:**
```bash
curl -N -X POST "{BASE}/api/v1/generate-batch" \
  -H "Content-Type: application/json" \
  -d '{ "brand": "ozone", "limit": 10 }'
```

**Pipeline stages per article:**

| Stage | What happens |
|---|---|
| `cutout` | Background removed from source image |
| `outpaint` | Expanded to 16:9 ratio |
| `harmonize` | Lighting harmonized |
| `upload` | Master asset saved to Supabase Storage |

---

### 4. `GET /api/v1/og` — Look Up a Saved Thumbnail URL

Public lookup for live sites. Returns the saved Satori thumbnail URL for any article so your frontend can use it without Supabase credentials.

**URL:**
```
{BASE}/api/v1/og?network={brand_slug}&slug={article_slug}
```

**Example:**
```bash
curl "{BASE}/api/v1/og?network=ozone&slug=rangers-win-the-series"
```

**Response:**
```json
{
  "url": "https://satori-neon.vercel.app/api/v1/generate?network=ozone&title=...",
  "source": "override"
}
```

| `source` value | Meaning |
|---|---|
| `"override"` | Saved manually via editor or quick-generate |
| `"article"` | Saved via the batch pipeline |
| `null` | No thumbnail saved yet |

**Use in your site's `og:image`:**
```js
const res = await fetch(`https://satori-neon.vercel.app/api/v1/og?network=ozone&slug=${slug}`)
const { url } = await res.json()
// url is ready-to-use or null if not yet minted
```

---

## Quick Reference — Common Calls

```bash
# ── Generate a PNG thumbnail (open in browser or use as og:image) ──────────────
{BASE}/api/v1/generate?network=ozone&title=My+Headline&layout=standard

# ── Quick-mint from an article URL ────────────────────────────────────────────
curl -X POST {BASE}/api/v1/quick-generate \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://yourdomain.com/path/to/article"}'

# ── Batch mint all queued thumbnails for one brand ────────────────────────────
curl -N -X POST {BASE}/api/v1/generate-batch \
  -H "Content-Type: application/json" \
  -d '{"brand":"ozone","limit":50}'

# ── Look up a saved thumbnail ─────────────────────────────────────────────────
curl {BASE}/api/v1/og?network=ozone&slug=my-article-slug
```

---

## Brand Slugs

Use the correct brand slug for the `network` parameter:

| Brand | Slug |
|---|---|
| Ozone Network | `ozone` |
| Domain | `domain` |
| *(add others from your Supabase `brands` table)* | |

---

## Health Check

```bash
curl {BASE}/api/health
```

Returns `200 OK` when the server is running.
