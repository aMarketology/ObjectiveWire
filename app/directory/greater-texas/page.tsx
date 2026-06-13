import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/greater-texas';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Greater Texas Directory | Statewide Agencies & Entities',
  description:
    'Directory of Texas statewide government agencies, officials, organizations, and companies of public interest. Texas AG, DPS, HHSC, TxDOT, and more. Documented by Objective Wire.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Greater Texas Directory | Statewide Agencies & Entities',
    description: 'Statewide Texas government agencies, officials, and companies of public interest.',
    type: 'website', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',          item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Directory',     item: `${SITE_URL}/directory` },
        { '@type': 'ListItem', position: 3, name: 'Greater Texas', item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Greater Texas Directory | Objective Wire',
      description: 'Statewide Texas government agencies, officials, and companies of public interest.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
    },
  ],
};

const PRIORITY_ENTITIES = [
  {
    name: 'Texas Health and Human Services Commission (HHSC)',
    category: 'Government',
    why: 'Administers $45B+ Medicaid program, major IT and consulting contracts, documented oversight controversies.',
    icon: '🏥',
  },
  {
    name: 'Texas Department of Public Safety (DPS)',
    category: 'Government',
    why: 'Statewide law enforcement, border operations, procurement, and use-of-force accountability.',
    icon: '🚔',
  },
  {
    name: 'Texas General Land Office (GLO)',
    category: 'Government',
    why: 'State land management, disaster recovery funds, offshore energy leasing — recurring public scrutiny.',
    icon: '🗺️',
  },
  {
    name: 'Texas Department of Transportation (TxDOT)',
    category: 'Government',
    why: 'Largest state agency by capital spend; toll roads, contracts, and procurement accountability.',
    icon: '🛣️',
  },
  {
    name: 'Texas Attorney General\'s Office',
    category: 'Government',
    why: 'State law enforcement, consumer protection, TPIA enforcement, public integrity investigations.',
    icon: '⚖️',
  },
  {
    name: 'Texas Education Agency (TEA)',
    category: 'Government',
    why: 'K-12 education oversight, standardized testing contracts, charter school accountability.',
    icon: '📚',
  },
  {
    name: 'Conduent — TxTag Operations',
    category: 'Companies',
    why: 'Operates Texas toll collection under TxDOT contract. Documented service failures and customer complaints.',
    icon: '🏗️',
  },
  {
    name: 'Tyler Technologies — Texas.gov (NIC)',
    category: 'Companies',
    why: 'Operates Texas.gov digital services portal under state contract. Fee model and contract terms are public interest.',
    icon: '💻',
  },
];

export default function GreaterTexasDirectoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-600">
            <li><Link href="/" className="hover:text-[#c45c2a] transition-colors">Home</Link></li>
            <li className="text-gray-700">/</li>
            <li><Link href="/directory" className="hover:text-[#c45c2a] transition-colors">Directory</Link></li>
            <li className="text-gray-700">/</li>
            <li className="text-gray-400">Greater Texas</li>
          </ol>
        </nav>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c45c2a]/15 border border-[#c45c2a]/25 text-[#c45c2a] text-[11px] font-black uppercase tracking-[.16em] mb-5">
            <span>⭐</span> Greater Texas
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Greater Texas Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-6">
            Statewide Texas agencies, departments, officials, and companies of public interest.
            These entities operate across Texas and are covered by Objective Wire as part of
            its statewide investigative mandate.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-950/30 border border-amber-700/30">
            <span className="text-amber-400 text-sm">🚧</span>
            <p className="text-sm text-amber-300/80">
              Statewide profiles are in active development. Priority queue below.
            </p>
          </div>
        </header>

        {/* Priority queue */}
        <section className="mb-12">
          <h2 className="text-[11px] font-black uppercase tracking-[.16em] text-gray-500 mb-5">
            Priority Entity Queue — Building Next
          </h2>
          <div className="space-y-3">
            {PRIORITY_ENTITIES.map((entity, i) => (
              <div key={entity.name} className="flex items-start gap-4 p-4 rounded-xl bg-[#111111] border border-white/5">
                <span className="text-[11px] font-mono text-gray-700 tabular-nums w-5 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xl shrink-0">{entity.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="text-sm font-black text-gray-200">{entity.name}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/5 text-gray-600 border border-white/5">
                      {entity.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-snug">{entity.why}</p>
                </div>
                <span className="text-[10px] text-amber-600 uppercase tracking-widest shrink-0 mt-0.5">Queued</span>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-[#c45c2a]/20 bg-[#111111] p-6 mb-8">
          <p className="text-sm font-black text-white mb-2">Covering Statewide Texas</p>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Objective Wire documents Texas state agencies, contractors, and officials as part of its
            statewide investigative mandate. If you have documents or tips about any statewide entity,
            contact us under full source protection.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/service/tip-the-newsroom" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#c45c2a] hover:text-[#d4723e] transition-colors">
              Tip the Newsroom →
            </Link>
            <Link href="/directory/austin/companies/tyler-technologies" className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-[#c45c2a] underline transition-colors">
              Tyler Technologies profile →
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/8 text-xs text-gray-600">
          <Link href="/directory" className="hover:text-[#c45c2a] underline">← Back to full directory</Link>
          <span className="text-gray-700">|</span>
          <Link href="/local/greater-texas" className="hover:text-[#c45c2a] underline">Greater Texas news coverage</Link>
        </div>

      </div>
    </div>
  );
}
