import type { Metadata } from 'next';
import Link from 'next/link';
import {
  YoutubeCreatorPage,
  YTSection,
  YTStat,
  YTCallout,
} from '@/components/articles/YoutubeCreatorPage';

export const revalidate = 86400;

const SLUG = '/youtube/the-bridge';
const PAGE_URL = `https://www.objectivewire.com${SLUG}`;
const THUMBNAIL = 'https://i.ytimg.com/vi/5ipd6EH568w/maxresdefault.jpg';

export const metadata: Metadata = {
  title: 'The Bridge Podcast | Achraf Hakimi, Malik Bentalha YouTube Show',
  description:
    'The Bridge is a French-Arab YouTube podcast hosted by PSG defender Achraf Hakimi and comedian Malik Bentalha. The show bridges football, North African culture, and celebrity guests including Kylian Mbappé.',
  keywords: [
    'The Bridge podcast',
    'The Bridge YouTube show',
    'Achraf Hakimi podcast',
    'Malik Bentalha The Bridge',
    'Hakimi YouTube channel',
    'The Bridge Mbappe episode',
    'French Arab podcast YouTube',
    'The Bridge Hakimi Bentalha',
    'The Bridge 2026',
    'Achraf Hakimi show',
    'Malik Bentalha show',
    'The Bridge guests',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'The Bridge | Achraf Hakimi & Malik Bentalha YouTube Podcast',
    description:
      'Hosted by PSG star Achraf Hakimi and comedian Malik Bentalha. The Bridge bridges football, Moroccan-French culture, and viral guest episodes.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'Objective Wire',
    section: 'YouTube',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-13T12:00:00Z',
    modifiedTime: '2026-05-13T12:00:00Z',
    images: [{ url: THUMBNAIL, width: 1280, height: 720, alt: 'The Bridge podcast with Achraf Hakimi and Malik Bentalha' }],
    tags: ['The Bridge', 'Achraf Hakimi', 'Malik Bentalha', 'YouTube Podcast'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Bridge | Hakimi & Bentalha YouTube Podcast',
    description:
      "PSG star Achraf Hakimi and comedian Malik Bentalha host The Bridge, France's biggest football-culture YouTube show.",
    images: [THUMBNAIL],
  },
};

export default function TheBridgePage() {
  return (
    <YoutubeCreatorPage
      schema={{
        title: 'The Bridge | Achraf Hakimi & Malik Bentalha YouTube Show',
        description:
          'The Bridge is a French-Arab YouTube podcast hosted by PSG defender Achraf Hakimi and comedian Malik Bentalha, featuring top football stars and cultural conversations.',
        publishedTime: '2026-05-13T12:00:00Z',
        modifiedTime: '2026-05-13T12:00:00Z',
        author: 'Jack Sterling',
        authorUrl: 'https://www.objectivewire.com/authors/jack-sterling',
        articleUrl: PAGE_URL,
        imageUrl: THUMBNAIL,
        section: 'YouTube',
        keywords: [
          'The Bridge podcast',
          'Achraf Hakimi',
          'Malik Bentalha',
          'The Bridge YouTube',
          'Mbappe The Bridge',
        ],
      }}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'YouTube', item: '/youtube' },
        { name: 'The Bridge', item: SLUG },
      ]}
      hero={{
        image: {
          src: THUMBNAIL,
          alt: 'The Bridge podcast hosted by Achraf Hakimi and Malik Bentalha',
        },
        gradient:
          'linear-gradient(135deg, #0a0a1a 0%, #1a1440 50%, #2d1b6b 100%)',
        badges: [
          { label: 'YouTube Podcast', style: 'default' },
          { label: 'Football', style: 'achievement' },
          { label: 'Culture', style: 'secondary' },
        ],
        name: 'The Bridge',
        subtitle: 'Hosted by Achraf Hakimi & Malik Bentalha',
        description:
          'The Bridge is a French-language YouTube podcast bringing together football, North African-French culture, comedy, and celebrity guests. Launched by PSG right-back Achraf Hakimi and comedian Malik Bentalha, it has become one of the most-watched sports-adjacent YouTube shows in France.',
        ctaButtons: [
          {
            href: 'https://www.youtube.com/watch?v=5ipd6EH568w',
            label: '▶ Watch: Kylian Mbappé Episode',
            variant: 'accent',
          },
          {
            href: 'https://www.youtube.com/@TheBridgeShow',
            label: '🔴 YouTube Channel',
            variant: 'secondary',
          },
        ],
      }}
      sidebar={{
        infobox: {
          image: {
            src: THUMBNAIL,
            alt: 'The Bridge podcast thumbnail featuring Mbappé and Hakimi',
          },
          name: 'The Bridge',
          subtitle: 'YouTube Podcast Show',
          rows: [
            { label: 'Type', value: 'YouTube Podcast' },
            { label: 'Hosts', value: 'Achraf Hakimi, Malik Bentalha' },
            { label: 'Language', value: 'French (EN / ES / AR subtitles)' },
            {
              label: 'Platform',
              value: 'YouTube',
              href: 'https://www.youtube.com/@TheBridgeShow',
            },
            { label: 'Focus', value: 'Football, Culture, Comedy' },
            { label: 'Based', value: 'Paris, France' },
          ],
        },
        meta: {
          publishedDate: 'May 13, 2026',
          author: 'Jack Sterling',
          category: 'YouTube',
        },
        relatedLinks: [
          {
            href: '/youtube/the-bridge/mbappe-hakimi-interview-2026',
            label: 'Mbappé on The Bridge | Episode Recap',
          },
          { href: '/soccer', label: 'Soccer Hub' },
          { href: '/premier-league', label: 'Premier League News' },
          { href: '/youtube', label: 'YouTube Creator Hub' },
        ],
      }}
      tableOfContents={[
        { id: 'what-is-the-bridge', label: 'What Is The Bridge?' },
        { id: 'hosts', label: 'The Hosts | Hakimi and Bentalha' },
        { id: 'achraf-hakimi', label: 'Achraf Hakimi | Career and Profile' },
        { id: 'malik-bentalha', label: 'Malik Bentalha | Comedian and Co-Host' },
        { id: 'format', label: 'Show Format and Episodes' },
        { id: 'mbappe-episode', label: 'Mbappé on The Bridge' },
      ]}
      tags={[
        'The Bridge',
        'Achraf Hakimi',
        'Malik Bentalha',
        'Kylian Mbappé',
        'YouTube Podcast',
      ]}
    >
      <YTSection id="what-is-the-bridge" heading="What Is The Bridge?">
        <p>
          The Bridge is a YouTube podcast hosted by Paris Saint-Germain defender Achraf Hakimi and
          French-Belgian comedian Malik Bentalha. The show&apos;s name reflects its core mission:
          bridging worlds, specifically the world of elite football and North African-French culture,
          the immigrant experience in Europe, and the overlap between sport, entertainment, and
          identity. Episodes are filmed in French with subtitles in English, Spanish, and Arabic,
          making the show accessible to a broad international audience including fans across North
          Africa and the French-speaking diaspora.
        </p>
        <p>
          The Bridge sits in a growing genre of athlete-led YouTube productions where top footballers
          use their own platforms to give fans unscripted access. Unlike traditional broadcast
          interviews, The Bridge runs long-form, often exceeding an hour, with conversations covering
          football careers as well as upbringing, faith, identity, and the pressures of being a global
          star from a working-class immigrant background.
        </p>
      </YTSection>

      <YTSection id="hosts" heading="The Bridge Hosts | Hakimi and Bentalha">
        <div className="grid sm:grid-cols-2 gap-6 not-prose mb-6">
          <YTStat
            label="Achraf Hakimi"
            value="PSG Right-Back"
            sub="Morocco, 2022 World Cup semi-finalist"
            color="blue"
          />
          <YTStat
            label="Malik Bentalha"
            value="Comedian"
            sub="Netflix specials, French-Moroccan culture"
            color="purple"
          />
        </div>
        <p>
          The show is built around the contrast between its two hosts. Hakimi brings the football
          credibility: one of the top right-backs in world football, a World Cup semi-finalist with
          Morocco in 2022, and a player who grew up in Madrid&apos;s Getafe suburb with Moroccan family
          ties. Bentalha brings comedic energy and the interviewer&apos;s instinct, pressing guests on
          stories that traditional sports journalists rarely pursue. Together they create an environment
          where elite athletes open up in ways rarely seen on camera.
        </p>
      </YTSection>

      <YTSection id="achraf-hakimi" heading="Achraf Hakimi | PSG Defender and Show Creator">
        <p>
          Achraf Hakimi was born on February 4, 1998, in Madrid to Moroccan parents. He grew up in
          the Getafe suburb of Madrid, joining Real Madrid&apos;s La Fábrica youth academy as a child.
          After progressing through Real Madrid&apos;s ranks, he spent two loan years at Borussia
          Dortmund where he became one of the most explosive wing-backs in Europe, before a permanent
          move to Inter Milan and then to Paris Saint-Germain in 2021 for a reported 60 million euros.
        </p>
        <p>
          At PSG, Hakimi became a key player and formed a close friendship with Kylian Mbappé during
          their years as teammates. He has won multiple Ligue 1 titles and represents Morocco
          internationally. His greatest international achievement came at the 2022 FIFA World Cup,
          where he helped the Atlas Lions reach the semi-finals, the furthest any African nation has
          progressed in World Cup history. As of 2026, Hakimi remains one of the highest-rated
          right-backs in world football and one of the most followed North African athletes globally.
        </p>
      </YTSection>

      <YTSection id="malik-bentalha" heading="Malik Bentalha | Comedian and The Bridge Co-Host">
        <p>
          Malik Bentalha is a French-Belgian stand-up comedian, actor, and television presenter of
          Moroccan descent. Born in Brussels in 1985, he built his career through stand-up specials,
          Netflix productions, and French cinema. Bentalha is known for comedy rooted in North African
          immigrant life in France, a background he shares with Hakimi and with many of The
          Bridge&apos;s guests.
        </p>
        <p>
          As co-host of The Bridge, Bentalha serves as the primary interviewer, keeping conversations
          loose, funny, and probing. His ability to move between French, Moroccan cultural references,
          and broad comedy makes the show accessible to French-speaking audiences worldwide while
          giving it a distinct cultural identity that separates it from mainstream sports media.
        </p>

        <YTCallout
          heading="The Bridge | Show at a Glance"
          color="blue"
          items={[
            { label: 'Language', detail: 'French with English, Spanish, and Arabic subtitles' },
            { label: 'Format', detail: 'Long-form conversation, 45 min to 2 hours' },
            { label: 'Guests', detail: 'Top footballers, entertainers, cultural figures' },
            { label: 'Platform', detail: 'YouTube (also available as podcast audio)' },
            { label: 'Cultural Focus', detail: 'North African-French identity, football, immigration' },
          ]}
        />
      </YTSection>

      <YTSection id="format" heading="Show Format | How The Bridge Works">
        <p>
          Episodes of The Bridge run between 45 minutes and two hours. Each episode features a
          central guest, usually a footballer or entertainer from the same cultural orbit as the hosts.
          The format mixes retrospective storytelling, with guests recounting their childhoods and
          career paths, with current topics covering upcoming matches, transfers, and cultural moments.
          The show is filmed in a relaxed studio setting without formal barriers between hosts and
          guests, which creates a visibly different atmosphere than traditional broadcast formats.
        </p>
        <p>
          The Bridge is part of a growing wave of footballer-hosted YouTube shows across Europe. For
          more creator content and YouTube show coverage, visit the{' '}
          <Link href="/youtube" className="text-blue-600 hover:text-blue-800 underline">
            oWire YouTube hub
          </Link>
          .
        </p>
      </YTSection>

      <YTSection id="mbappe-episode" heading="Kylian Mbappé on The Bridge | 2026 Episode">
        <p>
          The Mbappé episode is one of the most significant The Bridge has produced, bringing
          together Mbappé and Hakimi for their first long-form public conversation since Mbappé left
          PSG for Real Madrid. The episode covers their years as PSG teammates, Mbappé&apos;s debut
          season in Madrid, and their shared background growing up as French footballers from North
          and West African families. The episode is available with English, Spanish, and Arabic
          subtitles. Read the full recap at{' '}
          <Link
            href="/youtube/the-bridge/mbappe-hakimi-interview-2026"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Mbappé on The Bridge | Full Episode Recap
          </Link>
          . For broader soccer coverage, see the{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer hub
          </Link>
          .
        </p>
      </YTSection>
    </YoutubeCreatorPage>
  );
}