import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;
// Photo: Ferrari hood emblem, red supercar — Jerry Wei (@findway_jerry) on Unsplash
// https://unsplash.com/@findway_jerry?utm_source=zwire&utm_medium=referral
const UNSPLASH_PHOTO_ID = 'photo-1730298878684-33c8b2c81aac';
const UNSPLASH_IXID = 'M3w5MTA5OTJ8MHwxfGFsbHx8fHx8fHx8fDE3NzgyMTM4OTh8';
const UNSPLASH_PHOTOGRAPHER = 'Jerry Wei';
const UNSPLASH_PHOTOGRAPHER_URL = 'https://unsplash.com/@findway_jerry?utm_source=zwire&utm_medium=referral';
// Minted thumbnail — watermarked, keyword-optimised, EXIF-tagged, owire.org-hosted
const OG_IMAGE = '/thumbnails/ferrari-f80-hypercar-price-specs-2026.jpg';
const OG_IMAGE_FULL = `https://www.owire.org${OG_IMAGE}`;

export const metadata: Metadata = {
  title: 'Ferrari F80 | Price, Specs, 1184HP Hybrid, Q1 2026 Delivery',
  description: 'Ferrari F80 revealed: $3.735M, 1184hp hybrid hypercar with F1-derived MGU-K technology. 0-60mph in 1.9 seconds. All 799 units sold. Q1 2026 deliveries.',
  keywords: [
    'Ferrari F80',
    'Ferrari F80 price',
    'Ferrari F80 specs',
    'Ferrari F80 2026',
    'Ferrari F80 horsepower',
    'Ferrari hypercar 2026',
    'Ferrari F80 hybrid',
    'Ferrari F80 release date',
    'Ferrari LaFerrari successor',
    'Ferrari F80 delivery',
    'Ferrari F80 top speed',
    'Ferrari F80 0-60',
    'Ferrari 1184hp',
    'Ferrari F1 hybrid road car',
    'most powerful Ferrari',
    'Ferrari F80 vs LaFerrari',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ferrari F80 | $3.7M, 1184HP, Sold Out Before Launch',
    description: 'Ferrari reveals its F1-derived hypercar flagship. 1,184hp, 0-60 in 1.9 seconds, all 799 units sold. Q1 2026 deliveries begin.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ZWire',
    authors: ['ZWire Auto Desk'],
    publishedTime: '2026-05-07T14:00:00Z',
    modifiedTime: '2026-05-07T14:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE_FULL, width: 1200, height: 675, alt: 'Ferrari F80 hypercar red hood emblem, 1184hp hybrid supercar 2026' }],
    tags: ['Ferrari', 'Ferrari F80', 'Hypercar', 'Supercar'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari F80 | 1,184HP, $3.7M, All 799 Units Sold Out',
    description: '0-60 in 1.9 seconds. Formula 1 MGU-K hybrid. Ferrari\'s most powerful road car ever. Q1 2026 deliveries.',
    images: [OG_IMAGE_FULL],
  },
};

export default function FerrariF80Page() {
  return (
    <NewsArticle
      title="Ferrari F80 | Price, Specs, 1184HP Hybrid, Q1 2026 Delivery"
      subtitle="Ferrari's LaFerrari successor packs 1,184hp from a Formula 1-derived hybrid system, does 0-60 in 1.9 seconds, costs $3.735 million, and sold every one of its 799 units before deliveries began."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="2026-05-07T14:00:00Z"
      readTime="6 min read"
      author={{ name: 'ZWire Auto Desk', role: 'Cars', authorSlug: undefined }}
      heroImage={{
        src: OG_IMAGE_FULL,
        alt: 'Ferrari F80 hypercar red emblem close-up, 1184hp hybrid supercar 2026',
        credit: `${UNSPLASH_PHOTOGRAPHER} / Unsplash`,
      }}
      thumbnail={{
        src: OG_IMAGE_FULL,
        alt: 'Ferrari F80 hypercar red 2026',
      }}
      slug="ferrari-f80-hypercar-price-specs-2026"
      url={SLUG}
      tags={['Ferrari F80', 'Ferrari', 'Hypercar', 'Supercar']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Ferrari', item: '/cars/ferrari' },
        { name: 'Ferrari F80', item: SLUG },
      ]}
    >
      <p>
        Ferrari revealed the <strong>F80</strong> on October 17, 2024 at the Fiorano Circuit, and by the time the cameras had been put away, every one of the 799 production units had already been allocated to customers. Base price: <strong>$3,735,000 USD</strong>. It is the most powerful road car Ferrari has ever built, and the most technically complex hypercar in the company's 77-year history.
      </p>

      <p>
        The F80 is the direct successor to the LaFerrari, which debuted in 2013 with a then-shocking 950hp hybrid system. Twelve years later, Ferrari has more than doubled down. The F80 produces a combined <strong>1,184hp (882 kW)</strong> from a system that reads less like a road car spec sheet and more like the technical regulations from a Formula 1 constructor. For context on what it competes with, see the{' '}
        <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">ZWire Cars hub</Link>{' '}
        and{' '}
        <Link href="/cars/ferrari" className="text-blue-600 hover:text-blue-800 underline">Ferrari news and profiles</Link>.
      </p>

      <h2>Ferrari F80 Engine | 3.0L Twin-Turbo V6 Meets Three Electric Motors</h2>

      <p>
        The combustion heart of the F80 is a new <strong>3.0-liter twin-turbocharged V6</strong> engine that produces 900hp on its own, revving to 9,000 RPM. Ferrari developed this V6 specifically for the F80, borrowing directly from the 296 GTB platform but taken to its absolute engineering limit.
      </p>

      <p>
        That V6 works alongside <strong>three electric motor-generator units (MGUs)</strong> derived from Ferrari's Formula 1 hybrid program, running on an <strong>800-volt architecture</strong> with a 1.5 kWh lithium-ion battery:
      </p>

      <ul>
        <li><strong>MGU-K (rear, integrated with gearbox):</strong> Provides kinetic energy recovery and boost, identical in concept to the F1 KERS used in championship-winning cars at Maranello.</li>
        <li><strong>Two front-axle MGUs (e-4WD):</strong> Each motor drives one front wheel independently, delivering instantaneous torque vectoring across the front axle without a mechanical differential.</li>
      </ul>

      <p>
        Combined system output: <strong>1,184 hp</strong>, split as 888 hp from the V6 and 296 hp from the three electric motors. The 800V architecture enables extremely fast charge and discharge cycles, allowing the electric system to respond in milliseconds to throttle input. Curb weight is <strong>3,800 lbs (1,724 kg)</strong>, with a dry weight of 3,362 lbs (1,525 kg). By comparison, the McLaren P1 curb-weighed 1,547 kg with 903hp; the Bugatti Chiron 1,995 kg with 1,500hp.
      </p>

      <h2>Ferrari F80 Performance | 2.15 Seconds to 62mph, 217mph Top Speed</h2>

      <p>
        Ferrari's official performance claims for the F80:
      </p>

      <ul>
        <li><strong>0 to 60 mph:</strong> 1.9 seconds</li>
        <li><strong>0 to 124 mph (200 km/h):</strong> under 5.0 seconds</li>
        <li><strong>Top speed:</strong> 217 mph (350 km/h)</li>
        <li><strong>Downforce at 250 km/h:</strong> 1,050 kg, more than half the car's curb weight contributed by aerodynamics alone</li>
      </ul>

      <p>
        The 1,050 kg downforce figure is generated by a full active aerodynamic package that includes an adaptive front splitter, active rear wing, and a full-length Venturi underbody channeled by ground-effect aerodynamics. Ferrari claims the F80 generates more downforce than any road-legal car they have ever produced, including the limited-run XX track vehicles.
      </p>

      <p>
        The eight-speed dual-clutch transmission manages power delivery to the rear wheels, while the front MGUs provide instantaneous torque vectoring, effectively replacing the role of a limited-slip differential with software-controlled electric motors.
      </p>

      <h2>Ferrari F80 Price | $3,735,000 and Sold Out Before Delivery</h2>

      <p>
        At <strong>$3,735,000 USD</strong> before options, the F80 is Ferrari's most expensive production road car. The LaFerrari launched at approximately $1.3 million in 2013. The F80 represents a 187% price increase over its predecessor, reflecting both the engineering escalation and Ferrari's ability to command any price it chooses for halo models.
      </p>

      <p>
        All <strong>799 units</strong> were allocated to existing Ferrari clients before the public reveal. Ferrari selects F80 customers from their Icona and Tailor Made program alumni, prioritizing buyers of previous limited hypercars. If you were not already on the list, there is no waiting list to join. The only path to an F80 is the secondary market, where prices are already reported to be well above the sticker.
      </p>

      <p>
        The 799-unit run is a deliberate callback: Ferrari produced 499 LaFerraris in 2013, 499 Enzos in 2002, and 349 F50s in 1995. The 799-unit ceiling for the F80 is the largest limited production run in Ferrari's hypercar lineage, reflecting the brand's growing global customer base while maintaining exclusivity.
      </p>

      <h2>Ferrari F80 Delivery | Q1 2026 Initial Batch</h2>

      <p>
        Ferrari began production of the F80 in late 2025 at the Maranello factory. Initial customer deliveries were scheduled to begin in <strong>Q1 2026</strong>, with the full 799-unit run expected to be completed through 2026 and into 2027.
      </p>

      <p>
        Ferrari has not officially confirmed individual delivery milestones, but European and North American dealers have indicated that first-wave customers in their markets have taken delivery. The production schedule is understood to run at a deliberately controlled pace to maintain build quality and manage the complexity of the hybrid system integration.
      </p>

      <h2>Ferrari F80 vs LaFerrari | How the Flagship Evolved in 13 Years</h2>

      <p>
        The numbers tell the story of what 13 years of Formula 1-derived development can do:
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6' }}>
            <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e5e7eb', fontSize: '13px' }}>Spec</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e5e7eb', fontSize: '13px' }}>LaFerrari (2013)</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e5e7eb', fontSize: '13px' }}>F80 (2026)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Combined Power</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>950 hp</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1,184 hp</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Engine</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>6.3L NA V12 + 1 MGU</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>3.0L TT V6 + 3 MGUs</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>0-60 mph</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Under 3.0 sec</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1.9 sec</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Top Speed</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Over 217 mph</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Over 217 mph</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Downforce</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>~400 kg</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1,050 kg at 250 km/h</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Units</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>499</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>799</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Price at Launch</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>~$1.3M</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>$3,735,000</td></tr>
        </tbody>
      </table>

      <p>
        The most significant architectural change is the shift from a single rear MGU (LaFerrari) to three distributed MGUs (F80). The two independent front-axle motors effectively create all-wheel drive with instantaneous torque vectoring, a capability the LaFerrari never had. Where the LaFerrari was fundamentally a fast V12 with electric assistance, the F80 is a hybrid system that happens to include a very fast V6.
      </p>

      <h2>Ferrari F80 Specs | Full Technical Summary</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#b91c1c', color: '#fff' }}>
            <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e5e7eb', fontSize: '13px' }}>Specification</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e5e7eb', fontSize: '13px' }}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Powertrain</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Mid-mounted 3.0L Twin-Turbo V6 + 3 Electric Motors</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Battery</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1.5 kWh Lithium-ion, 800-volt architecture</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Total Output</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1,184 hp (888 hp V6 + 296 hp electric)</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Transmission</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>8-speed dual-clutch automatic</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Drivetrain</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>All-Wheel Drive (e-4WD)</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>0-60 mph</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1.9 seconds</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Top Speed</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>217 mph (350 km/h)</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Curb Weight</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>3,800 lbs / Dry: 3,362 lbs</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Dimensions (L x W x H)</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>190.6 in x 81.1 in x 44.8 in</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Downforce</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1,050 kg at 250 km/h</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Production</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>799 units (all allocated)</td></tr>
          <tr style={{ backgroundColor: '#f9fafb' }}><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Price</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>$3,735,000 USD</td></tr>
          <tr><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>First Deliveries</td><td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Q1 2026</td></tr>
        </tbody>
      </table>

      <p>
        The Ferrari F80 represents the current apex of what road-legal hybrid technology can achieve. It is worth watching how it compares to incoming competition from{' '}
        <Link href="/cars/bugatti-tourbillon-v16-hybrid-reveal-2026" className="text-blue-600 hover:text-blue-800 underline">the Bugatti Tourbillon</Link>,
        {' '}which uses a 1,800hp V16 hybrid at $4.1 million, and the forthcoming Lamborghini replacement for the Aventador lineage. For the full Ferrari model lineup and latest news, see the{' '}
        <Link href="/cars/ferrari" className="text-blue-600 hover:text-blue-800 underline">Ferrari hub on ZWire</Link>.
      </p>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.ferrari.com/en-EN/auto/ferrari-f80',
            title: 'Ferrari F80 Official Product Page',
            description: 'Official specs, design language, and powertrain details from Ferrari S.p.A.',
          },
          {
            number: 2,
            url: 'https://www.caranddriver.com/ferrari/f80',
            title: 'Ferrari F80 Review | Car and Driver',
            description: 'First-drive impression and technical breakdown of the F80 hybrid system.',
          },
          {
            number: 3,
            url: 'https://www.motortrend.com/cars/ferrari/f80/',
            title: 'Ferrari F80 Specs and Preview | MotorTrend',
            description: 'Performance figures, powertrain architecture, and production details.',
          },
        ]}
        internalLinks={[
          { href: '/cars', label: 'ZWire Cars Hub' },
          { href: '/cars/ferrari', label: 'Ferrari News' },
          { href: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026', label: 'Bugatti Tourbillon | 1,800HP V16' },
        ]}
      />
    </NewsArticle>
  );
}
