import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-mexico-2-south-africa-0-group-a';
const URL_PATH = '/world-cup/2026/mexico-2-south-africa-0-group-a';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-mexico-2-south-africa-0-group-a.jpg';
export const metadata: Metadata = {
  title: 'Mexico 2–0 South Africa | World Cup 2026 Group A Match Report',
  description:
    'Mexico beat South Africa 2–0 in the 2026 World Cup opener at Estadio Azteca, with goals from Raúl Jiménez and Julián Quiñones and three red cards between the two sides.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Mexico 2–0 South Africa | World Cup 2026 Opening Match',
    description: 'A dominant opening-day performance from co-hosts Mexico, marred by chaos — two red cards for South Africa and one for Mexico in a wild 2–0 win.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-11T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Mexico', 'South Africa', 'Group A', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mexico 2–0 South Africa | World Cup 2026',
    description: 'Three red cards in the opener. Mexico win 2–0. Report by Jack Brennan.',
  },
};

export default function MexicoSouthAfricaPage() {
  return (
    <NewsArticle
      title="Mexico 2–0 South Africa: Co-Hosts Open in Chaos at Estadio Azteca"
      subtitle="Jiménez and Quiñones score as South Africa self-destruct with two red cards in the tournament's opening match"
      category="World Cup 2026 · Group A"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 11, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Mexico 2–0 South Africa: Co-Hosts Open in Chaos at Estadio Azteca' }}
      tags={['World Cup 2026', 'Mexico', 'South Africa', 'Group A', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Mexico vs South Africa', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'world-cup-for-americans', title: 'How the World Cup Works for Americans', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'south-korea-czechia', title: 'South Korea 2–1 Czechia | Group A Report', url: '/world-cup/2026/south-korea-2-czechia-1-group-a', publishDate: 'June 11, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Mexico win the 2026 World Cup opener 2–0 at Estadio Azteca.',
        'Goals from Raúl Jiménez and Julián Quiñones for the co-hosts.',
        'South Africa receive two red cards; Mexico receive one.',
        'South Africa face must-win pressure in their remaining two group games.',
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The 2026 FIFA World Cup kicked off at Estadio Azteca on Thursday evening with the kind of match
          that simultaneously showcased everything electrifying and chaotic about international football.
          Mexico, co-hosts and home favorites, dispatched South Africa 2–0 in the tournament's opening
          fixture — but the scoreline tells only part of the story. Three red cards across the two sides
          turned what should have been a celebration into something considerably more frantic.
        </p>

        <p>
          The electric atmosphere in Mexico City was everything a host nation opener should be. Over 87,000
          fans packed Azteca, and the noise from the moment the starting whistle blew was immense.
          Mexico absorbed early South African pressure before taking control with their superior
          technical quality.
        </p>

        <h2 id="goals">The Goals</h2>

        <p>
          Raúl Jiménez opened the scoring with a composed finish, capitalizing on disorganized South
          African defending that had already begun to show cracks under Mexico's relentless pressing.
          Julián Quiñones doubled the lead in the second half, punishing a Bafana Bafana backline that
          was increasingly stretched and distracted by the mounting disciplinary drama.
        </p>

        <p>
          The 2–0 scoreline was flattering to Mexico in one respect: South Africa spent a significant
          portion of the match playing with a numerical disadvantage after two of their players were
          dismissed. But Mexico's finishing was clinical when it mattered, and Jiménez in particular
          showed the kind of center-forward hold-up play that draws defenders out of position and
          creates space for runs in behind.
        </p>

        <h2 id="red-cards">Three Red Cards, One Match</h2>

        <p>
          South Africa's discipline collapsed spectacularly. The Bafana Bafana conceded two red cards
          in a match that had already become heated well before the end, leaving them shorthanded for
          extended periods and unable to mount any meaningful threat on Mexico's goal. A South African
          player's frustration at perceived injustices from the referee likely contributed to the
          escalating aggression.
        </p>

        <p>
          Mexico were not entirely innocent either. One of their own players was also dismissed — a
          straight red card that added to the surreal atmosphere inside Azteca. The fact that Mexico
          played for a portion of the match at 10 men themselves, while still winning comfortably,
          speaks to the gulf in quality between the two sides on the night.
        </p>

        <p>
          The total of three red cards in a single World Cup opener is, by any measure, an extraordinary
          record. It handed the 2026 tournament its first major talking point before the first week
          had even concluded.
        </p>

        <h2 id="analysis">What This Means</h2>

        <p>
          For Mexico, this was everything their home crowd demanded. A winning start on the biggest
          stage of their sporting calendar, delivered with a degree of quality that belied the chaos
          around them. The attack functions. The home pressure is real. Three points from the opener
          is the ideal launchpad.
        </p>

        <p>
          For South Africa, the picture is immediately dire. They now face a must-win situation
          in both remaining group games to have any realistic chance of advancing. The red cards
          will carry suspensions into those matches, further depleting their squad. Their path to
          the knockout rounds, already narrow as the group's lowest-ranked side, has effectively
          become a desperate last stand.
        </p>

        <p>
          Group A continues with South Korea's 2–1 win over Czechia on the same day, meaning the
          standings after Day 1 have Mexico and South Korea both picking up maximum points from
          different fixtures. The group is already developing a clear hierarchy — one that South
          Africa must overturn if they are to avoid an early exit from their first-ever World Cup
          on North American soil.
        </p>

      </div>
    </NewsArticle>
  );
}
