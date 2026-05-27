import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'oWire | Licensed Investigative Newsroom, Austin TX',
  description:
    'Objective Wire is a licensed investigative newsroom and 501(c)(3) nonprofit in Austin, Texas. Our reporters hold Texas PI credentials, applied to original reporting on public records, accountability, cars, creators, and culture.',
  keywords: [
    'investigative newsroom Austin',
    'licensed investigative journalism',
    'Texas investigative reporter',
    'public records journalism Texas',
    'Austin accountability journalism',
    'nonprofit newsroom Austin',
    'investigative reporting Texas',
    'FOIA Austin Texas',
    'oWire',
    'Objective Wire',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'oWire | Licensed Investigative Newsroom, Austin TX',
    description:
      'A licensed investigative newsroom in Austin, Texas. Original reporting backed by Texas PI credentials, public records, and primary-source verification.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'oWire | Licensed Investigative Newsroom',
    description: 'Licensed investigative newsroom. Public records, accountability, original reporting from Austin.',
  },
};

const NEWS_MEDIA_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['NewsMediaOrganization', 'NGO'],
  name: 'Objective Wire',
  alternateName: 'oWire',
  url: PAGE_URL,
  logo: 'https://www.objectivewire.org/opengraph-image',
  description:
    'A licensed investigative newsroom and 501(c)(3) nonprofit based in Austin, Texas. Reporters hold Texas PI credentials, enabling original investigative journalism on public records, accountability, cars, creators, and culture.',
  foundingDate: '2023',
  foundingLocation: { '@type': 'Place', name: 'Austin, Texas' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Austin' },
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
  ethicsPolicy: 'https://www.objectivewire.org/editorial-standards',
  diversityPolicy: 'https://www.objectivewire.org/editorial-standards',
  correctionsPolicy: 'https://www.objectivewire.org/corrections',
  masthead: 'https://www.objectivewire.org/authors',
  missionCoveragePrioritiesPolicy: 'https://www.objectivewire.org/about',
  knowsAbout: [
    'Investigative Journalism',
    'Public Records',
    'FOIA',
    'Source Protection',
    'Accountability Reporting',
    'Texas Private Investigation Code 1702',
  ],
  sameAs: ['https://www.objectivewire.org'],
};

const TRUST_BADGES = [
  { label: 'Texas Licensed', value: 'PI Code Ch. 1702' },
  { label: 'Tax Status', value: '501(c)(3) Nonprofit' },
  { label: 'Founded', value: 'Austin, TX, 2023' },
  { label: 'Editorial Model', value: 'Primary Sources Only' },
];

const PILLARS = [
  {
    href: '/local/austin',
    kicker: 'Local Accountability',
    title: 'Austin and Travis County',
    desc: 'Public records reporting on city hall, APD, Travis County courts, and Texas FOIA filings.',
  },
  {
    href: '/cars',
    kicker: 'Cars and Supercars',
    title: 'Hypercars, EVs, Manufacturers',
    desc: 'Verified specs, pricing, and manufacturer claims, sourced from filings, not press releases.',
  },
  {
    href: '/creator',
    kicker: 'Creators and Culture',
    title: 'Creator Economy Reporting',
    desc: 'Profiles, brand deals, platform shifts, and original interviews with creators and athletes.',
  },
  {
    href: '/service',
    kicker: 'Investigative Methods',
    title: 'How Our Reporters Investigate',
    desc: 'The licensed tools our reporters use, surveillance, skip tracing, and document review.',
  },
];

const METHODS = [
  {
    step: '01',
    title: 'Tip Received',
    desc: 'Tips arrive via SecureDrop-style intake. Source identity is protected by editorial policy and Texas reporter privilege.',
  },
  {
    step: '02',
    title: 'Verification',
    desc: 'We pull primary documents, court filings, public records, and FOIA responses. No story moves without verified sourcing.',
  },
  {
    step: '03',
    title: 'Licensed Field Work',
    desc: 'Where surveillance, skip tracing, or background research is needed, our Texas PI credential keeps the work legal and admissible.',
  },
  {
    step: '04',
    title: 'Publication',
    desc: 'Stories are published with named authors, full source citations, dated timestamps, and a transparent corrections record.',
  },
];

const STANDARDS = [
  { icon: 'L', text: 'Licensed under Texas Occupations Code Chapter 1702 by the Department of Public Safety.' },
  { icon: 'N', text: '501(c)(3) nonprofit. No paywall, no shareholders, no profit motive driving coverage decisions.' },
  { icon: 'P', text: 'Primary sources only. Every fact traces to a named individual, document, or filing.' },
  { icon: 'C', text: 'Published corrections policy. Errors are corrected publicly, timestamped, and preserved.' },
  { icon: 'S', text: 'Source protection by editorial policy and Texas reporter privilege.' },
  { icon: 'A', text: 'Named author bylines on every published article. No anonymous editorial.' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(NEWS_MEDIA_SCHEMA) }}
      />

      {/* Editorial top rule */}
      <div className="h-[3px] bg-gray-900 w-full" />

      <main className="min-h-screen bg-[#f0f0f0]">

        {/* HERO */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-20 max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-500 mb-5 font-mono">
              Austin, Texas, Licensed Investigative Newsroom, 501(c)(3) Nonprofit
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl text-gray-900">
              The Licensed<br />
              <span className="text-amber-500">Investigative Newsroom.</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-5 leading-relaxed">
              oWire reporters hold Texas Private Investigator credentials. We apply licensed
              investigative methods, surveillance, public records, skip tracing, and document
              review, to original journalism that other newsrooms cannot legally produce.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
              Independent, nonprofit, and accountable. Every story carries a named byline,
              dated timestamps, and full primary-source citations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/service/tip-the-newsroom"
                className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 transition-colors text-lg"
              >
                Tip the Newsroom
              </Link>
              <Link
                href="/editorial-standards"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 transition-colors text-lg"
              >
                Editorial Standards
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-[#e8e8e8] border-b border-gray-300">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
              {TRUST_BADGES.map(({ label, value }, i) => (
                <div key={label} className={`text-center md:text-left ${i === 0 ? '' : 'pl-6'}`}>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-1.5 font-mono">
                    {label}
                  </p>
                  <p className="text-sm md:text-base font-black text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE PILLARS */}
        <section className="py-20 bg-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-3 font-mono">
                Coverage
              </p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                What oWire Investigates
              </h2>
              <p className="text-lg text-gray-600">
                oWire focuses on four beats: local Austin accountability, cars and supercars,
                creators and culture, and the investigative methods themselves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PILLARS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group block bg-white hover:shadow-md transition-all"
                >
                  <div className="h-[3px] bg-gray-900 group-hover:bg-amber-500 transition-colors" />
                  <div className="border border-t-0 border-gray-200 p-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-3 font-mono">
                      {p.kicker}
                    </p>
                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{p.desc}</p>
                    <span className="text-gray-900 text-sm font-bold group-hover:underline">
                      Read coverage &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE INVESTIGATE */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-3 font-mono">
                Methodology
              </p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                How a Story Becomes a Story
              </h2>
              <p className="text-lg text-gray-600">
                The license is not the product. The license is what makes the journalism
                possible. Here is what happens between a tip and a published article.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
              {METHODS.map(({ step, title, desc }) => (
                <div key={step} className="bg-[#f9f9f9] p-8">
                  <p className="text-5xl font-black text-gray-200 mb-4 font-mono leading-none">{step}</p>
                  <h3 className="font-black text-gray-900 mb-2 text-lg">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDITORIAL STANDARDS */}
        <section className="py-20 bg-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-3 font-mono">
                  Why You Can Trust oWire
                </p>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  Independent. Licensed. Accountable.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  oWire is structured to remove the typical pressures that distort journalism.
                  We are a 501(c)(3) nonprofit with no paywall, no shareholders, and no
                  advertiser veto over coverage. Every reporter operates under a published
                  editorial code and a public corrections policy.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/editorial-standards" className="text-gray-900 hover:underline font-bold text-sm border-b border-gray-300 pb-3">
                    Read our editorial standards &rarr;
                  </Link>
                  <Link href="/corrections" className="text-gray-900 hover:underline font-bold text-sm border-b border-gray-300 pb-3">
                    Corrections policy &rarr;
                  </Link>
                  <Link href="/authors" className="text-gray-900 hover:underline font-bold text-sm">
                    Meet the reporters &rarr;
                  </Link>
                </div>
              </div>
              <div className="bg-white border border-gray-200 divide-y divide-gray-100">
                {STANDARDS.map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-4 px-6 py-4">
                    <span className="font-mono font-black text-gray-900 text-xs mt-0.5 min-w-[1rem]">{icon}</span>
                    <p className="text-gray-700 leading-relaxed text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MASTHEAD / FOUNDER */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-3 font-mono">
                  Masthead
                </p>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  The Newsroom
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Named bylines on every story. Reporters with public profiles, verified
                  credentials, and traceable work histories.
                </p>
                <Link href="/authors" className="text-gray-900 font-bold hover:underline text-sm">
                  View all authors &rarr;
                </Link>
              </div>

              <div className="lg:col-span-2 border border-gray-200 bg-[#f9f9f9] p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 font-mono">
                  Founding Reporter, oWire
                </p>
                <h3 className="text-3xl font-black text-gray-900 mb-3">
                  Conan Boyle
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Conan Boyle is the founding reporter at oWire and the publication&rsquo;s
                  lead investigative journalist. A graduate of NC State University&rsquo;s
                  journalism program, Boyle holds a Texas Private Investigator credential
                  under the Department of Public Safety, which he applies directly to original
                  reporting on Austin public records, Travis County courts, and the cars beat.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Investigative Reporting', 'Public Records', 'Texas FOIA', 'Supercars', 'Austin Accountability'].map((b) => (
                    <span key={b} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white text-gray-600 border border-gray-300">
                      {b}
                    </span>
                  ))}
                </div>
                <Link
                  href="/authors/conan-boyle"
                  className="inline-block bg-gray-900 text-white hover:bg-gray-800 font-bold px-6 py-3 transition-colors text-sm"
                >
                  Full bio and published work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TIP THE NEWSROOM CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-500 mb-4 font-mono">
              Have a Story
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">Tip the Newsroom.</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Confidential. Source identity protected. Whistleblowers, public records leaks,
              corporate misconduct, and accountability tips reviewed by a named editor within
              48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/service/tip-the-newsroom"
                className="bg-amber-500 text-gray-950 hover:bg-amber-400 font-black px-10 py-4 transition-colors text-lg"
              >
                Submit a Tip
              </Link>
              <Link
                href="/about"
                className="border border-gray-700 hover:border-gray-400 text-gray-400 hover:text-white font-bold px-10 py-4 transition-colors text-lg"
              >
                About oWire
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
