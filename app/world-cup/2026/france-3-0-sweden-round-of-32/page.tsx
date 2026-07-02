import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-france-3-0-sweden-round-of-32';
const URL_PATH = '/world-cup/2026/france-3-0-sweden-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-france-3-0-sweden-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'France 3-0 Sweden | World Cup 2026 Round of 32 | Mbappe Brace',
  description:
    "France made a commanding statement in the 2026 World Cup Round of 32, routing Sweden 3-0. Kylian Mbappe was unplayable, scoring a brilliant brace to lead Les Bleus into the last 16 with a dominant performance.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'France 3-0 Sweden | Mbappe Brace | World Cup 2026 Round of 32',
    description: "Tournament favorites make their statement. Mbappe with a brilliant brace, France cruise 3-0 past Sweden. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-30T20:00:00Z',
    modifiedTime: '2026-06-30T20:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'France', 'Sweden', 'Round of 32', 'Mbappe', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mbappe brace. France 3-0. The favorites have announced themselves. World Cup 2026.",
    description: "France effortlessly brush past Sweden. Mbappe looked entirely unplayable. Les Bleus are the team everyone else has to stop. Report by Jack Brennan.",
  },
};

export default function FranceSwedenR32Page() {
  return (
    <NewsArticle
      title="France 3-0 Sweden: Mbappe Unplayable as the Tournament Favorites Make Their Statement"
      subtitle="Tournament favorites France made a roaring declaration of intent, effortlessly dismantling Sweden in the Round of 32. Kylian Mbappe netted a brilliant brace and was entirely unplayable throughout as Les Bleus cruised to a dominant 3-0 shutout."
      category="World Cup 2026 · Round of 32"
      categoryColor="blue"
      topicTag="sports"
      publishDate="June 30, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'France 3-0 Sweden Mbappe brace World Cup 2026 Round of 32' }}
      tags={['World Cup 2026', 'France', 'Sweden', 'Round of 32', 'Mbappe', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'France vs Sweden', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'norway-2-1-ivory-coast-round-of-32', title: 'Norway 2-1 Ivory Coast | Haaland 86th-Min Winner', url: '/world-cup/2026/norway-2-1-ivory-coast-round-of-32', publishDate: 'June 30, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'France defeated Sweden 3-0 in the Round of 32 on June 30, 2026.',
        'Kylian Mbappe scored a brilliant brace and was named the outstanding individual on the pitch.',
        'France were dominant throughout, keeping a clean sheet and never appearing threatened.',
        'The result establishes France as the team to beat in the knockout stage, confirming their pre-tournament favorite status.',
      ]}
      faqItems={[
        {
          question: 'What was the score in France vs Sweden at the 2026 World Cup?',
          answer: 'France defeated Sweden 3-0 in the Round of 32 on June 30, 2026.',
        },
        {
          question: 'Did Mbappe score against Sweden?',
          answer: 'Yes. Kylian Mbappe scored a brilliant brace as France beat Sweden 3-0 in the Round of 32.',
        },
        {
          question: 'How convincing was France against Sweden?',
          answer: 'France were dominant throughout, leading from the front and never appearing challenged. The 3-0 clean sheet scoreline accurately reflected their control.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          If there was any remaining doubt about which team the rest of the 2026 World Cup field
          fears most, <strong>France</strong> eliminated it on June 30 with a performance of
          controlled, dominant destruction. Sweden were the opponents. The scoreline was 3-0.
          And for large stretches of the match, even that margin felt like it flattered the
          visitors.
        </p>

        <p>
          <strong>Kylian Mbappe</strong> was entirely unplayable. That word gets used loosely
          in football commentary, applied to anyone having a good night. On June 30, 2026, it
          was entirely literal. The Swedish defenders had no answer for him. No tactical
          adjustment neutralized him. No combination of physical and positional pressure stopped
          him. He scored twice and his fingerprints were on everything threatening that France
          produced.
        </p>

        <h2>A Statement From the Favorites</h2>

        <p>
          France entered this match as many analysts' pick to win the tournament. What they
          produced was the kind of authoritative Round of 32 performance that confirms
          pre-tournament predictions rather than complicates them. Sweden are a well-organized
          European side with quality in their squad. France made them look like they belonged
          in a different competition.
        </p>

        <p>
          The first goal came early and settled France into the rhythm they are most dangerous
          in: controlled, deliberate, technically superior football that gradually breaks the
          psychological resolve of opponents who know they cannot match the quality they are
          facing. Sweden to their credit kept competing. The scoreline says they failed.
        </p>

        <h2>Mbappe | A Performance That Belongs in the Highlights Archives</h2>

        <p>
          The first goal was precision. A run made at exactly the right moment, a finish
          struck with the kind of technique that looks simple only because the person doing
          it has done it thousands of times, in training, in matches, in finals. It was a
          goal that made the stadium understand they were watching something special.
        </p>

        <p>
          The second was something else entirely. Mbappe collected the ball in space,
          drove at the Swedish defensive line with a pace that no defender can live with,
          and produced a finish of such quality that even the opposing supporters paused
          to acknowledge what they had just witnessed. France were three goals to the good.
          The match, as a contest, was over.
        </p>

        <h2>The Road Ahead</h2>

        <p>
          France advance to the Round of 16 as the tournament's most feared side. Their
          defensive organization was tested very little against Sweden, which means questions
          about their ability to respond when they face genuine pressure remain largely
          unanswered. What is not in question is their attacking quality.
        </p>

        <p>
          When Mbappe is performing at this level, France can beat anyone in this tournament.
          Every remaining side in the draw knows it. Every tactical meeting in the coming
          days will have his name at the top of the problem list. The question is whether
          any team can find an answer that Sweden emphatically could not.
        </p>

      </div>
    </NewsArticle>
  );
}
