import type { Metadata } from 'next';
import Link from 'next/link';
import NewsArticle from '@/components/articles/NewsArticle';
import { KeyTakeaways } from '@/components/articles/KeyTakeaways';

export const revalidate = 86400;

const SLUG = '/youtube/england-vs-france-charity-match-2026';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org${SLUG}/opengraph-image`;

export const metadata: Metadata = {
  title: 'England vs France Creator Match 2026 | Eleven All-Stars 2 at Parc des Princes',
  description:
    'England vs France creator football returns May 24, 2026 at Parc des Princes. KSI captains Team England against AmineMaTue\'s Team France in Eleven All-Stars 2. Free live stream on Sidemen YouTube and AmineMaTue Twitch.',
  keywords: [
    'England vs France creator match 2026',
    'Eleven All-Stars 2',
    'Eleven All Stars France vs England',
    'KSI France vs England',
    'Sidemen France match 2026',
    'AmineMaTue creator match',
    'Parc des Princes creator match',
    'influencer football 2026',
    'creator charity match May 2026',
    'Squeezie charity match',
    'Inoxtag football match',
    'Kameto KCorp match',
    'Niko Omilana France match',
    'Sidemen charity match France',
    'creator football live stream',
    'France vs England YouTube match',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'England vs France Creator Match 2026 | Eleven All-Stars 2 at Parc des Princes',
    description:
      'KSI leads Team England against AmineMaTue\'s Team France at the iconic 48,000-seat Parc des Princes on May 24, 2026. Free global live stream.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'oWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-21T12:00:00Z',
    modifiedTime: '2026-05-21T12:00:00Z',
    section: 'YouTube',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'England vs France Eleven All-Stars 2 creator match 2026' }],
    tags: ['KSI', 'Sidemen', 'AmineMaTue', 'Creator Football', 'Parc des Princes'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'England vs France Creator Match | May 24, 2026 at Parc des Princes',
    description: 'KSI vs AmineMaTue. Sidemen vs France. Free live stream on YouTube and Twitch, May 24.',
    images: [OG_IMAGE],
  },
};

export default function ElevenAllStars2Page() {
  return (
    <NewsArticle
      title="England vs France Creator Football | Eleven All-Stars 2 at Parc des Princes, May 24, 2026"
      subtitle="KSI captains Team England against AmineMaTue's Team France at the 48,000-seat home of PSG. The free global live stream begins at 7PM BST."
      category="YouTube"
      categoryColor="red"
      topicTag="entertainment"
      publishDate="May 21, 2026"
      readTime="6 min read"
      author={{
        name: 'Jack Sterling',
        role: 'Creator Economy Reporter',
        authorSlug: 'jack-sterling',
      }}
      slug="youtube-england-vs-france-charity-match-2026"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'YouTube', item: '/youtube' },
        { name: 'England vs France 2026', item: SLUG },
      ]}
      tags={['KSI', 'Sidemen', 'AmineMaTue', 'Creator Football', 'Parc des Princes', 'Eleven All-Stars']}
      faqItems={[
        {
          question: 'When is the England vs France creator match 2026?',
          answer:
            'The Eleven All-Stars 2 creator match takes place on Sunday, May 24, 2026. Kick-off is at 7:00 PM BST / 8:00 PM CEST / 2:00 PM EDT at the Parc des Princes in Paris.',
        },
        {
          question: 'Where can I watch England vs France creator match live?',
          answer:
            'The English broadcast streams free on the official Sidemen YouTube channel. The French broadcast streams live on AmineMaTue\'s Twitch channel. Both are completely free globally.',
        },
        {
          question: 'Who is captaining Team England in Eleven All-Stars 2?',
          answer:
            'KSI of the Sidemen is captaining Team England. The squad also includes Miniminter, Behzinga, Tobjizzle, Angry Ginge, and Niko Omilana of Beta Squad.',
        },
        {
          question: 'Who is captaining Team France in Eleven All-Stars 2?',
          answer:
            'AmineMaTue is captaining Team France, which also includes Squeezie, Inoxtag, Kameto, and Michou, among other French tier-1 creators.',
        },
        {
          question: 'What was the result of the first England vs France creator match?',
          answer:
            'Team France won the original 2022 match at the Jean-Bouin stadium 5-2 against the UK team, setting up the 2026 rematch at Parc des Princes.',
        },
      ]}
      moreFromHub={[
        { slug: 'youtube-sidemen-charity-match', title: 'Sidemen Charity Match 2026 | Guide', url: '/youtube/sidemen/charity-match', category: 'YouTube' },
        { slug: 'youtube-sidemen-charity-match-lineup', title: 'Charity Match Lineup | Max Fosh, WillNE', url: '/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne', category: 'YouTube' },
        { slug: 'youtube-sidemen-alfie-buttle', title: 'AB (Alfie Buttle) | Sidemen Profile', url: '/youtube/sidemen/alfie-buttle', category: 'YouTube' },
        { slug: 'youtube-history', title: 'YouTube History | Founded 2005 to 2B Users', url: '/youtube/history', category: 'YouTube' },
      ]}
      moreFromHubLabel="YouTube"
      moreFromHubHref="/youtube"
    >
      <KeyTakeaways
        color="red"
        items={[
          'Eleven All-Stars 2 is a creator football match between Team England and Team France at the Parc des Princes in Paris on Sunday, May 24, 2026.',
          'Kick-off is at 7:00 PM BST / 8:00 PM CEST / 2:00 PM EDT, with a free global live stream on Sidemen YouTube and AmineMaTue Twitch.',
          'KSI captains Team England with Sidemen members Miniminter, Behzinga, and Tobjizzle, plus Niko Omilana of Beta Squad.',
          'AmineMaTue captains Team France alongside Squeezie, Inoxtag, Kameto, and Michou.',
          'The first Eleven All-Stars match in 2022 peaked at over 1.1 million concurrent Twitch viewers. The 2026 rematch moves to the 48,000-seat home of PSG.',
        ]}
      />

      <div>
        <p>
          Eleven All-Stars 2 is a creator football match between Team England and Team France scheduled for Sunday, May 24, 2026, at the Parc des Princes in Paris, kick-off at 7:00 PM BST. The match is free to watch globally, with the English broadcast live on the{' '}
          <a href="https://www.youtube.com/@Sidemen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
            Sidemen YouTube channel
          </a>{' '}
          and the French broadcast live on{' '}
          <a href="https://www.twitch.tv/aminematue" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
            AmineMaTue's Twitch channel
          </a>
          .
        </p>

        {/* Official trailer embed */}
        <div className="my-8 rounded-xl overflow-hidden shadow-lg aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dYoWcjBkENI"
            title="Eleven All-Stars 2 — France vs England Official Announcement"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h2>Match Details | Date, Venue, Kick-Off Times</h2>

        <p>
          The match takes place at the Parc des Princes, the 48,000-seat home of Paris Saint-Germain in the 16th arrondissement of Paris. It is one of the most recognizable football venues in Europe, and hosting a creator match at this scale is a direct statement about how far the influencer football scene has come since the first Eleven All-Stars event in 2022. Kick-off times by timezone:
        </p>

        <ul>
          <li><strong>7:00 PM BST</strong> (UK)</li>
          <li><strong>8:00 PM CEST</strong> (Paris, local time)</li>
          <li><strong>2:00 PM EDT</strong> (US East Coast)</li>
          <li><strong>1:00 PM CDT</strong> (US Central)</li>
        </ul>

        <h2>Team England Roster | KSI and the Sidemen</h2>

        <p>
          Team England is captained by KSI, the most recognized name in creator sports globally. KSI has competed in high-profile boxing matches, co-founded Prime Hydration, and remains the public face of the{' '}
          <Link href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">
            Sidemen Charity Match
          </Link>{' '}
          series, which has raised millions for charity over multiple editions. His presence as captain signals that the England side is treating this rematch seriously.
        </p>

        <p>
          The confirmed Team England squad features several core Sidemen members alongside talent from adjacent creator groups. The{' '}
          <Link href="/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne" className="text-blue-600 hover:text-blue-800 underline">
            2026 Sidemen Charity Match lineup
          </Link>{' '}
          gives further context on the UK creator football ecosystem heading into this event.
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-blue-700 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3 font-bold w-1/2">Team England (The Three Lions)</th>
                <th className="px-5 py-3 font-bold text-gray-300 font-normal">Affiliation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['KSI (Captain)', 'The Sidemen'],
                ['Miniminter', 'The Sidemen'],
                ['Behzinga', 'The Sidemen'],
                ['Tobjizzle', 'The Sidemen'],
                ['Angry Ginge', 'Independent'],
                ['Niko Omilana', 'Beta Squad'],
              ].map(([name, group]) => (
                <tr key={name} className="bg-white hover:bg-blue-50 transition-colors">
                  <td className="px-5 py-3 font-semibold text-gray-900">{name}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{group}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Team France Roster | AmineMaTue and French Tier-1 Creators</h2>

        <p>
          Team France is captained by AmineMaTue, who was the primary architect of the original 2022 event that shattered French streaming records. His co-organizer role alongside the Sidemen gives Eleven All-Stars 2 the same bilateral institutional structure as its predecessor. The French roster represents the top tier of French-language YouTube and Twitch.
        </p>

        <div className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-red-600 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-3 font-bold w-1/2">Team France (Les Bleus)</th>
                <th className="px-5 py-3 font-bold text-gray-200 font-normal">Known For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['AmineMaTue (Captain)', 'Twitch / co-organizer'],
                ['Squeezie', "France's top YouTube creator"],
                ['Inoxtag', 'Gaming and challenge content'],
                ['Kameto', 'KCorp esports founder'],
                ['Michou', 'Challenge and vlog content'],
              ].map(([name, role]) => (
                <tr key={name} className="bg-white hover:bg-red-50 transition-colors">
                  <td className="px-5 py-3 font-semibold text-gray-900">{name}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>How to Watch Eleven All-Stars 2 | Free Live Stream</h2>

        <p>
          The match is broadcast live and free globally across two platforms simultaneously. There is no paywall, no subscription requirement, and no geo-restriction. Both streams are expected to feature full pre-match panel coverage, pitch-side reporters, and multi-camera replays at production values matching a standard professional broadcast.
        </p>

        <ul>
          <li>
            <strong>English broadcast:</strong>{' '}
            <a href="https://www.youtube.com/@Sidemen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              Sidemen YouTube channel
            </a>
          </li>
          <li>
            <strong>French broadcast:</strong>{' '}
            <a href="https://www.twitch.tv/aminematue" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              AmineMaTue Twitch channel
            </a>
          </li>
        </ul>

        <h2>Historical Context | The 2022 Original and What It Proved</h2>

        <p>
          The first Eleven All-Stars match took place in November 2022 at the Jean-Bouin stadium in Paris. Team France won 5-2 against the UK team in front of a packed crowd. The concurrent viewership peaked at over 1.1 million on Twitch alone, setting a French streaming record at the time and demonstrating that creator football events could command audiences comparable to top-tier domestic league fixtures.
        </p>

        <p>
          The decision to move the 2026 rematch from Jean-Bouin to the Parc des Princes is the clearest indicator of how much the category has grown. Jean-Bouin holds around 20,000. The Parc des Princes holds 48,000. The upgrade is not logistical, it is a statement.
        </p>

        <p>
          For context on how the Sidemen built the infrastructure that makes events like this possible, see the full{' '}
          <Link href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">
            Sidemen Charity Match guide
          </Link>
          . For coverage of the UK creator football scene more broadly, visit the{' '}
          <Link href="/youtube" className="text-blue-600 hover:text-blue-800 underline">
            YouTube hub
          </Link>
          .
        </p>

        <h2>Eleven All-Stars 2 | Why This Match Matters</h2>

        <p>
          The cross-channel, cross-country format of Eleven All-Stars is structurally different from any single-nation creator event. It requires coordinating two separate production pipelines, two broadcasting agreements, two roster builds, and two fan communities whose primary language, platform preferences, and cultural references differ significantly. That the 2022 version worked as well as it did, and that both sides have committed to a 2026 sequel at a venue of this profile, suggests the institutional appetite for international creator football is durable.
        </p>

        <p>
          The presence of Niko Omilana alongside Sidemen members also reflects how Beta Squad has grown into a peer collective for the Sidemen rather than a subsidiary one. Omilana, who ran for Mayor of London in 2021 as a publicity stunt and finished fifth, has become one of the most recognizable UK creator faces outside the Sidemen's core membership. His inclusion as an England squad regular rather than a novelty guest is a signal of that shift. For more on the extended UK creator ecosystem, see the{' '}
          <Link href="/youtube/sidemen/alfie-buttle" className="text-blue-600 hover:text-blue-800 underline">
            Alfie Buttle profile
          </Link>
          .
        </p>
      </div>
    </NewsArticle>
  );
}
