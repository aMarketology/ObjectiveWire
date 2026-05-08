import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.owire.org/about';

export const metadata: Metadata = {
  title: 'About oWire | Ownership, Mission, Team',
  description:
    'oWire is an independent digital newsroom covering Creators, Cars, and Culture. Founded and owned by Conan D. Boyle. No outside investors. No sponsored content.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'About oWire | Ownership, Mission, Team',
    description: 'Independent newsroom covering Creators, Cars, and Culture. Owned by Conan D. Boyle.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'oWire',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About oWire | Ownership, Mission, Team',
    description: 'Independent newsroom covering Creators, Cars, and Culture. Owned by Conan D. Boyle.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 pt-4 max-w-3xl">
        <Breadcrumb
          items={[
            { name: 'Home', item: '/' },
            { name: 'About', item: '/about' },
          ]}
        />
      </div>

      <article className="container mx-auto px-4 max-w-3xl pb-20 pt-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 mb-3 font-mono">
          Ownership &amp; Mission
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          About oWire
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          oWire is an independent digital newsroom covering Creators, Cars, and Culture. We publish
          verified, source-cited reporting on the people, vehicles, and moments that define what
          everyone is watching right now.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">

          <h2>What oWire covers</h2>
          <p>
            oWire focuses on three beats and nothing outside them:
          </p>
          <ul>
            <li>
              <strong>Creators</strong> — YouTube, TikTok, OnlyFans, brand deals, viral moments,
              influencer profiles, and creator economy news.
            </li>
            <li>
              <strong>Cars</strong> — Supercars, hypercars, EVs, auto news, car reviews, and motorsport.
            </li>
            <li>
              <strong>Culture &amp; Sports</strong> — World Cup, Premier League, MLS, MLB, golf, and
              the pop culture moments tied to these spaces.
            </li>
          </ul>
          <p>
            Topical depth beats breadth. Every article is written for a specific search intent, sourced
            to primary material, and structured so that the key fact is in the first sentence.
          </p>

          <h2>Ownership</h2>
          <p>
            oWire is founded and owned by <strong>Conan D. Boyle</strong>. There are no outside
            shareholders, parent companies, venture investors, or holding entities. Editorial decisions
            are made by the named editorial team, not by advertisers or investors, because there are
            none.
          </p>
          <p>
            Conan D. Boyle is the editor-in-chief and has final say on all editorial and publishing
            decisions. His author profile is public at{' '}
            <Link href="/authors/conan-boyle" className="text-blue-600 hover:text-blue-800 underline">
              owire.org/authors/conan-boyle
            </Link>
            .
          </p>

          <h2>Funding</h2>
          <p>
            oWire is self-funded. We do not accept:
          </p>
          <ul>
            <li>Display advertising or programmatic ad networks</li>
            <li>Sponsored content, native ads, or paid placements</li>
            <li>Affiliate commissions tied to coverage decisions</li>
            <li>Political donations or PAC funding</li>
            <li>Brand partnership deals that influence editorial</li>
          </ul>
          <p>
            If our funding model ever changes, we will disclose it on this page before the change takes
            effect.
          </p>

          <h2>The editorial team</h2>
          <p>
            Every article published on oWire carries a named byline. Our current writing staff:
          </p>
          <ul>
            <li>
              <Link href="/authors/conan-boyle" className="text-blue-600 hover:text-blue-800 underline">
                Conan D. Boyle
              </Link>
              {' '}— Founder, Editor-in-Chief. Covers Cars, Culture, and editorial strategy.
            </li>
            <li>
              <Link href="/authors/jack-sterling" className="text-blue-600 hover:text-blue-800 underline">
                Jack Sterling
              </Link>
              {' '}— Staff Writer. Covers Creators, YouTube, and influencer economy news.
            </li>
            <li>
              <Link href="/authors/jack-brennan" className="text-blue-600 hover:text-blue-800 underline">
                Jack Brennan
              </Link>
              {' '}— Staff Writer. Covers Sports, World Cup, and culture news.
            </li>
          </ul>
          <p>
            Full bios, contact paths, and article archives for each writer are on our{' '}
            <Link href="/authors" className="text-blue-600 hover:text-blue-800 underline">
              authors page
            </Link>
            .
          </p>

          <h2>Our standards</h2>
          <p>
            oWire operates under a strict editorial code: accuracy over speed, primary sources only,
            no anonymous claims without corroboration, and public corrections for every error.
          </p>
          <ul>
            <li>
              <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">
                Editorial Standards
              </Link>
            </li>
            <li>
              <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">
                Corrections Policy
              </Link>
            </li>
          </ul>

          <h2>AI use disclosure</h2>
          <p>
            AI tools are used for research assistance, data lookup, and code. AI does not write
            published article copy, generate quotes, or fabricate sources. Every published sentence
            is written or edited by a named human writer who is accountable for it.
          </p>

          <h2>Contact</h2>
          <p>
            Editorial:{' '}
            <a href="mailto:editorial@owire.org" className="text-blue-600 hover:text-blue-800 underline">
              editorial@owire.org
            </a>
            <br />
            Corrections and tips:{' '}
            <a href="mailto:corrections@owire.org" className="text-blue-600 hover:text-blue-800 underline">
              corrections@owire.org
            </a>
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: May 8, 2026. Material changes to ownership or funding are committed to the
            public GitHub repository and dated in the change log.
          </p>
        </div>
      </article>
    </main>
  );
}
