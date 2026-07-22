import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const revalidate = 86400;

const SLUG = '/cars/genesis/gv90-flagship-electric-suv-2027';
const URL_PATH = '/cars/genesis/gv90-flagship-electric-suv-2027';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/cars-genesis-gv90-flagship-electric-suv-2027.jpg';

export const metadata: Metadata = {
  title: '2027 Genesis GV90 | Flagship Electric SUV Specs, Price',
  description: 'The 2027 Genesis GV90 is the brand\'s ultra-luxury flagship electric SUV, built on Hyundai\'s next-generation eM platform with up to 50% more range and rumored B-pillarless coach doors.',
  keywords: [
    '2027 Genesis GV90',
    'Genesis GV90 price',
    'Genesis GV90 specs',
    'Genesis GV90 release date',
    'Genesis Neolun Concept',
    'Genesis eM platform',
    'Genesis flagship electric SUV',
    'Genesis GV90 coach doors',
    'Genesis GV90 vs GV80',
    'Genesis electric SUV 2027',
    'Hyundai eM platform range',
    'Genesis lounge interior',
    'luxury electric SUV 2027',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: '2027 Genesis GV90 | The Brand\'s New Electric Flagship',
    description: 'Genesis is preparing to launch the GV90, an ultra-luxury full-size electric SUV inspired by the Neolun Concept, built on Hyundai\'s next-generation eM platform.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-07-21T15:00:00Z',
    modifiedTime: '2026-07-21T15:00:00Z',
    section: 'Cars',
    tags: ['Genesis', 'Genesis GV90', 'Electric SUV', 'Luxury SUV', 'Automotive'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2027 Genesis GV90 | Flagship Electric SUV Incoming',
    description: 'Coach doors, a lounge interior, and up to 50% more range. Here is what we know about the Genesis GV90 so far.',
  },
};

export default function GenesisGV90Page() {
  return (
    <NewsArticle
      title="2027 Genesis GV90 | The Brand's New Electric Flagship Takes Shape"
      subtitle="The 2027 Genesis GV90 is the brand's highly anticipated, ultra-luxury full-size electric SUV. Inspired by the striking Genesis Neolun Concept, the production vehicle has been spotted testing and is expected to hit markets as the new brand pinnacle, built on Hyundai's next-generation eM platform with up to 50% more electric driving range."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="July 21, 2026"
      readTime="5 min read"
      author={{
        name: 'Conan D. Boyle',
        role: 'Automotive Correspondent, ObjectWire',
        avatar: '/influncer/author/conan_boyle.JPG',
        authorSlug: 'conan-boyle',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: '2027 Genesis GV90 flagship electric SUV rendering' }}
      tags={['Genesis', 'Genesis GV90', 'Electric SUV', 'Luxury SUV', 'Automotive', '2027']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Genesis', item: '/cars/genesis' },
        { name: 'Genesis GV90', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'cars', title: 'Cars Hub | Supercars, EVs, Auto News', url: '/cars', publishDate: '2026', category: 'Cars' },
        { slug: 'gv60-magma-641hp-performance-ev-2027', title: '2027 Genesis GV60 Magma | 641-HP Performance EV', url: '/cars/genesis/gv60-magma-641hp-performance-ev-2027', publishDate: '2026', category: 'Cars' },
        { slug: 'lincoln-navigator-2027-black-label-price-specs', title: '2027 Lincoln Navigator | Black Label Price, Specs, Interior', url: '/cars/lincoln-navigator-2027-black-label-price-specs', publishDate: '2026', category: 'Cars' },
      ]}
      moreFromHubLabel="Cars Coverage"
      moreFromHubHref="/cars"
      keyTakeaways={[
        'The 2027 Genesis GV90 is the brand\'s upcoming ultra-luxury, full-size electric SUV, positioned as the new flagship above the GV80.',
        'The GV90 is inspired by the Genesis Neolun Concept and has been spotted testing in production-intent form ahead of its expected market launch.',
        'It will be built on Hyundai\'s next-generation eM platform, promising up to 50% more electric driving range than current Genesis EVs.',
        'Premium trims are heavily rumored to feature B-pillarless coach doors and a lounge-style interior, aimed directly at full-size elite luxury cruisers.',
        'Genesis has not announced an official MSRP, but the GV90 is expected to price above the GV80 to reflect its flagship positioning.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What is the Genesis GV90?',
          answer: 'The Genesis GV90 is the brand\'s upcoming ultra-luxury, full-size electric SUV, expected to launch as the new flagship model above the GV80 for the 2027 model year.',
        },
        {
          question: 'How much will the Genesis GV90 cost?',
          answer: 'Genesis has not announced an official MSRP. The GV90 is expected to price above the current GV80 flagship, positioning it as a direct rival to full-size elite luxury cruisers.',
        },
        {
          question: 'What platform does the Genesis GV90 use?',
          answer: 'The GV90 is built on Hyundai\'s next-generation eM platform, which is expected to deliver up to 50% more electric driving range than the platform underpinning current Genesis EVs.',
        },
        {
          question: 'Does the Genesis GV90 have suicide doors?',
          answer: 'Premium trims are heavily rumored to feature B-pillarless coach doors, commonly known as suicide doors, paired with a lounge-style interior layout.',
        },
        {
          question: 'Is the Genesis GV90 based on a concept car?',
          answer: 'Yes. The GV90 is inspired by the striking Genesis Neolun Concept, and a production-intent version of the vehicle has already been spotted testing.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Genesis is preparing to crown a new flagship. The <strong>2027 Genesis GV90</strong> is the brand's highly anticipated, ultra-luxury full-size electric SUV, and it is shaping up to be the most ambitious vehicle the Korean luxury marque has ever built.
        </p>

        <p>
          Inspired by the striking <strong>Genesis Neolun Concept</strong>, the production vehicle has already been spotted testing on public roads, and it is expected to hit markets as the new brand pinnacle, sitting above the GV80 in Genesis's SUV lineup.
        </p>

        <h2>Genesis GV90 | The Next-Generation eM Platform</h2>

        <p>
          At the core of the GV90 is Hyundai's advanced <strong>next-generation eM platform</strong>, an electric architecture engineered to deliver up to <strong>50% more electric driving range</strong> compared to the platform underpinning Genesis's current EV lineup. That range jump would put the GV90 in direct contention with the longest-range full-size luxury electric SUVs on the market, a critical benchmark for a flagship model expected to anchor the brand's electrified future.
        </p>

        <h2>A Lounge-Style Cabin | B-Pillarless Coach Doors</h2>

        <p>
          Perhaps the most striking rumored feature is the GV90's door design. Premium trims are heavily rumored to feature <strong>B-pillarless coach doors</strong>, commonly referred to as suicide doors, which open outward from a central hinge point with no fixed pillar between the front and rear openings. Paired with a <strong>lounge-style interior</strong>, the layout is designed to maximize cabin openness and rear-seat accessibility, a hallmark of ultra-luxury full-size SUVs built for chauffeured or rear-seat-focused ownership.
        </p>

        <h2>Positioning | Above the GV80, Toward the Elite Cruisers</h2>

        <p>
          Genesis has not announced an official MSRP for the GV90. However, its positioning is clear: the GV90 will sit above the GV80, the brand's current flagship SUV, and is being built to compete directly with full-size elite luxury cruisers from rival automakers. That positioning signals Genesis's intent to plant its flag firmly at the top of the luxury electric SUV segment rather than compete purely on value, a shift from the value-driven reputation that helped the brand gain traction in its early years.
        </p>

        <h2>What Comes Next</h2>

        <p>
          With a production-intent test vehicle already spotted on the road and the Neolun Concept providing a clear design roadmap, the GV90 appears to be on a defined path toward a market launch. Official pricing, a confirmed release date, and final production specifications have not yet been announced by Genesis, and ObjectWire will update this report as new details are confirmed.
        </p>

        <p>
          For more automotive coverage, visit the <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">Cars hub</Link>, read our report on Genesis's new <Link href="/cars/genesis/gv60-magma-641hp-performance-ev-2027" className="text-blue-600 hover:text-blue-800 underline">641-horsepower GV60 Magma performance EV</Link>, or see the <Link href="/cars/lincoln-navigator-2027-black-label-price-specs" className="text-blue-600 hover:text-blue-800 underline">2027 Lincoln Navigator's Black Label flagship SUV</Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
