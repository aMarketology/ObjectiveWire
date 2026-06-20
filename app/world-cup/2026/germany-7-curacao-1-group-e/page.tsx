import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-germany-7-curacao-1-group-e';
const URL_PATH = '/world-cup/2026/germany-7-curacao-1-group-e';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-germany-7-curacao-1-group-e.jpg';
export const metadata: Metadata = {
  title: 'Germany 7–1 Curaçao | World Cup 2026 Group E Match Report',
  description:
    "Germany demolished Curaçao 7–1 in Houston, with Livano Comenencia's historic equalizer briefly giving the island nation's supporters a moment before the four-time champions responded with six unanswered goals.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Germany 7–1 Curaçao | World Cup 2026 Group E',
    description: "Germany send an ominous World Cup message with a 7–1 rout. Curaçao's historic first goal can't prevent the deluge. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-14T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Germany', 'Curaçao', 'Group E', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Germany 7–1 Curaçao | World Cup 2026',
    description: 'Germany are a statement. Curaçao score a historic first World Cup goal. Report by Jack Brennan.',
  },
};

export default function GermanyCuracaoPage() {
  return (
    <NewsArticle
      title="Germany 7–1 Curaçao: A Statement Scoreline and a Historic Moment for the Island Nation"
      subtitle="Comenencia's equalizer gives Curaçao their first World Cup goal before Germany respond with six in an ominous show of force"
      category="World Cup 2026 · Group E"
      categoryColor="orange"
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
      thumbnail={{ src: OG_IMAGE, alt: 'Germany 7–1 Curaçao: A Statement Scoreline and a Historic Moment for the Island Nation' }}
      tags={['World Cup 2026', 'Germany', 'Curaçao', 'Group E', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Germany vs Curaçao', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'ivory-coast-ecuador', title: 'Ivory Coast 1–0 Ecuador | Group E Report', url: '/world-cup/2026/ivory-coast-1-ecuador-0-group-e', publishDate: 'June 14, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Germany defeat Curaçao 7–1 in Houston in a result that announces them as a major tournament contender.',
        "Livano Comenencia scores Curaçao's first-ever World Cup goal, briefly leveling at 1–1.",
        'Germany respond to the equalizer with six unanswered goals — a comprehensive statement of depth and fitness.',
        "The 7–1 scoreline forces tournament-wide recalibration of Germany's title chances.",
        "Ivory Coast's Day 4 win gives Group E two teams with maximum points.",
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          There was a moment on Sunday evening in Houston that made the entire stadium pause.
          Germany had opened the scoring, as expected. Then Livano Comenencia, playing for the
          island nation of Curaçao in their first-ever World Cup, equalized. For a few seconds,
          the scoreline read 1–1. The noise from the small but passionate Curaçao contingent
          was something entirely disproportionate to the number of people making it.
        </p>

        <p>
          It was a historic moment — the first World Cup goal ever scored by the Caribbean island
          nation. Back in Willemstad, in the bars and homes of a country of roughly 150,000
          people, that goal will be remembered forever. Then Germany remembered what they were
          doing, and the moment passed into sporting footnote territory.
        </p>

        <h2 id="germany-response">Six Unanswered Goals</h2>

        <p>
          Germany's response to Comenencia's equalizer was methodical, relentless, and, in its
          own way, more impressive than a straightforward dominant performance would have been.
          The four-time world champions absorbed the psychological shock of conceding — however
          briefly — and then proceeded to dismantle Curaçao with a clinical thoroughness that
          offered no second moments of hope.
        </p>

        <p>
          Six unanswered goals. The depth of Germany's squad was on full display — goals came
          from multiple sources, not just one or two marquee names. Their pressing was relentless
          and organized. Their transitions from defense to attack were rapid and precise. Their
          fitness, even in the Houston heat, appeared superior throughout the second half as
          Curaçao's physical limitations became increasingly apparent.
        </p>

        <p>
          A 7–1 scoreline in a World Cup group game sends a message that travels well beyond the
          stadium walls. Other Group E opponents, other group-stage rivals, the eventual knockout-round
          opponents — all of them will have watched this result and made calculations.
        </p>

        <h2 id="analysis">Germany's Tournament Statement</h2>

        <p>
          Germany came into this World Cup with significant expectations and a squad depth that
          their 2022 group-stage exit had called into question. Sunday's performance went a long
          way toward restoring belief. Not because Curaçao were remotely close to Germany's level —
          they were not — but because of <em>how</em> Germany performed.
        </p>

        <p>
          There was no arrogance, no coasting, no moment where the intensity dropped to a level
          that allowed Curaçao to exploit gaps. They were professional, thorough, and devastating.
          The kind of side that wins tournaments does not switch off when they are 4–1 ahead.
          Germany did not switch off.
        </p>

        <p>
          Group E now has two teams on maximum points after Day 4 — Germany and Ivory Coast, who
          beat Ecuador 1–0 on a 90th-minute Amad Diallo winner. Ecuador and Curaçao are both
          without a point. For Ecuador especially, the unexpected reverse means the pressure ahead
          of their next fixtures is now considerably greater than anyone anticipated.
        </p>

      </div>
    </NewsArticle>
  );
}
