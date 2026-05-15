import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebSiteSchema } from "@/components/articles/NewsArticleSchema";
import AuthProvider from "@/components/auth/AuthProvider";
import TopStripSearch from "@/components/nav/TopStripSearch";
import MainNav from "@/components/nav/MainNav";
import NewsletterSignupInline from "@/components/newsletter/NewsletterSignupInline";
import FooterAuthorSlot from "@/components/authors/FooterAuthorSlot";
import { FooterAuthorProvider } from "@/lib/footer-author-context";
import TopStrip from "@/components/nav/TopStrip";
import ThemeProvider from "@/components/ThemeProvider";
import { SITE_CONFIG } from "@/lib/site-config";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-9FM4W3K6GV';

// =============================================================================
// FONT OPTIMIZATION - Prevents layout shift (CLS)
// Next.js handles: subsetting, preloading, self-hosting, font-display: swap
// =============================================================================
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  preload: true,
});

// =============================================================================
// VIEWPORT CONFIGURATION - Layout stability
// =============================================================================
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: ["sports news", "creators", "influencers", "athletes", "world cup", "olympics", "formula 1", "creator economy", "tabloid sports"],
  authors: [{ name: "oWire Editorial" }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} News Network`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // NOTE: Do NOT add canonical here. Each page.tsx sets its own via
  // metadata.alternates.canonical. A site-wide canonical in the root layout
  // collapses all pages into homepage duplicates in Google Search.
  alternates: {
    types: {
      'application/rss+xml': `${SITE_CONFIG.url}/rss.xml`,
      'application/feed+json': `${SITE_CONFIG.url}/feed.json`,
    },
  },
  icons: {
    icon: [
      { url: '/Favicon (1).png', type: 'image/png' },
    ],
    shortcut: '/Favicon (1).png',
    apple: '/Favicon (1).png',
  },
  other: {
    'llms.txt': `${SITE_CONFIG.url}/llms.txt`,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Canonical is set per-page via metadata.alternates.canonical.
            Do NOT hardcode a site-wide canonical here — it overrides every
            page's self-canonical and tells Google all pages are duplicates of the homepage. */}
        <link rel="alternate" type="application/rss+xml" title={`${SITE_CONFIG.name} RSS Feed`} href={`${SITE_CONFIG.url}/rss.xml`} />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-[#faf9f6] text-gray-900 antialiased font-sans dark:bg-[#121212] dark:text-gray-100">
        <AuthProvider>
          <ThemeProvider>
            <FooterAuthorProvider>
            {/* ── oWire Masthead ─────────────────────────────────────────── */}
            <header className="bg-white sticky sm:relative top-0 z-40 overflow-visible shadow-[0_2px_0_0_var(--brand-accent),0_3px_0_0_var(--brand-ink)]">

              {/* Top info strip */}
              <div className="border-b border-gray-200 bg-[#faf9f6]">
                <div className="container mx-auto px-4 py-1 flex items-center justify-between">
                  <TopStripSearch dateString={new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} />
                </div>
              </div>

              {/* Nameplate */}
              <div className="container mx-auto px-4 py-2 md:py-5 text-center">
                <Link href="/" className="inline-block group" aria-label="oWire — home">
                  <div className="brand-wordmark text-[2.6rem] sm:text-6xl md:text-8xl">
                    <span className="o">o</span>Wire
                  </div>
                  <div className="brand-rule mx-auto mt-2 w-40 md:w-72" />
                  <p className="mt-2 text-[9px] tracking-[.3em] uppercase text-gray-500 font-mono whitespace-nowrap">
                    Sports <span className="brand-accent-text">·</span> Creators <span className="brand-accent-text">·</span> Culture
                  </p>
                </Link>
              </div>

              {/* Section nav bar — hub dropdowns */}
              <MainNav />
            </header>

            <main style={{ marginLeft: '10px', marginRight: '10px' }}>{children}</main>

        {/* Footer */}
        <footer className="border-t-2 border-gray-900 dark:border-gray-700 bg-[#f9f8f5] dark:bg-[#0d0d0d] mt-24">

          {/* Top accent bar */}
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, var(--brand-accent) 0%, var(--brand-ink) 100%)' }} />

          {/* Main footer grid */}
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-x-10 gap-y-12">

              {/* Brand column */}
              <FooterAuthorSlot />

              {/* Sports */}
              <div>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Sports</h4>
                <div className="flex flex-col gap-2.5">
                  <Link href="/soccer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Soccer</Link>
                  <Link href="/world-cup" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">World Cup 2026</Link>
                  <Link href="/premier-league" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Premier League</Link>
                  <Link href="/mls" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">MLS</Link>
                  <Link href="/mlb" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">MLB</Link>
                  <Link href="/golf" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Golf</Link>
                </div>
              </div>

              {/* Creators & Culture */}
              <div>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Creators</h4>
                <div className="flex flex-col gap-2.5">
                  <Link href="/creator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">All Creators</Link>
                  <Link href="/creator/news" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Creator News</Link>
                  <Link href="/youtube" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">YouTube</Link>
                  <Link href="/creator/mrbeast" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">MrBeast</Link>
                  <Link href="/creator/alix-earle" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Alix Earle</Link>
                  <Link href="/cars" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Cars</Link>
                </div>
              </div>

              {/* Newsroom */}
              <div>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Newsroom</h4>
                <div className="flex flex-col gap-2.5">
                  <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">About oWire</Link>
                  <Link href="/authors" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Our Authors</Link>
                  <Link href="/editorial-standards" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Editorial Standards</Link>
                  <Link href="/corrections" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Corrections</Link>
                  <Link href="/get-help/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Contact Us</Link>
                  <Link href="/site-index" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">Site Index</Link>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Newsletter</h4>
                <NewsletterSignupInline />
              </div>

            </div>
          </div>

          {/* Transparency / editorial disclosure */}
          <div className="border-t border-gray-200 dark:border-gray-800">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Mission */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Our Mission</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    oWire is an independent sports and culture news network based in Austin, Texas. We publish verified, source-cited reporting on athletes, creators, and cultural moments. Accuracy over speed, always.
                  </p>
                </div>

                {/* Editorial independence */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Editorial Independence</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Editorial decisions are made independently of advertising and sponsorship. Sponsored content is clearly labeled. Errors are corrected publicly and transparently.{' '}
                    <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">Read our editorial standards.</Link>
                  </p>
                </div>

                {/* Contact & legal */}
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Contact</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Newsroom tips, corrections, and press inquiries:{' '}
                    <Link href="/get-help/contact" className="text-blue-600 hover:text-blue-800 underline">contact form</Link>.
                    Copyright complaints:{' '}
                    <Link href="/copyright" className="text-blue-600 hover:text-blue-800 underline">copyright policy</Link>.
                    Based in Austin, Texas, USA.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="font-bold text-gray-600 dark:text-gray-300">oWire</span>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <span>Sports &amp; Culture News Network</span>
                <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">|</span>
                <span className="hidden sm:inline">Austin, Texas</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <span>© 2026 oWire. All rights reserved.</span>
                <Link href="/privacy-policy" className="hover:text-black dark:hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms-of-service" className="hover:text-black dark:hover:text-white transition-colors">Terms</Link>
                <Link href="/copyright" className="hover:text-black dark:hover:text-white transition-colors">Copyright</Link>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: 'var(--brand-accent)' }} />
                  <span>owire.org</span>
                </div>
              </div>

            </div>
          </div>

        </footer>

            </FooterAuthorProvider>
        </ThemeProvider>
        </AuthProvider>
        {/* GA4 — Script tags in server component for guaranteed detection */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                send_page_view: false,
                cookie_flags: 'SameSite=Lax;Secure'
              });
            `,
          }}
        />
        {/* Microsoft Clarity — heatmaps, session recordings, Bing Webmaster integration */}
        <Script
          id="microsoft-clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wjhv8feuku");
            `,
          }}
        />
        <GoogleAnalytics />
        {/* Google Publisher Center — Subscribe with Google (SwG) sync
            Product ID: CAowp5vgCw:openaccess
            Keeps article access/entitlement state in sync with Google News */}
        <Script
          id="swg-basic-lib"
          strategy="afterInteractive"
          src="https://news.google.com/swg/js/v1/swg-basic.js"
        />
        <Script
          id="swg-basic-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (self.SWG_BASIC = self.SWG_BASIC || []).push(basicSubscriptions => {
                basicSubscriptions.init({
                  type: "NewsArticle",
                  isPartOfType: ["Product"],
                  isPartOfProductId: "CAowp5vgCw:openaccess",
                  clientOptions: { theme: "light", lang: "en" },
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
