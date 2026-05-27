import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectivewire.org/local/us-news';

export const metadata: Metadata = {
  title: 'Local US News | Domestic Investigative Coverage | oWire',
  description:
    'Investigative news from across the United States. Public records, accountability journalism, and domestic stories that matter at the local level.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Local US News | oWire',
    description: 'Investigative news from across the United States.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local US News | oWire',
    description: 'Domestic investigative news coverage from oWire.',
  },
};

export default function USNewsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-4 font-mono">
            Local Coverage · United States
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
            Local US News<br />
            <span className="text-blue-400">Domestic Coverage.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Investigative reporting on domestic stories from across the United States.
            Public records, accountability journalism, and local impact coverage.
          </p>
          <Link href="/local" className="text-blue-400 hover:text-blue-300 underline text-sm font-semibold">
            ← All Local Coverage
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-gray-500 dark:text-gray-400">Local US stories coming soon.</p>
        </div>
      </section>
    </main>
  );
}
