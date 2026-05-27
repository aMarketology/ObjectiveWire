import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/blog';

export const metadata: Metadata = {
  title: 'Texas Blog | Objective Wire',
  description:
    'Public-interest reporting on Texas from Objective Wire. Austin city hall, Houston energy sector, Travis County courts, public records, and statewide accountability journalism from our nonprofit investigative team.',
  keywords: [
    'Texas investigative reporting',
    'Austin public records journalism',
    'Houston accountability reporting',
    'Travis County courts',
    'Texas nonprofit journalism',
    'Objective Wire Texas blog',
    'Austin investigative news',
    'Texas public interest reporting',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas Blog | Objective Wire',
    description: 'Public-interest reporting on Texas. Austin, Houston, Greater Texas, courts, and community accountability.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
};

const REGIONS = [
  {
    href: '/local/austin',
    label: 'Austin',
    sub: 'Travis County · City Hall · APD · Courts',
    desc: 'City Hall votes, Travis County court filings, APD accountability, and Austin development. Sourced from public records and FOIA requests.',
  },
  {
    href: '/local/houston',
    label: 'Houston',
    sub: 'Harris County · HPD · Energy Sector · Port',
    desc: 'Harris County courts, HPD conduct, Port of Houston operations, and the energy sector stories that shape Texas politics.',
  },
  {
    href: '/local/greater-texas',
    label: 'Greater Texas',
    sub: 'Statewide · Public Corruption · Workers Comp',
    desc: 'Workers compensation fraud, missing persons patterns, and public corruption investigations across all eight Texas regions.',
  },
];

const BEATS = [
  { label: 'Public Records', desc: 'FOIA requests, open records filings, and document review from Texas agencies.' },
  { label: 'Courts', desc: 'Travis County, Harris County, and federal district court filings across Texas.' },
  { label: 'Missing Persons', desc: 'Pattern reporting on missing persons cases sourced from our investigative field work.' },
  { label: 'Workers Comp Fraud', desc: 'Documented fraud investigations across Texas employers and insurers.' },
  { label: 'Public Corruption', desc: 'Official misconduct, bid rigging, and accountability reporting at all levels of Texas government.' },
  { label: 'Community', desc: 'Local stories that affect neighborhoods and communities across Central Texas.' },
];

export default function TexasBlogPage() {
  return (
    <>
      <div className="h-[3px] bg-gray-900 w-full" />

      <main className="min-h-screen bg-[#f8f7f4]">

        {/* MASTHEAD */}
        <section className="bg-white border-b-2 border-gray-900">
          <div className="container mx-auto px-4 py-16 max-w-6xl">
            <nav className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-6">
              <Link href="/" className="hover:text-gray-700 transition-colors">Objective Wire</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-600">Texas Blog</span>
            </nav>
            <div className="border-l-4 border-amber-500 pl-6">
              <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-amber-600 mb-3 font-mono">
                501(c)(3) Nonprofit · Public-Interest Reporting · Throughout Texas
              </p>
              <h1 className="font-serif text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5 text-gray-900">
                Texas.<br />Investigated &amp; Reported.
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed font-serif">
                Public-interest reporting from the Objective Wire investigative team. Austin, Houston,
                and communities across Texas, sourced from public records, court filings, and
                original field work.
              </p>
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section className="py-16 bg-[#f8f7f4]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2 font-mono">Coverage Regions</p>
              <h2 className="font-serif text-3xl font-black text-gray-900">Where We Report</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REGIONS.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group block bg-white border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all"
                >
                  <div className="h-1 bg-gray-900 group-hover:bg-amber-500 transition-colors" />
                  <div className="p-7">
                    <h3 className="font-serif text-2xl font-black text-gray-900 mb-1 group-hover:text-amber-700 transition-colors">
                      {r.label}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-3">{r.sub}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                    <p className="mt-4 text-xs font-bold text-gray-900 group-hover:underline">Read coverage &rarr;</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BEATS */}
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2 font-mono">Editorial Beats</p>
              <h2 className="font-serif text-3xl font-black text-gray-900">What We Cover</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
              {BEATS.map(({ label, desc }) => (
                <div key={label} className="bg-white p-6">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 mb-2">Beat</p>
                  <h3 className="font-serif text-lg font-black text-gray-900 mb-2">{label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT + TIP CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-500 mb-4 font-mono">About This Publication</p>
                <h2 className="font-serif text-4xl font-black mb-4">
                  Independent. Nonprofit. Statewide.
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Objective Wire is a 501(c)(3) nonprofit incorporated in Wyoming and operating throughout Texas.
                  Our investigative team handles both private cases and public-interest reporting using the same
                  documented, evidence-based methodology.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Primary sources only. Named authors. Public corrections. No paywall.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8">
                <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-500 mb-3 font-mono">Have a Story?</p>
                <h3 className="font-serif text-2xl font-black mb-3">Tip the Newsroom.</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Confidential. Source identity protected. Whistleblowers, public records leaks,
                  and accountability tips reviewed by a named editor within 48 hours.
                </p>
                <Link
                  href="/service/tip-the-newsroom"
                  className="inline-block bg-amber-500 text-gray-950 hover:bg-amber-400 font-black px-8 py-3 transition-colors"
                >
                  Submit a Tip &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
