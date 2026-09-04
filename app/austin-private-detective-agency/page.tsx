import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectivewire.org/austin-private-detective-agency';

export const metadata: Metadata = {
  title: 'Austin Private Detective Agency | Objective Wire PI Services',
  description:
    'Objective Wire is a licensed Austin private detective agency and 501(c)(3) nonprofit. Surveillance, missing persons, background checks, infidelity investigations, and digital forensics in Travis County, TX.',
  keywords: [
    'Austin private detective agency',
    'private detective Austin TX',
    'private investigator Austin Texas',
    'Austin PI agency',
    'licensed private investigator Austin',
    'surveillance Austin Texas',
    'infidelity investigator Austin',
    'missing persons Austin TX',
    'background check Austin Texas',
    'digital forensics Austin',
    'skip tracing Austin Texas',
    'child custody investigator Austin',
    'corporate investigator Austin TX',
    'Travis County private detective',
    'Central Texas PI agency',
    'Objective Wire investigative services',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Austin Private Detective Agency | Objective Wire',
    description:
      'Licensed Austin PI agency and 501(c)(3) nonprofit. Surveillance, missing persons, background checks, infidelity investigations, digital forensics. Free consultation.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin Private Detective Agency | Objective Wire',
    description:
      'Licensed Austin PI agency. Surveillance, missing persons, background checks, infidelity, digital forensics. Free initial consultation.',
  },
};

const SERVICES = [
  {
    href: '/service/surveillance',
    icon: '🎥',
    title: 'Surveillance',
    desc: 'Covert field surveillance with timestamped, geotagged photo and video documentation. Court-ready chain of custody on every case.',
  },
  {
    href: '/service/infidelity-investigations',
    icon: '🔍',
    title: 'Infidelity Investigations',
    desc: 'Cheating spouse and domestic partner cases handled with discretion. Verified evidence delivered directly to you — never published.',
  },
  {
    href: '/service/missing-persons',
    icon: '📍',
    title: 'Missing Persons',
    desc: 'Locate missing adults, runaways, and estranged family members across Texas and nationwide with skip-tracing and field work.',
  },
  {
    href: '/service/background-checks',
    icon: '📋',
    title: 'Background Checks',
    desc: 'Criminal history, civil records, employment verification, identity research, and financial background investigations.',
  },
  {
    href: '/service/skip-tracing',
    icon: '🗺️',
    title: 'Skip Tracing',
    desc: 'Locate debtors, witnesses, defendants, and estranged contacts for attorneys, process servers, and private parties.',
  },
  {
    href: '/service/child-custody-investigations',
    icon: '⚖️',
    title: 'Child Custody Investigations',
    desc: 'Parental conduct surveillance and documentation for Travis County family court proceedings.',
  },
  {
    href: '/service/corporate-investigations',
    icon: '🏢',
    title: 'Corporate Investigations',
    desc: 'Employee misconduct, IP theft, fraud detection, and executive due diligence for Austin businesses.',
  },
  {
    href: '/service/digital-forensics',
    icon: '💻',
    title: 'Digital Forensics',
    desc: 'Online harassment, social media alias identification, identity fraud investigations, and dark-web exposure analysis.',
  },
];

const NEWS_BEATS = [
  {
    href: '/cars',
    icon: '🏎️',
    title: 'Supercars & EVs',
    desc: 'Ferrari, Bugatti, McLaren, Porsche, and the latest in electric vehicle news from Austin reporters who know the machines.',
  },
  {
    href: '/creator',
    icon: '📱',
    title: 'Creators & Influencers',
    desc: 'YouTube, TikTok, and creator economy coverage. Profiles, brand deals, controversies, and platform news.',
  },
  {
    href: '/premier-league',
    icon: '⚽',
    title: 'Premier League',
    desc: 'Match reports, transfer news, standings, and club analysis from our dedicated football desk.',
  },
  {
    href: '/mlb',
    icon: '⚾',
    title: 'MLB Baseball',
    desc: 'Standings, scores, trade rumors, and player news across the 2026 Major League Baseball season.',
  },
  {
    href: '/golf',
    icon: '⛳',
    title: 'Golf',
    desc: 'PGA Tour, LIV Golf, the majors, and player profiles from our golf reporting team.',
  },
  {
    href: '/world-cup',
    icon: '🏆',
    title: '2026 World Cup',
    desc: 'Full coverage of the FIFA 2026 World Cup — squads, brackets, match results, and analysis.',
  },
];

const CREDENTIALS = [
  { label: 'License Authority', value: 'Texas Dept. of Public Safety' },
  { label: 'Governing Law', value: 'TX Occupations Code Ch. 1702' },
  { label: 'Entity Type', value: '501(c)(3) Nonprofit' },
  { label: 'Primary Coverage', value: 'Travis County & Central Texas' },
  { label: 'Newsroom Tips', value: 'Confidential & protected' },
  { label: 'Evidence Standard', value: 'Court-admissible documentation' },
];

export default function AustinPrivateDetectivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ProfessionalService'],
            name: 'Objective Wire — Austin Private Detective Agency',
            description:
              'Licensed Austin private detective agency and 501(c)(3) nonprofit. Surveillance, missing persons, background checks, infidelity investigations, digital forensics across Travis County and Central Texas.',
            url: PAGE_URL,
            telephone: '(575) 495-0323',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2921 E 17th St Building 3, APT 3205',
              addressLocality: 'Austin',
              addressRegion: 'TX',
              postalCode: '78702',
              addressCountry: 'US',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 30.2672, longitude: -97.7431 },
            areaServed: [
              'Austin, TX', 'Travis County', 'Williamson County', 'Hays County', 'Central Texas',
            ],
            priceRange: 'Free consultation',
            openingHours: 'Mo-Su 08:00-20:00',
          }),
        }}
      />

      <main className="min-h-screen bg-[#121212] text-white">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#1c1c1e] via-[#2d1a4a] to-[#1c1c1e] border-b border-white/10">
          <div className="container mx-auto px-4 py-20 max-w-6xl">
            <p className="text-xs uppercase tracking-[0.3em] font-black text-purple-400 mb-4 font-mono">
              Austin, Texas · Licensed Investigative Media · 501(c)(3) Nonprofit
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
              Austin&apos;s Licensed<br />
              <span className="text-[#d97706]">Investigative Newsroom.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
              oWire reporters hold Texas PI licenses. The same tools used in licensed investigations,
              surveillance, skip tracing, background research, are applied to the stories we report
              and publish.
            </p>
            <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
              We are a 501(c)(3) nonprofit news outlet. The PI license is not the product,
              it is the credential that enables a deeper, more rigorous form of journalism
              than most outlets can legally perform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/service/tip-the-newsroom"
                className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Tip the Newsroom
              </Link>
              <Link
                href="/news"
                className="bg-[#d97706] hover:bg-[#f59e0b] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Read the News
              </Link>
              <Link
                href="/service"
                className="border border-white/30 hover:border-white text-gray-300 hover:text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                All PI Services
              </Link>
            </div>
          </div>
        </section>

        {/* CREDENTIALS STRIP */}
        <section className="bg-[#1c1c1e] border-b border-white/10 py-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CREDENTIALS.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-sm font-black text-white">{value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TWO MISSIONS */}
        <section className="py-20 bg-[#121212] border-t border-white/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-gray-500 mb-3 font-mono">
                What We Do
              </p>
              <h2 className="text-4xl font-black text-white mb-4">Two Missions. One Standard.</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A PI agency that is also a newsroom. We investigate for private clients and publish
                for the public. The same rigor, documentation, and accountability applied to both.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* PI SIDE */}
              <div className="border border-purple-500/30 rounded-2xl p-8 bg-gradient-to-br from-[#2d1a4a]/40 to-[#1c1c1e]">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-xs uppercase tracking-[0.3em] font-black text-purple-400 mb-2 font-mono">Private Clients</p>
                <h3 className="text-2xl font-black text-white mb-4">Licensed PI Agency</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Surveillance, infidelity investigations, missing persons, background checks, skip
                  tracing, child custody, corporate investigations, and digital forensics. All case
                  work is private, confidential, and delivered directly to you. Nothing is published
                  without your explicit consent.
                </p>
                <ul className="space-y-2 mb-8">
                  {['Licensed under Texas Occupations Code Chapter 1702', 'Court-admissible documentation on every case', 'Free initial consultation, no commitment required', 'Travis County and Central Texas coverage'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-purple-400 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/get-help" className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Start a Consultation
                </Link>
              </div>
              {/* NEWS SIDE */}
              <div className="border border-amber-500/30 rounded-2xl p-8 bg-gradient-to-br from-[#3d2b00]/40 to-[#1c1c1e]">
                <div className="text-4xl mb-4">📰</div>
                <p className="text-xs uppercase tracking-[0.3em] font-black text-[#d97706] mb-2 font-mono">Public Reporting</p>
                <h3 className="text-2xl font-black text-white mb-4">Sports & Culture News Network</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A network of independent reporters covering supercars, Premier League, MLB,
                  MLS, golf, the 2026 World Cup, and creator culture. Published daily to
                  objectivewire.org. Editorially independent, primary sources only, named bylines on
                  every story.
                </p>
                <ul className="space-y-2 mb-8">
                  {['Supercars, EVs, and auto news from Conan D. Boyle', 'Premier League, MLS, MLB, golf, and World Cup', 'YouTube, TikTok, and creator economy coverage', 'Verified, sourced, bylined journalism'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-[#d97706] mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <Link href="/news" className="inline-block bg-[#d97706] hover:bg-[#f59e0b] text-white font-bold px-6 py-3 rounded-lg transition-colors">
                  Read the News
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-[#121212]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-purple-400 mb-3 font-mono">
                Private Investigative Services
              </p>
              <h2 className="text-4xl font-black text-white mb-4">
                What We Investigate
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                All cases are private and confidential. Evidence is delivered directly to you
                and never published without your explicit consent.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group border border-white/10 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-900/20 transition-all bg-[#1c1c1e]"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-base font-black text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{s.desc}</p>
                  <span className="text-purple-400 text-sm font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS NETWORK */}
        <section className="py-20 bg-[#121212] border-t border-white/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] font-black text-[#d97706] mb-3 font-mono">
                Sports &amp; Culture News Network
              </p>
              <h2 className="text-4xl font-black text-white mb-4">
                Independent Reporters. Daily Coverage.
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Alongside the PI agency, oWire runs a sports and culture news desk. Named reporters.
                Primary sources. Verified facts. Published to objectivewire.org every day across these beats.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {NEWS_BEATS.map((b) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className="group border border-white/10 rounded-xl p-6 hover:border-[#d97706] hover:shadow-lg hover:shadow-amber-900/20 transition-all bg-[#1c1c1e]"
                >
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="text-base font-black text-white mb-2 group-hover:text-[#d97706] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{b.desc}</p>
                  <span className="text-[#d97706] text-sm font-semibold group-hover:underline">
                    Read coverage →
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
              <Link href="/news" className="text-white font-black hover:text-[#d97706] transition-colors underline text-sm">
                All News →
              </Link>
              <Link href="/cars" className="text-gray-400 hover:text-white transition-colors underline text-sm">
                Cars Hub →
              </Link>
              <Link href="/creator" className="text-gray-400 hover:text-white transition-colors underline text-sm">
                Creator Hub →
              </Link>
              <Link href="/soccer" className="text-gray-400 hover:text-white transition-colors underline text-sm">
                Soccer Hub →
              </Link>
              <Link href="/world-cup" className="text-gray-400 hover:text-white transition-colors underline text-sm">
                World Cup →
              </Link>
            </div>
          </div>
        </section>

        {/* LICENSING DETAIL */}
        <section className="py-20 bg-[#1c1c1e] border-t border-white/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-black text-[#d97706] mb-3 font-mono">
                  Licensing and Compliance
                </p>
                <h2 className="text-4xl font-black text-white mb-6">
                  Licensed Under Texas Law
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Private investigation in Texas is regulated under the Texas Occupations Code,
                  Chapter 1702, enforced by the Texas Department of Public Safety. All field work
                  is conducted by or under the direct supervision of a licensed Texas PI.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  As a 501(c)(3) nonprofit, Objective Wire operates without profit motive or
                  shareholder pressure. Case acceptance is based on merit and public interest,
                  not fee size.
                </p>
                <Link
                  href="/about"
                  className="text-purple-400 hover:text-purple-300 underline font-semibold"
                >
                  About Objective Wire →
                </Link>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '✅', text: 'Licensed under Texas Occupations Code Chapter 1702' },
                  { icon: '✅', text: 'All evidence delivered with chain-of-custody documentation' },
                  { icon: '✅', text: '501(c)(3) nonprofit — no profit motive, no shareholder pressure' },
                  { icon: '✅', text: 'Free initial consultation, no commitment required' },
                  { icon: '✅', text: 'Client findings are confidential — never published without consent' },
                  { icon: '✅', text: 'Coordinated directly with attorneys on litigation support cases' },
                  { icon: '✅', text: 'Digital forensics expertise alongside traditional field work' },
                  { icon: '✅', text: 'Timestamped, geotagged photo and video documentation standard' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{icon}</span>
                    <p className="text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COVERAGE AREA */}
        <section className="py-16 bg-[#121212] border-t border-white/10">
          <div className="container mx-auto px-4 max-w-6xl">
            <p className="text-xs uppercase tracking-[0.3em] font-black text-[#d97706] mb-3 font-mono">
              Service Area
            </p>
            <h2 className="text-3xl font-black text-white mb-4">Austin and Central Texas</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">
              Primary field coverage across Travis County and greater Central Texas. Out-of-area
              cases handled with travel fees disclosed upfront at consultation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                'Austin', 'Travis County', 'Round Rock', 'Cedar Park',
                'Georgetown', 'Pflugerville', 'Leander', 'San Marcos',
                'Kyle', 'Buda', 'Bastrop County', 'Williamson County',
              ].map((city) => (
                <div key={city} className="flex items-center gap-2 text-sm text-gray-300 bg-[#1c1c1e] rounded-lg px-3 py-2 border border-white/10">
                  <span className="text-[#d97706]">📍</span> {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-[#2d1a4a] to-[#3d2b00]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-black mb-4 text-white">Start Your Case Today</h2>
            <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
              Free initial consultation. No commitment. We will tell you honestly what evidence
              is achievable, what legal parameters apply, and what it costs — before any work begins.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-help"
                className="bg-[#d97706] hover:bg-[#f59e0b] text-white font-black px-10 py-4 rounded-lg transition-colors text-lg"
              >
                Free Consultation
              </Link>
              <Link
                href="/service"
                className="border-2 border-white/40 text-white hover:border-white font-bold px-10 py-4 rounded-lg transition-colors text-lg"
              >
                View All Services
              </Link>
            </div>
            <p className="mt-8 text-purple-300 text-sm">
              <a href="tel:+15754950323" className="text-purple-300 hover:text-white underline">
                (575) 495-0323
              </a>
              {' '}· Austin, Texas · Free, confidential initial consultation
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
