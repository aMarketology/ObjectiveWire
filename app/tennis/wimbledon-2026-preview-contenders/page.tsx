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

export const revalidate = 3600;

const SLUG = '/tennis/wimbledon-2026-preview-contenders';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Wimbledon 2026 Preview | Top Contenders, Draw, Key Matches',
  description: "Wimbledon 2026 starts June 29 at the All England Club. Full contender preview for the men's and women's draws, grass court form guide, and who the favorites are after Queen's Club.",
  keywords: [
    'Wimbledon 2026',
    'Wimbledon 2026 preview',
    'Wimbledon 2026 contenders',
    'Wimbledon 2026 favorites',
    "Wimbledon 2026 men's draw",
    "Wimbledon 2026 women's draw",
    'Wimbledon 2026 date',
    'Wimbledon 2026 start date',
    'grass court season 2026',
    'Wimbledon 2026 Djokovic',
    'Wimbledon 2026 Alcaraz',
    'Wimbledon 2026 Swiatek',
    'Wimbledon 2026 Serena Williams',
    'All England Club 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Wimbledon 2026 Preview | Contenders, Grass Court Form, and the Favorites',
    description: "Wimbledon 2026 opens June 29. Carlos Alcaraz and Jannik Sinner lead the men's draw. Iga Swiatek faces a grass court test. Full preview after Queen's Club week.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Madison Younghans'],
    publishedTime: '2026-06-01T17:00:00Z',
    modifiedTime: '2026-06-01T17:00:00Z',
    section: 'Sports',
    tags: ['Wimbledon', 'Tennis', 'Grass Court', 'All England Club'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wimbledon 2026 | Alcaraz, Sinner, Swiatek, and the Grass Court Wildcards',
    description: "The All England Club opens June 29. Men's and women's contender breakdown after Queen's Club week. Who wins on the grass.",
  },
};

export default function Wimbledon2026PreviewPage() {
  return (
    <SportArticle
      title="Wimbledon 2026 Preview | Top Contenders, Grass Court Form, and Who Wins at the All England Club"
      subtitle="Wimbledon 2026 opens June 29 at the All England Club in SW19, London. Carlos Alcaraz enters as the defending champion and the player the grass suits most naturally among the current generation. Jannik Sinner, Novak Djokovic, and Iga Swiatek lead their respective draws in a fortnight that follows the Queen's Club and Eastbourne grass court warmup swing."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-01T17:00:00Z"
      readTime="7 min read"
      author={{ name: 'Madison Younghans', role: 'Tennis Reporter', authorSlug: 'madison-younghans' }}
      slug="wimbledon-2026-preview-contenders"
      url={SLUG}
      tags={['Wimbledon', 'Tennis', 'Grass Court', 'All England Club']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Sports', item: '/sports' },
        { name: 'Tennis', item: '/tennis' },
        { name: 'Wimbledon 2026 Preview', item: SLUG },
      ]}
      keyTakeaways={[
        'Wimbledon 2026 begins June 29 and concludes with the gentlemen\'s singles final on July 12 and ladies\' singles final on July 13 at the All England Club, SW19, London.',
        "Carlos Alcaraz is the defending men's champion and enters as the consensus favorite, with a grass court movement profile and net game that is uniquely suited to the All England Club surface.",
        "Jannik Sinner, the ATP world No. 1, has never won Wimbledon and grass remains his least proven major surface, giving Alcaraz a meaningful advantage at this specific event.",
        "Iga Swiatek is the women's world No. 1 but has historically been tested by grass court conditions, where the low bounce reduces the margin on her heavy topspin groundstrokes.",
        "The grass court warm-up period at Queen's Club (June 8 to 14 for women, June 15 to 21 for men) and Eastbourne/Bad Homburg (June 21 to 27) provides critical form indicators before the draw.",
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'When does Wimbledon 2026 start?',
          answer: "Wimbledon 2026 starts on June 29, 2026 at the All England Lawn Tennis and Croquet Club in SW19, London. The gentlemen's singles final is scheduled for July 12 and the ladies' singles final for July 13, 2026.",
        },
        {
          question: 'Who is the favorite to win Wimbledon 2026?',
          answer: "Carlos Alcaraz is the consensus favorite to win the 2026 Wimbledon gentlemen's singles, having won the title in 2023 and 2024. He is listed at approximately +300 at major sportsbooks entering the grass court season.",
        },
        {
          question: 'Who is the defending Wimbledon champion in 2026?',
          answer: "Carlos Alcaraz is the defending Wimbledon gentlemen's singles champion, having won the 2024 and 2023 titles. The defending ladies' champion depends on the 2025 Wimbledon result.",
        },
        {
          question: 'Is Serena Williams playing Wimbledon 2026?',
          answer: "Serena Williams is competing in the doubles draw at Queen's Club 2026 (June 8 to 14), the Wimbledon warm-up event, alongside Canadian Victoria Mboko. There has been no announcement of a Wimbledon 2026 singles or doubles entry from Williams as of June 1, 2026.",
        },
        {
          question: 'How long does Wimbledon 2026 last?',
          answer: 'Wimbledon 2026 runs for two weeks, from June 29 to July 13. The schedule includes the singles, doubles, mixed doubles, and junior draws across Centre Court, Court No. 1, Court No. 2, and the outside courts.',
        },
      ]}
    >
      <p>
        <strong>Wimbledon 2026</strong> opens June 29 at the All England Club in SW19, London. The fortnight that follows is the most watched annual tennis event on the planet, contested on grass courts that reward the serve-and-volley instincts, flat ball-striking, and aggressive net approach that define the sport's oldest major. The warm-up period that precedes it has already begun: the{' '}
        <Link href="/tennis/queens-club-championships-2026-guide" className="text-blue-600 hover:text-blue-800 underline">
          Queen's Club Championships (HSBC Championships)
        </Link>{' '}
        runs June 8 to 21 across its new two-week women's and men's format, with Eastbourne and Bad Homburg following in the final week before the Wimbledon draw.
      </p>

      <h2>Men's Draw | Alcaraz Is the Favorite, Sinner Is the Threat</h2>

      <p>
        <strong>Carlos Alcaraz</strong> is the defending champion. He won Wimbledon in 2023 and 2024, establishing a back-to-back title run that no player had managed since the Djokovic era. Alcaraz at 23 is at the beginning of what could be a sustained Wimbledon dominance: his movement on grass is exceptional, his serve has improved to the point where he now holds serve at a clip comparable to the best grass court servers of the current generation, and his net game, rare among baseline-first players of his age, gives him a genuine second dimension that most opponents cannot match.
      </p>

      <SportStatRow>
        <SportStat metric="Alcaraz Wimbledon titles" value="2" subtext="2023, 2024" color="green" />
        <SportStat metric="Men's favorite odds" value="+300" subtext="approx. consensus" color="blue" />
        <SportStat metric="Alcaraz age" value="23" subtext="peak grass window" color="indigo" />
        <SportStat metric="Sinner Wimbledon titles" value="0" subtext="best: SF" color="orange" />
      </SportStatRow>

      <p>
        <strong>Jannik Sinner</strong> is the ATP world No. 1 but grass remains his least proven major surface. Sinner's game is built on heavy baseline exchanges, early-ball timing, and a double-handed backhand that generates more from slower, higher-bouncing surfaces. On grass, where the ball stays low and early decision-making on serve return is compressed, he operates slightly outside his most comfortable parameters. His 2024 Wimbledon semi-final run showed he can compete at the highest level on the surface, but the gap between Sinner on grass and Alcaraz on grass is the most significant surface-specific talent gap at the top of the men's game.
      </p>

      <p>
        <strong>Novak Djokovic</strong>, the seven-time Wimbledon champion, at 39 remains a factor whenever he is physically available and motivated. Djokovic on grass is a tactical masterclass regardless of his physical condition relative to 2019 — he reads the serve better than any player alive, covers court with a movement efficiency that compensates for reduced explosive pace, and has served at this club through circumstances that would have eliminated every other player mentally. If Djokovic is in the draw and healthy, he is a legitimate quarter-final and semi-final threat.
      </p>

      <SportCallout heading="Men's Draw Contenders | Wimbledon 2026" color="indigo" icon="🎾">
        <p><strong>Carlos Alcaraz</strong> | +300 | Defending champion, native grass court profile</p>
        <p><strong>Jannik Sinner</strong> | +350 | World No. 1, grass is his least certain major surface</p>
        <p><strong>Novak Djokovic</strong> | +600 | 7-time champion, fitness the only question</p>
        <p><strong>Taylor Fritz</strong> | +1000 | Best American on grass, flat ball-striker</p>
        <p><strong>Ben Shelton</strong> | +1400 | Power serve, improving net game</p>
        <p><strong>Nick Kyrgios</strong> | +2000 | Historically dangerous at Wimbledon, fitness unpredictable</p>
      </SportCallout>

      <h2>Women's Draw | Swiatek vs the Grass Court Specialists</h2>

      <p>
        <strong>Iga Swiatek</strong> is the women's world No. 1 and the dominant force in the women's game since 2022, with five Grand Slam singles titles including back-to-back Roland Garros wins. Grass is her most complicated major surface. The heavy topspin that makes Swiatek unplayable on clay and competitive on hard courts sits less comfortably on grass, where the low bounce removes the high-ball advantage her forehand is engineered to exploit.
      </p>

      <p>
        Swiatek reached the Wimbledon semi-finals in 2023, demonstrating that the surface does not neutralize her entirely — her serve, movement, and competitive mentality remain elite on any surface. But her odds at Wimbledon reflect that a wider group of players can genuinely compete with her at the All England Club compared to Roland Garros, where she wins at a different level of authority.
      </p>

      <PrismTable
        accent="blue"
        headers={["Women's Contender", 'Approx. Odds | Strength on Grass']}
        rows={[
          ['Iga Swiatek', '+350 | World No. 1, aggressive returner, historically tested by low bounce'],
          ['Aryna Sabalenka', '+400 | Power serve, flat groundstrokes suit grass'],
          ['Elena Rybakina', '+450 | 2022 champion, elite flat serve, natural grass player'],
          ['Coco Gauff', '+600 | US Open champion, growing grass form'],
          ['Jessica Pegula', '+900 | Consistent all-surface, grass a step outside best results'],
          ['Mirra Andreeva', '+1000 | Youth and aggression, improving grass record'],
        ]}
        caption="Women's draw contenders for Wimbledon 2026 with approximate betting odds and grass court strength assessment."
      />

      <p>
        <strong>Elena Rybakina</strong> is the most dangerous grass court player in the women's draw who is not Swiatek on any given grass court day. The 2022 Wimbledon champion has a serve of the caliber that wins matches from the baseline before her opponent has fully processed what is happening. Her flat ball-striking stays low and true on grass in a way that heavy topspin players consistently struggle to elevate for their strongest shots.
      </p>

      <h2>The Queen's Club Form Guide and What It Tells Us</h2>

      <p>
        The{' '}
        <Link href="/tennis/queens-club-championships-2026-guide" className="text-blue-600 hover:text-blue-800 underline">
          2026 HSBC Championships at Queen's Club
        </Link>{' '}
        provides the clearest form indicator available before Wimbledon. The courts at Queen's Club are maintained to the same specification as the All England Club. Players who win or go deep at Queen's almost always arrive at Wimbledon in form. Players who lose early in the first round at Queen's — particularly seeded players — carry a warning sign into the draw.
      </p>

      <p>
        The 2026 women's draw at Queen's (June 8 to 14) also includes the notable wildcard doubles appearance from{' '}
        <Link href="/tennis/serena-williams-queens-club-2026-return" className="text-blue-600 hover:text-blue-800 underline">
          Serena Williams alongside Victoria Mboko
        </Link>, which adds a storyline to the opening week of the grass court season that has not been present since Williams retired from singles play after the 2022 US Open.
      </p>

      <h2>Key Dates | Wimbledon 2026 Calendar</h2>

      <PrismTable
        accent="blue"
        headers={['Date', 'Event']}
        rows={[
          ['June 8 to 14', "Queen's Club WTA 500 (women's warm-up)"],
          ['June 15 to 21', "Queen's Club ATP 500 (men's warm-up)"],
          ['June 21 to 27', 'Eastbourne / Bad Homburg (grass warm-up swing)'],
          ['June 28', 'Wimbledon qualifying (pre-tournament)'],
          ['June 29', 'Wimbledon 2026 Day 1 | First round begins'],
          ['July 4', 'Wimbledon middle Sunday (rest day, weather-dependent)'],
          ['July 7 to 8', 'Wimbledon quarter-finals'],
          ['July 10 to 11', 'Wimbledon semi-finals'],
          ['July 12', "Gentlemen's singles final"],
          ['July 13', "Ladies' singles final"],
        ]}
        caption="Wimbledon 2026 key dates and grass court warm-up schedule."
      />

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.wimbledon.com',
            title: 'Wimbledon | Official Site',
            description: 'Official Wimbledon tournament information, draws, order of play, and results from the All England Club.',
          },
          {
            number: 2,
            url: 'https://www.atptour.com/en/news/wimbledon-2026-preview',
            title: 'ATP Wimbledon 2026 Preview | ATP Tour',
            description: 'ATP Tour official preview, player stats, and men\'s draw analysis.',
          },
          {
            number: 3,
            url: 'https://www.wtatennis.com/tournaments/wimbledon',
            title: "Wimbledon 2026 | WTA",
            description: "WTA official women's draw, player rankings, and grass court season coverage.",
          },
        ]}
        internalLinks={[
          { href: '/tennis/queens-club-championships-2026-guide', label: "Queen's Club Championships 2026 Guide" },
          { href: '/tennis/serena-williams-queens-club-2026-return', label: 'Serena Williams at Queen\'s Club 2026' },
          { href: '/sports', label: 'ObjectWire Sports Hub' },
          { href: '/authors/madison-younghans', label: 'Madison Younghans, Tennis Reporter' },
        ]}
      />
    </SportArticle>
  );
}
