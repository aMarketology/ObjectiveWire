import type { Metadata } from 'next';
import Link from 'next/link';
import {
  NewsArticle,
  HighlightBox,
  EmbedBox,
  Timeline,
} from '@/components/articles/NewsArticle';

export const dynamic = 'force-dynamic';

const SLUG = '/youtube/mat-armstrong/bugatti-crash-damage-rebuild';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Mat Armstrong Bugatti Rebuild | Crash-Damaged Chiron Back on Road',
  description:
    'Mat Armstrong documents the full rebuild of a crash-damaged Bugatti, sourced from salvage auction, and gets the hypercar back on the road. Inside the most ambitious project on YouTube.',
  keywords: [
    'Mat Armstrong Bugatti',
    'Mat Armstrong Bugatti rebuild',
    'Mat Armstrong Bugatti Chiron',
    'crash damaged Bugatti rebuild',
    'Mat Armstrong wrecked Bugatti',
    'Mat Armstrong 2025',
    'Mat Armstrong YouTube',
    'Bugatti salvage rebuild YouTube',
    'MatArmstrongbmx Bugatti',
    'wrecked hypercar rebuild',
    'Bugatti Chiron crash repair',
    'Mat Armstrong Leicester',
    'supercar rebuild YouTube UK',
    'salvage Bugatti restoration',
    'Mat Armstrong biggest build',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Mat Armstrong Bugatti Rebuild | Crash-Damaged Chiron Back on Road',
    description:
      'Mat Armstrong bought a crash-damaged Bugatti at salvage auction and spent months getting it back on the road. Full breakdown of the rebuild series.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire YouTube Desk'],
    publishedTime: '2026-05-04T12:00:00Z',
    modifiedTime: '2026-05-04T12:00:00Z',
    section: 'YouTube',
    tags: ['Mat Armstrong', 'Bugatti', 'Car Rebuild', 'YouTube', 'Supercar'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mat Armstrong Bugatti | Getting the Crash-Damaged Hypercar Back on the Road',
    description:
      'The UK automotive YouTuber takes on his most expensive rebuild yet, a crash-damaged Bugatti, and documents the entire process.',
  },
};

export default function MatArmstrongBugattiRebuildPage() {
  return (
    <NewsArticle
      title="Mat Armstrong Bugatti Rebuild | Crash-Damaged Chiron Back on Road"
      subtitle="The Leicester-born automotive creator takes on his most expensive salvage project, sourcing a heavily crash-damaged Bugatti and spending months getting it back on the road."
      category="YouTube"
      categoryColor="orange"
      topicTag="automotive"
      publishDate="May 4, 2026"
      readTime="9 min read"
      author={{
        name: 'ObjectWire YouTube Desk',
        role: 'YouTube Coverage',
      }}
      slug="youtube-mat-armstrong-bugatti-crash-damage-rebuild"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'YouTube', item: '/youtube' },
        { name: 'Mat Armstrong', item: '/youtube/mat-armstrong' },
        { name: 'Bugatti Rebuild', item: SLUG },
      ]}
      tags={['Mat Armstrong', 'Bugatti', 'Crash Rebuild', 'YouTube', 'Supercar', 'UK']}
      trending
    >
      {/* ── HERO VIDEO ───────────────────────────────────────────────────── */}
      <EmbedBox
        platform="youtube"
        handle="cetjOddL6pg"
        description="Mat Armstrong's crash-damaged Bugatti rebuild series, latest episode. Via @MatArmstrongbmx on YouTube."
      />

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <p>
        <strong>Mat Armstrong</strong> has rebuilt wrecked Ferraris, Porsches, and Rolls-Royces
        in front of millions. But his latest project is a different category entirely. The
        Leicester-based automotive creator, whose channel{' '}
        <a
          href="https://www.youtube.com/@MatArmstrongbmx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          @MatArmstrongbmx
        </a>{' '}
        has accumulated more than 6.2 million subscribers, has been methodically working through
        a crash-damaged Bugatti, and in his latest video the hypercar is finally back on the road.
      </p>

      <p>
        Bugattis are among the most technically complex production cars ever built. A Veyron carries
        a 8.0-litre W16 engine with four turbochargers. A Chiron pushes 1,500 hp through a
        seven-speed dual-clutch gearbox. Neither was designed with salvage-yard access in mind. For
        Armstrong, that complexity is exactly the point. His channel has always rewarded difficulty,
        and the harder the rebuild, the larger the audience.
      </p>

      {/* ── KEY FIGURES ──────────────────────────────────────────────────── */}
      <HighlightBox type="stat" color="orange">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
          {[
            { value: '$2M+', label: 'Estimated original Bugatti value' },
            { value: '6.2M+', label: 'Mat Armstrong subscribers' },
            { value: '870M+', label: 'Total channel views' },
            { value: '1,500 HP', label: 'Bugatti Chiron output' },
            { value: '16', label: 'Cylinders in the W16 engine' },
            { value: '0–60', label: '2.4 seconds, stock Chiron spec' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-black text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </HighlightBox>

      {/* ── SECTION 1 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        1. The Acquisition | How Armstrong Sourced a Crash-Damaged Bugatti
      </h2>

      <p>
        Like every Armstrong project, this one started at salvage auction. Crash-damaged hypercars
        move through a surprisingly active secondary market, driven largely by insurance write-offs
        on vehicles that are structurally repairable but prohibitively expensive for conventional
        bodyshops to touch. Armstrong has spent years building supplier relationships and auction
        access that give him a first look at incoming stock.
      </p>

      <p>
        A Bugatti written off by insurers represents a unique window. Factory repair costs for a
        Chiron are notoriously steep, with Bugatti's authorised service network charging rates that
        make economic write-off inevitable for anything beyond minor cosmetic damage. That dynamic
        is what creates the salvage opportunity, and it is precisely the gap Armstrong has built
        his channel inside of.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>Why Bugattis end up at salvage auction:</strong> Factory authorised repair costs
          for a Chiron routinely exceed the vehicle&apos;s insured value after a significant
          impact. Insurers write the car off, the vehicle enters the salvage pipeline, and buyers
          willing to do the work themselves can acquire a $2M+ hypercar at a fraction of retail
          cost, provided they have the tools, access, and mechanical knowledge to carry the project
          through.
        </p>
      </HighlightBox>

      {/* ── SECTION 2 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        2. Damage Assessment | What the Crash Actually Did to the Car
      </h2>

      <p>
        The first video in the series documented the initial inspection, the kind of methodical
        teardown Armstrong performs on every acquisition. For a Bugatti, that process is
        significantly more involved than a typical prestige car. The carbon fibre monocoque
        construction used in the Chiron means damage assessment requires specialist knowledge
        and equipment, since hairline cracks in carbon structures are not always visible to the
        naked eye and can compromise structural integrity without obvious external signs.
      </p>

      <p>
        The crash damage on Armstrong&apos;s example was concentrated in the front and side
        structures, with body panel damage, suspension geometry disruption, and electrical
        system faults consistent with a frontal impact event. The W16 engine, positioned
        longitudinally behind the cabin, remained intact, which was both reassuring and
        critical to the project&apos;s viability. An engine-out event on a Bugatti would have
        complicated the rebuild timeline dramatically.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>Carbon fibre complication:</strong> The Chiron&apos;s monocoque is built from
          carbon fibre and aluminium honeycomb. Unlike steel structures, carbon damage is often
          internal and requires CT scanning or ultrasonic testing to assess fully. Armstrong
          had to source specialist inspection before committing to the repair path.
        </p>
      </HighlightBox>

      {/* ── SECTION 3 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        3. The Rebuild Timeline | Months of Methodical Work
      </h2>

      <Timeline
        events={[
          {
            time: 'Episode 1',
            title: 'Acquisition and Initial Inspection',
            description:
              'Armstrong purchases the crash-damaged Bugatti at salvage auction. Full teardown and damage documentation begins. Engine confirmed intact.',
          },
          {
            time: 'Episode 2',
            title: 'Structural Assessment and Parts Sourcing',
            description:
              'Carbon fibre inspection completed. Suspension components, body panels, and electrical modules sourced from specialist suppliers. Geometry reset begins.',
          },
          {
            time: 'Episode 3',
            title: 'Drivetrain and Systems Work',
            description:
              'W16 engine checked and confirmed serviceable. Dual-clutch gearbox inspected. Cooling system flushed and refilled. ECU diagnostic scan reveals fault codes.',
          },
          {
            time: 'Episode 4',
            title: 'Body Panels and Exterior Restoration',
            description:
              'Replacement carbon fibre panels fitted. Paint preparation begins. The Bugatti&apos;s unique finish requires specialist paint chemistry and multi-stage application.',
          },
          {
            time: 'Latest Episode',
            title: 'Back on the Road',
            description:
              'All systems confirmed operational. The Bugatti passes road readiness checks and Armstrong takes it for its first post-rebuild drive, the milestone the series has been building toward.',
          },
        ]}
      />

      {/* ── SECTION 4 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        4. Technical Challenges | What Makes Rebuilding a Bugatti Different
      </h2>

      <p>
        Armstrong has rebuilt complex machinery before, but the Bugatti presents challenges
        that have no parallel in his previous projects. The 8.0-litre W16 engine is essentially
        two V8 engines mounted at a 90-degree angle on a common crankshaft, with four
        turbochargers operating in two pairs across low and high rpm ranges. The cooling system
        for this configuration is enormous, running 10 radiators across the front, sides, and
        rear of the car.
      </p>

      <p>
        Bugatti&apos;s proprietary engine management software, the same system that governs the
        top speed limiter, gear change mapping, and all-wheel-drive torque split, is a closed
        ecosystem. Unlike Porsche or Ferrari, where aftermarket diagnostic tools have reasonable
        penetration, Bugatti systems require factory software or specialist third-party tools
        that are expensive, rare, and not always compatible with salvage-title vehicles that may
        have incomplete service histories.
      </p>

      <HighlightBox type="key-point" color="orange">
        <p>
          <strong>The 10-radiator cooling challenge:</strong> The Chiron uses 10 radiators to
          manage the thermal output of its 1,500 hp W16 engine. A single failed radiator in
          the system can cause cascading cooling faults. Armstrong had to verify the integrity
          of all 10 during the rebuild, a process that involves pressure testing each circuit
          individually.
        </p>
      </HighlightBox>

      <p>
        Parts availability is a separate constraint. Bugatti produces limited numbers of each
        model year, which means crash replacement panels are not stocked at general suppliers.
        The carbon fibre components used in the Chiron are manufactured to order, with lead
        times that can extend to months for authorised customers and are essentially impossible
        to source through conventional aftermarket channels. Armstrong has demonstrated the
        supplier network he has built across his career to navigate this, with components arriving
        from specialist brokers and European dismantlers.
      </p>

      {/* ── SECTION 5 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        5. The Economics | What This Project Actually Costs
      </h2>

      <p>
        Armstrong has been transparent about the cost dynamics of his rebuild projects across
        multiple videos and interviews. The formula is consistent: salvage acquisition price
        plus parts and labour must fall below the market value of the completed vehicle for
        the project to make financial sense. For a Bugatti, the numbers operate at a different
        magnitude than his previous builds.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-orange-50 border-b-2 border-orange-200">
              <th className="text-left p-3 font-bold text-gray-900">Item</th>
              <th className="text-left p-3 font-bold text-gray-900">Estimated Cost Range</th>
              <th className="text-left p-3 font-bold text-gray-900">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Salvage acquisition', '$150,000 – $400,000', 'Depends on damage severity, auction competition'],
              ['Carbon fibre body panels', '$50,000 – $150,000', 'Chiron panels manufactured to order, limited supply'],
              ['Suspension and geometry', '$15,000 – $40,000', 'Chiron-spec components, specialist alignment required'],
              ['Electrical and ECU work', '$10,000 – $30,000', 'Proprietary software diagnostic fees, module replacement'],
              ['Cooling system service', '$5,000 – $20,000', '10 radiators, specialist pressure testing and flush'],
              ['Paint and finishing', '$20,000 – $60,000', 'Bugatti&apos;s EB finish is multi-stage, factory-grade quality expected'],
              ['Total estimated cost', '$250,000 – $700,000', 'Against a completed car value of $1.5M – $2M+'],
            ].map(([item, cost, note]) => (
              <tr key={item} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-3 font-medium text-gray-900">{item}</td>
                <td className="p-3 text-gray-700">{cost}</td>
                <td className="p-3 text-gray-500">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        The margin is real, but so is the risk. A single unforeseen structural fault or an
        engine management problem that cannot be resolved without factory tooling can collapse
        the economics entirely. Armstrong has encountered exactly these scenarios on previous
        projects, most publicly with the{' '}
        <Link
          href="/youtube/mat-armstrong/attempting-to-start-my-wrecked-ferrari-296"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Ferrari 296 GTB rebuild
        </Link>{' '}
        that became a platform story when Ferrari itself intervened. The Bugatti, being even
        further outside the conventional repair ecosystem, carried the same risks at higher
        stakes.
      </p>

      {/* ── SECTION 6 ────────────────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        6. What This Means for the Channel | Armstrong&apos;s Biggest Build Yet
      </h2>

      <p>
        Armstrong&apos;s channel has grown consistently by escalating the stakes of each
        project. From German prestige cars to Italian exotics to British ultra-luxury, the
        format requires each new build to raise the bar. A Bugatti is the logical endpoint of
        that escalation for a creator at his level, there are very few production cars above
        it in terms of cost, complexity, and brand prestige.
      </p>

      <p>
        The completed Bugatti also demonstrates something more significant for the automotive
        YouTube category: that the self-taught mechanic format, pioneered in part by Armstrong,
        is now operating at a level of sophistication that rivals or exceeds conventional
        specialist workshops. The tools, supplier networks, and diagnostic knowledge
        Armstrong has assembled across more than a decade of public building are now capable
        of handling work that most authorised service centres would decline.
      </p>

      <HighlightBox type="quote" color="orange">
        <p>
          &ldquo;My dad was a mechanic. I grew up around cars. When BMX was done, I just went
          back to what I knew.&rdquo;
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Mat Armstrong, on the origins of his automotive channel
        </p>
      </HighlightBox>

      <p>
        The Bugatti project will almost certainly become Armstrong&apos;s most-viewed series
        to date. His previous high-performing multi-episode builds, including the Porsche 911
        GT3 rebuild that drew over 21 million views on a single video, succeeded because they
        combined mechanical depth with high-stakes drama. The Bugatti has more of both than
        anything he has tackled previously.
      </p>

      {/* ── SECTION 7 | CONTEXT ──────────────────────────────────────────── */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
        7. Mat Armstrong | Channel Context and Track Record
      </h2>

      <p>
        For readers new to the channel, Armstrong&apos;s rebuild format has a consistent
        structure that distinguishes it from other automotive content. He purchases
        genuinely wrecked vehicles, not staged or cosmetically damaged examples, and works
        through the rebuild process transparently on camera, including the failures. The
        result is a body of work that functions simultaneously as entertainment and as a
        practical record of how high-end automotive repair actually operates.
      </p>

      <p>
        His previous builds include a fully documented Rolls-Royce Phantom restoration, a
        Lamborghini Huracan repair, and the polarising Ferrari 296 GTB project that generated
        significant press coverage in early 2026. Across all of these, the channel has
        maintained a view-per-video average of approximately 1.3 million, with peak
        performances well above that on builds with high-profile vehicles or unusual narratives.
      </p>

      <p>
        The Bugatti, by any measure, qualifies on both counts.
      </p>

      <p className="mt-6">
        For the full Mat Armstrong profile, including channel statistics, rebuild history,
        and background on his transition from professional BMX to automotive content, see the{' '}
        <Link
          href="/youtube/mat-armstrong"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          ObjectWire Mat Armstrong creator profile
        </Link>
        . For more automotive content on ObjectWire, visit the{' '}
        <Link
          href="/cars"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Cars hub
        </Link>
        .
      </p>
    </NewsArticle>
  );
}
