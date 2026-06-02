import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Objective Wire | Private Investigative Services Throughout Texas',
  description:
    'Objective Wire is a 501(c)(3) nonprofit investigative agency and public-interest magazine serving all of Texas. Surveillance, missing persons, background checks, skip tracing, digital forensics, and public-interest reporting.',
  keywords: [
    'private investigator Texas',
    'Texas private detective agency',
    'investigative services Texas',
    'surveillance Texas',
    'missing persons Texas',
    'background check Texas',
    'skip tracing Texas',
    'digital forensics Texas',
    'Objective Wire',
    'nonprofit investigative agency Texas',
    'Austin private investigator',
    'Houston private investigator',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Objective Wire | Private Investigative Services Throughout Texas',
    description:
      '501(c)(3) nonprofit investigative agency serving Texas. Surveillance, missing persons, background checks, skip tracing, and digital forensics. Free consultation.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Objective Wire | Texas PI Services',
    description: 'Nonprofit investigative agency serving all of Texas. Surveillance, missing persons, background checks, digital forensics.',
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Objective Wire Investigative Services',
  alternateName: 'Objective Wire',
  url: PAGE_URL,
  description:
    '501(c)(3) nonprofit investigative agency and public-interest magazine serving all of Texas. Surveillance, missing persons, background checks, skip tracing, digital forensics, corporate investigations, and public-interest reporting.',
  foundingDate: '2023',
  nonprofitStatus: 'Nonprofit501c3',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.2672,
    longitude: -97.7431,
  },
  areaServed: [
    { '@type': 'State', name: 'Texas' },
    { '@type': 'City', name: 'Austin' },
    { '@type': 'City', name: 'Houston' },
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'San Antonio' },
    { '@type': 'AdministrativeArea', name: 'Travis County' },
  ],
  telephone: '(575) 495-0323',
  email: 'editorial@objectivewire.org',
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />

      <div className="h-[3px] bg-gray-900 w-full" />

      <main className="min-h-screen bg-[#f0f0f0]">

        {/* HERO */}
        <section className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-20 max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-400 mb-6 font-mono">
              Texas &nbsp;·&nbsp; Investigative Services &nbsp;·&nbsp; Public-Interest Media &nbsp;·&nbsp; 501(c)(3)
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl text-gray-900">
              Texas Investigations.<br />
              <span className="text-amber-600">Documented &amp; Published.</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mb-5 leading-relaxed font-serif">
              Objective Wire is a 501(c)(3) nonprofit investigative agency serving individuals,
              attorneys, and businesses throughout Texas. We conduct surveillance, locate missing
              persons, run background checks, and handle digital forensics with full documentation.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
              Incorporated as a nonprofit in Wyoming and operating statewide. We also publish
              public-interest reporting on Texas through our investigative media team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/service"
                className="bg-gray-900 hover:bg-gray-800 text-white font-black px-8 py-4 transition-colors text-lg"
              >
                View All Services
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
                { label: 'Serving', value: 'All of Texas' },
                { label: 'Services', value: '9 PI Specialties' },
                { label: 'Incorporated', value: '501(c)(3) Wyoming Nonprofit' },
                { label: 'Consultations', value: 'Free & Confidential' },
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

        {/* LATEST INVESTIGATIONS */}
        <section className="py-20 bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 mb-2 font-mono">Texas Desk</p>
                <h2 className="font-serif text-4xl font-black text-white">Latest Investigations</h2>
              </div>
              <Link href="/blog" className="hidden md:inline-block border border-amber-500/40 hover:border-amber-500 text-amber-500 hover:text-amber-400 font-black text-xs tracking-widest uppercase px-5 py-3 transition-colors">
                All Investigations &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: '/blog/karmelo-anthony-murder-trial-frisco-track-meet-stabbing',
                  tag: 'Criminal Trial',
                  title: 'Karmelo Anthony Murder Trial | Frisco Track Meet Stabbing, Collin County',
                  desc: 'Karmelo Anthony, 18, faces first-degree murder in the April 2025 stabbing of Austin Metcalf at a Frisco high school track meet. Trial date set in Collin County.',
                  author: 'Alfonso M.',
                  date: 'May 2026',
                },
                {
                  href: '/blog/texas-ag-cam-solar-lawsuit-deceptive-practices',
                  tag: 'AG Investigation',
                  title: 'Texas AG Sues CAM Solar | Deceptive Sales Practices Across Texas',
                  desc: 'Texas Attorney General Ken Paxton filed suit against CAM Solar alleging deceptive door-to-door sales, misleading financing terms, and failure to install purchased systems.',
                  author: 'Alfonso M.',
                  date: 'May 2026',
                },
                {
                  href: '/blog/texas-ag-golden-qi-h1b-visa-fraud-north-texas',
                  tag: 'Fraud',
                  title: 'Golden Qi H-1B Visa Fraud | North Texas Staffing Scheme',
                  desc: 'Texas AG charges Golden Qi staffing with running a fraudulent H-1B visa sponsorship operation, collecting fees from foreign workers for jobs that did not exist.',
                  author: 'Alfonso M.',
                  date: 'May 2026',
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block bg-[#1a1a1a] border border-gray-800 hover:border-amber-500/40 transition-all"
                >
                  <div className="h-[3px] bg-gray-800 group-hover:bg-amber-500 transition-colors" />
                  <div className="p-6">
                    <span className="inline-block text-[9px] font-black px-2.5 py-1 tracking-[.15em] uppercase text-white bg-[#92400e] rounded-sm mb-3">
                      {article.tag}
                    </span>
                    <h3 className="font-serif font-black text-white group-hover:text-amber-400 transition-colors leading-snug text-base mb-2 line-clamp-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
                      {article.desc}
                    </p>
                    <p className="text-[10px] text-gray-500 font-mono border-t border-gray-800 pt-3">
                      {article.author} &middot; {article.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 md:hidden text-center">
              <Link href="/blog" className="inline-block border border-amber-500/40 hover:border-amber-500 text-amber-500 font-black text-xs tracking-widest uppercase px-5 py-3 transition-colors">
                All Investigations &rarr;
              </Link>
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
