import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Conan Boyle | Investigative Reporter, oWire Austin',
  description:
    'Conan Boyle is an investigative reporter at oWire in Austin, Texas. He covers public records, accountability journalism, supercars, and local Texas investigations.',
  alternates: { canonical: 'https://www.objectivewire.com/authors/conan-boyle' },
  openGraph: {
    title: 'Conan Boyle | Investigative Reporter, oWire Austin',
    description: 'Investigative reporter at oWire. Public records, accountability journalism, supercars, and Texas investigations.',
    url: 'https://www.objectivewire.com/authors/conan-boyle',
    siteName: 'oWire',
    type: 'profile',
    images: [{ url: 'https://www.objectivewire.com/influncer/author/conan_doyle.jpg', width: 800, height: 800, alt: 'Conan Boyle, oWire investigative reporter' }],
  },
  twitter: {
    card: 'summary',
    title: 'Conan Boyle | Investigative Reporter, oWire',
    description: 'Investigative reporter. Public records, Austin accountability, supercars.',
    images: ['https://www.objectivewire.com/influncer/author/conan_doyle.jpg'],
  },
};

const BEATS = [
  'Investigative Reporting', 'Public Records', 'Austin Accountability',
  'Texas FOIA', 'Supercars', 'Cars & EVs', 'Court Records', 'Corporate Accountability',
];

const HIGHLIGHTS = [
  { stat: '3+', label: 'Years at oWire' },
  { stat: 'Primary', label: 'Sources Only' },
  { stat: '22+', label: 'Published Articles' },
];

export default function ConanBoyleAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Conan Boyle"
        jobTitle="Investigative Reporter"
        description="Conan Boyle is an investigative reporter at oWire, covering public records, Austin accountability journalism, and supercars. He applies an evidence-first methodology to every story, sourcing court records, FOIA responses, and primary documents before publication."
        url="https://www.objectivewire.com/authors/conan-boyle"
        knowsAbout={['Investigative Reporting', 'Public Records', 'Texas FOIA', 'Supercars', 'Cars & EVs', 'Background Investigations', 'Austin Accountability']}
        alumniOf={[{ name: 'North Carolina State University', department: 'Journalism' }]}
        location={{ city: 'Austin', region: 'TX' }}
        articleCount={22}
      />

      {/* Full-bleed Header */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">Conan Boyle</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-white relative bg-white">
              <Image
                src="/influncer/author/conan_doyle.jpg"
                alt="Conan Boyle, oWire investigative reporter"
                fill
                sizes="(min-width: 768px) 96px, 80px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 font-mono">
                Founding Reporter � oWire
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Conan Boyle
              </h1>
              <p className="text-gray-300 text-xl font-medium">Investigative Reporter</p>
            </div>
            <div className="flex gap-8 md:pb-1 shrink-0">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="text-right">
                  <p className="text-3xl font-black">{h.stat}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-0.5">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-l-4 border-gray-500 pl-5">
            <p className="text-gray-300 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;The document is the story. Everything else is commentary.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>Austin, Texas</span>
          <span>NC State University, Journalism</span>
          <span>Investigative Desk</span>
          <span>Founding Reporter, 2023</span>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-7">
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

            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Organization', 'oWire'],
                ['Role', 'Investigative Reporter'],
                ['Education', 'NC State, Journalism'],
                ['Location', 'Austin, Texas'],
                ['Joined', '2023'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-950 text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-500">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Editorial Standards
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Corrections Policy
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                About oWire
              </Link>
            </div>
          </aside>

          {/* Main column */}
          <div className="lg:col-span-8 space-y-12">

            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-gray-900 pb-3">
                About Conan Boyle
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Conan Boyle is a founding reporter at oWire and the publication&rsquo;s lead
                  investigative journalist. Based in Austin, Texas, Boyle applies an evidence-first
                  methodology to every story: public records, court documents, FOIA responses,
                  and named primary sources before any claim is published.
                </p>
                <p>
                  A graduate of North Carolina State University&rsquo;s journalism program, Boyle
                  covers two primary beats: Austin-area public accountability, including Travis
                  County courts, city hall, APD records, and Texas FOIA requests, and the supercar
                  and automotive industry, where he applies the same evidence-first methodology
                  to manufacturer claims, pricing data, and performance specifications.
                </p>
                <p>
                  His investigative approach is grounded in primary documentation. Boyle sources
                  named individuals, official filings, court records, and verifiable public data
                  before publication. Every published article carries a full source trail traceable
                  to original documents.
                </p>
                <p>
                  Boyle&rsquo;s work on the automotive beat includes deep-coverage profiles of
                  hypercar launches, EV performance claims, and manufacturer sourcing, bringing
                  the same document-first discipline to press releases and spec sheets that he
                  applies to public records and court filings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b border-gray-200 pb-3">
                Recent Highlights
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'Ferrari F80 | Price, Specs, 1,184hp Hybrid',
                    detail: "Full spec breakdown on Ferrari's 1,184hp hybrid hypercar priced at $3.735M, limited to 799 units.",
                    href: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026',
                    date: 'May 2026',
                  },
                  {
                    label: 'Austin APD Use-of-Force Records | 2025',
                    detail: 'Public records analysis of Travis County APD incident filings, sourced via Texas FOIA.',
                    href: '/local/austin',
                    date: 'April 2026',
                  },
                  {
                    label: 'Bugatti Tourbillon | V16 Hybrid, $4.1M',
                    detail: 'Verified specs and pricing on the Bugatti Tourbillon, sourced directly from manufacturer filings.',
                    href: '/cars',
                    date: 'March 2026',
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

            <section>
              <div className="border-b-2 border-gray-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Articles</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="h-16 bg-gray-100 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="conan-boyle" authorName="Conan Boyle" />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t-2 border-gray-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">2026 oWire. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
