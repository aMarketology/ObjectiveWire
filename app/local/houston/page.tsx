import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.owire.org/local/houston';

export const metadata: Metadata = {
  title: 'Houston News | Investigative Reporting Houston TX | oWire',
  description:
    'Investigative news and public records coverage from Houston, Texas. Harris County, HPD, energy sector, local politics, and community stories.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Houston News | oWire',
    description: 'Investigative news and public records coverage from Houston, Texas.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston News | oWire',
    description: 'Investigative news from Houston, TX.',
  },
};

export default function HoustonPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] font-black text-blue-400 mb-4 font-mono">
            Local Coverage · Houston, Texas
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 max-w-4xl">
            Houston<br />
            <span className="text-blue-400">News &amp; Investigations.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Investigative reporting on Houston and Harris County. Public records, HPD,
            energy sector accountability, local politics, and community journalism.
          </p>
          <Link href="/local" className="text-blue-400 hover:text-blue-300 underline text-sm font-semibold">
            ← All Local Coverage
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="text-gray-500 dark:text-gray-400">Houston stories coming soon.</p>
        </div>
      </section>
    </main>
  );
}
