import type { Metadata } from 'next';
import Link from 'next/link';
import HomeArticleSlider from '@/components/HomeArticleSlider';
import { getLatestArticles } from '@/lib/registry-service';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectivewire.com';

export const metadata: Metadata = {
  title: 'Objective Wire | Sports, Creators, Cars & Culture',
  description:
    'Objective Wire is a verified sports, creators, and culture network covering World Cup 2026, Premier League, MLS, MLB, supercars, and the creator economy. Accuracy over speed, primary sources only.',
  keywords: [
    'World Cup 2026',
    'Premier League news',
    'MLS 2026',
    'MLB news',
    'golf news',
    'supercar news',
    'creator news',
    'YouTube creators',
    'TikTok news',
    'influencer profiles',
    'Objective Wire',
    'oWire',
    'sports network',
    'verified news',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Objective Wire | Sports, Creators, Cars & Culture',
    description:
      'Verified sports and culture coverage. World Cup 2026, Premier League, MLS, MLB, supercars, and the creator economy. Accuracy over speed.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Objective Wire | Sports, Creators, Cars & Culture',
    description: 'World Cup 2026, Premier League, MLS, supercars, and creator economy. Verified news, primary sources only.',
  },
};

const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'NewsMediaOrganization',
  name: 'Objective Wire',
  alternateName: 'oWire',
  url: PAGE_URL,
  description:
    'Objective Wire is a verified sports, creators, and culture network covering World Cup 2026, Premier League, MLS, MLB, supercars, and the creator economy.',
  foundingDate: '2024',
  email: 'editorial@objectivewire.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.objectivewire.com/zwire-logo-square.png',
    width: 1001,
    height: 1001,
  },
};

const SERVICES = [
  {
    href: '/service/surveillance',
    icon: '📷',
    title: 'Surveillance',
    desc: 'Discreet field surveillance for individuals, attorneys, and businesses in Travis County and Central Texas.',
  },
  {
    href: '/service/missing-persons',
    icon: '🔍',
    title: 'Missing Persons',
    desc: 'Field investigation and skip tracing to locate missing family members, witnesses, and individuals.',
  },
  {
    href: '/service/background-checks',
    icon: '📋',
    title: 'Background Checks',
    desc: 'Comprehensive background screening for employment, relationships, tenants, and business partners.',
  },
  {
    href: '/service/infidelity-investigations',
    icon: '🤝',
    title: 'Infidelity Investigations',
    desc: 'Discreet, documented investigations for individuals and family law attorneys.',
  },
  {
    href: '/service/digital-forensics',
    icon: '💻',
    title: 'Digital Forensics',
    desc: 'Device analysis, social media investigation, and online trace work for civil and private matters.',
  },
  {
    href: '/service/skip-tracing',
    icon: '📍',
    title: 'Skip Tracing',
    desc: 'Locate individuals for debt recovery, legal service, reunification, and heir searches.',
  },
  {
    href: '/service/child-custody-investigations',
    icon: '👨‍👧',
    title: 'Child Custody',
    desc: 'Documented evidence for family law proceedings. Parental fitness, location monitoring, and compliance.',
  },
  {
    href: '/service/workers-compensation-fraud',
    icon: '🏥',
    title: 'Workers Comp Fraud',
    desc: 'Surveillance and documentation for insurers and employers disputing workers compensation claims.',
  },
  {
    href: '/service/corporate-investigations',
    icon: '🏢',
    title: 'Corporate Investigations',
    desc: 'Internal fraud, employee misconduct, due diligence, and competitive intelligence for businesses.',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Free Consultation',
    desc: 'Call or submit a request. We discuss your situation confidentially and explain what is realistic and what it will cost.',
  },
  {
    step: '02',
    title: 'Investigation',
    desc: 'Our investigators work your case using field surveillance, database research, and source development tailored to your needs.',
  },
  {
    step: '03',
    title: 'Documented Report',
    desc: 'You receive a written report with photos, timelines, and findings suitable for personal use, legal proceedings, or insurance claims.',
  },
];

export default async function HomePage() {
  const latestArticles = await getLatestArticles(72);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
      />

      <div className="h-[3px] bg-gray-900 w-full" />

      <HomeArticleSlider articles={latestArticles} />

      <main className="min-h-screen bg-[#f0f0f0]">

        {/* HERO */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-20 max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-400 mb-6 font-mono">
              Sports &nbsp;·&nbsp; World Cup 2026 &nbsp;·&nbsp; Luxury Cars &nbsp;·&nbsp; Creators
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl text-gray-900">
              Sports. Creators.<br />
              <span className="text-amber-600">Verified &amp; Published.</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-5 leading-relaxed font-serif">
              Objective Wire covers the 2026 FIFA World Cup, Premier League, MLS, MLB,
              supercars, and the creator economy — accuracy over speed, primary sources only.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
              Named authors. Transparent corrections. No aggregation, no opinion masquerading as news.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/world-cup"
                className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 transition-colors text-lg"
              >
                World Cup 2026
              </Link>
              <Link
                href="/about"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 transition-colors text-lg"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-[#e8e8e8] border-b border-gray-300">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
              {[
                { label: 'Coverage', value: 'World Cup 2026' },
                { label: 'Also', value: 'Cars & Creators' },
                { label: 'Approach', value: 'Primary Sources Only' },
                { label: 'Authors', value: 'Named Bylines' },
              ].map(({ label, value }, i) => (
                <div key={label} className={`text-center md:text-left ${i === 0 ? '' : 'pl-6'}`}>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-1.5 font-mono">{label}</p>
                  <p className="text-sm md:text-base font-black text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-3 font-mono">Services</p>
              <h2 className="font-serif text-4xl font-black text-gray-900 mb-4">What We Investigate</h2>
              <p className="text-lg text-gray-600">
                From surveillance to digital forensics, our investigators handle complex cases
                for private clients, attorneys, and businesses throughout Texas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group block bg-white hover:shadow-md transition-all"
                >
                  <div className="h-[3px] bg-gray-200 group-hover:bg-amber-500 transition-colors" />
                  <div className="border border-t-0 border-gray-200 p-6">
                    <div className="text-3xl mb-3">{s.icon}</div>
                    <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/service" className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-3 transition-colors">
                All Services + Journalism &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-14 max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-3 font-mono">Process</p>
              <h2 className="font-serif text-4xl font-black text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600">Simple, confidential, and documented from start to finish.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              {HOW_IT_WORKS.map(({ step, title, desc }) => (
                <div key={step} className="bg-[#f9f9f9] p-8">
                  <p className="text-5xl font-black text-gray-200 mb-4 font-mono leading-none">{step}</p>
                  <h3 className="font-black text-gray-900 mb-2 text-lg">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NONPROFIT MEDIA NOTE */}
        <section className="py-20 bg-[#f0f0f0]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-3 font-mono">Nonprofit Media</p>
                <h2 className="font-serif text-4xl font-black text-gray-900 mb-4">We Also Publish.</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Objective Wire operates a public-interest media desk alongside our investigative
                  services. Filed as a 501(c)(3) in Wyoming and operating statewide, we report on
                  Texas communities, courts, and public records that do not get covered elsewhere.
                  Same investigators. Same standards of verification.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/local/austin" className="text-gray-900 hover:underline font-bold text-sm border-b border-gray-300 pb-3">
                    Austin local coverage &rarr;
                  </Link>
                  <Link href="/local/greater-texas" className="text-gray-900 hover:underline font-bold text-sm border-b border-gray-300 pb-3">
                    Greater Texas reporting &rarr;
                  </Link>
                  <Link href="/service/tip-the-newsroom" className="text-gray-900 hover:underline font-bold text-sm">
                    Submit a tip &rarr;
                  </Link>
                </div>
              </div>
              <div className="bg-white border border-gray-200 divide-y divide-gray-100">
                {[
                  { label: 'Founder', value: 'Conan Boyle' },
                  { label: 'Incorporated', value: 'Wyoming 501(c)(3)' },
                  { label: 'Operating', value: 'Throughout Texas' },
                  { label: 'Coverage', value: 'Austin, Houston, Greater Texas' },
                  { label: 'Sources', value: 'Primary only, no aggregation' },
                  { label: 'Corrections', value: 'Public and timestamped' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-6 py-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono">{label}</span>
                    <span className="text-sm font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-500 mb-4 font-mono">
              Get Started
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-black mb-5">Free Consultation.</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tell us what you need to know. We will tell you exactly how we can help and what it costs.
              Serving all of Texas. All consultations are confidential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/service"
                className="bg-amber-500 text-gray-950 hover:bg-amber-400 font-black px-10 py-4 transition-colors text-lg"
              >
                View Services
              </Link>
              <Link
                href="/service/tip-the-newsroom"
                className="border border-gray-700 hover:border-gray-400 text-gray-400 hover:text-white font-bold px-10 py-4 transition-colors text-lg"
              >
                Tip the Newsroom
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
