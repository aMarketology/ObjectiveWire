import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

export const dynamic = 'force-static';
export const revalidate = false;

const PAGE_URL = 'https://www.objectwire.org/about';

export const metadata: Metadata = {
  title: 'About Objective Wire | Ownership, Mission, Team',
  description:
    'Objective Wire is an independent investigative journalism and private detective agency based in Austin, Texas. Founded by Conan D. Boyle. No outside investors. No sponsored content.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'About Objective Wire | Ownership, Mission, Team',
    description: 'Investigative journalism and private detective agency based in Austin, Texas. Owned by Conan D. Boyle.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    section: 'About',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Objective Wire | Ownership, Mission, Team',
    description: 'Investigative journalism and private detective agency based in Austin, Texas. Owned by Conan D. Boyle.',
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
          About Objective Wire
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          Objective Wire is an independent investigative journalism and private detective agency based in Austin, Texas. We publish
          verified, source-cited reporting on creators, cars, sports, and culture. We uncover the truth.
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">

          <h2>What Objective Wire covers</h2>
          <p>
            Objective Wire focuses on three beats and nothing outside them:
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
            Objective Wire is founded and owned by <strong>Conan D. Boyle</strong>. There are no outside
            shareholders, parent companies, venture investors, or holding entities. Editorial decisions
            are made by the named editorial team, not by advertisers or investors, because there are
            none.
          </p>
          <p>
            Conan D. Boyle is the editor-in-chief and has final say on all editorial and publishing
            decisions. His author profile is public at{' '}
            <Link href="/authors/conan-boyle" className="text-blue-600 hover:text-blue-800 underline">
              objectwire.org/authors/conan-boyle
            </Link>
            .
          </p>

          <h2>Funding</h2>
          <p>
            Objective Wire is self-funded. We do not accept:
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
            Every article published on Objective Wire carries a named byline. Our current writing staff:
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

          <h3>Volunteer contributor network</h3>
          <p>
            Beyond the core staff, Objective Wire publishes work from a network of volunteer
            contributors across all four content pillars. Volunteer writers are not paid but receive
            a named byline, a public author profile, and full editorial credit on every piece they
            publish. All contributor work is held to the same sourcing and accuracy standards as
            staff writing. No exceptions.
          </p>
          <p>
            If you follow a beat closely, know a story that deserves coverage, or want to build a
            public writing portfolio under a credible publication, we want to hear from you.
          </p>

          <div className="not-prose my-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.3em] font-black text-gray-500 dark:text-gray-400 mb-2 font-mono">
              Write for oWire
            </p>
            <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
              Contribute to Objective Wire
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We accept pitches from writers who cover cars, sports, creators, and culture.
              Named byline on every published piece. Free to join. No word counts, no quotas,
              no pressure, no deadlines unless you set your own.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-8">
              {['Named byline and public author profile', 'Full editorial support and fact-checking', 'Write on your schedule, no minimum commitment', 'All four content pillars open: Cars, Sports, Creators, Culture'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:editorial@objectwire.org?subject=I want to write for Objective Wire"
              className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Email Us to Get Started →
            </a>
            <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
              Include your beat, a writing sample or link, and a brief pitch.
            </p>
          </div>
          <p>
            Objective Wire operates under a strict editorial code: accuracy over speed, primary sources only,
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
            <a href="mailto:editorial@objectwire.org" className="text-blue-600 hover:text-blue-800 underline">
              editorial@objectwire.org
            </a>
            <br />
            Corrections and tips:{' '}
            <a href="mailto:corrections@objectwire.org" className="text-blue-600 hover:text-blue-800 underline">
              corrections@objectwire.org
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
