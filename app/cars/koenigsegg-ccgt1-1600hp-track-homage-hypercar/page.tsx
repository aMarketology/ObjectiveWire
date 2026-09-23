import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/cars-koenigsegg-ccgt1-1600hp-track-homage-hypercar.jpg';

export const revalidate = 86400;

const SLUG = '/cars/koenigsegg-ccgt1-1600hp-track-homage-hypercar';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Koenigsegg CCGT1 | 1,600-HP Track Homage, $3.8M Hypercar',
  description:
    'Koenigsegg has unveiled the CCGT1, a track-focused homage hypercar built on the CC850 platform with a 1,600-horsepower E85 biofuel V8, dual-mode Light Speed Transmission, and just 70 units.',
  keywords: [
    'Koenigsegg CCGT1 hypercar release',
    'Koenigsegg 1600 hp E85 biofuel V8',
    'Light Speed Transmission LST gated shifter',
    'CC850 architecture track homage',
    'Koenigsegg 70 units production specs',
    'CCGT1 price',
    'Koenigsegg Engage Shift System',
    'CCGT1 specs 2026',
    'Koenigsegg track hypercar',
    'CCGT GT1 homage car',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'The Biofuel Track Monster | Koenigsegg Unveils the 1,600-HP CCGT1',
    description:
      'Built on the CC850 platform, the ultra-limited Koenigsegg CCGT1 channels 1,600 horsepower on E85 biofuel through a revolutionary dual-mode Light Speed Transmission.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-09-23T18:00:00Z',
    modifiedTime: '2026-09-23T18:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Koenigsegg CCGT1 1600 hp track homage hypercar' }],
    tags: ['Koenigsegg', 'CCGT1', 'Hypercar', 'Track Car', 'Automotive'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swedish Engineering Anarchy | Koenigsegg CCGT1 Track-Inspired Homage',
    description: '1,600 HP on E85. A gated-shift feel through the Light Speed Transmission. Just 70 units. The CCGT1 is here.',
    images: [OG_IMAGE],
  },
};

export default function KoenigseggCCGT1Page() {
  return (
    <>
      <NewsArticleSchema
        title="Koenigsegg CCGT1 | 1,600-HP Track Homage, $3.8M Hypercar"
        description="Koenigsegg has unveiled the CCGT1, a track-focused homage hypercar built on the CC850 platform with a 1,600-horsepower E85 biofuel V8, dual-mode Light Speed Transmission, and just 70 units."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-09-23T18:00:00Z"
        modifiedTime="2026-09-23T18:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Cars"
        keywords={[
          'Koenigsegg CCGT1 hypercar release',
          'Koenigsegg 1600 hp E85 biofuel V8',
          'Light Speed Transmission LST gated shifter',
        ]}
      />

      <NewsArticle
        title="Swedish Track Anarchy | Koenigsegg Unveils the 1,600-HP CCGT1 Homage Hypercar"
        subtitle="Built on the CC850 platform, the ultra-limited Koenigsegg CCGT1 channels 1,600 horsepower on E85 biofuel through a revolutionary dual-mode Light Speed Transmission, with a gated-shift manual feel and just 70 units worldwide."
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
        thumbnail={{ src: OG_IMAGE, alt: 'Koenigsegg CCGT1 1600 hp track homage hypercar' }}
        tags={['Koenigsegg', 'CCGT1', 'Hypercar', 'Track Car', 'Automotive', '2026']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Koenigsegg CCGT1', item: SLUG },
        ]}
        keyTakeaways={[
          'The Koenigsegg CCGT1 is a track-focused homage hypercar built on the CC850 architecture, limited to just 70 units worldwide at a price expected to exceed $3.8 million.',
          'It is powered by a mid-mounted 5.0-liter twin-turbocharged V8 engineered without a traditional flywheel, producing 1,385 horsepower on pump gasoline and 1,600 horsepower and 1,106 lb-ft of torque on E85 biofuel.',
          'The CCGT1 uses the Engage Shift System built around the Light Speed Transmission, offering a 6-speed gated manual feel with a physical clutch pedal that can switch to a 9-speed seamless automatic.',
          'A track-derived aerodynamic package includes a top-mounted active carbon rear wing, massive rear diffuser, carbon-ceramic brakes, and Triplex dampers with active ride height.',
          'The car pays homage to the legendary 2007 CCGT GT1 race car project that was shelved when FIA GT1 regulations changed at the last minute.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Koenigsegg CCGT1?',
            answer:
              'The Koenigsegg CCGT1 is a track-focused, ultra-limited homage hypercar built on the CC850 platform. It is a spiritual successor to the shelved 2007 CCGT GT1 race car project and is limited to 70 units.',
          },
          {
            question: 'How much horsepower does the Koenigsegg CCGT1 have?',
            answer:
              'The CCGT1 produces 1,385 horsepower on standard pump gasoline and 1,600 horsepower with 1,106 lb-ft of torque on E85 renewable biofuel, from a 5.0-liter twin-turbocharged V8.',
          },
          {
            question: 'How much does the Koenigsegg CCGT1 cost?',
            answer:
              'The CCGT1 is expected to command a price tag exceeding $3.8 million, reflecting its ultra-limited 70-unit production run.',
          },
          {
            question: 'What is the Light Speed Transmission (LST)?',
            answer:
              'The Light Speed Transmission is Koenigsegg multi-clutch gearbox with nine internal ratios. Paired with the Engage Shift System, it can operate as a 6-speed gated manual with a physical clutch pedal or switch to a seamless 9-speed automatic.',
          },
          {
            question: 'What is the CCGT1 homage to?',
            answer:
              'The CCGT1 pays homage to the legendary 2007 CCGT GT1 race car, a project Koenigsegg shelved when FIA GT1 regulations changed at the eleventh hour before it could race.',
          },
        ]}
        moreFromHub={[
          { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
          { slug: 'hennessey-venom-f5m-manual-hypercar-1817hp', title: 'Hennessey Venom F5-M | 1,817-HP Manual Hypercar', url: '/cars/hennessey-venom-f5m-manual-hypercar-1817hp', publishDate: '2026', category: 'Cars' },
          { slug: 'bugatti-tourbillon-v16-hybrid-reveal-2026', title: 'Bugatti Tourbillon | 1,800 HP V16 Hybrid', url: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026', publishDate: '2026', category: 'Cars' },
        ]}
        moreFromHubLabel="Cars Coverage"
        moreFromHubHref="/cars"
      >
        <p>
          When Christian von Koenigsegg decides to pay homage to his brand's motorsport heritage, standard hypercar
          conventions cease to apply. The Swedish boutique manufacturer has formally pulled back the sheet on the{' '}
          <strong>Koenigsegg CCGT1</strong>, a track-focused, ultra-limited homage car built atop the revolutionary
          architectural foundation of the CC850.
        </p>

        <p>
          Designed as a spiritual successor to the legendary 2007 CCGT GT1 race car project, which was famously shelved
          when FIA GT1 regulations changed at the eleventh hour, the CCGT1 merges aggressive GT1-inspired aerodynamics
          with cutting-edge powertrain technology. Strictly limited to a global production run of just{' '}
          <strong>70 units</strong>, the CCGT1 stands as a physical manifestation of what happens when unconstrained
          motorsport ambition meets modern road-legal engineering.
        </p>

        <h2>The Powertrain | 1,600 Horsepower on E85</h2>

        <p>
          Underneath the sleek, lightweight carbon-fiber skin sits Koenigsegg's engineering crown jewel: a mid-mounted{' '}
          <strong>5.0-liter twin-turbocharged V8 engine</strong>. Engineered without a traditional flywheel to deliver
          lightning-fast throttle response, the V8 produces varying power levels depending on the fuel fed into its
          high-pressure injection system. Running on E85 biofuel, the twin-turbo V8 reaches a massive{' '}
          <strong>1,600 horsepower</strong>, achieving a near 1:1 power-to-weight ratio when accounting for the car's
          ultra-lightweight dry weight of roughly 1,385 kilograms.
        </p>

        <h2>The Transmission Miracle | ESS Meets LST</h2>

        <p>
          What sets the CCGT1 platform apart is its revolutionary transmission architecture. The vehicle utilizes
          Koenigsegg's <strong>Engage Shift System (ESS)</strong>, built around the multi-clutch{' '}
          <strong>Light Speed Transmission (LST)</strong>. The system allows the driver to experience an authentic,
          mechanical 6-speed gated manual shift feel with a physical clutch pedal in the cockpit.
        </p>

        <p>
          However, because the transmission physically possesses nine internal gear ratios, the software can adjust gear
          ratios based on whether the car is configured for track lap records or highway cruising. At the flip of a
          switch, the physical clutch disengages and the car transitions into a hyper-fast 9-speed automatic capable of
          changing gears in virtually zero milliseconds.
        </p>

        <h2>Track-Derived Aerodynamics and Chassis</h2>

        <p>
          While the CC850 focused heavily on timeless, clean road lines, the CCGT1 adopts an aggressive, track-focused
          aerodynamic package. It features a top-mounted active carbon rear wing and massive rear diffuser, carbon-ceramic
          brakes with 6-piston front and 4-piston rear calipers, and a double-wishbone suspension with Triplex dampers
          and active ride height adjustment, all wrapped around a carbon-fiber monocoque with an aluminum honeycomb core.
        </p>

        <h2>Production Rarity and Collector Impact</h2>

        <p>
          With production strictly capped at <strong>70 units worldwide</strong>, a direct nod celebrating Christian von
          Koenigsegg's milestone birthday era, the CCGT1 is expected to command a price tag exceeding{' '}
          <strong>$3.8 million</strong>. By blending the mechanical soul of an open-gate manual with the sheer force of a
          1,600-horsepower biofuel engine, the CCGT1 ensures that raw driver engagement remains at the absolute pinnacle
          of hypercar culture.
        </p>

        <div className="mt-6">
          <a
            href="https://www.youtube.com/watch?v=Z4cfWjN6y9U"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch the Koenigsegg CCGT1 Reveal on YouTube
          </a>
        </div>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.koenigsegg.com/media" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Koenigsegg Official Media Center | Technical Specifications and Heritage Models</a></li>
          <li><a href="https://www.topgear.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Top Gear | Inside Koenigsegg Light Speed Transmission and CC-Series Architecture</a></li>
          <li><a href="https://www.caranddriver.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Car and Driver | Koenigsegg Details 1,600-HP Biofuel V8 Powertrains</a></li>
          <li><a href="https://www.roadandtrack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Road and Track | How Koenigsegg Simulated a Manual Transmission with the ESS LST System</a></li>
        </ul>

        <p>
          For more automotive coverage, visit the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            Cars hub
          </Link>
          , or read our reports on the{' '}
          <Link href="/cars/hennessey-venom-f5m-manual-hypercar-1817hp" className="text-blue-600 hover:text-blue-800 underline">
            Hennessey Venom F5-M manual hypercar
          </Link>{' '}
          and the{' '}
          <Link href="/cars/bugatti-tourbillon-v16-hybrid-reveal-2026" className="text-blue-600 hover:text-blue-800 underline">
            Bugatti Tourbillon V16 hybrid
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}