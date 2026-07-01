# Satori Thumbnail System | How-To Guide

**Updated:** July 1, 2026  
**Satori local port:** `3000`  
**Network:** `ozone`  
**Token:** `satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3`

---

## What Satori Does

Satori is a local thumbnail generation server running at `http://localhost:3000`. For every article we publish it:

1. Finds a relevant Unsplash background photo
2. Renders a branded 1200×630 PNG (title, subtitle, logo, gradient overlay)
3. Returns the raw PNG bytes via `/api/v1/generate`

That PNG gets saved to `public/thumbnails/[slug].jpg` and wired into the article's `page.tsx` as a **static local file** — not a live CDN URL.

---

## The Golden Rule

> **Always download and save the PNG. Never link to the Satori CDN URL directly.**

| ❌ Wrong | ✅ Correct |
|---|---|
| `OG_IMAGE = 'https://satori-neon.vercel.app/api/v1/generate?...'` | `OG_IMAGE = '/thumbnails/my-article-slug.jpg'` |
| Live render on every request | Static file served from `/public` |
| Breaks if Satori is down | Always works |
| Slow for social crawlers | Instant |

---

## Prerequisites

Satori must be running locally before you mint anything:

```bash
# In a separate terminal — keep it running
cd ~/path/to/satori
npm run dev
# → listening on http://localhost:3000
```

Verify it's healthy:
```bash
curl http://localhost:3000/api/health
# → {"status":"healthy",...}
```

---

## The Correct Minting Flow

Every new article needs **three things** done in order:

```
1. Write the article  →  page.tsx with title, subtitle, slug
2. Mint thumbnail     →  Two curl calls direct to Satori (see below)
3. Sync registry      →  npx tsx scripts/sync-registry.ts --write
```

---

## Direct Satori Minting — Two curl Calls

No script. No `npx`. Two curl commands per article.

### Step 1 — Register in Satori DB and get the generated_url

```bash
curl -s -X POST "http://localhost:3000/api/v1/quick-generate" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -d '{
    "network": "ozone",
    "slug": "your-article-slug",
    "title": "Your Article Title",
    "subtitle": "Short deck sentence.",
    "layout": "breaking"
  }'
```

The response includes a `generated_url` field — that is the URL of the rendered PNG.

### Step 2 — Download the PNG and save it

Copy the full `generated_url` from Step 1 and run:

```bash
curl -s "PASTE_GENERATED_URL_HERE" \
  -o public/thumbnails/your-article-slug.jpg
```

Verify the file:
```bash
ls -lh public/thumbnails/your-article-slug.jpg
# Should be 600KB–1.2MB
```

### Step 3 — Wire OG_IMAGE into the article

Add near the top of `page.tsx` (after PAGE_URL, before metadata):

```tsx
const OG_IMAGE = '/thumbnails/your-article-slug.jpg';
```

Add to the `<NewsArticle>` component props:

```tsx
thumbnail={{ src: OG_IMAGE, alt: 'Descriptive alt text here' }}
```

Also add to openGraph images in metadata:

```tsx
images: [{ url: `${SITE_CONFIG.url}${OG_IMAGE}`, width: 1200, height: 675, alt: 'Descriptive alt text' }],
```

---

## What Changes in page.tsx

Two additions per article:

### 1. OG_IMAGE constant

```tsx
const OG_IMAGE = '/thumbnails/world-cup-news-fbi-nrg-stadium-threat-houston-2026.jpg';
```

### 2. thumbnail prop on `<NewsArticle>`

```tsx
// Added after url={ARTICLE_URL}
thumbnail={{ src: OG_IMAGE, alt: 'NRG Stadium Houston Texas, FBI World Cup security investigation 2026' }}
```

The `thumbnail` prop activates the **genie float animation** in the article header — the floating, glowing image that appears on the right side of the gradient header. Without it, the header is just a flat colour gradient.

---

## After Minting — Always Sync the Registry

`registry-data.json` is what the homepage, hub pages, and sitemaps read. It must be rebuilt after every mint:

```bash
npx tsx scripts/sync-registry.ts --write
```

Until you run this, the new thumbnail won't show on:
- Homepage article cards
- Hub page article grids
- Related article sidebars
- Google News / sitemap image tags

### What sync-registry does with images

It reads the `OG_IMAGE` constant from each `page.tsx` and writes it as `imageUrl` in `registry-data.json`. If the path starts with `/thumbnails/`, it is stored **as-is** (relative). This means:

- `localhost:3000/thumbnails/...` → works locally ✅
- `objectivewire.com/thumbnails/...` → works in production ✅

---

## Slug Naming Rules

The thumbnail filename **must match** the article's route slug. The script derives this automatically from the file path:

| File path | Slug | Thumbnail saved as |
|---|---|---|
| `app/world-cup/2026/germany-7-curacao-1-group-e/page.tsx` | `world-cup-2026-germany-7-curacao-1-group-e` | `public/thumbnails/world-cup-2026-germany-7-curacao-1-group-e.jpg` |
| `app/cars/ferrari/ferrari-f80-hypercar-price-specs-2026/page.tsx` | `cars-ferrari-ferrari-f80-hypercar-price-specs-2026` | `public/thumbnails/cars-ferrari-ferrari-f80-hypercar-price-specs-2026.jpg` |

---

## The Full New Article Workflow

```bash
# 1. Write the article
#    Create app/[section]/[slug]/page.tsx
#    Include: title, subtitle, category, metadata block

# 2. Register in Satori DB (Satori must be running on :3000)
curl -s -X POST "http://localhost:3000/api/v1/quick-generate" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -d '{
    "network": "ozone",
    "slug": "[section]-[slug]",
    "title": "Your Article Title",
    "subtitle": "Short deck sentence.",
    "layout": "breaking"
  }'
# → copy the "generated_url" from the response

# 3. Download the PNG
curl -s "PASTE_GENERATED_URL_HERE" \
  -o public/thumbnails/[section]-[slug].jpg

# 4. Wire into page.tsx (manually add two lines)
#    const OG_IMAGE = '/thumbnails/[section]-[slug].jpg';
#    thumbnail={{ src: OG_IMAGE, alt: '...' }}

# 5. Sync the registry
npx tsx scripts/sync-registry.ts --write

# 6. Verify locally
#    Open http://localhost:3001/[section]/[slug]
#    — Header should show the animated thumbnail (genie float)
#    — Homepage card should show the thumbnail image

# 7. Commit
git add app/[section]/[slug]/page.tsx public/thumbnails/[slug].jpg lib/registry-data.json
git commit -m "feat: [slug] + thumbnail"
```

---

## Custom Thumbnails — Live Editor & Grok AI

The **Live Editor** is a browser-based Canva-style dashboard built directly into Satori. It lets you craft a thumbnail visually — no command line needed — and gives you access to every customization option including Grok-powered AI prompts.

Open it at:
```
http://localhost:3000
```
_(Satori must be running. Same `npm run dev` as above.)_

---

### Live Editor: Quick Start

1. Open `http://localhost:3000` in your browser
2. Either:
   - **Paste an article URL** into the URL import bar and click **Import** — Satori auto-fills title, subtitle, and finds a background photo
   - **Type a prompt** (flip toggle to ✨ Prompt mode) — e.g. `"Breaking: Spain wins Euro 2026"` — and Satori uses Grok to generate everything
3. Tweak any field in the sidebar
4. Click **Save to Satori** to register it in the DB

> The saved URL (`/api/v1/og?network=ozone&slug=...`) is what your minting script reads — the visual is locked in at that point.

---

### Game Articles — Grok-Powered Game Customization

For game coverage (reviews, previews, guides), the **Game Customization** panel unlocks a full set of game-specific options powered by the Grok AI.

Scroll to the **Game Customization** section in the sidebar and expand it.

#### Step 1 — Fill in the game details

| Field | What to enter | Example |
|---|---|---|
| Game Title | The exact title | `Elden Ring: Nightreign` |
| Franchise | Parent series if applicable | `Elden Ring` |
| Developer | Studio name | `FromSoftware` |
| Publisher | Publisher name | `Bandai Namco` |
| Genre | Pick from dropdown | `Soulslike` |

#### Step 2 — Select platforms

Toggle any platforms that apply. Each badge appears on the thumbnail corner:

| Badge | Colour |
|---|---|
| 🖥️ PC | Slate |
| 🎮 PS5 | Blue |
| 🎯 Xbox | Green |
| 🕹️ Switch | Red |
| 📱 Mobile | Grey |
| 🥽 VR | Purple |

#### Step 3 — Choose an overlay badge

Pick the label that stamps across your thumbnail banner:

| Badge | Use when… |
|---|---|
| ⭐ REVIEW | You're scoring the game |
| 🎮 GAMEPLAY | Hands-on / Let's Play |
| 👁️ FIRST LOOK | Early access / preview |
| 🔥 EXCLUSIVE | You have an exclusive angle |
| ⚡ BREAKING | News flash / announcement |
| 💭 OPINION | Op-ed / editorial |
| 📖 GUIDE | Walkthrough / tips |
| _(none)_ | Clean thumbnail, no badge |

#### Step 4 — Set a review score (optional)

Drag the **Review Score** slider (0–100). A colour-coded score badge appears:
- **80–100** → Gold (excellent)
- **60–79** → Green (good)
- **40–59** → Yellow (mixed)
- **0–39** → Red (poor)

Leave the slider off if this is not a scored review.

#### Step 5 — Generate a visual prompt with Grok

Click **🤖 Generate Game Visual with Grok**. The system sends your game details to `grok-3-mini` and gets back:

- A cinematic art-direction prompt for the background image
- Suggested Unsplash search keywords
- A colour palette suggestion
- An art style descriptor (e.g. `"Neon cyberpunk city streets with rain reflections"`)

The generated prompt auto-fills the **Enhance Image** text box. You can edit it before clicking **Mint Image**.

> **Grok API is live** — no extra setup needed. The `GROK_API_KEY` is already configured in the environment.

#### Full Game Review Example

```
Game Title:     Elden Ring: Nightreign
Franchise:      Elden Ring
Developer:      FromSoftware
Genre:          Soulslike
Platforms:      PS5, PC
Overlay Badge:  ⭐ REVIEW
Review Score:   88
```

→ Click **Generate Game Visual with Grok** → Edit prompt if needed → Click **Mint Image** → **Save to Satori**

---

### Custom Accent Colour

Every brand has a default accent colour but you can override it per-thumbnail in the **Advanced** section of the sidebar.

1. Scroll to **Advanced** at the bottom of the sidebar
2. Click the **colour swatch** (or type a hex code like `#e53e3e`) in the **Accent Color** field
3. Choose from the six preset swatches or pick any colour
4. The live preview updates in real time

The accent colour affects the gradient overlay band and the logo text glow. Use this when:
- Covering a game with a strong brand colour (e.g. PlayStation blue `#003087`)
- Matching a sponsor or event's palette
- Creating a series of thumbnails with a consistent look

> Accent colour is saved with the thumbnail via `custom_accent` in the Supabase DB. The `/api/v1/generate?accent=%23e53e3e` parameter accepts any 6-digit hex.

---

### Overlay Strength

Control how dark the image gradient overlay appears — useful when the background photo has important detail you don't want to obscure.

1. In the **Advanced** section, drag the **Overlay Strength** slider
2. `100` = full overlay (default — best readability)
3. `50` = semi-transparent overlay (photo detail shows through)
4. `0` = no overlay (photo only — use with caution, text may be hard to read)

> The overlay is the dark gradient that sits between the background photo and the title text. Reducing it makes photos more visible but can hurt headline legibility on bright images. A value of `70–85` works well for most game screenshots.

---

### Uploading Original Media (Screenshots & Photos)

For first-hand game screenshots, press photos, or event photography — upload the original file directly into Satori instead of relying on Unsplash.

1. Scroll to **Original Media** in the sidebar
2. Either **drag-and-drop** a file onto the upload zone, or click to **browse**
3. Supported formats: JPEG, PNG, WebP, GIF (max 10 MB)
4. Satori uploads the file to secure storage and sets it as the background image

Once uploaded, a coloured **source badge** appears below the image URL:

| Badge | Meaning |
|---|---|
| 🟢 Original Upload | Your first-hand media — highest E-E-A-T value |
| 🔵 Unsplash | Stock photo pulled by the AI |
| 🟣 AI Generated | FLUX/Replicate-generated image |
| 🟠 External URL | Image linked from another site |

> **E-E-A-T tip:** Google rewards original, first-hand images. An "Original Upload" badge means the image is credited as `"Original — First-hand Media"` in the DB. Aim for at least 20% original media across your articles.

#### Accepted uploads

- Press-kit screenshots provided by the developer/publisher ✅
- Your own gameplay captures ✅
- Event photography you took yourself ✅
- Images scraped from another outlet ❌ (use Unsplash instead)

---

### Putting It All Together — Custom Game Thumbnail Workflow

```bash
# 1. Start Satori
cd ~/path/to/satori && npm run dev

# 2. Open the editor
#    http://localhost:3000

# 3. Paste the article URL or type a prompt → Import

# 4. In Game Customization:
#    - Fill in game title, genre, platforms
#    - Pick overlay badge (REVIEW / GAMEPLAY / etc.)
#    - Set review score if applicable
#    - Click "Generate Game Visual with Grok"

# 5. In Original Media:
#    - Drag in your screenshot or press-kit image (optional but recommended)

# 6. In Advanced:
#    - Adjust accent colour to match the game's brand
#    - Tweak overlay strength if the image is dark/bright

# 7. Click "Save to Satori"
#    → Registers in DB, response includes generated_url

# 8. Download the PNG directly
curl -s "PASTE_GENERATED_URL_FROM_RESPONSE" \
  -o public/thumbnails/your-article-slug.jpg

# 9. Wire into page.tsx manually
#    const OG_IMAGE = '/thumbnails/your-article-slug.jpg';
#    thumbnail={{ src: OG_IMAGE, alt: '...' }}
```

---

## Satori API Reference (Local)

Base URL: `http://localhost:3000`

### Health check
```bash
curl http://localhost:3000/api/health
```

### Generate PNG directly (preview in browser)
```
http://localhost:3000/api/v1/generate?network=ozone&title=My+Title&layout=breaking
```

Parameters:

| Param | Required | Notes |
|---|---|---|
| `network` | ✅ | Always `ozone` for this project |
| `title` | ✅ | URL-encoded headline |
| `subtitle` | — | URL-encoded deck text |
| `image_url` | — | URL-encoded Unsplash photo URL |
| `layout` | — | `breaking` (default for news), `standard`, `cinematic`, `minimal` |

### Register in Satori DB and get generated_url (quick-generate)
```bash
curl -s -X POST http://localhost:3000/api/v1/quick-generate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -d '{
    "network": "ozone",
    "slug": "my-article-slug",
    "title": "My Article Title",
    "subtitle": "Short deck text",
    "layout": "breaking"
  }'
```

Response includes `generated_url` — pass that directly to curl to download the PNG:
```bash
curl -s "PASTE_GENERATED_URL_HERE" -o public/thumbnails/my-article-slug.jpg
```

### Look up a saved thumbnail URL
```bash
curl "http://localhost:3000/api/v1/og?network=ozone&slug=my-article-slug"
```

---

## Troubleshooting

### "Cannot reach Satori at localhost:3000"
Satori is not running. Start it first:
```bash
cd ~/path/to/satori && npm run dev
```

### Thumbnail saves but doesn't show on homepage cards
The registry is stale. Run:
```bash
npx tsx scripts/sync-registry.ts --write
```
Then hard-refresh the browser (`Cmd+Shift+R`).

### Article header shows flat colour, no image
The `thumbnail` prop is missing from `<NewsArticle>`. Re-mint and re-wire manually:
```bash
# Step 1 — re-register and get a fresh generated_url
curl -s -X POST "http://localhost:3000/api/v1/quick-generate" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -d '{"network":"ozone","slug":"your-slug","title":"Your Title","layout":"breaking"}'

# Step 2 — download from generated_url
curl -s "PASTE_GENERATED_URL" -o public/thumbnails/your-slug.jpg

# Step 3 — add thumbnail prop to <NewsArticle> manually in page.tsx
```

### OG_IMAGE still points to `satori-neon.vercel.app`
The article was written before the direct-Satori workflow. Re-run Steps 1–3 above, then update `OG_IMAGE` to the local path.

### Wrong domain showing as `objectwire.org`
Run the global domain fix (only needed if files pre-date June 20, 2026):
```bash
grep -r "objectwire\.org" --include="*.ts" --include="*.tsx" --include="*.json" -l \
  | grep -v "node_modules\|.next" \
  | xargs sed -i '' 's/objectwire\.org/objectivewire\.com/g'
npx tsx scripts/sync-registry.ts --write
```
