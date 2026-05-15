import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 3600;

const SLUG = '/premier-league/aston-villa-vs-liverpool-may-15-2026';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Aston Villa vs Liverpool May 15 | Champions League on the Line',
  description:
    'Aston Villa host Liverpool at Villa Park on May 15, 2026 at 20:00 BST. Both clubs are tied on 59 points, with Champions League qualification decided by this result.',
  keywords: [
    'Aston Villa vs Liverpool',
    'Aston Villa Liverpool May 2026',
    'Premier League Champions League race 2026',
    'Villa Park Liverpool May 15',
    'Aston Villa Liverpool preview',
    'Premier League top four 2026',
    'Aston Villa 2026',
    'Liverpool 2026',
    'Premier League matchweek 37',
    'Champions League qualification Premier League',
    'Aston Villa form 2026',
    'Liverpool form 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Aston Villa vs Liverpool | Champions League Decider at Villa Park',
    description:
      'Both on 59 points with two games left. Whoever wins at Villa Park on May 15 controls their Champions League destiny.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'oWire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-14T12:00:00Z',
    modifiedTime: '2026-05-14T12:00:00Z',
    section: 'Premier League',
    tags: ['Aston Villa', 'Liverpool', 'Premier League', 'Champions League'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aston Villa vs Liverpool | 59 Points Each, One CL Spot Up for Grabs',
    description: 'Villa Park hosts the Premier League\'s highest-stakes match of the week. Both sides level on 59 pts.',
  },
};

export default function AstonVillaVsLiverpoolPage() {
  return (
    <>
      <NewsArticleSchema
        title="Aston Villa vs Liverpool May 15 | Champions League on the Line"
        description="Aston Villa host Liverpool at Villa Park on May 15, 2026 at 20:00 BST. Both clubs are tied on 59 points, with Champions League qualification decided by this result."
        author="Conan D. Boyle"
        authorUrl="https://www.owire.org/authors/conan-boyle"
        publishedTime="2026-05-14T12:00:00Z"
        modifiedTime="2026-05-14T12:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Premier League"
        keywords={['Aston Villa vs Liverpool', 'Champions League race 2026', 'Premier League top four']}
      />

      <NewsArticle
        title="Aston Villa vs Liverpool | Champions League Place Decided at Villa Park"
        subtitle="Both clubs sit on 59 points with two games left. Friday night's match at Villa Park is as close to a knockout tie as the Premier League gets."
        category="Premier League"
        categoryColor="purple"
        topicTag="sports"
        publishDate="2026-05-14T12:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Sports',
          authorSlug: 'conan-boyle',
        }}
        tags={['Aston Villa', 'Liverpool', 'Premier League', 'Champions League']}
        slug="premier-league-aston-villa-vs-liverpool-may-15-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Premier League', item: '/premier-league' },
          { name: 'Aston Villa vs Liverpool', item: SLUG },
        ]}
        keyTakeaways={[
          'Aston Villa host Liverpool at Villa Park on Friday May 15, 2026, with a 20:00 BST kick-off (3:00 PM ET / 12:00 PM PT).',
          'Both clubs are level on 59 points going into matchweek 37, making this a direct head-to-head battle for the fourth Champions League place.',
          'Liverpool have a superior goal difference of +12 against Villa\'s +4, meaning a draw favours Liverpool in the table standings.',
          'Aston Villa have won just one of their last five league matches, losing to Fulham and Tottenham, while Liverpool lost 2-3 at Old Trafford last time out.',
          'The final day on May 24 is a simultaneous 16:00 BST kick-off for all 10 fixtures, so whoever is ahead after matchweek 37 goes into the last game in control.',
        ]}
        keyTakeawaysColor="purple"
        faqItems={[
          {
            question: 'What time is Aston Villa vs Liverpool?',
            answer:
              'Aston Villa vs Liverpool kicks off at 20:00 BST on Friday May 15, 2026. That is 3:00 PM ET / 12:00 PM PT in the United States. The match is played at Villa Park, Birmingham.',
          },
          {
            question: 'What is at stake in Aston Villa vs Liverpool?',
            answer:
              'Fourth place in the Premier League and the final Champions League qualification spot are at stake. Both clubs are level on 59 points after 36 games. A win for either side pulls them two points clear heading into the final matchday on May 24.',
          },
          {
            question: 'Who has the better goal difference, Villa or Liverpool?',
            answer:
              'Liverpool have a goal difference of +12. Aston Villa have a goal difference of +4. If the match ends level, Liverpool stay above Villa in the table on goal difference alone.',
          },
          {
            question: 'What is Aston Villa\'s recent form?',
            answer:
              'Aston Villa\'s last five league results are: draw vs Nottingham Forest (1-1), win vs Sunderland (4-3), loss vs Fulham (0-1), loss vs Tottenham (1-2), draw vs Burnley (2-2). One win from five.',
          },
          {
            question: 'What is Liverpool\'s recent form?',
            answer:
              'Liverpool\'s last five league results are: wins vs Fulham (2-0), Everton (2-1), and Crystal Palace (3-1), then a 2-3 loss at Manchester United and a 1-1 draw with Chelsea. Three wins from five.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Premier League"
        moreFromHubHref="/premier-league"
      >
        <p>
          Aston Villa vs Liverpool on Friday May 15 is the Premier League's most consequential match
          of the week. Both clubs arrive at Villa Park level on 59 points, separated only by goal
          difference, with a Champions League place on the line and two games left in the 2025/26
          season. This is effectively a two-legged knockout tie compressed into 90 minutes.
        </p>

        <h2>The Stakes | 59 Points Each, One CL Place Left</h2>
        <p>
          After 36 matchdays, Liverpool sit fourth and Aston Villa fifth, each on 59 points. Liverpool's
          goal difference stands at +12. Villa's is +4. On current standings, Liverpool hold the final
          Champions League spot by eight goals. A draw on Friday keeps Liverpool above Villa, meaning
          Unai Emery's side need nothing less than a win to leapfrog them before the final-day
          simultaneous kick-offs on May 24.
        </p>
        <p>
          Manchester United in third are 6 points clear on 65, so neither Villa nor Liverpool can
          catch them for third place. The fight is purely for fourth. Bournemouth in sixth are 4 points
          behind Villa, so whoever wins this match is virtually guaranteed top-five at minimum. But
          only fourth comes with the Champions League.
        </p>

        <h2>Aston Villa Form | Patchy at the Worst Time</h2>
        <p>
          Villa have been inconsistent through the run-in. One win from five is not the form of a side
          that expected to be in this position. They beat Sunderland 4-3 in a wild game, but the
          defeats to Fulham and Tottenham in that same stretch pointed to a team that can be picked
          apart when under pressure. Emery's side have conceded 46 goals this season, the joint-most
          among the current top five. Their attack, however, remains dangerous: 50 league goals is the
          third-highest in the top seven.
        </p>

        <h2>Liverpool Form | The Man United Hangover</h2>
        <p>
          Liverpool have the better recent record, winning three of their last five. The 3-1 win over
          Crystal Palace was convincing. But the 2-3 loss at Old Trafford was their third defeat away
          from Anfield in six tries, and a 1-1 draw with Chelsea last time out was not the send-off
          a side fighting for the top four wants. Liverpool have conceded 48 goals this season and have
          been susceptible to counter-attacks, a threat Villa will target.
        </p>
        <p>
          Liverpool's goal difference advantage means a draw hands them the psychological and
          table edge going into the final day. Arne Slot's side know they do not need to win on
          Friday to control their own destiny, only avoid losing.
        </p>

        <h2>What Happens Next | Final Day on May 24</h2>
        <p>
          All 10 matchday 38 fixtures kick off simultaneously at 16:00 BST on Sunday May 24. Liverpool
          host Brentford at Anfield. Aston Villa travel to Manchester City. If both clubs are still
          level on points heading into the final day, Villa have by far the harder fixture. If Friday's
          winner goes two points clear, they take fourth whatever happens on the last day unless the
          other side overcomes the gap.
        </p>
        <p>
          For full Premier League standings, results, and coverage, visit the{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League hub
          </Link>
          . For the full history and context of the competition, see our{' '}
          <Link href="/premier-league/premier-league-history" className="text-blue-600 hover:text-blue-800 underline">
            Premier League history guide
          </Link>
          . Coverage of the MLS season is at the{' '}
          <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
            oWire MLS hub
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}
