import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/cars/ferrari/ferrari-hc25-special-projects';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Ferrari HC25 | Special Projects One-Off, Last V8 Spider',
  description:
    'Ferrari HC25 revealed at COTA May 15, 2026. One-of-one Special Projects build on the F8 Spider. 710hp twin-turbo V8, vertical LED DRL first for Ferrari, Moonlight Gray.',
  keywords: [
    'Ferrari HC25',
    'Ferrari HC25 specs',
    'Ferrari HC25 price',
    'Ferrari HC25 Special Projects',
    'Ferrari HC25 F8 Spider',
    'Ferrari one-off supercar',
    'Ferrari Special Projects 2026',
    'Ferrari HC25 reveal',
    'Ferrari HC25 COTA',
    'Ferrari HC25 design',
    'Ferrari one-of-one',
    'Ferrari last V8 spider',
    'Ferrari HC25 engine',
    'Ferrari HC25 horsepower',
    'Ferrari HC25 top speed',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ferrari HC25 | One-Off Special Projects, Last Pure V8 Spider',
    description:
      'Ferrari unveiled the HC25 one-of-one supercar at COTA on May 15, 2026. Based on the F8 Spider, it is the last non-hybrid twin-turbo V8 spider Ferrari will ever build.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-15T17:00:00Z',
    modifiedTime: '2026-05-15T17:00:00Z',
    section: 'Cars',
    tags: ['Ferrari', 'HC25', 'Special Projects', 'Supercar', 'One-of-One'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari HC25 | Last Pure V8 Spider, One-of-One, COTA 2026',
    description:
      '710hp TT V8, vertical boomerang LED DRL first for Ferrari, Moonlight Gray. The last non-hybrid twin-turbo V8 spider Ferrari will make.',
  },
};

export default function FerrariHC25Page() {
  return (
    <>
      <NewsArticleSchema
        title="Ferrari HC25 | Special Projects One-Off, Last V8 Spider"
        description="Ferrari HC25 revealed at COTA May 15, 2026. One-of-one Special Projects build on the F8 Spider. 710hp twin-turbo V8, vertical LED DRL first for Ferrari, Moonlight Gray."
        author="Conan D. Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        publishedTime="2026-05-15T17:00:00Z"
        modifiedTime="2026-05-15T17:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Cars"
        keywords={[
          'Ferrari HC25',
          'Ferrari HC25 specs',
          'Ferrari HC25 Special Projects',
          'Ferrari one-off supercar',
          'Ferrari last V8 spider',
        ]}
      />

      <NewsArticle
        title="Ferrari HC25 | Special Projects One-Off, Last Pure V8 Spider"
        subtitle="A one-of-one commission built on the F8 Spider platform, the HC25 closes the chapter on Ferrari's pure internal-combustion twin-turbo V8 spiders with a geometric new design language and a first for the brand: vertical boomerang LED daytime running lights."
        category="Cars"
        categoryColor="red"
        topicTag="automotive"
        publishDate="2026-05-15T17:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Cars Correspondent',
          authorSlug: 'conan-boyle',
        }}
        tags={['Ferrari', 'HC25', 'Special Projects', 'Supercar', 'One-of-One', 'F8 Spider']}
        slug="cars-ferrari-ferrari-hc25-special-projects"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: 'Ferrari', item: '/cars/ferrari' },
          { name: 'Ferrari HC25 Special Projects', item: SLUG },
        ]}
        keyTakeaways={[
          'The Ferrari HC25 is a one-of-one supercar built through Ferrari\'s Special Projects program, based on the discontinued F8 Spider with a mid-mounted 710hp twin-turbocharged 3.9-liter V8.',
          'Unveiled on May 15, 2026, at Ferrari Racing Days at Circuit of the Americas in Austin, Texas, the HC25 is the final Ferrari to use a pure internal-combustion twin-turbo V8 in an open-top spider body.',
          'The HC25 introduces vertical boomerang-style LED daytime running lights, a first for any Ferrari road car, arranged to follow the curvature of the front fenders.',
          'A gloss-black aerodynamic band runs the full length of the car, integrating engine cooling intakes and heat outlets while visually dividing the front and rear sections.',
          'Ferrari Special Projects one-off builds take approximately two years to develop, with the client working alongside Ferrari Design Center under Flavio Manzoni at every stage.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is the Ferrari HC25?',
            answer:
              'The Ferrari HC25 is a one-of-one supercar created through Ferrari\'s Special Projects division and unveiled on May 15, 2026, at the Ferrari Racing Days event at Circuit of the Americas in Austin, Texas. It is based on the discontinued F8 Spider and uses a mid-mounted 710hp twin-turbocharged 3.9-liter V8. It is the last non-hybrid pure-ICE twin-turbo V8 spider Ferrari will produce.',
          },
          {
            question: 'How much does the Ferrari HC25 cost?',
            answer:
              'Ferrari does not disclose pricing for Special Projects one-off commissions. These bespoke builds take approximately two years to develop and are created exclusively for Ferrari\'s most private clients. Production is strictly one unit.',
          },
          {
            question: 'How fast is the Ferrari HC25?',
            answer:
              'The HC25 uses the same mechanical layout as the F8 Spider, which produces 710hp and achieves 0-60 mph in approximately 2.9 seconds with a 211mph top speed. Ferrari has not announced performance upgrades over the base F8 Spider platform.',
          },
          {
            question: 'What design features are unique to the Ferrari HC25?',
            answer:
              'The HC25 introduces vertical boomerang-style LED daytime running lights, a first for Ferrari. It also features a full-length gloss-black aerodynamic band that integrates cooling intakes and heat outlets, bespoke five-spoke diamond-cut wheels, and a geometric design language drawing from the F80 and 12Cilindri.',
          },
          {
            question: 'Is the Ferrari HC25 the last V8 spider Ferrari will make?',
            answer:
              'Yes. Ferrari confirms the HC25 is the last non-hybrid twin-turbo V8 spider the brand will produce. All future Ferrari mid-engine spider models will use electrified powertrains, following the direction established by the SF90 Stradale Spider and the F80.',
          },
        ]}
        moreFromHub={[
          {
            slug: 'cars-ferrari-ferrari-sf90-stradale-spider-specs-price',
            title: 'Ferrari SF90 | 986HP Hybrid, 0-60 in 2.0s, $593,950',
            url: '/cars/ferrari/ferrari-sf90-stradale-spider-specs-price',
            category: 'Cars',
          },
          {
            slug: 'cars-ferrari-ferrari-f80-hypercar-price-specs-2026',
            title: 'Ferrari F80 | 1,184HP Hypercar, $3.735M, 799 Units',
            url: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026',
            category: 'Cars',
          },
        ]}
        moreFromHubLabel="More Ferrari"
        moreFromHubHref="/cars/ferrari"
      >
        {/* ── Intro ── */}
        <p>
          The Ferrari HC25 is a one-of-one supercar built through Ferrari&apos;s Special Projects
          program and unveiled on May 15, 2026, at Ferrari Racing Days at Circuit of the Americas in
          Austin, Texas. Based on the discontinued{' '}
          <a
            href="https://www.caranddriver.com/ferrari/f8-tributo-spider"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            F8 Spider
          </a>
          , the HC25 carries over its mid-mounted 710hp twin-turbocharged 3.9-liter V8 with no
          performance upgrades but surrounds it with an entirely new body, a pioneering LED lighting
          signature, and a bespoke interior finished in Matte Moonlight Gray with yellow accents. It
          is the final Ferrari Special Projects car to use a pure internal-combustion twin-turbo V8 in
          an open-top spider configuration, marking the end of a performance era at Maranello.
        </p>

        {/* ── Reveal ── */}
        <h2>Ferrari HC25 Reveal | COTA, Austin, May 2026</h2>
        <p>
          Ferrari chose{' '}
          <a
            href="https://www.circuitoftheamericas.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Circuit of the Americas
          </a>{' '}
          in Austin, Texas, as the stage for the HC25 debut, timed to coincide with the Ferrari
          Racing Days event on May 15, 2026. The venue is significant: COTA hosts the United States
          Grand Prix and sits at the heart of Ferrari&apos;s most passionate North American fan base.
          Revealing a one-off Special Projects creation at a racing event, rather than at a motor
          show, is consistent with Ferrari&apos;s approach of placing bespoke builds in front of
          people who understand their significance.
        </p>
        <p>
          The HC25 name follows Ferrari&apos;s Special Projects naming convention, which typically
          encodes details about the project or the client. Ferrari has not disclosed the client&apos;s
          identity, as is standard practice for the division. Each Special Projects car is
          commissioned by invitation only and built to specifications agreed between the client, the
          Ferrari Design Center, and the Ferrari engineering team.
        </p>

        {/* ── Exterior ── */}
        <h2>Ferrari HC25 Exterior | Moonlight Gray, Vertical LED DRL</h2>
        <p>
          The HC25 exterior is sharper and more geometric than the F8 Spider it is based on, with
          sculpted lines that run from the rear fenders forward to create a strong sense of motion.
          The primary body color is Matte Moonlight Gray, a bespoke non-metallic finish developed
          specifically for this commission. Finished surfaces are interrupted by a full-length
          gloss-black band that runs over the entire car, serving a dual purpose: it visually
          separates the front and rear sections, and it integrates the engine cooling intakes and
          heat outlets that a mid-engine layout requires.
        </p>
        <p>
          The most technically notable design element is the lighting signature. For the first time
          on a Ferrari road car, the LED daytime running lights are arranged vertically rather than
          horizontally. The resulting shape is a boomerang pattern that follows the contour of the
          front fenders downward. Ferrari says the design was driven by the specific proportions of
          the HC25 rather than by aesthetic preference alone, but the result is a lighting face that
          is immediately recognizable as different from any previous Ferrari model.
        </p>
        <p>
          The five-spoke wheels were designed exclusively for the HC25. Their outer edge is
          diamond-cut to a bright finish while the inner spokes use darker treatment, giving the
          wheels an illusion of greater diameter. Ferrari also reduced the visible size of the
          glasshouse, lowering the perceived body line and making the car read as longer and lower
          than the F8 Spider profile it shares underneath.
        </p>
        <p>
          The design philosophy draws from two recent Ferrari production models: the{' '}
          <Link
            href="/cars/ferrari/ferrari-f80-hypercar-price-specs-2026"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            F80 hypercar
          </Link>{' '}
          and the 12Cilindri. The HC25 is positioned as a bridge between the heritage of the V8
          mid-engine spider and the direction Ferrari intends to take future high-performance models,
          making it both a farewell and a preview.
        </p>

        {/* ── Interior ── */}
        <h2>Ferrari HC25 Interior | Bespoke Yellow Accents, Moonlight Gray Cabin</h2>
        <p>
          Inside, the HC25 continues the matte and gloss contrast theme established on the exterior.
          The Matte Moonlight Gray color extends into the cabin materials, covering the dashboard
          surfaces, seat shells, and door panels in the same non-reflective finish. Yellow accents
          appear throughout the interior, picking up cues from two sources: the yellow seen on
          Ferrari&apos;s prancing horse badges, and the yellow brake calipers that are standard on
          high-specification Ferrari road cars. The yellow appears in stitching details, piping on
          the seats, and specific trim inserts around the cabin.
        </p>
        <p>
          Ferrari applied the same attention to detail in the interior that distinguishes Special
          Projects builds from the standard configurator options available to regular customers.
          Every material choice, every surface finish, and every accent color was specified through
          the two-year development process, with the client having direct input at each stage.
        </p>

        {/* ── Engine ── */}
        <h2>Ferrari HC25 Engine | 710HP Twin-Turbo V8, Last Pure ICE Spider</h2>
        <p>
          Mechanically, the HC25 retains the F8 Spider&apos;s powertrain without modification.
          The mid-mounted 3.9-liter twin-turbocharged V8 produces 710hp and 568lb-ft of torque,
          driving the rear wheels through a 7-speed F1-derived dual-clutch transmission. The F8
          Spider achieves 0-60 mph in approximately 2.9 seconds and a 211mph top speed. Ferrari has
          not announced any changes to these figures for the HC25 commission.
        </p>
        <p>
          The absence of performance upgrades is deliberate. The HC25 is an exercise in design and
          personalization, not a power-focused special edition. The client commissioned the car to
          express a unique aesthetic direction, not to pursue lap records. The 710hp twin-turbo V8
          is already the same engine used in the{' '}
          <Link
            href="/cars/ferrari/ferrari-sf90-stradale-spider-specs-price"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            SF90 Stradale Spider
          </Link>{' '}
          as a component of the hybrid system, meaning the HC25 represents the final standalone
          application of that engine in a pure open-top supercar format at Ferrari.
        </p>

        {/* ── Special Projects ── */}
        <h2>Ferrari Special Projects | 2-Year Bespoke Development Process</h2>
        <p>
          Ferrari&apos;s Special Projects division exists to create one-of-one cars for the
          brand&apos;s most exclusive clients. The division operates separately from the standard
          production line and from the limited-series Icona and XX programs, which produce small
          runs of units for a select group of buyers. Special Projects builds are strictly singular:
          one car, one client, no duplicates.
        </p>
        <p>
          Each commission begins with a consultation between the client, the Ferrari Design Center
          led by Flavio Manzoni, and the relevant engineering teams. From that point, development
          takes approximately two years. The client remains involved throughout, approving design
          sketches, reviewing material samples, and signing off on the final specification before
          production begins. The result is a car built to Ferrari&apos;s full production quality
          standards but configured to a level of personalization that is not available through any
          other channel.
        </p>
        <p>
          Recent notable Special Projects builds include the Ferrari SP3JC, a bespoke coupe on the
          J50 platform, and the Ferrari P80/C, a track-only one-off built on the 488 GT3 chassis.
          The HC25 joins a short list of road-legal Special Projects spiders, all of which are
          regarded as among the most collectible Ferraris in existence.
        </p>

        {/* ── Era ── */}
        <h2>Ferrari HC25 | End of the Pure V8 Spider Era at Maranello</h2>
        <p>
          Ferrari&apos;s mid-engine V8 spider lineage runs from the 348 Spider through the 355
          Spider, 360 Spider, F430 Spider, 458 Spider, 488 Spider, and F8 Spider. Each generation
          used a naturally aspirated or turbocharged V8 without hybrid assistance. The{' '}
          <Link
            href="/cars/ferrari/ferrari-sf90-stradale-spider-specs-price"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            SF90 Spider
          </Link>
          , which followed the F8 Spider in Ferrari&apos;s lineup, introduced a 986hp plug-in
          hybrid system and permanent all-wheel drive, breaking with the rear-wheel-drive,
          pure-ICE formula that defined the lineage.
        </p>
        <p>
          The HC25 closes that chapter definitively. Ferrari has confirmed it is the last
          non-hybrid twin-turbo V8 spider the brand will produce. Future open-top models in the
          mid-engine V8 segment will follow the SF90&apos;s electrified architecture. For the
          client who commissioned the HC25, the car represents not just a bespoke creation but a
          final statement on a configuration that defined Ferrari&apos;s character for three
          decades. You can read more about{' '}
          <Link
            href="/cars/ferrari"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Ferrari&apos;s current and upcoming models
          </Link>{' '}
          or follow{' '}
          <Link
            href="/authors/conan-boyle"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Conan D. Boyle&apos;s coverage
          </Link>{' '}
          for the latest from Maranello.
        </p>
      </NewsArticle>
    </>
  );
}