import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Conan D. Boyle | Head of Automotive, oWire',
  description:
    'Conan D. Boyle is the Head of Automotive at oWire, overseeing all car, supercar, hypercar, EV, and motorsport coverage. From Ferrari and Bugatti to Hennessey and McLaren, he leads the automotive desk with a document-first, specifications-verified approach.',
  alternates: { canonical: 'https://www.objectivewire.com/authors/conan-boyle' },
  openGraph: {
    title: 'Conan D. Boyle | Head of Automotive, oWire',
    description: 'Head of Automotive at oWire. Overseeing hypercar, supercar, EV, and motorsport coverage with specifications-verified, primary-source reporting.',
    url: 'https://www.objectivewire.com/authors/conan-boyle',
    siteName: 'oWire',
    type: 'profile',
    images: [{ url: 'https://www.objectivewire.com/influncer/author/conan_doyle.jpg', width: 800, height: 800, alt: 'Conan D. Boyle, oWire Head of Automotive' }],
  },
  twitter: {
    card: 'summary',
    title: 'Conan D. Boyle | Head of Automotive, oWire',
    description: 'Head of Automotive. Hypercars, supercars, EVs, and motorsport with verified specifications.',
    images: ['https://www.objectivewire.com/influncer/author/conan_doyle.jpg'],
  },
};

const BEATS = [
  'Hypercars', 'Supercars', 'Electric Vehicles',
  'Motorsport', 'Performance Engineering', 'Luxury Autos',
  'Manufacturer Scoops', 'Spec Verification',
];

const HIGHLIGHTS = [
  { stat: '3+', label: 'Years at oWire' },
  { stat: 'Lead', label: 'Automotive Desk' },
  { stat: '30+', label: 'Published Articles' },
];

export default function ConanBoyleAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Conan D. Boyle"
        jobTitle="Head of Automotive"
        description="Conan D. Boyle is the Head of Automotive at oWire, overseeing all car, supercar, hypercar, EV, and motorsport coverage. He leads the automotive desk with a specifications-verified, primary-source approach, from Ferrari and Bugatti to Hennessey and McLaren."
        url="https://www.objectivewire.com/authors/conan-boyle"
        knowsAbout={['Hypercars', 'Supercars', 'Electric Vehicles', 'Motorsport', 'Performance Engineering', 'Luxury Automobiles', 'Manufacturer Specifications']}
        alumniOf={[{ name: 'North Carolina State University', department: 'Journalism' }]}
        location={{ city: 'Austin', region: 'TX' }}
        articleCount={30}
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
                Head of Automotive · oWire
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Conan Boyle
              </h1>
              <p className="text-gray-300 text-xl font-medium">Head of Automotive</p>
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
              &ldquo;Verify the spec sheet before you publish the headline.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-900 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>Austin, Texas</span>
          <span>NC State University, Journalism</span>
          <span>Automotive Desk</span>
          <span>Head of Automotive, 2026</span>
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
                ['Role', 'Head of Automotive'],
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
                  Conan D. Boyle is the Head of Automotive at oWire, leading the publication&rsquo;s
                  coverage of hypercars, supercars, electric vehicles, motorsport, and the broader
                  luxury automotive sector. Based in Austin, Texas, Boyle oversees oWire&rsquo;s
                  automotive desk with a specifications-verified, primary-source methodology,
                  from Ferrari and Bugatti to Hennessey, McLaren, Porsche, and beyond.
                </p>
                <p>
                  A graduate of North Carolina State University&rsquo;s journalism program, Boyle
                  applies the same evidence-first discipline to manufacturer press releases, spec
                  sheets, pricing data, and performance claims that investigative reporters apply
                  to court records and public filings. Every horsepower figure, price tag, and
                  production number is verified against primary sources before publication.
                </p>
                <p>
                  Under his leadership, oWire&rsquo;s automotive coverage has expanded to include
                  deep-dive hypercar profiles, EV performance analysis, motorsport news, and
                  manufacturer investigations. His work on the launch of the Ferrari F80, Bugatti
                  Tourbillon, McLaren W1, and Hennessey Venom F5-M has become authoritative
                  reference coverage for enthusiasts and industry watchers alike.
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
                    label: 'Hennessey Venom F5-M | 1,817-HP Manual Hypercar',
                    detail: "The world's most powerful manual car: gated six-speed, $2.65M, 12 units.",
                    href: '/cars/hennessey-venom-f5m-manual-hypercar-1817hp',
                    date: 'September 2026',
                  },
                  {
                    label: 'Ferrari F80 | Price, Specs, 1,184hp Hybrid',
                    detail: "Full spec breakdown on Ferrari's 1,184hp hybrid hypercar priced at $3.735M, limited to 799 units.",
                    href: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026',
                    date: 'May 2026',
                  },
                  {
                    label: 'McLaren W1 | 1,258 HP Hybrid Hypercar',
                    detail: 'Verified specs and pricing on McLaren W1, sourced directly from manufacturer filings.',
                    href: '/cars/mclaren-w1-hybrid-hypercar-price-specs-2026',
                    date: 'July 2026',
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
