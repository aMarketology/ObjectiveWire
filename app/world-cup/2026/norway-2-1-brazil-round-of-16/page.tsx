import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-norway-2-1-brazil-round-of-16';
const URL_PATH = '/world-cup/2026/norway-2-1-brazil-round-of-16';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-norway-2-1-brazil-round-of-16.jpg';

export const metadata: Metadata = {
  title: 'Norway 2-1 Brazil | World Cup 2026 Round of 16 | Haaland Ends Selecao Dream',
  description:
    "Norway produced the biggest upset of the 2026 World Cup, eliminating Brazil 2-1 in the Round of 16 in a historic rematch 28 years after their famous 1998 meeting. Erling Haaland and Norway's direct counter-attack punished a ball-dominant Brazil side ruthlessly.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Norway 2-1 Brazil | The Biggest Upset of World Cup 2026 | Haaland Stuns Selecao',
    description: "28 years after 1998. Haaland and Norway do it again. Brazil controlled everything except the scoreboard. The Selecao are out. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-04T22:00:00Z',
    modifiedTime: '2026-07-04T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Norway', 'Brazil', 'Round of 16', 'Haaland', 'Upset', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NORWAY ELIMINATE BRAZIL. 2-1. The biggest upset of the 2026 World Cup. Haaland rewrites history.",
    description: "Brazil had the ball. Norway had the goals. 28 years after 1998, Norway beat Brazil at a World Cup again. This is the match of the tournament. Report by Jack Brennan.",
  },
};

export default function NorwayBrazilR16Page() {
  return (
    <NewsArticle
      title="Norway 2-1 Brazil: Haaland and the Direct Counter Produce the Biggest Upset of World Cup 2026"
      subtitle="In a historic rematch 28 years after their famous 1998 meeting, Norway stunned Brazil 2-1 in the Round of 16. The Selecao dominated possession across 90 minutes but Erling Haaland and Norway's direct, physical counter-attack punished them ruthlessly to end the South American giants' World Cup campaign."
      category="World Cup 2026 · Round of 16"
      categoryColor="blue"
      topicTag="sports"
      publishDate="July 4, 2026"
      readTime="7 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Norway 2-1 Brazil World Cup 2026 Round of 16 biggest upset Haaland' }}
      tags={['World Cup 2026', 'Norway', 'Brazil', 'Round of 16', 'Haaland', 'Upset', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Norway vs Brazil', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'brazil-2-1-japan-round-of-32', title: 'Brazil 2-1 Japan | Round of 32', url: '/world-cup/2026/brazil-2-1-japan-round-of-32', publishDate: 'June 29, 2026', category: 'Sports' },
        { slug: 'norway-2-1-ivory-coast-round-of-32', title: 'Norway 2-1 Ivory Coast | Haaland 86th Min', url: '/world-cup/2026/norway-2-1-ivory-coast-round-of-32', publishDate: 'June 30, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Norway defeated Brazil 2-1 in the Round of 16 on July 4, 2026, producing the biggest upset of the 2026 World Cup.',
        'The result is a historic echo of 1998, when Norway last defeated Brazil at a World Cup, 28 years before this rematch.',
        'Brazil dominated possession throughout but Norway\'s direct, physical counter-attack converted chances with ruthless efficiency.',
        'Erling Haaland was central to Norway\'s victory, continuing his status as the most decisive individual player in the tournament.',
        'Brazil are eliminated, ending the Selecao\'s 2026 World Cup campaign at the Round of 16.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Norway vs Brazil at the 2026 World Cup?',
          answer: 'Norway defeated Brazil 2-1 in the Round of 16 on July 4, 2026.',
        },
        {
          question: 'Is Norway beating Brazil the biggest upset of the 2026 World Cup?',
          answer: 'Yes. Brazil were considered one of the pre-tournament favorites and among the most likely eventual winners. Norway defeating them in the Round of 16 is the largest upset the 2026 tournament has produced.',
        },
        {
          question: 'Did Norway beat Brazil at the 1998 World Cup?',
          answer: 'Yes. Norway famously defeated Brazil 2-1 in the group stage of the 1998 World Cup in France, eliminating them from their group. The 2026 Round of 16 match represents a historically resonant repeat of that result 28 years later.',
        },
        {
          question: 'How did Norway beat Brazil despite Brazil having more possession?',
          answer: "Norway's direct, physical counter-attack was perfectly designed to exploit the space left by a Brazilian side that pushed forward in search of goals. Norway converted their counter-attacking opportunities with the clinical finishing that Haaland and his teammates have demonstrated throughout the tournament.",
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          History does not repeat itself. Except when <strong>Erling Haaland</strong> and
          <strong> Norway</strong> are involved. Twenty-eight years after a famous 1998 group
          stage result that stunned the football world, Norway and Brazil met again at a World
          Cup and the outcome followed the same astonishing script. Norway 2, Brazil 1. The
          biggest upset of the 2026 tournament. The Selecao are going home.
        </p>

        <p>
          The tactical story of this match is clear and almost paradoxical. Brazil had the ball.
          Brazil had the possession percentage. Brazil had more attacking attempts. Brazil had
          more of every statistical measure that coaches and analysts use to determine which
          team controlled a game. Norway had the goals. And in knockout football at the World Cup,
          the goals are the only number that matters.
        </p>

        <h2>Brazil's Dominance That Produced Nothing</h2>

        <p>
          The Selecao came out with the intent of a team that had studied its Round of 32
          performance against Japan, identified the problems with being too passive against
          organized defenses, and decided to take the game to Norway from the first whistle.
          They had the ball constantly. They moved it quickly. Their technical quality was
          on full display throughout, and there were long periods where it seemed inevitable
          that the pressure would eventually translate into goals.
        </p>

        <p>
          Norway's defensive organization resisted with remarkable collective discipline.
          Their shape was compact, their tracking of runners diligent, and their goalkeeper
          made the saves that Norway needed when Brazilian technical quality created
          genuine opportunities. When Norway cleared their lines, they did not simply boot
          the ball away. They launched counter-attacks with directness and pace that
          Brazil's defensive line was not structured to deal with.
        </p>

        <h2>The Counter-Attack | Norway's Weapon, Brazil's Weakness</h2>

        <p>
          Norway's tactical approach against Brazil was exactly what it had been against
          every opponent in this tournament: absorb, organize, defend with structure, and
          then explode forward through Haaland and their direct runners when the space
          presents itself. Against a Brazilian side pushing forward and leaving space
          behind their defensive line, the formula was devastating.
        </p>

        <p>
          The first goal came from exactly this template. Brazil pressing high, Norway
          winning the ball, and the transition that followed was played with a speed
          and precision that the Selecao's defensive recovery could not match.
          Haaland was involved, as he is always involved, and the finish was what
          it always is: clinical beyond argument.
        </p>

        <p>
          Brazil responded and pulled a goal back, which set up a frantic final period.
          But Norway found their second when Brazil again committed too many players
          forward in search of an equalizer, and the same space that had been exploited
          before opened up again. Norway punished it again. The Selecao had no answer.
        </p>

        <h2>The 1998 Echo</h2>

        <p>
          Those who were alive in 1998 and following the World Cup in France remember
          exactly where they were when Norway defeated Brazil in the group stage. Tore
          Andre Flo. A famous result that knocked the tournament's favorites from their
          group. Norway celebrated for days. Brazil recalibrated and went on to lose to
          France in the final.
        </p>

        <p>
          In 2026, there is no recalibration available. Brazil are eliminated entirely.
          The 1998 defeat was in the group stage with other matches still to play.
          This defeat ends the tournament for the Selecao. Norway have done something
          even more significant than their predecessors managed 28 years earlier.
        </p>

        <h2>Haaland and Norway in the Quarterfinals</h2>

        <p>
          Norway advance to the World Cup quarterfinals having eliminated one of the
          most decorated nations in the history of the sport. Their tournament run now
          reads: Ivory Coast in the Round of 32, Brazil in the Round of 16. Their next
          opponent will spend considerable time studying how a possession-based, technically
          superior opponent was beaten by a direct and disciplined counter-attacking system.
        </p>

        <p>
          The answer, as it always is with Norway, comes back to Haaland. When he runs,
          the entire defensive calculation changes. When he receives the ball in space,
          the probability of a goal is higher than with almost any other player in the
          world. Norway have built their entire tournament around that reality. So far,
          the reality has been entirely sufficient. Brazil are proof of what happens when
          you cannot find an answer to it.
        </p>

      </div>
    </NewsArticle>
  );
}
