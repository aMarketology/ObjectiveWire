import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllEntries } from '@/lib/registry-service';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Copyright, Law & Platform Policy | ObjectWire Legal News 2026',
  description:
    'ObjectWire covers copyright disputes, platform liability, AI deepfake law, right to repair, prediction market regulation, and Big Tech antitrust. Primary sources. Updated daily.',
  keywords: [
    'copyright news 2026',
    'platform liability law',
    'AI deepfake law',
    'TAKE IT DOWN Act',
    'right to repair 2026',
    'Big Tech antitrust',
    'prediction market regulation',
    'Apple App Store lawsuit',
    'IATSE union 2026',
    'nonconsensual intimate imagery law',
    'digital copyright enforcement',
    'tech legal news 2026',
  ],
  alternates: { canonical: 'https://www.objectivewire.org/copyright' },
  openGraph: {
    title: 'Copyright, Law & Platform Policy | ObjectWire 2026',
    description:
      'Copyright disputes, AI law, right to repair, platform liability, and Big Tech antitrust. Primary-source legal news from ObjectWire.',
    type: 'website',
    url: 'https://www.objectivewire.org/copyright',
    siteName: 'ObjectWire',
  },
};

// Featured topic clusters for the hub
const TOPIC_CLUSTERS = [
  {
    label: 'AI & Deepfake Law',
    color: 'bg-red-700',
    links: [
      { href: '/copyright/what-is-take-it-down-act-explained', title: 'What Is the TAKE IT DOWN Act? Full Explainer' },
      { href: '/copyright/news/take-it-down-act-first-arrests-shannon-hernandez-deepfake-pornography-2026', title: 'First TAKE IT DOWN Act Arrests' },
      { href: '/copyright/news/baltimore-xai-grok-sexual-deepfakes-lawsuit-2026', title: 'Baltimore Sues xAI Over Grok Deepfakes' },
      { href: '/copyright/news/taylor-swift-trademark-voice-image-ai-2026', title: 'Taylor Swift Trademarks Voice Against AI' },
    ],
  },
  {
    label: 'Platform Liability',
    color: 'bg-blue-700',
    links: [
      { href: '/copyright/news/ninth-circuit-pauses-app-store-ruling-apple-supreme-court', title: 'Apple App Store | Ninth Circuit Pause, Supreme Court Petition' },
      { href: '/copyright/news/ex-human-files-lawsuit-against-apple', title: 'Ex-Human Sues Apple Over $500K Withheld Revenue' },
      { href: '/copyright/news/letitia-james-sues-counter-strike', title: 'NY AG Sues Valve Over CS2 Loot Boxes' },
      { href: '/copyright/sony/playstation-age-verification-psn-online-safety-laws-2026', title: 'PlayStation Age Verification | Online Safety Laws' },
    ],
  },
  {
    label: 'Prediction Markets & Gambling Law',
    color: 'bg-amber-700',
    links: [
      { href: '/copyright/news/detroit-first-city-oppose-prediction-markets-coinbase-lawsuit-2026', title: 'Detroit First City to Oppose Prediction Markets' },
      { href: '/copyright/news/trump-prediction-markets-cftc-van-dyke-2026', title: 'Trump Softens Prediction Market Stance' },
      { href: '/copyright/news/kalshi-suspends-candidates-betting-own-races-2026', title: 'Kalshi Suspends Candidates Betting Own Races' },
      { href: '/copyright/news/aoc-mlb-polymarket-gambling-warning', title: "AOC Warns on MLB's $300M Polymarket Deal" },
    ],
  },
  {
    label: 'Right to Repair & Antitrust',
    color: 'bg-green-700',
    links: [
      { href: '/copyright/news/deere-99m-settlement-right-to-repair-digital-tools', title: 'Deere $99M Settlement | Farmers Win Diagnostic Tool Access' },
      { href: '/copyright/meta/news/new-mexico-jury-meta-375m-consumer-protection-verdict-2026', title: 'New Mexico Jury Orders Meta to Pay $375M' },
      { href: '/copyright/news/circle-class-action-drift-protocol-285m-hack-solana', title: 'Circle Class Action | Drift Protocol $285M Hack' },
      { href: '/copyright/news/mastercard-ai-disruption-selloff', title: 'Mastercard Falls Below $500 on AI Disruption Note' },
    ],
  },
];

export default async function CopyrightHubPage() {
  const all = await getAllEntries();

  const articles = all
    .filter((e) => {
      const slugMatch = e.slug.startsWith('/copyright/');
      const depthOk = e.slug.split('/').filter(Boolean).length >= 2;
      return depthOk && slugMatch;
    })
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 60);

  const featuredArticles = articles.slice(0, 3);
  const remainingArticles = articles.slice(3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <nav className="text-xs text-gray-400 mb-5 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>→</span>
            <span className="text-white font-semibold">Copyright &amp; Law</span>
          </nav>
          <div className="flex items-start gap-5">
            <div className="h-14 w-1.5 bg-red-500 shrink-0 mt-1" />
            <div>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight">Copyright <span className="text-red-400">&amp;</span> Law</h1>
              <p className="mt-3 text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                ObjectWire covers copyright disputes, platform liability, AI deepfake legislation, right to repair, Big Tech antitrust, and prediction market regulation. Primary sources only. Updated daily.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['TAKE IT DOWN Act', 'AI Deepfakes', 'App Store', 'Right to Repair', 'Prediction Markets', 'Platform Liability'].map((tag) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-white/10 text-gray-300 rounded-sm border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-14">

        {/* Featured Articles — top 3 */}
        {featuredArticles.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-5 bg-red-600" />
              <h2 className="text-xs font-black uppercase tracking-[.18em] text-gray-700">Latest Coverage</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="group flex flex-col border border-gray-200 rounded-sm overflow-hidden hover:border-black hover:shadow-lg transition-all"
                >
                  {article.imageUrl ? (
                    <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={article.imageUrl}
                        alt={article.imageAlt ?? article.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] bg-gray-900 flex items-center justify-center shrink-0">
                      <span className="text-white text-2xl font-black opacity-20">OW</span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white bg-red-700 self-start mb-2">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-base font-black leading-snug group-hover:underline line-clamp-3 flex-1">
                      {article.title.replace(/\s*[|]\s*(ObjectWire|OzoneNews).*$/i, '')}
                    </h3>
                    <p className="text-[10px] text-gray-500 font-mono mt-3 pt-2 border-t border-gray-100">
                      {article.author} · {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Topic Clusters */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-black" />
            <h2 className="text-xs font-black uppercase tracking-[.18em] text-gray-700">By Topic</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {TOPIC_CLUSTERS.map((cluster) => (
              <div key={cluster.label} className="border border-gray-200 rounded-sm overflow-hidden">
                <div className={`${cluster.color} px-4 py-2.5`}>
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">{cluster.label}</h3>
                </div>
                <ul className="divide-y divide-gray-100">
                  {cluster.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="flex items-start gap-2 px-4 py-3 hover:bg-gray-50 transition-colors group">
                        <span className="text-gray-300 mt-0.5 shrink-0">›</span>
                        <span className="text-sm font-semibold text-gray-900 group-hover:underline leading-snug">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* All Articles Grid */}
        {remainingArticles.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 bg-gray-700" />
                <h2 className="text-xs font-black uppercase tracking-[.18em] text-gray-700">All Coverage</h2>
              </div>
              <span className="text-xs text-gray-400 font-mono">{articles.length} articles</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="group flex flex-col border border-gray-200 rounded-sm overflow-hidden hover:border-black hover:shadow-md transition-all"
                >
                  {article.imageUrl ? (
                    <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={article.imageUrl}
                        alt={article.imageAlt ?? article.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] bg-gray-50 border-b border-gray-200 flex items-center justify-center shrink-0">
                      <span className="text-gray-700 text-3xl font-black opacity-20">OW</span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white bg-gray-700 self-start mb-2">
                      {article.category}
                    </span>
                    <h2 className="font-serif text-base font-black leading-snug group-hover:underline line-clamp-3 flex-1">
                      {article.title.replace(/\s*[|]\s*(ObjectWire|OzoneNews).*$/i, '')}
                    </h2>
                    <p className="text-[10px] text-gray-500 font-mono mt-3 pt-2 border-t border-gray-100">
                      {article.author} · {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {articles.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-lg">No articles found yet.</p>
            <Link href="/" className="mt-4 inline-block text-sm text-blue-600 hover:underline">← Back to home</Link>
          </div>
        )}
      </main>
    </div>
  );
}
