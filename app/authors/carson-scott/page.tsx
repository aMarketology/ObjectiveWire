import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Carson Scott | NFL Sports Reporter, ObjectWire',
  description:
    'Carson Scott is an NFL reporter at ObjectWire covering trades, breaking news, fantasy football impact, and the business of professional football.',
  alternates: { canonical: 'https://www.objectivewire.com/authors/carson-scott' },
  openGraph: {
    title: 'Carson Scott | NFL Sports Reporter, ObjectWire',
    description: 'NFL reporter covering trades, roster moves, fantasy football, and the business of the league.',
    url: 'https://www.objectivewire.com/authors/carson-scott',
    siteName: 'ObjectWire',
    type: 'profile',
    images: [
      {
        url: 'https://www.objectivewire.com/influncer/author/carson_scott.jpg',
        width: 800,
        height: 800,
        alt: 'Carson Scott, ObjectWire NFL reporter',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Carson Scott, ObjectWire NFL Reporter',
    description: 'NFL reporter at ObjectWire. Trades, fantasy football, and the business of the league.',
    images: ['https://www.objectivewire.com/influncer/author/carson_scott.jpg'],
  },
};

const BEATS = [
  'NFL', 'Trades & Free Agency', 'Fantasy Football',
  'Salary Cap', 'Roster Moves', 'NFL Draft',
  'Patriots', 'Eagles',
];

const HIGHLIGHTS = [
  { stat: '2026', label: 'Joined' },
  { stat: '8+', label: 'Beats Covered' },
  { stat: '10+', label: 'Published Articles' },
];

export default function CarsonScottAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Carson Scott"
        jobTitle="NFL Reporter"
        description="Carson Scott is ObjectWire's NFL reporter covering trades, breaking news, fantasy football impact, salary cap analysis, and the business of professional football."
        url="https://www.objectivewire.com/authors/carson-scott"
        knowsAbout={['NFL', 'Trades', 'Fantasy Football', 'Salary Cap', 'NFL Draft', 'Roster Moves']}
        location={{ city: 'New York', region: 'NY' }}
        articleCount={10}
        sameAs={['https://www.facebook.com/profile.php?id=100010599588220']}
      />

      {/* Header */}
      <div className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">Carson Scott</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-white relative bg-gray-800">
              <Image
                src="/influncer/author/carson_scott.jpg"
                alt="Carson Scott, ObjectWire NFL reporter"
                fill
                sizes="(min-width: 768px) 96px, 80px"
                className="object-cover"
                priority
              />
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 font-mono">
                ObjectWire &middot; Sports
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Carson Scott
              </h1>
              <p className="text-gray-300 text-xl font-medium">NFL Reporter</p>
            </div>
            {/* Stats */}
            <div className="flex gap-8 md:pb-1 shrink-0">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-right">
                  <p className="text-3xl font-black">{h.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote bar */}
          <div className="mt-10 border-l-4 border-white pl-5">
            <p className="text-gray-300 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;Every trade tells two stories. Get both before you publish either.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>🏈 NFL Sports Desk</span>
          <span>📍 ObjectWire Newsroom</span>
          <span>📊 Trades &amp; Fantasy Coverage</span>
          <span>📅 Active Since 2026</span>
          <a
            href="https://www.facebook.com/profile.php?id=100010599588220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-7">
            {/* Beats */}
            <div className="border border-gray-200 p-6">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-4">Coverage Beats</h2>
              <div className="flex flex-wrap gap-2">
                {BEATS.map((beat) => (
                  <span key={beat} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-100 text-gray-700 border border-gray-200">
                    {beat}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Organization', 'ObjectWire'],
                ['Desk', 'Sports / NFL'],
                ['Location', 'New York, NY'],
                ['Joined', '2026'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="border border-gray-200 p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400">Follow Carson</h2>
              <a
                href="https://www.facebook.com/profile.php?id=100010599588220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                <span>📘</span> Carson Scott on Facebook
              </a>
            </div>

            {/* Editorial */}
            <div className="bg-black text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Editorial Standards &rarr;
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Corrections Policy &rarr;
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                About ObjectWire &rarr;
              </Link>
            </div>
          </aside>

          {/* Main column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-black pb-3">
                About Carson Scott
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Carson Scott is ObjectWire&rsquo;s NFL reporter, covering the full landscape of professional
                  football: trades, free agency, salary cap mechanics, fantasy football implications,
                  and the business decisions that reshape rosters across the league calendar.
                </p>
                <p>
                  Scott approaches NFL news with a transactions-first lens. When a trade is announced,
                  his first question is always structural: what are the cap mechanics, who is gaining
                  leverage, and what does the acquiring team expect to get for the cost. His coverage
                  connects the front office reasoning to the field impact, giving readers context that
                  goes beyond the initial transaction report.
                </p>
                <p>
                  His June 2026 coverage of the A.J. Brown trade from Philadelphia to New England
                  outlined the full post-June 1 dead money split that made the deal viable for
                  the Eagles, the fantasy ramifications for Drake Maye and DeVonta Smith, and the
                  broader implication of Howie Roseman becoming the first general manager to hold
                  multiple 2028 first-round picks.
                </p>
                <p>
                  Scott operates out of ObjectWire&rsquo;s Sports Desk. Tips on roster moves and
                  league transactions can be directed to ObjectWire&rsquo;s editorial contact channel.
                </p>
              </div>
            </section>

            {/* Recent Highlights */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b border-gray-200 pb-3">
                Recent Highlights
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'Blockbuster Trade: Patriots Acquire Eagles WR A.J. Brown',
                    detail: 'Philadelphia sends Brown to New England for a 2028 first-round pick in a post-June 1 deal that splits $43.45M in dead money across two seasons.',
                    href: '/news/patriots-trade-aj-brown-eagles-2026',
                    date: 'June 1, 2026',
                  },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block group border border-gray-200 p-5 hover:border-gray-900 transition-colors">
                    <p className="text-xs font-mono text-gray-400 mb-1">{item.date}</p>
                    <p className="font-black text-gray-900 text-sm mb-1.5 group-hover:underline">{item.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-gray-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-16 bg-gray-100 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="carson-scott" authorName="Carson Scott" />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t-2 border-gray-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">&copy; 2026 ObjectWire. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">&larr; All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
