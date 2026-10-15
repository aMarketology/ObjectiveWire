import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/ufc/farid-basharat-removed-ufc-roster-free-agency-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/ufc-farid-basharat-removed-ufc-roster-free-agency-2026.jpg';

export const metadata: Metadata = {
  title: 'Farid Basharat Removed From UFC Roster | Free Agency',
  description:
    'Undefeated bantamweight Farid Basharat (16-0, 7-0 UFC) was removed from the UFC roster after his contract expired, making him a prized free agent.',
  keywords: [
    'Farid Basharat removed UFC roster free agency',
    'Farid Basharat undefeated 16-0 UFC contract',
    'undefeated bantamweight UFC release',
    'Farid Basharat Dana White Contender Series',
    'Farid Basharat next fight PFL Bellator',
    'Farid Basharat 7-0 UFC record',
    'UFC roster moves October 2026',
    'Farid Basharat Afghan fighter',
    'Javid Basharat PFL brother',
    'bantamweight free agent 2026',
    'UFC contract expiration',
    'Farid Basharat John Garza',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Undefeated and Out the Door | UFC Removes 16-0 Bantamweight Farid Basharat',
    description:
      'Despite a flawless 16-0 record and a 7-0 run inside the Octagon, bantamweight Farid Basharat has been removed from the UFC roster after his contract expired. Here is why, and what comes next.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-14T18:00:00Z',
    modifiedTime: '2026-10-14T18:00:00Z',
    section: 'Sports',
    tags: ['UFC', 'Farid Basharat', 'MMA', 'Bantamweight', 'Free Agency'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Farid Basharat removed from UFC roster' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UFC Lets Undefeated 16-0 Bantamweight Farid Basharat Walk',
    description: 'A 7-0 Octagon record and no extension offer. Basharat is now the most sought-after free agent in combat sports.',
    images: [OG_IMAGE],
  },
};

export default function FaridBasharatUFCReleasePage() {
  return (
    <>
      <NewsArticleSchema
        title="Farid Basharat Removed From UFC Roster | Free Agency"
        description="Undefeated bantamweight Farid Basharat (16-0, 7-0 UFC) was removed from the UFC roster after his contract expired, making him a prized free agent."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-14T18:00:00Z"
        modifiedTime="2026-10-14T18:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Farid Basharat removed UFC roster free agency',
          'Farid Basharat undefeated 16-0 UFC contract',
          'undefeated bantamweight UFC release',
        ]}
      />

      <QuickArticle
        title="Undefeated and Out the Door | UFC Lets 16-0 Bantamweight Contender Farid Basharat Walk Into Free Agency"
        subtitle="In one of the most stunning roster moves of the year, the Ultimate Fighting Championship has opted not to renew the contract of undefeated bantamweight contender Farid Basharat. The 29-year-old Afghan fighter, 16-0 overall and 7-0 in the UFC, was removed from the active roster on Wednesday."
        department="UFC"
        category="Sports"
        accentColor="red"
        publishDate="October 14, 2026"
        readTime="4 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Farid Basharat removed from UFC roster',
          caption: 'Farid Basharat leaves the UFC unbeaten after seven Octagon victories.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/sports', label: 'Sports' },
          { href: SLUG, label: 'Basharat UFC Release' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Farid Basharat Removed From UFC Roster Despite 7-0 Octagon Run',
            url: 'https://www.mmafighting.com/2026-10-14/farid-basharat-ufc-roster-removal-free-agent',
            publisher: 'MMA Fighting',
          },
          {
            number: 2,
            title: 'UFC Reportedly Lets 16-0 Farid Basharat Walk After Seven Wins',
            url: 'https://www.sherdog.com/news/news/UFC-reportedly-lets-160-Farid-Basharat-walk-after-seven-wins-203215',
            publisher: 'Sherdog',
          },
          {
            number: 3,
            title: 'Undefeated UFC Fighter Shockingly Removed From Roster After Perfect Run',
            url: 'https://www.si.com/fannation/mma/ufc/farid-basharat-removed-ufc-roster-free-agency',
            publisher: 'Sports Illustrated',
          },
          {
            number: 4,
            title: 'Farid Basharat Enters Free Agency After UFC Contract Ends',
            url: 'https://middleeasy.com/mma-news/farid-basharat-ufc-contract-ends-free-agency/',
            publisher: 'MiddleEasy',
          },
        ]}
        relatedArticles={[
          { href: '/ufc/conor-mcgregor-max-holloway-last-dance-2027', title: 'Conor McGregor Max Holloway | Last Dance Fight 2027', category: 'UFC' },
          { href: '/sports', title: 'Sports Hub | MLB, NFL, UFC Coverage', category: 'Sports' },
          { href: '/news/patriots-trade-aj-brown-eagles-2026', title: 'Patriots Trade for A.J. Brown | Eagles Deal', category: 'NFL' },
        ]}
        tags={['UFC', 'Farid Basharat', 'MMA', 'Bantamweight', 'Free Agency']}
      >
        <p>
          In one of the most stunning roster moves of the year, the Ultimate Fighting Championship has opted not to renew the contract of undefeated bantamweight contender <strong>Farid Basharat</strong>.
        </p>

        <p>
          First reported by <em>MMA Fighting</em>, the 29-year-old Afghan fighter (16-0 overall, 7-0 UFC) was officially removed from the organization's active fighter database on Wednesday following the expiration of his multi-fight contract.
        </p>

        <p>
          The decision makes Basharat one of the most sought-after free agents in combat sports, and marks a rare instance where the UFC has parted ways with an unbeaten athlete boasting seven consecutive victories inside the Octagon.
        </p>

        <h2>A Flawless Octagon Run</h2>

        <p>
          Basharat first earned his way into the promotion during Season 6 of <em>Dana White's Contender Series</em> in September 2022, securing a unanimous decision victory over Allan Begosso to earn a developmental contract. Over the next four years, the technical bantamweight steadily climbed the ranks of the UFC's deepest division, defeating prominent names including veteran striker <strong>Chris Gutiérrez</strong>, French standout <strong>Taylor Lapilus</strong>, and unbeaten prospect <strong>Jean Matsumoto</strong>.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Farid Basharat UFC Record Profile</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Professional MMA Record:</strong> 16-0-0 (7-0 UFC)</li>
            <li><strong>DWCS Entry:</strong> Season 6, contract earned September 2022</li>
            <li><strong>Notable UFC Victories:</strong> Chris Gutiérrez, Taylor Lapilus, Jean Matsumoto, Da'Mon Blackshear</li>
            <li><strong>Final UFC Match:</strong> Unanimous decision win over John Garza</li>
          </ul>
        </div>

        <p>
          Basharat fulfilled the final bout of his promotional contract in July, claiming a clear unanimous decision victory over short-notice replacement John Garza. However, despite expressing an explicit desire to re-sign and push toward top-10 rankings, formal extension terms were never offered by UFC brass.
        </p>

        <h2>Why Did the UFC Let an Undefeated Fighter Walk</h2>

        <p>
          While the UFC has not publicly commented on the decision, combat sports analysts point to a combination of promotional dynamics and finishing metrics.
        </p>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-red-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Metric or Factor</th>
                <th className="px-4 py-2 text-left font-bold">Context</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Finishing Rate', '6 of 7 UFC wins came via decision (1 submission)'],
                ['Division Density', 'Bantamweight (135 lbs) remains the most talent-saturated roster in the promotion'],
                ['Precedent', 'His older brother, Javid Basharat, similarly departed the UFC to join the PFL'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-red-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-red-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Basharat's clinical, grappling-heavy style prioritized position and control, resulting in six decision verdicts across his seven UFC appearances. In a landscape where promotional executives increasingly prioritize high-octane finishes for main-card placement, the lack of stoppage highlight reels may have influenced the UFC's decision not to offer top-tier extension figures.
        </p>

        <h2>What Comes Next for Basharat</h2>

        <p>
          Now entering market free agency, Basharat immediately becomes a crown jewel target for rival international promotions. Organizations like the <strong>Professional Fighters League (PFL)</strong>, where his brother Javid currently competes, and <strong>ONE Championship</strong> are expected to express immediate interest. The PFL's $1 million season format or Bellator Champions Series tournament structures present lucrative alternatives for a prime 135-pound contender.
        </p>

        <p>
          At 29 years old and fully healthy, Basharat enters the open market with a pristine record, high-level Octagon pedigree, and prime physical positioning to command top-tier compensation outside the UFC banner. For more combat sports coverage, see the{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            Sports hub
          </Link>{' '}
          and our{' '}
          <Link href="/ufc/conor-mcgregor-max-holloway-last-dance-2027" className="text-blue-600 hover:text-blue-800 underline">
            McGregor and Holloway Last Dance report
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}