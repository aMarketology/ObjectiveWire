import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/reality-tv/survivor/season-51/episode-6';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/reality-tv-survivor-season-51-episode-6-recap.jpg';

export const metadata: Metadata = {
  title: "Survivor 51 Episode 6 Recap | Tethered Idol and Ori Ousted",
  description:
    "Survivor 51 Episode 6 delivered a cross-tribe Exile summit, the debut Tethered Idol, and a 2-0 vote sending Ori Jean-Charles home from Savu.",
  keywords: [
    'Survivor 51 Episode 6 recap',
    'Survivor season 51 Ori elimination',
    'Kristin Tethered Idol Exile Island',
    'Savu tribe tribal council',
    'Jeff Probst Open Era Survivor 2026',
    'Survivor 51 I Love Crying episode',
    'Survivor Tethered Idol twist',
    'Survivor 51 Shot in the Dark',
    'Ori Jean-Charles voted out',
    'Survivor 51 Jelly hidden immunity idol',
    'Survivor 51 Toka immunity challenge',
    'Survivor 51 Exile Island summit',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Survivor 51 Episode 6 Breakdown | The Exile Summit, Tethered Idol and Ori's Exit",
    description:
      'A secret cross-tribe summit sent Ori, Kristin and Sharonda to Exile Island, unlocked the Tethered Idol, and set up a 2-0 vote that ended Ori Jean-Charles run.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-10-31T17:00:00Z',
    modifiedTime: '2026-10-31T17:00:00Z',
    section: 'Entertainment',
    tags: ['Survivor 51', 'Reality TV', 'Ori Jean-Charles', 'Jeff Probst', 'CBS'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Survivor 51 Episode 6 recap and tribal council' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Survivor 51 Episode 6: Tethered Idol Debut, Ori Voted Out 2-0",
    description: 'Kristin claims a brand-new franchise twist on Exile Island while Jelly burns an idol at the other tribal.',
    images: [OG_IMAGE],
  },
};

export default function Survivor51Episode6Page() {
  return (
    <>
      <NewsArticleSchema
        title="Survivor 51 Episode 6 Recap | Tethered Idol and Ori Ousted"
        description="Survivor 51 Episode 6 delivered a cross-tribe Exile summit, the debut Tethered Idol, and a 2-0 vote sending Ori Jean-Charles home from Savu."
        author="Jack Sterling"
        authorUrl="https://www.objectivewire.com/authors/jack-sterling"
        publishedTime="2026-10-31T17:00:00Z"
        modifiedTime="2026-10-31T17:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Entertainment"
        keywords={[
          'Survivor 51 Episode 6 recap',
          'Kristin Tethered Idol Exile Island',
          'Survivor season 51 Ori elimination',
        ]}
      />

      <QuickArticle
        title="Danger at Camp | Exile Island Twists and a Narrow Exit Mark Survivor 51 Episode 6"
        subtitle="The Open Era of Survivor 51 continues to deliver relentless volatility. Episode 6, titled I Love Crying, tested camp loyalties to the breaking point and introduced a game-changing new mechanic."
        department="Reality TV"
        category="Entertainment"
        accentColor="orange"
        publishDate="October 31, 2026"
        readTime="5 min read"
        author={{ name: 'Jack Sterling', slug: 'jack-sterling' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Survivor 51 Episode 6 recap and tribal council',
          caption: 'Survivor 51 Episode 6 introduced the Tethered Idol and sent Ori Jean-Charles home.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/reality-tv', label: 'Reality TV' },
          { href: '/reality-tv/survivor/season-51', label: 'Survivor 51' },
          { href: SLUG, label: 'Episode 6 Recap' },
        ]}
        sources={[
          {
            number: 1,
            title: 'CBS Official Survivor 51 Portal',
            url: 'https://www.cbs.com/shows/survivor/',
            publisher: 'CBS',
          },
          {
            number: 2,
            title: 'Survivor 51 Episode 6 Stats and Analysis',
            url: 'https://insidesurvivor.com/survivor-51-episode-6-stats-61990',
            publisher: 'Inside Survivor',
          },
        ]}
        relatedArticles={[
          { href: '/reality-tv/survivor/season-51', title: 'Survivor 51 Premiere | Aaliyah Puglia First Voted Out', category: 'Entertainment' },
          { href: '/reality-tv/survivor/season-51/castaways', title: 'Survivor 51 Castaways | Full Roster and Tribe Breakdown', category: 'Entertainment' },
          { href: '/reality-tv/the-voice/season-30', title: 'The Voice Season 30 Update | Cut Week Format Explained', category: 'Entertainment' },
          { href: '/reality-tv', title: 'Reality TV Hub | Survivor, The Voice, Big Brother', category: 'Entertainment' },
        ]}
        tags={['Survivor 51', 'Reality TV', 'Ori Jean-Charles', 'Jeff Probst', 'CBS']}
      >
        <p>
          The "Open Era" of <em>Survivor 51</em> continues to deliver relentless volatility. Following the chaos of recent multi-tribe vote flips and idol finds, <strong>Episode 6 ("I Love Crying")</strong> tested camp loyalties to the breaking point.
        </p>

        <p>
          With the struggling <strong>Savu</strong> tribe forced back to Tribal Council after another brutal immunity loss, a strategic summit on Exile Island introduced a game-changing new mechanic, culminating in a desperate Shot in the Dark play and the emotional elimination of <strong>Ori Jean-Charles</strong>.
        </p>

        <div className="my-8 not-prose rounded-xl border border-orange-200 bg-orange-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-3">Survivor 51 Episode 6 Summary</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Host:</strong> Jeff Probst</li>
            <li><strong>Voted Out:</strong> Ori Jean-Charles, original Savu</li>
            <li><strong>Exile Island Summit Participants:</strong> Ori, Kristin, and Sharonda</li>
            <li><strong>New Advantage Unlocked:</strong> The Tethered Idol, claimed by Kristin on Exile Island</li>
            <li><strong>Immunity Challenge Winners:</strong> Toka tribe</li>
            <li><strong>Tribal Council Result:</strong> Ori voted out 2-0 after Jelly plays an idol and a Shot in the Dark fails</li>
          </ul>
        </div>

        <div className="my-8 not-prose rounded-xl border border-orange-200 bg-orange-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-3">Episode 6 Flow</p>
          <p className="text-sm text-gray-700">
            Exile Island Summit, then Kristin claims the Tethered Idol, then Toka wins immunity, then Jelly plays an idol, then Ori is voted out.
          </p>
        </div>

        <h2>The Secret Summit and the Tethered Idol</h2>

        <p>
          The episode kicked off with a secret cross-tribe summit, sending <strong>Ori</strong>, <strong>Kristin</strong>, and <strong>Sharonda</strong> to Exile Island. Faced with a high-stakes ultimatum, two castaways were required to return to camp while one stayed behind to face a lone dilemma.
        </p>

        <p>
          Volunteering to remain on Exile Island, <strong>Kristin</strong> unlocked a brand-new franchise twist: the <strong>Tethered Idol</strong>. While granting powerful immunity protection, the idol carries strict usage limitations and conditional rules, immediately shifting the strategic power dynamic heading into the post-swap phase.
        </p>

        <h2>Tribal Council | Jelly's Idol and Ori's Elimination</h2>

        <p>
          Returning from the challenge losses, the decimated Savu camp became a pressure cooker between <strong>Devin</strong>, <strong>Jelly</strong>, and <strong>Ori</strong>. Recognizing that their trio was fracturing under target pressure, alliances scrambled until the final minutes before Tribal Council.
        </p>

        <ol>
          <li>
            <strong>The Idol Play.</strong> Realizing the vote was landing on her side of the alliance, Jelly pulled out her Hidden Immunity Idol, guaranteeing her safety and nullifying incoming votes against her.
          </li>
          <li>
            <strong>The Last Resort.</strong> Caught directly in the crosshairs, Ori attempted a last-ditch Shot in the Dark play to secure safety.
          </li>
          <li>
            <strong>The Result.</strong> The Shot in the Dark came up "Not Safe." With Jelly's idol canceling opposing ballots, Ori Jean-Charles was voted out in a 2-0 decision, leaving Devin and Jelly as the lone survivors of the original core group.
          </li>
        </ol>

        <p>
          For the full season context, read our{' '}
          <Link href="/reality-tv/survivor/season-51" className="text-blue-600 hover:text-blue-800 underline">
            Survivor 51 premiere recap
          </Link>{' '}
          and the{' '}
          <Link href="/reality-tv/survivor/season-51/castaways" className="text-blue-600 hover:text-blue-800 underline">
            complete castaways roster guide
          </Link>
          . More competition coverage lives in the{' '}
          <Link href="/reality-tv" className="text-blue-600 hover:text-blue-800 underline">
            Reality TV hub
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}