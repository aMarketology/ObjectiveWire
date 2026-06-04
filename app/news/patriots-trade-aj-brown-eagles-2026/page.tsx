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

const SLUG = '/news/patriots-trade-aj-brown-eagles-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Patriots Trade for A.J. Brown | Eagles Deal, Drake Maye Impact',
  description: 'The Philadelphia Eagles have officially traded WR A.J. Brown to the New England Patriots for a 2028 first-round pick and a 2027 fifth. Full trade details, cap breakdown, and Drake Maye fantasy impact.',
  keywords: [
    'AJ Brown trade Patriots',
    'Eagles trade AJ Brown',
    'Patriots trade for AJ Brown',
    'Drake Maye AJ Brown',
    'Howie Roseman 2028 first round pick',
    'NFL trades June 2026',
    'AJ Brown Patriots',
    'AJ Brown Eagles trade details',
    'Patriots wide receiver 2026',
    'Drake Maye weapons',
    'AJ Brown fantasy football',
    'DeVonta Smith WR1',
    'New England Patriots offense 2026',
    'Eagles cap space June 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Blockbuster Trade: Patriots Acquire WR A.J. Brown From Eagles',
    description: 'Philadelphia sends Brown to New England for a 2028 first-round pick. Full cap breakdown, WR depth chart, and what it means for Drake Maye.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Carson Scott'],
    publishedTime: '2026-06-01T18:00:00Z',
    modifiedTime: '2026-06-01T18:00:00Z',
    section: 'Sports',
    tags: ['NFL', 'New England Patriots', 'Philadelphia Eagles', 'A.J. Brown'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRADE: Patriots Get A.J. Brown From Eagles for 2028 First-Round Pick',
    description: 'Drake Maye just got his WR1. Brown joins New England in a post-June 1 blockbuster.',
  },
};

export default function AJBrownTradePatriotsPage() {
  return (
    <SportArticle
      title="Blockbuster Trade | Patriots Acquire Eagles WR A.J. Brown in Stunning Post-June 1 Deal"
      subtitle="The Philadelphia Eagles have officially traded three-time Pro Bowl wide receiver A.J. Brown to the New England Patriots for a 2028 first-round pick and a 2027 fifth-round selection, executed intentionally after the June 1 cap deadline to split a $43.45 million dead money charge across two seasons."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-01T18:00:00Z"
      readTime="6 min read"
      author={{ name: 'Carson Scott', role: 'NFL Reporter', authorSlug: 'carson-scott' }}
      slug="patriots-trade-aj-brown-eagles-2026"
      url={SLUG}
      tags={['NFL', 'New England Patriots', 'Philadelphia Eagles', 'A.J. Brown']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Sports', item: '/sports' },
        { name: 'Patriots Trade A.J. Brown', item: SLUG },
      ]}
      keyTakeaways={[
        'The Philadelphia Eagles have traded WR A.J. Brown to the New England Patriots for a 2028 first-round pick and a 2027 fifth-round pick.',
        'The trade was executed after the June 1 cap deadline, splitting a $43.45 million dead money hit into $16.3 million in 2026 and $27.1 million in 2027 for Philadelphia.',
        'Howie Roseman and the Eagles now own multiple 2028 first-round picks, the first team to accomplish that for the 2028 draft class.',
        'A.J. Brown, who turns 29 in June, immediately becomes the alpha WR1 for Drake Maye and the New England Patriots, reuniting with head coach Mike Vrabel.',
        'DeVonta Smith is elevated to clear-cut No. 1 target in Philadelphia, with Marquise Hollywood Brown, Elijah Moore, Dontayvion Wicks, and rookie Makai Lemon filling the remaining roles.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What did the Eagles get for A.J. Brown?',
          answer: 'The Philadelphia Eagles received a 2028 first-round pick and a 2027 fifth-round pick from the New England Patriots in exchange for wide receiver A.J. Brown.',
        },
        {
          question: 'Why did the Eagles trade A.J. Brown after June 1?',
          answer: 'By waiting until after the June 1 salary cap deadline, the Eagles split a $43.45 million dead money charge across two years: $16.3 million in 2026 and $27.1 million in 2027. Executing the trade before June 1 would have charged the full $43.45 million against the 2026 cap.',
        },
        {
          question: 'What does the A.J. Brown trade mean for Drake Maye?',
          answer: 'Drake Maye now has a premier WR1 entering his second NFL season. Brown is a physical, contested-catch receiver who wins on third downs and changes how defenses allocate coverage. Most analysts immediately move Maye into the low-end QB1/high-end QB2 fantasy tier.',
        },
        {
          question: 'Who replaces A.J. Brown on the Eagles?',
          answer: 'DeVonta Smith becomes the clear No. 1 option. Howie Roseman signed Marquise Hollywood Brown and Elijah Moore in free agency, acquired Dontayvion Wicks via trade, and drafted USC rookie Makai Lemon in the first round of the 2026 NFL Draft.',
        },
        {
          question: 'Did Mike Vrabel previously coach A.J. Brown?',
          answer: 'Yes. Mike Vrabel was head coach of the Tennessee Titans during Brown\'s initial breakout years with the franchise from 2019 to 2022, giving the new Patriots coach a pre-existing working relationship with his new WR1.',
        },
      ]}
    >
      <p>
        The NFL landscape shifted dramatically on Monday afternoon. After months of mounting offseason speculation, the <strong>Philadelphia Eagles have officially traded three-time Pro Bowl wide receiver A.J. Brown to the New England Patriots</strong>, pending a physical. The deal, executed intentionally after the June 1 salary cap deadline, is the most significant receiver trade of the 2026 offseason and immediately reshapes both franchises.
      </p>

      <SportCallout heading="Official Trade Terms" color="blue" icon="🔁">
        <p><strong>New England Patriots receive:</strong> WR A.J. Brown</p>
        <p><strong>Philadelphia Eagles receive:</strong> 2028 1st-Round Pick, 2027 5th-Round Pick</p>
        <p>The trade is pending a physical. Brown's contract status transfers to New England.</p>
      </SportCallout>

      <h2>The June 1 Timing | How the Eagles Managed $43.45 Million in Dead Money</h2>

      <p>
        The timing of this transaction was not accidental. By holding the deal until after the June 1 cap deadline, Eagles Executive Vice President and General Manager <strong>Howie Roseman</strong> executed a textbook salary cap maneuver that splits what would have been a catastrophic single-year charge across two seasons.
      </p>

      <PrismTable
        accent="blue"
        headers={['Year', 'Dead Cap Charge']}
        rows={[
          ['2026 (post-June 1 split)', '$16.3 million'],
          ['2027 (post-June 1 split)', '$27.1 million'],
          ['Total dead money', '$43.45 million'],
          ['Pre-June 1 single-year charge (avoided)', '$43.45 million in 2026 alone'],
        ]}
        caption="Eagles dead money distribution from the A.J. Brown trade, structured post-June 1 to split across two seasons."
      />

      <p>
        While this does not generate immediate usable cap space for Philadelphia in either 2026 or 2027, it eliminates the scenario where the full $43.45 million hit would have crippled the Eagles' roster-building flexibility for an entire season. The move is a management decision, not a windfall.
      </p>

      <p>
        With this trade, Roseman also makes Eagles the <strong>first team to acquire multiple 2028 first-round picks</strong>, a head-start on a draft class that projects to be exceptionally deep at skill positions.
      </p>

      <h2>Why the Eagles Moved On from Brown</h2>

      <p>
        The decision to trade Brown reflects a combination of financial reality, performance concerns, and roster construction. Brown's 2025 campaign in Philadelphia was defined by <strong>visible on-field frustration, a dip in target efficiency, and a career-low 12.9 yards per reception</strong>. Whatever chemistry existed between Brown and the Eagles offense had deteriorated.
      </p>

      <p>
        The longer-term calculation was straightforward. <strong>DeVonta Smith is locked into a long-term extension through 2028</strong>, ensuring the Eagles have their legitimate No. 1 receiver under contract. Roseman had already spent the offseason building a replacement corps in anticipation of this move. There was no reason to carry Brown's cap charge into 2026 when the offense could be restructured around younger, cheaper talent.
      </p>

      <h2>What A.J. Brown Brings to New England and Drake Maye</h2>

      <p>
        For the Patriots, this is the acquisition that defines the Drake Maye era. New England has lacked a genuine alpha receiver for years. Brown, who turns <strong>29 in June 2026</strong>, steps immediately into the WR1 role under offensive coordinator Josh McDaniels.
      </p>

      <SportStatRow>
        <SportStat metric="Career Rec Yds/G" value="82.4" subtext="WR1 tier" color="blue" />
        <SportStat metric="Career YPR" value="14.3" subtext="Alpha separator" color="blue" />
        <SportStat metric="Pro Bowl Selections" value="3" subtext="elite track record" color="indigo" />
        <SportStat metric="Contested Catch %" value="Top 5%" subtext="physical WR" color="green" />
      </SportStatRow>

      <p>
        The Maye connection is the headline. Coming off a breakout rookie season, <strong>Drake Maye now has a premier, physical weapon who dominates on third downs and wins contested catches</strong>. Brown's ability to align in multiple formations, create separation against press coverage, and serve as a release valve in broken plays gives Maye an answer to any defensive look the league can throw at a young quarterback.
      </p>

      <p>
        The reunion angle is also real. <strong>Patriots head coach Mike Vrabel originally coached Brown during his Titans breakout years</strong> from 2019 to 2022. Vrabel knows how to deploy him, knows his tendencies as a route runner, and already has an established trust dynamic. That matters more than people assign to it when evaluating how quickly a receiver adjusts to a new scheme.
      </p>

      <SportCallout heading="Patriots WR Depth Chart, June 2026" color="indigo" icon="📋">
        <p><strong>1. A.J. Brown</strong> | X-Receiver / Alpha WR1</p>
        <p><strong>2. Romeo Doubs</strong> | Z-Receiver / Outside Threat</p>
        <p><strong>3. Demario Douglas</strong> | Slot</p>
        <p><strong>4. Mack Hollins / Kayshon Boutte</strong> | Depth</p>
      </SportCallout>

      <h2>How the Eagles Replace A.J. Brown</h2>

      <p>
        Roseman spent the offseason building toward this exact moment. The Eagles did not trade their top receiver without a plan. Philadelphia's 2026 passing attack will be rebuilt around a <strong>speed-and-spacing model</strong> that is structurally different from the Brown era, which emphasized physicality and contested-catch dominance.
      </p>

      <PrismTable
        accent="blue"
        headers={['Player', 'Role and Notes']}
        rows={[
          ['DeVonta Smith', 'Elevated to WR1. Locked in through 2028. Route-running precision.'],
          ['Marquise "Hollywood" Brown', 'Free agent signing. Elite vertical speed, spacing threat.'],
          ['Elijah Moore', 'Free agent signing. Slot/outside flex, YAC ability.'],
          ['Dontayvion Wicks', 'Acquired via trade. Route-running depth for new OC Sean Mannion.'],
          ['Makai Lemon', '2026 first-round pick, USC. Traded up to draft. Explosive separator.'],
        ]}
        caption="Eagles wide receiver room post-A.J. Brown trade, June 2026."
      />

      <p>
        The collective speed of this group is a philosophical shift. Where Brown gave Jalen Hurts a body-catcher who could win in traffic, this new corps gives Hurts defenders who must respect every route to the boundary. Whether new offensive coordinator Sean Mannion can convert that speed into consistent production is the central question of Philadelphia's 2026 season.
      </p>

      <h2>Fantasy Football Takeaways | Who Goes Up, Who Goes Down</h2>

      <SportCallout heading="Fantasy Impact Summary" color="green" icon="🏆">
        <p>
          <strong>Drake Maye | ⬆️ Up.</strong> Maye safely enters the low-end QB1/high-end QB2 conversation. Brown changes coverage assignments, opens zones underneath, and gives Maye a back-shoulder target he can trust on the biggest third-down moments.
        </p>
        <p>
          <strong>A.J. Brown | ➡️ Stable, slight down adjustment.</strong> Expect a massive target share in New England. Efficiency may dip slightly as Brown gels with a younger quarterback mid-season, but volume alone keeps him in the WR1 tier.
        </p>
        <p>
          <strong>DeVonta Smith | ⬆️ Up significantly.</strong> Smith enters the high-end WR1 tier as Philadelphia's clear-cut alpha. No competition for targets at the top of the route tree.
        </p>
        <p>
          <strong>Makai Lemon / Hollywood Brown | ⬆️ Emerging value.</strong> Both sit in the WR3/flex range for now, with upside as Mannion's system develops during camp.
        </p>
      </SportCallout>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.nfl.com/news/eagles-trade-aj-brown-patriots',
            title: 'Eagles Trade A.J. Brown to Patriots | NFL.com',
            description: 'Official transaction report from NFL.com confirming the trade terms and timeline.',
          },
          {
            number: 2,
            url: 'https://overthecap.com/player/aj-brown',
            title: 'A.J. Brown Salary Cap Details | Over The Cap',
            description: 'Full contract structure, dead money breakdown, and cap charge timeline for the A.J. Brown trade.',
          },
          {
            number: 3,
            url: 'https://www.espn.com/nfl/story/patriots-eagles-aj-brown-trade',
            title: 'Patriots-Eagles A.J. Brown Trade Report | ESPN',
            description: 'Adam Schefter and team reporting on the trade package and draft pick compensation.',
          },
        ]}
        internalLinks={[
          { href: '/sports', label: 'ObjectWire Sports Hub' },
          { href: '/authors/carson-scott', label: 'Carson Scott, NFL Reporter' },
        ]}
      />
    </SportArticle>
  );
}
