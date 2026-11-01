import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/reality-tv/amazing-race/season-39/episode-6';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/reality-tv-amazing-race-season-39-episode-6-recap.jpg';

export const metadata: Metadata = {
  title: "The Amazing Race 39 Episode 6 Recap | Express Passes Burned",
  description:
    "The Amazing Race Season 39 Episode 6 recap: the final Express Passes burned in Albania, a non-elimination save, and a Double U-Turn tease.",
  keywords: [
    'The Amazing Race Season 39 Episode 6 recap',
    'The Amazing Race 2026 Express Pass',
    'Albania leg Phil Keoghan',
    'Doug and Dylan non-elimination',
    'Michelle and Matt Patterson',
    'Double U-Turn vote',
    'Amazing Race 39 Leg 6 Albania',
    'Express Pass played Amazing Race 39',
    'Conner Wilson Garrett McGuire Express Pass',
    'Amazing Race 39 Pit Stop arrival order',
    'Amazing Race 39 non-elimination leg',
    'Amazing Race 39 Sri Lanka Leg 7',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "The Amazing Race 39 Episode 6 Recap | Last-Chance Express Passes and a U-Turn Setup",
    description:
      'Leg 6 in Albania forced the final Express Passes out of play, handed Doug and Dylan a non-elimination save, and set up a Double U-Turn vote in Sri Lanka.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-10-31T19:00:00Z',
    modifiedTime: '2026-10-31T19:00:00Z',
    section: 'Entertainment',
    tags: ['The Amazing Race', 'Reality TV', 'CBS', 'Express Pass', 'Phil Keoghan'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'The Amazing Race Season 39 Episode 6 recap in Albania' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazing Race 39 Episode 6: Express Passes Burned, Doug and Dylan Saved',
    description: 'Michelle and Matt win the Albania leg. Both remaining Express Passes go out of play before a non-elimination Pit Stop.',
    images: [OG_IMAGE],
  },
};

export default function AmazingRace39Episode6Page() {
  return (
    <>
      <NewsArticleSchema
        title="The Amazing Race 39 Episode 6 Recap | Express Passes Burned"
        description="The Amazing Race Season 39 Episode 6 recap: the final Express Passes burned in Albania, a non-elimination save, and a Double U-Turn tease."
        author="Jack Sterling"
        authorUrl="https://www.objectivewire.com/authors/jack-sterling"
        publishedTime="2026-10-31T19:00:00Z"
        modifiedTime="2026-10-31T19:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Entertainment"
        keywords={[
          'The Amazing Race Season 39 Episode 6 recap',
          'The Amazing Race 2026 Express Pass',
          'Doug and Dylan non-elimination',
        ]}
      />

      <QuickArticle
        title="High Stakes in Albania | Express Passes Burned and a Pit Stop Reprieve on The Amazing Race 39"
        subtitle="The pressure on Season 39 of The Amazing Race reached a boiling point during Leg 6. Navigating the historic streets and coastal turns of Albania, the eight remaining teams faced a strict deadline: it was the final leg where the coveted Express Passes could be played."
        department="Reality TV"
        category="Entertainment"
        accentColor="#0891b2"
        publishDate="October 31, 2026"
        readTime="5 min read"
        author={{ name: 'Jack Sterling', slug: 'jack-sterling' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'The Amazing Race Season 39 Episode 6 recap in Albania',
          caption: 'Leg 6 in Albania forced the final Express Passes out of play before a non-elimination Pit Stop.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/reality-tv', label: 'Reality TV' },
          { href: '/reality-tv/amazing-race/season-39', label: 'Amazing Race 39' },
          { href: SLUG, label: 'Episode 6 Recap' },
        ]}
        sources={[
          {
            number: 1,
            title: 'CBS Official The Amazing Race Portal',
            url: 'https://www.cbs.com/shows/amazing_race/',
            publisher: 'CBS',
          },
          {
            number: 2,
            title: 'The Amazing Race 2026 Episode 6 Recap: Express Passes, Doug and Dylan Saved',
            url: 'https://www.tvinsider.com/1300378/the-amazing-race-2026-episode-6-recap-express-passes-doug-dylan-saved/',
            publisher: 'TV Insider',
          },
        ]}
        relatedArticles={[
          { href: '/reality-tv/amazing-race/season-39', title: 'Amazing Race 39 Cast | Full 13-Team Roster and Bios', category: 'Entertainment' },
          { href: '/reality-tv/survivor/season-51/episode-6', title: 'Survivor 51 Episode 6 Recap | Tethered Idol and Ori Ousted', category: 'Entertainment' },
          { href: '/reality-tv/the-voice/season-30', title: 'The Voice Season 30 Update | Cut Week Format Explained', category: 'Entertainment' },
          { href: '/reality-tv', title: 'Reality TV Hub | Survivor, The Voice, Amazing Race', category: 'Entertainment' },
        ]}
        tags={['The Amazing Race', 'Reality TV', 'CBS', 'Express Pass', 'Phil Keoghan']}
      >
        <p>
          The pressure on <strong>Season 39 of <em>The Amazing Race</em></strong> reached a boiling point during <strong>Leg 6</strong>. Navigating the historic streets and coastal turns of Albania, the eight remaining teams faced a strict deadline: it was the absolute final leg where the coveted <strong>Express Passes</strong> could be played.
        </p>

        <p>
          With frontrunners racing to protect their position and trailing teams burning advantages to avoid the back of the pack, host Phil Keoghan delivered a major cliffhanger twist at the Pit Stop.
        </p>

        <div className="my-8 not-prose rounded-xl border border-cyan-200 bg-cyan-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">The Amazing Race Season 39 Leg 6 Summary</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Location:</strong> Albania, next stop Sri Lanka</li>
            <li><strong>Leg Winners:</strong> Michelle and Matt Patterson, claimed 1st place</li>
            <li><strong>Last Place Team:</strong> Doug Matter and Dylan Matter, saved by non-elimination</li>
            <li><strong>Advantage Usage:</strong> Both remaining Express Passes played, by Michelle and Matt plus Conner and Garrett</li>
            <li><strong>Upcoming Twist:</strong> Double U-Turn vote teased for Leg 7</li>
          </ul>
        </div>

        <div className="my-8 not-prose rounded-xl border border-cyan-200 bg-cyan-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">Leg 6 Progression</p>
          <p className="text-sm text-gray-700">
            Intersection Roadblock, then the "Heads or Tails" Detour, then Express Pass plays, then the Pit Stop and non-elimination save.
          </p>
        </div>

        <h2>Burning the Express Passes | Strategy Under Pressure</h2>

        <p>
          With the rulebook mandating that all unused Express Passes expire after Leg 6, two teams executed strategic plays:
        </p>

        <ol>
          <li>
            <strong>Michelle and Matt Patterson.</strong> Despite already holding a solid lead at the "Heads" Detour, the married couple opted to flush their Express Pass early to bypass the remaining tasks entirely, cruising to a <strong>1st place finish</strong>.
          </li>
          <li>
            <strong>Conner Wilson and Garrett McGuire.</strong> Falling into the middle of the pack after a delayed Roadblock, Conner and Garrett played their Express Pass at the "Tails" Detour, jumping up the standings to lock in a 3rd place arrival.
          </li>
        </ol>

        <h2>The Pit Stop Reprieve and the Sri Lanka Tease</h2>

        <p>
          At the bottom of the order, grandfather-and-grandson duo <strong>Doug and Dylan Matter</strong> struggled to recover from initial navigation delays and mistimed Detour checks. Arriving last at the Pit Stop mat, they faced potential elimination.
        </p>

        <p>
          However, Phil Keoghan revealed that <strong>Leg 6 was a non-elimination leg</strong>, giving Doug and Dylan a second chance to stay in the hunt for the <strong>$1 million grand prize</strong>.
        </p>

        <div className="my-8 not-prose rounded-xl border border-cyan-200 bg-cyan-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">Leg 6 Arrival Order</p>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700">
            <li><strong>Michelle and Matt Patterson</strong></li>
            <li><strong>Daisha Wilks and Dalton Hamby</strong></li>
            <li><strong>Conner Wilson and Garrett McGuire</strong></li>
            <li><strong>Ann-Marie Tejcek and Riley Tejcek</strong></li>
            <li><strong>Ali Krieger and Joanna Lohman</strong></li>
            <li><strong>Anuar Tager and Andrea Tager Ballesca</strong></li>
            <li><strong>Erin Taylor and Javi Vintimilla</strong></li>
            <li><strong>Doug Matter and Dylan Matter</strong> (non-elimination)</li>
          </ol>
        </div>

        <p>
          As the teams boarded their flight to <strong>Sri Lanka</strong> for Leg 7, Keoghan dropped a final bombshell: all eight pairs will cast votes for a <strong>Double U-Turn</strong> immediately upon arrival.
        </p>

        <p>
          For the full field of teams and the all-Express Pass starting twist, read our{' '}
          <Link href="/reality-tv/amazing-race/season-39" className="text-blue-600 hover:text-blue-800 underline">
            Amazing Race Season 39 cast guide
          </Link>
          . More competition recaps live in the{' '}
          <Link href="/reality-tv" className="text-blue-600 hover:text-blue-800 underline">
            Reality TV hub
          </Link>
          , including{' '}
          <Link href="/reality-tv/survivor/season-51/episode-6" className="text-blue-600 hover:text-blue-800 underline">
            Survivor 51 Episode 6
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}