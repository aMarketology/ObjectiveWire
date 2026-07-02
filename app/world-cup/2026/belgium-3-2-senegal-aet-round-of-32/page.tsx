import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-belgium-3-2-senegal-aet-round-of-32';
const URL_PATH = '/world-cup/2026/belgium-3-2-senegal-aet-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-belgium-3-2-senegal-aet-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'Belgium 3-2 Senegal AET | World Cup 2026 Round of 32 | 125th-Minute Penalty',
  description:
    'Belgium completed a stunning multi-goal comeback against Senegal in extra time, winning 3-2 with a 125th-minute penalty in arguably the match of the tournament. The Red Devils advance to the Round of 16 after an extraordinary war of attrition.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Belgium 3-2 Senegal AET | Match of the Tournament | World Cup 2026',
    description: "A multi-goal comeback, extra time, and a 125th-minute penalty. Belgium survive Senegal in the game of the 2026 World Cup. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-01T21:00:00Z',
    modifiedTime: '2026-07-01T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Belgium', 'Senegal', 'Round of 32', 'Extra Time', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Belgium. Comeback. Extra time. 125th-minute penalty. The game of the World Cup. 3-2.",
    description: "Senegal had Belgium dead and buried. Then the Red Devils found a way back. And then found the penalty to win it in the 125th minute. Extraordinary. Report by Jack Brennan.",
  },
};

export default function BelgiumSenegalR32Page() {
  return (
    <NewsArticle
      title="Belgium 3-2 Senegal AET: The Red Devils Complete a Stunning Comeback in the Match of the Tournament"
      subtitle="In arguably the game of the 2026 World Cup, Belgium pulled off a stunning multi-goal comeback against Senegal, surviving a grueling back-and-forth extra-time war of attrition before a composed 125th-minute penalty finally secured a 3-2 victory and passage to the Round of 16."
      category="World Cup 2026 · Round of 32"
      categoryColor="red"
      topicTag="sports"
      publishDate="July 1, 2026"
      readTime="7 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Belgium 3-2 Senegal extra time World Cup 2026 Round of 32 match of the tournament' }}
      tags={['World Cup 2026', 'Belgium', 'Senegal', 'Round of 32', 'Extra Time', 'Comeback', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Belgium vs Senegal', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'england-2-1-dr-congo-round-of-32', title: 'England 2-1 DR Congo | Kane 86th-Min Winner', url: '/world-cup/2026/england-2-1-dr-congo-round-of-32', publishDate: 'July 1, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Belgium defeated Senegal 3-2 in extra time in the Round of 32 on July 1, 2026.',
        'The winning goal came from a penalty in the 125th minute, securing one of the most dramatic results of the tournament.',
        'Belgium completed a multi-goal comeback after going behind to a Senegal side that appeared on course to advance.',
        'The match is widely regarded as the best of the 2026 World Cup so far, featuring momentum swings, quality football, and a dramatic conclusion.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Belgium vs Senegal at the 2026 World Cup?',
          answer: 'Belgium defeated Senegal 3-2 in extra time in the Round of 32 on July 1, 2026. The winning penalty came in the 125th minute.',
        },
        {
          question: 'How did Belgium beat Senegal?',
          answer: 'Belgium came from behind to equalize, then scored a decisive penalty in the 125th minute of extra time to win 3-2 after a grueling back-and-forth contest.',
        },
        {
          question: 'Is Belgium vs Senegal the best match of the 2026 World Cup?',
          answer: 'Many analysts and observers have called it the match of the tournament. The combination of multiple leads changing hands, extra time drama, and a last-gasp winner make it one of the most compelling knockout matches of the competition.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          There are World Cup matches and then there are World Cup matches. On July 1, 2026,
          <strong> Belgium</strong> and <strong>Senegal</strong> produced something in the latter
          category, a back-and-forth war of attrition that ran through 90 minutes, through extra
          time, and all the way to the 125th minute before a composed Belgian penalty finally
          ended one of the most extraordinary knockout matches the tournament has seen.
        </p>

        <p>
          The final score was 3-2 to Belgium. The score does not capture what those 125 minutes
          contained: momentum swings, lead changes, a Belgian team that appeared to be heading
          for elimination and refused to accept it, a Senegalese side that played with the quality
          and organization of a team that fully deserved to advance, and a climax that had the
          stadium and watching millions in a state of suspended disbelief until the ball hit the
          net in the final five minutes of extra time.
        </p>

        <h2>Senegal Take Control | Belgium in Serious Trouble</h2>

        <p>
          Senegal were excellent. Their attacking movement was precise, their pressure on Belgium's
          defensive structure was consistent and intelligent, and when they took a multi-goal lead,
          it felt fully earned. Belgium were not playing poorly, but Senegal were playing better,
          and in knockout football, that distinction is the only one that matters.
        </p>

        <p>
          The Belgian bench and supporters had to stare at a scoreboard that told a story of
          impending elimination. Their team needed not one comeback goal but a comeback that
          involved multiple scores. At those moments, most teams find the task impossible.
        </p>

        <h2>The Belgian Comeback | Refusing to Die</h2>

        <p>
          What followed is what Belgian football will talk about for a generation. Their response
          was not panic. It was not desperation. It was a controlled, organized attempt to rebuild
          the match from impossible foundations, and it worked with a combination of quality,
          composure, and the absolute refusal of a team that understood how to compete at
          the highest level.
        </p>

        <p>
          Belgium pulled a goal back. Then they equalized. Senegal, who had been so dominant,
          found themselves in a match that was level again, the psychological advantage they
          had spent most of the game building suddenly gone. Extra time arrived with both sides
          exhausted and the outcome genuinely uncertain.
        </p>

        <h2>The 125th Minute | One Penalty Decides Everything</h2>

        <p>
          Extra time was played at a lower intensity than the extraordinary 90 minutes that
          preceded it. Both teams were physically depleted. The spaces were larger but neither
          side was able to consistently exploit them. Then Belgium earned a penalty. The pressure
          of the moment, 125 minutes of football, a comeback from apparent elimination, the
          tournament hanging in the balance, would have buckled most players.
        </p>

        <p>
          The Belgian taker was ice cold. The penalty was perfect. Belgium won 3-2.
          The scenes that followed, the exhausted celebrations, the Senegalese players
          sitting on the pitch processing a defeat that their performance perhaps did not
          deserve, and the mutual recognition between both sets of players that they had
          just been part of something genuinely special, captured everything the World Cup
          is supposed to be.
        </p>

        <h2>Into the Round of 16</h2>

        <p>
          Belgium advance to the Round of 16 as a team that has demonstrated enormous
          mental strength and the capacity to perform under pressure that most sides
          never have to face. Their next opponent will know exactly what they are facing:
          a side that found a way back from the dead and won.
        </p>

        <p>
          Senegal leave with enormous credit. They played their best World Cup football
          in years and were beaten by a combination of Belgian quality and 125 minutes
          of relentless drama. Their tournament ends here. Their reputation ends higher
          than it began.
        </p>

      </div>
    </NewsArticle>
  );
}
