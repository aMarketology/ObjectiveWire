'use client';

import React from 'react';
import Link from 'next/link';

// =============================================================================
// SOURCES INTERLINK COMPONENT
//
// Renders a "Sources & Further Reading" block inside article content_html.
// Two sections:
//   1. External primary sources — numbered list with domain badge, blue link,
//      optional description. Styled for journalistic credibility.
//   2. Internal ObjectWire cross-links — pill-style links to related hubs
//      and cluster articles ("Also on ObjectWire").
//
// Usage in page.tsx (full content file):
//   <SourcesInterlink
//     sources={[{ number: 1, url: "https://...", title: "...", description: "..." }]}
//     internalLinks={[{ href: "/claude", label: "Claude Hub" }]}
//     accentColor="blue"
//   />
//
// Usage in content_html (static JSON — passes as self-closing tag):
//   <SourcesInterlink sources={[{"number":1,"url":"...","title":"..."}]} internalLinks={[{"href":"/claude","label":"Claude Hub"}]} accentColor="blue" />
// =============================================================================

export interface SourceItem {
  number: number;
  url: string;
  title: string;
  description?: string;
}

export interface InternalLinkItem {
  href: string;
  label: string;
  description?: string;
}

export interface SourcesInterlinkProps {
  sources?: SourceItem[];
  internalLinks?: InternalLinkItem[];
  heading?: string;
  accentColor?: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'gray';
}

const ACCENT_BORDER: Record<string, string> = {
  blue:   'border-blue-500',
  green:  'border-green-500',
  orange: 'border-orange-500',
  purple: 'border-purple-500',
  red:    'border-red-500',
  gray:   'border-gray-400',
};

const ACCENT_TEXT: Record<string, string> = {
  blue:   'text-blue-600',
  green:  'text-green-600',
  orange: 'text-orange-600',
  purple: 'text-purple-600',
  red:    'text-red-600',
  gray:   'text-gray-600',
};

const ACCENT_PILL: Record<string, string> = {
  blue:   'bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:hover:bg-blue-900/50 dark:text-blue-300',
  green:  'bg-green-50 hover:bg-green-100 text-green-700 dark:bg-green-950/40 dark:hover:bg-green-900/50 dark:text-green-300',
  orange: 'bg-orange-50 hover:bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:hover:bg-orange-900/50 dark:text-orange-300',
  purple: 'bg-purple-50 hover:bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:hover:bg-purple-900/50 dark:text-purple-300',
  red:    'bg-red-50 hover:bg-red-100 text-red-700 dark:bg-red-950/40 dark:hover:bg-red-900/50 dark:text-red-300',
  gray:   'bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-800/60 dark:hover:bg-gray-700/60 dark:text-gray-300',
};

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export function SourcesInterlink({
  sources = [],
  internalLinks = [],
  heading = 'Sources & Further Reading',
  accentColor = 'blue',
}: SourcesInterlinkProps) {
  const borderClass = ACCENT_BORDER[accentColor] ?? ACCENT_BORDER.blue;
  const textClass   = ACCENT_TEXT[accentColor]   ?? ACCENT_TEXT.blue;
  const pillClass   = ACCENT_PILL[accentColor]   ?? ACCENT_PILL.blue;

  if (!sources.length && !internalLinks.length) return null;

  return (
    <div className={`mt-12 border-t-2 ${borderClass} pt-6 not-prose`}>

      {/* Section heading */}
      <p className="text-[10px] font-black tracking-[0.18em] uppercase text-gray-400 mb-5">
        {heading}
      </p>

      {/* External sources list */}
      {sources.length > 0 && (
        <ol className="space-y-4 mb-8">
          {sources.map((src) => (
            <li key={src.number} className="flex gap-3 items-start">
              <span className={`text-xs font-mono font-bold ${textClass} mt-0.5 shrink-0 tabular-nums`}>
                [{src.number}]
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold ${textClass} hover:underline underline-offset-2 break-words`}
                  >
                    {src.title}
                  </a>
                  <span className="text-[10px] font-mono text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded shrink-0">
                    {getDomain(src.url)}
                  </span>
                </div>
                {src.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    {src.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}

      {/* Internal ObjectWire cross-links */}
      {internalLinks.length > 0 && (
        <div>
          <p className="text-[10px] font-black tracking-[0.18em] uppercase text-gray-400 mb-3">
            Also on ObjectWire
          </p>
          <div className="flex flex-wrap gap-2">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                title={link.description}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${pillClass}`}
              >
                <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
