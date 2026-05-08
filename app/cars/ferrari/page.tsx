import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const SLUG = '/cars/ferrari';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;
// Photo: Two red Ferrari sports cars — Isaac Maffeis (@isaacmaffeis) on Unsplash
// https://unsplash.com/@isaacmaffeis?utm_source=zwire&utm_medium=referral
// Minted thumbnail — watermarked, keyword-optimised, EXIF-tagged, owire.org-hosted
const OG_IMAGE = '/thumbnails/ferrari-hub.jpg';
const OG_IMAGE_FULL = `https://www.owire.org${OG_IMAGE}`;

export const metadata: Metadata = {
  title: 'Ferrari | F80 Hypercar, Models, Formula 1 News 2026',
  description: 'Ferrari hub: F80 hypercar specs, LaFerrari successor, Formula 1 2026 season, current model lineup. All Ferrari news and profiles on ZWire.',
  keywords: [
    'Ferrari',
    'Ferrari 2026',
    'Ferrari F80',
    'Ferrari hypercar',
    'Ferrari news',
    'Ferrari Formula 1',
    'Ferrari models 2026',
    'Ferrari supercar',
    'Maranello',
    'Ferrari SF-25',
    'Ferrari history',
    'Italian sports car',
    'Ferrari LaFerrari successor',
    'Ferrari price',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ferrari | F80, Models, Formula 1 News 2026',
    description: 'Ferrari hub on ZWire: F80 hypercar, Formula 1, model lineup. The latest from Maranello.',
    type: 'website',
    url: ARTICLE_URL,
    siteName: 'ZWire',
    images: [{ url: OG_IMAGE_FULL, width: 1200, height: 675, alt: 'Ferrari prancing horse emblem close-up, Ferrari news and supercar reviews 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari | F80, Formula 1, Models 2026',
    description: 'Ferrari F80 hypercar, SF-25 Formula 1, full model lineup. All Ferrari coverage on ZWire.',
    images: [OG_IMAGE_FULL],
  },
};

const articles = [
  {
    href: '/cars/ferrari/ferrari-luce-electric-2026',
    title: 'Ferrari Luce | First Electric Ferrari, Price, Specs 2026',
    description: '1,113hp quad-motor EV, 122 kWh 880V battery, 330-mile range, LoveFrom interior by Jony Ive. Price from $530,000. Global reveal May 25, 2026.',
    date: 'May 7, 2026',
    badge: 'Electric',
    badgeColor: 'bg-green-600',
  },
  {
    href: '/cars/ferrari/ferrari-f80-hypercar-price-specs-2026',
    title: 'Ferrari F80 | Price, Specs, 1184HP Hybrid, Q1 2026 Delivery',
    description: '$3.735M, 1,184hp hybrid, 0-60 in 1.9 seconds. All 799 units sold before the reveal. First deliveries Q1 2026.',
    date: 'May 7, 2026',
    badge: 'Hypercar',
    badgeColor: 'bg-red-600',
  },
];

export default function FerrariHubPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hub Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/70 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cars" className="hover:text-white transition-colors">Cars</Link>
            <span>/</span>
            <span className="text-white">Ferrari</span>
          </nav>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4 leading-tight">
            Ferrari
          </h1>
          <div className="w-16 h-1 bg-white/80 mb-5" />
          <p className="font-serif italic text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed">
            The Prancing Horse. F1-derived hypercars, the world's most coveted road cars, and a Formula 1 team racing at the front since 1950.
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="container mx-auto px-6 max-w-5xl py-12">
        {/* Back to Cars */}
        <div className="mb-8">
          <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">
            &larr; All Cars coverage on ZWire
          </Link>
        </div>

        <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6 pb-3 border-b border-gray-200">
          Ferrari Articles
        </h2>

        <div className="space-y-6">
          {articles.map((article) => (
            <article key={article.href} className="group border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${article.badgeColor}`}>
                      {article.badge}
                    </span>
                    <time className="text-xs text-gray-500 uppercase tracking-wider">{article.date}</time>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-gray-900 group-hover:text-red-700 transition-colors leading-snug mb-2">
                    <Link href={article.href} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={article.href} className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">
                  Read full article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Ferrari Quick Facts */}
        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="font-serif font-bold text-2xl text-gray-900 mb-6">Ferrari | Brand Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Ferrari S.p.A. was founded by Enzo Ferrari in <strong>1947</strong> in Maranello, Italy. Originally established as a racing team, Ferrari began producing road cars in 1947 with the 125 S. Today, the company trades on the Milan Stock Exchange (RACE) and is controlled by Exor N.V. (the Agnelli family holding company), with a portion held by Piero Ferrari and the public float.
            </p>
            <p>
              Ferrari's road car lineup spans from the <strong>Roma</strong> (entry-level grand tourer) through the <strong>SF90 Stradale</strong> (hybrid V8 flagship) to the new <strong>F80</strong> hypercar at $3.735 million. Every Ferrari road car is built at the Maranello factory, with production intentionally limited to preserve exclusivity and residual values.
            </p>
            <p>
              In Formula 1, Ferrari competes as <strong>Scuderia Ferrari</strong>, the only team to have participated in every F1 World Championship since 1950. The team races the SF-25 in the 2025 season and is managed by Frederic Vasseur, with drivers Charles Leclerc and Lewis Hamilton forming one of the most high-profile driver pairings in F1 history.
            </p>
            <p>
              For all supercar and hypercar news, see the{' '}
              <Link href="/cars" className="text-blue-600 hover:text-blue-800 underline">ZWire Cars hub</Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
