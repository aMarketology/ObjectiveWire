import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/cars/ferrari/ferrari-sf90-stradale-spider-specs-price';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Ferrari SF90 | 986HP Hybrid Specs, Price, 0-60',
  description:
    'Ferrari SF90 Stradale Spider: 986hp twin-turbo V8 hybrid, 0-60 in 2.0 seconds, 211mph top speed. SF90 XX hits 1,016hp. Full specs, price, and drive modes explained.',
  keywords: [
    'Ferrari SF90',
    'Ferrari SF90 Stradale',
    'Ferrari SF90 specs',
    'Ferrari SF90 price',
    'Ferrari SF90 horsepower',
    'Ferrari SF90 0-60',
    'Ferrari SF90 Spider',
    'Ferrari SF90 XX',
    'Ferrari SF90 XX Stradale',
    'Ferrari SF90 hybrid',
    'Ferrari SF90 top speed',
    'Ferrari SF90 2025',
    'Ferrari plug-in hybrid hypercar',
    'mid-engine Ferrari AWD',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ferrari SF90 | 986HP Hybrid, 0-60 in 2.0s, $593,950',
    description:
      'The Ferrari SF90 blends a 769hp twin-turbo V8 with three electric motors for 986 combined horsepower, all-wheel drive, and a 2.0-second 0-60 time. SF90 XX pushes to 1,016hp.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'oWire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-15T15:00:00Z',
    modifiedTime: '2026-05-15T15:00:00Z',
    section: 'Cars',
    tags: ['Ferrari', 'SF90', 'Hybrid Hypercar', 'Supercar', 'SF90 XX'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari SF90 | 986HP, 2.0s to 60mph, $593,950',
    description:
      'First mid-engine Ferrari with AWD. Twin-turbo V8 plus three electric motors. SF90 XX pushes to 1,016hp with Extra Boost.',
  },
};

export default function FerrariSF90Page() {
  return (
    <>
      <NewsArticleSchema
        title="Ferrari SF90 | 986HP Hybrid Specs, Price, 0-60"
        description="Ferrari SF90 Stradale Spider: 986hp twin-turbo V8 hybrid, 0-60 in 2.0 seconds, 211mph top speed. SF90 XX hits 1,016hp. Full specs, price, and drive modes explained."
        author="Conan D. Boyle"
        authorUrl="https://www.owire.org/authors/conan-boyle"
        publishedTime="2026-05-15T15:00:00Z"
        modifiedTime="2026-05-15T15:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Cars"
        keywords={[
          'Ferrari SF90',
          'Ferrari SF90 Stradale',
          'Ferrari SF90 specs',
          'Ferrari SF90 price',
          'Ferrari SF90 XX',
        ]}
      />

      <NewsArticle
        title="Ferrari SF90 Stradale Spider | 986HP Hybrid, Specs, Price, 0-60"
        subtitle="Ferrari's most accessible hypercar pairs a 769hp twin-turbo V8 with three electric motors for 986 combined horsepower, all-wheel drive, and a 2.0-second 0-60 time."
        category="Cars"
        categoryColor="red"
        topicTag="automotive"
        publishDate="2026-05-15T15:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Cars Correspondent',
          authorSlug: 'conan-boyle',
        }}
        tags={['Ferrari', 'SF90', 'Hybrid Hypercar', 'Supercar', 'SF90 XX', 'Plug-In Hybrid']}
        slug="cars-ferrari-sf90-stradale-spider-specs-price"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Ferrari', item: '/cars/ferrari' },
          { name: 'Ferrari SF90 Specs and Price', item: SLUG },
        ]}
        keyTakeaways={[
          'The Ferrari SF90 Stradale Spider is a 986hp plug-in hybrid hypercar starting at $593,950, combining a twin-turbo 4.0-liter V8 with three electric motors.',
          'Car and Driver tested the SF90 Stradale at 0-60 mph in 2.0 seconds, beating Ferrari\'s own official claim of 2.5 seconds and setting a record at the time of testing.',
          'The SF90 is the first mid-engine Ferrari to use all-wheel drive, with the two front electric motors providing electric drive to the front axle independently of the rear V8.',
          'The SF90 XX Stradale upgrades output to 1,016hp and adds an Extra Boost feature that temporarily increases power when exiting corners, priced at $890,000.',
          'A 6.5 kWh battery pack provides approximately 15 miles of pure EV range in the standard Stradale and 8 miles in the SF90 XX.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Ferrari SF90?',
            answer:
              'The Ferrari SF90 is a mid-engine plug-in hybrid hypercar that combines a 769hp twin-turbocharged 4.0-liter V8 with three electric motors for a combined output of 986 horsepower. It uses all-wheel drive, an 8-speed dual-clutch automatic, and a 6.5 kWh battery pack. The 2025 model year is available only as the open-top Spider, starting at $593,950.',
          },
          {
            question: 'How fast is the Ferrari SF90?',
            answer:
              'Ferrari claims 0-60 mph in 2.5 seconds, but Car and Driver independently tested the SF90 Stradale at 2.0 seconds flat. Top speed is 211 mph. The quarter mile takes approximately 9.9 seconds.',
          },
          {
            question: 'How much does the Ferrari SF90 cost?',
            answer:
              '$593,950 for the standard SF90 Spider. The SF90 XX Stradale starts at $890,000 and the SF90 XX Spider at $995,000.',
          },
          {
            question: 'What is the Ferrari SF90 XX?',
            answer:
              'The SF90 XX is a track-focused variant of the SF90 with 1,016hp (30hp more than the standard car), a stripped carbon fiber interior, one-piece bucket seats, an Extra Boost feature for additional power out of corners, and a 1.9-second 0-60 time. It is available in Stradale coupe and Spider body styles.',
          },
          {
            question: 'What drive modes does the Ferrari SF90 have?',
            answer:
              'The SF90 offers four drive modes: EV Only (electric-only, silent running up to 15 miles), Hybrid (blends V8 and electric motors for everyday driving), Performance (optimizes power delivery for spirited use), and Qualify (unlocks maximum output for track use).',
          },
        ]}
        moreFromHub={[
          {
            slug: 'cars-ferrari-ferrari-f80-hypercar-price-specs-2026',
            title: 'Ferrari F80 | 1,184HP Hypercar, $3.735M, 799 Units',
            url: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026',
            category: 'Cars',
          },
          {
            slug: 'cars-ferrari-ferrari-luce-electric-2026',
            title: 'Ferrari Luce | Electric Hypercar 2026',
            url: '/cars/ferrari/ferrari-luce-electric-2026',
            category: 'Cars',
          },
        ]}
        moreFromHubLabel="More Ferrari"
        moreFromHubHref="/cars/ferrari"
      >
        {/* ── Intro ── */}
        <p>
          The Ferrari SF90 Stradale Spider is a 986hp plug-in hybrid hypercar starting at $593,950,
          combining a twin-turbocharged 4.0-liter V8 with three electric motors and permanent all-wheel
          drive. It is the most technically sophisticated production Ferrari outside the limited{' '}
          <Link
            href="/cars/ferrari/ferrari-f80-hypercar-price-specs-2026"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            F80 hypercar flagship
          </Link>
          , and it represents Ferrari&apos;s clearest argument that hybrid electrification enhances rather
          than dilutes the experience of driving a proper supercar. For the 2025 model year, the standard
          SF90 is offered exclusively as the Spider convertible; the track-focused XX variant remains
          available in both Stradale coupe and Spider body styles.
        </p>

        {/* ── Section 1 ── */}
        <h2>SF90 Powertrain | 4.0L Twin-Turbo V8 and Three Electric Motors</h2>
        <p>
          The SF90&apos;s powertrain architecture is unusually sophisticated for a road car. The
          twin-turbocharged 4.0-liter V8 generates 769 horsepower and 590 lb-ft of torque on its own.
          Ferrari adds three electric motors: two at the front axle and one integrated into the rear
          transaxle. The two front motors contribute 217 combined horsepower to bring the total system
          output to 986hp. Power routes through an 8-speed dual-clutch automatic to all four wheels via a
          torque-vectoring all-wheel-drive system.
        </p>
        <p>
          Critically, the front electric motors operate completely independently of the rear combustion
          engine. This means the car can run in pure front-wheel electric drive at low speeds without
          engaging the V8 at all. The result is a hypercar that can navigate a parking garage in near
          silence before unleashing close to 1,000 horsepower the moment the road opens up.
        </p>

        {/* ── Section 2 ── */}
        <h2>Performance | 0-60 in 2.0 Seconds, 211mph Top Speed</h2>
        <p>
          Ferrari&apos;s official 0-60 mph claim is 2.5 seconds, a number that Car and Driver determined
          to be conservative after testing a production car. Their measured result was 2.0 seconds flat,
          a figure that made the SF90 Stradale the quickest production car they had tested to that point.
          Top speed is 211 mph. The quarter mile takes approximately 9.9 seconds. These numbers place the
          SF90 alongside the fastest hypercars in the world at substantially lower cost than limited-edition
          competitors.
        </p>
        <p>
          All four drive modes alter how the powertrain blends combustion and electric output. EV Only
          provides silent running for up to 15 miles. Hybrid mode manages the balance automatically for
          daily driving. Performance sharpens throttle response and holds gears longer. Qualify, the
          maximum attack setting, unlocks full system output and prioritizes outright lap time over
          comfort or efficiency.
        </p>

        {/* ── Section 3 ── */}
        <h2>SF90 XX | 1,016HP and Extra Boost from $890,000</h2>
        <p>
          The SF90 XX Stradale raises the stakes with 1,016 combined horsepower, drawn from a revised V8
          producing 786hp and remapped electric motors. The additional 30 horsepower over the standard car
          arrives with a feature Ferrari calls Extra Boost, which temporarily increases output above the
          rated ceiling when accelerating out of a corner. The effect is a sharper exit punch than a
          fixed-output powertrain can deliver.
        </p>
        <p>
          The XX interior removes carpets, replaces door panels and the centre console with carbon fibre,
          and swaps the standard chairs for one-piece bucket seats with aggressive lateral support. EV
          range drops to approximately 8 miles as a trade-off for the revised battery management targeting
          track use. The SF90 XX Stradale starts at $890,000; the XX Spider begins at $995,000. Both are
          part of the broader{' '}
          <Link href="/cars/ferrari" className="text-blue-600 hover:text-blue-800 underline">
            Ferrari lineup at oWire
          </Link>
          .
        </p>

        {/* ── Section 4 ── */}
        <h2>Interior, Tech, and Warranty</h2>
        <p>
          The standard SF90 Spider interior is luxurious by hypercar standards, finished in leather
          throughout with a fixed-hub steering wheel concept borrowed directly from the F80 program. The
          instrument cluster stays stationary as the wheel rotates around it, ensuring the driver always
          sees full readouts without obstruction. An LCD display handles infotainment alongside Apple
          CarPlay. Cargo space is a modest three cubic feet.
        </p>
        <p>
          Ferrari covers the SF90 with a three-year unlimited-mileage warranty on both limited and
          powertrain components, backed by seven years of complimentary scheduled maintenance, one of the
          most comprehensive factory maintenance programs in the supercar segment.
        </p>

        {/* ── SF90 in Ferrari Lineup ── */}
        <h2>SF90 in the Ferrari Hierarchy | Where It Sits</h2>
        <p>
          The SF90 occupies the tier directly below the F80 in Ferrari&apos;s current hierarchy. The F80
          runs a more powerful F1-derived MGU-K hybrid system producing 1,184hp and is limited to 799
          units at $3.735M. Above the 296 GTB (670hp V6 hybrid from $338,250) and below the F80, the SF90
          at $593,950 is the point at which Ferrari&apos;s hybrid technology achieves its most accessible
          expression without meaningful compromise in performance capability. For the full Ferrari current
          model overview, visit the{' '}
          <Link href="/cars/ferrari" className="text-blue-600 hover:text-blue-800 underline">
            Ferrari hub
          </Link>
          {'. '}
          Coverage of the{' '}
          <Link
            href="/cars/ferrari/ferrari-luce-electric-2026"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Ferrari Luce pure-electric hypercar
          </Link>
          {' '}is also available for context on where the brand is heading next.
        </p>
        <p>
          Full byline analysis from{' '}
          <Link href="/authors/conan-boyle" className="text-blue-600 hover:text-blue-800 underline">
            Conan D. Boyle
          </Link>
          {' '}on the SF90&apos;s place in the hybrid supercar market is available on the oWire authors page.
        </p>
      </NewsArticle>
    </>
  );
}
