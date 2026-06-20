import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-spain-vs-uruguay-group-h-preview';
const URL_PATH = '/world-cup/2026/spain-vs-uruguay-group-h-preview';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-spain-vs-uruguay-group-h-preview.jpg';

export const metadata: Metadata = {
  title: 'Spain vs Uruguay | World Cup 2026 Group H Finale Preview',
  description:
    "Spain's shock 0–0 draw against Cape Verde left Group H wide open. Uruguay sit level on points. The Group H finale decides who goes through as winner and who faces the harder bracket path.",
  keywords: [
    'Spain vs Uruguay World Cup 2026',
    'World Cup 2026 Group H preview',
    'Spain Cape Verde shock draw',
    'Spain World Cup 2026 group stage',
    'Uruguay World Cup 2026',
    'World Cup 2026 Group H standings',
    'Spain World Cup 2026 preview',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Spain vs Uruguay | World Cup 2026 Group H Finale',
    description: "Spain dropped points to Cape Verde. Uruguay are level. Group H finale decider, full preview by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-20T16:00:00Z',
    modifiedTime: '2026-06-20T16:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Spain', 'Uruguay', 'Group H', 'Preview', 'World Cup Decider'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spain vs Uruguay | World Cup 2026 Group H Finale',
    description: "Spain dropped points against Cape Verde. Uruguay are level. Group H first place is open. Preview.",
  },
};

export default function SpainUruguayGroupHPage() {
  return (
    <NewsArticle
      title="Spain vs Uruguay | World Cup 2026 Group H Finale: Spain's Cape Verde Slip Opened the Door"
      subtitle="Spain's 0–0 draw against Cape Verde in the Group H opener left first place available for any team that takes it. Uruguay, level on points, can win the group outright with three points from the finale."
      category="World Cup 2026 · Group H Preview"
      categoryColor="orange"
      topicTag="sports"
      publishDate="June 20, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Spain vs Uruguay | World Cup 2026 Group H Finale: Spains Cape Verde Slip Opened the Door' }}
      tags={['World Cup 2026', 'Spain', 'Uruguay', 'Group H', 'Preview', 'World Cup Decider']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Spain vs Uruguay Preview', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'world-cup-2026-hub', title: 'World Cup 2026 Group Stage Hub', url: '/world-cup/2026', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'saudi-arabia-uruguay-group-h', title: 'Saudi Arabia vs Uruguay | Group H Report', url: '/world-cup/2026/saudi-arabia-vs-uruguay-group-h', publishDate: 'June 13, 2026', category: 'Sports' },
        { slug: 'spain-cape-verde-group-h', title: 'Spain 0–0 Cape Verde | Group H Report', url: '/world-cup/2026/spain-0-cape-verde-0-group-h', publishDate: 'June 13, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Spain vs Uruguay is the World Cup 2026 Group H finale with first place fully open after Spain dropped points against Cape Verde.',
        "Spain's 0–0 draw against Cape Verde in the opener was one of the tournament's biggest upsets among the established football powers.",
        'Uruguay defeated Saudi Arabia in the first fixture and entered the Spain game level on points, meaning a win sends them through as group winners.',
        'Spain need a win to reassert their status as group leaders; a draw leaves them vulnerable on goal difference depending on the other Group H result.',
        'The winner of Group H earns the favorable Round of 32 path; the loser faces a demonstrably harder bracket route with more dangerous opponents.',
      ]}
      faqItems={[
        {
          question: 'What is Spain vs Uruguay at World Cup 2026?',
          answer: 'Spain vs Uruguay is the Group H finale at World Cup 2026, where first place is contested after Spain drew 0–0 against Cape Verde in the opener, leaving the group standings tighter than expected.',
        },
        {
          question: 'What happened between Spain and Cape Verde at World Cup 2026?',
          answer: 'Spain drew 0–0 against Cape Verde in their Group H opener — one of the tournament\'s most notable early upsets. Spain dominated possession and territory but failed to score against a disciplined Cape Verde defensive block.',
        },
        {
          question: 'What does Uruguay need from Spain vs Uruguay?',
          answer: 'Uruguay need a win to guarantee first place in Group H. A draw leaves the group outcome dependent on the other fixture. Uruguay beat Saudi Arabia in their opener, meaning three points against Spain would deliver the group leadership.',
        },
        {
          question: 'How does Spain winning Group H affect their World Cup path?',
          answer: 'Group H winners avoid the group winner bracket lane in the Round of 32, facing a third-place qualifier instead. Spain finishing second means a harder opening knockout opponent and a compressed bracket margin entering the Round of 16.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The tournament's most unsettling opening result for an established power came in
          Group H. Spain, the reigning European champions, could not score against Cape Verde.
          A full 90 minutes of possession, pressure, and technical control produced nothing.
          Zero goals. A point shared with a side whose FIFA ranking sits roughly 80 places
          below Spain's.
        </p>

        <p>
          The result did not eliminate Spain. It did something arguably more dangerous: it
          made Group H competitive in a way that should not have been possible and handed
          Uruguay, who had already beaten Saudi Arabia, the realistic prospect of finishing
          above one of the tournament's title contenders. Spain's margin for error in the
          group finale against Uruguay is narrow in a way that no Spain coaching staff or
          supporter anticipated before the tournament began.
        </p>

        <h2 id="spain-crisis-context">Spain's Cape Verde Problem | What Went Wrong</h2>

        <p>
          Spain's 0–0 against Cape Verde was not a random variance result. Cape Verde had a
          clear and specific game plan: compact defensive shape, five defenders at all times
          in the defensive phase, restricted central space, and a secondary defensive line
          in front of the back five that made the half-spaces Spain prefer to exploit
          functionally unavailable.
        </p>

        <p>
          Spain's response was to go wider and longer, which is structurally what Cape Verde
          wanted. Wide deliveries into the area against Cape Verde's tall, well-organized
          defensive block were precisely the situations their center-backs were prepared to
          handle. Spain lacked the directness or the variation to find a different angle.
          They did not adapt quickly enough and paid for it.
        </p>

        <p>
          The tactical lesson from the Cape Verde draw is clear, and Spain's coaching staff
          will have absorbed it fully. Against Uruguay, who are a better and more versatile
          defensive side than Cape Verde but do not play the same extreme block approach,
          Spain have more space to operate. The question is whether the psychological impact
          of dropping points — and the pressure of needing a result — affects their execution.
          Spain have the better squad. They do not necessarily have the better mental
          framework for grinding through pressure fixtures.
        </p>

        <h2 id="uruguay-position">Uruguay | Arriving at the Finale as the Group's Form Team</h2>

        <p>
          Uruguay's win over Saudi Arabia was clinical. They controlled the tempo, took their
          chances when they came, and managed the game intelligently through the second half
          once the lead was established. No drama, no late escapes, no uncertainty about the
          final result from roughly the 65th minute onward.
        </p>

        <p>
          That kind of performance builds institutional confidence within a squad. Uruguay did
          not need to be exceptional against Saudi Arabia. They needed to be professional, and
          they were. Against Spain, they will need something more — the kind of collective
          effort in both phases that can contain Spain's technical midfield while threatening
          on the transitions and set pieces that are Uruguay's primary goal threats.
        </p>

        <p>
          Uruguay's defensive organization is robust at this level. Their center-back pairing
          has the experience to manage Spain's attacking movement without panicking, and their
          midfield cover in front of the backline is disciplined enough to prevent Spain from
          getting behind them cheaply. Whether Uruguay can produce enough going forward to
          score against a Spain side that, despite their Cape Verde failure, remains
          significantly better defensively than Saudi Arabia — that is the genuine question
          the finale will answer.
        </p>

        <h2 id="stakes-and-outcomes">What First Place in Group H Is Actually Worth</h2>

        <p>
          In the 48-team format, Group H first place delivers a Round of 32 matchup against
          a third-place qualifier. Second place delivers a matchup against a group winner
          from an adjacent bracket. The gap between those two scenarios compounds from the
          Round of 16 onward, where the bracket paths diverge significantly.
        </p>

        <p>
          For Spain, a team with genuine title ambitions, finishing second in Group H because
          they drew against Cape Verde and then lost or drew against Uruguay would represent
          a structural self-inflicted wound. It does not eliminate them, but it makes the
          path substantially harder from the very next round. The performance standard
          required to win the tournament as a second-place group finisher is materially higher.
        </p>

        <p>
          Spain's squad has the quality to win Group H. The Cape Verde draw proved they also
          have the capacity to make it complicated. Uruguay have the defensive solidity and
          the tournament experience to make Spain's Group H finale genuinely difficult.
          The result will tell us something important about whether Spain are a tournament
          contender with a minor early stumble or a side whose group stage exposed a
          structural limitation that the knockout rounds will amplify.
        </p>

      </div>
    </NewsArticle>
  );
}
