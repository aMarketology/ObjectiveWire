import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/cars-toyota-gr-gt-2027-641hp-hybrid-v8.jpg';

export const revalidate = 86400;

const SLUG = '/cars/toyota/gr-gt/2027';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Toyota GR GT | 641-HP V8 Hybrid Front-Engine Supercar',
  description:
    'Toyota has unveiled the GR GT, a front-engine supercar born from its GT3 racing program, powered by a 641-horsepower twin-turbo V8 hybrid system.',
  keywords: [
    'Toyota GR GT 3 V8 hybrid',
    'Toyota Gazoo Racing GR GT specs',
    'Toyota GR GT3 road car twin turbo V8',
    '641 hp hybrid front engine supercar',
    'Toyota Gazoo Racing halo sports car',
    'Toyota GR GT price',
    'Toyota GR GT 2027 specifications',
    'Toyota hybrid V8 supercar',
    'Gazoo Racing GT3 road car',
    'Toyota front mid engine transaxle',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Track-Bred Thunder | Toyota Unveils the 641-HP GR GT Hybrid V8',
    description:
      'Born directly out of Gazoo Racing\'s top-tier GT3 program, the extreme front-engine Toyota GR GT packs a 641-horsepower twin-turbo V8 hybrid setup.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-09-23T21:00:00Z',
    modifiedTime: '2026-09-23T21:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Toyota GR GT 641 hp V8 hybrid front engine supercar' }],
    tags: ['Toyota', 'Gazoo Racing', 'GR GT', 'Supercar', 'Hybrid V8', 'Automotive'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gazoo Racing\'s Road Titan | The Twin-Turbo Hybrid Toyota GR GT',
    description: '641 HP. A GT3-derived spaceframe. A front mid-engine transaxle layout. The GR GT is here.',
    images: [OG_IMAGE],
  },
};

export default function ToyotaGRGTPage() {
  return (
    <>
      <NewsArticleSchema
        title="Toyota GR GT | 641-HP V8 Hybrid Front-Engine Supercar"
        description="Toyota has unveiled the GR GT, a front-engine supercar born from its GT3 racing program, powered by a 641-horsepower twin-turbo V8 hybrid system."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-09-23T21:00:00Z"
        modifiedTime="2026-09-23T21:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Cars"
        keywords={[
          'Toyota GR GT 3 V8 hybrid',
          'Toyota Gazoo Racing GR GT specs',
          'Toyota GR GT3 road car twin turbo V8',
        ]}
      />

      <NewsArticle
        title="Born on the Circuit | Toyota Unveils the 641-HP GR GT Front-Engine Hybrid Supercar"
        subtitle="For years, Gazoo Racing has pushed race-derived technology into customer hands. Now the division has reached its zenith with the GR GT, a dedicated front-mid-engine supercar born from Toyota's GT3 racing program, producing 641 horsepower from a twin-turbo V8 hybrid."
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
        thumbnail={{ src: OG_IMAGE, alt: 'Toyota GR GT 641 hp V8 hybrid front engine supercar' }}
        tags={['Toyota', 'Gazoo Racing', 'GR GT', 'Supercar', 'Hybrid V8', 'Automotive', '2027']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Toyota', item: '/cars/toyota' },
          { name: 'GR GT', item: SLUG },
        ]}
        keyTakeaways={[
          'The Toyota GR GT is a front-engine supercar born from Gazoo Racing\'s top-tier GT3 customer racing program, adapted for public roads as a dedicated halo vehicle.',
          'It is powered by a high-revving 4.0-liter twin-turbocharged V8 mated to a hybrid transmission, producing a combined 641 horsepower sent to the rear wheels.',
          'Toyota achieved a 48:52 front-to-rear weight distribution by pushing the V8 as far back as possible into a front mid-engine layout and pairing it with a rear-mounted transaxle hybrid transmission.',
          'The GR GT uses a carbon-fiber and aluminum spaceframe chassis with a long-nose silhouette, active aero, and an integrated swan-neck rear wing.',
          'The cabin features carbon-fiber bucket seats, a yoke-style motorsport steering wheel, and integrated telemetry controls for high-speed circuit runs.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Toyota GR GT?',
            answer:
              'The Toyota GR GT is a front-engine supercar born from Gazoo Racing\'s GT3 racing program. It pairs a 4.0-liter twin-turbocharged V8 with a hybrid system for a combined 641 horsepower.',
          },
          {
            question: 'How much horsepower does the Toyota GR GT have?',
            answer:
              'The GR GT produces 641 horsepower from its twin-turbocharged V8 and hybrid system, sent to the rear wheels through a transaxle layout.',
          },
          {
            question: 'What engine is in the Toyota GR GT?',
            answer:
              'The GR GT uses a newly developed 4.0-liter twin-turbocharged V8 engine, positioned in a front mid-engine layout and paired with a rear-mounted transaxle hybrid transmission.',
          },
          {
            question: 'Is the Toyota GR GT based on the GR GT3 concept?',
            answer:
              'Yes. The GR GT is built from the ground up as a road-going evolution of Toyota\'s GT3 customer racing program, sharing its architecture from the GT3-derived spaceframe chassis.',
          },
          {
            question: 'What is the weight distribution of the Toyota GR GT?',
            answer:
              'Toyota achieved an ideal 48:52 front-to-rear weight distribution by pushing the V8 behind the front axle line into a front mid-engine layout and using a rear transaxle.',
          },
        ]}
        moreFromHub={[
          { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
          { slug: 'audi-nuvolari-1001hp-f1-hybrid-supercar', title: 'Audi Nuvolari | 1,001-HP F1 Hybrid Supercar', url: '/cars/audi/nuvolari-1001hp-f1-hybrid-supercar', publishDate: '2026', category: 'Cars' },
          { slug: 'aston-martin-valhalla-1000hp-mid-engine-hybrid-2027', title: 'Aston Martin Valhalla | 1,000-HP Mid-Engine Hybrid', url: '/cars/aston-martin-valhalla-1000hp-mid-engine-hybrid-2027', publishDate: '2026', category: 'Cars' },
        ]}
        moreFromHubLabel="Cars Coverage"
        moreFromHubHref="/cars"
      >
        <p>
          For years, Toyota's Gazoo Racing (GR) motorsport arm has been systematically proving that the world's largest
          automaker hasn't lost its passion for pure, unadulterated performance. From the rallying-bred GR Yaris to the
          track-honed GR Supra, the performance division has continuously pushed race-derived technology into customer
          hands.
        </p>

        <p>
          Now, Gazoo Racing has reached its absolute zenith with the official debut of the <strong>Toyota GR GT</strong>.
          Born directly out of Toyota's top-tier international GT3 customer racing program, the GR GT is built from the
          ground up as a dedicated race car adapted for public roads. Rejecting mid-engine trends in favor of a classic,
          long-nose endurance layout, the GR GT establishes a new benchmark for front-engine performance engineering.
        </p>

        <h2>The Powertrain | Twin-Turbo V8 Meets Hybrid Assist</h2>

        <p>
          At the physical core of the GR GT sits a newly developed, high-revving <strong>4.0-liter twin-turbocharged V8
          engine</strong>. Mated to a specialized hybrid transmission, the electrified powertrain delivers a combined
          output of <strong>641 horsepower</strong>, sending massive torque directly to the rear wheels.
        </p>

        <p>
          By pushing the heavy 4.0-liter V8 engine block as far back behind the front axle line as possible, creating a
          true "front mid-engine" layout, and pairing it with a rear-mounted transaxle hybrid transmission, Toyota
          engineers achieved an ideal <strong>48:52 front-to-rear weight distribution</strong>.
        </p>

        <ul>
          <li><strong>Combustion core:</strong> 4.0-liter twin-turbocharged V8.</li>
          <li><strong>Electrical augmentation:</strong> high-output performance hybrid system.</li>
          <li><strong>Total system power:</strong> 641 horsepower.</li>
          <li><strong>Drivetrain:</strong> front mid-engine, rear-wheel drive transaxle layout.</li>
        </ul>

        <h2>GT3-Derived Aerodynamics and Spaceframe Chassis</h2>

        <p>
          The structural architecture of the GR GT relies heavily on an ultra-lightweight, high-rigidity carbon-fiber and
          aluminum spaceframe chassis, keeping the vehicle's curb weight strictly optimized for track aggression. A
          long-nose silhouette maximizes front downforce while housing high-efficiency radiator ducting, and a functional
          front splitter with canards channels high-velocity airflow through the front wheel arches. At the rear, an
          integrated diffuser and swan-neck wing produce race-grade downforce at high track speeds.
        </p>

        <h2>Cockpit Ergonomics | Purpose-Built Motorsport</h2>

        <p>
          Inside the cabin, the GR GT strips away superfluous luxury fluff in favor of raw, driver-centric functionality.
          Occupants sit deeply recessed within carbon-fiber bucket seats, positioned low near the car's center of gravity.
          A yoke-style, multi-function motorsport steering wheel houses critical drive-mode dials, traction control
          sensitivity toggles, and integrated telemetry logging controls, allowing drivers to adjust vehicle parameters
          on the fly.
        </p>

        <h2>The Halo Horizon for Gazoo Racing</h2>

        <p>
          The arrival of the GR GT signals a monumental shift in Toyota's global brand identity. By transferring its
          top-tier GT3 homologation technology directly into a street-legal halo supercar, Gazoo Racing reinforces its
          commitment to keeping motorsport passion alive in the modern era.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.youtube.com/watch?v=vjNiCNZBofA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch the GR GT Reveal
          </a>
          <a
            href="https://www.youtube.com/watch?v=9__i1VDK8EM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch GR GT Track Footage
          </a>
        </div>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://toyotagazooracing.com/news/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Toyota Gazoo Racing Global Newsroom | GT3 Development and GR GT Technical Specifications</a></li>
          <li><a href="https://www.caranddriver.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Car and Driver | Toyota GR GT3 Concept Evolves into 641-HP V8 Hybrid Road Car</a></li>
          <li><a href="https://www.topgear.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Top Gear | Gazoo Racing Details the Front-Engine V8 Hybrid GR GT</a></li>
          <li><a href="https://www.motortrend.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Motor Trend | Toyota GR GT Overview: Specs, V8 Hybrid Powertrain, and Track Heritage</a></li>
        </ul>

        <p>
          For more automotive coverage, visit the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            Cars hub
          </Link>
          , or read our reports on the{' '}
          <Link href="/cars/audi/nuvolari-1001hp-f1-hybrid-supercar" className="text-blue-600 hover:text-blue-800 underline">
            Audi Nuvolari F1 hybrid supercar
          </Link>{' '}
          and the{' '}
          <Link href="/cars/aston-martin-valhalla-1000hp-mid-engine-hybrid-2027" className="text-blue-600 hover:text-blue-800 underline">
            Aston Martin Valhalla mid-engine hybrid
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}