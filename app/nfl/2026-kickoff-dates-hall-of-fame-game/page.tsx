import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle, HighlightBox } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/nfl/2026-kickoff-dates-hall-of-fame-game';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const OG_IMAGE = `${SITE_CONFIG.url}/thumbnails/nfl-2026-kickoff-dates-hall-of-fame-game.jpg`;

export const metadata: Metadata = {
  title: 'NFL 2026 Kickoff Dates | Hall of Fame Game, Season Opener',
  description:
    'The NFL returns on August 6, 2026 with the Hall of Fame Game featuring Panthers vs Cardinals. The regular season kicks off September 9 with Seahawks hosting Patriots. College football Week 0 begins August 29.',
  keywords: [
    'NFL 2026 kickoff dates',
    'NFL Hall of Fame Game 2026',
    'Panthers vs Cardinals Hall of Fame',
    'NFL season opener 2026',
    'Seahawks vs Patriots 2026',
    'NFL regular season start 2026',
    'college football Week 0 2026',
    'NFL preseason 2026',
    'Canton Hall of Fame Game',
    'NFL schedule 2026',
    'Seattle Seahawks Super Bowl banner',
    'football 2026 season',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'NFL 2026 Kickoff Dates | Hall of Fame Game, Seahawks-Patriots Opener',
    description:
      'The gridiron drought ends August 6 with Panthers-Cardinals in Canton. The regular season opens September 9 with the Seahawks raising their Super Bowl banner against the Patriots.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-28T19:00:00Z',
    modifiedTime: '2026-07-28T19:00:00Z',
    section: 'NFL',
    tags: ['NFL', 'Hall of Fame Game', 'Seahawks', 'Patriots', '2026 Season'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'NFL 2026 Kickoff Dates and Hall of Fame Game' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFL 2026 Kickoff | Hall of Fame Game Aug 6, Seahawks-Patriots Sep 9',
    description: 'Football is almost back. Panthers-Cardinals in Canton on August 6. Seahawks raise the banner on September 9.',
    images: [OG_IMAGE],
  },
};

export default function NFL2026KickoffDatesPage() {
  return (
    <>
      <NewsArticleSchema
        title="NFL 2026 Kickoff Dates | Hall of Fame Game, Season Opener"
        description="The NFL returns on August 6, 2026 with the Hall of Fame Game featuring Panthers vs Cardinals. The regular season kicks off September 9 with Seahawks hosting Patriots."
        author="Jack Brennan"
        authorUrl={`${SITE_CONFIG.url}/authors/jack-brennan`}
        publishedTime="2026-07-28T19:00:00Z"
        modifiedTime="2026-07-28T19:00:00Z"
        articleUrl={ARTICLE_URL}
        section="NFL"
        keywords={['NFL 2026 kickoff dates', 'NFL Hall of Fame Game 2026', 'NFL season opener 2026']}
      />

      <NewsArticle
        title="NFL 2026 Kickoff Dates | Hall of Fame Game, Seahawks-Patriots Opener, and College Football Week 0"
        subtitle="The gridiron drought is ending. NFL football returns on August 6 with the Hall of Fame Game in Canton featuring the Panthers and Cardinals. The regular season opens September 9 with the Seahawks raising their Super Bowl banner against the Patriots. College football Week 0 kicks off August 29."
        category="NFL"
        categoryColor="red"
        topicTag="sports"
        publishDate="July 28, 2026"
        readTime="4 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        slug="nfl-2026-kickoff-dates-hall-of-fame-game"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'NFL', item: '/nfl' },
          { name: '2026 Kickoff Dates', item: SLUG },
        ]}
        tags={['NFL', 'Hall of Fame Game', 'Seahawks', 'Patriots', '2026 Season']}
        keyTakeaways={[
          'The NFL preseason begins Thursday, August 6, 2026 with the annual Hall of Fame Game in Canton, Ohio, featuring the Carolina Panthers against the Arizona Cardinals.',
          'The 2026 NFL regular season officially kicks off on Wednesday, September 9, 2026, with the reigning Super Bowl champion Seattle Seahawks hosting the New England Patriots in a primetime banner-raising showcase.',
          'College football returns with Week 0 on Saturday, August 29, 2026, marking the first games that count toward the 2026 season.',
          'The Hall of Fame Game is the traditional start of the NFL calendar, held annually at Tom Benson Hall of Fame Stadium as part of the Pro Football Hall of Fame enshrinement weekend.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'When does the 2026 NFL season start?',
            answer:
              'The 2026 NFL regular season officially kicks off on Wednesday, September 9, 2026, with the reigning Super Bowl champion Seattle Seahawks hosting the New England Patriots in the annual primetime opener.',
          },
          {
            question: 'When is the 2026 NFL Hall of Fame Game?',
            answer:
              'The 2026 Hall of Fame Game is on Thursday, August 6, 2026, at Tom Benson Hall of Fame Stadium in Canton, Ohio, featuring the Carolina Panthers against the Arizona Cardinals.',
          },
          {
            question: 'When does college football start in 2026?',
            answer:
              'College football Week 0 begins on Saturday, August 29, 2026, marking the first games that count toward the 2026 college football season.',
          },
          {
            question: 'Who is playing in the 2026 NFL season opener?',
            answer:
              'The Seattle Seahawks, the reigning Super Bowl champions, will host the New England Patriots on Wednesday, September 9, 2026, in the traditional primetime banner-raising season opener.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Sports"
        moreFromHubHref="/sports"
      >
        <p>
          The gridiron drought is ending sooner than you think. After months without live football, the 2026 NFL calendar is about to ignite, beginning with the traditional preseason kickoff in Canton and building toward a regular season opener that will feature a Super Bowl banner being raised to the rafters in Seattle.
        </p>

        <HighlightBox type="stat" color="orange">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
            {[
              { value: 'Aug 6', label: 'Hall of Fame Game (Panthers vs Cardinals)' },
              { value: 'Aug 29', label: 'College Football Week 0' },
              { value: 'Sep 9', label: 'NFL Regular Season Opener' },
              { value: 'Seahawks', label: 'Reigning Super Bowl Champions' },
              { value: 'Patriots', label: 'Season Opener Opponent' },
              { value: 'Canton, OH', label: 'Hall of Fame Game Location' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </HighlightBox>

        <h2>Hall of Fame Game | Panthers vs Cardinals in Canton</h2>
        <p>
          Live NFL hit-tracking returns on <strong>Thursday, August 6, 2026</strong>, with the annual <strong>Hall of Fame Game</strong> at Tom Benson Hall of Fame Stadium in Canton, Ohio. This year's matchup features the <strong>Carolina Panthers</strong> against the <strong>Arizona Cardinals</strong>, two teams looking to use the extra preseason contest as a springboard into the regular season. The Hall of Fame Game is the traditional start of the NFL calendar, held as part of the Pro Football Hall of Fame enshrinement weekend, and it marks the first live football action since the confetti fell on the previous season.
        </p>
        <p>
          For the Panthers and Cardinals, the game represents an opportunity to evaluate roster depth and give young players extended reps in a live-game environment. The Hall of Fame Game provides each team with an additional preseason contest beyond the standard three-game slate, making it a valuable evaluation tool for coaching staffs finalizing their 53-man rosters.
        </p>

        <h2>NFL Regular Season Opener | Seahawks Raise the Banner</h2>
        <p>
          The meaningful pursuit of the Lombardi Trophy officially kicks off on <strong>Wednesday, September 9, 2026</strong>. The reigning Super Bowl champion <strong>Seattle Seahawks</strong> will host the <strong>New England Patriots</strong> in a massive primetime banner-raising showcase at Lumen Field. It is the NFL's traditional season-opening format: the defending champions open at home on a Wednesday night, the banner goes up, and the new season begins.
        </p>
        <p>
          The Seahawks-Patriots matchup carries additional weight beyond the ceremonial aspects. New England enters the season looking to re-establish itself as a contender after a transitional period, and opening against the defending champions on the road is as difficult a test as the schedule can offer. For Seattle, the challenge is the one every defending champion faces: turning the page from last year's triumph and proving they can do it again.
        </p>

        <h2>College Football Week 0 | August 29</h2>
        <p>
          Before the NFL regular season begins, college football returns with <strong>Week 0 on Saturday, August 29, 2026</strong>. The early-season slate features a limited number of games, but they count in the standings, and they mark the official start of the 2026 college football season. Week 0 has become a fixture on the calendar, giving programs an opportunity to open their seasons a week before the traditional Labor Day weekend kickoff and capture national attention with a standalone window.
        </p>

        <p>
          For more sports coverage, see the{' '}
          <Link href="/sports" className="text-blue-600 hover:text-blue-800 underline">
            oWire Sports hub
          </Link>. For MLB pennant race coverage, see{' '}
          <Link href="/mlb/2026-pennant-races-world-series-schedule" className="text-blue-600 hover:text-blue-800 underline">
            oWire MLB 2026 Pennant Races
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}