import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/world-cup-why-group-matches-played-simultaneously.jpg';

export const revalidate = 86400;

const SLUG = '/world-cup/why-group-matches-played-simultaneously';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Why World Cup Group Matches Are Played Simultaneously | The 1982 Rule',
  description:
    'FIFA plays the final group matches of every World Cup at the same time to stop collusion and protect fair play. The rule dates to the 1982 Disgrace of Gijon, when West Germany and Austria stopped attacking to eliminate Algeria.',
  keywords: [
    'why are World Cup matches played simultaneously',
    'World Cup simultaneous kickoff rule',
    'Disgrace of Gijon 1982',
    'West Germany Austria 1982',
    'FIFA fair play rule',
    'World Cup group stage simultaneous matches',
    'why final group games same time',
    'World Cup collusion rule',
    '1986 World Cup rule change',
    'Algeria 1982 World Cup',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Why World Cup Group Matches Are Played Simultaneously | The 1982 Rule',
    description:
      'The simultaneous kickoff rule exists because of the 1982 Disgrace of Gijon, when West Germany and Austria played out a 1-0 result that eliminated Algeria. Here is how FIFA fixed it.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-09-29T14:00:00Z',
    modifiedTime: '2026-09-29T14:00:00Z',
    section: 'Sports',
    tags: ['World Cup', 'FIFA', 'Soccer', 'Explainer', 'Disgrace of Gijon'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Why World Cup group matches are played simultaneously' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why World Cup Group Matches Kick Off at the Same Time',
    description: 'The rule exists because of the 1982 Disgrace of Gijon, when two teams stopped trying to eliminate a third.',
    images: [OG_IMAGE],
  },
};

export default function WhyGroupMatchesSimultaneousPage() {
  return (
    <>
      <NewsArticleSchema
        title="Why World Cup Group Matches Are Played Simultaneously | The 1982 Rule"
        description="FIFA plays the final group matches of every World Cup at the same time to stop collusion and protect fair play. The rule dates to the 1982 Disgrace of Gijon, when West Germany and Austria stopped attacking to eliminate Algeria."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-09-29T14:00:00Z"
        modifiedTime="2026-09-29T14:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'why are World Cup matches played simultaneously',
          'Disgrace of Gijon 1982',
          'FIFA fair play rule',
        ]}
      />

      <NewsArticle
        title="Why World Cup Group Matches Are Played Simultaneously | The Rule Born From the Disgrace of Gijon"
        subtitle="FIFA schedules the final group matches of every World Cup to kick off at the exact same time. The rule exists to stop two teams from colluding on a result that helps both of them while eliminating a third, and it traces directly to a single infamous match in 1982."
        category="World Cup · Explainer"
        categoryColor="red"
        topicTag="sports"
        publishDate="September 29, 2026"
        readTime="5 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Reporter, ObjectWire',
          avatar: '/influncer/author/jack_brennen.JPG',
          authorSlug: 'jack-brennan',
        }}
        slug={SLUG}
        url={SLUG}
        thumbnail={{ src: OG_IMAGE, alt: 'Why World Cup group matches are played simultaneously' }}
        tags={['World Cup', 'FIFA', 'Soccer', 'Explainer', 'Disgrace of Gijon']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'World Cup 2026', item: '/world-cup' },
          { name: 'Explainer', item: '/world-cup' },
          { name: 'Simultaneous Kickoffs', item: SLUG },
        ]}
        moreFromHub={[
          { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
          { slug: 'world-cup-2026-group-stage-draw-all-48-groups', title: 'World Cup 2026 Group Stage Draw | All 48 Groups', url: '/world-cup/world-cup-2026-group-stage-draw-all-48-groups', publishDate: 'December 2025', category: 'Sports' },
          { slug: 'world-cup-2026-schedule-dates', title: 'World Cup 2026 Schedule | Dates and Venues', url: '/world-cup/world-cup-2026-schedule-dates', publishDate: '2026', category: 'Sports' },
        ]}
        moreFromHubLabel="World Cup 2026 Coverage"
        moreFromHubHref="/world-cup"
        keyTakeaways={[
          'FIFA has played the final group matches of every World Cup at the same time since 1986 to protect the fairness of the competition.',
          'The rule stops any team from knowing another team\'s score before finishing its own game, and it prevents two teams from agreeing on a result that helps both while hurting a third.',
          'The rule was introduced after the 1982 Disgrace of Gijon, when West Germany and Austria stopped attacking after an early goal so both could advance at Algeria\'s expense.',
          'The 2026 World Cup used the same simultaneous kickoff format for all final group-stage matchdays across its 12 groups.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'Why are World Cup group matches played at the same time?',
            answer:
              'FIFA plays the final group matches of each group at the same time to stop any team from knowing another team\'s score before finishing its own game, which protects fair play and prevents collusion.',
          },
          {
            question: 'When did FIFA start playing group matches simultaneously?',
            answer:
              'FIFA introduced simultaneous kickoffs for the final group matches starting with the 1986 World Cup in Mexico.',
          },
          {
            question: 'What was the Disgrace of Gijon?',
            answer:
              'The Disgrace of Gijon was a 1982 World Cup match between West Germany and Austria in which both teams stopped attacking after West Germany scored an early goal, producing a 1-0 result that sent both teams through and eliminated Algeria.',
          },
          {
            question: 'How does the simultaneous kickoff rule stop cheating?',
            answer:
              'By kicking off at the same time, no team can know the result of the other group match before finishing its own, so two teams cannot agree on a score that helps both of them while hurting a third team.',
          },
        ]}
      >
        <div className="prose prose-lg max-w-none">

          <p>
            FIFA plays the final group matches of every World Cup at the exact same time, and the reason is simple: to protect the fairness of the competition. The rule stops any team from knowing another team's score before it finishes its own game, and it prevents two teams from agreeing on a result that helps both of them while hurting a third.
          </p>

          <p>
            The rule has been in place since 1986, and it exists because of one of the most infamous matches in soccer history. For the full picture of how the 2026 tournament was structured, see the{' '}
            <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
              World Cup 2026 hub
            </Link>
            .
          </p>

          <h2>Fair Play | Why Simultaneous Kickoffs Matter</h2>

          <p>
            In the final round of group play, the two matches in each group kick off at the same moment. This is a deliberate design choice with two goals. First, it stops any team from knowing another team's score before it finishes its own game, which would let a team play for a specific result rather than a win. Second, it removes the incentive for two teams to collude on a scoreline that benefits both of them while eliminating a third team.
          </p>

          <p>
            Without simultaneous kickoffs, a team playing later in the day could know exactly what result it needs to advance, and two teams could quietly arrange a mutually convenient outcome. The simultaneous format makes that kind of manipulation far harder to pull off.
          </p>

          <h2>The Disgrace of Gijon | The Match That Forced the Rule</h2>

          <p>
            The rule traces directly to a single match at the 1982 World Cup in Spain. On June 25, 1982, West Germany faced Austria in Gijon in the final group match. West Germany scored early through Horst Hrubesch in the 10th minute, and then both teams effectively stopped trying to score. The 1-0 result sent both West Germany and Austria through to the next round, and it eliminated Algeria, which had already played its final match and could only watch.
          </p>

          <p>
            The match became known as the Disgrace of Gijon, and it embarrassed FIFA enough that the governing body changed the rules. Starting with the 1986 World Cup in Mexico, the final group matches in each group have been played simultaneously.
          </p>

          <h2>The Rule at the 2026 World Cup</h2>

          <p>
            The 2026 World Cup, the first with 48 teams, used the same simultaneous kickoff format for every final group-stage matchday across its 12 groups. You can see how those groups were drawn in our{' '}
            <Link href="/world-cup/world-cup-2026-group-stage-draw-all-48-groups" className="text-blue-600 hover:text-blue-800 underline">
              full group stage draw breakdown
            </Link>
            , and the complete match calendar is in our{' '}
            <Link href="/world-cup/world-cup-2026-schedule-dates" className="text-blue-600 hover:text-blue-800 underline">
              World Cup 2026 schedule guide
            </Link>
            .
          </p>

          <p>
            The simultaneous kickoff rule is one of the quiet safeguards that keeps the World Cup honest, and it has been doing that job for four decades.
          </p>

        </div>
      </NewsArticle>
    </>
  );
}