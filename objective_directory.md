# ObjectiveWire Directory — Build Specification

> **Goal:** Recreate the Texas Web Service `/directory` system on **objectivewire.org**, re-skinned for an investigative newsroom + PI agency.
> **Source pattern:** TWS `ServicePageDirectory` (Wikipedia-style, fully static, folder = URL).
> **Date:** June 2026


Also use our pelepxity api t odo researhc when building this 

PERPLEXITY_API_KEY=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



---

## 1. Why this fits ObjectiveWire

ObjectiveWire is a 501(c)(3) investigative agency + public-interest newsroom — *"Texas Investigations. Documented & Published."* The existing TWS directory profiles **tech companies**. For ObjectiveWire we re-purpose the exact same architecture to build a **public-interest entity directory**: documented, sourced, Wikipedia-style profiles of the people, agencies, companies, and organizations the newsroom covers.

This is a strong fit because it matches OW's stated standards:

| OW Standard | How the directory honors it |
|---|---|
| "Primary sources only, no aggregation" | Every profile cites primary records (filings, dockets, public records) |
| "Documented & Published" | Each entity gets a permanent, structured public record page |
| "Corrections public and timestamped" | `dateModified` + a corrections note slot on every profile |
| Editorial independence | Profiles are factual record pages, not opinion |

**SEO upside:** entity profile pages (officials, agencies, companies, orgs) are exactly the kind of structured, sourced, evergreen pages that rank and get cited by AI search — the same GEO play, applied to Texas civic/investigative subjects.

---

## 2. What the directory *is* (concept)

A **directory of documented Texas entities**, organized by **region** and **entity type**, where each entity has a Wikipedia-style profile page with:

- An **infobox** (entity facts: type, jurisdiction, status, key people, public records links)
- **Sourced sections** (Overview, Background, Public Record, Coverage, Related Filings, Sources)
- **JSON-LD schema** (Organization / GovernmentOrganization / Person)
- **Related entries** + a "Tip the Newsroom" CTA (instead of TWS's "Submit a listing")

### Example entity categories for OW

- `government` — agencies, departments, offices, courts
- `officials` — elected & appointed public figures
- `organizations` — nonprofits, PACs, associations
- `companies` — businesses of public interest
- `cases` — documented investigations / public records subjects

---

## 3. Architecture (identical to TWS)

**100% static. No database, no CMS, no API.** The folder structure *is* the URL structure. Each page is a TypeScript file exporting a data object passed into one shared component.

```
Next.js App Router → folder path = public URL
Each profile = a typed data object + one shared component
```

Benefits: instant page loads, perfect for SEO, trivially version-controlled, no backend to secure (important for a newsroom), every change is a git commit (audit trail).

---

## 4. Folder / URL structure

```
app/directory/
  page.tsx                              → /directory                       (index)
  austin/
    page.tsx                            → /directory/austin                 (region hub — optional)
    government/
      page.tsx                          → /directory/austin/government      (listing)
      travis-county-da/
        page.tsx                        → /directory/austin/government/travis-county-da   (profile)
    officials/
      page.tsx                          → /directory/austin/officials
      [person-slug]/page.tsx
  houston/
    government/page.tsx
    ...
  greater-texas/
    organizations/page.tsx
    ...
```

> **Mirror OW's existing geography:** the site already uses `/local/austin`, `/local/houston`, `/local/greater-texas`. Keep the directory consistent: `/directory/austin`, `/directory/houston`, `/directory/greater-texas`.

---

## 5. The three page types

### Type A — Index page (`/directory/page.tsx`)
Plain page, no shared component. Two arrays rendered as a grid:
- `REGION_DIRS[]` — Austin / Houston / Greater Texas cards
- `ENTITY_TYPES[]` — Government / Officials / Organizations / Companies cards

### Type B — Listing page (`/directory/austin/government/page.tsx`)
Plain page, no shared component. One array:
- `ENTITIES: EntityCard[]` — every entity in that region+type
- If a card has a `slug`, it links **internally** to its profile; if not, it's a stub/external link.
- Rendered as a responsive card grid.

### Type C — Profile page (`/directory/austin/government/travis-county-da/page.tsx`)
Uses the shared `EntityProfile` component. The file just exports an `EntityPageData` object:

```tsx
import { EntityProfile } from '../../../../components/EntityProfile'
import type { EntityPageData } from '../../../../components/EntityProfile'

const PAGE: EntityPageData = { /* ...data... */ }

export default function Page() {
  return <EntityProfile page={PAGE} />
}
```

> **Import depth rule:** profile pages sit 4 folders deep → `../../../../components/`.
> Listing pages sit 3 deep → `../../../components/`.

---

## 6. The shared component — `EntityProfile`

This is the OW-adapted clone of TWS `ServicePageDirectory.tsx`. Same layout, renamed/retyped for investigative entities.

### Layout zones

| Zone | Contents |
|---|---|
| Breadcrumb | `Home / Directory / Austin / Government / Travis County DA` |
| Header | Tags, H1 title, summary, **"Last documented" + "Corrections"** date line |
| Left column | Numbered Table of Contents → Section blocks (each `body` is raw JSX) |
| Right sticky column | **Infobox** + Related Entries + **"Tip the Newsroom"** CTA |
| `<head>` | JSON-LD (`Organization` / `GovernmentOrganization` / `Person`) |

### Infobox fields (re-mapped from tech → investigative)

| TWS (tech) field | → | OW (investigative) field |
|---|---|---|
| `ticker` / `publicStatus` | → | `entityType` / `status` (Active / Dissolved / Under Review) |
| `revenue` / `employees` | → | `jurisdiction` / `budget` / `headcount` |
| `texasCity` / `texasOfficeType` | → | `region` / `seat` (office location) |
| `founders` / `ceo` | → | `keyPeople` (officials, directors) |
| `products` | → | `responsibilities` / `recordTypes` |
| `crunchbase` / `wikipedia` | → | `publicRecordsUrl` / `wikipedia` / `officialSite` |

---

## 7. TypeScript types (`EntityProfile.tsx`)

```typescript
export interface EntityTag {
  label: string
  color?: 'sky' | 'emerald' | 'violet' | 'amber' | 'rose' | 'fuchsia' | 'slate' | 'orange'
}

export interface EntityPerson {
  name: string
  role?: string
  link?: string        // official bio, LinkedIn, or OW profile
}

export interface EntityInfo {
  name: string
  legalName?: string
  officialSite?: string
  officialSiteDisplay?: string

  /** "County Agency" | "Elected Office" | "Nonprofit" | "Private Company" */
  entityType: string
  status: 'Active' | 'Dissolved' | 'Inactive' | 'Under Review'

  established?: string
  keyPeople?: EntityPerson[]

  /** Geographic / legal jurisdiction */
  jurisdiction?: string
  /** Region OW covers it under */
  region: 'Austin' | 'Houston' | 'Greater Texas'
  /** Physical seat / office */
  seat?: string

  headcount?: string
  budget?: string

  /** What this entity does / what records it produces */
  responsibilities?: string[]
  recordTypes?: string[]

  // Reference links
  publicRecordsUrl?: string
  wikipedia?: string
  twitter?: string
}

export interface EntitySection {
  id: string
  heading: string
  body: React.ReactNode      // raw JSX — full formatting freedom
}

export interface EntityRelated {
  label: string
  href: string
  category: string
}

export interface EntityPageData {
  slug: string               // "/directory/austin/government/travis-county-da"
  canonicalUrl: string
  datePublished: string
  dateModified?: string      // doubles as "last corrected"

  category: string           // "Government" | "Officials" | "Organizations"
  tags: EntityTag[]
  title: string
  summary: string            // 1–2 sentence factual lede

  entity: EntityInfo
  sections: EntitySection[]
  related?: EntityRelated[]

  /** Sources are mandatory for newsroom standards */
  sources: { label: string; url: string }[]
}
```

> **Key difference vs TWS:** `sources[]` is **required**, not optional. Nothing publishes without primary sources — this enforces OW's editorial standard at the type level.

---

## 8. Recommended profile sections

Every entity profile should aim for these 6–8 sections:

1. **Overview** — what the entity is, why OW documents it
2. **Background** — history / formation / mandate
3. **Structure & People** — leadership, key personnel (cards)
4. **Public Record** — filings, budgets, dockets, FOIA-able records
5. **Coverage** — OW's own reporting on this entity (internal links to `/blog` and `/local/*`)
6. **Related Entities** — connected agencies / people / orgs
7. **Sources** — numbered primary-source citations (mandatory)
8. **Corrections** — timestamped correction log (optional but on-brand)

---

## 9. Brand adaptation (TWS → OW)

Swap the brand tokens. TWS uses a **dark `#080808` + gold `#be9753`** palette. OW is an **investigative newsroom** — recommend a serious editorial scheme:

| Token | TWS value | OW recommendation |
|---|---|---|
| Background | `#080808` | keep dark `#0a0a0a` (matches OW site) |
| Accent | gold `#be9753` | **OW signal color** — pull the exact hex from the live OW theme (the red/amber "wire" accent). Use one accent consistently. |
| Status: Active | emerald | emerald (keep) |
| Status: Under Review | — | amber/rose (new) |
| CTA | "Submit a listing → /contact" | **"Tip the Newsroom → /service/tip-the-newsroom"** |
| Nav/Footer imports | TWS `Navigation`/`Footer` | OW's own `Navigation`/`Footer` components |
| Canonical domain | `texaswebservice.com` | `objectivewire.org` |

> Replace every `#be9753` in the copied component with OW's accent variable, and swap the breadcrumb root from `/directory` styling to match OW's editorial header.

---

## 10. JSON-LD schema (per entity type)

Switch the `@type` based on `entity.entityType`:

```typescript
// Government agency / office
'@type': 'GovernmentOrganization'

// Nonprofit / association
'@type': 'NGO'   // or 'Organization'

// Private company
'@type': 'Organization' / 'Corporation'

// Individual official / person
'@type': 'Person'
```

Always include: `name`, `description`, `url`, `foundingDate`/`established`, `address` (jurisdiction/seat), and `subjectOf` linking back to OW coverage articles. Wrap in `<script type="application/ld+json">` exactly as TWS does in `TechCompanyJsonLd`.

Add a `ProfilePage` wrapper with `dateModified` so corrections are machine-readable — strong signal for a newsroom.

---

## 11. Build checklist

**Phase 1 — Foundation**
- [ ] Copy `ServicePageDirectory.tsx` → `app/components/EntityProfile.tsx`
- [ ] Rename types: `TechCompanyPageData` → `EntityPageData`, etc.
- [ ] Re-map infobox fields (tech → investigative, see §6)
- [ ] Swap brand tokens (`#be9753` → OW accent), Nav/Footer imports, CTA link
- [ ] Make `sources[]` required; render a numbered Sources block
- [ ] Update JSON-LD to switch `@type` by entity type

**Phase 2 — Index + first region**
- [ ] `app/directory/page.tsx` — index with `REGION_DIRS` + `ENTITY_TYPES`
- [ ] `app/directory/austin/government/page.tsx` — first listing
- [ ] Build 2–3 flagship profiles (a county agency, an elected office, an org)

**Phase 3 — Wire it up**
- [ ] Add **Directory** to OW main nav (no dropdown) — between Blog and About
- [ ] Internal-link profiles ↔ `/blog` + `/local/*` coverage
- [ ] Add directory URLs to `sitemap.ts`
- [ ] Verify build, deploy

**Phase 4 — Scale**
- [ ] Add Houston + Greater Texas regions
- [ ] Expand entity types (officials, organizations, companies, cases)
- [ ] Backfill sources + corrections on every profile

---

## 12. Reference: TWS source files to copy from

| TWS file | Purpose | OW equivalent |
|---|---|---|
| `app/components/ServicePageDirectory.tsx` | The shared profile component | `app/components/EntityProfile.tsx` |
| `app/directory/page.tsx` | Index (card grid) | `app/directory/page.tsx` |
| `app/directory/austin/tech/page.tsx` | Listing (entity cards) | `app/directory/austin/government/page.tsx` |
| `app/directory/austin/tech/cloudflare/page.tsx` | Full profile example | first OW profile |
| `app/components/Navigation.tsx` | Nav link pattern | OW nav |

---

## 13. One-line summary

> **Copy `ServicePageDirectory.tsx`, rename it `EntityProfile.tsx`, swap tech-company fields for investigative-entity fields, make `sources[]` mandatory, re-skin gold → OW accent, and create one typed data object per documented Texas entity. Folder = URL. No backend.**
