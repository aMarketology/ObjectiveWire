import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
import AuthorSchema from '@/components/authors/AuthorSchema';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alfonso M. | Lead Investigator, Objective Wire Texas',
  description:
    'Alfonso M. is Objective Wire\'s lead investigator covering Texas white-collar crime, federal fraud prosecutions, public corruption, elder fraud, Ponzi schemes, and bribery. Based in Texas.',
  alternates: { canonical: 'https://www.objectivewire.org/authors/alfansa' },
  openGraph: {
    title: 'Alfonso M. | Lead Investigator, Objective Wire Texas',
    description:
      'Lead investigator at Objective Wire. Federal fraud, Ponzi schemes, bribery, elder fraud, and public corruption across Texas.',
    url: 'https://www.objectivewire.org/authors/alfansa',
    siteName: 'Objective Wire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Alfonso M. | Lead Investigator, Objective Wire',
    description: 'Federal fraud, Ponzi schemes, bribery, and public corruption across Texas.',
  },
};

const BEATS = [
  'Federal Fraud', 'White-Collar Crime', 'Public Corruption',
  'Elder Fraud', 'Ponzi Schemes', 'Bribery', 'Money Laundering',
  'Texas Courts', 'Financial Crimes',
];

const HIGHLIGHTS = [
  { stat: '3+', label: 'Years Investigating' },
  { stat: '9', label: 'Beats Covered' },
  { stat: '10+', label: 'Published Investigations' },
];

export default function AlfonsaAuthorPage() {
  return (
    <main className="min-h-screen bg-white">
      <AuthorSchema
        name="Alfonso M."
        jobTitle="Lead Investigator"
        description="Alfonso M. is Objective Wire's lead investigator covering federal fraud prosecutions, white-collar crime, Ponzi schemes, bribery, elder fraud, and public corruption across Texas."
        url="https://www.objectivewire.org/authors/alfansa"
        knowsAbout={['Federal Fraud', 'White-Collar Crime', 'Public Corruption', 'Elder Fraud', 'Ponzi Schemes', 'Bribery', 'Money Laundering', 'Texas Courts']}
        location={{ city: 'Austin', region: 'TX' }}
        articleCount={10}
      />

      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-10 pb-14">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-12 font-mono uppercase tracking-widest">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/authors" className="hover:text-gray-300 transition-colors">Authors</Link>
            <span>/</span>
            <span className="text-gray-400">Alfonso M.</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-500 border-2 border-amber-400 rounded-full flex items-center justify-center shrink-0">
              <span className="text-gray-900 font-black text-2xl tracking-tight">AM</span>
            </div>
            {/* Identity */}
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-amber-500 mb-2 font-mono">
                Lead Investigator &middot; Objective Wire Texas
              </p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-3">
                Alfonso M.
              </h1>
              <p className="text-gray-300 text-xl font-medium">Lead Investigator, Texas Desk</p>
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
          <div className="mt-10 border-l-4 border-amber-500 pl-5">
            <p className="text-gray-300 text-lg italic font-light leading-relaxed max-w-2xl">
              &ldquo;Follow the money. The document does not lie.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Detail Strip */}
      <div className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400">
          <span>📍 Texas</span>
          <span>⚖️ White-Collar Crime &amp; Federal Fraud</span>
          <span>🔍 Investigations Desk</span>
          <span>📅 Active Since 2023</span>
          <a
            href="https://www.facebook.com/melissa.alfonso32"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 transition-colors"
          >
            Facebook &rarr;
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
                  <span key={beat} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-100">
                    {beat}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="border border-gray-200 divide-y divide-gray-100">
              {[
                ['Organization', 'Objective Wire'],
                ['Desk', 'Investigations'],
                ['Beat', 'White-Collar Crime'],
                ['Location', 'Texas'],
                ['Joined', '2023'],
              ].map(([label, value]) => (
                <div key={label} className="px-5 py-3 flex justify-between items-baseline gap-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">{label}</p>
                  <p className="text-sm text-gray-700 text-right">{value}</p>
                </div>
              ))}
              <div className="px-5 py-3 flex justify-between items-baseline gap-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 shrink-0">Contact</p>
                <a
                  href="https://www.facebook.com/melissa.alfonso32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 underline text-right"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Editorial */}
            <div className="bg-gray-900 text-white p-6 space-y-3">
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-500">Standards</h2>
              <Link href="/editorial-standards" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Editorial Standards &rarr;
              </Link>
              <Link href="/corrections" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                Corrections Policy &rarr;
              </Link>
              <Link href="/about" className="block text-sm font-semibold hover:text-gray-300 transition-colors">
                About Objective Wire &rarr;
              </Link>
              <Link href="/service/tip-the-newsroom" className="block text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                Submit a Tip &rarr;
              </Link>
            </div>
          </aside>

          {/* Main column */}
          <div className="lg:col-span-8 space-y-12">

            {/* Bio */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b-2 border-black pb-3">
                About Alfonso M.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Alfonso M. is the lead investigator on Objective Wire&rsquo;s Texas Desk, covering
                  federal fraud prosecutions, white-collar crime, public corruption, and financial crimes
                  across Texas. His reporting is grounded in federal court filings, grand jury
                  indictments, plea agreements, and public agency records, with a focus on the
                  financial mechanics behind how organized fraud networks exploit vulnerable
                  populations and public institutions.
                </p>
                <p>
                  Alfonso M.&rsquo;s investigations have documented how Houston jewelry storefronts were
                  used to launder gold stolen through elder fraud networks, the collapse of a
                  $69.5 million real estate Ponzi scheme that defrauded 345 Texas investors, and
                  a bribery operation targeting the Bexar County Sheriff&rsquo;s towing contract
                  that was dismantled after a law enforcement sting. Every investigation is sourced
                  directly from federal docket filings, Department of Justice press releases, and
                  named law enforcement statements.
                </p>
                <p>
                  Alfonso M. applies the same methodology to every story: identify the named actors,
                  establish the timeline from primary documents, quantify the harm with specific
                  dollar amounts and victim counts, and report exactly what the federal charges allege.
                  He does not publish claims that cannot be sourced to a court filing, indictment,
                  or official record.
                </p>
                <p>
                  Tips, document leads, and source contacts can be directed through Objective
                  Wire&rsquo;s{' '}
                  <Link href="/service/tip-the-newsroom" className="text-blue-600 hover:text-blue-800 underline">
                    confidential tip line
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Recent Investigations */}
            <section>
              <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400 mb-5 border-b border-gray-200 pb-3">
                Recent Investigations
              </h2>
              <div className="space-y-4">
                {[
                  {
                    label: 'Houston Jewelers Indicted in Elder Fraud Gold Laundering Scheme',
                    detail: 'Zo Frost and Co. co-owners Zohaib Muhammad and Samir Ali face federal indictment alleging the storefront laundered gold bars sourced from nationwide elder fraud networks.',
                    href: '/blog/houston-zo-frost-jewelers-gold-laundering-elder-fraud',
                    date: 'June 2026',
                  },
                  {
                    label: 'San Antonio CEO Pleads Guilty to $69.5 Million Real Estate Ponzi Scheme',
                    detail: 'Devin Ward Elder defrauded 345 investors across 17 real estate offerings between 2023 and 2025, operating a classic Ponzi structure that collapsed in March 2025.',
                    href: '/blog/san-antonio-dje-texas-ponzi-scheme-69-million',
                    date: 'June 2026',
                  },
                  {
                    label: 'Two Convicted in Bexar County Sheriff Towing Contract Bribery Plot',
                    detail: 'Mission Wrecker owner Muhammad Choudhary offered Sheriff Javier Salazar $30,000 upfront and $25,000 annually to secure the contract. Salazar reported the offer to the FBI immediately.',
                    href: '/blog/bexar-county-towing-bribery-conviction',
                    date: 'June 2026',
                  },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block group border border-gray-200 p-5 hover:border-amber-500 transition-colors">
                    <p className="text-xs font-mono text-amber-600 mb-1">{item.date}</p>
                    <p className="font-black text-gray-900 text-sm mb-1.5 group-hover:underline">{item.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Auto-loading article feed */}
            <section>
              <div className="border-b-2 border-gray-900 pb-3 mb-6">
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">All Published Investigations</p>
              </div>
              <Suspense fallback={
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="h-16 bg-gray-100 animate-pulse rounded" />
                  ))}
                </div>
              }>
                <AuthorArticlesServer authorSlug="alfansa" authorName="Alfonso M." />
              </Suspense>
            </section>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t-2 border-gray-900 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-mono">© 2026 Objective Wire. 501(c)(3) Nonprofit.</p>
          <div className="flex gap-6">
            <Link href="/authors" className="text-xs font-semibold text-amber-600 hover:text-amber-900 transition-colors">&larr; All Authors</Link>
            <Link href="/about" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About</Link>
            <Link href="/editorial-standards" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Standards</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
