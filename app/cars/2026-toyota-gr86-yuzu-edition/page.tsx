import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/cars/2026-toyota-gr86-yuzu-edition';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;

export const metadata: Metadata = {
  title: '2026 Toyota GR86 Yuzu Edition | Specs, Price, 860 Units',
  description:
    'The 2026 Toyota GR86 Yuzu Edition starts at $36,365 in the US and $45,025 in Canada. Limited to 860 units in North America with Brembo brakes, Sachs dampers, and exclusive yellow paint.',
  keywords: [
    '2026 Toyota GR86 Yuzu',
    'GR86 Yuzu Edition',
    'Toyota GR86 Yuzu price',
    'GR86 Yuzu specs',
    'GR86 Yuzu limited edition',
    '2026 GR86 special edition',
    'Toyota GR86 Brembo brakes',
    'GR86 Yuzu Sachs dampers',
    'GR86 Yuzu North America',
    'Toyota sports car 2026',
    'GR86 Yuzu yellow',
    '2026 Toyota GR86 review',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: '2026 Toyota GR86 Yuzu Edition | $36,365, 860 Units, Brembo & Sachs',
    description:
      'Toyota limits the GR86 Yuzu to 860 units in North America. Exclusive yellow paint, Brembo brakes, Sachs dampers, body kit, and 18-inch matte black wheels from $36,365.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-05-15T14:00:00Z',
    modifiedTime: '2026-05-15T14:00:00Z',
    section: 'Cars',
    tags: ['Toyota', 'GR86', 'Yuzu Edition', 'Sports Car', 'Limited Edition'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 Toyota GR86 Yuzu | 860 Units, $36,365, Yellow Paint',
    description:
      'Brembo brakes, Sachs dampers, exclusive yellow, limited to 860 in North America. Is the Yuzu Edition worth the premium?',
  },
};

export default function ToyotaGR86YuzuPage() {
  return (
    <>
      <NewsArticleSchema
        title="2026 Toyota GR86 Yuzu Edition | Specs, Price, 860 Units"
        description="The 2026 Toyota GR86 Yuzu Edition starts at $36,365 in the US and $45,025 in Canada. Limited to 860 units in North America with Brembo brakes, Sachs dampers, and exclusive yellow paint."
        author="Conan D. Boyle"
        authorUrl={`${SITE_CONFIG.url}/authors/conan-boyle`}
        publishedTime="2026-05-15T14:00:00Z"
        modifiedTime="2026-05-15T14:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Cars"
        keywords={[
          '2026 Toyota GR86 Yuzu',
          'GR86 Yuzu Edition',
          'Toyota GR86 Yuzu price',
          'GR86 limited edition 2026',
        ]}
      />

      <NewsArticle
        title="2026 Toyota GR86 Yuzu Edition | Specs, Price, 860 Units North America"
        subtitle="Toyota limits its striking yellow special edition to 860 units across North America, pairing Brembo brakes, Sachs dampers, and a body kit with an exclusive Yuzu Yellow exterior."
        category="Cars"
        categoryColor="orange"
        topicTag="automotive"
        publishDate="2026-05-15T14:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Conan D. Boyle',
          role: 'Cars Correspondent',
          authorSlug: 'conan-boyle',
        }}
        tags={['Toyota', 'GR86', 'Yuzu Edition', 'Sports Car', 'Limited Edition', 'Brembo']}
        slug="cars-2026-toyota-gr86-yuzu-edition"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Cars', item: '/cars' },
          { name: '2026 Toyota GR86 Yuzu Edition', item: SLUG },
        ]}
        keyTakeaways={[
          'The 2026 Toyota GR86 Yuzu Edition is a limited-run sports car priced at $36,365 in the US and $45,025 in Canada, limited to 860 units across North America.',
          'Production is capped at 30 units in Canada and 860 units total in North America, making it one of the most restricted GR86 variants ever offered.',
          'The Yuzu Edition adds Brembo front brakes, Sachs performance dampers, an aero body kit, and 18-inch matte black wheels over the standard GR86.',
          'Exclusive Yuzu Yellow paint and matching yellow interior accents are unique to this special edition and unavailable on any other GR86 trim.',
          'The base GR86 Premium starts at approximately $32,900 in the US, making the Yuzu a roughly $3,500 premium for its hardware and exclusivity package.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'What is the 2026 Toyota GR86 Yuzu Edition?',
            answer:
              'The 2026 Toyota GR86 Yuzu Edition is a limited-production special edition of the GR86 sports car, restricted to 860 units in North America. It features exclusive Yuzu Yellow paint, Brembo front brakes, Sachs dampers, a body kit, and 18-inch matte black wheels, starting at $36,365 in the US.',
          },
          {
            question: 'How much does the 2026 GR86 Yuzu Edition cost?',
            answer:
              '$36,365 in the United States. Canadian buyers pay $45,025 CAD. The price reflects the Brembo brake upgrade, Sachs damper package, and exclusive aesthetic content.',
          },
          {
            question: 'How many GR86 Yuzu units are available?',
            answer:
              '860 units total across all of North America, with only 30 of those allocated to Canada. The extreme scarcity makes it one of the rarest production GR86 variants.',
          },
          {
            question: 'What does the GR86 Yuzu Edition add over the standard GR86?',
            answer:
              'The Yuzu Edition adds Brembo front brake calipers, Sachs performance shock absorbers, a factory aero body kit, 18-inch matte black wheels, exclusive Yuzu Yellow exterior paint, and matching yellow interior accents.',
          },
          {
            question: 'Is the GR86 Yuzu Edition worth the premium?',
            answer:
              "The Yuzu adds genuine hardware upgrades in the Brembo brakes and Sachs dampers, which improve braking feel and chassis composure. The roughly $3,500 US premium over a standard GR86 Premium is defensible on those items alone, though the extreme scarcity means resale value could exceed sticker.",
          },
        ]}
        moreFromHub={[
          {
            slug: 'cars-bugatti-tourbillon-v16-hybrid-reveal-2026',
            title: 'Bugatti Tourbillon | V16 Hybrid Hypercar Revealed',
            url: '/cars/bugatti-tourbillon-v16-hybrid-reveal-2026',
            category: 'Cars',
          },
        ]}
        moreFromHubLabel="More from Cars"
        moreFromHubHref="/cars"
      >
        {/* ── Intro ── */}
        <p>
          The 2026 Toyota GR86 Yuzu Edition is a limited-production special variant of the GR86 sports car,
          priced from $36,365 in the United States and $45,025 in Canada, restricted to just 860 units
          across all of North America. Toyota announced the Yuzu as the most visually and mechanically
          distinctive GR86 variant to date, pairing exclusive Yuzu Yellow paint with a substantive hardware
          upgrade package that goes beyond cosmetic changes.
        </p>

        {/* ── YouTube Embed ── */}
        <div className="my-6 aspect-video w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/kSLpLBOqyMI"
            title="2026 Toyota GR86 Yuzu Edition Quick Review | Throttle House"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        {/* ── Section 1 ── */}
        <h2>GR86 Yuzu Edition | Price, Availability, Allocation</h2>
        <p>
          Toyota has allocated 860 Yuzu Edition units to North America in total, with only 30 of those
          assigned to Canada. US buyers start at $36,365, which sits approximately $3,500 above the
          standard GR86 Premium trim. The Canadian allocation at $45,025 CAD reflects both the currency
          differential and the tighter supply ceiling that makes the Canadian version the rarer of the two
          markets.
        </p>
        <p>
          For context, the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            broader sports car market in 2026
          </Link>{' '}
          has trended toward limited-edition packaging as a way to sustain enthusiasm in a segment that
          faces increased competition from performance EVs. Toyota&apos;s approach with the Yuzu is
          deliberately analog: no electrification, no torque-fill motors, just a tightly specified
          conventional sports car with genuine track-oriented components.
        </p>

        {/* ── Section 2 ── */}
        <h2>Chassis Upgrades | Brembo Brakes and Sachs Dampers</h2>
        <p>
          The hardware case for the Yuzu Edition rests on two components: Brembo front brake calipers and
          Sachs performance dampers. The Brembo units deliver more consistent bite and better thermal
          management under repeated hard stops compared to the standard GR86 setup, a meaningful upgrade
          for track day use or spirited mountain road driving. The Sachs dampers sharpen body control and
          reduce roll without sacrificing the compliant everyday ride that has made the GR86 a
          broadly recommendable sports car since its second-generation launch.
        </p>
        <p>
          Both upgrades are sourced from suppliers with established motorsport credentials. Sachs dampers
          appear in numerous factory track-focused variants across the European sports car market. Brembo
          supplies brake hardware to Formula 1, MotoGP, and dozens of OEM performance programs. Their
          presence on a $36,000 Toyota is a legitimate hardware story, not just a badge exercise.
        </p>

        {/* ── Section 3 ── */}
        <h2>Yuzu Yellow | Exterior, Body Kit, and Wheels</h2>
        <p>
          The defining visual element is Yuzu Yellow, a saturated citrus-toned paint unique to this
          edition. Toyota pairs it with a factory aero body kit that modifies the front bumper, side sills,
          and rear diffuser for a more aggressive stance. The 18-inch matte black wheels contrast sharply
          against the yellow body and are unique to the Yuzu; they are not available as a standalone option
          on any other GR86 trim level.
        </p>
        <p>
          Inside, yellow accent stitching on the seats, steering wheel, and shift boot carries the Yuzu
          color story into the cabin. The overall effect is coherent rather than garish, and the
          monochromatic interior treatment prevents the color from overwhelming the driving-focused
          cockpit.
        </p>

        {/* ── Section 4 ── */}
        <h2>GR86 Powertrain | 2.4L Boxer, 228hp, Manual or Auto</h2>
        <p>
          The Yuzu Edition carries over the standard GR86 powertrain without modification. The 2.4-liter
          naturally aspirated horizontally opposed four-cylinder produces 228 horsepower and 184 lb-ft of
          torque. A six-speed manual is standard; a six-speed automatic is available. The low center of
          gravity from the boxer architecture, the 53:47 front-to-rear weight distribution, and the
          near-neutral handling balance remain the core of what makes the GR86 rewarding to drive.
        </p>
        <p>
          No power upgrade accompanies the Yuzu package, which is the honest choice. The GR86&apos;s
          228hp is tuned to be usable at road speeds rather than requiring a track to access. Adding the
          Sachs and Brembo hardware addresses the two areas where drivers most commonly push the standard
          car to its limits: corner-entry braking and mid-corner body control. For a full breakdown of the
          GR86 lineage and how it stacks up against segment rivals, see oWire&apos;s{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">
            Cars hub
          </Link>
          .
        </p>

        {/* ── Verdict ── */}
        <h2>Verdict | Should You Buy the GR86 Yuzu Edition?</h2>
        <p>
          The Yuzu Edition is a well-judged special edition rather than a cynical cosmetic exercise. The
          Brembo and Sachs upgrades are hardware that improves the car&apos;s dynamic capability, and the
          Yuzu Yellow paint combined with 860-unit scarcity gives it genuine long-term collectibility. The
          $3,500 US premium is defensible on the basis of the brake and damper hardware alone, and the
          exclusivity is a bonus rather than the sole justification.
        </p>
        <p>
          Buyers who drive their cars hard on weekends will feel both upgrades immediately. Buyers who want
          a low-mileage collector piece will appreciate the restricted allocation. Both motivations are
          valid. Read the full author analysis on the{' '}
          <Link href="/authors/conan-boyle" className="text-blue-600 hover:text-blue-800 underline">
            Conan D. Boyle author page
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}