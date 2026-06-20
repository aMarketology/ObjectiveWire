import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-argentina-3-algeria-0-group-j';
const URL_PATH = '/world-cup/2026/argentina-3-algeria-0-group-j';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-argentina-3-algeria-0-group-j.jpg';

export const metadata: Metadata = {
  title: 'Argentina 3–0 Algeria | World Cup 2026 Group J Match Report',
  description:
    'Lionel Messi scored a hat trick as Argentina defeated Algeria 3–0 in their World Cup 2026 Group J opener in Dallas, sending a definitive message to every other title contender in the field.',
  keywords: [
    'Argentina Algeria World Cup 2026',
    'Messi hat trick World Cup 2026',
    'World Cup 2026 Group J',
    'Argentina World Cup 2026',
    'Messi World Cup 2026',
    'Argentina Algeria match report',
    'World Cup 2026 match report',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Argentina 3–0 Algeria | World Cup 2026 Group J',
    description: 'Messi hat trick. Argentina ruthless. The defending champions have issued their warning. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-16T02:00:00Z',
    modifiedTime: '2026-06-16T02:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Argentina', 'Algeria', 'Group J', 'Match Report', 'Lionel Messi'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Argentina 3–0 Algeria | World Cup 2026',
    description: 'Messi hat trick on opening night. Argentina mean business. Full report.',
  },
};

export default function ArgentinaAlgeriaPage() {
  return (
    <NewsArticle
      title="Argentina 3–0 Algeria: Messi Hat Trick Launches Title Defense in Dallas"
      subtitle="Lionel Messi scored three times as the defending champions controlled Group J from the first whistle, leaving no doubt about their intent to retain the trophy"
      category="World Cup 2026 · Group J"
      categoryColor="blue"
      topicTag="sports"
      publishDate="June 15, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Argentina 3–0 Algeria: Messi Hat Trick Launches Title Defense in Dallas' }}
      tags={['World Cup 2026', 'Argentina', 'Algeria', 'Group J', 'Match Report', 'Lionel Messi']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Argentina vs Algeria', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'germany-curacao', title: 'Germany 7–1 Curaçao | Group E Report', url: '/world-cup/2026/germany-7-curacao-1-group-e', publishDate: 'June 14, 2026', category: 'Sports' },
        { slug: 'ivory-coast-ecuador', title: 'Ivory Coast 1–0 Ecuador | Group E Report', url: '/world-cup/2026/ivory-coast-1-ecuador-0-group-e', publishDate: 'June 14, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Argentina defeat Algeria 3–0 in Dallas with Lionel Messi scoring a hat trick in the Group J opener.',
        'Argentina held 62% possession, registered 8 shots on target and an xG of 2.4 against Algeria\'s 0.6.',
        'Messi\'s first goal came from a clinical finish inside the box after intricate build-up in the 24th minute.',
        'His second and third goals came after the break, each demonstrating composure under pressure that belies his age.',
        'Argentina top Group J on maximum points, leaving Algeria, who mustered just 3 shots on target, with nothing.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Argentina vs Algeria at World Cup 2026?',
          answer: 'Argentina defeated Algeria 3–0 in their World Cup 2026 Group J opener in Dallas. Lionel Messi scored all three goals.',
        },
        {
          question: 'Did Messi score a hat trick at World Cup 2026?',
          answer: 'Yes. Lionel Messi scored a hat trick against Algeria in Argentina\'s opening Group J match, becoming one of the defining images of the tournament\'s early rounds.',
        },
        {
          question: 'How did Algeria perform against Argentina?',
          answer: 'Algeria had 38% possession and managed only 3 shots on target. They showed moments of individual quality but lacked collective cohesion to threaten the Argentine defense consistently.',
        },
        {
          question: 'What does the Argentina result mean for Group J?',
          answer: 'Argentina immediately take control of Group J. All remaining teams now know they must beat Argentina to win the group, or chase results elsewhere. Algeria must win their next two fixtures to stay alive.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          If there was any question about whether Lionel Messi, at 38, could still carry Argentina
          in a World Cup, it lasted approximately 24 minutes. His first goal in Dallas was the kind
          of finish that only a player of absolute elite quality produces — weight of pass, timing
          of run, placement of shot, all of it calibrated to a fraction. When it went in, the
          AT&T Stadium exhaled in something between relief and awe.
        </p>

        <p>
          By the time he completed his hat trick in the 71st minute, the question had been retired
          entirely. Argentina defeated Algeria 3–0, and while the margin was comfortable, the
          manner was what sent the message that the rest of the tournament will be decoding for days.
        </p>

        <h2 id="messi-performance">Messi at 38 | A Different Kind of Dominance</h2>

        <p>
          Messi did not run Algeria into the ground with pace or press with youthful intensity. He
          did something harder to defend: he found space that should not have existed, received
          the ball in positions that seemed closed until they were suddenly not, and finished with
          the calm authority of a man who has done this so many times that pressure is simply
          another atmospheric condition.
        </p>

        <p>
          His first goal arrived after a fluid Argentina build-up that drew Algeria's midfield
          block slightly left before releasing the ball vertically at exactly the moment the
          defensive shape was off balance. Messi received inside the box, shaped onto his left foot,
          and placed it low to the keeper's right. It was not spectacular. It was precise.
        </p>

        <p>
          The second and third goals after the break were variations on the same theme. Algeria
          tried different positional solutions — deeper lines, man-marking assignments — and none
          of them produced a consistent answer. Argentina simply adjusted and found new angles.
          That capacity to adapt within a match is what elite teams do, and Argentina did it without
          obvious difficulty.
        </p>

        <h2 id="argentina-system">How Argentina Controlled Group J</h2>

        <p>
          Beyond Messi, Argentina's performance was notable for its collective structure. They held
          62% possession and used it purposefully rather than circulating for the sake of it. The
          high press was organized and well-timed — Algeria turned the ball over in dangerous areas
          on multiple occasions in the first half, each time creating transition opportunities that
          Argentina converted into forward momentum if not always into shots.
        </p>

        <p>
          Pass accuracy of 89% is a meaningful number in a World Cup context. It reflects a team
          that knows exactly what it is doing with the ball, where the next action leads, and when
          to change the tempo. Argentina looked like a side that had spent months drilling specific
          scenarios rather than improvising against an overmatched opponent.
        </p>

        <h2 id="algeria-assessment">Algeria | Moments Without Cohesion</h2>

        <p>
          Algeria showed enough individual quality to suggest they will not exit the tournament
          without registering points. Their best moments came on transitions — moments where their
          forwards got behind the Argentine defensive line — but the final ball was consistently
          wrong, and the movement ahead of the ball lacked the coordinated runs that turn
          individual talent into genuine chances.
        </p>

        <p>
          Three shots on target from 38% possession is a statline that tells the story concisely.
          Algeria were not catastrophically bad. They were simply facing a side operating at a
          level their current squad is not equipped to match. Against easier Group J opposition,
          they remain dangerous. Against Argentina, they were outclassed.
        </p>

        <h2 id="group-j-table">Group J Standings After Matchday 1</h2>

        <p>
          Argentina sit top with three points and a goal difference of plus three. The result
          puts the rest of Group J — and the wider tournament — on notice. No other opening-day
          performance in any group produced a hat trick from the sport's defining player. The
          defending champions are defending with intent.
        </p>

        <p>
          For the remaining teams in Group J, the calculation is now clear: you must beat
          Argentina, or you must accumulate enough results against the others that your fate
          does not depend on facing them at full strength. Neither option is comfortable.
          Argentina, for their part, appeared entirely unbothered by the weight of expectation
          that came with being the team everyone wanted to see fall on opening day.
        </p>

      </div>
    </NewsArticle>
  );
}
