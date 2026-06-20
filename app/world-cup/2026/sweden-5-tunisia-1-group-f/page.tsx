import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-sweden-5-tunisia-1-group-f';
const URL_PATH = '/world-cup/2026/sweden-5-tunisia-1-group-f';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-sweden-5-tunisia-1-group-f.jpg';
export const metadata: Metadata = {
  title: 'Sweden 5–1 Tunisia | World Cup 2026 Group F Match Report',
  description:
    "Sweden demolished Tunisia 5–1 in Monterrey with goals from Yasin Ayari, Alexander Isak, Viktor Gyökeres and Mattias Svanberg. Tunisia's head coach was fired the following day.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Sweden 5–1 Tunisia | World Cup 2026 Group F',
    description: "Sweden ruthless in 5–1 demolition. Gyökeres and Isak unstoppable. Tunisia coach fired next day. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-15T01:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Sweden', 'Tunisia', 'Group F', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweden 5–1 Tunisia | World Cup 2026 Group F',
    description: "Sweden are a dark horse. Tunisia's coach fired after a 5–1 humiliation. Report by Jack Brennan.",
  },
};

export default function SwedenTunisiaPage() {
  return (
    <NewsArticle
      title="Sweden 5–1 Tunisia: Ruthless Svensson Side Emerges as Group F Dark Horse"
      subtitle="Goals from Ayari, Isak, Gyökeres, and Svanberg give Sweden a comprehensive opening win as Tunisia's coach pays the price"
      category="World Cup 2026 · Group F"
      categoryColor="blue"
      topicTag="sports"
      publishDate="June 14, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Sweden 5–1 Tunisia: Ruthless Svensson Side Emerges as Group F Dark Horse' }}
      tags={['World Cup 2026', 'Sweden', 'Tunisia', 'Group F', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Sweden vs Tunisia', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'netherlands-japan', title: 'Netherlands 2–2 Japan | Group F Report', url: '/world-cup/2026/netherlands-2-japan-2-group-f', publishDate: 'June 14, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Sweden beat Tunisia 5–1 in Monterrey to emerge as a serious Group F dark horse.',
        'Yasin Ayari scores in the 7th minute with a long-range strike as Tunisia are immediately on the back foot.',
        'The Gyökeres-Isak partnership proves unplayable throughout.',
        'Tunisia concede 5 goals and look disorganized and fragile defensively.',
        "Tunisia's head coach Lamouchi is fired the day after the loss.",
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Sweden's 5–1 dismantling of Tunisia in the early hours of Monday morning was a performance
          of such controlled, organized excellence that it demands serious recalibration of who the
          real threats are in Group F. The Blågult, often overlooked in conversations about tournament
          contenders, played with a structure, intensity, and attacking variety that few groups of any
          generation could have handled on this night.
        </p>

        <p>
          Tunisia arrived in Monterrey knowing that their Group F draw — Netherlands, Japan, Sweden —
          was extremely demanding. What they did not perhaps prepare sufficiently for was Sweden pressing
          from the opening whistle as if the match's outcome was already a matter of professional pride.
        </p>

        <h2 id="early-goal">Ayari Sets the Tone</h2>

        <p>
          Yasin Ayari connected with the ball well outside the penalty area in the 7th minute —
          a moment too early in the match for Tunisia to have properly settled their defensive
          shape or rhythm — and drove it past the goalkeeper with a precision that left no ambiguity
          about Sweden's intentions. Tunisia were immediately playing from behind, immediately forced
          to leave defensive structure to go and find an equalizer, and immediately vulnerable
          to the very counter-attacks that Sweden had spent their preparation period designing.
        </p>

        <p>
          The pattern of the match was established within 10 minutes and never meaningfully
          changed. Sweden pressed high. Tunisia struggled to build out from the back. When Sweden
          won possession in dangerous areas — which happened repeatedly — they moved quickly and
          finished calmly.
        </p>

        <h2 id="partnership">Gyökeres and Isak: Unplayable</h2>

        <p>
          The central narrative of Sweden's attacking threat ran through Viktor Gyökeres and Alexander
          Isak — a strike partnership that, between them, have spent recent seasons tormenting Premier
          League defenses at Sporting and Newcastle respectively. Against Tunisia, they were allowed
          the kind of freedom and connection that their club form has suggested is possible.
        </p>

        <p>
          Both contributed to the scoreline. Mattias Svanberg added to the damage from deeper
          positions. Sweden scored five goals with a variety of service that suggested the
          opening goal would not be the only way they could hurt opponents. Creativity in the
          build-up. Movement in behind. Set-piece threat. Long-range quality. All of it on display.
        </p>

        <h2 id="tunisia">Tunisia's Collapse and Coaching Fallout</h2>

        <p>
          Tunisia were disorganized and fragile at the back from the moment Ayari's opener landed.
          Their defensive structure offered Sweden too much space, and their ability to recover
          from the early blow was limited by what appeared to be fundamental tactical problems
          that a half-time break could not fix.
        </p>

        <p>
          The 5–1 margin was comprehensive enough to trigger immediate consequences. Head coach
          Lamouchi was fired the day after the match — a decision that speaks to the severity of
          the performance from the Tunisian federation's perspective. Whether a new coaching voice
          can salvage anything from a tournament that has started so badly remains to be seen.
        </p>

        <p>
          For Sweden, the mood is entirely different. They sit in Group F with three points and
          a goal difference that speaks for itself. In a group shared with Netherlands and Japan —
          who drew 2–2 in a classic on the same day — they are now the mathematical leaders.
          Nobody predicted this arrangement. Sweden are a genuine dark horse.
        </p>

      </div>
    </NewsArticle>
  );
}
