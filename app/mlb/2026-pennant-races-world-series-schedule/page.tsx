import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle, HighlightBox } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/mlb/2026-pennant-races-world-series-schedule';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const OG_IMAGE = `${SITE_CONFIG.url}/thumbnails/mlb-2026-pennant-races-world-series-schedule.jpg`;

export const metadata: Metadata = {
  title: 'MLB 2026 Pennant Races | World Series Schedule, Standings',
  description:
    'The 2026 MLB pennant races are tightening as the Rays and Yankees battle in the AL East while the Dodgers own the best record in baseball. The World Series is set for October 23, 2026.',
  keywords: [
    'MLB 2026 pennant races',
    'MLB standings July 2026',
    'Tampa Bay Rays 2026',
    'New York Yankees 2026',
    'Los Angeles Dodgers 2026',
    'Milwaukee Brewers 2026',
    '2026 World Series schedule',
    'World Series 2026 dates',
    'MLB playoff race 2026',
    'AL East standings 2026',
    'NL West standings 2026',
    'MLB July 2026 update',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'MLB 2026 Pennant Races | Rays-Yankees Dogfight, Dodgers Dominate',
    description:
      'The Rays hold a razor-thin lead over the Yankees in the AL East. The Dodgers own the best record in baseball. The World Series is set for October 23.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-28T18:00:00Z',
    modifiedTime: '2026-07-28T18:00:00Z',
    section: 'MLB',
    tags: ['MLB', 'Pennant Races', 'World Series', 'Baseball', '2026'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MLB 2026 Pennant Races and World Series Schedule' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLB Pennant Races 2026 | Rays-Yankees, Dodgers Dominate',
    description: 'The AL East is a one-game race. The Dodgers are the best team in baseball. The World Series starts October 23.',
    images: [OG_IMAGE],
  },
};

export default function MLB2026PennantRacesPage() {
  return (
    <>
      <NewsArticleSchema
        title="MLB 2026 Pennant Races | World Series Schedule, Standings"
        description="The 2026 MLB pennant races are tightening as the Rays and Yankees battle in the AL East while the Dodgers own the best record in baseball."
        author="Jack Brennan"
        authorUrl={`${SITE_CONFIG.url}/authors/jack-brennan`}
        publishedTime="2026-07-28T18:00:00Z"
        modifiedTime="2026-07-28T18:00:00Z"
        articleUrl={ARTICLE_URL}
        section="MLB"
        keywords={['MLB 2026 pennant races', 'MLB standings July 2026', '2026 World Series schedule']}
      />

      <NewsArticle
        title="MLB 2026 Pennant Races | Rays-Yankees Dogfight, Dodgers Dominate the NL"
        subtitle="The 2026 MLB season is deep into the post-All-Star summer stretch, and the division races are incredibly tight. The Rays hold a razor-thin lead over the Yankees in the AL East, the Dodgers own the best record in baseball, and the World Series is officially set for October 23."
        category="MLB"
        categoryColor="red"
        topicTag="sports"
        publishDate="July 28, 2026"
        readTime="5 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        slug="mlb-2026-pennant-races-world-series-schedule"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'MLB', item: '/mlb' },
          { name: '2026 Pennant Races', item: SLUG },
        ]}
        tags={['MLB', 'Pennant Races', 'World Series', 'Baseball', '2026']}
        keyTakeaways={[
          'The Tampa Bay Rays (62-44) hold a razor-thin lead over the New York Yankees (61-46) in the tightest divisional race in the American League.',
          'The Los Angeles Dodgers (67-39) own the best record in the National League and all of MLB, closely pursued by the Milwaukee Brewers (66-40) who command the NL Central.',
          'The 2026 World Series is officially scheduled to begin on Friday, October 23, 2026, with a potential Game 7 falling on Saturday, October 31.',
          'The post-All-Star summer stretch is producing some of the most competitive divisional races in recent memory, with multiple divisions still within single-digit games.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'Who is leading the AL East in 2026?',
            answer:
              'The Tampa Bay Rays (62-44) hold a razor-thin lead over the New York Yankees (61-46) in the tightest divisional race in the American League as of late July 2026.',
          },
          {
            question: 'Who has the best record in MLB in 2026?',
            answer:
              'The Los Angeles Dodgers (67-39) own the best record in the National League West and the entire MLB, closely pursued by the Milwaukee Brewers (66-40) who command the NL Central.',
          },
          {
            question: 'When is the 2026 World Series?',
            answer:
              'The 2026 World Series is officially scheduled to begin on Friday, October 23, 2026. If the series goes the full seven games, Game 7 will fall on Saturday, October 31.',
          },
          {
            question: 'How close is the AL East race?',
            answer:
              'The AL East is the tightest divisional race in the American League, with the Rays at 62-44 and the Yankees at 61-46, separated by roughly a single game in the standings.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="MLB"
        moreFromHubHref="/mlb"
      >
        <p>
          The 2026 MLB season is deep into the post-All-Star summer stretch, and the division races are producing some of the most competitive baseball in recent memory. With roughly two months remaining before the postseason, the standings reveal a league where no division leader can afford to coast, and the margin between October baseball and an early winter is measured in single-digit games.
        </p>

        <HighlightBox type="stat" color="orange">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
            {[
              { value: '62-44', label: 'Rays record (AL East leaders)' },
              { value: '61-46', label: 'Yankees record (1 game back)' },
              { value: '67-39', label: 'Dodgers record (best in MLB)' },
              { value: '66-40', label: 'Brewers record (NL Central leaders)' },
              { value: 'Oct 23', label: 'World Series Game 1' },
              { value: 'Oct 31', label: 'World Series Game 7 (if needed)' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </HighlightBox>

        <h2>AL East Dogfight | Rays and Yankees Separated by a Game</h2>
        <p>
          The American League East has become the marquee divisional race of the 2026 season. The <strong>Tampa Bay Rays</strong>, at 62-44, hold a razor-thin lead over the <strong>New York Yankees</strong>, who sit at 61-46. It is the tightest divisional race in the American League, and with both teams built for October, the stakes of every remaining series are amplified. The Rays have relied on their trademark pitching depth and defensive efficiency, while the Yankees have powered their way through the summer on the back of a lineup that remains one of the most dangerous in the sport.
        </p>
        <p>
          The margin between first and second place in the AL East is roughly a single game, meaning the division lead could flip on any given night. Both teams are tracking toward postseason berths regardless of who wins the division, but the difference between hosting a Wild Card series and securing a Division Series bye is enormous, and neither team is showing any sign of backing down.
        </p>

        <h2>National League Dominance | Dodgers and Brewers Set the Pace</h2>
        <p>
          In the National League, the <strong>Los Angeles Dodgers</strong> own the best record in the West and the entire MLB at 67-39. Their combination of elite starting pitching, a deep lineup that grinds out at-bats, and a bullpen that has been among the league's best has made them the team to beat as the calendar turns toward August. The Dodgers have been the most complete team in baseball for much of the season, and their run differential reflects a club that wins in multiple ways.
        </p>
        <p>
          The <strong>Milwaukee Brewers</strong>, at 66-40, are commandingly pacing the NL Central and represent the closest challenger to the Dodgers in the overall National League standings. The Brewers have been one of the surprises of the season, combining a powerful offense with a pitching staff that has outperformed preseason projections. If the Dodgers and Brewers finish with the two best records in the NL, they would be on a collision course for a potential NLCS matchup that would pit the league's two most consistent teams against each other.
        </p>

        <h2>World Series 2026 | The Schedule Is Set</h2>
        <p>
          The <strong>2026 World Series</strong> is officially scheduled to begin on <strong>Friday, October 23, 2026</strong>. If the series goes the full seven games, the decisive Game 7 will fall on <strong>Saturday, October 31</strong>, setting up the possibility of a Halloween championship clincher. The Fall Classic will once again feature the 2-3-2 home-field format, with the team holding the better regular-season record hosting Games 1, 2, 6, and 7.
        </p>
        <p>
          With the pennant races as tight as they are, projecting a World Series matchup in late July is a fool's errand. But the Rays, Yankees, Dodgers, and Brewers have separated themselves as the class of their respective leagues, and any combination of those four teams would produce a compelling October narrative. The next two months will determine who survives the grind.
        </p>

        <p>
          For full MLB coverage, see the{' '}
          <Link href="/mlb" className="text-blue-600 hover:text-blue-800 underline">
            oWire MLB hub
          </Link>. For more sports news, see{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            oWire Sports
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}