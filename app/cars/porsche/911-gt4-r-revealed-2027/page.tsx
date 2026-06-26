import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { PrismTable } from '@/components/articles/PrismTable';

// =============================================================================
// Porsche 911 GT4 R Revealed | 2027 Customer Racing
// Route: /cars/porsche/911-gt4-r-revealed-2027
// Author: Conan D. Boyle
// Published: June 25, 2026
// =============================================================================

export const revalidate = 86400;

const SLUG = '/cars/porsche/911-gt4-r-revealed-2027';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

// Satori-generated OG thumbnail via fshot.one
const OG_IMAGE =
  'https://fshot.one/api/og?title=Porsche+911+GT4+R+%7C+520hp+Race+Car+Revealed&category=Cars&desc=The+first+911-based+GT4+racer.+%24375%2C500.+520hp+flat-six.+Replaces+718+Cayman+for+2027.&image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1503376780353-7e6692767b70%3Fw%3D1200%26h%3D675%26fit%3Dcrop';

export const metadata: Metadata = {
  title: 'Porsche 911 GT4 R | 520hp Race Car Replaces 718 Cayman',
  description:
    'Porsche Motorsport unveiled the 2027 911 GT4 R on June 25, 2026, a 520hp naturally aspirated race car built on the 992.2 Cup platform to replace the discontinued 718 Cayman GT4 RS Clubsport. Price: $375,500.',
  keywords: [
    'Porsche 911 GT4 R race car',
    'Porsche 718 Cayman GT4 replacement',
    '911 GT4 R specs price',
    'SRO GT4 technical regulations 2027',
    'Porsche Motorsport customer racing',
    'automotive news June 2026',
    'Porsche 911 GT4 R 2027',
    'Porsche 992.2 GT4 R',
    'Porsche GT4 R $375500',
    'Porsche 718 Cayman discontinued',
    'Porsche 911 GT4 R Daytona 2027',
    'Porsche flat-six 4.0 liter race car',
    'IMSA Michelin Pilot Challenge 2027',
    'Porsche customer motorsport 2027',
    'Volker Holzmeyer Porsche Motorsport North America',
    'natural fiber composite racing car',
    'GT4 class regulations 2027',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Porsche 911 GT4 R | 520hp Race Car Replaces the 718 Cayman',
    description:
      'The 718 Cayman GT4 RS Clubsport is dead. The 2027 Porsche 911 GT4 R takes its place with a 4.0L naturally aspirated flat-six, 520hp at 8,750 RPM, and a $375,500 price tag. Debuts at Daytona in January 2027.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-06-25T14:00:00Z',
    modifiedTime: '2026-06-25T14:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Porsche 911 GT4 R 2027 race car reveal' }],
    tags: ['Porsche', '911 GT4 R', 'Customer Racing', 'Motorsport', 'GT4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Porsche just killed the 718 Cayman racer. Meet the 911 GT4 R.',
    description:
      '520hp. 8,750 RPM. $375,500. The first 911-based GT4 racer in history. Debuts at Daytona in January 2027.',
    images: [OG_IMAGE],
  },
};

export default function Porsche911GT4RRevealed2027Page() {
  return (
    <>
      <NewsArticleSchema
        title="Porsche 911 GT4 R | 520hp Race Car Replaces 718 Cayman"
        description="Porsche Motorsport unveiled the 2027 911 GT4 R on June 25, 2026, a 520hp naturally aspirated race car built on the 992.2 Cup platform to replace the discontinued 718 Cayman GT4 RS Clubsport. Price: $375,500."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-06-25T14:00:00Z"
        modifiedTime="2026-06-25T14:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="Cars"
        keywords={[
          'Porsche 911 GT4 R race car',
          'Porsche 718 Cayman GT4 replacement',
          '911 GT4 R specs price',
          'SRO GT4 technical regulations 2027',
          'Porsche Motorsport customer racing',
          'Porsche 911 GT4 R $375500',
          'IMSA Michelin Pilot Challenge 2027',
        ]}
      />

      <NewsArticle
        title="Porsche 911 GT4 R | 520hp Race Car Replaces the 718 Cayman for 2027"
        subtitle="Unveiled at the CrowdStrike 24 Hours of Spa on June 25, 2026, the 911 GT4 R is the first 911-platform GT4 racer in Porsche history, built on the 992.2 Cup chassis to succeed the discontinued mid-engine 718 Cayman GT4 RS Clubsport"
        category="Cars"
        categoryColor="red"
        topicTag="automotive"
        publishDate="June 25, 2026"
        readTime="7 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Cars Reporter, ObjectWire',
          authorSlug: 'conan-boyle',
        }}
        thumbnail={{
          src: OG_IMAGE,
          alt: 'Porsche 911 GT4 R 2027 race car unveiled at Spa',
        }}
        tags={['Porsche', '911 GT4 R', 'Customer Racing', 'GT4', 'Motorsport 2027']}
        slug="cars-porsche-911-gt4-r-revealed-2027"
        url={SLUG}
        exclusive={true}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Porsche', item: '/cars/porsche' },
          { name: 'Porsche 911 GT4 R Revealed', item: SLUG },
        ]}
        keyTakeaways={[
          'The Porsche 911 GT4 R is a 2027 track-only race car unveiled June 25, 2026, built on the 992.2 Porsche 911 GT3 Cup platform and priced at $375,500 in the United States.',
          'The 911 GT4 R replaces the discontinued 718 Cayman GT4 RS Clubsport, marking the first time Porsche has used the 911 platform for a GT4-class customer racing car.',
          'The car uses a naturally aspirated 4.0-liter flat-six producing 520hp at 8,750 RPM in raw trim, restricted to 430hp in competition by SRO Balance of Performance regulations.',
          'Exterior body panels including doors, engine cover, and aerodynamic splitters are made from natural-fiber-reinforced plastic composite, replacing traditional carbon fiber.',
          'Customer deliveries begin in Q3 2026, with the competitive world debut scheduled for the January 2027 IMSA Michelin Pilot Challenge season opener at Daytona International Speedway.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Porsche 911 GT4 R?',
            answer:
              'The Porsche 911 GT4 R is a 2027 track-only customer racing car unveiled on June 25, 2026, built on the 992.2 Porsche 911 GT3 Cup platform. It replaces the discontinued 718 Cayman GT4 RS Clubsport as Porsche\'s entry-level GT4 class racer and is the first 911-based GT4 car in company history.',
          },
          {
            question: 'How much does the Porsche 911 GT4 R cost?',
            answer:
              'The Porsche 911 GT4 R costs $375,500 in the United States, including import and delivery. This is a significant increase from the outgoing 718 Cayman GT4 RS Clubsport, which was priced at $229,000.',
          },
          {
            question: 'What engine does the Porsche 911 GT4 R use?',
            answer:
              'The 911 GT4 R uses a water-cooled, naturally aspirated 4.0-liter six-cylinder boxer engine producing 520hp at 8,750 RPM and 470Nm of torque in raw form. In competition, SRO Balance of Performance regulations restrict output to 430hp via 53.7mm air flow restrictors.',
          },
          {
            question: 'Why did Porsche replace the 718 Cayman GT4 RS Clubsport?',
            answer:
              'Porsche ended production of the internal combustion 718 Cayman to clear the platform for an all-electric successor. Without a combustion donor chassis, Porsche Motorsport moved the GT4 program to the 992.2 911 platform, simplifying its customer racing pyramid to a single unified architecture.',
          },
          {
            question: 'When does the Porsche 911 GT4 R race for the first time?',
            answer:
              'The Porsche 911 GT4 R makes its competitive world debut in January 2027 at the IMSA Michelin Pilot Challenge season opener at Daytona International Speedway.',
          },
        ]}
        moreFromHub={[
          {
            slug: 'cars-porsche-911-gt3-sc-sport-cabriolet-reveal-2026',
            title: 'Porsche 911 GT3 SC Sport Cabriolet | 502hp, Manual Only',
            url: '/cars/porsche/911-gt3-sc-sport-cabriolet-reveal-2026',
            category: 'Cars',
          },
          {
            slug: 'cars-porsche',
            title: 'Porsche News Hub | ObjectWire',
            url: '/cars/porsche',
            category: 'Cars',
          },
        ]}
        moreFromHubLabel="Porsche"
        moreFromHubHref="/cars/porsche"
      >
        {/* ── INTRO ───────────────────────────────────────────────────────── */}
        <p>
          The Porsche 911 GT4 R is a 2027 track-only race car unveiled on June 25, 2026, built on the
          992.2 Porsche 911 GT3 Cup platform, and it directly ends a decade-long era of mid-engine
          domination in Porsche&rsquo;s customer racing lineup. For ten years, the 718 Cayman platform
          supplied the chassis for Porsche&rsquo;s GT4-class program. That era is over. The 718 Cayman&rsquo;s
          internal combustion lifecycle has been wound down to make room for an all-electric successor,
          and Porsche Motorsport&rsquo;s response was not to engineer a compromised EV race car but to
          consolidate its entire customer racing architecture onto one proven rear-engine foundation.
        </p>
        <p>
          The reveal happened at Spa-Francorchamps, ahead of the CrowdStrike 24 Hours of Spa, giving
          the announcement the kind of endurance-racing backdrop that underlines the car&rsquo;s intent.
          This is not a track-day toy. It is a fully homologated SRO GT4 competitor designed to win
          races at the IMSA Michelin Pilot Challenge, the SRO Fanatec GT4 America series, and GT4
          grids globally. Deliveries begin in Q3 2026. The racing debut follows at Daytona in January 2027.
        </p>

        {/* ── SECTION 1 ───────────────────────────────────────────────────── */}
        <h2>Porsche 911 GT4 R | Why the 718 Cayman Was Retired</h2>
        <p>
          The structural reason for the platform shift is straightforward. Porsche&rsquo;s production
          division made the decision to end the internal combustion version of the 718 Cayman, freeing
          the platform for an all-electric road car lineup. Without a combustion-engined 718 Cayman
          coming off the production line, Porsche Motorsport had no viable donor chassis for a future
          718-based GT4 car. Building a racing version of an electric platform would have required an
          entirely new homologation program and placed Porsche outside SRO&rsquo;s current GT4 technical
          regulations, which do not yet accommodate EVs in the class.
        </p>
        <p>
          The solution Porsche Motorsport chose was to unify its customer racing program. The 992.2
          Porsche 911 GT3 Cup car already sits at the foundation of the company&rsquo;s one-make racing
          pyramid. By engineering the GT4 R on the same platform, Porsche creates a direct performance
          ladder: a customer team can run the 911 GT4 R in GT4-class sprint and endurance events, then
          step to the 911 GT3 Cup for one-make racing, then to the GT3 R for open-class GT3 competition,
          all on an architecture their engineers already know.
        </p>
        <p>
          &ldquo;The expansion of the 911 platform for use in GT4 allows for a highly simplified
          transition from Porsche one-make racing into open grid competition,&rdquo; said Volker
          Holzmeyer, President and CEO of{' '}
          <a
            href="https://newsroom.porsche.com/en/2026/motorsports/porsche-911-gt4-r-customer-motorsport-42700.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Porsche Motorsport North America
          </a>
          , at the Spa reveal. The logistics of running two fundamentally different chassis architectures
          at the same level of racing is a genuine operational burden for privateer teams. Eliminating
          that split was the business case.
        </p>

        {/* ── SECTION 2 ───────────────────────────────────────────────────── */}
        <h2>Porsche 911 GT4 R Engine | 4.0L Flat-Six, 520hp at 8,750 RPM</h2>
        <p>
          The powertrain is the headline. Sitting behind the rear axle is a water-cooled, naturally
          aspirated 4.0-liter six-cylinder boxer engine, a direct derivative of the unit found in the
          current 911 GT3 road car. It produces 382 kW, or 520hp, at 8,750 RPM in unrestricted trim,
          with a peak torque figure of 470Nm. It is paired with a six-speed sequential dog-type gearbox
          operated by steering-wheel paddle shifters and a four-disc racing clutch.
        </p>

        <PrismTable
          accent="red"
          headers={['Specification', 'Detail']}
          rows={[
            [<><span className="block font-black">Engine</span><span className="block text-xs text-gray-500">Architecture</span></>, 'Water-cooled, naturally aspirated 4.0-liter flat-six boxer, rear-mounted'],
            [<><span className="block font-black">Raw Output</span><span className="block text-xs text-gray-500">Unrestricted</span></>, '382 kW / 520hp @ 8,750 RPM'],
            [<><span className="block font-black">Peak Torque</span><span className="block text-xs text-gray-500">Unrestricted</span></>, '470 Nm (346 lb-ft)'],
            [<><span className="block font-black">Competitive Output</span><span className="block text-xs text-gray-500">SRO BoP restricted</span></>, '430hp via 53.7mm air flow restrictors, factory-mandated'],
            [<><span className="block font-black">Transmission</span><span className="block text-xs text-gray-500">Gearbox</span></>, '6-speed sequential dog-type with paddle shifters and 4-disc racing clutch'],
            [<><span className="block font-black">US Price</span><span className="block text-xs text-gray-500">Including import and delivery</span></>, '$375,500'],
            [<><span className="block font-black">Previous Price</span><span className="block text-xs text-gray-500">718 Cayman GT4 RS Clubsport</span></>, '$229,000'],
            [<><span className="block font-black">Deliveries</span><span className="block text-xs text-gray-500">Customer teams</span></>, 'Q3 2026'],
            [<><span className="block font-black">Racing Debut</span><span className="block text-xs text-gray-500">Competition first start</span></>, 'January 2027, IMSA Michelin Pilot Challenge, Daytona'],
          ]}
          caption="Porsche 911 GT4 R key specifications and pricing, revealed June 25, 2026"
        />

        <p>
          The 430hp competitive figure will be the one that matters in race conditions. SRO&rsquo;s
          Balance of Performance system means the 911 GT4 R enters each event at a regulated output
          level designed to produce close racing against competing GT4-class cars from Mercedes-AMG,
          McLaren, BMW, and others. The raw 520hp number reflects the engine&rsquo;s engineering ceiling,
          not what it will produce on a starting grid.
        </p>

        {/* ── SECTION 3 ───────────────────────────────────────────────────── */}
        <h2>Porsche 911 GT4 R Design | Natural Fiber Composites, 5-Lug Wheels, 10-Inch Telemetry Screen</h2>
        <p>
          Engineering a GT4 car from a GT3 Cup platform requires substantial downward adaptation.
          The GT4 class exists specifically to be more accessible than GT3, for both cost and driver
          skill. Porsche made three significant changes to ensure the 911 GT4 R fits the class without
          carrying the complexity and cost of its Cup sibling.
        </p>
        <p>
          <strong>Wheels:</strong> The 911 Cup uses center-lock wheels with pneumatic release systems
          that require purpose-built equipment during pit stops. The GT4 R replaces these with wheels
          one inch narrower running a conventional five-hole lug pattern standard to production road
          vehicles. This keeps tire and wheel costs in line with GT4 class expectations and allows
          teams to operate without Cup-spec pit equipment.
        </p>
        <p>
          <strong>Natural Fiber Composites:</strong> The exterior body panels, including the doors,
          engine cover, and aerodynamic splitters, are constructed entirely from natural-fiber-reinforced
          plastic blended with epoxy resin rather than conventional carbon fiber. Porsche states the
          material delivers equivalent structural rigidity at a significantly lower environmental
          footprint. This is the first time Porsche Motorsport has deployed natural fiber composites
          as the primary exterior material on a production customer racing car.
        </p>
        <p>
          <strong>Driver Dynamics:</strong> The suspension uses dual-adjustable dampers with three
          selectable spring rates, a significantly wider setup range than the more aggressive, fixed-geometry
          Cup car. The rear wing is an 11-position adjustable unit tuned for high-speed stability and
          predictable corner entry rather than maximum downforce. Inside the cockpit, the driver faces
          an integrated 10.3-inch color telemetry screen with an onboard data logger and high-precision
          GPS tracking system for post-session analysis.
        </p>

        {/* ── SECTION 4 ───────────────────────────────────────────────────── */}
        <h2>Porsche 911 GT4 R Price | $375,500 and Why It Costs More Than a Cup Car</h2>
        <p>
          The US market price of $375,500, including import and delivery, is the figure that will
          generate the most discussion in privateer racing circles. It sits at virtually the same
          level as the current 911 GT3 Cup car and represents a price increase of approximately
          $146,500 over the $229,000 718 Cayman GT4 RS Clubsport it replaces.
        </p>
        <p>
          Porsche&rsquo;s argument for the premium is platform quality. The 992.2 Cup architecture
          is one of the most developed and well-supported customer racing platforms in the world,
          with a global dealer and parts network, extensive setup data from thousands of racing
          hours, and factory technical support infrastructure that the 718 platform never matched
          at scale. Teams already running the Cup car can integrate the GT4 R into their operations
          without learning an entirely different suspension geometry, electronics package, or service
          interval system.
        </p>
        <p>
          For teams entering the GT4 class fresh, the price is a substantial barrier. The 911 GT4 R
          is priced at the high end of the GT4 market globally, above the McLaren 570S GT4 and BMW
          M4 GT4, and in line with the Mercedes-AMG GT4 at similar spec levels. Whether the platform
          advantage justifies the premium over competing manufacturers will be answered in the first
          full season of racing in 2027.
        </p>

        {/* ── SECTION 5 ───────────────────────────────────────────────────── */}
        <h2>Porsche 911 GT4 R Racing Debut | Daytona January 2027 and Global GT4 Calendar</h2>
        <p>
          Customer deliveries begin in Q3 2026, giving teams approximately two quarters of private
          testing before competitive running begins. The official debut is at the January 2027 IMSA
          Michelin Pilot Challenge season opener at Daytona International Speedway, one of the most
          prestigious venues in American sports car racing and the same event where the 718 Cayman
          platform established its reputation in the GTD4 class.
        </p>
        <p>
          Beyond IMSA, the 911 GT4 R is homologated for the full SRO Fanatec GT4 America calendar,
          the Porsche Sprint Challenge series in North America and Europe, and GT4-class events on
          the global SRO calendar including the GT4 European Series. The unified 911 platform
          architecture means a team that purchases the car for the IMSA calendar can also campaign
          it in SRO Europe without significant setup conversion work.
        </p>
        <p>
          Read ObjectWire&rsquo;s full coverage of the{' '}
          <Link href="/cars/porsche" className="text-blue-600 hover:text-blue-800 underline">
            Porsche racing and road car lineup
          </Link>{' '}
          and our earlier report on the{' '}
          <Link href="/cars/porsche/911-gt3-sc-sport-cabriolet-reveal-2026" className="text-blue-600 hover:text-blue-800 underline">
            911 GT3 SC Sport Cabriolet
          </Link>
          , the road-legal equivalent of the platform family the GT4 R now joins at the bottom of
          the customer racing pyramid. More{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            automotive news and supercar coverage
          </Link>{' '}
          is available on the ObjectWire Cars hub.
        </p>

        <hr />

        <p>
          <strong>Sources:</strong>{' '}
          <a
            href="https://newsroom.porsche.com/en/2026/motorsports/porsche-911-gt4-r-customer-motorsport-42700.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Porsche Newsroom: Porsche unveils the new 911 GT4 R for global customer motorsport
          </a>
          .{' '}
          <a
            href="https://www.caranddriver.com/news/a61349802/porsche-911-gt4-r-race-car-revealed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Car and Driver: Porsche 911 GT4 R Race Car Revealed
          </a>
          .{' '}
          <a
            href="https://sportscar365.com/imsa/impc/porsche-unveils-911-gt4-r-as-718-cayman-replacement/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Sportscar365: Porsche Unveils 911 GT4 R as 718 Cayman Replacement
          </a>
          .{' '}
          <a
            href="https://racer.com/2026/06/25/porsche-reveals-new-911-gt4-r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            RACER Magazine: Porsche reveals new 911 GT4 R for 2027 competition
          </a>
          .
        </p>
      </NewsArticle>
    </>
  );
}
