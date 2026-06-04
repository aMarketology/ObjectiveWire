import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Madison Younghans | Tennis Reporter, ObjectWire',
  description:
    'Madison Younghans is a tennis reporter at ObjectWire covering the WTA, ATP, Grand Slams, and the global professional tennis circuit.',
  alternates: { canonical: 'https://www.objectivewire.com/authors/madison-younghans' },
  openGraph: {
    title: 'Madison Younghans | Tennis Reporter, ObjectWire',
    description: 'Tennis reporter covering WTA, ATP, Grand Slams, and the professional tennis circuit.',
    url: 'https://www.objectivewire.com/authors/madison-younghans',
    siteName: 'ObjectWire',
    type: 'profile',
    images: [
      {
        url: 'https://www.objectivewire.com/influncer/author/madison_younghans.jpg',
        width: 800,
        height: 800,
        alt: 'Madison Younghans, ObjectWire tennis reporter',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Madison Younghans | ObjectWire Tennis',
    description: 'Tennis reporter at ObjectWire. WTA, ATP, Grand Slams, and professional circuit coverage.',
    images: ['https://www.objectivewire.com/influncer/author/madison_younghans.jpg'],
  },
};

const BEATS = [
  'Tennis', 'WTA', 'ATP', 'Wimbledon',
  'Grand Slams', 'Grass Court Season', "Queen's Club", 'French Open',
];

const HIGHLIGHTS = [
  { stat: '2026', label: 'Joined' },
  { stat: '8+', label: 'Beats Covered' },
  { stat: '10+', label: 'Published Articles' },
];

export default function MadisonYounghansAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Madison Younghans"
        jobTitle="Tennis Reporter"
        description="Madison Younghans is ObjectWire's tennis reporter covering the WTA, ATP, Grand Slam events, and the professional tennis circuit worldwide."
        url="https://www.objectivewire.com/authors/madison-younghans"
        knowsAbout={['Tennis', 'WTA', 'ATP', 'Wimbledon', 'Grand Slams', 'Grass Court Season']}
        location={{ city: 'New York', region: 'NY' }}
        articleCount={10}
        sameAs={['https://www.facebook.com/madison.younghans']}
      />

      {/* Header */}
      <div className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">Madison Younghans</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-white relative bg-gray-800">
              <Image
                src="/influncer/author/madison_younghans.jpg"
                alt="Madison Younghans, ObjectWire tennis reporter"
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
                Madison Younghans
              </h1>
              <p className="text-gray-300 text-xl font-medium">Tennis Reporter</p>
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
              &ldquo;The serve tells you everything. The second serve tells you the truth.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>🎾 Tennis Desk</span>
          <span>📍 ObjectWire Newsroom</span>
          <span>🌍 WTA &amp; ATP Coverage</span>
          <span>📅 Active Since 2026</span>
          <a
            href="https://www.facebook.com/madison.younghans"
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
                ['Desk', 'Sports / Tennis'],
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
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400">Follow Madison</h2>
              <a
                href="https://www.facebook.com/madison.younghans"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                <span>📘</span> Madison Younghans on Facebook
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
                About Madison Younghans
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Madison Younghans is ObjectWire&rsquo;s tennis reporter, covering the full professional
                  circuit across both the WTA and ATP tours, Grand Slam events, and the seasonal
                  rhythms of clay, hard court, and grass that define the global tennis calendar.
                </p>
                <p>
                  Younghans approaches the sport from a player-first perspective: who is moving through
                  the draw, what surface conditions are doing to specific matchups, and which tactical
                  patterns determine outcomes at the highest level. Her coverage prioritizes the
                  competitive substance of each tournament over celebrity observation.
                </p>
                <p>
                  Her 2026 work at ObjectWire includes a complete guide to the HSBC Championships
                  at Queen&rsquo;s Club, the premier Wimbledon warm-up event in West Kensington, and
                  an in-depth profile of Serena Williams&rsquo; wildcard doubles return alongside
                  Canadian rising star Victoria Mboko during the WTA 500 women&rsquo;s week in June 2026.
                </p>
                <p>
                  Younghans operates out of ObjectWire&rsquo;s Sports Desk. Tips, tournament corrections,
                  and score updates can be directed to ObjectWire&rsquo;s editorial contact channel.
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
                    label: "Queen's Club Championships 2026 | What Is the Queens Cup",
                    detail: "The complete guide to the HSBC Championships at Queen's Club, the 2026 two-week schedule, and why it is the definitive Wimbledon warm-up.",
                    href: '/tennis/queens-club-championships-2026-guide',
                    date: 'June 1, 2026',
                  },
                  {
                    label: "Serena Williams Returns at Queen's Club 2026 | Wildcard Doubles With Victoria Mboko",
                    detail: 'Full profile of the wildcard doubles entry, the Williams-Mboko partnership, and what the return means for the grass court season.',
                    href: '/tennis/serena-williams-queens-club-2026-return',
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
                <AuthorArticlesServer authorSlug="madison-younghans" authorName="Madison Younghans" />
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
