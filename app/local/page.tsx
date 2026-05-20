import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.owire.org/local';

export const metadata: Metadata = {
  title: 'Local News | Austin, Houston, Texas, US, Mexico & Canada | oWire',
  description:
    'Local news coverage from Austin, Houston, Greater Texas, and North America. Investigative reporting on the stories that matter in your community.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Local News | Austin, Houston, Texas & North America | oWire',
    description: 'Local investigative news from Austin, Houston, Greater Texas, and beyond.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local News | oWire',
    description: 'Local investigative news from Austin, Houston, Texas, and North America.',
  },
};

const LOCAL_HUBS = [
  {
    href: '/local/austin',
    label: 'Austin',
    icon: '🏙️',
    desc: 'News, investigations, and public records coverage from Austin and Travis County.',
  },
  {
    href: '/local/houston',
    label: 'Houston',
    icon: '🛢️',
    desc: 'Breaking news and investigative reporting from Houston and Harris County.',
  },
  {
    href: '/local/greater-texas',
    label: 'Greater Texas',
    icon: '🤠',
    desc: 'Statewide Texas coverage from the Panhandle to the Valley.',
  },
  {
    href: '/local/us-news',
    label: 'Local US News',
    icon: '🇺🇸',
    desc: 'Domestic news coverage from across the United States.',
  },
  {
    href: '/local/mexico-canada',
    label: 'Mexico + Canada',
    icon: '🌎',
    desc: 'Cross-border reporting from Mexico and Canada.',
  },
];

export default function LocalHubPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">

      {/* HERO */}
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-4 font-mono">
            Local Coverage · Austin · Texas · North America
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
            Local News<br />
            <span className="text-blue-400">Where It Happens.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Investigative reporting on Austin, Houston, Greater Texas, and beyond. Primary sources.
            Public records. Named authors. No aggregation.
          </p>
        </div>
      </section>

      {/* HUB GRID */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_HUBS.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-900"
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <h2 className="text-lg font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {h.label}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{h.desc}</p>
                <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                  Read coverage →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
