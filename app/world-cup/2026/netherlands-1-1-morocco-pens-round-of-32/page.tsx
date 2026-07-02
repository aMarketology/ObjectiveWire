import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-netherlands-1-1-morocco-pens-round-of-32';
const URL_PATH = '/world-cup/2026/netherlands-1-1-morocco-pens-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-netherlands-1-1-morocco-pens-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'Netherlands 1-1 Morocco (2-3 Pens) | World Cup 2026 Round of 32',
  description:
    "Morocco eliminated the Netherlands on penalties in the Round of 32, winning the shootout 3-2 after a 1-1 draw. The Atlas Lions' goalkeeper produced heroic saves as Morocco proved their 2022 run was no fluke.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Morocco Eliminate Netherlands on Penalties | World Cup 2026 Round of 32',
    description: "Morocco's goalkeeper heroics and Atlas Lions nerve beat the Netherlands 3-2 on spot-kicks. Another famous World Cup chapter for African football. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-29T21:00:00Z',
    modifiedTime: '2026-06-29T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Netherlands', 'Morocco', 'Round of 32', 'Upset', 'Penalty Shootout'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco do it again. Netherlands eliminated on penalties. World Cup 2026.',
    description: "1-1 after 90. 3-2 on pens. Morocco's goalkeeper was unbeatable. The Atlas Lions are in the last 16. Report by Jack Brennan.",
  },
};

export default function NetherlandsMoroccoR32Page() {
  return (
    <NewsArticle
      title="Netherlands 1-1 Morocco (2-3 Pens): Atlas Lions Prove 2022 Was No Fluke With Another Famous World Cup Night"
      subtitle="Morocco mirrored their historic 2022 World Cup run, eliminating a heavily favored Netherlands side on penalties after a 1-1 draw. Goalkeeper heroics during the shootout frustrated the Dutch as Morocco won 3-2 from the spot to claim another landmark result for African football."
      category="World Cup 2026 · Round of 32"
      categoryColor="red"
      topicTag="sports"
      publishDate="June 29, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Morocco eliminate Netherlands on penalties World Cup 2026 Round of 32' }}
      tags={['World Cup 2026', 'Netherlands', 'Morocco', 'Round of 32', 'Upset', 'Penalty Shootout', 'Atlas Lions']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Netherlands vs Morocco', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'germany-1-1-paraguay-pens-round-of-32', title: 'Germany 1-1 Paraguay (3-4 Pens) | Round of 32', url: '/world-cup/2026/germany-1-1-paraguay-pens-round-of-32', publishDate: 'June 29, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Morocco eliminated the Netherlands from the 2026 World Cup on penalties, winning the shootout 3-2 after a 1-1 draw in the Round of 32.',
        "Morocco's goalkeeper produced heroic saves in the shootout, frustrating the Dutch and securing one of the great Atlas Lions results.",
        'The victory confirms Morocco as a genuine World Cup force, not a one-tournament anomaly after their 2022 semi-final run.',
        'The Netherlands exit in the Round of 32, their penalty-shootout vulnerability again proving decisive at a major tournament.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Netherlands vs Morocco at the 2026 World Cup?',
          answer: 'Netherlands and Morocco drew 1-1 after 90 minutes. Morocco won the penalty shootout 3-2 to advance to the Round of 16.',
        },
        {
          question: 'Did Morocco beat the Netherlands on penalties?',
          answer: 'Yes. Morocco defeated the Netherlands 3-2 on penalties in the Round of 32 on June 29, 2026, after the match ended 1-1.',
        },
        {
          question: 'Is Morocco elimination of Netherlands a major upset?',
          answer: 'Yes. The Netherlands were heavily favored entering the match. Morocco continuing their 2022 form into 2026 confirms them as one of the most dangerous teams in the world game.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Four years after stunning the world in Qatar, <strong>Morocco</strong> have written another
          chapter in one of football's greatest modern stories. The <strong>Atlas Lions</strong>
          eliminated the Netherlands from the 2026 World Cup in the Round of 32, winning 3-2 on
          penalties after a tightly contested 1-1 draw, and in doing so answered every question
          about whether their 2022 semi-final run was a moment of peak circumstance or the emergence
          of a genuine African superpower.
        </p>

        <p>
          The answer, delivered in the most definitive possible terms on June 29, is that Morocco
          belong on this stage. They do not merely survive it. They thrive in it. They relish
          the pressure. They produce the heroics when heroics are required.
        </p>

        <h2>Morocco Match the Dutch | 90 Minutes of Equal Combat</h2>

        <p>
          The Netherlands arrived with weight of expectation. Their squad contains genuine
          top-level European talent, their attacking threat is real, and their recent club form
          translated in theory to World Cup quality. In practice, Morocco refused to allow that
          theory to become reality.
        </p>

        <p>
          The Atlas Lions' defensive structure was immaculate throughout. Their organization in
          and out of possession gave the Dutch no easy routes to goal, and when Morocco had the
          ball themselves, they were dangerous, purposeful, and technically confident. A 1-1
          draw through normal time felt entirely representative of what both teams deserved.
        </p>

        <h2>The Goalkeeper | A Performance for the Ages</h2>

        <p>
          When penalty shootouts arrive at major tournaments, goalkeepers become the central
          characters. Morocco's goalkeeper understood this and delivered a performance of
          extraordinary quality. His saves were crucial. His presence and timing disrupted
          the Dutch takers at exactly the moments when composure was required from the
          Netherlands and none was found.
        </p>

        <p>
          Morocco scored three of their kicks with the clinical efficiency of a team that had
          prepared for exactly this moment. The Netherlands converted two. The result was
          sealed with a save that sent the Moroccan players and supporters into scenes of
          pure, unrestrained celebration.
        </p>

        <h2>2022 Was Not a Fluke</h2>

        <p>
          The narrative question hanging over Morocco since Qatar has now been answered.
          There were those who argued the 2022 run, which took them all the way to the
          semi-finals, was exceptional and unlikely to be repeated. Those arguments are
          no longer credible. Morocco have now defeated a heavily favored European nation
          in the knockout round of a second consecutive World Cup, and they have done so
          with authority, character, and genuine quality.
        </p>

        <p>
          They advance to the Round of 16 as one of the most feared remaining teams in
          the tournament. The Netherlands fly home having added another painful penalty
          exit to a tournament record that now requires serious examination. Morocco
          march on, and the world is watching.
        </p>

      </div>
    </NewsArticle>
  );
}
