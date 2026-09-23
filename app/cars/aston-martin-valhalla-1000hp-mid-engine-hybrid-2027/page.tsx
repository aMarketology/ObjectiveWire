import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/cars-aston-martin-valhalla-1000hp-mid-engine-hybrid-2027.jpg';

export const revalidate = 86400;

const SLUG = '/cars/aston-martin-valhalla-1000hp-mid-engine-hybrid-2027';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Aston Martin Valhalla | 1,000-HP Mid-Engine Hybrid, 2027',
  description:
    'Aston Martin is entering mid-engine hypercar production with the Valhalla for 2027, a 1,000-horsepower hybrid fusing a flat-plane V8 with a tri-motor PHEV system.',
  keywords: [
    'Aston Martin Valhalla mid engine hybrid',
    'Aston Martin Valhalla 1000 hp V8 PHEV',
    'Valhalla carbon fiber monocoque specs',
    'Gaydon mid-engine hypercar 2027',
    'Valhalla price release date',
    'Aston Martin Valhalla specs',
    'Valhalla AMG V8 hybrid',
    'Aston Martin 2027 hypercar',
    'Valhalla tri-motor PHEV',
    'Aston Martin Formula 1 technology',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'The British Titan | Aston Martin 1,000-HP Valhalla Mid-Engine Hypercar Arrives',
    description:
      'Aston Martin Valhalla enters full production maturity for 2027, fusing a bespoke twin-turbo V8 with a tri-motor PHEV setup that pushes 1,000 horsepower.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-09-23T19:00:00Z',
    modifiedTime: '2026-09-23T19:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Aston Martin Valhalla 1000 hp mid-engine hybrid hypercar' }],
    tags: ['Aston Martin', 'Valhalla', 'Hybrid Hypercar', 'Hypercar', 'Automotive'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formula 1 for the Road | Production-Ready Aston Martin Valhalla',
    description: '1,000 HP. A flat-plane V8 plus three electric motors. 999 units. The Valhalla is here.',
    images: [OG_IMAGE],
  },
};

export default function AstonMartinValhallaPage() {
  return (
    <>
      <NewsArticleSchema
        title="Aston Martin Valhalla | 1,000-HP Mid-Engine Hybrid, 2027"
        description="Aston Martin is entering mid-engine hypercar production with the Valhalla for 2027, a 1,000-horsepower hybrid fusing a flat-plane V8 with a tri-motor PHEV system."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-09-23T19:00:00Z"
        modifiedTime="2026-09-23T19:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Cars"
        keywords={[
          'Aston Martin Valhalla mid engine hybrid',
          'Aston Martin Valhalla 1000 hp V8 PHEV',
          'Valhalla carbon fiber monocoque specs',
        ]}
      />

      <NewsArticle
        title="Formula 1 for the Road | The 1,000-HP Aston Martin Valhalla Enters Full Production Maturity"
        subtitle="For the 2027 model year, the Aston Martin Valhalla serves as the brand's first series-production mid-engine hybrid hypercar, fusing a bespoke flat-plane V8 with a tri-motor PHEV system to push 1,000 horsepower."
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
        thumbnail={{ src: OG_IMAGE, alt: 'Aston Martin Valhalla 1000 hp mid-engine hybrid hypercar' }}
        tags={['Aston Martin', 'Valhalla', 'Hybrid Hypercar', 'Hypercar', 'Automotive', '2027']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Aston Martin Valhalla', item: SLUG },
        ]}
        keyTakeaways={[
          'The Aston Martin Valhalla is the brand\'s first series-production mid-engine hybrid hypercar, entering full maturity for the 2027 model year with direct input from Aston Martin Performance Technologies and the Aston Martin Aramco Formula One Team.',
          'It is powered by a bespoke flat-plane crank 4.0-liter twin-turbocharged V8 developed with Mercedes-AMG, paired with three electric motors, two on the front axle and one integrated into the eight-speed DCT, for a combined output of about 1,000 horsepower.',
          'The Valhalla uses a carbon-fiber monocoque tub keeping dry weight under 1,550 kilograms, with active aero generating over 600 kilograms of downforce at 149 mph.',
          'Performance targets include a 0-60 mph time under 2.5 seconds, a top speed of 217 mph, and an EV-only range of about nine miles.',
          'Production is strictly limited to 999 units worldwide, positioning the Valhalla against Ferrari, McLaren, and Lamborghini.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Aston Martin Valhalla?',
            answer:
              'The Aston Martin Valhalla is the brand\'s first series-production mid-engine hybrid hypercar, entering full production maturity for the 2027 model year. It is designed with input from Aston Martin Performance Technologies and the Aston Martin Aramco Formula One Team.',
          },
          {
            question: 'How much horsepower does the Aston Martin Valhalla have?',
            answer:
              'The Valhalla produces about 1,000 horsepower, combining a flat-plane crank 4.0-liter twin-turbocharged V8 with three electric motors, two on the front axle and one integrated into the transmission.',
          },
          {
            question: 'What engine is in the Aston Martin Valhalla?',
            answer:
              'The Valhalla uses a bespoke 4.0-liter twin-turbocharged V8 with a flat-plane crankshaft, developed in partnership with Mercedes-AMG. It revs to 7,200 RPM and drives the rear wheels, while the electric motors add front-axle torque vectoring.',
          },
          {
            question: 'How much does the Aston Martin Valhalla cost?',
            answer:
              'Aston Martin has not disclosed final pricing, but the Valhalla is a strictly limited hypercar capped at 999 units worldwide, placing it firmly in seven-figure hypercar territory.',
          },
          {
            question: 'What is the top speed of the Aston Martin Valhalla?',
            answer:
              'The Valhalla targets a top speed of 217 mph (350 km/h) and a 0-60 mph time under 2.5 seconds.',
          },
        ]}
        moreFromHub={[
          { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
          { slug: 'koenigsegg-ccgt1-1600hp-track-homage-hypercar', title: 'Koenigsegg CCGT1 | 1,600-HP Track Homage', url: '/cars/koenigsegg-ccgt1-1600hp-track-homage-hypercar', publishDate: '2026', category: 'Cars' },
          { slug: 'hennessey-venom-f5m-manual-hypercar-1817hp', title: 'Hennessey Venom F5-M | 1,817-HP Manual Hypercar', url: '/cars/hennessey-venom-f5m-manual-hypercar-1817hp', publishDate: '2026', category: 'Cars' },
        ]}
        moreFromHubLabel="Cars Coverage"
        moreFromHubHref="/cars"
      >
        <p>
          For decades, Gaydon was defined by the classic front-mid engine grand tourer layout, long, sweeping hoods
          housing roaring V8s and V12s wrapped in elegant British tailoring. However, as the brand's high-performance
          ambition evolved alongside its active presence on the Formula 1 grid, Aston Martin set its sights on a
          completely new architectural horizon: <strong>the exotic, mid-engine hypercar realm</strong>.
        </p>

        <p>
          Entering full production maturity for the <strong>2027 model year</strong>, the <strong>Aston Martin
          Valhalla</strong> serves as the brand's first series-production mid-engine hybrid hypercar. Designed with
          direct technical input from Aston Martin Performance Technologies (AMPT) and the Aston Martin Aramco Formula
          One Team, the Valhalla bridges the gap between the track-only Valkyrie extreme concept and daily road-legal
          usable performance.
        </p>

        <h2>The Hybrid Powertrain | AMG V8 Meets Tri-Motor Electrification</h2>

        <p>
          At the physical center of the Valhalla sits a bespoke, flat-plane crank <strong>4.0-liter twin-turbocharged
          V8 engine</strong>, developed in close technical partnership with Mercedes-AMG. The high-revving internal
          combustion engine, which revs out to 7,200 RPM, drives the rear wheels exclusively. Working alongside the V8
          are <strong>three compact electric motors</strong>: two on the front axle to provide dynamic torque-vectoring
          all-wheel drive, and a third integrated directly into the custom eight-speed dual-clutch transmission.
        </p>

        <p>
          By eliminating the heavy physical reverse gear inside the eight-speed transmission and allowing the front
          electric motors to handle rearward maneuvering, Aston Martin engineers saved significant mechanical weight
          while optimizing gearbox packaging.
        </p>

        <ul>
          <li><strong>Internal combustion:</strong> 4.0L twin-turbo flat-plane crank V8 (about 800 HP).</li>
          <li><strong>Electrification:</strong> 3 electric motors, 2 front axle and 1 integrated in the 8-speed DCT.</li>
          <li><strong>Total combined output:</strong> about 1,000 horsepower (1,012 PS / 745 kW).</li>
          <li><strong>Transmission:</strong> 8-speed e-DCT with no physical reverse gear.</li>
        </ul>

        <h2>Carbon Architecture and F1 Aerodynamics</h2>

        <p>
          The foundation of the Valhalla is an ultra-lightweight, high-rigidity carbon fiber tub engineered to maximize
          structural integrity while keeping total dry vehicle weight under <strong>1,550 kilograms (3,417 lbs)</strong>.
        </p>

        <p>
          The active aerodynamic surfaces are tuned to respond continuously to vehicle speed and driver inputs. In full
          track mode, the active front wing and massive multi-element rear wing morph dynamically to generate over{' '}
          <strong>600 kilograms (1,322 lbs) of downforce at 149 mph (240 km/h)</strong>, pinning the hypercar to the
          tarmac without requiring drag-inducing fixed wings.
        </p>

        <h2>Performance Targets</h2>

        <p>Key 2027 Valhalla performance targets include a 0-60 mph sprint in under 2.5 seconds, a 217 mph top speed,
        and about nine miles of EV-only range. Production is strictly capped at 999 units worldwide.</p>

        <h2>Cockpit Ergonomics | The Pilot Philosophy</h2>

        <p>
          Inside the cabin, the Valhalla favors a stark, functional layout derived from modern racing cockpits. The
          driver and passenger sit in fixed carbon-fiber bucket seats, with the pedal box and steering column adjusting
          relative to the occupant, a packaging layout taken directly from modern single-seater race cars. A minimalist
          dual-screen digital interface handles telemetry, drive-mode selection, and Apple CarPlay connectivity.
        </p>

        <h2>The Strategic Shift for Gaydon</h2>

        <p>
          The arrival of the Valhalla marks a pivotal moment in Aston Martin's modern manufacturing history. By
          establishing a dedicated, highly mature mid-engine platform, the marque transforms from a traditional boutique
          GT manufacturer into a direct, credible challenger to mid-engine stalwarts like Ferrari, McLaren, and
          Lamborghini. The Valhalla stands as physical proof that British craftsmanship and world-class motorsport
          engineering can coexist inside a single, 1,000-horsepower package.
        </p>

        <div className="mt-6">
          <a
            href="https://www.youtube.com/watch?v=A22p6O7j1A4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch the Aston Martin Valhalla Reveal on YouTube
          </a>
        </div>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://media.astonmartin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Aston Martin Official Media Room | Valhalla Technical Specifications</a></li>
          <li><a href="https://www.caranddriver.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Car and Driver | Aston Martin Valhalla: Everything We Know About the 1000-HP Hybrid</a></li>
          <li><a href="https://www.topgear.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Top Gear | Aston Martin Details the Production-Ready Valhalla</a></li>
          <li><a href="https://www.motortrend.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Motor Trend | Aston Martin Valhalla Hypercar Hybrid System Breakdown</a></li>
        </ul>

        <p>
          For more automotive coverage, visit the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            Cars hub
          </Link>
          , or read our reports on the{' '}
          <Link href="/cars/koenigsegg-ccgt1-1600hp-track-homage-hypercar" className="text-blue-600 hover:text-blue-800 underline">
            Koenigsegg CCGT1 track homage
          </Link>{' '}
          and the{' '}
          <Link href="/cars/hennessey-venom-f5m-manual-hypercar-1817hp" className="text-blue-600 hover:text-blue-800 underline">
            Hennessey Venom F5-M manual hypercar
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}