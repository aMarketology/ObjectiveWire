/**
 * QuickArticle — Display Component
 *
 * Lightweight single-column article layout for short-form news briefs.
 * Based on JackArticle but stripped of sidebar, TOC, and timeline.
 *
 * Use for: breaking news capsules, local briefs, quick-hit stories
 * NOT for: long-form investigations (use JackArticle), evergreen guides (use ArticlePage)
 */

import React from 'react';
import Link from 'next/link';
import { LibraryConnectedArticles } from '@/components/discovery/LibraryConnectedArticles';
import RelatedArticles from '@/components/discovery/RelatedArticles';
import { HubBacklink } from '@/components/HubBacklink';

// ─── Accent colour map (matches JackArticle palette) ─────────────────────────
const ACCENT_MAP: Record<string, { border: string; text: string; badge: string }> = {
  blue:   { border: '#2563eb', text: '#2563eb',  badge: '#eff6ff' },
  gray:   { border: '#4b5563', text: '#4b5563',  badge: '#f9fafb' },
  green:  { border: '#059669', text: '#059669',  badge: '#f0fdf4' },
  orange: { border: '#ea580c', text: '#ea580c',  badge: '#fff7ed' },
  red:    { border: '#dc2626', text: '#dc2626',  badge: '#fef2f2' },
  purple: { border: '#7c3aed', text: '#7c3aed',  badge: '#faf5ff' },
  black:  { border: '#111827', text: '#111827',  badge: '#f3f4f6' },
};

function resolveAccent(color: string | undefined): { border: string; text: string; badge: string } {
  if (!color) return ACCENT_MAP.blue;
  // Accept named colours (e.g. "blue") or hex values (e.g. "#2563eb")
  if (ACCENT_MAP[color]) return ACCENT_MAP[color];
  return { border: color, text: color, badge: '#eff6ff' };
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface QuickSource {
  number?: number;
  title: string;
  url: string;
  publisher?: string;
}

export interface QuickAuthor {
  name: string;
  slug?: string;
}

export interface QuickHeroImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface QuickBreadcrumb {
  href: string;
  label: string;
}

export interface QuickRelated {
  href?: string;
  url?: string;
  title: string;
  category?: string;
}

export interface QuickArticleProps {
  title: string;
  subtitle?: string;
  department?: string;
  category: string;
  accentColor?: string;
  publishDate: string;
  readTime?: string;
  author?: QuickAuthor;
  heroImage?: QuickHeroImage;
  breadcrumbs?: QuickBreadcrumb[];
  sources?: QuickSource[];
  relatedArticles?: QuickRelated[];
  tags?: string[];
  children: React.ReactNode;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuickArticle({
  title,
  subtitle,
  department,
  category,
  accentColor,
  publishDate,
  readTime,
  author,
  heroImage,
  breadcrumbs,
  sources,
  relatedArticles,
  tags,
  children,
}: QuickArticleProps) {
  const accent = resolveAccent(accentColor);
  const currentSlug = breadcrumbs?.[breadcrumbs.length - 1]?.href ?? '';

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-10">
      <article className="w-full min-w-0">
      {/* ── Breadcrumbs ───────────────────────────────────────────────────── */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-5"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="select-none">/</span>}
              <Link
                href={crumb.href}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 underline"
              >
                {crumb.label}
              </Link>
            </span>
          ))}
        </nav>
      )}

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header
        className="mb-7 pb-7 border-b-2"
        style={{ borderColor: accent.border }}
      >
        {/* Department / category label */}
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: accent.text }}
        >
          {department ?? category}
        </p>

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{subtitle}</p>
        )}

        {/* Byline row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
          {author && (
            <span>
              By{' '}
              {author.slug ? (
                <Link
                  href={`/authors/${author.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 underline font-medium"
                >
                  {author.name}
                </Link>
              ) : (
                <span className="font-medium text-gray-700 dark:text-gray-200">{author.name}</span>
              )}
            </span>
          )}
          <time>{publishDate}</time>
          {readTime && <span>{readTime}</span>}
          <span
            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold"
            style={{ color: accent.text, backgroundColor: accent.badge }}
          >
            {category}
          </span>
        </div>
      </header>

      {/* ── Hero / Thumbnail Showcase (Full 1200x630 uncropped) ───────────── */}
      {heroImage && (
        <figure className="mb-9 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 shadow-lg">
          <div className="aspect-[1200/630] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {heroImage.caption && (
            <figcaption className="px-4 py-2.5 text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800">
              {heroImage.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:underline prose-a:hover:text-blue-800">
        {children}
      </div>

      {/* ── Sources ───────────────────────────────────────────────────────── */}
      {sources && sources.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
            Sources
          </h2>
          <ol className="space-y-2">
            {sources.map((source, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs flex items-center justify-center font-bold mt-0.5">
                  {source.number ?? i + 1}
                </span>
                <span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {source.title}
                  </a>
                  {source.publisher && (
                    <span className="text-gray-400 ml-2">| {source.publisher}</span>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ── Tags ──────────────────────────────────────────────────────────── */}
      {tags && tags.length > 0 && (
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── Connected Library Articles (Wikipedia-style Knowledge Graph) ───── */}
      <LibraryConnectedArticles
        currentSlug={currentSlug}
        currentTitle={title}
        category={category}
        tags={tags}
        manualItems={relatedArticles}
        limit={6}
      />
    </article>

      {/* ── Right rail — sticky Related Articles + Hub backlink ───────────── */}
      <aside>
        <div className="sticky top-6">
          <HubBacklink category={category} />
          <RelatedArticles
            currentSlug={currentSlug}
            category={category}
            tags={tags}
          />
        </div>
      </aside>
      </div>
    </div>
    </main>
  );
}