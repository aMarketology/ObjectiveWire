import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/us-news/lams-seafood-ebt-fraud-king-5-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-us-news-lams-seafood-ebt-fraud-king-5-2026.jpg`;

export const metadata: Metadata = {
  title: "Lam's Seafood EBT Fraud King 5 | What Investigations Found",
  description:
    "A viral video accused Seattle's Lam's Seafood of EBT fraud. We break down what the video showed, the store's response, and what police found.",
  keywords: [
    "Lam's Seafood EBT fraud King 5",
    "Lam's Seafood viral video Seattle",
    'Nick Shirley EBT fraud',
    'food stamp fraud Seattle Chinatown',
    "Teizi Mersai Lam's Seafood",
    'Seattle Police Department EBT trafficking',
    "Lam's Seafood Asian Market response",
    'EBT fraud Chinatown International District',
    'Nick Shirley Lam Seafood video',
    'Seattle EBT trafficking investigation 2025',
    'food stamp fraud viral video',
    "Lam's Seafood legal action influencer",
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Was Lam's Seafood Involved in EBT Fraud | What Investigations Actually Found",
    description:
      "A viral video accused Seattle's Lam's Seafood of EBT fraud. The store says the transaction never happened, and past police investigations cleared the business of wrongdoing.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-15T15:00:00Z',
    modifiedTime: '2026-10-15T15:00:00Z',
    section: 'News',
    tags: ["Lam's Seafood", 'EBT Fraud', 'Seattle', 'Nick Shirley', 'Investigations'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Lam's Seafood EBT fraud investigation" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lam's Seafood Fights Back Against Viral EBT Fraud Claims",
    description: "The $120 can of meat was actually a 24-pack case, and the transaction never went through. What the video left out.",
    images: [OG_IMAGE],
  },
};

export default function LamsSeafoodEBTFraudPage() {
  return (
    <>
      <NewsArticleSchema
        title="Lam's Seafood EBT Fraud King 5 | What Investigations Found"
        description="A viral video accused Seattle's Lam's Seafood of EBT fraud. We break down what the video showed, the store's response, and what past police investigations actually uncovered."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-15T15:00:00Z"
        modifiedTime="2026-10-15T15:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="News"
        keywords={[
          "Lam's Seafood EBT fraud King 5",
          "Lam's Seafood viral video Seattle",
          'Nick Shirley EBT fraud',
        ]}
      />

      <QuickArticle
        title="Was Lam's Seafood Involved in EBT Fraud | What Investigations Actually Found"
        subtitle="A viral video leveled serious accusations against a long-standing family-owned grocery store in Seattle's Chinatown-International District. A closer look at the footage and past police investigations tells a much more complicated story."
        department="Investigations"
        category="News"
        accentColor="red"
        publishDate="October 15, 2026"
        readTime="5 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: "Lam's Seafood EBT fraud investigation",
          caption: "Lam's Seafood Asian Market in Seattle's Chinatown-International District.",
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/local/us-news', label: 'Local US News' },
          { href: SLUG, label: "Lam's Seafood EBT Fraud" },
        ]}
        sources={[
          {
            number: 1,
            title: "Was Lam's Seafood Involved in EBT Fraud? What Past Investigations Actually Found",
            url: 'https://www.king5.com/article/news/investigations/what-past-investigations-found-lams-seafood-ebt-fraud/281-48775d46-12e5-43a1-ab03-50a7074a6e72',
            publisher: 'KING 5 News',
          },
          {
            number: 2,
            title: "Lam's Seafood Market Calls Out Misleading Claims in a Right-Wing Influencer's Viral Video",
            url: 'https://www.kiro7.com/news/local/lams-seafood-market-calls-out-misleading-claims-right-wing-influencers-viral-video/RZFVHXJYNJHUNNJGQTVJSDIODI/',
            publisher: 'KIRO 7 News',
          },
          {
            number: 3,
            title: "Seattle Asian Market Rebuts Influencer's Food Stamp Fraud Charge",
            url: 'https://asamnews.com/2026/10/13/international-district-market-responds-fraud-accusations/',
            publisher: 'AsAmNews',
          },
        ]}
        relatedArticles={[
          { href: '/local/us-news/nick-shirley-food-stamp-fraud-video', title: 'Nick Shirley Food Stamp Fraud Video | EBT Cash-Out Investigation', category: 'News' },
          { href: '/local/us-news/keion-white-shooting-san-francisco-2026', title: 'Keion White Shot Outside San Francisco Venue | Four Men Charged', category: 'News' },
          { href: '/local/us-news', title: 'Local US News | Domestic Investigative Coverage', category: 'News' },
        ]}
        tags={["Lam's Seafood", 'EBT Fraud', 'Seattle', 'Nick Shirley', 'Investigations']}
      >
        <p>
          A viral video circulating online recently leveled serious accusations against a long-standing family-owned grocery store in Seattle's Chinatown-International District, sparking outrage, harassing phone calls, and a massive drop in business.
        </p>

        <p>
          The video, posted by conservative influencer <strong>Nick Shirley</strong>, seemed damning at first glance. It appeared to show a woman trading her food stamp (EBT) benefits for cash, walking into <strong>Lam's Seafood Asian Market</strong>, and the cashier allegedly ringing up $120 for a single can of luncheon meat and another small food item.
        </p>

        <p>
          However, a closer look at the footage and subsequent investigations by local news outlets like KING 5 and KIRO 7 reveal a much more complicated story, one where the viral accusations against the store appear to be highly misleading.
        </p>

        <h2>The Misleading $120 Can of Meat</h2>

        <p>
          In the video, Shirley claims Lam's Seafood was willingly participating in a scheme to ring up a single can of Spam and sushi for $120 to facilitate cash-for-EBT trafficking.
        </p>

        <p>
          But according to Lam's operations manager, <strong>Teizi Mersai</strong>, and a breakdown by KING 5, the video omits crucial context. The $120 charge was not for a single can; Shirley's own video briefly shows a 24-pack case on the register screen. The woman accompanying Shirley can be heard in Vietnamese asking the cashier for a full case of the meat. Because the cases are too large to keep on the retail shelves, an employee has to retrieve them from the back.
        </p>

        <p>
          Crucially, the transaction never actually happened. Shirley and the woman did not have the correct PIN for the EBT card, meaning the transaction failed. They left the store with the single can they had carried to the counter, without paying for or receiving the full case.
        </p>

        <p>
          "They walk out with nothing because there was no transaction," Mersai explained, accusing Shirley of ignoring the truth in pursuit of online views. "I don't even care if he apologizes. Just take it down, and he could put up a new correct one."
        </p>

        <p>
          Lam's Seafood states that the deceptive framing of the video has severely hurt their business, and the market is currently considering legal action against the influencer.
        </p>

        <h2>A Complicated History</h2>

        <p>
          While the video in question does not prove that Lam's Seafood staff knowingly participated in EBT fraud, the market's history with food stamp trafficking investigations is complex.
        </p>

        <p>
          In 2025, Lam's surfaced in a Seattle Police Department (SPD) investigation into a massive EBT trafficking operation in the Chinatown-International District. Police identified the market as a location where multiple fraudulent EBT transactions were occurring. Suspects were reportedly buying EBT cards from vulnerable individuals and using them to purchase bulk goods for resale.
        </p>

        <p>
          However, it is important to note that while Lam's Seafood was listed in court filings as a location tied to this activity, the business itself was <strong>not accused of any wrongdoing</strong>. Store management noted that they fully cooperated with the SPD investigation and willingly provided surveillance footage to help police track down the actual traffickers.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Lam's Seafood EBT Allegations Quick Intel Grid</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Location:</strong> Chinatown-International District, Seattle, WA</li>
            <li><strong>The Allegation:</strong> Viral video claimed the store rang up $120 for one can of meat</li>
            <li><strong>The Reality:</strong> The charge was for a 24-pack case; the transaction failed due to no PIN</li>
            <li><strong>Store's Response:</strong> Refutes the claims, notes massive loss of business, weighing legal action</li>
            <li><strong>Past Investigations:</strong> Store was a location for EBT fraud in 2025, but was cleared of wrongdoing</li>
          </ul>
        </div>

        <p>
          While EBT fraud and benefit trafficking remain very real problems in Seattle, particularly around 12th Avenue South and South Jackson Street, the recent viral mob aimed at Lam's Seafood appears to have targeted a cooperating business based on a heavily manipulated narrative.
        </p>

        <p>
          For more on the broader EBT fraud story, see our report on{' '}
          <Link href="/local/us-news/nick-shirley-food-stamp-fraud-video" className="text-blue-600 hover:text-blue-800 underline">
            Nick Shirley's food stamp fraud investigation
          </Link>{' '}
          and the{' '}
          <Link href="/local/us-news" className="text-blue-600 hover:text-blue-800 underline">
            Local US News hub
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}