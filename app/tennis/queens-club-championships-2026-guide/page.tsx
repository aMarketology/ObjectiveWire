import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SportArticle,
  SportCallout,
  SportStatRow,
  SportStat,
} from '@/components/articles/SportArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';
import { PrismTable } from '@/components/articles/PrismTable';

export const revalidate = 86400;

const SLUG = '/tennis/queens-club-championships-2026-guide';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: "Queen's Club Championships 2026 | What Is the Queens Cup",
  description: "What is Queen's Club and the Queens Cup? The complete guide to the 2026 HSBC Championships at Queen's Club in London, the premier Wimbledon warm-up for men and women.",
  keywords: [
    "Queen's Club Championships 2026",
    "what is the Queens Cup tennis",
    "HSBC Championships Queens Club",
    "Queens Club London tennis",
    "Wimbledon warm-up tournament",
    "WTA 500 Queens Club",
    "ATP 500 Queens Club",
    "Queens Club grass court",
    "Queens Club West Kensington",
    "Serena Williams Queens Club 2026",
    "Victoria Mboko doubles",
    "tennis June 2026",
    "grass court season 2026",
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Queen's Club Championships 2026 | The Premier Wimbledon Warm-Up Explained",
    description: "Founded in 1886, Queen's Club in West Kensington hosts the finest grass courts outside Wimbledon. Full 2026 tournament guide, schedule, and why every top player wants a draw here.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Madison Younghans'],
    publishedTime: '2026-06-01T16:00:00Z',
    modifiedTime: '2026-06-01T16:00:00Z',
    section: 'Sports',
    tags: ["Queen's Club", 'Tennis', 'Wimbledon', 'Grass Court Season'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Queen's Club 2026 | The Wimbledon Warm-Up Every Player Needs",
    description: "140 years of grass court history in West Kensington. The complete guide to what Queen's Club is and why the 2026 draw matters.",
  },
};

export default function QueensClubGuidePage() {
  return (
    <SportArticle
      title="Queen's Club Championships 2026 | What Is the Queens Cup and Why It Matters"
      subtitle="Queen's Club in West Kensington, London is the world's most prestigious grass court warm-up event before Wimbledon. Founded in 1886 and named after Queen Victoria, the 2026 HSBC Championships hosts both a WTA 500 women's draw in Week 1 and the traditional ATP 500 men's event in Week 2, with Serena Williams making a wildcard doubles appearance alongside Canadian rising star Victoria Mboko."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-01T16:00:00Z"
      readTime="6 min read"
      author={{ name: 'Madison Younghans', role: 'Tennis Reporter', authorSlug: 'madison-younghans' }}
      slug="queens-club-championships-2026-guide"
      url={SLUG}
      tags={["Queen's Club", 'Tennis', 'Wimbledon', 'Grass Court Season']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Sports', item: '/sports' },
        { name: "Queen's Club 2026", item: SLUG },
      ]}
      keyTakeaways={[
        "Queen's Club Championships, officially the HSBC Championships, is a grass court tennis tournament held annually in West Kensington, London at the Queen's Club, founded in 1886.",
        "The tournament is universally considered the premier Wimbledon warm-up event because its grass courts are maintained to mirror the exact pace and bounce of Centre Court.",
        "The 2026 edition is the first to run a full two-week format: Week 1 (June 8 to 14) hosts the WTA 500 women's draw, Week 2 (June 15 to 21) hosts the ATP 500 men's draw.",
        "Serena Williams is making a wildcard doubles appearance in the 2026 WTA 500 draw alongside Canadian teenager Victoria Mboko.",
        "Queen's Club is also the national headquarters for Real Tennis, the ancient indoor predecessor to modern lawn tennis, and features 28 outdoor and 10 permanent indoor courts.",
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: "What is the Queen's Club Championships?",
          answer: "The Queen's Club Championships, commercially known as the HSBC Championships, is an annual grass court tennis tournament held at the Queen's Club in West Kensington, London. Founded in 1886 and named after Queen Victoria, it is the most prestigious warm-up event before Wimbledon and carries ATP 500 status for the men's draw and WTA 500 status for the women's draw.",
        },
        {
          question: "What is the Queens Cup in tennis?",
          answer: "The Queens Cup is an informal name used for the Queen's Club Championships. The tournament's official commercial name is the HSBC Championships, but it is widely referred to as Queen's, the Queens Cup, or the Queen's Club tournament in media coverage.",
        },
        {
          question: "When is the 2026 Queen's Club Championships?",
          answer: "The 2026 Queen's Club Championships runs across two weeks. The WTA 500 women's event takes place June 8 to 14, 2026. The ATP 500 men's event follows June 15 to 21, 2026.",
        },
        {
          question: "Why is Queen's Club important for Wimbledon?",
          answer: "Queen's Club is widely regarded as having the finest grass courts outside Wimbledon, maintained to the same pace and surface specifications as All England Club courts. Playing Queen's gives players a direct transition from the clay court season at the French Open to the grass court conditions they will face at Wimbledon two weeks later.",
        },
        {
          question: "Is Serena Williams playing at Queen's Club 2026?",
          answer: "Yes. Serena Williams received a wildcard to compete in the doubles draw at the 2026 WTA 500 Queen's Club Championships, partnering with young Canadian star Victoria Mboko.",
        },
      ]}
    >
      <p>
        <strong>Queen's Club Championships</strong>, officially the <strong>HSBC Championships</strong>, is the most important grass court tournament in the world outside Wimbledon itself. Held every June at the Queen's Club in West Kensington, London, it is the event where the grass court season begins in earnest and where players discover, in real competitive conditions, how their games translate from the clay courts of Roland Garros to the fast, low-bounce surface of English lawn tennis.
      </p>

      <p>
        The 2026 edition is historic. For the first time, Queen's Club runs a full two-week schedule hosting both a <strong>WTA 500 women's event</strong> and the traditional <strong>ATP 500 men's event</strong>. The women's draw in Week 1 includes one of the summer's most anticipated wildcard appearances. For full coverage of Serena Williams' return to the tour at this event, see the{' '}
        <Link href="/tennis/serena-williams-queens-club-2026-return" className="text-blue-600 hover:text-blue-800 underline">
          Serena Williams Queen's Club wildcard profile
        </Link>.
      </p>

      <h2>What Is Queen's Club | 140 Years of History</h2>

      <p>
        Queen's Club was founded in <strong>1886</strong> as a private members' sporting and racquets club, named in honor of <strong>Queen Victoria</strong>. It is located on Palliser Road in West Kensington, in the London Borough of Hammersmith and Fulham, occupying approximately 12 acres of grounds that have been in continuous use for lawn tennis for over a century.
      </p>

      <p>
        The club is not just a tennis venue. It is the <strong>national headquarters for Real Tennis</strong>, the ancient indoor ball-and-racquet game that predates modern lawn tennis by several centuries. Real Tennis was played by Henry VIII. The version you watch at Wimbledon is its descendant. Queen's Club maintains dedicated Real Tennis courts that serve as the administrative and competitive center of the sport in Great Britain.
      </p>

      <SportCallout heading="Queen's Club Fast Facts" color="indigo" icon="🎾">
        <p><strong>Founded:</strong> 1886, named after Queen Victoria</p>
        <p><strong>Location:</strong> West Kensington, London (Palliser Road, W14)</p>
        <p><strong>Outdoor courts:</strong> 28 grass courts</p>
        <p><strong>Indoor courts:</strong> 10 permanent indoor courts</p>
        <p><strong>Real Tennis headquarters:</strong> National HQ for Real Tennis in Great Britain</p>
        <p><strong>Other sports hosted:</strong> Rackets, squash, Real Tennis</p>
      </SportCallout>

      <h2>The 2026 Tournament Structure | Two Weeks, Two Draws</h2>

      <p>
        The 2026 HSBC Championships is the first Queen's Club event to operate a full two-week format across both the men's ATP 500 and the women's WTA 500 circuits. The schedule structure reflects the sport's push to give the women's grass court season the same premium platform that the men's draw has occupied at Queen's for decades.
      </p>

      <PrismTable
        accent="blue"
        headers={['Week', 'Tournament']}
        rows={[
          ['Week 1: June 8 to 14, 2026', "WTA 500 Women's Draw | HSBC Championships"],
          ['Week 2: June 15 to 21, 2026', "ATP 500 Men's Draw | HSBC Championships"],
          ['Surface', 'Grass (outdoor), maintained to Wimbledon specification'],
          ['Prize fund (WTA)', 'WTA 500 tier prize structure'],
          ['Prize fund (ATP)', 'ATP 500 tier prize structure'],
          ['Location', "Queen's Club, West Kensington, London"],
        ]}
        caption="2026 HSBC Championships at Queen's Club schedule and tournament structure."
      />

      <h2>Why Queen's Club Is the Premier Wimbledon Warm-Up</h2>

      <p>
        The timing of Queen's Club in the calendar is not incidental. It falls in the final two weeks of June, immediately after the French Open clay court season concludes. Players arriving at Queen's are transitioning from the slowest, most physically taxing surface in tennis to the fastest and most deceptive. Grass court tennis demands entirely different footwork, different serve-and-volley instincts, and a different read on how the ball sits up or skids through the court.
      </p>

      <p>
        What makes Queen's Club uniquely valuable for this transition is that its groundskeeping team maintains the grass courts to the same <strong>specification, pace, and surface bounce</strong> as the All England Club at Wimbledon. This is intentional and well-documented. Players who win or go deep at Queen's almost always arrive at Wimbledon in form, because they have spent a week genuinely competing on surfaces that mirror what they will face three weeks later.
      </p>

      <SportStatRow>
        <SportStat metric="Club Founded" value="1886" subtext="named after Queen Victoria" color="indigo" />
        <SportStat metric="Outdoor Courts" value="28" subtext="grass, Wimbledon spec" color="green" />
        <SportStat metric="Indoor Courts" value="10" subtext="permanent indoor" color="blue" />
        <SportStat metric="ATP Status" value="500" subtext="men's draw tier" color="orange" />
      </SportStatRow>

      <h2>The Women's Draw | WTA 500 and the Serena Williams Wildcard</h2>

      <p>
        The 2026 WTA 500 draw at Queen's Club is the headline story of Week 1. <strong>Serena Williams</strong>, one of the most decorated players in the history of the sport, received a wildcard to compete in the <strong>doubles draw</strong> alongside <strong>Victoria Mboko</strong>, the young Canadian who has emerged as one of the most exciting names in women's tennis heading into the 2026 grass court season.
      </p>

      <p>
        The pairing is a deliberate generational statement. Mboko, in her early career, gets a partner whose knowledge of grass court positioning, net play, and big-moment serving is unmatched. Williams, returning to competitive tennis, gets a grass surface she has dominated across her career and a partner with the athletic range to cover ground Williams may not chase in the doubles format.
      </p>

      <p>
        For the full background on Williams' return to competition, read the{' '}
        <Link href="/tennis/serena-williams-queens-club-2026-return" className="text-blue-600 hover:text-blue-800 underline">
          complete Serena Williams Queen's Club 2026 profile
        </Link>.
      </p>

      <h2>Real Tennis | The Ancient Sport That Queen's Club Protects</h2>

      <p>
        Most casual viewers who watch Queen's Club on television each summer have no idea that the facility they are watching is also the national administrative center for a sport that predates modern tennis by five centuries. <strong>Real Tennis</strong>, also called Royal Tennis or Court Tennis in North America, is the ancient indoor racquet game from which lawn tennis ultimately descended.
      </p>

      <p>
        Henry VIII was a Real Tennis player. The courts are asymmetrical, enclosed indoor spaces with sloping roofs called penthouses, galleries, and grille openings that function as scoring targets. The rules bear little resemblance to modern tennis. Queen's Club hosts Real Tennis courts, rackets courts, and squash courts alongside its 28 grass lawn tennis surfaces, making it the most historically layered racquet sports facility in the world.
      </p>

      <SportCallout heading="Queen's Club vs Wimbledon | Key Differences" color="orange" icon="📊">
        <p><strong>Queen's Club:</strong> Private members club, ATP 500 / WTA 500 tier, 28 grass courts, West Kensington, capacity approximately 7,000 on show courts. Prize fund reflects 500-tier structure.</p>
        <p><strong>Wimbledon:</strong> Grand Slam, public event, 42 grass courts across the All England Club grounds, SW19, capacity 15,000 on Centre Court. Grand Slam prize fund. No sponsorship name overlay.</p>
        <p>Surface specification is essentially identical. The competitive gulf between the two events is significant. The atmosphere gap is enormous. Queen's Club remains intimate by design.</p>
      </SportCallout>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.queensclub.co.uk',
            title: "The Queen's Club Official Site",
            description: 'Official club history, tournament information, and Real Tennis programming at Queen\'s Club West Kensington.',
          },
          {
            number: 2,
            url: 'https://www.wtatennis.com/tournaments/queens-club',
            title: "WTA 500 Queen's Club Championships | WTA",
            description: 'Official WTA tournament page for the 2026 HSBC Championships women\'s draw.',
          },
          {
            number: 3,
            url: 'https://www.atptour.com/en/tournaments/queens-club/311/overview',
            title: "Queen's Club Championships | ATP Tour",
            description: 'Official ATP 500 tournament page, draw history, and past champions at Queen\'s Club.',
          },
        ]}
        internalLinks={[
          { href: '/tennis/serena-williams-queens-club-2026-return', label: 'Serena Williams Queen\'s Club 2026 Wildcard Profile' },
          { href: '/sports', label: 'ObjectWire Sports Hub' },
          { href: '/authors/madison-younghans', label: 'Madison Younghans, Tennis Reporter' },
        ]}
      />
    </SportArticle>
  );
}
