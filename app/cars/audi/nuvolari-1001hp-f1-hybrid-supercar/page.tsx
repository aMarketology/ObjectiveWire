import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/cars-audi-nuvolari-1001hp-f1-hybrid-supercar.jpg';

export const revalidate = 86400;

const SLUG = '/cars/audi/nuvolari-1001hp-f1-hybrid-supercar';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Audi Nuvolari | 1,001-HP F1 Hybrid Supercar, 499 Units',
  description:
    'Audi has unveiled the Nuvolari, a limited-run supercar named after Auto Union racing legend Tazio Nuvolari, packing a Formula 1-derived 1,001-horsepower hybrid powertrain.',
  keywords: [
    'Audi Nuvolari supercar F1 hybrid',
    'Audi Nuvolari 1001 hp specs',
    'limited production 499 units Audi supercar',
    'Audi Formula 1 hybrid technology transfer',
    'Nuvolari top speed 217 mph',
    'Audi Nuvolari price',
    'Audi e-quattro hybrid supercar',
    'Audi R8 successor 2026',
    'Audi hybrid hypercar',
    'Tazio Nuvolari tribute car',
    'Ingolstadt supercar 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Four Rings, 1,001 HP | Audi Unveils the Ultra-Exclusive Nuvolari Supercar',
    description:
      'Marking a triumphant return to elite performance engineering, the limited-edition Audi Nuvolari packs a Formula 1-derived 1,001-horsepower hybrid powertrain.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-09-23T20:00:00Z',
    modifiedTime: '2026-09-23T20:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Audi Nuvolari 1001 hp F1 hybrid supercar' }],
    tags: ['Audi', 'Nuvolari', 'Supercar', 'Hybrid Hypercar', 'Automotive'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formula 1 for the Road | Audi Nuvolari 217-MPH Hybrid Masterpiece',
    description: '1,001 HP. F1-derived hybrid power. Just 499 units. The Audi Nuvolari is here.',
    images: [OG_IMAGE],
  },
};

export default function AudiNuvolariPage() {
  return (
    <>
      <NewsArticleSchema
        title="Audi Nuvolari | 1,001-HP F1 Hybrid Supercar, 499 Units"
        description="Audi has unveiled the Nuvolari, a limited-run supercar named after Auto Union racing legend Tazio Nuvolari, packing a Formula 1-derived 1,001-horsepower hybrid powertrain."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-09-23T20:00:00Z"
        modifiedTime="2026-09-23T20:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Cars"
        keywords={[
          'Audi Nuvolari supercar F1 hybrid',
          'Audi Nuvolari 1001 hp specs',
          'limited production 499 units Audi supercar',
        ]}
      />

      <NewsArticle
        title="The Four-Ringed Titan Returns | Audi Debuts the 1,001-HP Nuvolari Supercar"
        subtitle="Since the retirement of the iconic R8, enthusiasts have wondered how Ingolstadt would redefine its presence at the pinnacle of high-performance motoring. The Audi Nuvolari answers with a Formula 1-derived 1,001-horsepower hybrid powertrain, limited to 499 units."
        category="Cars"
        categoryColor="red"
        topicTag="automotive"
        publishDate="September 23, 2026"
        readTime="6 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Head of Automotive',
          avatar: '/influncer/author/conan_boyle.JPG',
          authorSlug: 'conan-boyle',
        }}
        slug={SLUG}
        url={SLUG}
        thumbnail={{ src: OG_IMAGE, alt: 'Audi Nuvolari 1001 hp F1 hybrid supercar' }}
        tags={['Audi', 'Nuvolari', 'Supercar', 'Hybrid Hypercar', 'Automotive', '2026']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Audi Nuvolari', item: SLUG },
        ]}
        keyTakeaways={[
          'The Audi Nuvolari is a limited-run supercar named after legendary Auto Union racing pioneer Tazio Nuvolari, marking Audi\'s return to the elite supercar segment after the retirement of the R8.',
          'It packs a Formula 1-inspired hybrid powertrain producing 1,001 horsepower (1,014 PS), pairing a mid-mounted twin-turbocharged engine with dual electric motor-generator units.',
          'A next-generation e-quattro all-wheel-drive system powers the front axle with high-rpm electric motors for millisecond torque vectoring, while the mid-mounted engine and rear motor deliver straight-line acceleration beyond 217 mph.',
          'The Nuvolari uses an ultra-lightweight carbon-fiber and aluminum spaceframe with active aerodynamics and carbon-silicon carbide brakes to manage the demands of the hybrid system.',
          'Production is strictly limited to 499 units worldwide, making the Nuvolari a halo vehicle and collector\'s item from the moment it leaves the factory.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Audi Nuvolari?',
            answer:
              'The Audi Nuvolari is a limited-run supercar named after Auto Union racing legend Tazio Nuvolari. It marks Audi\'s return to the elite supercar segment with a Formula 1-derived hybrid powertrain.',
          },
          {
            question: 'How much horsepower does the Audi Nuvolari have?',
            answer:
              'The Nuvolari produces 1,001 horsepower (1,014 PS) from a hybrid system pairing a mid-mounted twin-turbocharged engine with dual electric motor-generator units.',
          },
          {
            question: 'How many Audi Nuvolari units will be built?',
            answer:
              'Production is strictly limited to 499 units worldwide, making the Nuvolari a collector\'s item from the day it leaves the factory.',
          },
          {
            question: 'What is the top speed of the Audi Nuvolari?',
            answer:
              'The Nuvolari has a top speed exceeding 217 mph (350 km/h), with a 0-60 mph acceleration time under 2.5 seconds.',
          },
          {
            question: 'Is the Audi Nuvolari a successor to the R8?',
            answer:
              'The Nuvolari serves as a spiritual successor to the R8, but it is far more extreme and exclusive, limited to 499 units versus the R8\'s mass production.',
          },
        ]}
        moreFromHub={[
          { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
          { slug: 'aston-martin-valhalla-1000hp-mid-engine-hybrid-2027', title: 'Aston Martin Valhalla | 1,000-HP Mid-Engine Hybrid', url: '/cars/aston-martin-valhalla-1000hp-mid-engine-hybrid-2027', publishDate: '2026', category: 'Cars' },
          { slug: 'koenigsegg-ccgt1-1600hp-track-homage-hypercar', title: 'Koenigsegg CCGT1 | 1,600-HP Track Homage', url: '/cars/koenigsegg-ccgt1-1600hp-track-homage-hypercar', publishDate: '2026', category: 'Cars' },
        ]}
        moreFromHubLabel="Cars Coverage"
        moreFromHubHref="/cars"
      >
        <p>
          Since the retirement of the iconic R8, automotive enthusiasts have wondered how Ingolstadt would redefine its
          presence at the absolute pinnacle of high-performance motoring. The wait is officially over. Marking a bold,
          triumphant return to the elite supercar space, the German automaker has pulled back the curtain on the{' '}
          <strong>Audi Nuvolari</strong>.
        </p>

        <p>
          Named in honor of legendary pre-war Auto Union racing pioneer Tazio Nuvolari, this limited-run hyper-machine
          blends the brand's rich motorsport heritage with cutting-edge electrification. Strictly limited to just{' '}
          <strong>499 units globally</strong>, the Nuvolari bridges the gap between raw track dominance and daily
          usability, serving as a halo vehicle for Audi's next-generation performance philosophy.
        </p>

        <h2>The Powertrain | Formula 1 Technology on the Street</h2>

        <p>
          At the heart of the Nuvolari lies a blistering, <strong>Formula 1-inspired high-performance hybrid
          powertrain</strong>. Leveraging engineering insights from Audi's factory Formula 1 program, the setup pairs a
          high-revving internal combustion engine with advanced electric motor-generator units (MGUs). Together, the
          hybrid architecture pushes a staggering <strong>1,001 horsepower</strong> through a newly developed{' '}
          <strong>e-quattro all-wheel-drive system</strong>.
        </p>

        <p>
          The front axle is powered exclusively by high-rpm electric motors, allowing for millisecond-level torque
          vectoring through tight corners. Meanwhile, the mid-mounted engine and rear electric motor unleash explosive
          straight-line acceleration, pushing the Nuvolari past a top speed of <strong>217 mph (350 km/h)</strong>.
        </p>

        <ul>
          <li><strong>Primary ICE:</strong> mid-mounted twin-turbocharged combustion engine.</li>
          <li><strong>Hybrid augmentation:</strong> dual-motor electric drive with front-axle e-quattro and MGU-K.</li>
          <li><strong>Combined output:</strong> 1,001 horsepower (1,014 PS).</li>
          <li><strong>Performance ceiling:</strong> 0-60 mph in under 2.5 seconds, top speed above 217 mph.</li>
        </ul>

        <h2>Lightweight Architecture and Active Aerodynamics</h2>

        <p>
          To manage the thermal and physical demands of a 1,001-horsepower hybrid system without compromising handling,
          Audi engineers constructed the Nuvolari around an ultra-lightweight carbon-fiber and aluminum spaceframe. The
          carbon monocoque core provides high torsional rigidity with an integrated battery housing, while an active aero
          suite combines adaptable front air curtains with a motorized carbon rear wing. Race-grade carbon-silicon carbide
          brakes with multi-piston calipers complete the package.
        </p>

        <h2>Cockpit Ergonomics | Digital Minimalism Meets Motorsport</h2>

        <p>
          Inside, the Nuvolari's cabin balances track-ready functionality with luxury refinement. A bespoke, F1-style
          rectangular steering wheel houses integrated drive-mode toggles and dynamic kinetic energy recovery system
          (KERS) controls, while custom carbon-fiber bucket seats anchor occupants during high-G cornering maneuvers.
        </p>

        <h2>The Strategic Impact for Audi</h2>

        <p>
          With only 499 units planned for worldwide production, the Nuvolari isn't just another addition to the luxury
          sports car landscape. It is a collector's item from the day it leaves the factory floor. By delivering 1,001
          horsepower through a sophisticated, electrified powertrain, Audi reaffirms its historic mantra: "Vorsprung
          durch Technik," Advancement through Technology.
        </p>

        <div className="mt-6">
          <a
            href="https://www.youtube.com/watch?v=EWc0ShIFg84"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch the Audi Nuvolari Reveal on YouTube
          </a>
        </div>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.audi-mediacenter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Audi MediaCenter | High-Performance Hybrid Engineering and Motorsport Innovation</a></li>
          <li><a href="https://www.caranddriver.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Car and Driver | Audi Outlines Future Supercar Vision</a></li>
          <li><a href="https://www.topgear.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Top Gear | First Look: Audi Nuvolari Hypercar Debuts F1-Derived Hybrid Power</a></li>
          <li><a href="https://www.motortrend.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Motor Trend | Audi Nuvolari 1,001-HP Hybrid Specs and Limited Production Overview</a></li>
        </ul>

        <p>
          For more automotive coverage, visit the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            Cars hub
          </Link>
          , or read our reports on the{' '}
          <Link href="/cars/aston-martin-valhalla-1000hp-mid-engine-hybrid-2027" className="text-blue-600 hover:text-blue-800 underline">
            Aston Martin Valhalla mid-engine hybrid
          </Link>{' '}
          and the{' '}
          <Link href="/cars/koenigsegg-ccgt1-1600hp-track-homage-hypercar" className="text-blue-600 hover:text-blue-800 underline">
            Koenigsegg CCGT1 track homage
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}