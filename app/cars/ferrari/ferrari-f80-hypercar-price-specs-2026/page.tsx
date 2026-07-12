import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/ferrari-f80-hypercar-price-specs-2026.jpg';
const OG_IMAGE_FULL = `https://www.objectivewire.com${OG_IMAGE}`;

export const metadata: Metadata = {
  title: 'Ferrari F80 | Price, Specs, 1184HP Hybrid, Le Mans-Derived Powertrain',
  description:
    'The Ferrari F80 is a 1,184hp hybrid hypercar priced at $3.9 million, limited to 799 units. Powered by a Le Mans-winning 3.0L twin-turbo V6 with three electric motors, it features ground-effect aero generating 2,315 lbs of downforce and a 2.15-second 0-62 mph time.',
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
    'Ferrari F80 vs McLaren W1',
    'Ferrari F80 downforce',
    'Ferrari F80 tri-motor',
    'Ferrari F80 1+ cockpit',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ferrari F80 | $3.9M, 1,184HP, Le Mans-Derived Hybrid Flagship',
    description: 'Ferrari F80: 1,184hp tri-motor hybrid, 2,315 lbs downforce, 2.15s 0-62 mph. All 799 units sold at $3.9M. The LaFerrari successor is here.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-07-11T20:00:00Z',
    modifiedTime: '2026-07-11T20:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE_FULL, width: 1200, height: 675, alt: 'Ferrari F80 hypercar 1184hp hybrid 2026' }],
    tags: ['Ferrari', 'Ferrari F80', 'Hypercar', 'Supercar', 'Hybrid'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari F80 | 1,184HP, $3.9M, All 799 Units Sold Out',
    description: 'Le Mans-derived V6 hybrid. 2,315 lbs downforce. 2.15s 0-62 mph. Ferrari\'s most extreme road car ever.',
    images: [OG_IMAGE_FULL],
  },
};

export default function FerrariF80Page() {
  return (
    <NewsArticle
      title="Ferrari F80 | 1,184 HP Hybrid Hypercar, $3.9 Million, 799 Units"
      subtitle="The Ferrari F80 is a 1,184hp tri-motor hybrid hypercar priced at $3.9 million and limited to 799 units. Powered by a Le Mans-winning 3.0L twin-turbo V6 with three electric motors, it features ground-effect aerodynamics generating 2,315 pounds of downforce and a 2.15-second 0-62 mph time."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="July 11, 2026"
      readTime="8 min read"
      author={{ name: 'Conan D. Boyle', role: 'Automotive Correspondent, ObjectWire', authorSlug: 'conan-boyle' }}
      thumbnail={{ src: OG_IMAGE_FULL, alt: 'Ferrari F80 hypercar 1184hp hybrid 2026' }}
      slug="ferrari-f80-hypercar-price-specs-2026"
      url={SLUG}
      tags={['Ferrari F80', 'Ferrari', 'Hypercar', 'Supercar', 'Hybrid', '2026']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Ferrari', item: '/cars/ferrari' },
        { name: 'Ferrari F80', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
        { slug: 'mclaren-w1-hybrid-hypercar-price-specs-2026', title: 'McLaren W1 | 1,258 HP Hybrid Hypercar', url: '/cars/mclaren-w1-hybrid-hypercar-price-specs-2026', publishDate: 'July 11, 2026', category: 'Cars' },
      ]}
      moreFromHubLabel="Cars Coverage"
      moreFromHubHref="/cars"
      keyTakeaways={[
        'The Ferrari F80 is a 1,184hp hybrid hypercar priced at $3.9 million, limited to 799 units, and serves as the direct successor to the LaFerrari.',
        'The powertrain combines a Le Mans-derived 3.0L twin-turbo V6 producing 888 hp with three electric motors adding 296 hp, driving all four wheels through e-4WD torque vectoring.',
        'Ground-effect aerodynamics and an Active Long Tail generate 2,315 pounds of downforce at 155 mph, more than any road-legal Ferrari ever produced.',
        'All 799 units were sold before the public launch, with a 0-62 mph time of 2.15 seconds and a top speed of 217 mph.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What is the Ferrari F80?',
          answer: 'The Ferrari F80 is a 1,184hp hybrid hypercar priced at $3.9 million and limited to 799 units. It is the direct successor to the LaFerrari, powered by a Le Mans-derived 3.0L twin-turbo V6 with three electric motors.',
        },
        {
          question: 'How much does the Ferrari F80 cost?',
          answer: 'The Ferrari F80 has a base price of approximately $3.9 million (3.6 million euros). All 799 units were allocated before the public launch.',
        },
        {
          question: 'What engine is in the Ferrari F80?',
          answer: 'The F80 uses the F163CF 3.0-liter twin-turbocharged V6 producing 888 hp on its own, combined with three electric motors for a total of 1,184 hp. The V6 revs to 9,200 rpm and achieves 300 hp per liter.',
        },
        {
          question: 'Is the Ferrari F80 all-wheel drive?',
          answer: 'Yes. The F80 uses an e-4WD system with two independent electric motors on the front axle providing torque vectoring, plus a third motor between the V6 and the 8-speed dual-clutch transmission.',
        },
        {
          question: 'How much downforce does the Ferrari F80 generate?',
          answer: 'The F80 generates 2,315 pounds (1,050 kg) of downforce at 155 mph, more than any road-legal Ferrari ever produced, through ground-effect aerodynamics and an active rear wing.',
        },
        {
          question: 'Does the Ferrari F80 have an electric-only mode?',
          answer: 'No. The F80\'s 2.3 kWh 800V battery pack is built exclusively to supply instant boost and torque vectoring for maximum lap times. There is no zero-emissions electric range option.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The pinnacle of the Prancing Horse has evolved. As the direct successor to the LaFerrari, the <strong>Ferrari F80</strong> marks a historic shift in how the Italian icon defines absolute track performance. By abandoning the traditional V12 in favor of a cutting-edge, Le Mans-winning hybrid architecture, Ferrari has created its most powerful and aerodynamically radical road-legal vehicle to date.
        </p>

        <p>
          Limited to just 799 units globally, with all allocations fully spoken for prior to its public launch, the F80 carries a starting price tag of approximately <strong>$3.9 million (3.6 million euros)</strong> before optional customization.
        </p>

        <h2>The Le Mans-Derived Powertrain | 1,184 HP Tri-Motor Hybrid</h2>

        <p>
          Rather than using an atmospheric twelve-cylinder engine, Ferrari built the F80's powertrain entirely around the lessons learned from their championship-winning 499P Le Mans Hypercar program.
        </p>

        <p>
          <strong>The F163CF Combustion V6:</strong> A 3.0-liter, 120-degree twin-turbocharged V6 that screams to a <strong>9,200 rpm redline</strong>. On its own, the internal combustion engine generates an incredible <strong>888 horsepower</strong>, a record-setting 300 hp per liter.
        </p>

        <p>
          <strong>The Tri-Motor Electric Setup:</strong> The hybrid infrastructure consists of three bespoke electric motors. Two independent motors reside on the front axle to provide e-4WD torque vectoring, while a third sits between the V6 and the 8-speed dual-clutch transmission to harvest energy and erase turbo lag.
        </p>

        <p>
          Combined, the F80 pumps out a staggering <strong>1,184 horsepower</strong>. Thanks to its front-axle traction, the hypercar flies from <strong>0 to 62 mph (100 km/h) in 2.15 seconds</strong> and hits a top speed of 217 mph.
        </p>

        <h2>Active Aerodynamics | 2,315 lbs of Extreme Downforce</h2>

        <p>
          Like its chief rival, the McLaren W1, the F80 is designed entirely as a ground-effect machine, transforming completely depending on speed and cornering force.
        </p>

        <p>
          <strong>The Single-Seater "1+" Monocoque:</strong> The structural carbon-fiber tub is incredibly narrow. Ferrari created an asymmetrical layout where the passenger seat is fixed, unadjustable, and pushed slightly back into the frame. This cocoon design keeps the cockpit incredibly compact, giving the bodywork clean air channels.
        </p>

        <p>
          <strong>F1-Inspired S-Duct:</strong> The prominent black visor nose conceals a massive triplane wing structure and an F1-derived S-Duct. Air is drawn under the nose and forcefully expelled over the hood, generating vast front-end downforce.
        </p>

        <p>
          <strong>Active Long Tail and Rear Diffuser:</strong> The engine and transmission were purposefully tilted upward by 1.3 degrees. This slight slant leaves room for a massive 1.8-meter underbody venturi diffuser. Paired with a dynamic rear wing that infinitely adjusts between High Downforce and Low Drag modes, the F80 generates a jaw-dropping <strong>2,315 pounds (1,050 kg) of downforce</strong> at 155 mph.
        </p>

        <h2>Ferrari F80 vs McLaren W1 | Technical Comparison</h2>

        <table>
          <thead>
            <tr>
              <th>Specification</th>
              <th>Ferrari F80 (2026)</th>
              <th>McLaren W1 (2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Engine Configuration</td>
              <td>3.0L Twin-Turbo Hybrid V6</td>
              <td>4.0L Twin-Turbo Hybrid V8</td>
            </tr>
            <tr>
              <td>Drivetrain</td>
              <td><strong>All-Wheel Drive</strong> (Torque Vectoring)</td>
              <td>Rear-Wheel Drive Only</td>
            </tr>
            <tr>
              <td>Total Peak Power</td>
              <td>1,184 hp</td>
              <td><strong>1,258 hp</strong></td>
            </tr>
            <tr>
              <td>0-62 mph (100 km/h)</td>
              <td><strong>2.15 seconds</strong></td>
              <td>2.7 seconds</td>
            </tr>
            <tr>
              <td>0-124 mph (200 km/h)</td>
              <td><strong>5.75 seconds</strong></td>
              <td>5.8 seconds</td>
            </tr>
            <tr>
              <td>Maximum Downforce</td>
              <td><strong>2,315 lbs</strong> at 155 mph</td>
              <td>2,205 lbs at 174 mph</td>
            </tr>
            <tr>
              <td>Production Run</td>
              <td><strong>799 Units</strong></td>
              <td>399 Units</td>
            </tr>
            <tr>
              <td>Base Price</td>
              <td>~$3,900,000</td>
              <td><strong>~$2,100,000</strong></td>
            </tr>
          </tbody>
        </table>

        <h2>The "1+" Cockpit | Driver-Centric Asymmetry</h2>

        <p>
          To keep the car's exterior footprint as aerodynamically efficient and narrow as possible, Ferrari built the cabin strictly around the driver. The driver's cockpit is a bold red racing seat, while the passenger seat is black, unadjustable, and recessed further back into the bulkhead padding to effectively blend into the interior trim. This asymmetrical layout, which Ferrari calls the "1+" configuration, prioritizes the driver's position at the center of the car's aerodynamic and structural design.
        </p>

        <h2>Active Suspension | No Anti-Roll Bars</h2>

        <p>
          The F80 uses a 48V active suspension system featuring four independent actuators. The car lacks traditional physical anti-roll bars. Instead, the smart dampers instantaneously adjust ride height, pitch, and body roll mid-corner to keep the ground-effect floor perfectly sealed to the asphalt. This system is critical to maintaining the aerodynamic performance of the underbody diffuser, which depends on consistent ride height to generate maximum downforce.
        </p>

        <h2>Availability | All 799 Units Sold Out</h2>

        <p>
          All 799 production units of the Ferrari F80 were allocated to existing Ferrari clients before the public reveal. The 799-unit run is the largest limited production run in Ferrari's hypercar lineage, reflecting the brand's growing global customer base while maintaining exclusivity. The only path to an F80 is the secondary market, where prices are already reported to be well above the sticker.
        </p>

        <p>
          For context on how the F80 compares to its rivals, see the <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">Cars hub</Link> and the <Link href="/cars/mclaren-w1-hybrid-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">McLaren W1</Link>, which takes a different engineering philosophy with rear-wheel drive and a V8 heart.
        </p>

      </div>
    </NewsArticle>
  );
}
