import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/cars/mercedes/cle-63-mythos-v8-coupe-2026';
const URL_PATH = '/cars/mercedes/cle-63-mythos-v8-coupe-2026';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/cars-mercedes-cle-63-mythos-v8-coupe-2026.jpg';

export const metadata: Metadata = {
  title: 'Mercedes-AMG CLE 63 Mythos | V8 Coupe Specs, Price, Rarity',
  description: 'Mercedes-AMG has teased the CLE 63 Mythos, an ultra-rare, flat-plane crank V8 coupe positioned above the Black Series with 650-plus horsepower and production capped as low as 30 units.',
  keywords: [
    'Mercedes AMG CLE 63 Mythos',
    'Mercedes Mythos series second model',
    'AMG CLE Mythos V8 horsepower specs',
    'CLK 63 Black Series spiritual successor',
    'ultra limited collector grade AMG 2026',
    'extreme automotive luxury news',
    'Mercedes AMG Mythos portfolio',
    'CLE 63 Mythos price',
    'AMG flat-plane crank V8',
    'Mercedes AMG PureSpeed sibling',
    'AMG CLE Mythos production numbers',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Uncompromising Power | The Mercedes-AMG CLE Mythos Coupe',
    description: 'Positioned above the Black Series, the upcoming Mercedes-AMG CLE 63 Mythos pairs an ultra-exclusive, wide-body aesthetic with a fierce, flat-plane crank 4.0L twin-turbo V8.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-07-21T17:00:00Z',
    modifiedTime: '2026-07-21T17:00:00Z',
    section: 'Cars',
    tags: ['Mercedes-AMG', 'CLE 63 Mythos', 'AMG Mythos', 'V8', 'Automotive'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V8 Redemption | The Mercedes-AMG CLE 63 Mythos',
    description: 'A flat-plane crank V8, a swan-neck wing, and production as low as 30 units. AMG just teased its answer to the Black Series legacy.',
  },
};

export default function MercedesCLE63MythosPage() {
  return (
    <NewsArticle
      title="The Ultimate Horizon | Mercedes-AMG Teases the Ultra-Rare CLE 63 Mythos Coupe"
      subtitle="Mercedes-AMG has unsealed the first teaser images of the CLE 63 Mythos, the second entry in its collector-grade Mythos portfolio. The wide-body coupe pairs a flat-plane crank 4.0L twin-turbo V8 surpassing 650 horsepower with a production run rumored as low as 30 units, positioned above the Black Series."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="July 21, 2026"
      readTime="6 min read"
      author={{
        name: 'Conan D. Boyle',
        role: 'Automotive Correspondent, ObjectWire',
        avatar: '/influncer/author/conan_boyle.JPG',
        authorSlug: 'conan-boyle',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Mercedes-AMG CLE 63 Mythos wide-body V8 coupe teaser' }}
      tags={['Mercedes-AMG', 'CLE 63 Mythos', 'AMG Mythos', 'V8', 'Automotive', '2026']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Mercedes', item: '/cars/mercedes' },
        { name: 'CLE 63 Mythos', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
        { slug: 'gv60-magma-641hp-performance-ev-2027', title: '2027 Genesis GV60 Magma | 641-HP Performance EV', url: '/cars/genesis/gv60-magma-641hp-performance-ev-2027', publishDate: '2026', category: 'Cars' },
        { slug: 'mclaren-w1-hybrid-hypercar-price-specs-2026', title: 'McLaren W1 | 1,258 HP Hybrid Hypercar', url: '/cars/mclaren-w1-hybrid-hypercar-price-specs-2026', publishDate: '2026', category: 'Cars' },
      ]}
      moreFromHubLabel="Cars Coverage"
      moreFromHubHref="/cars"
      keyTakeaways={[
        'Mercedes-AMG has teased the CLE 63 Mythos, a wide-body, hardtop coupe and the second model in its ultra-exclusive, collector-grade Mythos portfolio, following the SL-based PureSpeed speedster.',
        'The Mythos is positioned above the Black Series, echoing the raw mechanical posture of the legendary 2008 CLK 63 AMG Black Series rather than adopting an open-top speedster format.',
        'It is powered by a 4.0-liter twin-turbocharged V8 with flat-plane crankshaft technology, targeting more than 646 to 650 horsepower and over 800 Nm of torque.',
        'Projected performance includes a 0-100 km/h time comfortably under 4.0 seconds, sent through a 9-speed multi-clutch transmission to a wide-track rear axle.',
        'Production is rumored to be capped anywhere from 250 units globally down to as few as 30 units, with pricing expected to scale well beyond typical AMG territory into hypercar range.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What is the Mercedes-AMG CLE 63 Mythos?',
          answer: 'The Mercedes-AMG CLE 63 Mythos is an ultra-rare, wide-body performance coupe and the second model in AMG\'s collector-grade Mythos portfolio, positioned above the Black Series with a flat-plane crank V8 producing more than 650 horsepower.',
        },
        {
          question: 'How much will the Mercedes-AMG CLE 63 Mythos cost?',
          answer: 'Official pricing has not been confirmed, but the CLE 63 Mythos is expected to scale well beyond normal AMG pricing into hypercar territory, reflecting its ultra-limited, collector-grade positioning.',
        },
        {
          question: 'How many Mercedes-AMG CLE 63 Mythos units will be built?',
          answer: 'Internal dealer leaks indicate production could be capped anywhere from 250 units globally down to an ultra-scarce run of just 30 units.',
        },
        {
          question: 'What engine is in the CLE 63 Mythos?',
          answer: 'The CLE 63 Mythos uses a 4.0-liter twin-turbocharged V8 with flat-plane crankshaft technology, targeting more than 646 to 650 horsepower and over 800 Nm of torque, paired with a 9-speed multi-clutch transmission.',
        },
        {
          question: 'Is the CLE 63 Mythos a convertible like the AMG PureSpeed?',
          answer: 'No. Despite early speculation, the CLE 63 Mythos is a hardtop, wide-body coupe, not an open-top speedster like the SL-based PureSpeed that preceded it in the Mythos portfolio.',
        },
        {
          question: 'What is the Mercedes-AMG Mythos portfolio?',
          answer: 'The Mythos portfolio is AMG\'s new tier of bespoke, low-volume, collector-grade halo vehicles that sit above traditional Black Series models, starting with the SL-based PureSpeed speedster and continuing with the CLE 63 Mythos coupe.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          For decades, the pinnacle of Mercedes-AMG performance was defined by two words: Black Series. Those rare, track-widened, aerodynamically aggressive weapons represented the absolute limit of what the engineering team could extract from a street-legal platform. But as the automotive landscape shifts toward high-end bespoke customization, the German luxury house is drawing a brand-new top tier.
        </p>

        <p>
          Mercedes-AMG has officially unsealed the first teaser images of its second entry in the highly exclusive, collector-grade <strong>Mythos portfolio</strong>: the <strong>Mercedes-AMG CLE 63 Mythos</strong>. Following the footsteps of the radically roofless, SL-based PureSpeed speedster, this new creation takes the sleek silhouette of the standard CLE coupe and morphs it into an uncompromising, track-bred monster that serves as a direct course correction for the brand's performance purists.
        </p>

        <h2>The Clarification | A Bewinged Hardcore Coupe, Not a Speedster</h2>

        <p>
          While initial design rumors speculated that the second Mythos vehicle might adapt another open-top speedster format, the newly unsealed winter-testing dispatches from Scandinavia have set the record straight. The upcoming Mythos is a hardtop, wide-body grand touring coupe built to echo the raw mechanical posture of the legendary <strong>2008 CLK 63 AMG Black Series</strong>.
        </p>

        <ul>
          <li><strong>Base Layer:</strong> Standard AMG performance models, such as the CLE 53.</li>
          <li><strong>Intermediate:</strong> Traditional track limits, the Black Series heritage.</li>
          <li><strong>Ultimate Tier:</strong> Mythos Series, bespoke collector-grade, low-volume halos.</li>
        </ul>

        <p>
          The design modifications are immediate and severe. The prototype vehicles showcase massively widened front and rear fenders housing integrated heat-extractor vents, a heavily revised Panamericana vertical grille, and a full carbon-fiber roof panel to slice the vehicle's center of gravity.
        </p>

        <p>
          The defining focal point, however, sits squarely on the decklid: a towering, motorsport-derived <strong>swan-neck adjustable rear wing</strong> working in tandem with a functional underbody diffuser to lock in massive high-velocity downforce.
        </p>

        <h2>The Big News | The Return of the Flat-Plane V8</h2>

        <p>
          Beyond the aggressive visual updates, the engineering choice driving the massive hype cycle surrounds what rests beneath the heavily vented hood. Following intense pushback from performance purists over the implementation of complex, heavy four-cylinder hybrid systems in lower segments, AMG is utilizing the Mythos program to execute a definitive celebration of pure internal combustion.
        </p>

        <p>
          The CLE 63 Mythos will debut a heavily untuned version of Mercedes' return-to-form <strong>4.0-liter twin-turbocharged V-8 engine</strong>.
        </p>

        <ul>
          <li><strong>Engine Architecture:</strong> 4.0L biturbo V8 with flat-plane crankshaft technology.</li>
          <li><strong>Target Output:</strong> Surpassing 646 to 650 horsepower and 800-plus Nm of torque.</li>
          <li><strong>Target Acceleration:</strong> 0-100 km/h in comfortably under 4.0 seconds.</li>
          <li><strong>Exhaust Architecture:</strong> Deep-breathing trapezoidal quad exhaust tips.</li>
        </ul>

        <p>
          Crucially, this iteration incorporates advanced <strong>flat-plane crankshaft technology</strong>. By shifting the crank geometry, the engine layout significantly alters its firing order, enabling the V8 to rev faster, breathe more efficiently at high RPMs, and emit a sharp, mechanical exhaust wail reminiscent of an endurance race car rather than a traditional cross-plane muscle car rumble.
        </p>

        <p>
          Power will be channeled via a lightning-fast 9-speed multi-clutch transmission down to an overbuilt, wide-track rear-axle platform loaded with semi-active hydraulic roll stabilization systems.
        </p>

        <h2>Unmatched Rarity and Hypercar Pricing</h2>

        <p>
          Because the Mythos sub-brand is tailored strictly for the upper echelon of global car collectors, these vehicles will never sit on standard dealership showroom floors.
        </p>

        <p>
          While final regulatory numbers are still being formalized ahead of the vehicle's official commercial rollout, internal dealer leaks indicate that production could be capped anywhere from a tight <strong>250 units globally down to an ultra-scarce run of just 30 units</strong>.
        </p>

        <table>
          <thead>
            <tr>
              <th>Operational Parameter</th>
              <th>Mercedes-AMG CLE 63 Mythos Baseline Specs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chassis Foundation</td>
              <td>Modified wide-body execution of the midsize CLE platform</td>
            </tr>
            <tr>
              <td>Aero Framework</td>
              <td>Motorsport-grade carbon fiber body kit, swan-neck wing, diffuser</td>
            </tr>
            <tr>
              <td>Interior Treatment</td>
              <td>Lightweight bucket seats, integrated structural safety cage</td>
            </tr>
            <tr>
              <td>Estimated Pricing</td>
              <td>Expected to scale comfortably out of normal range into hypercar space</td>
            </tr>
          </tbody>
        </table>

        <p>
          By building an ultra-exclusive halo car that prioritizes raw emotional mechanical connection over clinical battery efficiency, Mercedes-AMG is sending a clear signal to the rest of the industry: at the absolute top of the luxury ladder, there is still no substitute for the theater of a roaring, track-widened, and uncompromised land rocket.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://media.mercedes-benz.com/article/amg-winter-testing-mythos-sneak-peek" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Mercedes-Benz Global Media | The AMG Winter Testing Mythos Blueprint</a></li>
          <li><a href="https://thearsenale.com/blogs/magazine/amg-mythos-goes-hardcore-a-collector-grade-bewinged-cle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">TheArsenale Magazine | AMG Mythos CLE: A Collector-Grade Bewinged Coupe</a></li>
          <li><a href="https://www.motor1.com/news/795896/mercedes-amg-cle-mythos-teasers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Motor1.com | Hardcore Mercedes-AMG CLE Mythos Spied Testing</a></li>
          <li><a href="https://hypebeast.com/2026/1/mercedes-amg-mythos-cle-coupe-brings-back-extreme-v8-power" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Hypebeast Automotive | Mercedes-AMG Mythos CLE Coupe Brings Back Extreme V8 Power</a></li>
          <li><a href="https://www.autocar.co.uk/car-news/new-cars/hardcore-mythos-spec-mercedes-amg-cle-begins-cold-weather-testing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Autocar UK | Hardcore V8-Powered Mercedes-AMG CLE Begins Cold-Weather Testing</a></li>
        </ul>

        <p>
          For more automotive coverage, visit the <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">Cars hub</Link>, read our report on the <Link href="/cars/genesis/gv60-magma-641hp-performance-ev-2027" className="text-blue-600 hover:text-blue-800 underline">641-horsepower Genesis GV60 Magma</Link>, or see the <Link href="/cars/mclaren-w1-hybrid-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">McLaren W1 hybrid hypercar</Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
