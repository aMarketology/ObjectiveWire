import Link from 'next/link';
import type { ReactNode } from 'react';

// =============================================================================
// TYPES — exported so profile page.tsx files can import them
// =============================================================================

export interface EntityTag {
  label: string;
  color?: 'sky' | 'emerald' | 'violet' | 'amber' | 'rose' | 'fuchsia' | 'slate' | 'orange';
}

export interface EntityPerson {
  name: string;
  role?: string;
  /** official bio, LinkedIn, or OW author page */
  link?: string;
}

export interface EntityInfo {
  name: string;
  legalName?: string;
  officialSite?: string;
  officialSiteDisplay?: string;

  /** "County Agency" | "Elected Office" | "Nonprofit" | "Private Company" | "Government Consulting Firm" */
  entityType: string;
  status: 'Active' | 'Dissolved' | 'Inactive' | 'Under Review';

  established?: string;
  keyPeople?: EntityPerson[];

  /** Legal / geographic jurisdiction */
  jurisdiction?: string;
  /** OW coverage region */
  region: 'Austin' | 'Houston' | 'Greater Texas';
  /** Physical seat / office location */
  seat?: string;

  headcount?: string;
  budget?: string;

  responsibilities?: string[];
  recordTypes?: string[];

  publicRecordsUrl?: string;
  wikipedia?: string;
  twitter?: string;

  // ── Company / contractor-specific fields ──────────────────────────────────
  /** Stock ticker symbol for publicly traded companies, e.g. "TYL" */
  stockTicker?: string;
  /** Exchange name, e.g. "NYSE" or "NASDAQ" */
  stockExchange?: string;
  /** Parent or governing organization, e.g. "City of Austin" */
  parentOrganization?: string;
  /** NAICS industry classification code, e.g. "5416" */
  naicsCode?: string;
  /** Annual revenue (companies) or operating budget (agencies) */
  revenue?: string;
  /** Government contract focus areas — what public work this entity performs */
  contractFocus?: string[];
  /** Specific documented public contracts, e.g. "Travis County Odyssey — $12M (2022)" */
  knownContracts?: string[];
}

export interface EntitySection {
  id: string;
  heading: string;
  /** Raw JSX — full formatting freedom inside profile page.tsx files */
  body: ReactNode;
}

export interface EntityRelated {
  label: string;
  href: string;
  category: string;
}

export interface EntityPageData {
  slug: string;
  canonicalUrl: string;
  datePublished: string;
  dateModified?: string;

  category: string;
  tags: EntityTag[];
  title: string;
  /** 1-2 sentence factual lede — answer-first */
  summary: string;

  entity: EntityInfo;
  sections: EntitySection[];
  related?: EntityRelated[];

  /** Required — every profile must have primary-source citations */
  sources: { label: string; url: string }[];
}

// =============================================================================
// STYLE MAPS
// =============================================================================

const TAG_COLORS: Record<NonNullable<EntityTag['color']>, string> = {
  sky:     'bg-sky-950/60 text-sky-300 border-sky-700/40',
  emerald: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/40',
  violet:  'bg-violet-950/60 text-violet-300 border-violet-700/40',
  amber:   'bg-amber-950/60 text-amber-300 border-amber-700/40',
  rose:    'bg-rose-950/60 text-rose-300 border-rose-700/40',
  fuchsia: 'bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-700/40',
  slate:   'bg-slate-800/60 text-slate-300 border-slate-600/40',
  orange:  'bg-orange-950/60 text-orange-300 border-orange-700/40',
};

const STATUS_STYLES: Record<EntityInfo['status'], string> = {
  'Active':       'bg-emerald-900/50 text-emerald-300 border-emerald-600/50',
  'Dissolved':    'bg-red-900/50 text-red-300 border-red-600/50',
  'Inactive':     'bg-slate-800/50 text-slate-400 border-slate-600/50',
  'Under Review': 'bg-amber-900/50 text-amber-300 border-amber-600/50',
};

// =============================================================================
// HELPERS
// =============================================================================

const SITE_URL = 'https://www.objectivewire.org';

function regionToSlug(region: EntityInfo['region']): string {
  return region.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Resolves schema.org @type from entityType string.
 * Handles government, quasi-government utilities, consulting firms, nonprofits, persons.
 */
function resolveEntityType(entityType: string): string {
  const t = entityType.toLowerCase();
  if (
    t.includes('government') || t.includes('agency') || t.includes('department') ||
    t.includes('court') || t.includes('district') || t.includes('county') ||
    t.includes('municipal') || t.includes('elected') || t.includes('authority') ||
    t.includes('commission') || t.includes('utility') || t.includes('transit') ||
    t.includes('public authority') || t.includes('legislative') || t.includes('judicial')
  ) return 'GovernmentOrganization';
  if (
    t.includes('nonprofit') || t.includes('501') || t.includes('foundation') ||
    t.includes('association') || t.includes('pac') || t.includes('ngo') ||
    t.includes('civic') || t.includes('advocacy')
  ) return 'NGO';
  if (t.includes('person') || t.includes('individual') || t.includes('official'))
    return 'Person';
  if (
    t.includes('consulting') || t.includes('corporation') || t.includes('company') ||
    t.includes('private') || t.includes('inc') || t.includes('llc') ||
    t.includes('services firm') || t.includes('contractor')
  ) return 'Corporation';
  return 'Organization';
}

/**
 * Builds a full schema.org @graph payload for ProfilePage entities.
 * Includes: BreadcrumbList, NewsMediaOrganization (publisher), entity node, ProfilePage.
 */
function buildJsonLd(page: EntityPageData): Record<string, unknown> {
  const { entity, title, summary, canonicalUrl, datePublished, dateModified } = page;
  const regionSlug = regionToSlug(entity.region);
  const categorySlug = page.category.toLowerCase();
  const schemaType = resolveEntityType(entity.entityType);

  // ── Entity node ──────────────────────────────────────────────────────────
  const entityNode: Record<string, unknown> = {
    '@id': `${canonicalUrl}#entity`,
    '@type': schemaType,
    name: entity.name,
    legalName: entity.legalName ?? entity.name,
    description: summary,
    url: entity.officialSite ?? canonicalUrl,
    ...(entity.established ? { foundingDate: entity.established } : {}),
    ...(entity.stockTicker ? { tickerSymbol: entity.stockTicker } : {}),
    ...(entity.naicsCode ? { naics: entity.naicsCode } : {}),
    ...(entity.parentOrganization ? {
      parentOrganization: { '@type': 'Organization', name: entity.parentOrganization },
    } : {}),
    ...((entity.jurisdiction || entity.seat) ? {
      address: {
        '@type': 'PostalAddress',
        streetAddress: entity.seat ?? undefined,
        addressLocality: entity.jurisdiction?.split(',')[0] ?? entity.seat,
        addressRegion: 'TX',
        addressCountry: 'US',
      },
    } : {}),
    ...(entity.keyPeople?.length ? {
      member: entity.keyPeople.map(p => ({
        '@type': 'Person',
        name: p.name,
        jobTitle: p.role,
        ...(p.link ? { url: p.link } : {}),
      })),
    } : {}),
    ...(entity.wikipedia ? { sameAs: [entity.wikipedia] } : {}),
  };

  // ── Publisher (Objective Wire) ────────────────────────────────────────────
  const publisherNode = {
    '@id': `${SITE_URL}#organization`,
    '@type': 'NewsMediaOrganization',
    name: 'Objective Wire',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/opengraph-image`,
    },
    sameAs: ['https://twitter.com/owire'],
  };

  // ── BreadcrumbList ────────────────────────────────────────────────────────
  const breadcrumbNode = {
    '@id': `${canonicalUrl}#breadcrumb`,
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Directory', item: `${SITE_URL}/directory` },
      { '@type': 'ListItem', position: 3, name: entity.region,   item: `${SITE_URL}/directory/${regionSlug}` },
      { '@type': 'ListItem', position: 4, name: page.category,   item: `${SITE_URL}/directory/${regionSlug}/${categorySlug}` },
      { '@type': 'ListItem', position: 5, name: entity.name,     item: canonicalUrl },
    ],
  };

  // ── ProfilePage ───────────────────────────────────────────────────────────
  const profilePageNode = {
    '@id': `${canonicalUrl}#profile-page`,
    '@type': 'ProfilePage',
    name: title,
    description: summary,
    url: canonicalUrl,
    inLanguage: 'en-US',
    datePublished,
    dateModified: dateModified ?? datePublished,
    isPartOf: { '@type': 'WebSite', name: 'Objective Wire', url: SITE_URL },
    publisher: { '@id': `${SITE_URL}#organization` },
    breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
    mainEntity: { '@id': `${canonicalUrl}#entity` },
    about: { '@id': `${canonicalUrl}#entity` },
    // Sources as citations
    citation: page.sources.map(s => ({
      '@type': 'CreativeWork',
      name: s.label,
      url: s.url,
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbNode, publisherNode, entityNode, profilePageNode],
  };
}

// =============================================================================
// SUB-COMPONENTS
// =============================================================================

function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 py-2.5 border-b border-white/5 last:border-0 items-start">
      <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 w-24 shrink-0 pt-0.5 leading-none">
        {label}
      </span>
      <div className="text-sm text-gray-200 leading-snug flex-1 min-w-0">{children}</div>
    </div>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export function EntityProfile({ page }: { page: EntityPageData }) {
  const { entity, sections, related, sources, tags } = page;
  const jsonLd = buildJsonLd(page);
  const regionSlug = regionToSlug(entity.region);
  const categorySlug = page.category.toLowerCase();

  const tocItems = [
    ...sections.map((s, i) => ({ id: s.id, label: s.heading, num: i + 1 })),
    { id: 'sources', label: 'Sources', num: sections.length + 1 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* JSON-LD — full @graph schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">

        {/* ── Breadcrumb ────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-600">
            {[
              { label: 'Home',        href: '/' },
              { label: 'Directory',   href: '/directory' },
              { label: entity.region, href: `/directory/${regionSlug}` },
              { label: page.category, href: `/directory/${regionSlug}/${categorySlug}` },
              { label: entity.name,   href: null },
            ].map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-gray-700" aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#c45c2a] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-400" aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Page header ───────────────────────────────────────────────── */}
        <header className="mb-10 pb-8 border-b border-white/10">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest border ${TAG_COLORS[tag.color ?? 'slate']}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            {page.title}
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mb-6">
            {page.summary}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-600">
            <span>
              Published{' '}
              <time dateTime={page.datePublished} className="text-gray-400">
                {new Date(page.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </time>
            </span>
            {page.dateModified && (
              <span>
                Last documented{' '}
                <time dateTime={page.dateModified} className="text-gray-400">
                  {new Date(page.dateModified).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </time>
              </span>
            )}
            <Link href="/corrections" className="text-[#c45c2a] hover:text-[#d4723e] underline transition-colors">
              Report a correction
            </Link>
          </div>
        </header>

        {/* ── Body grid ─────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* Left: TOC + sections + sources */}
          <div className="flex-1 min-w-0 order-2 lg:order-1">

            {/* Table of Contents */}
            <nav aria-label="Contents" className="mb-10 p-5 rounded-xl bg-[#111111] border border-white/8">
              <p className="text-[10px] font-black uppercase tracking-[.16em] text-gray-500 mb-3">Contents</p>
              <ol className="space-y-1.5">
                {tocItems.map((item) => (
                  <li key={item.id} className="flex items-baseline gap-3">
                    <span className="text-[11px] font-mono text-gray-700 w-5 shrink-0 tabular-nums">
                      {item.num}
                    </span>
                    <a href={`#${item.id}`} className="text-sm text-gray-400 hover:text-[#c45c2a] transition-colors leading-snug">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Content sections */}
            <div className="space-y-16">
              {sections.map((section, i) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="flex items-baseline gap-3 text-lg md:text-xl font-black text-white mb-5 pb-3 border-b border-white/10">
                    <span className="text-[#c45c2a] font-mono text-sm tabular-nums shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.heading}
                  </h2>
                  <div className="text-gray-300 text-sm leading-relaxed [&_p]:mb-4 [&_p]:leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_em]:text-gray-400 [&_h3]:text-white [&_h3]:font-bold [&_h3]:text-base [&_h3]:mt-6 [&_h3]:mb-2 [&_h4]:text-gray-200 [&_h4]:font-semibold [&_h4]:text-sm [&_h4]:mt-4 [&_h4]:mb-1.5 [&_a]:text-blue-400 [&_a]:underline [&_a:hover]:text-blue-300 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_ol]:mb-4 [&_li]:text-gray-300 [&_blockquote]:border-l-2 [&_blockquote]:border-[#c45c2a] [&_blockquote]:pl-4 [&_blockquote]:text-gray-400 [&_blockquote]:italic [&_blockquote]:my-4 [&_hr]:border-white/10 [&_hr]:my-6">
                    {section.body}
                  </div>
                </section>
              ))}

              {/* Sources — mandatory, rendered last */}
              <section id="sources" className="scroll-mt-24">
                <h2 className="flex items-baseline gap-3 text-lg md:text-xl font-black text-white mb-5 pb-3 border-b border-white/10">
                  <span className="text-[#c45c2a] font-mono text-sm tabular-nums shrink-0">
                    {String(sections.length + 1).padStart(2, '0')}
                  </span>
                  Sources
                </h2>
                <ol className="space-y-4">
                  {sources.map((src, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#c45c2a] font-mono text-xs pt-0.5 shrink-0 tabular-nums">[{idx + 1}]</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 underline break-all leading-relaxed transition-colors"
                      >
                        {src.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>

          {/* Right sticky: infobox + related + CTA */}
          <aside className="w-full lg:w-80 xl:w-[22rem] shrink-0 order-1 lg:order-2">
            <div className="sticky top-6 space-y-5">

              {/* ── Infobox ──────────────────────────────────────────────── */}
              <div className="rounded-xl bg-[#111111] border border-white/10 overflow-hidden">

                {/* Header band */}
                <div className="px-5 pt-4 pb-3.5 bg-gradient-to-r from-[#c45c2a]/15 via-transparent to-transparent border-b border-white/8">
                  <p className="text-[9px] font-black uppercase tracking-[.2em] text-[#c45c2a] mb-1.5">
                    Entity Profile
                  </p>
                  <p className="text-base font-black text-white leading-tight">{entity.name}</p>
                  {entity.legalName && entity.legalName !== entity.name && (
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">{entity.legalName}</p>
                  )}
                </div>

                {/* Rows */}
                <div className="px-5 py-1">
                  <InfoRow label="Type">{entity.entityType}</InfoRow>

                  <InfoRow label="Status">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border ${STATUS_STYLES[entity.status]}`}>
                      {entity.status}
                    </span>
                  </InfoRow>

                  <InfoRow label="Region">{entity.region}, Texas</InfoRow>

                  {entity.jurisdiction && <InfoRow label="Jurisdiction">{entity.jurisdiction}</InfoRow>}
                  {entity.seat && <InfoRow label="Address">{entity.seat}</InfoRow>}
                  {entity.established && <InfoRow label="Established">{entity.established}</InfoRow>}
                  {entity.parentOrganization && <InfoRow label="Parent Org">{entity.parentOrganization}</InfoRow>}
                  {entity.headcount && <InfoRow label="Headcount">{entity.headcount}</InfoRow>}
                  {entity.budget && <InfoRow label="Budget">{entity.budget}</InfoRow>}
                  {entity.revenue && <InfoRow label="Revenue">{entity.revenue}</InfoRow>}

                  {entity.stockTicker && (
                    <InfoRow label="Ticker">
                      <span className="font-mono text-amber-300 font-bold">{entity.stockTicker}</span>
                      {entity.stockExchange && (
                        <span className="text-gray-600 text-[11px] ml-1.5">{entity.stockExchange}</span>
                      )}
                    </InfoRow>
                  )}

                  {entity.naicsCode && <InfoRow label="NAICS">{entity.naicsCode}</InfoRow>}

                  {entity.keyPeople && entity.keyPeople.length > 0 && (
                    <InfoRow label="Key People">
                      <ul className="space-y-1">
                        {entity.keyPeople.map((p) => (
                          <li key={p.name} className="leading-snug">
                            {p.link ? (
                              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                                {p.name}
                              </a>
                            ) : (
                              <span className="text-gray-200">{p.name}</span>
                            )}
                            {p.role && <span className="text-gray-500 text-[11px] ml-1">({p.role})</span>}
                          </li>
                        ))}
                      </ul>
                    </InfoRow>
                  )}

                  {entity.responsibilities && entity.responsibilities.length > 0 && (
                    <InfoRow label="Duties">
                      <ul className="space-y-0.5">
                        {entity.responsibilities.map((r) => (
                          <li key={r} className="text-xs text-gray-300">+ {r}</li>
                        ))}
                      </ul>
                    </InfoRow>
                  )}

                  {entity.contractFocus && entity.contractFocus.length > 0 && (
                    <InfoRow label="Contract Areas">
                      <ul className="space-y-0.5">
                        {entity.contractFocus.map((c) => (
                          <li key={c} className="text-xs text-gray-300">+ {c}</li>
                        ))}
                      </ul>
                    </InfoRow>
                  )}

                  {entity.knownContracts && entity.knownContracts.length > 0 && (
                    <InfoRow label="Known Contracts">
                      <ul className="space-y-1">
                        {entity.knownContracts.map((c) => (
                          <li key={c} className="text-xs text-amber-300/80 leading-snug">📄 {c}</li>
                        ))}
                      </ul>
                    </InfoRow>
                  )}

                  {entity.recordTypes && entity.recordTypes.length > 0 && (
                    <InfoRow label="Records">
                      <ul className="space-y-0.5">
                        {entity.recordTypes.map((r) => (
                          <li key={r} className="text-xs text-gray-300">+ {r}</li>
                        ))}
                      </ul>
                    </InfoRow>
                  )}
                </div>

                {/* External links */}
                {(entity.officialSite || entity.wikipedia || entity.publicRecordsUrl || entity.twitter) && (
                  <div className="px-5 py-3 border-t border-white/8 space-y-2.5">
                    {entity.officialSite && (
                      <a href={entity.officialSite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 underline transition-colors">
                        <span aria-hidden="true">🌐</span>
                        <span className="truncate">{entity.officialSiteDisplay ?? 'Official Website'}</span>
                      </a>
                    )}
                    {entity.publicRecordsUrl && (
                      <a href={entity.publicRecordsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 underline transition-colors">
                        <span aria-hidden="true">📋</span>
                        <span>Public Records Portal</span>
                      </a>
                    )}
                    {entity.wikipedia && (
                      <a href={entity.wikipedia} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 underline transition-colors">
                        <span aria-hidden="true">📖</span>
                        <span>Wikipedia</span>
                      </a>
                    )}
                    {entity.twitter && (
                      <a href={`https://twitter.com/${entity.twitter}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 underline transition-colors">
                        <span aria-hidden="true">𝕏</span>
                        <span>@{entity.twitter}</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* ── Related Entries ───────────────────────────────────────── */}
              {related && related.length > 0 && (
                <div className="rounded-xl bg-[#111111] border border-white/10 overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-white/8">
                    <p className="text-[10px] font-black uppercase tracking-[.16em] text-gray-500">Related Entries</p>
                  </div>
                  <ul className="divide-y divide-white/5">
                    {related.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="flex items-center gap-3 px-5 py-3.5 hover:bg-white/5 transition-colors group">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-200 group-hover:text-[#c45c2a] transition-colors leading-snug">
                              {r.label}
                            </p>
                            <p className="text-[10px] text-gray-600 mt-0.5 uppercase tracking-widest">{r.category}</p>
                          </div>
                          <span className="text-gray-700 group-hover:text-[#c45c2a] transition-colors shrink-0">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── Tip the Newsroom CTA ──────────────────────────────────── */}
              <div className="rounded-xl border border-[#c45c2a]/25 bg-gradient-to-br from-[#c45c2a]/10 to-[#8b2000]/10 p-5">
                <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#c45c2a] mb-2">Know Something?</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Have documents, records, or a tip about this entity? Objective Wire investigates with full source protection under Texas Shield Law.
                </p>
                <Link
                  href="/service/tip-the-newsroom"
                  className="block w-full text-center bg-[#c45c2a] hover:bg-[#d4723e] text-white text-xs font-black uppercase tracking-widest py-3 px-4 rounded-lg transition-colors"
                >
                  Tip the Newsroom →
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
