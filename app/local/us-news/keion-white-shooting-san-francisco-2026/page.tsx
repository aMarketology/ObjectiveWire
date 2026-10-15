import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/us-news/keion-white-shooting-san-francisco-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-us-news-keion-white-shooting-san-francisco-2026.jpg`;

export const metadata: Metadata = {
  title: 'Keion White Shot | 49ers Star and Four SF Suspects',
  description:
    'San Francisco 49ers defensive lineman Keion White was shot outside a Mission District venue in February 2026. Four men face charges and White has fully recovered.',
  keywords: [
    'Keion White shot San Francisco',
    'Keion White 49ers shooting',
    'Keion White suspects charged',
    'Gregory Walker Keion White shooting',
    'Dahlia Mission Street shooting',
    'Keion White recovery 2026',
    'San Francisco police shooting investigation',
    'Keion White sacks 2026 season',
    '49ers Keion White ankle wound',
    'Marquis Davis Fulton County extradition',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Keion White Shot Outside San Francisco Venue | Four Arrested, Player Fully Recovered',
    description:
      'A private Super Bowl party turned violent when 49ers defensive lineman Keion White was shot in the ankle outside a Mission District building. A 250-officer, multi-state investigation led to four arrests.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-14T19:00:00Z',
    modifiedTime: '2026-10-14T19:00:00Z',
    section: 'News',
    tags: ['Keion White', 'San Francisco 49ers', 'Crime', 'SFPD', 'NFL'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Keion White shooting San Francisco investigation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keion White Shot in San Francisco | Four Suspects Charged',
    description: 'The 49ers lineman was hit in the ankle and has fully recovered. Over 50 warrants and 250 officers led to four arrests.',
    images: [OG_IMAGE],
  },
};

export default function KeionWhiteShootingPage() {
  return (
    <>
      <NewsArticleSchema
        title="Keion White Shot | 49ers Star and Four SF Suspects"
        description="San Francisco 49ers defensive lineman Keion White was shot outside a Mission District venue in February 2026. Four men face charges and White has fully recovered."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-14T19:00:00Z"
        modifiedTime="2026-10-14T19:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="News"
        keywords={[
          'Keion White shot San Francisco',
          'Keion White 49ers shooting',
          'Keion White suspects charged',
        ]}
      />

      <QuickArticle
        title="Keion White Shot Outside San Francisco Venue | Four Men Charged in Multi-State Investigation"
        subtitle="San Francisco 49ers defensive lineman Keion White was shot in the early morning hours of Monday, February 9, 2026, after a private Super Bowl party turned violent. Police say a multi-agency, multi-state investigation led to four arrests, and White has since made a full recovery."
        department="Crime"
        category="News"
        accentColor="red"
        publishDate="October 14, 2026"
        readTime="4 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Keion White shooting San Francisco investigation',
          caption: 'Keion White was shot outside a Mission District venue in February 2026 and has fully recovered.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/local/us-news', label: 'Local US News' },
          { href: SLUG, label: 'Keion White Shooting' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Police Commission and Incident Bulletins',
            url: 'https://www.sanfranciscopolice.org',
            publisher: 'San Francisco Police Department',
          },
          {
            number: 2,
            title: 'Bay Area Crime and Courts Coverage',
            url: 'https://www.sfchronicle.com',
            publisher: 'The San Francisco Chronicle',
          },
          {
            number: 3,
            title: 'Local San Francisco News Desk',
            url: 'https://abc7news.com',
            publisher: 'ABC7 News',
          },
          {
            number: 4,
            title: 'San Francisco 49ers Team and Player Stats',
            url: 'https://www.espn.com/nfl/team/_/name/sf/san-francisco-49ers',
            publisher: 'ESPN',
          },
        ]}
        relatedArticles={[
          { href: '/local/us-news/nick-shirley-food-stamp-fraud-video', title: 'Nick Shirley Food Stamp Fraud Video | EBT Cash-Out Investigation', category: 'News' },
          { href: '/local/us-news', title: 'Local US News | Domestic Investigative Coverage', category: 'News' },
          { href: '/local', title: 'All Local Coverage', category: 'Local' },
        ]}
        tags={['Keion White', 'San Francisco 49ers', 'Crime', 'SFPD', 'NFL']}
      >
        <p>
          San Francisco 49ers defensive lineman <strong>Keion White</strong> was shot in the early morning hours of <strong>Monday, February 9, 2026</strong>. The incident took place shortly after 4 a.m. outside <strong>Dahlia</strong>, a venue on Mission Street in San Francisco's Mission District. White was hosting a private Super Bowl party following the conclusion of the NFL season when a verbal argument broke out between two groups, leading to gunfire outside the building.
        </p>

        <h2>Four Suspects Arrested | Charges in Each Case</h2>

        <p>
          San Francisco Police Chief Derrick Lew announced that a multi-agency, multi-state investigation, involving over 50 search warrants and 250 law enforcement personnel, led to the <strong>arrest of four men</strong>.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Suspect Arrest and Charge Summary</p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong>Gregory Walker</strong>, 36, Mountain House, CA. Primary suspect accused of firing the gun. Charged with assault with a semiautomatic firearm and felon in possession of a firearm.
            </li>
            <li>
              <strong>Curtis Green</strong>, 35, Irvine, CA. Charged with misdemeanor brandishing of a firearm and carrying a concealed, loaded weapon in public.
            </li>
            <li>
              <strong>Antoine Washington</strong>, 36, Stockton, CA. Arrested with a loaded gun, $7,000 in cash, and over 120 oxycodone pills.
            </li>
            <li>
              <strong>Marquis Davis</strong>, 37, Atlanta, GA. Apprehended in Fulton County, Georgia, and currently facing local drug and weapons charges prior to extradition to California.
            </li>
          </ul>
        </div>

        <h2>Keion White's Recovery | Back on the Field in 2026</h2>

        <p>
          <strong>Keion White is fully recovered and actively playing.</strong> White sustained a non-life-threatening gunshot wound to his ankle during the February shooting and underwent emergency surgery the same day to repair the damage.
        </p>

        <p>
          Following offseason rehabilitation, White made a full recovery and was cleared for the start of the 2026 NFL regular season. He has appeared in all five of the 49ers' regular-season games this fall, recording <strong>3.0 sacks</strong>.
        </p>

        <p>
          For more domestic investigative coverage, see{' '}
          <Link href="/local/us-news" className="text-blue-600 hover:text-blue-800 underline">
            Local US News
          </Link>{' '}
          and our report on{' '}
          <Link href="/local/us-news/nick-shirley-food-stamp-fraud-video" className="text-blue-600 hover:text-blue-800 underline">
            the Nick Shirley EBT fraud investigation
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}