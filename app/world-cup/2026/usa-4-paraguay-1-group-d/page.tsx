import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-usa-4-paraguay-1-group-d';
const URL_PATH = '/world-cup/2026/usa-4-paraguay-1-group-d';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-usa-4-paraguay-1-group-d.jpg';
export const metadata: Metadata = {
  title: 'USA 4–1 Paraguay | World Cup 2026 Group D Match Report',
  description:
    'The USMNT delivered a dominant 4–1 statement victory over Paraguay in Los Angeles, with Folarin Balogun and Christian Pulisic leading a clinical attacking performance on home soil.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'USA 4–1 Paraguay | World Cup 2026 Group D',
    description: 'The USMNT announce themselves as genuine contenders with a 4–1 demolition of Paraguay in Los Angeles. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-12T23:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'USA', 'USMNT', 'Paraguay', 'Group D', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USA 4–1 Paraguay | World Cup 2026',
    description: 'The USMNT are a genuine contender. Balogun and Pulisic shine in a 4–1 statement win.',
  },
};

export default function USAParaguayPage() {
  return (
    <NewsArticle
      title="USA 4–1 Paraguay: A Statement Performance on Home Soil"
      subtitle="Balogun and Pulisic link brilliantly as the USMNT deliver the most convincing result of the tournament's opening days"
      category="World Cup 2026 · Group D"
      categoryColor="blue"
      topicTag="sports"
      publishDate="June 12, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'USA 4–1 Paraguay: A Statement Performance on Home Soil' }}
      tags={['World Cup 2026', 'USA', 'USMNT', 'Paraguay', 'Group D', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'USA vs Paraguay', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'canada-bosnia', title: 'Canada 1–1 Bosnia | Group B Report', url: '/world-cup/2026/canada-1-bosnia-1-group-b', publishDate: 'June 12, 2026', category: 'Sports' },
        { slug: 'australia-turkey', title: 'Australia 2–0 Türkiye | Group D Report', url: '/world-cup/2026/australia-2-turkiye-0-group-d', publishDate: 'June 13, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'USA beat Paraguay 4–1 in Los Angeles in their 2026 World Cup opener.',
        'Folarin Balogun scores after having a goal disallowed for offside.',
        'Christian Pulisic delivers the assist that leads to Balogun\'s goal.',
        'The 4–1 scoreline is the most convincing result of the tournament\'s opening days.',
        'Paraguay accumulate 5 yellow cards after their defeat.',
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The United States Men's National Team came into this World Cup carrying all the pressure
          and expectation of a co-hosting nation. In Los Angeles on Friday night, they answered every
          question that had been asked of them — and several that hadn't — with a 4–1 demolition of
          Paraguay that stands as the most complete performance by any team in the tournament's opening
          two days.
        </p>

        <p>
          The backdrop to the match had its own drama. Reports of tension between former USMNT star
          Clint Dempsey and Canada head coach Jesse Marsch added a layer of soap opera to the day.
          But once the whistle blew at SoFi Stadium, all eyes were on what the United States could do
          with a World Cup opportunity on their own doorstep.
        </p>

        <h2 id="balogun-pulisic">Balogun and Pulisic: The Partnership That Changes Everything</h2>

        <p>
          Folarin Balogun was at the center of the match's defining narrative. Minutes before his goal,
          the striker had a perfectly struck effort ruled out for offside — one of those moments that can
          deflate an entire stadium. Balogun shook it off with a composure that spoke to a player who
          has shed any doubt about his ability at this level.
        </p>

        <p>
          The actual goal came from a through ball by Christian Pulisic that split Paraguay's defensive
          line with the precision of a surgical instrument. Balogun's first touch, his positioning,
          and his finish were all flawless. The stadium erupted. The USMNT had announced themselves.
        </p>

        <p>
          Pulisic himself was the orchestrator throughout, operating in pockets of space between
          Paraguay's defensive and midfield lines and making decisions quickly under pressure. The
          partnership between him and Balogun looked dangerous from the first minute and translated
          into numbers on the scoresheet.
        </p>

        <h2 id="scoreline">A Comprehensive Dismantling</h2>

        <p>
          The 4–1 final scoreline was emphatic by any standard. Paraguay, who had genuine
          aspirations of advancing from Group D, were systematically taken apart. The American
          press was relentless, their transitions rapid, and their finishing largely clinical. By
          the time the fourth goal arrived, the scoreline had the feel of a side operating
          well within its own capabilities.
        </p>

        <p>
          Paraguay's frustration manifested in five yellow cards accumulated across the match.
          Their discipline fractured under sustained pressure — a pattern that will concern their
          coaching staff ahead of fixtures where they now need points desperately.
        </p>

        <h2 id="analysis">Are the USA a Genuine Contender?</h2>

        <p>
          The question is no longer abstract. Before Thursday's opener, reasonable observers might
          have described the United States as a likable host nation with a puncher's chance in
          the knockout rounds. After Los Angeles, the conversation has shifted.
        </p>

        <p>
          The attacking firepower across the starting eleven is real. The Balogun-Pulisic axis
          looks like it can hurt the best defenses in the tournament. The home crowd will carry
          them through difficult moments. And perhaps most importantly, they showed they can
          impose their own style on a match rather than simply reacting to what opponents do.
        </p>

        <p>
          Group D now has Australia — who beat Türkiye 2–0 on Day 3 — as the unexpected companion
          to the United States at the top of the standings. The USA vs. Australia clash becomes, in
          an instant, one of the most significant group-stage fixtures remaining. Both sides will
          know that winning it could lock up a top-two finish with a match to spare.
        </p>

      </div>
    </NewsArticle>
  );
}
