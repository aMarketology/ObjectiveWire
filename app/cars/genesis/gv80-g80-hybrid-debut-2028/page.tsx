import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/cars/genesis/gv80-g80-hybrid-debut-2028';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/cars-genesis-gv80-g80-hybrid-debut-2028.jpg';
// author: 'Conan D. Boyle'
// authorSlug: 'conan-boyle'

export const metadata: Metadata = {
  title: 'Luxury Electrified Without the Plug: 2028 Genesis GV80 and G80 Hybrids Debut with 347 HP',
  description:
    'Genesis has unveiled its first-ever hybrid vehicles—the 2028 GV80 Hybrid SUV and extended-wheelbase G80 Hybrid sedan—featuring a 347-horsepower parallel hybrid system and over 500 miles of driving range.',
  keywords: [
    '2028 Genesis GV80 Hybrid G80 Hybrid debut',
    '2028 Genesis GV80 Hybrid specs range',
    '2028 Genesis G80 Hybrid extended wheelbase',
    'Genesis 2.5T parallel hybrid powertrain',
    '2026 Los Angeles Auto Show Genesis hybrid',
    'Hyundai Motor Group liquid-cooled hybrid battery',
    'Genesis hybrid SUV 2028',
    'Genesis G80 Hybrid sedan release date',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Luxury Electrified Without the Plug: 2028 Genesis GV80 and G80 Hybrids Debut with 347 HP',
    description:
      'Genesis has unveiled its first-ever hybrid vehicles—the 2028 GV80 Hybrid SUV and extended-wheelbase G80 Hybrid sedan—featuring a 347-horsepower parallel hybrid system and over 500 miles of driving range.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Conan D. Boyle'],
    publishedTime: '2026-11-22T22:50:00Z',
    modifiedTime: '2026-11-22T22:50:00Z',
    section: 'Cars',
    tags: ['Genesis', 'GV80', 'G80', 'Hybrid', 'SUV', 'Luxury Cars', 'Automotive'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '2028 Genesis GV80 and G80 Hybrid Debut' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2028 Genesis GV80 and G80 Hybrids Debut with 347 HP',
    description:
      'Genesis enters the luxury hybrid segment with the 2028 GV80 and G80 Hybrids, delivering 347 hp and 500+ miles of range without a plug.',
    images: [OG_IMAGE],
  },
};

export default function GenesisGV80G80HybridDebutPage() {
  return (
    <>
      <NewsArticleSchema
        title="Luxury Electrified Without the Plug: 2028 Genesis GV80 and G80 Hybrids Debut with 347 HP"
        description="Genesis has unveiled its first-ever hybrid vehicles—the 2028 GV80 Hybrid SUV and extended-wheelbase G80 Hybrid sedan—featuring a 347-horsepower parallel hybrid system and over 500 miles of driving range."
        author="Conan D. Boyle"
        authorUrl="https://www.objectivewire.com/authors/conan-boyle"
        publishedTime="2026-11-22T22:50:00Z"
        modifiedTime="2026-11-22T22:50:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Cars"
        keywords={[
          '2028 Genesis GV80 Hybrid G80 Hybrid debut',
          '2028 Genesis GV80 Hybrid specs range',
          '2028 Genesis G80 Hybrid extended wheelbase',
          'Genesis 2.5T parallel hybrid powertrain',
          '2026 Los Angeles Auto Show Genesis hybrid',
        ]}
      />

      <QuickArticle
        title="Luxury Electrified Without the Plug: 2028 Genesis GV80 and G80 Hybrids Debut with 347 HP"
        subtitle="Genesis has officially entered the hybrid luxury segment, unveiling its first-ever gas-electric models—the 2028 Genesis GV80 Hybrid SUV and 2028 Genesis G80 Hybrid sedan—at the 2026 Los Angeles Auto Show."
        department="Genesis"
        category="Cars"
        accentColor="blue"
        publishDate="November 22, 2026"
        readTime="5 min read"
        author={{ name: 'Conan D. Boyle', slug: 'conan-boyle' }}
        heroImage={{
          src: OG_IMAGE,
          alt: '2028 Genesis GV80 Hybrid SUV and G80 Hybrid Sedan Debut',
          caption: 'The 2028 Genesis GV80 and G80 Hybrids debuted at the 2026 Los Angeles Auto Show.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/cars', label: 'Cars' },
          { href: '/cars/genesis', label: 'Genesis' },
          { href: SLUG, label: 'GV80 & G80 Hybrid Debut' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Genesis Newsroom: 2028 Genesis GV80 Hybrid and G80 Hybrid Debut Announcement',
            url: 'https://www.genesisnewsusa.com/',
            publisher: 'Genesis Media USA',
          },
          {
            number: 2,
            title: 'Genesis USA: Official GV80 Hybrid Preview & Specifications',
            url: 'https://www.google.com/search?q=https://www.genesis.com/us/en/genesis-gv80-hybrid',
            publisher: 'Genesis USA',
          },
          {
            number: 3,
            title: 'MotorTrend: 2028 Genesis GV80 and G80 Hybrids First Look & Powertrain Details',
            url: 'https://www.motortrend.com/',
            publisher: 'MotorTrend',
          },
          {
            number: 4,
            title: 'Edmunds: 2028 Genesis Hybrid Lineup Pricing & Range Estimates',
            url: 'https://www.edmunds.com/',
            publisher: 'Edmunds',
          },
        ]}
        relatedArticles={[
          { href: '/cars/genesis/gv60-magma-641hp-performance-ev-2027', title: '2027 Genesis GV60 Magma | 641-HP Track-Ready Luxury EV', category: 'Cars' },
          { href: '/cars/genesis/gv90-flagship-electric-suv-2027', title: '2027 Genesis GV90 | Flagship Electric SUV Specs & Luxury Interior', category: 'Cars' },
          { href: '/cars/lincoln-navigator-2027-black-label-price-specs', title: '2027 Lincoln Navigator Black Label Price & Specs', category: 'Cars' },
          { href: '/cars', title: 'Automotive Hub | Supercars, Hybrids, and Luxury Vehicles', category: 'Cars' },
        ]}
        tags={['Genesis', 'GV80', 'G80', 'Hybrid', 'SUV', 'Luxury Cars', 'Automotive']}
      >
        <p>
          Genesis has officially entered the hybrid luxury segment, unveiling its first-ever gas-electric models—the <strong>2028 Genesis GV80 Hybrid SUV</strong> and <strong>2028 Genesis G80 Hybrid sedan</strong>—at the <strong>2026 Los Angeles Auto Show</strong>.
        </p>

        <p>
          Rather than following luxury rivals down the plug-in hybrid (PHEV) route, Genesis engineered a self-charging, parallel hybrid architecture that requires no external charging infrastructure. Both models are scheduled to arrive in U.S. dealerships in early-to-mid 2027, delivering twin-turbo V6-level torque alongside an estimated <strong>500+ miles of total driving range per tank</strong>.
        </p>

        {/* ── Lineup Summary Box ── */}
        <div className="my-8 not-prose rounded-xl border border-blue-200 bg-blue-50/60 p-5 font-mono text-sm shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3 font-sans">
            Genesis Hybrid Lineup Summary
          </p>
          <div className="space-y-1 text-gray-800">
            <div>├── <strong>Debut Venue:</strong> 2026 Los Angeles Auto Show (U.S. arrival early-to-mid 2027)</div>
            <div>├── <strong>Powertrain Architecture:</strong> 2.5L Turbo Inline-4 + Dual Electric Motors (P1 + P2)</div>
            <div>├── <strong>Combined System Output:</strong> 347 Horsepower | 391 lb-ft of Torque (7-Speed Automatic)</div>
            <div>├── <strong>Battery Innovation:</strong> First Hyundai Motor Group hybrid with a liquid-cooled battery pack</div>
            <div>└── <strong>Estimated Total Range:</strong> Exceeding 500 miles on a single tank of fuel</div>
          </div>
        </div>

        <h2>Dual-Motor Powertrain &amp; Liquid-Cooled Battery Tech</h2>

        <p>
          Beneath the hood, both the GV80 Hybrid and G80 Hybrid share an all-new parallel hybrid powertrain designed to mimic the quiet, linear response of a pure electric vehicle while maintaining long-distance convenience.
        </p>

        {/* ── Architecture Flow ── */}
        <div className="my-8 not-prose rounded-xl border border-slate-200 bg-slate-900 text-slate-100 p-5 font-mono text-sm shadow-md">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3 font-sans">
            Genesis 2.5T Parallel Hybrid Architecture
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">├── Combustion Engine:</span>
              <span>2.5-Liter Turbocharged 4-Cylinder</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">├── Electric Motor 1 (P1):</span>
              <span>Integrated starter-generator for seamless engine stop/start &amp; charging</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">├── Electric Motor 2 (P2):</span>
              <span>Traction drive motor delivering instant low-end torque</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">├── Energy Storage:</span>
              <span>Liquid-cooled lithium-ion battery pack for sustained high-output discharge</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">└── Transmission:</span>
              <span>7-Speed Automatic with paddle-controlled &amp; Smart Regenerative Braking</span>
            </div>
          </div>
        </div>

        <p>
          Generating <strong>347 horsepower and 391 lb-ft of torque</strong>, the setup adds 47 horsepower over the standard gas 2.5T engine while matching the peak torque output of Genesis&apos;s 3.5-liter twin-turbo V6.
        </p>

        <p>
          Notably, the lineup introduces <strong>Hyundai Motor Group&apos;s first liquid-cooled hybrid battery pack</strong>, improving thermal stability to allow higher electrical discharge rates during hard acceleration. Drivers can also tailor energy recovery using steering-wheel paddles or engage &ldquo;Smart&rdquo; regenerative braking, which automatically modulates deceleration based on navigation data and surrounding traffic.
        </p>

        <h2>2028 Genesis Hybrid Model Comparison</h2>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-blue-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left font-bold">Specification / Feature</th>
                <th className="px-4 py-3 text-left font-bold">2028 Genesis GV80 Hybrid (SUV)</th>
                <th className="px-4 py-3 text-left font-bold">2028 Genesis G80 Hybrid (Sedan)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-100">
              {[
                ['Powertrain & Output', '2.5T Parallel Hybrid (347 hp / 391 lb-ft)', '2.5T Parallel Hybrid (347 hp / 391 lb-ft)'],
                ['Fuel Economy Improvement', '+24% over gas model (~26–27 MPG combined est.)', '+30% over gas model (~30 MPG combined est.)'],
                ['Estimated Driving Range', '500+ miles per tank', '500+ miles per tank'],
                ['Exterior & Chassis Updates', 'Revised X-pattern grille; exclusive 19", 20", or 22" wheels', 'Updated grille, 18" or 20" wheels; 5.1-inch longer body (Electrified G80 platform)'],
                ['Exclusive Exterior Colors', 'Seychelles Beige, Cardiff Green, Brunswick Green Matte', 'Wadden Gray, Milos Blue, Barolo Red'],
                ['Interior & Tech Highlights', '27" OLED display, 4 new two-tone interior themes, heated/ventilated 2nd row, Mood Curator', '27" OLED display, Nappa leather, front passenger Ergo-Motion massage seat, Road Preview suspension'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 1 ? 'bg-blue-50/40' : 'bg-white'}>
                  <td className="px-4 py-3 font-semibold text-blue-950">{row[0]}</td>
                  <td className="px-4 py-3 text-gray-800">{row[1]}</td>
                  <td className="px-4 py-3 text-gray-800">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Extended Proportions and Cabin Refinements</h2>

        <p>
          While both vehicles feature Genesis&apos;s signature 27-inch panoramic OLED instrument and infotainment display, each model receives distinct structural and luxury upgrades tailored to its segment.
        </p>

        <p>
          The <strong>2028 G80 Hybrid</strong> adopts the extended-length architecture of the Electrified G80, stretching <strong>5.1 inches longer</strong> than the standard gas sedan to create executive-level rear legroom. It also incorporates camera-assisted Road Preview suspension and an available front-passenger Ergo-Motion massage seat.
        </p>

        <p>
          Meanwhile, the <strong>2028 GV80 Hybrid</strong> introduces four new two-tone interior color themes, heated and ventilated second-row seating, and Genesis&apos;s multi-sensory Mood Curator system. Official pricing will be announced closer to launch, with industry estimates placing starting MSRPs roughly in line with current V6 trims between <strong>$70,000 and $85,000+</strong>.
        </p>

        <h2>Video Walkarounds &amp; First Look Footage</h2>

        <p>
          Check out the video reviews and auto show previews covering the 2028 Genesis GV80 and G80 Hybrids:
        </p>

        {/* ── Feature Video: MotorTrend First Look ── */}
        <div className="my-8 not-prose rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-900">
              2028 Genesis G80 and GV80 Hybrids First Look: Smooth New Movers
            </h3>
            <span className="text-xs text-gray-500 font-medium">YouTube · MotorTrend Channel</span>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/6q-MvxUFqcA?rel=0&modestbranding=1"
              title="2028 Genesis G80 and GV80 Hybrids First Look: Smooth New Movers"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Watch the full first look analysis via{' '}
            <a
              href="https://www.youtube.com/watch?v=6q-MvxUFqcA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              MotorTrend on YouTube
            </a>
          </p>
        </div>

        {/* ── Secondary Video Grid ── */}
        <div className="my-8 not-prose grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs font-bold">4K</span>
              <span className="text-xs text-gray-500">Metal Automobility</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              2027/2028 Genesis GV80 Hybrid Walkaround - LA Auto Show
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/T5uHtTRXwnc?rel=0&modestbranding=1"
                title="[4K] 2027 Genesis GV80 Hybrid 1 min Walkaround - LA Auto Show 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-mono text-xs font-bold">Preview</span>
              <span className="text-xs text-gray-500">Hyundai Motor Group</span>
            </div>
            <h4 className="text-xs font-bold text-gray-900 mb-2 truncate">
              Genesis Brings Flagship Luxury to the LA Auto Show
            </h4>
            <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/tzEXyrLlbiE?rel=0&modestbranding=1"
                title="Genesis GV90 Brings Flagship Luxury to the 2026 LA Auto Show"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <p>
          For more automotive coverage, explore the{' '}
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Objective Wire Cars hub
          </Link>
          , our deep-dive into the{' '}
          <Link href="/cars/genesis/gv60-magma-641hp-performance-ev-2027" className="text-blue-600 hover:text-blue-800 underline font-medium">
            641-HP Genesis GV60 Magma
          </Link>
          , and our overview of the{' '}
          <Link href="/cars/genesis/gv90-flagship-electric-suv-2027" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Genesis GV90 flagship electric SUV
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}
