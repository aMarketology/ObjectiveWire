import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/mls/cavan-sullivan-first-mls-goal-philadelphia-union';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Cavan Sullivan First MLS Goal | Philadelphia Union Phenom Milestone',
  description:
    'Cavan Sullivan scored his first MLS regular-season goal for Philadelphia Union on May 13, 2026, at 16 years and 227 days, becoming the eighth-youngest scorer in MLS history.',
  keywords: [
    'Cavan Sullivan first MLS goal',
    'Cavan Sullivan Philadelphia Union',
    'Cavan Sullivan goal May 2026',
    'Cavan Sullivan age',
    'Cavan Sullivan MLS history',
    'Philadelphia Union 2026',
    'youngest MLS goalscorer',
    'Cavan Sullivan Manchester City',
    'MLS teenage scorer 2026',
    'Cavan Sullivan biomechanics',
    'Cavan Sullivan stats 2026',
    'MLS soccer analytics',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Cavan Sullivan First MLS Goal | Philadelphia Union, May 13 2026',
    description:
      'At 16 years and 227 days, Cavan Sullivan became the eighth-youngest goalscorer in MLS history, also adding an assist in the same match against Orlando City SC.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'oWire',
    authors: ['Alfonso'],
    publishedTime: '2026-05-15T10:00:00Z',
    modifiedTime: '2026-05-15T10:00:00Z',
    section: 'MLS',
    images: [{ url: 'https://www.owire.org/mls/cavan_sullivan.png', width: 1200, height: 675, alt: 'Cavan Sullivan celebrating his first MLS goal for Philadelphia Union' }],
    tags: ['Cavan Sullivan', 'Philadelphia Union', 'MLS', 'Sports Science', 'Soccer Analytics'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cavan Sullivan Scores First MLS Goal at 16 | The Science Behind the Strike',
    description: '8th-youngest goalscorer in MLS history. A goal, an assist, and a trajectory that is right on schedule.',
    images: ['https://www.owire.org/mls/cavan_sullivan.png'],
  },
};

export default function CavanSullivanFirstGoalPage() {
  return (
    <>
      <NewsArticleSchema
        title="Cavan Sullivan First MLS Goal | Philadelphia Union Phenom Milestone"
        description="Cavan Sullivan scored his first MLS regular-season goal for Philadelphia Union on May 13, 2026, at 16 years and 227 days, becoming the eighth-youngest scorer in MLS history."
        author="Alfonso"
        authorUrl="https://www.owire.org/authors/alfasa"
        publishedTime="2026-05-15T10:00:00Z"
        modifiedTime="2026-05-15T10:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl="https://www.owire.org/mls/cavan_sullivan.png"
        imageWidth={1200}
        imageHeight={675}
        section="MLS"
        keywords={[
          'Cavan Sullivan first MLS goal',
          'Cavan Sullivan Philadelphia Union',
          'youngest MLS goalscorer 2026',
        ]}
      />

      <NewsArticle
        title="Cavan Sullivan Bags First MLS Goal | Philadelphia Union, May 13 2026"
        subtitle="At 16 years and 227 days, Sullivan became the eighth-youngest goalscorer in MLS history, adding an assist in the same half against Orlando City SC."
        category="MLS"
        categoryColor="blue"
        topicTag="sports"
        publishDate="2026-05-15T10:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Alfonso',
          role: 'Chief Scientific Sports Correspondent',
          authorSlug: 'alfasa',
        }}
        thumbnail={{
          src: '/mls/cavan_sullivan.png',
          alt: 'Cavan Sullivan celebrating his first MLS goal for Philadelphia Union',
        }}
        tags={['Cavan Sullivan', 'Philadelphia Union', 'MLS', 'Sports Science', 'Soccer Analytics']}
        slug="mls-cavan-sullivan-first-mls-goal-philadelphia-union"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'MLS', item: '/mls' },
          { name: 'Cavan Sullivan First MLS Goal', item: SLUG },
        ]}
        keyTakeaways={[
          'Cavan Sullivan scored his first MLS regular-season goal for Philadelphia Union on May 13, 2026, at 16 years and 227 days of age.',
          'The goal made Sullivan the eighth-youngest scorer in MLS regular-season history, and the second-youngest player to record a goal and an assist in a single match, behind Freddy Adu (15 years, 339 days).',
          'Sullivan entered as a 44th-minute substitute for the injured Jovan Lukic and produced two goal contributions in under 45 minutes of play.',
          'Philadelphia Union lost 3-4 to Orlando City SC at Inter&Co Stadium, with Sullivan\'s goal arriving in the 75th minute off a cross from Ben Bender.',
          'Sullivan signed a homegrown contract with Philadelphia Union at age 14 and has a reported future transfer agreement with Manchester City.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'What is Cavan Sullivan\'s first MLS goal?',
            answer:
              'Cavan Sullivan scored his first MLS regular-season goal on May 13, 2026, for Philadelphia Union against Orlando City SC at Inter&Co Stadium. He finished a cross from Ben Bender in the 75th minute, tucking the ball past goalkeeper Maxime Crepeau.',
          },
          {
            question: 'How old is Cavan Sullivan?',
            answer:
              'Cavan Sullivan is 16 years old. At the time of his first MLS goal on May 13, 2026, he was 16 years and 227 days old, making him the eighth-youngest scorer in MLS regular-season history.',
          },
          {
            question: 'Is Cavan Sullivan signing for Manchester City?',
            answer:
              'Cavan Sullivan has a reported future transfer agreement with Manchester City. He signed a homegrown contract with Philadelphia Union at age 14. The terms and timing of his move to City have not been officially confirmed.',
          },
          {
            question: 'Who is the youngest player to score a goal and assist in the same MLS match?',
            answer:
              'Freddy Adu holds the record, achieving the feat at 15 years and 339 days. Cavan Sullivan became the second-youngest, recording both a goal and an assist against Orlando City SC at 16 years and 227 days.',
          },
          {
            question: 'What was the result of Philadelphia Union vs Orlando City SC?',
            answer:
              'Orlando City SC defeated Philadelphia Union 4-3 on May 13, 2026. Despite Sullivan scoring and assisting in the second half, the Union could not overturn the deficit from a chaotic match at Inter&Co Stadium.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="MLS"
        moreFromHubHref="/mls"
      >
        <p>
          Cavan Sullivan scored his first MLS regular-season goal for Philadelphia Union on May 13,
          2026, at Inter&Co Stadium in Orlando. Entering as a 44th-minute substitute, the 16-year-old
          phenom registered a goal and an assist in under 45 minutes of play, becoming the
          eighth-youngest scorer in MLS history and the second-youngest player ever to produce both
          contributions in a single fixture. Only Freddy Adu, at 15 years and 339 days, did it younger.
        </p>

        {/* ── Match Highlights Video ── */}
        <div className="my-8 not-prose">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/XLoBPgwyIhw?rel=0&modestbranding=1"
              title="Cavan Sullivan First MLS Goal | Philadelphia Union vs Orlando City SC"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Full highlights via{' '}
            <a
              href="https://www.youtube.com/watch?v=XLoBPgwyIhw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Major League Soccer on YouTube
            </a>
          </p>
        </div>

        <h2>The Statistical Significance | 8th-Youngest in MLS History</h2>
        <p>
          Sullivan's strike arrived in the 75th minute of a 4-3 defeat to Orlando City SC. The
          probability of a substitute within his age bracket generating two primary goal contributions
          in a 45-minute sample is vanishingly rare in MLS history. Context sharpens the number
          further: Sullivan had already registered two goals in the Concacaf Champions Cup earlier
          in 2026, so this first league goal is the formalisation of a trajectory that had been
          building for months. At 16 years and 227 days, he is the second-youngest player in MLS
          history to record a goal and an assist in the same fixture.
        </p>

        <h2>Biomechanics of the Strike | Precision Over Power</h2>
        <p>
          The goal began on the right flank, moved through midfield, and ended with a precise cross
          from Ben Bender. Sullivan's finish was not a product of brute force. Still in the early
          stages of his physical maturation, he relied instead on vector positioning, reading the
          trajectory of Bender's delivery, identifying the structural gap in Orlando's defensive
          shape, and arriving at the exact right moment in the penalty area as two defenders failed
          to intercept the cutback. His foot angle, low center of gravity, and visual tracking of the
          ball's spin produced a clean finish past Maxime Crepeau. Economy of movement over maximum
          velocity. This is the hallmark of a technically exceptional young player.
        </p>

        <h2>Load Management and Neurological Development</h2>
        <p>
          Philadelphia Union have handled Sullivan's development with deliberate caution since he
          signed his homegrown contract at 14. Head coach Bradley Carnell described his impact as
          "trickle-down" in nature, introducing him into high-intensity environments in controlled
          bursts rather than extended run-outs. At 16, the prefrontal cortex, the part of the brain
          responsible for in-game decision-making under pressure, is still undergoing neuroplastic
          development. Sullivan's ability to enter a 3-2 match in the 44th minute and produce two
          contributions within 31 minutes indicates his nervous system has already adapted to the
          velocity of professional competition.
        </p>
        <p>
          "It is a pretty great feeling scoring my first," Sullivan said after the match. "I have been
          working on this one for a while."
        </p>

        <h2>What Comes Next | Manchester City and the Curve Ahead</h2>
        <p>
          Sullivan has a reported future transfer agreement with Manchester City. His underlying
          metrics, touches, spatial awareness, and conversion efficiency in limited appearances, are
          ahead of where most teenage attackers sit at the same stage. The first MLS goal is a data
          point on what is shaping up to be an exceptional curve. The Union lost 3-4 on Wednesday,
          but the wider MLS story was Sullivan.
        </p>
        <p>
          For full MLS standings, results, and all 2026 season coverage, see the{' '}
          <Link href="/mls" className="text-blue-600 hover:text-blue-800 underline">
            oWire MLS hub
          </Link>
          . For the Messi milestone article from the same week, see{' '}
          <Link href="/mls/messi-100-goal-contributions-toronto-fc-inter-miami-2026" className="text-blue-600 hover:text-blue-800 underline">
            Messi reaches 100 goal contributions for Inter Miami
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}
