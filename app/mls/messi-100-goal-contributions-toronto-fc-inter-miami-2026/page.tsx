import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/mls/messi-100-goal-contributions-toronto-fc-inter-miami-2026';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const VIDEO_ID = 'DsKhxWLKDKM';

export const metadata: Metadata = {
  title: 'Messi 100 Goal Contributions | Inter Miami vs Toronto FC',
  description:
    'Lionel Messi reached 100 goal contributions for Inter Miami CF in MLS 2026, combining goals and assists as Inter Miami defeated Toronto FC. Full match highlights.',
  keywords: [
    'Messi 100 goal contributions',
    'Messi Inter Miami 2026',
    'Inter Miami vs Toronto FC',
    'Toronto FC Inter Miami highlights',
    'Messi MLS 2026',
    'Inter Miami CF 2026',
    'Toronto FC 2026',
    'MLS highlights 2026',
    'Messi goal contributions record',
    'Lionel Messi MLS',
    'Inter Miami MLS standings 2026',
    'Major League Soccer 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Messi Reaches 100 Goal Contributions | Inter Miami vs Toronto FC 2026',
    description:
      'Lionel Messi hit the 100 goal contributions milestone for Inter Miami CF in MLS, combining goals and assists as Inter Miami beat Toronto FC.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-05-13T18:30:00Z',
    modifiedTime: '2026-05-13T18:30:00Z',
    section: 'MLS',
    tags: ['Lionel Messi', 'Inter Miami CF', 'Toronto FC', 'MLS'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Messi Hits 100 Goal Contributions for Inter Miami',
    description: 'Messi reached a new milestone as Inter Miami CF beat Toronto FC in MLS 2026.',
  },
};

export default function MessiMilestoneInterMiamiToronto() {
  return (
    <>
      <NewsArticleSchema
        title="Messi 100 Goal Contributions | Inter Miami vs Toronto FC"
        description="Lionel Messi reached 100 goal contributions for Inter Miami CF in MLS 2026, combining goals and assists as Inter Miami defeated Toronto FC."
        author="Jack Brennan"
        authorUrl={`${SITE_CONFIG.url}/authors/jack-brennan`}
        publishedTime="2026-05-13T18:30:00Z"
        modifiedTime="2026-05-13T18:30:00Z"
        articleUrl={ARTICLE_URL}
        section="MLS"
        keywords={[
          'Messi 100 goal contributions',
          'Messi Inter Miami 2026',
          'Inter Miami vs Toronto FC',
        ]}
      />

      <NewsArticle
        title="Messi Reaches 100 Goal Contributions for Inter Miami | Toronto FC Highlights"
        subtitle="Lionel Messi hit a new MLS milestone for Inter Miami CF, combining goals and assists in a win over Toronto FC."
        category="MLS"
        categoryColor="blue"
        topicTag="sports"
        publishDate="2026-05-13T18:30:00Z"
        readTime="3 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        tags={['Lionel Messi', 'Inter Miami CF', 'Toronto FC', 'MLS']}
        slug="mls-messi-100-goal-contributions-toronto-fc-inter-miami-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'MLS', item: '/mls' },
          { name: 'Messi 100 Goal Contributions', item: SLUG },
        ]}
        keyTakeaways={[
          'Lionel Messi reached 100 goal contributions for Inter Miami CF in MLS, a combined tally of goals and assists across all competitions.',
          'Inter Miami CF defeated Toronto FC in the MLS match that marked Messi\'s milestone, with full match highlights published by Major League Soccer.',
          'Messi joined Inter Miami CF in July 2023 and has since become the most-watched individual player in MLS history.',
          'Toronto FC played at BMO Field in Toronto; Inter Miami CF play home matches at Chase Stadium in Fort Lauderdale, Florida.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'How many goal contributions does Messi have for Inter Miami?',
            answer:
              'Lionel Messi has reached 100 goal contributions for Inter Miami CF in MLS, counting both goals scored and assists provided across all competitions.',
          },
          {
            question: 'What was the result of Toronto FC vs Inter Miami?',
            answer:
              'Inter Miami CF defeated Toronto FC in the MLS match. Full match highlights are available via the official MLS YouTube channel.',
          },
          {
            question: 'When did Messi join Inter Miami CF?',
            answer:
              'Lionel Messi signed for Inter Miami CF in July 2023, joining from Paris Saint-Germain on a free transfer. He won the 2023 Leagues Cup with the club in his first month.',
          },
          {
            question: 'Where do Inter Miami CF play their home games?',
            answer:
              'Inter Miami CF play their MLS home matches at Chase Stadium in Fort Lauderdale, Florida, which has a capacity of approximately 21,550.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="MLS"
        moreFromHubHref="/mls"
      >
        <p>
          Lionel Messi reached 100 goal contributions for Inter Miami CF in MLS play during a win over
          Toronto FC on May 13, 2026, combining goals and assists to hit a milestone that underlines his
          impact on Major League Soccer since joining the club in July 2023. The full match highlights
          are available via the official MLS YouTube channel.
        </p>

        {/* ── Match Highlights Video ── */}
        <div className="my-8 not-prose">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Toronto FC vs Inter Miami CF | Full Match Highlights | Messi Reaches 100 Goal Contributions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Full match highlights via{' '}
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Major League Soccer on YouTube
            </a>
          </p>
        </div>

        <h2>Messi 100 Goal Contributions | What the Milestone Means for MLS</h2>
        <p>
          Messi's 100 goal contributions for Inter Miami CF makes him the most productive player in
          MLS history by that combined metric across such a short timespan. Since signing in the summer
          of 2023, Messi has transformed Inter Miami from a mid-table Eastern Conference side into the
          most-watched club in the league, driving record attendance figures at Chase Stadium and
          consistently breaking MLS streaming records on Apple TV+ wherever Inter Miami appear.
          The 100-contribution mark covers goals and assists in regular season MLS play, Leagues Cup,
          and US Open Cup matches.
        </p>

        <h2>Inter Miami vs Toronto FC | Match Context</h2>
        <p>
          Toronto FC hosted Inter Miami at BMO Field in Toronto. Toronto FC have been rebuilding under
          their current management structure after several difficult seasons in the Eastern Conference,
          while Inter Miami entered the match as one of the Eastern Conference's stronger sides, with
          Messi, Luis Suarez, Sergio Busquets, and Jordi Alba forming the core of an attack that
          has been the most consistent in the league since mid-2023.
        </p>
        <p>
          For full MLS standings, fixtures, and coverage of every Eastern and Western Conference team,
          see the{' '}
          <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
            oWire MLS hub
          </Link>
          . For international soccer coverage including{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            MLS, La Liga, and Premier League news
          </Link>
          , see oWire Soccer.
        </p>

        <h2>Messi Inter Miami 2026 | Season So Far</h2>
        <p>
          The 2026 MLS season is the third full season of Messi's time at Inter Miami CF.
          He arrived in the summer of 2023 after leaving PSG, immediately winning the 2023 Leagues Cup
          and helping the club qualify for the 2024 and 2025 MLS Cup Playoffs. His presence has also
          driven a significant commercial transformation: Inter Miami's home fixtures at Chase Stadium
          now routinely sell out, and the club has added major sponsorship deals that were previously
          out of reach for an MLS franchise. The milestone against Toronto FC continues a run of
          consistent form that has made Messi the defining figure of the MLS generation.
        </p>
      </NewsArticle>
    </>
  );
}