import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/nfl/kirk-cousins-raiders-qb1-jets-fernando-mendoza';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/nfl-kirk-cousins-raiders-qb1-jets-fernando-mendoza.jpg';

export const metadata: Metadata = {
  title: "Kirk Cousins Raiders QB1 Jets | Kubiak Confirms Starter",
  description:
    'Despite a four-game skid and calls for rookie Fernando Mendoza, Klint Kubiak confirmed Kirk Cousins stays the Raiders starter vs. the Jets.',
  keywords: [
    'Kirk Cousins Raiders QB1 Jets Fernando Mendoza',
    'Kirk Cousins starting quarterback Raiders',
    'Klint Kubiak Fernando Mendoza timeline',
    'Las Vegas Raiders quarterback situation',
    'Raiders Jets Week 9 preview 2026',
    'Kirk Cousins 16 touchdown passes NFL',
    'Raiders quarterback controversy 2026',
    'Fernando Mendoza No 1 overall pick Raiders',
    'Kirk Cousins Jets Week 8 starter',
    'Raiders losing streak quarterback decision',
    'Kirk Cousins 1877 passing yards 2026',
    'Klint Kubiak quarterback press conference',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Firmly in Command | Raiders Retain Kirk Cousins as QB1 vs. Jets',
    description:
      'Klint Kubiak shut down quarterback controversy Monday: Kirk Cousins stays the starter. Fernando Mendoza development continues behind the scenes.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-26T23:30:00Z',
    modifiedTime: '2026-10-26T23:30:00Z',
    section: 'Sports',
    tags: ['Las Vegas Raiders', 'Kirk Cousins', 'Fernando Mendoza', 'NFL', 'New York Jets'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Kirk Cousins Raiders QB1 vs Jets' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No Controversy: Kubiak Reaffirms Cousins as Raiders QB1 vs Jets',
    description: 'Cousins leads the NFL with 16 TD passes. First-rounder Mendoza waits. Kubiak: Fernando will play, just not this week.',
    images: [OG_IMAGE],
  },
};

export default function KirkCousinsRaidersQB1Page() {
  return (
    <>
      <NewsArticleSchema
        title="Kirk Cousins Raiders QB1 Jets | Kubiak Confirms Starter"
        description="Despite a four-game skid and calls for rookie Fernando Mendoza, Klint Kubiak confirmed Kirk Cousins stays the Raiders starter vs. the Jets."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-26T23:30:00Z"
        modifiedTime="2026-10-26T23:30:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Kirk Cousins Raiders QB1 Jets Fernando Mendoza',
          'Kirk Cousins starting quarterback Raiders',
          'Raiders Jets Week 9 preview 2026',
        ]}
      />

      <QuickArticle
        title="Firmly in Command | Raiders Retain Kirk Cousins as QB1 Facing the Jets"
        subtitle="Despite a four-game losing streak and growing external speculation surrounding rookie first-round pick Fernando Mendoza, the Las Vegas Raiders are making no changes under center."
        department="NFL"
        category="Sports"
        accentColor="red"
        publishDate="October 26, 2026"
        readTime="4 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Kirk Cousins Raiders QB1 vs Jets',
          caption: 'Kirk Cousins starts against the Jets with Fernando Mendoza waiting in the wings.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/sports', label: 'Sports' },
          { href: SLUG, label: 'Cousins Raiders QB1' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Raiders Coach Klint Kubiak Shuts Down QB Talk; Kirk Cousins Remains Starter',
            url: 'https://apnews.com/article/kirk-cousins-raiders-quarterback-kubiak',
            publisher: 'Associated Press',
          },
          {
            number: 2,
            title: "Kirk Cousins to Remain Raiders' Starting QB vs. Jets, Klint Kubiak Says",
            url: 'https://www.espn.com/nfl/story/_/id/kirk-cousins-raiders-starting-quarterback-jets',
            publisher: 'ESPN',
          },
          {
            number: 3,
            title: "Kirk Cousins to Remain Raiders' QB1 vs. Jets Amid Benching Buzz",
            url: 'https://bleacherreport.com/articles/kirk-cousins-raiders-qb1-jets',
            publisher: 'Bleacher Report',
          },
          {
            number: 4,
            title: "Raiders' Klint Kubiak Explains Kirk Cousins, Fernando Mendoza Decision for Jets Game",
            url: 'https://www.yardbarker.com/nfl/articles/raiders_kubiak_cousins_mendoza_jets',
            publisher: 'Yardbarker',
          },
        ]}
        relatedArticles={[
          { href: '/nfl/alaric-jackson-suspension-appeal-bradley-chubb-2026', title: 'Alaric Jackson Suspension Appeal | Punching Ban Cut to One', category: 'Sports' },
          { href: '/nfl/2026-kickoff-dates-hall-of-fame-game', title: 'NFL 2026 Kickoff Dates | Hall of Fame Game, Season Opener', category: 'Sports' },
          { href: '/news/cam-jurgens-trade-ravens-eagles-2026', title: 'Cam Jurgens Trade Ravens Eagles | Pro Bowl Center Deal', category: 'Sports' },
          { href: '/sports', title: 'Sports Hub | NFL, MLB, WNBA, UFC Coverage', category: 'Sports' },
        ]}
        tags={['Las Vegas Raiders', 'Kirk Cousins', 'Fernando Mendoza', 'NFL', 'New York Jets']}
      >
        <p>
          Despite a four-game losing streak and growing external speculation surrounding rookie first-round pick <strong>Fernando Mendoza</strong>, the Las Vegas Raiders are making no changes under center.
        </p>

        <p>
          Head coach <strong>Klint Kubiak</strong> shut down any quarterback controversy on Monday, formally confirming that <strong>Kirk Cousins</strong> will remain the team's starting quarterback for Sunday's matchup against the New York Jets.
        </p>

        <p>
          Opening his weekly press conference before taking questions, Kubiak addressed the QB situation directly, emphasizing that the 38-year-old veteran gives Las Vegas the best immediate opportunity to remain competitive.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Quarterback Situation Summary</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Current Starter:</strong> Kirk Cousins, 3-4 record as starter</li>
            <li><strong>Backup Option:</strong> Fernando Mendoza, 2026 No. 1 overall pick</li>
            <li><strong>Head Coach Verdict:</strong> Kirk Cousins starts Week 8 vs. New York Jets</li>
            <li><strong>Strategic Stance:</strong> Prioritizing immediate wins while developing Mendoza behind the scenes</li>
          </ul>
        </div>

        <h2>Statistical Production vs. Team Struggles</h2>

        <p>
          While the Raiders have dropped to 3-4 following a 35-21 loss to the Los Angeles Rams, Cousins' individual production has remained solid.
        </p>

        <p>
          Entering the week, Cousins leads the NFL with <strong>16 touchdown passes</strong> and ranks third overall with <strong>1,877 passing yards</strong>. Kubiak pointed to systemic issues across the roster, including a rushing attack averaging just 3.0 yards per carry and a defense surrendering 27-plus points in five consecutive weeks, as the primary drivers behind the slide, rather than quarterback play.
        </p>

        <h2>Las Vegas Raiders Quarterback Comparison</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-red-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Player</th>
                <th className="px-4 py-2 text-left font-bold">Status</th>
                <th className="px-4 py-2 text-left font-bold">2026 Season Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Kirk Cousins', 'Starting QB1', '16 TD passes, 1st in NFL; 1,877 passing yards'],
                ['Fernando Mendoza', 'Backup QB2', 'No. 1 overall pick; developmental track active'],
                ['Aidan O\'Connell', 'Third-String QB3', '17 career starts; emergency depth'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-red-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-red-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>The Development Plan for Mendoza</h2>

        <p>
          Though fans and analysts remain eager to see Mendoza, the No. 1 overall pick in the 2026 NFL Draft, take over the offense, Kubiak reiterated that the franchise maintains a long-term developmental blueprint.
        </p>

        <p>
          "Eventually, Fernando is going to play football," Kubiak explained to reporters. "We have a plan. We don't have a timeline for that. Kirk is playing really well, and we're in the hunt. It's really important that we keep playing really well behind him and continue to develop Fernando, but Fernando is going to play at some point. It's not going to be this week."
        </p>

        <p>
          For more NFL coverage, see the{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            Sports hub
          </Link>{' '}
          and our report on{' '}
          <Link href="/nfl/alaric-jackson-suspension-appeal-bradley-chubb-2026" className="text-blue-600 hover:text-blue-800 underline">
            the Alaric Jackson suspension appeal
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}