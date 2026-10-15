import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/nfl/alaric-jackson-suspension-appeal-bradley-chubb-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/nfl-alaric-jackson-suspension-appeal-bradley-chubb-2026.jpg';

export const metadata: Metadata = {
  title: 'Alaric Jackson Suspension Appeal | Punching Ban Cut to One',
  description:
    'After a postgame altercation with Bills linebacker Bradley Chubb, Rams left tackle Alaric Jackson had his two-game suspension cut to one on appeal.',
  keywords: [
    'Alaric Jackson suspension appeal Bradley Chubb',
    'Alaric Jackson punched Bradley Chubb Bills Rams',
    'NFL suspension reduced Alaric Jackson',
    'Sean McVay David Quessenberry left tackle',
    'NFL sportsmanship policy Rule 12',
    'Alaric Jackson one game suspension',
    'Derrick Brooks hearing officer NFL appeal',
    'Bradley Chubb Alaric Jackson altercation',
    'Rams Bills 37-34 overtime SoFi Stadium',
    'NFL Rule 12 Section 3 Article 1',
    'Alaric Jackson return Week 7 Raiders',
    'Rams offensive line left tackle 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Alaric Jackson Suspension Reduced on Appeal | Rams Tackle Punches Bradley Chubb',
    description:
      'Rams left tackle Alaric Jackson struck Bills linebacker Bradley Chubb after a Monday night overtime win. His initial two-game suspension was cut to one game by hearing officer Derrick Brooks.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-14T20:00:00Z',
    modifiedTime: '2026-10-14T20:00:00Z',
    section: 'Sports',
    tags: ['NFL', 'Los Angeles Rams', 'Buffalo Bills', 'Alaric Jackson', 'Bradley Chubb'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Alaric Jackson suspension appeal Bradley Chubb' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alaric Jackson Suspension Cut to One Game on Appeal',
    description: 'Two games became one. Hall of Famer Derrick Brooks halved the Rams tackle ban for punching Bradley Chubb.',
    images: [OG_IMAGE],
  },
};

export default function AlaricJacksonSuspensionAppealPage() {
  return (
    <>
      <NewsArticleSchema
        title="Alaric Jackson Suspension Appeal | Punching Ban Cut to One"
        description="After a postgame altercation with Bills linebacker Bradley Chubb, Rams left tackle Alaric Jackson had his two-game suspension cut to one on appeal."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-14T20:00:00Z"
        modifiedTime="2026-10-14T20:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Alaric Jackson suspension appeal Bradley Chubb',
          'NFL suspension reduced Alaric Jackson',
          'NFL sportsmanship policy Rule 12',
        ]}
      />

      <QuickArticle
        title="Reduced on Appeal | Rams Left Tackle Alaric Jackson Sees Punching Suspension Cut to One Game"
        subtitle="Los Angeles Rams starting left tackle Alaric Jackson initially received a two-game suspension without pay for striking Buffalo Bills linebacker Bradley Chubb in the face after a Monday night game. A hearing officer has now halved that penalty on appeal."
        department="NFL"
        category="Sports"
        accentColor="blue"
        publishDate="October 14, 2026"
        readTime="4 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Alaric Jackson suspension appeal Bradley Chubb',
          caption: 'Alaric Jackson will serve one game instead of two after a successful appeal.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/sports', label: 'Sports' },
          { href: SLUG, label: 'Jackson Suspension Appeal' },
        ]}
        sources={[
          {
            number: 1,
            title: "Rams' Alaric Jackson Has Suspension Cut to One Game Following Appeal",
            url: 'https://www.espn.com/nfl/story/_/id/alaric-jackson-suspension-reduced-rams-bills',
            publisher: 'ESPN',
          },
          {
            number: 2,
            title: 'Bradley Chubb Explains His Side of Altercation With Alaric Jackson',
            url: 'https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/bradley-chubb-alaric-jackson-postgame-altercation',
            publisher: 'NBC Sports',
          },
          {
            number: 3,
            title: 'Rams LT Alaric Jackson Suspended for Punching Bills Bradley Chubb',
            url: 'https://www.nytimes.com/athletic/nfl/rams-alaric-jackson-suspended-bradley-chubb/',
            publisher: 'The Athletic',
          },
          {
            number: 4,
            title: 'Alaric Jackson Suspended for Striking Bradley Chubb After Monday Night Game',
            url: 'https://www.cbssports.com/nfl/news/rams-left-tackle-punches-bills-bradley-chubb-mnf/',
            publisher: 'CBS Sports',
          },
        ]}
        relatedArticles={[
          { href: '/nfl/2026-kickoff-dates-hall-of-fame-game', title: 'NFL 2026 Kickoff Dates | Hall of Fame Game, Season Opener', category: 'Sports' },
          { href: '/news/patriots-trade-aj-brown-eagles-2026', title: 'Patriots Trade for A.J. Brown | Eagles Deal, Drake Maye Impact', category: 'Sports' },
          { href: '/news/cam-jurgens-trade-ravens-eagles-2026', title: 'Cam Jurgens Trade Ravens Eagles | Pro Bowl Center Deal', category: 'Sports' },
          { href: '/sports', title: 'Sports Hub | NFL, MLB, UFC Coverage', category: 'Sports' },
        ]}
        tags={['NFL', 'Los Angeles Rams', 'Buffalo Bills', 'Alaric Jackson', 'Bradley Chubb']}
      >
        <p>
          The NFL discipline following Monday night's intense overtime battle between the Buffalo Bills and Los Angeles Rams has officially been finalized.
        </p>

        <p>
          Los Angeles Rams starting left tackle <strong>Alaric Jackson</strong>, who initially received a two-game suspension without pay for striking Buffalo Bills linebacker <strong>Bradley Chubb</strong> in the face postgame, has seen his penalty <strong>reduced to a one-game suspension</strong> following a swift appeal process on Wednesday.
        </p>

        <p>
          Hearing officer <strong>Derrick Brooks</strong>, the Pro Football Hall of Famer jointly appointed by the NFL and the NFL Players Association to handle on-field discipline appeals, ruled to cut Jackson's ban in half.
        </p>

        <h2>The Postgame Incident at SoFi Stadium</h2>

        <p>
          The physical altercation occurred shortly after the conclusion of Buffalo's <strong>37-34 overtime victory</strong> over Los Angeles at SoFi Stadium.
        </p>

        <p>
          According to video footage and sideline reports, Jackson was engaged in a jersey swap with another Bills player when Chubb approached and exchanged heated words with the Rams lineman. As Chubb turned to walk away, Jackson pursued him and delivered a punch directly to Chubb's face mask.
        </p>

        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">Incident and Discipline Summary</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Fixture:</strong> Buffalo Bills 37, Los Angeles Rams 34 (OT)</li>
            <li><strong>Incident:</strong> Postgame verbal exchange leading to Jackson striking Chubb</li>
            <li><strong>Initial Ruling:</strong> Two-game suspension without pay, Rule 12, Section 3, Article 1</li>
            <li><strong>Appeal Result:</strong> Penalty reduced to one game by NFL and NFLPA hearing officer Derrick Brooks</li>
          </ul>
        </div>

        <p>
          The league initially cited Jackson for violating <strong>Rule 12, Section 3, Article 1</strong>, which governs non-sportsmanlike conduct and acts described as contrary to the generally understood principles of sportsmanship.
        </p>

        <h2>Roster and On-Field Impact for Los Angeles</h2>

        <p>
          The reduced suspension significantly alters the Rams' offensive line timeline as they navigate early-season NFC West competition.
        </p>

        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">Alaric Jackson Suspension Availability</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Week 6, Oct 18 vs. Arizona Cardinals:</strong> Suspended, David Quessenberry starts</li>
            <li><strong>Week 7, Oct 25 at Las Vegas Raiders:</strong> Eligible to return</li>
          </ul>
        </div>

        <p>
          Rams head coach <strong>Sean McVay</strong> confirmed that veteran offensive lineman <strong>David Quessenberry</strong> will fill in at left tackle for Sunday's divisional clash against the Arizona Cardinals.
        </p>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Player</th>
                <th className="px-4 py-2 text-left font-bold">Position</th>
                <th className="px-4 py-2 text-left font-bold">Role During Suspension</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Alaric Jackson', 'Left Tackle', 'Serving one-game suspension, eligible Oct. 19'],
                ['David Quessenberry', 'Left Tackle', 'Named starter vs. Arizona Cardinals'],
                ['Bradley Chubb', 'Linebacker', 'Unsanctioned postgame participant, no suspension issued'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-blue-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-blue-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Because of the successfully appealed verdict, Jackson will rejoin the Rams' active 53-man roster on Monday, October 19, making him fully available for Los Angeles' Week 7 road game against the Las Vegas Raiders. For more NFL coverage, see the{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            Sports hub
          </Link>{' '}
          and our report on the{' '}
          <Link href="/news/cam-jurgens-trade-ravens-eagles-2026" className="text-blue-600 hover:text-blue-800 underline">
            Cam Jurgens trade between the Eagles and Ravens
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}