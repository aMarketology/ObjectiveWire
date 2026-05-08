import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SourcesInterlink } from '@/components/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/cars/ferrari/ferrari-luce-electric-2026';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;
// Photo: Red sports car close-up — Hoyoun Lee (@icedcocoa) on Unsplash
// https://unsplash.com/@icedcocoa?utm_source=zwire&utm_medium=referral
const UNSPLASH_PHOTO_ID = 'photo-1696581081901-f8e0f10713b2';
const UNSPLASH_IXID = 'M3w5MTA5OTJ8MHwxfGFsbHx8fHx8fHx8fDE3NzgyMTM4OTh8';
const UNSPLASH_PHOTOGRAPHER = 'Hoyoun Lee';
const UNSPLASH_PHOTOGRAPHER_URL = 'https://unsplash.com/@icedcocoa?utm_source=zwire&utm_medium=referral';
// Minted thumbnail — watermarked, keyword-optimised, EXIF-tagged, owire.org-hosted
const OG_IMAGE = '/thumbnails/ferrari-luce-electric-2026.jpg';
const OG_IMAGE_FULL = `https://www.owire.org${OG_IMAGE}`;
const PUBLISHED = '2026-05-07T16:00:00Z';

export const metadata: Metadata = {
  title: 'Ferrari Luce | First Electric Ferrari, Price, Specs 2026',
  description:
    'Ferrari Luce revealed: 1,113hp quad-motor EV, 122 kWh 880V battery, 330-mile range, 0-62 in 2.5 seconds. Price from $530K. Global reveal May 25, 2026.',
  keywords: [
    'Ferrari Luce',
    'Ferrari Luce 2026',
    'Ferrari electric car',
    'Ferrari EV',
    'Ferrari Luce price',
    'Ferrari Luce specs',
    'Ferrari Luce horsepower',
    'Ferrari Luce range',
    'Ferrari first electric car',
    'Ferrari 1113hp electric',
    'Ferrari Luce reveal date',
    'Ferrari Luce 0-60',
    'Ferrari Luce top speed',
    'Ferrari Luce battery',
    'Ferrari quad motor EV',
    'LoveFrom Ferrari interior',
    'Ferrari Halbach array motor',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ferrari Luce | 1,113HP Electric, $530K, Reveal May 25 2026',
    description:
      'Ferrari\'s first fully electric car: quad-motor Halbach array, 880V battery, LoveFrom interior by Jony Ive. Global reveal May 25, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ZWire',
    authors: ['ZWire Auto Desk'],
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    section: 'Cars',
    images: [{ url: OG_IMAGE_FULL, width: 1200, height: 675, alt: 'Ferrari Luce four-door electric GT interior cockpit 2026' }],
    tags: ['Ferrari', 'Ferrari Luce', 'Electric Car', 'Hypercar'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari Luce | 1,113HP Electric Four-Door, Reveal May 25',
    description:
      '330-mile range, 0-62 in under 2.5 seconds. Ferrari goes fully electric. Price from $530,000.',
    images: [OG_IMAGE_FULL],
  },
};

export default function FerrariLucePage() {
  return (
    <>
      <NewsArticleSchema
        title="Ferrari Luce | First Electric Ferrari, Price, Specs 2026"
        description="Ferrari Luce: 1,113hp quad-motor electric four-door, 122 kWh 880-volt battery, 330-mile WLTP range, LoveFrom interior. Global reveal May 25, 2026. Price from $530,000."
        author="ZWire Auto Desk"
        authorUrl="https://www.owire.org/authors/zwire-auto-desk"
        publishedTime={PUBLISHED}
        modifiedTime={PUBLISHED}
        imageUrl={OG_IMAGE_FULL}
        imageWidth={1200}
        imageHeight={675}
        imageAlt="Ferrari Luce four-door electric GT interior cockpit 2026"
        articleUrl={ARTICLE_URL}
        section="Cars"
        keywords={[
          'Ferrari Luce',
          'Ferrari electric car',
          'Ferrari EV 2026',
          'Ferrari Luce price',
          'Ferrari Luce specs',
          'Ferrari Luce horsepower',
          'Ferrari first EV',
          'quad motor electric',
          'LoveFrom Ferrari',
          'Halbach array motor',
        ]}
      />

      <NewsArticle
        title="Ferrari Luce | First Electric Ferrari, Price, Specs 2026"
        subtitle="Ferrari's historic first fully electric car is a 1,113hp four-door grand tourer with a Halbach array quad-motor system, a LoveFrom-designed interior, and a global reveal locked in for May 25, 2026."
        category="Cars"
        categoryColor="red"
        topicTag="automotive"
        publishDate={PUBLISHED}
        readTime="7 min read"
        author={{ name: 'ZWire Auto Desk', role: 'Cars', authorSlug: undefined }}
        heroImage={{
          src: OG_IMAGE_FULL,
          alt: 'Ferrari Luce first electric four-door GT 2026, global reveal May 25',
          credit: `${UNSPLASH_PHOTOGRAPHER} / Unsplash`,
        }}
        thumbnail={{
          src: OG_IMAGE_FULL,
          alt: 'Ferrari Luce electric GT 2026',
        }}
        slug="ferrari-luce-electric-2026"
        url={SLUG}
        tags={['Ferrari Luce', 'Ferrari', 'Electric Car', 'Hypercar']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Ferrari', item: '/cars/ferrari' },
          { name: 'Ferrari Luce', item: SLUG },
        ]}
      >
        <p>
          Ferrari has spent 77 years defining what a car sounds like. On <strong>May 25, 2026</strong>, the brand will redefine what a Ferrari feels like without making a sound. The <strong>Luce</strong> (Italian: "light") is Ferrari's first fully electric production vehicle, a four-door grand tourer that the company says is engineered to deliver <em>supercar emotion</em> without a combustion engine. For full context on the brand's hypercar lineage, see the{' '}
          <Link href="/cars/ferrari" className="text-blue-600 hover:text-blue-800 underline">
            Ferrari hub on ZWire
          </Link>
          , including the{' '}
          <Link href="/cars/ferrari/ferrari-f80-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">
            Ferrari F80 hypercar
          </Link>
          {' '}that sits at the top of Ferrari's current lineup.
        </p>

        <p>
          The Luce is not Ferrari hedging its bets on electrification. It is the brand making a deliberate statement: that the emotional core of a Ferrari, the feeling of being pressed into your seat, the telepathic response to throttle input, can exist without a V8, V12, or hybrid screaming behind you. The starting price is estimated between <strong>$530,000 and $645,000</strong> depending on market, or approximately <strong>1.95M AED</strong> in the UAE. Global market rollouts begin in late 2026 following the May 25 reveal.
        </p>

        <h2>Ferrari Luce Powertrain | Quad-Motor Halbach Array at 880 Volts</h2>

        <p>
          The engineering centerpiece of the Luce is its motor configuration. Ferrari is using a <strong>Halbach array quad-motor setup</strong> rather than conventional permanent magnet motors. Halbach arrays use a specific magnetic field arrangement that concentrates flux on one side of the rotor, producing higher torque density per kilogram than a standard motor. Ferrari says this configuration was selected specifically to deliver the kind of instantaneous, sharp power delivery that matches the character of their combustion cars.
        </p>

        <p>
          The system runs on an <strong>880-volt architecture</strong>, a step above the 800V platforms used by Porsche and Hyundai. Higher voltage means lower current for the same power output, which translates to thinner, lighter wiring, less heat generation, and the ability to support ultra-fast charging. The battery pack is a <strong>122 kWh liquid-cooled NMC (nickel manganese cobalt)</strong> unit, chosen for its balance of energy density, thermal stability, and charge cycling longevity versus newer LFP chemistries.
        </p>

        <p>
          Combined output in <strong>boost mode: 1,113 hp (greater than 1,000 CV)</strong>. All four motors drive through Ferrari's aggressive electric torque vectoring system, which can distribute torque independently to each wheel on a millisecond timescale, far faster than any mechanical differential or even the hydraulic systems used in the{' '}
          <Link href="/cars/ferrari/ferrari-f80-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">
            F80's e-4WD system
          </Link>
          .
        </p>

        <h2>Ferrari Luce Performance | 0-62 in Under 2.5 Seconds, 193mph Cap</h2>

        <p>Ferrari's official performance targets for the Luce:</p>

        <ul>
          <li>
            <strong>0 to 62 mph (0-100 km/h):</strong> under 2.5 seconds
          </li>
          <li>
            <strong>Top speed:</strong> 193 mph (310 km/h), electronically capped
          </li>
          <li>
            <strong>WLTP range:</strong> 330 miles (estimated)
          </li>
          <li>
            <strong>DC Fast Charging:</strong> 350 kW, 10-80% in approximately 20 minutes
          </li>
        </ul>

        <p>
          The 193 mph cap is notable: Ferrari has chosen to electronically limit top speed, prioritizing sustained performance and thermal management over a headline number. The Taycan Turbo GT, the Luce's closest rival in the ultra-luxury electric four-door segment, is electronically limited to 190 mph. The Luce's 350 kW charging capability, when matched to a compatible ultra-fast charger, puts it among the fastest-charging production EVs on the market alongside the Porsche Taycan and Hyundai Ioniq 6.
        </p>

        <h2>Ferrari Luce Chassis | 48V Suspension, Four-Wheel Steering</h2>

        <p>
          Ferrari has equipped the Luce with its <strong>third-generation active 48V suspension</strong> system. The 48V sub-architecture powers the suspension actuators independently of the main 880V powertrain system, allowing instantaneous damping adjustments at each corner without drawing from the traction battery. Ferrari describes the system as capable of reading road surfaces and driver inputs simultaneously, adjusting body attitude before the driver perceives a disturbance.
        </p>

        <p>
          The Luce also carries <strong>four-wheel steering</strong>, with the rear wheels turning up to 5 degrees. At low speeds, the rear wheels turn counter to the fronts, tightening the turning circle and making the four-door footprint feel far more agile than its dimensions suggest. At highway speeds, all four wheels turn in the same direction, improving high-speed stability and reducing lane-change effort. The combination of four-wheel steering with per-wheel torque vectoring gives Ferrari engineering tools that no combustion platform could replicate.
        </p>

        <h2>Ferrari Luce Interior | LoveFrom Design by Jony Ive</h2>

        <p>
          The most unexpected element of the Luce is its interior architecture. Ferrari partnered with <strong>LoveFrom</strong>, the design studio founded by former Apple Chief Design Officer <strong>Jony Ive</strong>, to develop the Luce's cabin. Ive is responsible for the industrial design of the iPhone, MacBook, AirPods, and Apple Watch, products defined by restraint, material honesty, and the removal of anything unnecessary.
        </p>

        <p>
          Ferrari has not released full interior images ahead of the May 25 reveal, but has confirmed the collaboration and described the interior as a departure from the driver-cockpit language of current Ferrari road cars. The expectation from Ferrari's language is a four-seat cabin that prioritizes calm and presence over aggression, a logical contrast to the performance figures in the spec sheet. Ferrari calls this "supercar emotion with GT serenity."
        </p>

        <h2>Ferrari Luce vs F80 | Two Approaches to the Same Problem</h2>

        <p>
          In 2026, Ferrari will offer two cars at opposite ends of the same philosophy. The{' '}
          <Link href="/cars/ferrari/ferrari-f80-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">
            F80 at $3,735,000
          </Link>{' '}
          is the ultimate expression of Ferrari's combustion-hybrid program, a 1,184hp mid-engine screamer built in 799 units. The Luce at $530,000 to $645,000 is Ferrari's attempt to own the ultra-luxury electric GT segment outright before competitors can establish it.
        </p>

        <p>
          The price gap is significant. The Luce, despite its 1,113hp and LoveFrom interior, costs roughly one-sixth of an F80. Ferrari is clearly positioning the Luce as a volume driver, relatively speaking, in the mould of the SF90 Stradale rather than a limited hypercar. The brand will want the Luce to be the reference point for what a luxury EV can be, the same way the 911 is the reference point for what a sports car should feel like.
        </p>

        <h2>Ferrari Luce Full Specs | Official Technical Summary</h2>

        <table
          style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', marginBottom: '1rem' }}
        >
          <thead>
            <tr style={{ backgroundColor: '#b91c1c', color: '#fff' }}>
              <th
                style={{
                  padding: '8px 12px',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb',
                  fontSize: '13px',
                }}
              >
                Specification
              </th>
              <th
                style={{
                  padding: '8px 12px',
                  textAlign: 'left',
                  border: '1px solid #e5e7eb',
                  fontSize: '13px',
                }}
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Powertrain</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Quad-Motor Electric (Halbach array configuration)</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Battery</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>122 kWh liquid-cooled NMC, 880-volt architecture</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Total Output</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>1,113 hp (&gt;1,000 CV) in boost mode</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Drivetrain</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>All-Wheel Drive with aggressive electric torque vectoring</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>0-62 mph (0-100 km/h)</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>&lt;2.5 seconds</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Top Speed</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>193 mph (310 km/h) electronically capped</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Range (WLTP est.)</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>330 miles</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>DC Fast Charging</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>350 kW (10-80% in approx. 20 minutes)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Suspension</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Third-gen active 48V adaptive suspension</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Steering</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Four-wheel steering</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Interior Design</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>LoveFrom (Jony Ive) collaboration</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Body Style</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Four-door grand tourer</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Starting Price</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>$530,000-$645,000 USD (approx. 1.95M AED)</td>
            </tr>
            <tr style={{ backgroundColor: '#f9fafb' }}>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Global Reveal</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>May 25, 2026</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px', fontWeight: 600 }}>Market Rollout</td>
              <td style={{ padding: '8px 12px', border: '1px solid #e5e7eb', fontSize: '13px' }}>Late 2026</td>
            </tr>
          </tbody>
        </table>

        <p>
          The Luce signals that Ferrari has committed to electrification on its own terms, refusing to simply port an EV drivetrain into an existing platform. The Halbach array motors, 880V architecture, LoveFrom interior, and 48V active suspension are all purpose-built decisions. Whether the Luce convinces Ferrari's core clientele that an EV can deliver the brand's emotional promise is the question the May 25 reveal will begin to answer. For all Ferrari coverage,{' '}
          <Link href="/cars/ferrari" className="text-blue-600 hover:text-blue-800 underline">
            follow the Ferrari hub on ZWire
          </Link>
          , and for broader supercar news see the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            ZWire Cars hub
          </Link>
          .
        </p>

        <SourcesInterlink
          accentColor="red"
          sources={[
            {
              number: 1,
              url: 'https://www.ferrari.com',
              title: 'Ferrari S.p.A. Official Site',
              description: 'Maranello product announcements and corporate communications for the Luce reveal.',
            },
            {
              number: 2,
              url: 'https://www.caranddriver.com/ferrari',
              title: 'Ferrari News | Car and Driver',
              description: 'Technical analysis and first-look coverage of Ferrari EV development.',
            },
            {
              number: 3,
              url: 'https://www.motortrend.com/cars/ferrari/',
              title: 'Ferrari Coverage | MotorTrend',
              description: 'Specs, reveal details, and expert insight on the Ferrari Luce.',
            },
            {
              number: 4,
              url: 'https://www.topgear.com/cars/ferrari',
              title: 'Ferrari | Top Gear',
              description: 'Top Gear preview and analysis of Ferrari\'s electric transition.',
            },
          ]}
          internalLinks={[
            { href: '/cars', label: 'ZWire Cars Hub' },
            { href: '/cars/ferrari', label: 'Ferrari News' },
            {
              href: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026',
              label: 'Ferrari F80 | 1,184HP Hybrid',
            },
            {
              href: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026',
              label: 'Bugatti Tourbillon | 1,800HP V16',
            },
          ]}
        />
      </NewsArticle>
    </>
  );
}
