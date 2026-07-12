import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/cars/mclaren-w1-hybrid-hypercar-price-specs-2026';
const URL_PATH = '/cars/mclaren-w1-hybrid-hypercar-price-specs-2026';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/cars-mclaren-w1-hybrid-hypercar-price-specs-2026.jpg';

export const metadata: Metadata = {
  title: 'McLaren W1 | Price, Specs, Powertrain, and 2026 Release',
  description:
    'The McLaren W1 is a 1,258hp hybrid hypercar priced at $2.1 million, limited to 399 units. Powered by a 4.0L twin-turbo V8 and an IndyCar-derived electric motor, it features ground-effect aerodynamics and an Active Long Tail wing generating 2,205 lbs of downforce.',
  keywords: [
    'McLaren W1',
    'McLaren W1 price',
    'McLaren W1 specs',
    'McLaren W1 horsepower',
    'McLaren W1 0-124 mph',
    'McLaren W1 vs P1',
    'McLaren W1 hybrid hypercar',
    'McLaren W1 Active Long Tail',
    'McLaren W1 MHP-8 powertrain',
    'McLaren W1 Aerocell',
    'McLaren W1 2026',
    'McLaren W1 downforce',
    'McLaren W1 weight',
    'McLaren W1 electric range',
    'McLaren W1 hydraulic steering',
    'McLaren W1 rear-wheel drive',
    'McLaren W1 production units',
    'McLaren W1 50th anniversary',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'McLaren W1 | 1,258 HP Hybrid Hypercar | Price, Specs, 2026',
    description: 'The McLaren W1 is a 1,258hp hybrid hypercar priced at $2.1 million. Limited to 399 units. Ground-effect aero, Active Long Tail wing, and a 9,200 rpm V8. The spiritual successor to the P1.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-07-11T18:00:00Z',
    modifiedTime: '2026-07-11T18:00:00Z',
    section: 'Cars',
    tags: ['McLaren W1', 'Hypercar', 'Hybrid', 'McLaren', 'Supercar', 'Automotive'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'McLaren W1 | 1,258 HP | $2.1M | The P1 Successor Has Arrived',
    description: '1,258hp hybrid hypercar. 399 units at $2.1M each. Ground-effect aero. Active Long Tail. The McLaren W1 is here.',
  },
};

export default function McLarenW1Page() {
  return (
    <NewsArticle
      title="McLaren W1 | 1,258 HP Hybrid Hypercar, $2.1 Million, 399 Units"
      subtitle="The McLaren W1 is a 1,258hp hybrid hypercar priced at $2.1 million and limited to 399 units. Powered by a ground-up 4.0-liter twin-turbo V8 mated to an IndyCar-derived electric motor, it features Formula 1-inspired ground-effect aerodynamics and an Active Long Tail wing that generates 2,205 pounds of downforce."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="July 11, 2026"
      readTime="7 min read"
      author={{
        name: 'Conan D. Boyle',
        role: 'Automotive Correspondent, ObjectWire',
        avatar: '/influncer/author/conan_boyle.JPG',
        authorSlug: 'conan-boyle',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'McLaren W1 hybrid hypercar 2026 1258 horsepower' }}
      tags={['McLaren W1', 'Hypercar', 'Hybrid', 'McLaren', 'Supercar', 'Automotive', '2026']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'McLaren W1', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
        { slug: 'ferrari-f80-hypercar-price-specs-2026', title: 'Ferrari F80 | 1,184 HP Hybrid Hypercar', url: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026', publishDate: '2026', category: 'Cars' },
        { slug: 'bugatti-tourbillon-hypercar-price-specs-2026', title: 'Bugatti Tourbillon | 1,800 HP V16 Hybrid', url: '/cars/bugatti-tourbillon-hypercar-price-specs-2026', publishDate: '2026', category: 'Cars' },
      ]}
      moreFromHubLabel="Cars Coverage"
      moreFromHubHref="/cars"
      keyTakeaways={[
        'The McLaren W1 is a 1,258hp hybrid hypercar priced at $2.1 million, limited to 399 units, and serves as the spiritual successor to the McLaren P1.',
        'The MHP-8 powertrain combines a ground-up 4.0-liter twin-turbo V8 producing 916 hp with an IndyCar-derived electric motor adding 342 hp, sent exclusively to the rear wheels.',
        'The Active Long Tail wing extends 300mm rearward in Race Mode, generating 2,205 pounds of downforce at 174 mph through ground-effect aerodynamics.',
        'All 399 production units sold out at the $2.1 million base price, with the W1 achieving a 0-124 mph time of 5.8 seconds and a power-to-weight ratio of 2.45 lbs per hp.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What is the McLaren W1?',
          answer: 'The McLaren W1 is a 1,258hp hybrid hypercar priced at $2.1 million and limited to 399 units. It is the spiritual successor to the McLaren P1, unveiled to mark the 50th anniversary of McLaren\'s first Formula 1 World Championship win.',
        },
        {
          question: 'How much does the McLaren W1 cost?',
          answer: 'The McLaren W1 has a base price of $2.1 million. All 399 production units sold out at that price.',
        },
        {
          question: 'What engine does the McLaren W1 have?',
          answer: 'The W1 uses the MHP-8 powertrain, combining a ground-up 4.0-liter twin-turbocharged V8 engine producing 916 hp with an IndyCar-derived electric motor adding 342 hp, for a combined 1,258 hp and 988 lb-ft of torque.',
        },
        {
          question: 'Is the McLaren W1 all-wheel drive?',
          answer: 'No. The McLaren W1 sends its entire 1,258 hp output exclusively to the rear wheels through an 8-speed dual-clutch transmission with an integrated electronic differential.',
        },
        {
          question: 'How much downforce does the McLaren W1 generate?',
          answer: 'In full Race Mode, the W1 generates 2,205 pounds (1,000 kg) of downforce at 174 mph, achieved through ground-effect aerodynamics and the Active Long Tail wing.',
        },
        {
          question: 'Does the McLaren W1 have electric power steering?',
          answer: 'No. McLaren retained a highly tuned hydraulic power steering system to preserve the analog feel that driving enthusiasts prefer.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          The spiritual successor to the legendary McLaren P1 has arrived. Unveiled to mark the 50th anniversary of McLaren's first Formula 1 World Championship win, the <strong>McLaren W1</strong> pushes the absolute limits of road-legal engineering. Combining extreme Formula 1-inspired aerodynamics with a ferocious hybrid heart, the W1 redefines what a hypercar can achieve.
        </p>

        <p>
          With all 399 production units instantly sold out at a base price of $2.1 million each, this ultra-exclusive vehicle represents a massive leap forward from the pioneering hybrid tech introduced a decade ago.
        </p>

        <h2>The Ultimate Powertrain | V8 Engine Meets IndyCar Tech</h2>

        <p>
          At the center of the W1 is the all-new <strong>MHP-8 powertrain</strong>, a parallel plug-in hybrid system that delivers staggering speed.
        </p>

        <p>
          <strong>The Combustion Heart:</strong> The foundation is a ground-up 4.0-liter twin-turbocharged V8 engine with a flat-plane crankshaft. It screams up to a <strong>9,200 rpm redline</strong> and produces <strong>916 horsepower</strong> on its own, translating to a record-breaking 230 hp per liter.
        </p>

        <p>
          <strong>The Electric E-Module:</strong> Supplementing the V8 is an IndyCar-derived motorsport electric motor and integrated control unit (the E-module). Weighing a mere 44 pounds, this highly compact unit spins to 24,000 rpm to add <strong>342 horsepower</strong>.
        </p>

        <p>
          Together, the combined system develops a monumental <strong>1,258 horsepower and 988 lb-ft of torque</strong>, sent exclusively to the rear wheels via a hyper-fast 8-speed dual-clutch transmission featuring an integrated electronic differential.
        </p>

        <h2>Ground-Effect Aerodynamics | The Active Long Tail</h2>

        <p>
          The true engineering triumph of the W1 lies in its ability to manipulate the air around it. Built around a brand-new carbon fiber monocoque named the <strong>Aerocell</strong>, the car utilizes a raised footwell and inboard pushrod front suspension to create massive, unobstructed ground-effect air tunnels underneath the chassis.
        </p>

        <p>
          The vehicle undergoes a stunning, shape-shifting transformation when shifted into track-only <strong>Race Mode</strong>:
        </p>

        <ul>
          <li><strong>Ride Height Drop:</strong> The car lowers itself by 37 mm (1.46 inches) at the front and 17 mm (0.7 inches) at the rear to hug the ground.</li>
          <li><strong>The Active Long Tail Wing:</strong> Driven by four separate electric motors, the rear wing extends straight backward by 300 mm (11.8 inches). This moves the wing's working surface away from the body, greatly expanding the effectiveness of the rear underbody diffuser.</li>
          <li><strong>Unprecedented Downforce:</strong> In standard road settings, the car generates clean, low-drag airflow. In full Race Mode, it generates a massive <strong>2,205 pounds (1,000 kg) of downforce</strong> at 174 mph, gluing the hypercar to the track with the stability of a dedicated GT3 race car.</li>
        </ul>

        <h2>McLaren W1 vs McLaren P1 | A Decade of Evolution</h2>

        <p>
          The numbers show just how far automotive engineering has progressed since the P1 took the world by storm in 2013:
        </p>

        <table>
          <thead>
            <tr>
              <th>Specification</th>
              <th>McLaren P1 (2013-2015)</th>
              <th>McLaren W1 (2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Combined Power</td>
              <td>903 hp</td>
              <td><strong>1,258 hp</strong></td>
            </tr>
            <tr>
              <td>Combined Torque</td>
              <td>664 lb-ft</td>
              <td><strong>988 lb-ft</strong></td>
            </tr>
            <tr>
              <td>Dry Weight</td>
              <td>3,075 lbs</td>
              <td><strong>3,084 lbs</strong></td>
            </tr>
            <tr>
              <td>0-124 mph (200 km/h)</td>
              <td>6.8 seconds</td>
              <td><strong>5.8 seconds</strong></td>
            </tr>
            <tr>
              <td>Maximum Downforce</td>
              <td>1,323 lbs</td>
              <td><strong>2,205 lbs</strong></td>
            </tr>
            <tr>
              <td>Power-to-Weight Ratio</td>
              <td>4.3 lbs/hp</td>
              <td><strong>2.45 lbs/hp</strong></td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Weight-Saving Innovation:</strong> To maintain a low dry weight of 3,084 pounds, McLaren completely eliminated a physical reverse gear from the transmission. Instead, the W1 backs up by spinning the electric E-module in reverse.
        </p>

        <h2>Engineering Philosophy | Analog Feel in a Digital Age</h2>

        <p>
          In an era where many hypercar manufacturers are moving toward all-wheel drive and electric power steering, the W1 takes a deliberately different approach. McLaren routed the entire 1,258-horsepower output exclusively to the <strong>rear wheels</strong>, preserving the traditional driver engagement that defines the brand's DNA. The company explicitly rejected electric steering, retaining a highly tuned <strong>hydraulic power steering system</strong> to maintain the visceral, analog feel that driving enthusiasts demand.
        </p>

        <p>
          The 1.4 kWh battery is built for instantaneous power deployment rather than range, offering a maximum zero-emissions electric range of roughly 1.6 miles. This is not a car designed for silent commutes. It is a car designed to deliver the most extreme hybrid performance possible within the constraints of road-legal engineering.
        </p>

        <h2>Availability | All 399 Units Sold Out</h2>

        <p>
          All 399 production units of the McLaren W1 sold out at the $2.1 million base price. The car represents the most extreme expression of McLaren's engineering capability and serves as the definitive statement of the brand's 50-year motorsport heritage. For the 399 owners who secured an allocation, the W1 is not just a car. It is a piece of automotive history that will be measured against the P1, the F1, and the greatest hypercars ever built.
        </p>

      </div>
    </NewsArticle>
  );
}