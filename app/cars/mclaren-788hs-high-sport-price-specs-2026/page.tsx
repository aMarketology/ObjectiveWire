import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/cars/mclaren-788hs-high-sport-price-specs-2026';
const URL_PATH = '/cars/mclaren-788hs-high-sport-price-specs-2026';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/cars-mclaren-788hs-high-sport-price-specs-2026.jpg';

export const metadata: Metadata = {
  title: 'McLaren 788HS | Price, Specs, 777HP Pure Combustion Supercar, 200 Units',
  description:
    'The McLaren 788HS is a 777hp pure-combustion supercar limited to 200 units. Powered by a 4.0L twin-turbo V8 with no hybrid assistance, it features F1-derived S-Duct aero, Senna-sourced brakes, and a 2,789-pound dry weight. The ultimate farewell to McLaren\'s V8 supercar lineage.',
  keywords: [
    'McLaren 788HS',
    'McLaren 788HS price',
    'McLaren 788HS specs',
    'McLaren 788HS horsepower',
    'McLaren 788HS 0-60',
    'McLaren 788HS vs W1',
    'McLaren 788HS M840T engine',
    'McLaren 788HS High Sport',
    'McLaren 788HS coupe',
    'McLaren 788HS spider',
    'McLaren 788HS MSO',
    'McLaren 788HS downforce',
    'McLaren 788HS dry weight',
    'McLaren 788HS 2026',
    'McLaren Super Series finale',
    'McLaren pure combustion supercar',
    'McLaren 788HS Senna brakes',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'McLaren 788HS | 777HP Pure V8, 200 Units, $500K+ | Super Series Farewell',
    description: 'The McLaren 788HS is a 777hp pure-combustion supercar limited to 200 units. No hybrid. No weight penalty. Senna brakes. F1 aero. The ultimate analog farewell from MSO.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-07-11T22:00:00Z',
    modifiedTime: '2026-07-11T22:00:00Z',
    section: 'Cars',
    tags: ['McLaren 788HS', 'McLaren', 'Supercar', 'MSO', 'Automotive', '2026'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'McLaren 788HS | 777HP Pure V8, 200 Units, $500K+',
    description: 'The ultimate pure-combustion McLaren. No hybrid. 2,789 lbs. F1 aero. Senna brakes. 200 units. The Super Series finale.',
  },
};

export default function McLaren788HSPage() {
  return (
    <NewsArticle
      title="McLaren 788HS | 777HP Pure Combustion Supercar, 200 Units, Super Series Finale"
      subtitle="The McLaren 788HS (High Sport) is a 777hp pure-combustion supercar limited to 200 units, split evenly between coupe and spider. Powered by a heavily optimized 4.0L twin-turbo V8 with no hybrid assistance, it features F1-derived S-Duct aerodynamics, Senna-sourced carbon-ceramic brakes, and a 2,789-pound dry weight."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="July 11, 2026"
      readTime="7 min read"
      author={{
        name: 'Conan D. Boyle',
        role: 'Automotive Correspondent, ObjectWire',
        authorSlug: 'conan-boyle',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'McLaren 788HS High Sport pure combustion supercar 2026' }}
      tags={['McLaren 788HS', 'McLaren', 'Supercar', 'MSO', 'Automotive', '2026']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'McLaren 788HS', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
        { slug: 'mclaren-w1-hybrid-hypercar-price-specs-2026', title: 'McLaren W1 | 1,258 HP Hybrid Hypercar', url: '/cars/mclaren-w1-hybrid-hypercar-price-specs-2026', publishDate: 'July 11, 2026', category: 'Cars' },
        { slug: 'ferrari-f80-hypercar-price-specs-2026', title: 'Ferrari F80 | 1,184 HP Hybrid Hypercar', url: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026', publishDate: 'July 11, 2026', category: 'Cars' },
      ]}
      moreFromHubLabel="Cars Coverage"
      moreFromHubHref="/cars"
      keyTakeaways={[
        'The McLaren 788HS is a 777hp pure-combustion supercar limited to 200 units, serving as the ultimate finale to McLaren\'s Super Series lineage.',
        'Powered by a heavily optimized 4.0L twin-turbo M840T V8 with no hybrid assistance, it sends all power to the rear wheels through a 7-speed SSG with a shortened final drive.',
        'F1-derived S-Duct aerodynamics and a revised active rear wing deliver a 10% increase in downforce over the track-focused 765LT.',
        'At 2,789 pounds dry with Senna-sourced carbon-ceramic brakes and center-lock wheels, the 788HS prioritizes analog purity over electrification.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What is the McLaren 788HS?',
          answer: 'The McLaren 788HS (High Sport) is a 777hp pure-combustion supercar limited to 200 units. It is the ultimate evolution of McLaren\'s Super Series bloodline, created by McLaren Special Operations as a lightweight track weapon with no hybrid assistance.',
        },
        {
          question: 'How much does the McLaren 788HS cost?',
          answer: 'The McLaren 788HS is estimated at approximately $500,000 or more, with each of the 200 units bespoke-tailored by McLaren Special Operations.',
        },
        {
          question: 'What is the difference between the McLaren 788HS and the W1?',
          answer: 'The 788HS is a pure-combustion supercar (777hp, 2,789 lbs, no hybrid) focused on analog driving purity. The W1 is a 1,258hp plug-in hybrid hypercar with ground-effect aero, electric motors, and a $2.1 million price tag. They represent completely different engineering philosophies.',
        },
        {
          question: 'Is the McLaren 788HS all-wheel drive?',
          answer: 'No. The 788HS sends all 777 horsepower exclusively to the rear wheels through a 7-speed Seamless Shift Gearbox with a shortened final drive ratio.',
        },
        {
          question: 'How many McLaren 788HS will be built?',
          answer: 'Only 200 examples globally, split evenly between 100 fixed-head Coupes and 100 open-top Spiders.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Unveiled as the crowning achievement of the second-generation Super Series bloodline, the <strong>McLaren 788HS (High Sport)</strong> stands as the raw, pure-combustion finale to the legendary lineage that began with the 720S and evolved through the 765LT and 750S. While the automotive landscape pivots aggressively toward heavy hybridization, McLaren Special Operations (MSO) created the 788HS to be the ultimate lightweight track weapon free from electric assistance.
        </p>

        <p>
          Production is strictly limited to just <strong>200 examples globally</strong>, split evenly between 100 fixed-head Coupes and 100 open-top Spiders, with every single unit uniquely bespoke-tailored by MSO.
        </p>

        <h2>Technical Architecture | Pure Power, Track Aerodynamics</h2>

        <p>
          Instead of introducing entirely new platforms, the 788HS acts as a hyper-focused maximization of McLaren's highly celebrated V8 supercar foundations.
        </p>

        <p>
          <strong>The M840T V8 Screamer:</strong> Powered by a heavily optimized 4.0-liter twin-turbocharged flat-plane V8 engine, the 788HS generates <strong>788 metric horsepower (777 hp)</strong> and <strong>590 lb-ft of torque</strong>. It sends all power straight to the rear wheels via a 7-speed Seamless Shift Gearbox (SSG) featuring a shortened final drive ratio for lightning-fast acceleration.
        </p>

        <p>
          <strong>F1-Derived Aerodynamics:</strong> The bodywork features a multi-zone carbon fiber front splitter, an integrated Formula 1-inspired nose <strong>S-Duct</strong> that funnels air smoothly over the cabin, and a heavily revised high-rise active rear wing. Working together with an intricate rear diffuser, the aero package yields a massive <strong>10 percent increase in downforce over the track-focused 765LT</strong>.
        </p>

        <p>
          <strong>Chassis and Braking Upgrades:</strong> The vehicle sits <strong>5 mm lower</strong> than the standard 750S on a retuned Proactive Chassis Control III linked-hydraulic suspension. To bring the lightweight 2,789-pound dry frame to an instant stop, McLaren bolted on heavy-duty carbon-ceramic brake discs grabbed directly from the extreme <strong>McLaren Senna</strong> track car. For the first time in this specific chassis bloodline, it rolls out on lightweight, forged <strong>center-lock wheels</strong>.
        </p>

        <h2>McLaren 788HS vs McLaren W1 | Two Philosophies</h2>

        <p>
          While both cars showcase the bleeding edge of engineering out of Woking, they represent completely different philosophies. The 788HS is the absolute apex of McLaren's legacy analog supercar engineering, while the W1 is the dawn of its next-generation hybrid hypercar future.
        </p>

        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>McLaren 788HS (Super Series Finale)</th>
              <th>McLaren W1 (Next-Gen Hypercar)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Powertrain Philosophy</td>
              <td><strong>Pure Internal Combustion</strong></td>
              <td>Parallel Plug-In Hybrid (MHP-8)</td>
            </tr>
            <tr>
              <td>Engine</td>
              <td>4.0L Twin-Turbo M840T V8</td>
              <td>Ground-up 4.0L Twin-Turbo MHP-8 V8 + E-Module</td>
            </tr>
            <tr>
              <td>Combined Power</td>
              <td>777 hp (788 PS)</td>
              <td><strong>1,258 hp</strong></td>
            </tr>
            <tr>
              <td>Combined Torque</td>
              <td>590 lb-ft</td>
              <td><strong>988 lb-ft</strong></td>
            </tr>
            <tr>
              <td>Dry Weight</td>
              <td><strong>2,789 lbs</strong></td>
              <td>3,084 lbs (Battery Penalty)</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>7-Speed SSG (Mechanical Reverse)</td>
              <td>8-Speed DCT (Electric Reverse Only)</td>
            </tr>
            <tr>
              <td>Aerodynamic Profile</td>
              <td>Track-focused Active Wing and S-Duct</td>
              <td>Morphing Ground-Effect Active Long Tail</td>
            </tr>
            <tr>
              <td>Peak Downforce</td>
              <td>~1,450 lbs</td>
              <td><strong>2,205 lbs</strong> at 174 mph</td>
            </tr>
            <tr>
              <td>Production Cap</td>
              <td><strong>200 Units</strong> (100 Coupe / 100 Spider)</td>
              <td>399 Units (All Sold Out)</td>
            </tr>
            <tr>
              <td>Base Price</td>
              <td><strong>~$500,000+</strong></td>
              <td>$2,100,000</td>
            </tr>
          </tbody>
        </table>

        <h2>Acoustic Rawness vs Hybrid Acceleration</h2>

        <p>
          The <strong>788HS</strong> relies on a bespoke engine mount calibration designed to vibrate directly into the carbon chassis structure, ensuring the unfiltered roar of the pure V8 fills the cabin, uninhibited by electric humming. The <strong>W1</strong>, by contrast, uses its 342-horsepower electric motor to silently smooth out low-end turbo lag, creating a linear, hyper-smooth rocket ship style of acceleration that pulls with massive torque from zero RPM.
        </p>

        <h2>Standard Packaging vs Extreme Single-Seater Seating</h2>

        <p>
          Inside the cabin, the <strong>788HS</strong> keeps the highly functional, daily-drivable ergonomics that made the 720S and 750S line famous, upgraded with lightweight carbon center consoles and customizable MSO racing buckets. The <strong>W1</strong> forces you into an aggressive track-ready seating position, fixing the seating arrangement entirely to the carbon frame and tilting the footwell upward to carve out massive aerodynamic airflow channels through the underbody.
        </p>

        <h2>Mechanical Purity vs Electronic Morphing</h2>

        <p>
          The active aero on the <strong>788HS</strong> functions similarly to classic supercars, deploying a raised rear flap to catch the air and balance out the nose under heavy braking. The <strong>W1</strong> mechanically drops its entire ride height, alters its active heave suspension settings, and physically pushes the rear wing backward by nearly a foot on motor-driven tracks to entirely manipulate high-speed ground effects.
        </p>

        <p>
          For the full comparison across the hypercar landscape, see the <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">Cars hub</Link> and the <Link href="/cars/mclaren-w1-hybrid-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">McLaren W1</Link> and <Link href="/cars/ferrari/ferrari-f80-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">Ferrari F80</Link>.
        </p>

      </div>
    </NewsArticle>
  );
}