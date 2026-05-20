'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProfilePageSchema } from '@/components/articles/ProfilePageSchema';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import ArticleFooter from '@/components/articles/ArticleFooter';
import ArticleViewTracker from '@/components/articles/ArticleViewTracker';

// =============================================================================
// YOUTUBE CREATOR PAGE
// Combined layout: CreatorArticle gradient hero + ArticlePage TOC/anchored sections
//
// Layout: Hero banner + 2/3 article body + 1/3 sticky sidebar
//
// Key additions over CreatorArticle:
//   - tableOfContents prop → renders TOC block at top of article body
//   - YTSection has an `id` prop → scroll-mt-20 for TOC anchor links
//   - Sidebar supports `linkSections` for grouped linked channels/socials
//
// Exports:
//   YoutubeCreatorPage     — Main wrapper (schema + hero + grid + sidebar)
//   YTSection              — Section block with id anchor + bold heading
//   YTStat                 — Large stat highlight card
//   YTTable                — Data table
//   YTCallout              — Highlighted callout box
//   YTQuote                — Pull quote with attribution
//   YTTableOfContents      — In-article TOC nav (rendered automatically if tableOfContents prop set)
// =============================================================================

// =============================================================================
// TYPES
// =============================================================================

export type YTBadgeStyle = 'default' | 'achievement' | 'secondary';

export interface YTBadge {
  label: string;
  style?: YTBadgeStyle;
}

export interface YTInfoRow {
  label: string;
  value: string | React.ReactNode;
  href?: string;
}

export interface YTTimelineItem {
  year: string;
  event: string;
}

export interface YTTableColumn {
  key: string;
  header: string;
  render?: (value: string) => React.ReactNode;
}

export interface YTTableRow {
  [key: string]: string;
}

export interface YTCalloutItem {
  label: string;
  detail: string;
}

export interface YTCTAButton {
  href: string;
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export interface YTRelatedLink {
  href: string;
  label: string;
}

export type YTCalloutColor = 'yellow' | 'blue' | 'green' | 'red' | 'purple';

export interface YTSidebarCallout {
  title: string;
  body: string | React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  color?: YTCalloutColor;
}

/** Grouped link section for the sidebar (e.g. "Official Channels", "Social Media") */
export interface YTSidebarLinkSection {
  heading: string;
  links: Array<{ href: string; label: string; external?: boolean; note?: string }>;
}

export interface YTSchema {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  authorUrl?: string;
  articleUrl: string;
  imageUrl?: string;
  section: string;
  keywords: string[];
}

export interface YTHero {
  image: { src: string; alt: string };
  gradient?: string;
  badges: YTBadge[];
  name: string;
  subtitle: string;
  description: string;
  ctaButtons?: YTCTAButton[];
}

export interface YTSidebar {
  infobox: {
    image: { src: string; alt: string };
    name: string;
    subtitle: string;
    rows: YTInfoRow[];
  };
  /** Grouped link sections below the infobox rows (Official Channels, Social, etc.) */
  linkSections?: YTSidebarLinkSection[];
  callout?: YTSidebarCallout;
  timeline?: YTTimelineItem[];
  relatedLinks?: YTRelatedLink[];
  meta: {
    publishedDate: string;
    updatedDate?: string;
    author: string;
    category: string;
  };
}

export interface YTTOCItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

export interface YoutubeCreatorPageProps {
  schema: YTSchema;
  breadcrumbs: Array<{ name: string; item: string }>;
  hero: YTHero;
  sidebar: YTSidebar;
  tableOfContents?: YTTOCItem[];
  tags?: string[];
  relatedCreators?: Array<{
    name: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
  }>;
  children: React.ReactNode;
}

// =============================================================================
// STYLE MAPS
// =============================================================================

const badgeStyleMap: Record<YTBadgeStyle, React.CSSProperties> = {
  default: {
    background: 'rgba(255,255,255,0.15)',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: 800,
    padding: '3px 12px',
    borderRadius: 999,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  secondary: {
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: 600,
    padding: '3px 12px',
    borderRadius: 999,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  achievement: {
    background: '#dc2626',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: 800,
    padding: '3px 12px',
    borderRadius: 999,
    letterSpacing: '0.06em',
  },
};

function ctaStyle(variant: YTCTAButton['variant'] = 'primary'): React.CSSProperties {
  if (variant === 'primary') {
    return { background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' };
  }
  if (variant === 'secondary') {
    return { background: '#1e3a5f', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' };
  }
  return { background: '#dc2626', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' };
}

const calloutColorMap: Record<YTCalloutColor, { wrapper: string; cta: string }> = {
  yellow: { wrapper: 'bg-yellow-50 border-yellow-300', cta: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' },
  blue:   { wrapper: 'bg-blue-50 border-blue-300',     cta: 'bg-blue-600 hover:bg-blue-700 text-white' },
  green:  { wrapper: 'bg-green-50 border-green-300',   cta: 'bg-green-600 hover:bg-green-700 text-white' },
  red:    { wrapper: 'bg-red-50 border-red-300',       cta: 'bg-red-600 hover:bg-red-700 text-white' },
  purple: { wrapper: 'bg-purple-50 border-purple-300', cta: 'bg-purple-600 hover:bg-purple-700 text-white' },
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function YoutubeCreatorPage({
  schema,
  breadcrumbs,
  hero,
  sidebar,
  tableOfContents,
  tags,
  relatedCreators,
  children,
}: YoutubeCreatorPageProps) {
  const gradient =
    hero.gradient ??
    'linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 45%, #dc2626 100%)';

  const articleSlug = schema.articleUrl.replace('https://www.objectwire.org', '');

  return (
    <>
      <ProfilePageSchema
        personName={hero.name}
        pageTitle={schema.title}
        description={schema.description}
        pageUrl={schema.articleUrl}
        imageUrl={schema.imageUrl}
        publishedTime={schema.publishedTime}
        modifiedTime={schema.modifiedTime}
        sameAs={sidebar.infobox.rows
          .map((r) => (typeof r.href === 'string' ? r.href : ''))
          .filter(Boolean)}
        keywords={schema.keywords}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* ── Breadcrumb ──────────────────────────────────────────── */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────── */}
        <header style={{ background: gradient }}>

          {/* Mobile-only full-width portrait */}
          <div className="relative w-full sm:hidden" style={{ aspectRatio: '4/5', maxHeight: '75vw' }}>
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to bottom, transparent 40%, ${gradient.match(/#[0-9a-f]{6}/i)?.[0] ?? '#0f0f0f'} 100%)`,
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto px-4 py-8 sm:py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

              {/* Thumbnail */}
              <div
                className="hidden sm:block relative w-36 h-36 lg:w-64 lg:h-64 rounded-xl overflow-hidden border-4 shrink-0"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 256px, 144px"
                  priority
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {hero.badges.map((badge, i) => (
                    <span key={i} style={badgeStyleMap[badge.style ?? 'default']}>
                      {badge.label}
                    </span>
                  ))}
                </div>

                <h1
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {hero.name}
                  <span
                    style={{
                      display: 'block',
                      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.8)',
                      marginTop: '0.4rem',
                    }}
                  >
                    {hero.subtitle}
                  </span>
                </h1>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    maxWidth: '600px',
                    marginBottom: '1.2rem',
                  }}
                >
                  {hero.description}
                </p>

                {hero.ctaButtons && hero.ctaButtons.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {hero.ctaButtons.map((btn, i) => (
                      <a
                        key={i}
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={ctaStyle(btn.variant)}
                      >
                        {btn.icon && <span>{btn.icon}</span>}
                        {btn.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ── Byline ──────────────────────────────────────────────── */}
        <div className="border-b border-gray-100 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-semibold text-gray-800">By {sidebar.meta.author}</span>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <time dateTime={schema.publishedTime} className="text-gray-500">
              Published {sidebar.meta.publishedDate}
            </time>
            {sidebar.meta.updatedDate && (
              <>
                <span className="text-gray-300" aria-hidden="true">·</span>
                <time dateTime={schema.modifiedTime ?? schema.publishedTime} className="text-gray-500">
                  Updated {sidebar.meta.updatedDate}
                </time>
              </>
            )}
            <span className="text-gray-300" aria-hidden="true">|</span>
            <span className="text-gray-500">{sidebar.meta.category}</span>
          </div>
        </div>

        {/* ── Main Content Grid ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Article Body ──────────────────────────────────── */}
            <article className="lg:col-span-2 space-y-12">
              <ArticleViewTracker
                slug={articleSlug}
                title={schema.title}
                url={schema.articleUrl}
                image={schema.imageUrl}
                category={schema.section}
              />

              {/* ── Table of Contents ─────────────────────────── */}
              {tableOfContents && tableOfContents.length > 0 && (
                <nav className="bg-gray-50 border border-gray-200 rounded-xl p-5 not-prose">
                  <h2 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                    Contents
                  </h2>
                  <ol className="space-y-1.5 text-sm">
                    {tableOfContents.map((item, idx) => (
                      <li key={item.id} className={item.level === 2 ? 'ml-4' : ''}>
                        <a
                          href={`#${item.id}`}
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          {idx + 1}. {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {children}

              <ArticleFooter
                slug={articleSlug}
                title={schema.title}
                url={schema.articleUrl}
                image={schema.imageUrl}
                category={schema.section}
                tags={tags ?? schema.keywords.slice(0, 8)}
                author={{ name: sidebar.meta.author }}
              />
            </article>

            {/* ── Sidebar ───────────────────────────────────────── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="relative w-full h-56 lg:h-[448px]">
                    <Image
                      src={sidebar.infobox.image.src}
                      alt={sidebar.infobox.image.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 400px, 300px"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, transparent 50%)',
                      }}
                    />
                    <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                      <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>
                        {sidebar.infobox.name}
                      </h2>
                      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>
                        {sidebar.infobox.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Key/value rows */}
                  <div className="divide-y divide-gray-100 text-sm">
                    {sidebar.infobox.rows.map((row, i) => (
                      <div key={i} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-500 w-24 shrink-0 text-xs font-semibold">{row.label}</span>
                        {row.href ? (
                          <a
                            href={row.href}
                            target={row.href.startsWith('http') ? '_blank' : undefined}
                            rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium text-blue-600 hover:text-blue-800 underline text-xs break-all"
                          >
                            {row.value as React.ReactNode}
                          </a>
                        ) : (
                          <span className="font-medium text-gray-800 text-xs">{row.value as React.ReactNode}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link sections (Official Channels, Social, etc.) */}
                {sidebar.linkSections && sidebar.linkSections.map((section, si) => (
                  <div key={si} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                      <h3 className="font-bold text-gray-600 text-xs uppercase tracking-wider">{section.heading}</h3>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      {section.links.map((link, li) => (
                        <li key={li} className="px-4 py-2.5">
                          {link.external !== false ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline text-xs font-medium"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link href={link.href} className="text-blue-600 hover:text-blue-800 underline text-xs font-medium">
                              {link.label}
                            </Link>
                          )}
                          {link.note && (
                            <span className="text-gray-400 text-xs ml-1">({link.note})</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Callout */}
                {sidebar.callout && (() => {
                  const c = sidebar.callout!;
                  const colors = calloutColorMap[c.color ?? 'red'];
                  return (
                    <div className={`border-2 rounded-xl p-5 ${colors.wrapper}`}>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                        {c.title}
                      </h3>
                      <div className="text-xs text-gray-600 mb-3 leading-relaxed">
                        {c.body}
                      </div>
                      {c.ctaLabel && c.ctaHref && (
                        <Link
                          href={c.ctaHref}
                          className={`block text-center font-bold text-xs py-2.5 px-4 rounded-lg transition-colors ${colors.cta}`}
                        >
                          {c.ctaLabel}
                        </Link>
                      )}
                    </div>
                  );
                })()}

                {/* Timeline */}
                {sidebar.timeline && sidebar.timeline.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                      Career Timeline
                    </h3>
                    <div className="space-y-3">
                      {sidebar.timeline.map((t, i) => (
                        <div key={i} className="flex gap-3 text-xs">
                          <span className="text-red-600 font-bold w-10 shrink-0">{t.year}</span>
                          <span className="text-gray-600 leading-relaxed">{t.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Coverage */}
                {sidebar.relatedLinks && sidebar.relatedLinks.length > 0 && (
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                      Related Coverage
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {sidebar.relatedLinks.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href} className="text-blue-600 hover:underline">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Article Meta */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                    <h3 className="font-bold text-gray-600 text-xs uppercase tracking-wider">Article Info</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      { label: 'Published', value: sidebar.meta.publishedDate },
                      ...(sidebar.meta.updatedDate ? [{ label: 'Updated', value: sidebar.meta.updatedDate }] : []),
                      { label: 'Author', value: sidebar.meta.author },
                      { label: 'Category', value: sidebar.meta.category },
                    ].map((item, i) => (
                      <div key={i} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-400 w-20 shrink-0 text-xs font-semibold">{item.label}</span>
                        <span className="font-medium text-gray-700 text-xs">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Creator Profiles */}
                {relatedCreators && relatedCreators.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                      <h3 className="font-bold text-gray-600 text-xs uppercase tracking-wider">More YouTube Profiles</h3>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      {relatedCreators.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                          >
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
                              <Image
                                src={c.imageSrc}
                                alt={c.imageAlt}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-gray-900 truncate group-hover:text-blue-600">{c.name}</p>
                              <p className="text-xs text-gray-400 truncate">{c.subtitle}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

// =============================================================================
// YT SECTION — anchored, scrollable heading block
// =============================================================================

export interface YTSectionProps {
  /** URL-safe anchor id, used by TableOfContents links */
  id: string;
  heading: string;
  children: React.ReactNode;
  prose?: boolean;
}

export function YTSection({ id, heading, children, prose = true }: YTSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
        {heading}
      </h2>
      {prose ? (
        <div className="prose prose-lg max-w-none">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

// =============================================================================
// YT STAT
// =============================================================================

export interface YTStatProps {
  value: string;
  label: string;
  sub?: string;
  color?: 'blue' | 'yellow' | 'green' | 'red' | 'purple' | 'gray';
}

const ytStatColors = {
  blue:   'bg-blue-600 text-white',
  yellow: 'bg-yellow-400 text-gray-900',
  green:  'bg-green-600 text-white',
  red:    'bg-red-600 text-white',
  purple: 'bg-purple-600 text-white',
  gray:   'bg-gray-900 text-white',
};

export function YTStat({ value, label, sub, color = 'red' }: YTStatProps) {
  return (
    <div className={`not-prose inline-flex flex-col items-center justify-center rounded-xl px-6 py-4 text-center ${ytStatColors[color]}`}>
      <span className="text-3xl font-black leading-none">{value}</span>
      <span className="text-sm font-semibold mt-1 opacity-90">{label}</span>
      {sub && <span className="text-xs opacity-70 mt-0.5">{sub}</span>}
    </div>
  );
}

// =============================================================================
// YT CALLOUT BOX
// =============================================================================

export interface YTCalloutBoxProps {
  heading: string;
  items: YTCalloutItem[];
  color?: 'blue' | 'yellow' | 'green' | 'red' | 'purple';
}

const ytCalloutColors = {
  blue:   'bg-blue-50 border-blue-200',
  yellow: 'bg-yellow-50 border-yellow-200',
  green:  'bg-green-50 border-green-200',
  red:    'bg-red-50 border-red-200',
  purple: 'bg-purple-50 border-purple-200',
};

const ytCalloutArrows = {
  blue:   'text-blue-600',
  yellow: 'text-yellow-600',
  green:  'text-green-600',
  red:    'text-red-600',
  purple: 'text-purple-600',
};

export function YTCallout({ heading, items, color = 'red' }: YTCalloutBoxProps) {
  return (
    <div className={`not-prose mt-6 border rounded-xl p-5 ${ytCalloutColors[color]}`}>
      <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">{heading}</h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 text-sm">
            <span className={`font-bold shrink-0 ${ytCalloutArrows[color]}`}>→</span>
            <div>
              <span className="font-semibold text-gray-900">{item.label}: </span>
              <span className="text-gray-600">{item.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// YT QUOTE
// =============================================================================

export interface YTQuoteProps {
  quote: string;
  attribution?: string;
  role?: string;
}

export function YTQuote({ quote, attribution, role }: YTQuoteProps) {
  return (
    <blockquote className="not-prose my-8 pl-5 border-l-4 border-red-600">
      <p className="text-xl font-semibold text-gray-900 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <footer className="mt-3 text-sm text-gray-500">
          , <span className="font-semibold text-gray-700">{attribution}</span>
          {role && <span className="text-gray-400">, {role}</span>}
        </footer>
      )}
    </blockquote>
  );
}

// =============================================================================
// YT TABLE
// =============================================================================

export interface YTTableProps {
  columns: YTTableColumn[];
  rows: YTTableRow[];
  highlightKey?: string;
  highlightValue?: string;
}

export function YTTable({ columns, rows, highlightKey, highlightValue }: YTTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: '#dc2626', color: '#fff' }}>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left font-semibold">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => {
            const isHighlighted =
              highlightKey && highlightValue
                ? row[highlightKey] === highlightValue
                : false;
            return (
              <tr key={i} className={isHighlighted ? 'bg-red-50' : 'even:bg-gray-50'}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-2.5 ${isHighlighted ? 'font-bold text-gray-900' : 'text-gray-700'}`}
                  >
                    {col.render ? col.render(row[col.key] ?? '') : (row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default YoutubeCreatorPage;
