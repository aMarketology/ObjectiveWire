import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-saudi-arabia-1-uruguay-1-group-h';
const URL_PATH = '/world-cup/2026/saudi-arabia-1-uruguay-1-group-h';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-saudi-arabia-1-uruguay-1-group-h.jpg';
export const metadata: Metadata = {
  title: 'Saudi Arabia 1–1 Uruguay | World Cup 2026 Group H Match Report',
  description:
    "Mohammed Al-Owais produced a legendary goalkeeping performance as Saudi Arabia survived a second-half onslaught to draw 1–1 with Uruguay in Miami, with Maxi Araújo's 80th-minute equalizer the only goal Uruguay could claim from 27 shots.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Saudi Arabia 1–1 Uruguay | World Cup 2026 Group H',
    description: "Al-Owais is legendary. Saudi Arabia hold Uruguay to 1–1 despite 27 shots. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-15T23:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Saudi Arabia', 'Uruguay', 'Group H', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saudi Arabia 1–1 Uruguay | World Cup 2026',
    description: 'Al-Owais with a legendary showing. Uruguay have 27 shots and draw 1–1. Every team in Group H has one point. Report by Jack Brennan.',
  },
};

export default function SaudiArabiaUruguayPage() {
  return (
    <NewsArticle
      title="Saudi Arabia 1–1 Uruguay: Al-Owais Produces Legendary Display as Group H Remains Equal"
      subtitle="An astonishing second-half goalkeeping performance from Mohammed Al-Owais denies Uruguay as every team in Group H finishes the opening round on one point"
      category="World Cup 2026 · Group H"
      categoryColor="green"
      topicTag="sports"
      publishDate="June 15, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Saudi Arabia 1–1 Uruguay: Al-Owais Produces Legendary Display as Group H Remains Equal' }}
      tags={['World Cup 2026', 'Saudi Arabia', 'Uruguay', 'Group H', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Saudi Arabia vs Uruguay', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'spain-cape-verde', title: 'Spain 0–0 Cape Verde | Group H Report', url: '/world-cup/2026/spain-0-cape-verde-0-group-h', publishDate: 'June 15, 2026', category: 'Sports' },
        { slug: 'belgium-egypt', title: 'Belgium 1–1 Egypt | Group G Report', url: '/world-cup/2026/belgium-1-egypt-1-group-g', publishDate: 'June 15, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Saudi Arabia hold Uruguay to a 1–1 draw in Miami as every Group H team finishes the opening round on one point.',
        'Abdulelah Al Amri opens the scoring for Saudi Arabia from a Fernando Muslera spill.',
        "Marcelo Bielsa's second-half tactical changes transform Uruguay — they have 20 shots in the second half alone.",
        'Maxi Araújo equalizes in the 80th minute after sustained Uruguay pressure.',
        "Mohammed Al-Owais produces what may be the goalkeeping performance of the tournament to limit Uruguay to one second-half goal from 27 total attempts.",
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          When Abdulelah Al Amri followed up on a Fernando Muslera parry to give Saudi Arabia a 1–0
          halftime lead, Uruguay's tournament seemed to be moving in a direction consistent with the
          worst anxieties of their pre-match preparation. Then Marcelo Bielsa walked into the
          Hard Rock Stadium dressing room at halftime and said whatever it is Marcelo Bielsa says
          when he has decided a team needs to transform.
        </p>

        <p>
          The second half was a different sport entirely. Uruguay poured forward with the kind of
          relentless, organized intensity that Bielsa's teams have always produced — high-tempo,
          high-press, suffocating the opponent's ability to play out from the back. Saudi Arabia
          retreated. Their goalkeeper took a deep breath. And Mohammed Al-Owais had the match of
          his life.
        </p>

        <h2 id="al-owais">Al-Owais: The Performance That Makes Legends</h2>

        <p>
          By the final whistle, Uruguay had attempted 27 shots on goal. Twenty of them came in the
          second half alone — one of the most sustained attacking performances at this World Cup.
          The expected-goals metrics will show that Saudi Arabia should not have escaped with a
          point. That they did is almost entirely the story of one man.
        </p>

        <p>
          Al-Owais produced saves that belong in highlight reels: reaction stops, athletic leaps to
          high crosses, deflections, positioning — every aspect of goalkeeping that can be tested
          in a single match was tested, and he passed every one. Uruguay hit him with everything
          and he gave them one goal. One. From 27 shots and 70 minutes of territorial domination.
        </p>

        <p>
          These are the performances that World Cup goalkeeping legends are made of. Lev Yashin,
          Dino Zoff, Peter Schmeichel, Oliver Kahn — all of them were defined by matches where
          they stood between their country and elimination. Al-Owais, on this night in Miami,
          entered that company.
        </p>

        <h2 id="uruguay-bielsa">Uruguay's Transformation and What It Means</h2>

        <p>
          Darwin Núñez was substituted off at halftime — a statement from Bielsa about performance
          or tactical shape, depending on your reading. What followed was a Uruguay side that played
          nothing like the first half. The pressing was immediate and organized. The transitions were
          rapid. The chances were genuine and multiple.
        </p>

        <p>
          Maxi Araújo's 80th-minute equalizer was the only reward from a second half that deserved
          far more. Uruguay will feel they should have won. The data supports that feeling. But
          football does not adjudicate based on shots attempted, and Saudi Arabia's goalkeeper
          refused to allow the laws of probability to operate normally.
        </p>

        <h2 id="group-h">Group H: The Most Dramatic Opening Round</h2>

        <p>
          The bigger storyline in Group H belongs to the entire opening round, not just this match.
          Spain, one of the tournament's heaviest favorites, were held 0–0 by debutants Cape Verde
          in Atlanta on the same day. Saudi Arabia draw with Uruguay. Belgium drop points against
          Egypt in Group G. Uruguay, Belgium, and Spain — three of the tournament's pre-tournament
          power picks — all failed to win their opening games.
        </p>

        <p>
          Every team in Group H finishes the opening round on one point. The standings are perfectly
          level. The pressure on every remaining game is now enormous, with Spain in particular
          knowing they cannot afford another slip if they intend to fulfil the championship
          expectations their squad's quality has generated.
        </p>

        <p>
          For Saudi Arabia and their extraordinary goalkeeper, it is a point earned with heroic
          individual resistance. For Uruguay, it is a point that feels like a defeat — but a
          team that produces 20 shots in 45 minutes against a defending opponent knows they can
          score goals. The question is whether they can convert that attacking pressure into
          results when their opponents are not content simply to absorb.
        </p>

      </div>
    </NewsArticle>
  );
}
