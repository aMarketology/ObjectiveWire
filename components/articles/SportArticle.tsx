import React from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import type { NewsArticleProps } from '@/components/articles/NewsArticle';

// =============================================================================
// SPORT ARTICLE — Specialized layout for sports analytics and betting content
//
// Built on top of NewsArticle. Provides sports-specific sub-components:
//   - SportArticle        → main wrapper (passes all NewsArticle props through)
//   - SportCallout        → executive decoder / summary box
//   - SportStoryline      → numbered matchup storyline section
//   - SportOdds           → colored +XXX / -XXX odds badge
//   - SportStat           → metric + value badge (HR/9, BlastContact%, etc.)
//   - SportStatRow        → horizontal row of 2-4 SportStat badges
//   - SportMatchup        → pitcher vs batter card
//   - SportPropTable      → analysis table for prop market targets
//   - SportImplication    → long-form implications / context section
// =============================================================================

// =============================================================================
// SPORT CALLOUT — Executive decoder / analysis intro box
// =============================================================================

export interface SportCalloutProps {
  heading: string;
  children: React.ReactNode;
  /** Accent color. Defaults to 'indigo' (sports). */
  color?: 'indigo' | 'red' | 'green' | 'blue' | 'orange' | 'purple';
  icon?: string;
}

const calloutBg: Record<string, string> = {
  indigo: 'bg-indigo-50 border-indigo-600 dark:bg-indigo-950/40 dark:border-indigo-400',
  red:    'bg-red-50 border-red-600 dark:bg-red-950/40 dark:border-red-400',
  green:  'bg-green-50 border-green-600 dark:bg-green-950/40 dark:border-green-400',
  blue:   'bg-blue-50 border-blue-600 dark:bg-blue-950/40 dark:border-blue-400',
  orange: 'bg-orange-50 border-orange-500 dark:bg-orange-950/40 dark:border-orange-400',
  purple: 'bg-purple-50 border-purple-600 dark:bg-purple-950/40 dark:border-purple-400',
};

const calloutLabel: Record<string, string> = {
  indigo: 'text-indigo-700 dark:text-indigo-300',
  red:    'text-red-700 dark:text-red-300',
  green:  'text-green-700 dark:text-green-300',
  blue:   'text-blue-700 dark:text-blue-300',
  orange: 'text-orange-700 dark:text-orange-300',
  purple: 'text-purple-700 dark:text-purple-300',
};

export function SportCallout({ heading, children, color = 'indigo', icon = '📊' }: SportCalloutProps) {
  return (
    <div className={`my-8 rounded-xl border-l-4 p-5 ${calloutBg[color]}`}>
      <div className={`flex items-center gap-2 mb-3 text-sm font-bold uppercase tracking-widest ${calloutLabel[color]}`}>
        <span>{icon}</span>
        <span>{heading}</span>
      </div>
      <div className="text-gray-800 dark:text-gray-200 text-base leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

// =============================================================================
// SPORT ODDS — Colored +XXX / -XXX odds badge
// =============================================================================

export interface SportOddsProps {
  value: string; // e.g. "+475" or "-110"
  label?: string; // optional label beneath the number
  size?: 'sm' | 'md' | 'lg';
}

export function SportOdds({ value, label, size = 'md' }: SportOddsProps) {
  const isPositive = value.startsWith('+');
  const colorClass = isPositive
    ? 'bg-green-600 text-white'
    : 'bg-red-600 text-white';

  const sizeClass = {
    sm: 'text-sm px-2.5 py-1',
    md: 'text-base px-3.5 py-1.5',
    lg: 'text-xl px-4 py-2 font-black',
  }[size];

  return (
    <span className="inline-flex flex-col items-center gap-0.5">
      <span className={`inline-flex items-center rounded font-bold tabular-nums ${colorClass} ${sizeClass}`}>
        {value}
      </span>
      {label && <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>}
    </span>
  );
}

// =============================================================================
// SPORT STAT — Metric + value badge for analytics data
// =============================================================================

export interface SportStatProps {
  metric: string; // e.g. "HR/9"
  value: string;  // e.g. "0.86"
  subtext?: string; // e.g. "career avg: 1.30"
  trend?: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'red' | 'green' | 'orange' | 'gray' | 'indigo';
}

const statBorder: Record<string, string> = {
  blue:   'border-blue-300 dark:border-blue-700',
  red:    'border-red-300 dark:border-red-700',
  green:  'border-green-300 dark:border-green-700',
  orange: 'border-orange-300 dark:border-orange-700',
  gray:   'border-gray-300 dark:border-gray-700',
  indigo: 'border-indigo-300 dark:border-indigo-700',
};

const statValue: Record<string, string> = {
  blue:   'text-blue-700 dark:text-blue-300',
  red:    'text-red-700 dark:text-red-300',
  green:  'text-green-700 dark:text-green-300',
  orange: 'text-orange-700 dark:text-orange-300',
  gray:   'text-gray-800 dark:text-gray-200',
  indigo: 'text-indigo-700 dark:text-indigo-300',
};

const trendIcon = { up: '↑', down: '↓', neutral: '→' };
const trendColor = {
  up: 'text-green-600 dark:text-green-400',
  down: 'text-red-600 dark:text-red-400',
  neutral: 'text-gray-500',
};

export function SportStat({ metric, value, subtext, trend, color = 'blue' }: SportStatProps) {
  return (
    <div className={`inline-flex flex-col items-center rounded-lg border p-3 min-w-[90px] ${statBorder[color]}`}>
      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-1">{metric}</span>
      <span className={`text-2xl font-black tabular-nums leading-none ${statValue[color]}`}>
        {value}
        {trend && (
          <span className={`text-sm ml-0.5 ${trendColor[trend]}`}>{trendIcon[trend]}</span>
        )}
      </span>
      {subtext && <span className="text-xs text-gray-400 dark:text-gray-500 mt-1 text-center">{subtext}</span>}
    </div>
  );
}

// =============================================================================
// SPORT STAT ROW — Horizontal row of 2-4 SportStat badges
// =============================================================================

export function SportStatRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-3 my-5">
      {children}
    </div>
  );
}

// =============================================================================
// SPORT MATCHUP — Pitcher vs Batter card
// =============================================================================

export interface SportMatchupProps {
  batter: {
    name: string;
    team: string;
    position?: string;
    odds?: string;
  };
  pitcher: {
    name: string;
    team: string;
    throws?: 'R' | 'L' | 'S';
    stat?: string;
    statLabel?: string;
  };
  venue?: string;
  venueNote?: string;
}

export function SportMatchup({ batter, pitcher, venue, venueNote }: SportMatchupProps) {
  return (
    <div className="my-6 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Matchup
        {venue && <span className="ml-2 text-gray-400">@ {venue}</span>}
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-5 py-4">
        {/* Batter */}
        <div className="text-left">
          <p className="font-black text-gray-900 dark:text-gray-100 text-lg leading-tight">{batter.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{batter.team}{batter.position ? ` · ${batter.position}` : ''}</p>
          {batter.odds && (
            <SportOdds value={batter.odds} size="lg" />
          )}
        </div>
        {/* VS */}
        <div className="text-center font-black text-gray-300 dark:text-gray-600 text-xl select-none px-2">
          vs
        </div>
        {/* Pitcher */}
        <div className="text-right">
          <p className="font-black text-gray-900 dark:text-gray-100 text-lg leading-tight">{pitcher.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{pitcher.team}{pitcher.throws ? ` · ${pitcher.throws}HP` : ''}</p>
          {pitcher.stat && (
            <p className="text-sm font-bold text-red-600 dark:text-red-400 mt-1">
              {pitcher.statLabel && <span className="font-normal text-gray-500 dark:text-gray-400 mr-1">{pitcher.statLabel}:</span>}
              {pitcher.stat}
            </p>
          )}
        </div>
      </div>
      {venueNote && (
        <div className="bg-amber-50 dark:bg-amber-950/30 border-t border-amber-200 dark:border-amber-800 px-4 py-2 text-xs text-amber-800 dark:text-amber-300 font-medium">
          Stadium note: {venueNote}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// SPORT STORYLINE — Numbered matchup analysis section
// =============================================================================

export interface SportStorylineProps {
  number: number;
  heading: string;
  children: React.ReactNode;
  /** Accent color theme. Defaults to 'indigo'. */
  color?: 'indigo' | 'red' | 'green' | 'blue' | 'orange';
}

const storylineAccent: Record<string, { badge: string; border: string; num: string }> = {
  indigo: { badge: 'bg-indigo-600 text-white', border: 'border-indigo-200 dark:border-indigo-800', num: 'text-indigo-600 dark:text-indigo-400' },
  red:    { badge: 'bg-red-600 text-white',    border: 'border-red-200 dark:border-red-800',      num: 'text-red-600 dark:text-red-400' },
  green:  { badge: 'bg-green-600 text-white',  border: 'border-green-200 dark:border-green-800',  num: 'text-green-600 dark:text-green-400' },
  blue:   { badge: 'bg-blue-600 text-white',   border: 'border-blue-200 dark:border-blue-800',    num: 'text-blue-600 dark:text-blue-400' },
  orange: { badge: 'bg-orange-500 text-white', border: 'border-orange-200 dark:border-orange-800',num: 'text-orange-500 dark:text-orange-400' },
};

export function SportStoryline({ number, heading, children, color = 'indigo' }: SportStorylineProps) {
  const accent = storylineAccent[color];
  return (
    <section className={`my-10 rounded-xl border ${accent.border} overflow-hidden`} id={`storyline-${number}`}>
      <div className="flex items-center gap-3 px-5 py-4 border-b border-inherit bg-gray-50 dark:bg-gray-900">
        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-black shrink-0 ${accent.badge}`}>
          {number}
        </span>
        <h2 className={`font-black text-xl tracking-tight text-gray-900 dark:text-gray-100`}>
          {heading}
        </h2>
      </div>
      <div className="px-5 py-5 [&_p]:text-[17px] [&_p]:leading-relaxed [&_p]:text-gray-800 dark:[&_p]:text-gray-200 [&_p]:mb-4 [&_p:last-child]:mb-0">
        {children}
      </div>
    </section>
  );
}

// =============================================================================
// SPORT PROP TABLE — Analysis table for prop market targets
// =============================================================================

export interface SportPropTableRow {
  player: string;
  team: string;
  odds: string;
  vulnerability: string;
  /** Optional extra note column */
  note?: string;
}

export interface SportPropTableProps {
  caption?: string;
  rows: SportPropTableRow[];
  /** Accent color. Defaults to 'indigo'. */
  color?: 'indigo' | 'red' | 'green' | 'blue';
}

const tableHeader: Record<string, string> = {
  indigo: 'bg-indigo-700 text-white',
  red:    'bg-red-700 text-white',
  green:  'bg-green-700 text-white',
  blue:   'bg-blue-700 text-white',
};

export function SportPropTable({ caption, rows, color = 'indigo' }: SportPropTableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      {caption && (
        <div className={`px-4 py-3 text-sm font-bold uppercase tracking-widest ${tableHeader[color]}`}>
          {caption}
        </div>
      )}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs uppercase tracking-wider font-bold">
            <th className="text-left px-4 py-3">Player</th>
            <th className="text-left px-4 py-3">Team</th>
            <th className="text-center px-4 py-3">Odds</th>
            <th className="text-left px-4 py-3">Pitcher Vulnerability</th>
            {rows.some((r) => r.note) && <th className="text-left px-4 py-3">Note</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
            >
              <td className="px-4 py-3 font-bold text-gray-900 dark:text-gray-100">{row.player}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.team}</td>
              <td className="px-4 py-3 text-center">
                <SportOdds value={row.odds} size="sm" />
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.vulnerability}</td>
              {rows.some((r) => r.note) && (
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs">{row.note ?? ''}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// =============================================================================
// SPORT IMPLICATION — Long-form analysis / context section
// =============================================================================

export interface SportImplicationProps {
  heading: string;
  children: React.ReactNode;
  icon?: string;
}

export function SportImplication({ heading, children, icon = '📈' }: SportImplicationProps) {
  return (
    <div className="my-10">
      <h2 className="flex items-center gap-2 font-black text-2xl text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
        <span className="text-xl">{icon}</span>
        {heading}
      </h2>
      <div className="[&_p]:text-[17px] [&_p]:leading-relaxed [&_p]:text-gray-800 dark:[&_p]:text-gray-200 [&_p]:mb-4 [&_p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

// =============================================================================
// SPORT ARTICLE — Main wrapper. Passes all props through to NewsArticle.
//
// Usage:
//   <SportArticle title="..." category="MLB" categoryColor="red" ...>
//     <SportCallout heading="Executive Decoder">...</SportCallout>
//     <SportStoryline number={1} heading="The Sutter Health Park Launchpad">
//       ...
//     </SportStoryline>
//   </SportArticle>
// =============================================================================

export type SportArticleProps = NewsArticleProps;

export function SportArticle(props: SportArticleProps) {
  return <NewsArticle {...props} />;
}

export default SportArticle;
