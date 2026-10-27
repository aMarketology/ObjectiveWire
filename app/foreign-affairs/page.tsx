import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.org/foreign-affairs';

export const metadata: Metadata = {
  title: 'Foreign Affairs | World News and Analysis | oWire',
  description:
    'Foreign affairs coverage from Objective Wire. World elections, international politics, and global accountability reporting.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Foreign Affairs | oWire',
    description: 'World news, elections, and international affairs coverage from Objective Wire.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire',
  },
};

export default function ForeignAffairsHubPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] font-black text-green-400 mb-4 font-mono">
            World Coverage
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
            Foreign Affairs<br />
            <span className="text-green-400">Global Accountability.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Reporting on world elections, international politics, and cross-border
            investigations. Primary sources, documented claims, no noise.
          </p>
          <Link href="/local" className="text-green-400 hover:text-green-300 underline text-sm font-semibold">
            ← All Coverage
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/foreign-affairs/brazil/election-26"
              className="group block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 hover:border-green-600 transition-colors"
            >
              <span className="inline-block text-[9px] font-black tracking-[0.2em] uppercase text-white bg-green-600 px-2 py-0.5 mb-3">
                Brazil
              </span>
              <h2 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-green-700 transition-colors mb-2">
                Flávio Bolsonaro Claims Brazilian Election Was Stolen After Historic Lula Comeback
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Lula won the 2026 runoff 51.8% to 48.2%. Bolsonaro refuses to concede, citing a two-hour voting extension both campaigns requested.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}