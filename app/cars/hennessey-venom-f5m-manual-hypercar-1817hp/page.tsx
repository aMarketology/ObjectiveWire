import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/cars-hennessey-venom-f5m-manual-hypercar-1817hp.jpg';

export const revalidate = 86400;

const SLUG = '/cars/hennessey-venom-f5m-manual-hypercar-1817hp';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Hennessey Venom F5-M | 1,817-HP Manual Hypercar, $2.65M',
  description:
    'Hennessey has revealed the Venom F5-M Roadster, a $2.65 million, 1,817-horsepower hypercar with an open-gate six-speed manual shifter, making it the most powerful manual production car ever built.',
  keywords: [
    'Hennessey Venom F5 M manual hypercar',
    '1817 hp gated six speed manual transmission',
    'world most powerful manual car',
    'Fury V8 twin turbo Roadster',
    'gated shifter billet aluminum Hennessey',
    'Honey Newspaper automotive',
    'Venom F5-M price',
    'Hennessey Venom F5-M specs',
    'most powerful manual transmission car',
    'Hennessey Special Vehicles 2026',
    'Venom F5-M Roadster Monterey',
    'manual hypercar 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Analog Anarchy | Hennessey Venom F5-M Is the World\'s Most Powerful Manual Hypercar',
    description:
      '1,817 horsepower. Six-speed gated manual. Just 12 units at $2.65 million. Hennessey has built the most powerful manual production car in history.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-09-22T18:00:00Z',
    modifiedTime: '2026-09-22T18:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Hennessey Venom F5-M manual hypercar gated shifter' }],
    tags: ['Hennessey', 'Venom F5-M', 'Manual Hypercar', 'Hypercar', 'Automotive'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Three-Pedal Titan | Hennessey Venom F5-M Manual Hypercar',
    description: '1,817 HP. A gated six-speed. Three pedals. The most powerful manual car ever built is here.',
    images: [OG_IMAGE],
  },
};

export default function HennesseyVenomF5MPage() {
  return (
    <>
      <NewsArticleSchema
        title="Hennessey Venom F5-M | 1,817-HP Manual Hypercar, $2.65M"
        description="Hennessey has revealed the Venom F5-M Roadster, a $2.65 million, 1,817-horsepower hypercar with an open-gate six-speed manual shifter, making it the most powerful manual production car ever built."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-09-22T18:00:00Z"
        modifiedTime="2026-09-22T18:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Cars"
        keywords={[
          'Hennessey Venom F5 M manual hypercar',
          '1817 hp gated six speed manual transmission',
          'world most powerful manual car',
        ]}
      />

      <NewsArticle
        title="Analog Anarchy | Hennessey Unveils the Venom F5-M, the World's Most Powerful Manual Hypercar"
        subtitle="Unveiled during Monterey Car Week, the Hennessey Venom F5-M Roadster pairs a 1,817-horsepower twin-turbocharged 6.6-liter Fury V8 with a custom open-gate six-speed manual gearbox, making it the most powerful manual-transmission production car in history."
        category="Cars"
        categoryColor="red"
        topicTag="automotive"
        publishDate="September 22, 2026"
        readTime="6 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Automotive Correspondent, Objective Wire',
          avatar: '/influncer/author/conan_boyle.JPG',
          authorSlug: 'conan-boyle',
        }}
        slug={SLUG}
        url={SLUG}
        thumbnail={{ src: OG_IMAGE, alt: 'Hennessey Venom F5-M manual hypercar gated shifter' }}
        tags={['Hennessey', 'Venom F5-M', 'Manual Hypercar', 'Hypercar', 'Automotive', '2026']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Hennessey Venom F5-M', item: SLUG },
        ]}
        keyTakeaways={[
          'The Hennessey Venom F5-M Roadster is the most powerful manual-transmission production car in history, pairing a 1,817-horsepower twin-turbocharged 6.6-liter Fury V8 with an open-gate six-speed manual gearbox.',
          'Priced at $2.65 million and limited to just 12 bespoke units, all of which sold out before the public reveal at Monterey Car Week.',
          'The cockpit features a gated shifter carved from a solid block of billet aluminum, topped with an anodized aluminum and carbon-fiber shift knob, with a custom-tuned linkage for tactile feedback.',
          'The F5-M introduces a 55-inch carbon-fiber dorsal fin flowing from the roof scoop to the rear decklid for directional stability, plus a redesigned front splitter and active carbon wing.',
          'The center console was completely redesigned around the shifter, replacing touchscreen controls with machined aluminum rotary switches and stripping the steering wheel of redundant drive-mode buttons.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Hennessey Venom F5-M?',
            answer:
              'The Hennessey Venom F5-M Roadster is a limited-production hypercar from Texas-based Hennessey Special Vehicles that pairs a 1,817-horsepower twin-turbocharged V8 with an open-gate six-speed manual transmission, making it the most powerful manual production car ever built.',
          },
          {
            question: 'How much does the Hennessey Venom F5-M cost?',
            answer:
              'The Venom F5-M is priced at $2.65 million. It is limited to just 12 units, all of which sold out before the public reveal.',
          },
          {
            question: 'How much horsepower does the Venom F5-M have?',
            answer:
              'The Venom F5-M produces 1,817 horsepower and 1,193 lb-ft of torque from a twin-turbocharged 6.6-liter Fury V8 engine, sent entirely to the rear wheels.',
          },
          {
            question: 'What is the weight-to-power ratio of the Venom F5-M?',
            answer:
              'The Venom F5-M has a dry weight of approximately 3,050 pounds, giving it a weight-to-power ratio of roughly 1.8 pounds per horsepower.',
          },
          {
            question: 'Is the Venom F5-M manual or automatic?',
            answer:
              'The Venom F5-M is manual. It uses a custom CIMA six-speed open-gate manual transmission with a physical mechanical linkage, operated through a gated shifter carved from billet aluminum.',
          },
        ]}
        moreFromHub={[
          { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
          { slug: 'mclaren-w1-hybrid-hypercar-price-specs-2026', title: 'McLaren W1 | 1,258 HP Hybrid Hypercar', url: '/cars/mclaren-w1-hybrid-hypercar-price-specs-2026', publishDate: '2026', category: 'Cars' },
          { slug: 'bugatti-tourbillon-v16-hybrid-reveal-2026', title: 'Bugatti Tourbillon | 1,800 HP V16 Hybrid', url: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026', publishDate: '2026', category: 'Cars' },
        ]}
        moreFromHubLabel="Cars Coverage"
        moreFromHubHref="/cars"
      >
        <p>
          In an era where modern hypercars are increasingly defined by automated dual-clutch paddle shifters, complex
          hybrid batteries, and drive-by-wire computer algorithms, Texas-based boutique manufacturer{' '}
          <strong>Hennessey Special Vehicles</strong> has delivered a glorious, unapologetic love letter to raw mechanical
          engagement.
        </p>

        <p>
          Unveiled during Monterey Car Week, the brand-new <strong>Hennessey Venom F5-M Roadster</strong> officially
          claims the title of <strong>the most powerful manual-transmission production car in human history</strong>.
          By mating Hennessey terrifying 1,817-horsepower, twin-turbocharged 6.6-liter "Fury" V8 engine to a
          custom-engineered open-gate six-speed manual gearbox, the boutique brand has created a driving machine that
          completely defies the automated direction of modern automotive engineering.
        </p>

        <p>
          Priced at an eye-watering <strong>$2.65 million</strong>, and strictly limited to an ultra-exclusive production
          run of just <strong>12 bespoke units</strong> (all of which sold out prior to the public reveal), the Venom F5-M
          is engineered for the pure, visceral joy of driving rather than chasing millisecond track lap records.
        </p>

        <h2>Mechanical Mastery | The Open-Gate Shift Mechanism</h2>

        <p>
          Mating nearly two thousand horsepower to a physical clutch pedal and a hand-operated shifter is a monumental
          mechanical challenge. In standard paddle-shift hypercars, electronic control units manage torque delivery during
          gear changes to protect the drivetrain from catastrophic mechanical failure. In the F5-M, that responsibility
          falls entirely onto the left foot and right hand of the driver.
        </p>

        <p>At the physical heart of the cockpit sits a bespoke, exposed gated shifter carved from a solid block of billet
        aluminum, topped with an anodized aluminum and carbon-fiber shift knob. Hennessey engineers developed a custom-tuned
        shift linkage that provides tactile feedback with every gear selection, with precise laser-etched slots allowing the
        driver to hear the crisp, metallic clack-clack of the shifter moving between ratios as the twin-turbo V8 screams
        toward its 8,000 RPM redline.</p>

        <h2>Aerodynamic Evolution | The Dorsal Fin</h2>

        <p>
          Beyond swapping out the semi-automatic transmission, Hennessey engineering team completely overhauled the F5-M
          exterior aerodynamic package. The most striking visual change is the addition of a massive{' '}
          <strong>55-inch carbon-fiber dorsal fin</strong> that flows gracefully from the roof-mounted engine air scoop all
          the way down to the rear decklid. Inspired by prototype endurance racing cars, the fin aids directional stability
          at extreme velocities while feeding a continuous stream of pressurized cold air into the top of the Fury V8
          engine bay.
        </p>

        <h2>The Purest Analog Experience Left on Earth</h2>

        <p>
          Inside the cabin, the Venom F5-M eliminates unnecessary digital distractions. Digital HVAC controls were replaced
          with heavy, milled aluminum rotary switches that mimic the mechanical feel of the gated shifter, while the
          carbon-fiber steering wheel was stripped of redundant drive-mode buttons to keep the driver focus purely on the
          road ahead.
        </p>

        <h2>Honey Take | The Last Stand of the Third Pedal</h2>

        <p>
          The Hennessey Venom F5-M represents a heroic middle finger to the sterile, over-digitized future of the
          automobile. Taming 1,817 horsepower through a physical clutch and a gated stick shift requires genuine skill,
          absolute focus, and a deep respect for the laws of physics. John Hennessey and his team didn't build the F5-M to be
          the easiest hypercar to drive fast. They built it to be the most terrifying, thrilling, and emotionally rewarding
          car money can buy, a triumphant celebration of steel, aluminum, and gasoline that will echo for decades to come.
        </p>

        <div className="mt-6">
          <a
            href="https://www.youtube.com/watch?v=Iewp51UvBew"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch the Venom F5-M Reveal on YouTube
          </a>
        </div>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.hennesseyspecialvehicles.com/venom-f5-m-debut/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Hennessey Special Vehicles | Venom F5-M Roadster World Debut</a></li>
          <li><a href="https://www.motor1.com/news/730211/hennessey-venom-f5-m-roadster-manual/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Motor1 | Venom F5-M Is a 1,817-HP Manual Hypercar with a Gated Shifter</a></li>
          <li><a href="https://www.caranddriver.com/news/a61882101/hennessey-venom-f5-m-roadster-revealed/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Car and Driver | The 1817-HP Venom F5-M Is the World's Most Powerful Manual Car</a></li>
          <li><a href="https://www.roadandtrack.com/news/a61883112/hennessey-venom-f5-m-manual-gated-shifter/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Road & Track | Venom F5-M Roadster Pairs 1,817 HP With a Six-Speed Gated Stick</a></li>
        </ul>

        <p>
          For more automotive coverage, visit the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            Cars hub
          </Link>
          , or read our reports on the{' '}
          <Link href="/cars/mclaren-w1-hybrid-hypercar-price-specs-2026" className="text-blue-600 hover:text-blue-800 underline">
            McLaren W1 hybrid hypercar
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