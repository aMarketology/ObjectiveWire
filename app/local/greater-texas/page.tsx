import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.owire.org/local/greater-texas';

export const metadata: Metadata = {
  title: 'Greater Texas News | Statewide Coverage | oWire',
  description:
    'Statewide Texas news and investigative reporting. Coverage from the Panhandle to the Valley, including Dallas, San Antonio, El Paso, Lubbock, and beyond.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Greater Texas News | oWire',
    description: 'Statewide Texas news and investigative reporting.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greater Texas News | oWire',
    description: 'Statewide Texas investigative news coverage.',
  },
};

export default function GreaterTexasPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-4 font-mono">
            Local Coverage · Greater Texas
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
            Greater Texas<br />
            <span className="text-blue-400">Statewide Coverage.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Investigative reporting across the state of Texas. From the Panhandle to the Rio Grande Valley,
            public records and accountability journalism statewide.
          </p>
          <Link href="/local" className="text-blue-400 hover:text-blue-300 underline text-sm font-semibold">
            ← All Local Coverage
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-gray-500 dark:text-gray-400">Greater Texas stories coming soon.</p>
        </div>
      </section>
    </main>
  );
}
