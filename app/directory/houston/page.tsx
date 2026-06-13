import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/directory/houston';
const SITE_URL = 'https://www.objectivewire.org';

export const metadata: Metadata = {
  title: 'Houston Directory | Harris County Entities & Agencies',
  description:
    'Directory of Houston and Harris County government agencies, officials, organizations, and companies of public interest. Documented by Objective Wire investigators.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston Directory | Harris County Entities',
    description: 'Documented profiles of Houston and Harris County entities of public interest.',
    type: 'website', url: PAGE_URL, siteName: 'Objective Wire',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Directory', item: `${SITE_URL}/directory` },
        { '@type': 'ListItem', position: 3, name: 'Houston',   item: PAGE_URL },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Houston Directory | Objective Wire',
      description: 'Harris County and Houston entity directory. Coming soon.',
      url: PAGE_URL,
      publisher: { '@type': 'NewsMediaOrganization', name: 'Objective Wire', url: SITE_URL },
    },
  ],
};

const COMING_TYPES = [
  { label: 'Government', icon: '⚖️', description: 'Harris County DA, HPD, Houston City Council, Port of Houston Authority, Harris County Flood Control District.' },
  { label: 'Officials', icon: '👤', description: 'Elected and appointed Harris County and City of Houston officials.' },
  { label: 'Organizations', icon: '🏢', description: 'Houston nonprofits, civic associations, and advocacy organizations.' },
  { label: 'Companies', icon: '🏗️', description: 'Houston energy sector, petrochemical contractors, government consulting firms with Harris County contracts.' },
];

export default function HoustonDirectoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-1.5 text-xs text-gray-600">
            <li><Link href="/" className="hover:text-[#c45c2a] transition-colors">Home</Link></li>
            <li className="text-gray-700">/</li>
            <li><Link href="/directory" className="hover:text-[#c45c2a] transition-colors">Directory</Link></li>
            <li className="text-gray-700">/</li>
            <li className="text-gray-400">Houston</li>
          </ol>
        </nav>

        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c45c2a]/15 border border-[#c45c2a]/25 text-[#c45c2a] text-[11px] font-black uppercase tracking-[.16em] mb-5">
            <span>🌃</span> Houston, Texas
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Houston Directory
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-6">
            Documented profiles of entities in Houston and Harris County. Government agencies,
            elected officials, organizations, and companies covered by Objective Wire investigators.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-950/30 border border-amber-700/30">
            <span className="text-amber-400 text-sm">🚧</span>
            <p className="text-sm text-amber-300/80">
              Houston profiles are in development. Building now.
            </p>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-[11px] font-black uppercase tracking-[.16em] text-gray-500 mb-5">Coming Entity Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMING_TYPES.map((type) => (
              <div key={type.label} className="flex items-start gap-4 p-5 rounded-xl bg-[#111111] border border-white/5 opacity-75">
                <span className="text-2xl shrink-0">{type.icon}</span>
                <div>
                  <p className="text-sm font-black text-gray-300 mb-1">{type.label}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-xl border border-[#c45c2a]/20 bg-[#111111] p-6 mb-8">
          <p className="text-sm font-black text-white mb-2">Know Something About a Houston Entity?</p>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Objective Wire covers Harris County and Houston. If you have documents, tips, or records
            about a Houston government agency, contractor, or official, reach out under source protection.
          </p>
          <Link href="/service/tip-the-newsroom" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#c45c2a] hover:text-[#d4723e] transition-colors">
            Tip the Newsroom →
          </Link>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/8">
          <Link href="/directory" className="text-xs text-gray-500 hover:text-[#c45c2a] underline">← Back to full directory</Link>
          <span className="text-gray-700">|</span>
          <Link href="/local/houston" className="text-xs text-gray-500 hover:text-[#c45c2a] underline">Houston news coverage</Link>
        </div>

      </div>
    </div>
  );
}
