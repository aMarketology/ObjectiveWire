import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllEntries } from '@/lib/registry-service';
import type { ContentEntry } from '@/lib/content-registry';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/blog';

export const metadata: Metadata = {
  title: 'Texas Investigations | Objective Wire',
  description:
    'Public-interest investigative reporting from Objective Wire. Austin city hall, Houston courts, Travis County public records, workers comp fraud, and statewide accountability journalism from a 501(c)(3) nonprofit newsroom.',
  keywords: [
    'Texas investigative reporting',
    'Austin public records journalism',
    'Houston accountability reporting',
    'Travis County courts',
    'Texas nonprofit journalism',
    'Objective Wire Texas blog',
    'Austin investigative news',
    'Texas public interest reporting',
    'workers comp fraud Texas',
    'Texas public corruption',
    'APD accountability',
    'Harris County courts',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas Investigations | Objective Wire',
    description:
      'Public-interest reporting on Texas. Austin, Houston, Greater Texas, courts, public records, and accountability journalism.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Investigations | Objective Wire',
    description: 'Nonprofit investigative reporting across Texas, sourced from public records and court filings.',
  },
};

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function TexasBlogPage() {
  const all = await getAllEntries();
  const articles: ContentEntry[] = all.filter(
    (e) => e.slug.startsWith('/blog/') && e.slug.split('/').filter(Boolean).length >= 2
  );

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
              <span className="text-gray-600">Texas Investigations</span>
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

        {/* LATEST INVESTIGATIONS FEED */}
        <section className="py-16 bg-[#f8f7f4]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2 font-mono">
                  Latest Investigations
                </p>
                <h2 className="font-serif text-3xl font-black text-gray-900">Recently Published</h2>
              </div>
              {articles.length > 6 && (
                <Link
                  href="/blog/archive"
                  className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 hover:underline"
                >
                  All stories &rarr;
                </Link>
              )}
            </div>

            {articles.length === 0 ? (
              <div className="border-2 border-dashed border-gray-300 bg-white p-14 text-center">
                <div className="inline-block bg-amber-100 border border-amber-300 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-700 mb-5">
                  Newsroom
                </div>
                <p className="font-serif text-2xl font-black text-gray-900 mb-3">
                  First investigations coming soon.
                </p>
                <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                  The Objective Wire investigative team is preparing its first batch of Texas reporting.
                  Submit a tip below or check back shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.slice(0, 9).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* REGIONS */}
        <section className="py-16 bg-white border-y border-gray-200">
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
                  className="group block bg-[#f8f7f4] border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all"
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
        <section className="py-16 bg-[#f8f7f4]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2 font-mono">Editorial Beats</p>
              <h2 className="font-serif text-3xl font-black text-gray-900">What We Cover</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
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
                <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-500 mb-4 font-mono">
                  About This Publication
                </p>
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
                <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-500 mb-3 font-mono">
                  Have a Story?
                </p>
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

// ---------------------------------------------------------------------------
// Article card sub-component
// ---------------------------------------------------------------------------

function ArticleCard({ article }: { article: ContentEntry }) {
  const date = article.publishDate
    ? new Date(article.publishDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <Link
      href={article.slug}
      className="group block bg-white border border-gray-200 hover:border-amber-500 hover:shadow-md transition-all"
    >
      <div className="h-[3px] bg-gray-200 group-hover:bg-amber-500 transition-colors" />
      <div className="p-6">
        {article.category && (
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-amber-600 mb-2">
            {article.category}
          </p>
        )}
        <h3 className="font-serif text-lg font-black text-gray-900 leading-snug mb-2 group-hover:text-amber-800 transition-colors line-clamp-3">
          {article.title}
        </h3>
        {article.description && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
            {article.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          {date && <span className="text-[10px] font-mono text-gray-400">{date}</span>}
          <span className="text-xs font-bold text-gray-400 group-hover:text-amber-600 transition-colors">
            Read &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
