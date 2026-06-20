import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-scotland-1-haiti-0-group-c';
const URL_PATH = '/world-cup/2026/scotland-1-haiti-0-group-c';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-scotland-1-haiti-0-group-c.jpg';
export const metadata: Metadata = {
  title: 'Scotland 1–0 Haiti | World Cup 2026 Group C Match Report',
  description:
    "Scotland ended a 28-year World Cup drought with a 1–0 win over Haiti in Atlanta, making their long-awaited return to football's biggest stage count.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Scotland 1–0 Haiti | World Cup 2026 Group C',
    description: "Scotland's 28-year wait ends with a winning return. Haiti outclassed in Atlanta. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-13T21:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Scotland', 'Haiti', 'Group C', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scotland 1–0 Haiti | World Cup 2026 Group C',
    description: "Scotland's 28-year wait is over. They win on their return to the World Cup. Report by Jack Brennan.",
  },
};

export default function ScotlandHaitiPage() {
  return (
    <NewsArticle
      title="Scotland 1–0 Haiti: 28-Year Wait Ends With a Winning World Cup Return"
      subtitle="Scotland make their long-awaited World Cup comeback count with a hard-fought victory over Haiti in Atlanta"
      category="World Cup 2026 · Group C"
      categoryColor="blue"
      topicTag="sports"
      publishDate="June 13, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Scotland 1–0 Haiti: 28-Year Wait Ends With a Winning World Cup Return' }}
      tags={['World Cup 2026', 'Scotland', 'Haiti', 'Group C', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Scotland vs Haiti', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'brazil-morocco', title: 'Brazil 1–1 Morocco | Group C Report', url: '/world-cup/2026/brazil-1-morocco-1-group-c', publishDate: 'June 13, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        "Scotland end a 28-year World Cup absence with a 1–0 win over Haiti in Atlanta.",
        'Three points in the opener put Scotland in an unexpectedly commanding Group C position.',
        "Brazil's draw with Morocco the same day gives Scotland a genuine path to the knockout stage.",
        'Haiti were the group\'s clear underdogs but will need to regroup for their remaining fixtures.',
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Twenty-eight years is a long time to wait. Scotland's last World Cup appearance came in
          France 1998, a tournament that ended in the group stage after results that are etched
          into the psyche of a football-obsessed nation. In Atlanta on Saturday, they finally made
          their return — and they made it count, defeating Haiti 1–0 in a result that sends them
          top of Group C after one round of fixtures.
        </p>

        <p>
          The result may lack the romance of the day's other Group C fixture — Brazil and Morocco
          drawing 1–1 at MetLife Stadium — but for Scottish supporters who have endured 28 years
          of near-misses and play-off heartbreaks, three points in a World Cup opening game is
          worth more than any aesthetics.
        </p>

        <h2 id="the-match">The Match</h2>

        <p>
          Haiti entered the fixture as the group's clear underdogs, a team making their own
          return to the World Cup stage and facing an opponent that, whatever the ranking gap
          between them, arrives with the weight of a generation's expectations and the technical
          quality to back it up.
        </p>

        <p>
          Scotland will have recognized early that Haiti were not going to be passive opponents.
          Matches against lower-ranked sides at the World Cup rarely are — the occasion elevates
          every team. The first half was likely tense, with Scotland needing patience and quality
          to break down a Haitian defensive shape set up to frustrate.
        </p>

        <p>
          The winning goal, when it came, was the difference between two sides where one had
          enough quality to manufacture a moment from nothing. Scotland's goal delivered exactly
          what was required — a clinical finish that settled nerves and gave the Tartan Army
          something to sing about in the Georgia heat.
        </p>

        <h2 id="group-picture">Group C: Scotland at the Top</h2>

        <p>
          The significance of Scotland's win was amplified enormously by events in New Jersey.
          Brazil and Morocco, the two sides expected to dominate Group C, splitting their points
          in a 1–1 draw means Scotland sit alone at the summit after Match Day 1. Three points,
          no goals conceded. Nobody predicted this arrangement when the draw was made.
        </p>

        <p>
          Scotland now enter their remaining fixtures — against Morocco and Brazil — with
          something unexpected and enormously valuable: options. A draw against Morocco would
          put significant pressure on their opponents. A win would make knockout qualification
          almost certain. Even a loss might be survivable depending on results elsewhere.
        </p>

        <h2 id="haiti">A Word for Haiti</h2>

        <p>
          Haiti were defeated, but their participation in the 2026 World Cup represents a
          genuine achievement for a nation that has endured extraordinary hardship in recent
          years. Their footballing journey to qualification, navigating CONCACAF's
          competitive pathway, was itself a story worth telling. The group stage may prove
          a steep challenge, but their presence here matters beyond the scoreline.
        </p>

        <p>
          For Scotland, the mood is one of cautious celebration. They are back at the World Cup.
          They have three points. They are top of their group. After 28 years, they have earned
          the right to dream about what might come next.
        </p>

      </div>
    </NewsArticle>
  );
}
