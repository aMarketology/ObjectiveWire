import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectivewire.com/local/mexico-canada';

export const metadata: Metadata = {
  title: 'Mexico + Canada News | Cross-Border Coverage | oWire',
  description:
    'Cross-border investigative reporting from Mexico and Canada. Public records, accountability journalism, and stories from North America.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Mexico + Canada News | oWire',
    description: 'Cross-border investigative reporting from Mexico and Canada.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mexico + Canada News | oWire',
    description: 'Cross-border investigative news from Mexico and Canada.',
  },
};

export default function MexicoCanadaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-4 font-mono">
            Local Coverage · Mexico + Canada
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
            Mexico + Canada<br />
            <span className="text-blue-400">Cross-Border Coverage.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Investigative reporting from Mexico and Canada. Cross-border accountability journalism,
            public records, and North American stories that matter.
          </p>
          <Link href="/local" className="text-blue-400 hover:text-blue-300 underline text-sm font-semibold">
            ← All Local Coverage
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-gray-500 dark:text-gray-400">Mexico and Canada stories coming soon.</p>
        </div>
      </section>
    </main>
  );
}
