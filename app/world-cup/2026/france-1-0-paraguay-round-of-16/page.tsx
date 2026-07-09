import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-france-1-0-paraguay-round-of-16';
const URL_PATH = '/world-cup/2026/france-1-0-paraguay-round-of-16';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-france-1-0-paraguay-round-of-16.jpg';

export const metadata: Metadata = {
  title: 'France 1-0 Paraguay | World Cup 2026 Round of 16 | Les Bleus End Giant-Killers Run',
  description:
    "France ended Paraguay's fairytale giant-killing run with a hard-fought 1-0 victory in the Round of 16. Les Bleus were made to work for every inch before a solitary moment of world-class finishing spared French blushes and booked their quarterfinal place.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'France 1-0 Paraguay | World Cup 2026 Round of 16',
    description: "Paraguay pushed tournament favorites France to the limit. One moment of quality decided it. Les Bleus are through, but Paraguay's run ends in honor. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-03T20:00:00Z',
    modifiedTime: '2026-07-03T20:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'France', 'Paraguay', 'Round of 16', 'Mbappe', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "France survive. Paraguay's fairytale is over. 1-0. World Cup 2026.",
    description: "Paraguay made France earn every second of this match. One goal. That was all that separated them. Les Bleus into the quarters. Report by Jack Brennan.",
  },
};

export default function FranceParaguayR16Page() {
  return (
    <NewsArticle
      title="France 1-0 Paraguay: Les Bleus End the Giant-Killers' Fairytale With a Solitary Moment of Class"
      subtitle="Tournament favorites France were pushed to their absolute limit by a disciplined, organized Paraguay side before a single moment of world-class finishing settled the Round of 16 tie. Paraguay's remarkable giant-killing run, which included eliminating Germany, ends with enormous distinction at the last 16."
      category="World Cup 2026 · Round of 16"
      categoryColor="blue"
      topicTag="sports"
      publishDate="July 3, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'France 1-0 Paraguay World Cup 2026 Round of 16 match report' }}
      tags={['World Cup 2026', 'France', 'Paraguay', 'Round of 16', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'France vs Paraguay', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'germany-1-1-paraguay-pens-round-of-32', title: 'Paraguay Eliminate Germany on Pens | Round of 32', url: '/world-cup/2026/germany-1-1-paraguay-pens-round-of-32', publishDate: 'June 29, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'France defeated Paraguay 1-0 in the Round of 16 on July 3, 2026, to advance to the quarterfinals.',
        'Paraguay, who eliminated Germany on penalties in the Round of 32, pushed tournament favorites France the full distance before a single decisive goal settled the tie.',
        'France were made to work far harder than their pre-match status suggested, with Paraguay\'s disciplined defensive organization frustrating Les Bleus for long periods.',
        "Paraguay's extraordinary 2026 World Cup run, one of the tournament's great stories, ends at the Round of 16 with enormous credit to the Central American nation.",
      ]}
      faqItems={[
        {
          question: 'What was the score in France vs Paraguay at the 2026 World Cup?',
          answer: 'France defeated Paraguay 1-0 in the Round of 16 on July 3, 2026.',
        },
        {
          question: 'How did Paraguay perform against France?',
          answer: 'Paraguay were disciplined and organized throughout, pushing tournament favorites France to the absolute limit. Only a single moment of world-class finishing separated the two sides.',
        },
        {
          question: 'When did Paraguay get eliminated from the 2026 World Cup?',
          answer: 'Paraguay were eliminated in the Round of 16 by France on July 3, 2026, having previously pulled off the tournament\'s biggest upset by defeating Germany on penalties in the Round of 32.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          <strong>Paraguay</strong> had already done the impossible once in this tournament.
          They had stood in the way of Germany, absorbed everything a former world champion
          threw at them, and emerged with a penalty shootout victory that shook the competition
          to its foundations. Against <strong>France</strong> on July 3, they tried to do it again.
          They came closer than most people expected before a single decisive goal settled the
          Round of 16 tie and ended one of the 2026 World Cup's most compelling stories.
        </p>

        <p>
          France win 1-0. Paraguay are out. The scoreline is accurate. The story behind it is
          more complicated, more admirable, and more closely contested than anyone who did not
          watch the match would believe from a single-goal margin.
        </p>

        <h2>Paraguay's Template | Organized, Disciplined, Dangerous</h2>

        <p>
          The same qualities that eliminated Germany were visible again against France. Paraguay's
          defensive block was compact and intelligent, their tracking of runners diligent, and
          their willingness to sacrifice attacking ambition in pursuit of structural security
          absolute. France had the ball, had the technical quality, and for long stretches had
          no clean path to goal.
        </p>

        <p>
          The moments when Paraguay managed to transition forward carried genuine threat.
          They were not there simply to defend. They had a plan and they executed it with
          the kind of collective discipline that takes months of preparation to build and
          immense courage to sustain against a French side of this quality.
        </p>

        <h2>The One Moment That Decided It</h2>

        <p>
          In knockout football at the World Cup, a single moment of world-class quality is
          often the entire difference between advancing and going home. France found that moment.
          The goal, when it came, was the product of the kind of technical finishing that only
          the elite players in the world game can produce under pressure, against organized
          defense, when the stakes are at their highest.
        </p>

        <p>
          Paraguay had defended everything France attempted for the majority of the match.
          The one thing they could not ultimately defend against was a moment of finishing
          that their goalkeeper and defensive structure simply had no answer for. That is
          the difference between a very good team and the favorites to win the World Cup.
        </p>

        <h2>Paraguay's Legacy</h2>

        <p>
          Their tournament ends here. But what a tournament it has been. The team that nobody
          expected to advance past the group stage eliminated Germany in the Round of 32 and
          pushed France to the very edge in the last 16. They go home to a nation that will
          celebrate this run for years. Their players, their coaching staff, and their supporters
          have every reason to hold their heads high. Paraguay came to this World Cup and left
          a mark that will not fade.
        </p>

      </div>
    </NewsArticle>
  );
}
