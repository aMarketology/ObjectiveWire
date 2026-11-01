import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/reality-tv/the-voice/season-30';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/reality-tv-the-voice-season-30-update.jpg';

export const metadata: Metadata = {
  title: "The Voice Season 30 Update | Cut Week Format Explained",
  description:
    "The Voice Season 30 wrapped Battle Rounds with Kelly Clarkson, Adam Levine, Queen Latifah and Riley Green. Here is the new Cut Week format.",
  keywords: [
    'The Voice Season 30 update',
    'The Voice Season 30 coaches',
    'The Voice Cut Week format',
    'Queen Latifah Riley Green Kelly Clarkson Adam Levine',
    'Battle Advisors Season 30',
    'NBC Peacock The Voice 2026',
    'The Voice Season 30 Knockouts replaced',
    'The Voice TikTok wildcard save',
    'The Voice Top 13 live shows',
    'Ariana DeBose Alex Warren Patti LaBelle Carly Pearce',
    'The Voice blind auditions first-in twist',
    'The Voice season 30 air time',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "The Voice Season 30 Update | Star Battle Advisors & the New Cut Week Twist",
    description:
      'Battle Rounds are done on The Voice Season 30. Coaches Kelly Clarkson, Adam Levine, Queen Latifah and Riley Green now face Cut Week, the largest single-week elimination in show history.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-10-31T15:00:00Z',
    modifiedTime: '2026-10-31T15:00:00Z',
    section: 'Entertainment',
    tags: ['The Voice', 'NBC', 'Reality TV', 'Kelly Clarkson', 'Adam Levine'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'The Voice Season 30 update and Cut Week format' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Voice Season 30: Battles End, Cut Week Begins",
    description: 'Knockouts are gone. Seven artists per team fight for live show spots in the biggest elimination week ever.',
    images: [OG_IMAGE],
  },
};

export default function TheVoiceSeason30Page() {
  return (
    <>
      <NewsArticleSchema
        title="The Voice Season 30 Update | Cut Week Format Explained"
        description="The Voice Season 30 wrapped Battle Rounds with Kelly Clarkson, Adam Levine, Queen Latifah and Riley Green. Here is the new Cut Week format."
        author="Jack Sterling"
        authorUrl="https://www.objectivewire.com/authors/jack-sterling"
        publishedTime="2026-10-31T15:00:00Z"
        modifiedTime="2026-10-31T15:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Entertainment"
        keywords={[
          'The Voice Season 30 update',
          'The Voice Cut Week format',
          'The Voice Season 30 coaches',
        ]}
      />

      <QuickArticle
        title="Landmark Season 30 | A Star-Studded Panel and High-Stakes Format Changes on The Voice"
        subtitle="NBC's flagship vocal competition is celebrating its 30th season by shaking up the traditional red-chair dynamics. With Battle Rounds officially wrapped, the competition now shifts into an all-new phase that replaces the Knockout rounds with a high-stakes elimination format."
        department="Reality TV"
        category="Entertainment"
        accentColor="purple"
        publishDate="October 31, 2026"
        readTime="4 min read"
        author={{ name: 'Jack Sterling', slug: 'jack-sterling' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'The Voice Season 30 update and Cut Week format',
          caption: 'The Voice Season 30 replaces Knockout Rounds with the new Cut Week elimination format.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/reality-tv', label: 'Reality TV' },
          { href: SLUG, label: 'The Voice Season 30' },
        ]}
        sources={[
          {
            number: 1,
            title: 'NBC Official The Voice Show Directory',
            url: 'https://www.nbc.com/the-voice',
            publisher: 'NBC',
          },
          {
            number: 2,
            title: 'The Voice Season 30 Schedule and Roster Updates',
            url: 'https://www.tvinsider.com/show/the-voice/',
            publisher: 'TV Insider',
          },
        ]}
        relatedArticles={[
          { href: '/reality-tv/amazing-race/season-39', title: 'Amazing Race 39 Cast | Full 13-Team Roster and Bios', category: 'Entertainment' },
          { href: '/reality-tv/survivor/season-51', title: 'Survivor 51 Premiere | Aaliyah Puglia First Voted Out', category: 'Entertainment' },
          { href: '/reality-tv/big-brother/season-28', title: 'Big Brother 28 Final Four | Scenarios, Odds, Winner Analysis', category: 'Entertainment' },
          { href: '/reality-tv', title: 'Reality TV Hub | The Voice, Survivor, Big Brother', category: 'Entertainment' },
        ]}
        tags={['The Voice', 'NBC', 'Reality TV', 'Kelly Clarkson', 'Adam Levine']}
      >
        <p>
          <em>The Voice</em> Season 30 has officially concluded its Battle Rounds and is entering <strong>Cut Week</strong>, a new mass-elimination phase that replaces the show's traditional Knockout Rounds. The 30th season of NBC's vocal competition pairs returning veterans Kelly Clarkson and Adam Levine with first-time coaches Queen Latifah and country star Riley Green.
        </p>

        <p>
          The landmark season has shaken up the traditional red-chair dynamics while introducing major gameplay twists, beginning with a "First-In" mechanic during the Blind Auditions and continuing through the new elimination structure.
        </p>

        <h2>The Season 30 Coach Panel and Battle Advisors</h2>

        <p>
          Season 30 combines veteran fan favorites with premier genre crossover artists, supported by an elite group of guest advisors who helped prepare each team for battle.
        </p>

        <div className="my-8 not-prose rounded-xl border border-purple-200 bg-purple-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">The Voice Season 30 Panel and Battle Advisors</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Kelly Clarkson</strong> (11th season as coach) | Battle Advisor: <strong>Ariana DeBose</strong>, Oscar-winning performer</li>
            <li><strong>Adam Levine</strong> (19th season as coach) | Battle Advisor: <strong>Alex Warren</strong>, Grammy-nominated hitmaker</li>
            <li><strong>Queen Latifah</strong> (debut season as coach) | Battle Advisor: <strong>Patti LaBelle</strong>, R&B and soul legend</li>
            <li><strong>Riley Green</strong> (debut season as coach) | Battle Advisor: <strong>Carly Pearce</strong>, Grammy-winning country star</li>
          </ul>
        </div>

        <div className="my-8 not-prose rounded-xl border border-purple-200 bg-purple-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-3">Season 30 Phase Progression</p>
          <p className="text-sm text-gray-700">
            Blind Auditions with the "First-In" twist, then Battle Rounds and Steals, then Cut Week mass elimination, then the Top 13 Live Shows.
          </p>
        </div>

        <h2>Major Format Shift | What Is Cut Week</h2>

        <p>
          For Season 30, show producers officially eliminated the traditional Knockout Rounds, replacing them with <strong>"Cut Week"</strong>, the largest single-week elimination in <em>The Voice</em> history.
        </p>

        <p>
          Entering the phase with seven artists per team, each coach faces a brutal series of decisions:
        </p>

        <ol>
          <li>
            <strong>Direct Live Pass.</strong> Each coach automatically fast-tracks two artists directly into the Live Shows.
          </li>
          <li>
            <strong>The Five-Way Battle.</strong> The remaining five artists per team perform head-to-head for just one remaining coach spot.
          </li>
          <li>
            <strong>The TikTok Wildcard.</strong> America votes via a social media Save to select one final wildcard contestant across all teams, creating a final Top 13 roster for the Live Shows.
          </li>
        </ol>

        <h2>How to Watch The Voice Season 30</h2>

        <p>
          New episodes of <em>The Voice</em> Season 30 air <strong>Mondays and Tuesdays at 8:00 PM ET/PT on NBC</strong>, with full episodes streaming next-day on <strong>Peacock</strong>.
        </p>

        <p>
          For more reality competition coverage, see the{' '}
          <Link href="/reality-tv" className="text-blue-600 hover:text-blue-800 underline">
            Reality TV hub
          </Link>
          , our{' '}
          <Link href="/reality-tv/survivor/season-51" className="text-blue-600 hover:text-blue-800 underline">
            Survivor 51 premiere recap
          </Link>
          , and the{' '}
          <Link href="/reality-tv/amazing-race/season-39" className="text-blue-600 hover:text-blue-800 underline">
            Amazing Race Season 39 cast guide
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}