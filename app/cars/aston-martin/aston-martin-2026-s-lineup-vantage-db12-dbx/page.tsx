import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle, EmbedBox } from '@/components/articles/NewsArticle';
import { PrismTable } from '@/components/articles/PrismTable';
import { SourcesInterlink } from '@/components/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/cars/aston-martin/aston-martin-2026-s-lineup-vantage-db12-dbx';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Aston Martin 2026 S Lineup | Vantage S, DB12 S, DBX S Specs and Price',
  description:
    'Aston Martin launches the 2026 S lineup across three models. The Vantage S makes 671 hp, DB12 S hits 690 hp, and the DBX S reaches 717 hp with a carbon fiber roof. Specs, prices, and full performance breakdown.',
  keywords: [
    'Aston Martin 2026 S lineup',
    'Aston Martin Vantage S 2026',
    'Aston Martin DB12 S 2026',
    'Aston Martin DBX S 2026',
    'Aston Martin Vantage S specs',
    'Aston Martin DB12 S price',
    'Aston Martin DBX S horsepower',
    'Aston Martin S designation 2026',
    'DBX S 717 hp',
    'Vantage S 671 hp',
    'DB12 S 690 hp',
    'Aston Martin 2026 models',
    'Aston Martin carbon fiber roof SUV',
    'Aston Martin S trim differences',
    'best performance SUV 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Aston Martin 2026 S Lineup | Vantage S 671hp, DB12 S 690hp, DBX S 717hp',
    description:
      'Aston Martin brings back the S designation as a permanent performance trim. All three 2026 models get sharper aero, solid-mounted subframes, and significant power bumps. Full specs and prices inside.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-06-04T16:00:00Z',
    modifiedTime: '2026-06-04T16:00:00Z',
    section: 'Cars',
    tags: ['Aston Martin', 'Vantage S', 'DB12 S', 'DBX S', 'Supercars'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aston Martin 2026 S Lineup | 671hp, 690hp, 717hp Across Three Models',
    description:
      'Aston Martin brings back the S badge across Vantage, DB12, and DBX. DBX S becomes the most powerful non-hybrid ICE SUV on sale. Full specs.',
  },
};

export default function AstonMartin2026SLineupPage() {
  return (
    <NewsArticle
      title="Aston Martin 2026 S Lineup | Vantage S, DB12 S, and DBX S | Full Specs, Prices, and What Changes"
      subtitle="Aston Martin has revived the S designation as a permanent high-performance trim level across its entire core range, producing three models with sharper aero, motorsport-derived chassis tuning, and power figures that push each car decisively beyond its standard sibling."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="2026-06-04T16:00:00Z"
      readTime="8 min read"
      author={{ name: 'Conan D. Boyle', role: 'Cars Reporter', authorSlug: 'conan-boyle' }}
      slug="aston-martin-2026-s-lineup-vantage-db12-dbx"
      url={SLUG}
      tags={['Aston Martin', 'Vantage S', 'DB12 S', 'DBX S', 'Supercars', 'Performance Cars']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Aston Martin', item: '/cars/aston-martin' },
        { name: '2026 S Lineup', item: SLUG },
      ]}
      keyTakeaways={[
        'Aston Martin has launched the 2026 S lineup as a permanent performance trim across three core models, bringing back the historic S designation last used on the V8 Vantage S in 2017.',
        'The Vantage S produces 671 horsepower (680 PS) from a 4.0L twin-turbo V8, gains a solid-mounted rear subframe, Michelin Pilot Sport S 5 tires, and a fast-ratio steering rack for sharper cornering. Base price is approximately $196,000.',
        'The DB12 S pushes to 690 horsepower, adds a bespoke dual-aspect carbon fiber front splitter and fixed rear spoiler blade for increased high-speed downforce, priced from approximately $265,000.',
        'The DBX S is the flagship of the range at 717 horsepower and 664 lb-ft of torque, making it the most powerful non-hybrid internal combustion SUV in production. It replaces its panoramic glass roof with a 40.9-square-foot carbon fiber roof that sheds 40 pounds from the highest point of the vehicle.',
        'All three S models share a consistent upgrade philosophy: fast-ratio steering, active-valve stainless steel exhaust, solid-mounted rear subframes, and model-specific aerodynamic packages with darkened gloss-black trim.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What is the Aston Martin 2026 S lineup?',
          answer: "The 2026 Aston Martin S lineup is a unified high-performance trim level applied across three core models: the Vantage S (671 hp), the DB12 S (690 hp), and the DBX S (717 hp). Each S model adds motorsport-derived chassis tuning, aerodynamic upgrades, and a more aggressive exhaust note compared to the standard version.",
        },
        {
          question: 'How much horsepower does the Aston Martin Vantage S make?',
          answer: 'The 2026 Aston Martin Vantage S produces 671 horsepower (680 PS) from a 4.0-liter twin-turbocharged V8 engine. It does 0-60 mph in 3.4 seconds and reaches a top speed of 202 mph.',
        },
        {
          question: 'How much does the Aston Martin DBX S cost?',
          answer: 'The 2026 Aston Martin DBX S starts at approximately $315,000. It produces 717 horsepower and 664 lb-ft of torque, making it the most powerful non-hybrid internal combustion engine SUV in production.',
        },
        {
          question: 'What is different about the Aston Martin DB12 S?',
          answer: 'The DB12 S upgrades the standard DB12 with 690 horsepower (up from 671 hp), a bespoke dual-aspect front splitter, a fixed carbon fiber rear spoiler blade for added downforce, quad exhaust tips, and gloss-black exterior trim. Base price is approximately $265,000.',
        },
        {
          question: 'Why does the DBX S have a carbon fiber roof?',
          answer: 'The DBX S replaces the standard panoramic glass roof with a 40.9-square-foot carbon fiber roof to lower the vehicle\'s center of gravity and reduce unsprung mass at the highest point of the car. The carbon roof sheds approximately 40 pounds compared to the glass alternative, meaningfully improving the SUV\'s handling dynamics.',
        },
        {
          question: 'What does the S badge mean on Aston Martin?',
          answer: "The S designation on Aston Martin models historically indicated the highest-performance variant of a given model. It was last applied to the V8 Vantage S. For 2026, Aston Martin has revived it as a permanent trim level across all core models, applied consistently to indicate: raised power output, solid-mounted subframe, active exhaust, and aerodynamic aero package.",
        },
      ]}
      moreFromHub={[
        { slug: 'ferrari-f80-hypercar-price-specs-2026', title: 'Ferrari F80 | 1,184hp Hypercar Specs and Price', url: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026', category: 'Cars' },
        { slug: 'bugatti-tourbillon-v16-hybrid-reveal-2026', title: 'Bugatti Tourbillon | 1,800 HP V16 Hybrid', url: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026', category: 'Cars' },
      ]}
      moreFromHubLabel="Supercars"
      moreFromHubHref="/cars"
    >
      <p>
        The <strong>2026 Aston Martin S lineup</strong> is the brand's most coherent performance statement in a decade. Rather than launching individual facelifts or new platform variants, Aston Martin has revived the historic S designation as a surgical, factory-applied sharpening across three models simultaneously — the <strong>Vantage S</strong>, the <strong>DB12 S</strong>, and the <strong>DBX S</strong>. The result is a unified range where every S model shares a consistent upgrade logic: more power, firmer chassis tuning, louder exhaust, and model-specific aerodynamic work.
      </p>

      <p>
        The S badge has deep meaning at Aston Martin. It was last applied to the V8 Vantage S, a car celebrated by drivers for its tactile feedback and mechanical rawness. Bringing it back across three very different vehicles, from a two-seat sports car to a luxury grand tourer to a full-size SUV, signals that Aston Martin intends the S to be a permanent pillar of its lineup rather than a limited run.
      </p>

      {/* Official launch video */}
      <div className="my-8 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/HNV2PZbOKeE"
            title="Aston Martin 2026 S Lineup | Official Launch Film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-gray-600 font-medium">
            Aston Martin | 2026 S Lineup Official Launch Film. All three models — Vantage S, DB12 S, DBX S.
          </p>
        </div>
      </div>

      <h2>What the S Designation Always Changes | The Core Philosophy</h2>

      <p>
        Across the entire 2026 S range, every model receives a consistent set of modifications regardless of whether it is a sports car or a three-row-adjacent SUV. The package is not just cosmetic — every structural, dynamic, and acoustic change is factory-engineered:
      </p>

      <ul className="list-disc pl-6 space-y-2 my-4">
        <li><strong>Fast-ratio steering racks</strong> that reduce the lock-to-lock turns needed for a given corner, delivering a more communicative, direct feel through the wheel.</li>
        <li><strong>Solid-mounted rear subframes</strong> that eliminate the rubber isolation bushings of standard models, creating a direct mechanical connection between the drivetrain and chassis for zero structural deflection under hard cornering loads.</li>
        <li><strong>Recalibrated adaptive dampers</strong> with stiffer spring rates and revised compression/rebound curves tuned for tighter body control and faster weight transfer response.</li>
        <li><strong>Active-valve stainless steel exhaust systems</strong> that open additional bypass valves at higher RPM and throttle loads, producing a louder, rawer exhaust note than the standard models.</li>
        <li><strong>Darkened gloss-black exterior trim</strong> replacing the standard chrome or satin finishes, with exposed carbon fiber accents on aerodynamic surfaces.</li>
      </ul>

      <h2>Aston Martin Vantage S 2026 | The Driver&apos;s Car</h2>

      <p>
        The <strong>Vantage S</strong> is the rawest expression of the S philosophy. The front-engine, rear-wheel-drive sports car formula remains intact, but the S package tightens every tolerance and removes every isolation layer between the driver and the road.
      </p>

      <p>
        The <strong>4.0-liter twin-turbocharged V8</strong> is pushed to <strong>671 horsepower (680 PS)</strong>, up from the standard Vantage's 503 hp. That is not a conservative bump — it is a 33% power increase that fundamentally changes the car's character. Aston Martin pairs the extra power with <strong>custom-compound Michelin Pilot Sport S 5 tires</strong>, a compound specified directly with Michelin for the S model's power and torque loads rather than shared with the standard car.
      </p>

      <p>
        The visual signature of the Vantage S is its <strong>centrally mounted hood blades</strong> and the <strong>full-width decklid spoiler</strong> — both functional aerodynamic elements, not styling additions. At 202 mph top speed, the spoiler generates measurable downforce that the standard Vantage's clean decklid does not.
      </p>

      <PrismTable
        accent="red"
        headers={['Spec', 'Vantage S 2026']}
        rows={[
          ['Engine', '4.0L Twin-Turbo V8'],
          ['Peak Power', '671 hp (680 PS)'],
          ['0-60 mph', '3.4 seconds'],
          ['Top Speed', '202 mph'],
          ['Drivetrain', 'Rear-wheel drive, 8-speed automatic'],
          ['Steering', 'Fast-ratio rack, direct-coupled'],
          ['Subframe', 'Solid-mounted rear subframe'],
          ['Tires', 'Michelin Pilot Sport S 5 (custom compound)'],
          ['Base Price (Est.)', 'From $196,000'],
        ]}
        caption="2026 Aston Martin Vantage S specifications. 0-60 and top speed figures are manufacturer-stated."
      />

      <h2>Aston Martin DB12 S 2026 | Super Tourer With a Sharper Edge</h2>

      <p>
        If the Vantage S is a driver's weapon, the <strong>DB12 S</strong> is what happens when Aston Martin decides a grand tourer does not have to choose between comfort and aggression. The DB12 was already the fastest grand tourer Aston Martin had ever built in standard form. The S takes it further by adding aero architecture that visually and functionally differentiates it from any previous DB-series car.
      </p>

      <p>
        Power rises to <strong>690 horsepower</strong>, placing the DB12 S ahead of the Vantage S in outright output despite being 200 pounds heavier. The aerodynamic work is the defining element: a <strong>bespoke dual-aspect front splitter</strong> that has two active positions (low drag for highway, high downforce for spirited driving) and a <strong>fixed carbon fiber rear spoiler blade</strong> that generates measurably more high-speed downforce than the standard DB12's integrated diffuser alone. Quad exhaust tips exit from the center of the rear fascia, a layout change from the standard car's side-exit configuration.
      </p>

      <PrismTable
        accent="orange"
        headers={['Spec', 'DB12 S 2026']}
        rows={[
          ['Engine', '4.0L Twin-Turbo V8'],
          ['Peak Power', '690 hp (700 PS)'],
          ['0-60 mph', '3.5 seconds'],
          ['Top Speed', '202 mph'],
          ['Drivetrain', 'Rear-wheel drive, 8-speed automatic'],
          ['Exhaust', 'Quad center-exit, active-valve stainless steel'],
          ['Aero', 'Dual-aspect front splitter, fixed carbon rear blade'],
          ['Exterior', 'Gloss-black sills, S scripting on front fenders'],
          ['Base Price (Est.)', 'From $265,000'],
        ]}
        caption="2026 Aston Martin DB12 S specifications."
      />

      <h2>Aston Martin DBX S 2026 | The Most Powerful Non-Hybrid ICE SUV on Sale</h2>

      <p>
        The <strong>DBX S</strong> is the boldest claim in the entire 2026 S launch. Aston Martin is not just offering a performance version of its SUV — they are positioning the DBX S as a category-defining vehicle by its power output alone. At <strong>717 horsepower (727 PS) and 664 lb-ft of torque</strong>, it surpasses the Lamborghini Urus Performante (666 hp), the Porsche Cayenne Turbo GT (660 hp), and every other non-hybrid internal combustion engine SUV currently in production.
      </p>

      <p>
        The engineering decision that most defines the DBX S is not the engine tune — it is the <strong>roof</strong>. Aston Martin has removed the standard panoramic glass roof entirely and replaced it with a <strong>40.9-square-foot carbon fiber roof</strong>. The glass roof weighs approximately 80 lbs; the carbon fiber replacement weighs roughly 40 lbs, shedding <strong>40 pounds from the highest point of the vehicle</strong>. In dynamic terms, that mass removal at roof height meaningfully reduces the SUV's polar moment of inertia, improving cornering response in a way that no spring rate or damper calibration can fully compensate for.
      </p>

      <p>
        The exterior is immediately identifiable: <strong>23-inch lightweight magnesium wheels</strong> derived from the Valhalla supercar program, and a <strong>honeycomb front grille composed of 25,000 individual machined facets</strong>. Neither is decorative — the magnesium wheels reduce unsprung rotational mass at each corner, and the faceted grille improves airflow to the intercoolers behind it. The DBX S was recently named <em>Top Gear Magazine's Super SUV of the Year</em>.
      </p>

      <PrismTable
        accent="blue"
        headers={['Spec', 'DBX S 2026']}
        rows={[
          ['Engine', '4.0L Twin-Turbo V8'],
          ['Peak Power', '717 hp (727 PS)'],
          ['Peak Torque', '664 lb-ft'],
          ['0-60 mph', '3.1 seconds'],
          ['Top Speed', '193 mph'],
          ['Roof', 'Carbon fiber (40.9 sq ft, saves 40 lbs vs glass)'],
          ['Wheels', '23-inch lightweight magnesium (Valhalla-derived)'],
          ['Grille', '25,000-facet precision-machined honeycomb'],
          ['Award', "Top Gear Super SUV of the Year 2026"],
          ['Base Price (Est.)', 'From $315,000'],
        ]}
        caption="2026 Aston Martin DBX S specifications. The DBX S is the most powerful non-hybrid ICE SUV in production."
      />

      <h2>2026 S Lineup | Full Performance Comparison</h2>

      <PrismTable
        accent="red"
        headers={['Model', 'Power | 0-60 | Top Speed | Price']}
        rows={[
          [<><span className="block font-black">Vantage S</span><span className="block text-xs text-gray-500">Sports car</span></>, '671 hp | 3.4 sec | 202 mph | ~$196,000'],
          [<><span className="block font-black">DB12 S</span><span className="block text-xs text-gray-500">Grand tourer</span></>, '690 hp | 3.5 sec | 202 mph | ~$265,000'],
          [<><span className="block font-black">DBX S</span><span className="block text-xs text-gray-500">Performance SUV</span></>, '717 hp | 3.1 sec | 193 mph | ~$315,000'],
        ]}
        caption="2026 Aston Martin S lineup side-by-side comparison. All three share the 4.0L twin-turbo V8 architecture. Prices are estimated base figures in USD."
      />

      <h2>What the S Revival Means for Aston Martin&apos;s Product Strategy</h2>

      <p>
        The return of the S badge is not just a product decision — it is a brand positioning statement. Aston Martin has spent the last several years repositioning toward higher average transaction prices and clearer product differentiation. The S designation gives dealers a clear, upsell-able performance tier that commands $20,000–$40,000 premiums over the standard models while costing significantly less to engineer than a full platform revision.
      </p>

      <p>
        More importantly, the consistent S philosophy across all three body styles allows Aston Martin to tell a coherent story: every S model, regardless of whether it is a two-seat sports car or a family SUV, stands for the same things. That kind of cross-model brand consistency is something Ferrari has long executed with its XX and Pista programs, and Porsche with its GTS tier. Aston Martin is building toward that same clarity of signal.
      </p>

      <p>
        For more on the broader performance car market the DBX S enters, see the{' '}
        <Link href="/cars/ferrari/ferrari-f80-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">
          Ferrari F80 specs and pricing
        </Link>. For Bugatti&apos;s own 2026 flagship, see the{' '}
        <Link href="/cars/bugatti-tourbillon-v16-hybrid-reveal-2026" className="text-blue-600 hover:text-blue-800 underline">
          Bugatti Tourbillon V16 hybrid reveal
        </Link>.
      </p>

      {/* First Look video */}
      <EmbedBox
        platform="youtube"
        handle="AstonMartin"
        description="Aston Martin Vantage S First Look | All New 2026 Model. Walkaround, exhaust sound, and first drive impressions."
        link="https://www.youtube.com/watch?v=x9Z0XxRYjfU"
      />

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.astonmartin.com/en/models/vantage-s',
            title: 'Aston Martin Vantage S | Official Model Page',
            description: 'Official Aston Martin spec sheet and configurator for the 2026 Vantage S.',
          },
          {
            number: 2,
            url: 'https://www.astonmartin.com/en-us/models/dbx-s',
            title: 'Aston Martin DBX S | Official Model Page',
            description: 'Official Aston Martin spec sheet and configurator for the 2026 DBX S.',
          },
          {
            number: 3,
            url: 'https://news.dupontregistry.com/blogs/reviews/review-2026-aston-martin-db12-s',
            title: 'Review: 2026 Aston Martin DB12 S | duPont Registry',
            description: 'Full first-drive review of the 2026 DB12 S from duPont Registry.',
          },
          {
            number: 4,
            url: 'https://www.astonmartinsandiego.com/2026-aston-martin-s-trim-differences-san-diego/',
            title: '2026 Aston Martin S Trim Differences | Aston Martin San Diego',
            description: 'Dealer breakdown of what changes between standard and S models across the 2026 lineup.',
          },
        ]}
        internalLinks={[
          { href: '/cars', label: 'Cars Hub' },
          { href: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026', label: 'Ferrari F80 | 1,184hp Hypercar' },
          { href: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026', label: 'Bugatti Tourbillon | 1,800hp V16' },
          { href: '/authors/conan-boyle', label: 'Conan D. Boyle, Cars Reporter' },
        ]}
      />
    </NewsArticle>
  );
}
