import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/youtube/the-bridge/mbappe-hakimi-interview-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const VIDEO_ID = '5ipd6EH568w';
const OG_IMAGE = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export const metadata: Metadata = {
  title: 'Mbappé on The Bridge Podcast | Hakimi Interview 2026',
  description:
    "Kylian Mbappé joins former PSG teammate Achraf Hakimi on The Bridge YouTube podcast hosted by Malik Bentalha. The two cover their friendship, Mbappé's Real Madrid move, growing up in France, and cultural identity.",
  keywords: [
    'Mbappe The Bridge podcast',
    'Kylian Mbappe interview 2026',
    'Achraf Hakimi podcast',
    'Mbappe Hakimi interview',
    'The Bridge YouTube Mbappe',
    'Mbappe Real Madrid interview',
    'Malik Bentalha Mbappe',
    'The Bridge Mbappe episode',
    'Mbappe podcast 2026',
    'French football podcast YouTube',
    'The Bridge show 2026',
    'Hakimi Mbappe friendship',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Kylian Mbappé on The Bridge | Hakimi, Bentalha Interview 2026',
    description:
      "Mbappé joins Hakimi on The Bridge YouTube podcast for a long conversation covering their PSG years, Real Madrid, and shared cultural roots.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-05-13T12:00:00Z',
    modifiedTime: '2026-05-13T12:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1280, height: 720, alt: 'Kylian Mbappé on The Bridge podcast with Achraf Hakimi' }],
    tags: ['Kylian Mbappé', 'Achraf Hakimi', 'The Bridge', 'Real Madrid'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mbappé on The Bridge Podcast | Hakimi Interview 2026',
    description:
      'Mbappé and Hakimi sit down on The Bridge YouTube show for their first conversation since PSG.',
    images: [OG_IMAGE],
  },
};

export default function MbappeTheBridgePage() {
  return (
    <>
      <NewsArticleSchema
        title="Kylian Mbappé on The Bridge Podcast | Hakimi, Bentalha Interview 2026"
        description="Kylian Mbappé joins former PSG teammate Achraf Hakimi on The Bridge YouTube podcast hosted by Malik Bentalha, covering their friendship, Mbappé's Real Madrid move, and cultural identity."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-05-13T12:00:00Z"
        modifiedTime="2026-05-13T12:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1280}
        imageHeight={720}
        imageAlt="Kylian Mbappé on The Bridge podcast with Achraf Hakimi and Malik Bentalha"
        section="Sports"
        keywords={[
          'Mbappe The Bridge podcast',
          'Kylian Mbappe interview 2026',
          'Achraf Hakimi podcast',
          'The Bridge YouTube',
        ]}
      />

      <NewsArticle
        title="Kylian Mbappé on The Bridge | Hakimi Podcast Interview 2026"
        subtitle="Mbappé and Hakimi reunite on camera for the first time since leaving PSG, covering Real Madrid, their shared upbringing as French-African footballers, and what life looks like after Paris."
        category="Sports"
        categoryColor="red"
        topicTag="sports"
        publishDate="2026-05-13T12:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        tags={['Kylian Mbappé', 'Achraf Hakimi', 'The Bridge', 'Real Madrid']}
        slug="youtube-the-bridge-mbappe-hakimi-interview-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'YouTube', item: '/youtube' },
          { name: 'The Bridge', item: '/youtube/the-bridge' },
          { name: 'Mbappé Episode', item: SLUG },
        ]}
        keyTakeaways={[
          'Kylian Mbappé appeared on The Bridge, a YouTube podcast co-hosted by former PSG teammate Achraf Hakimi and French-Moroccan comedian Malik Bentalha.',
          'Mbappé and Hakimi were PSG teammates from 2021 to 2024. The episode is their first long-form public conversation since Mbappé joined Real Madrid on a free transfer in summer 2024.',
          "The interview covers Mbappé's upbringing in Bondy, his relationship with Hakimi built on a shared North and West African-French cultural background, and what adapting to Madrid has been like.",
          'The Bridge episode was published with English, Spanish, and Arabic subtitles, reflecting the show\'s reach across Europe, Latin America, and the Arab world.',
        ]}
        keyTakeawaysColor="red"
        faqItems={[
          {
            question: 'What is The Bridge podcast?',
            answer:
              'The Bridge is a French-language YouTube podcast co-hosted by PSG right-back Achraf Hakimi and comedian Malik Bentalha. The show bridges football, North African-French culture, and comedy, and features long-form interviews with top athletes and entertainers. Episodes include English, Spanish, and Arabic subtitles.',
          },
          {
            question: 'What did Mbappé and Hakimi discuss on The Bridge?',
            answer:
              "The episode covers their years as PSG teammates, Mbappé's move to Real Madrid, their shared upbringings as children of African immigrants in France, and the cultural pressures of representing both their nations and communities as global football stars.",
          },
          {
            question: 'Who hosts The Bridge podcast?',
            answer:
              'The Bridge is hosted by Achraf Hakimi, the Moroccan-French PSG right-back, alongside Malik Bentalha, a French-Belgian comedian and actor of Moroccan descent known for his Netflix stand-up specials.',
          },
          {
            question: 'Is Kylian Mbappé at Real Madrid in 2026?',
            answer:
              'Yes. Mbappé joined Real Madrid from Paris Saint-Germain in the summer of 2024 on a free transfer after his contract expired. He remains at Real Madrid as of May 2026.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="The Bridge"
        moreFromHubHref="/youtube/the-bridge"
      >
        <p>
          Kylian Mbappé appeared on The Bridge, the YouTube podcast created by his former Paris
          Saint-Germain teammate Achraf Hakimi, for one of the most candid conversations Mbappé has
          given since joining Real Madrid. The episode is co-hosted by comedian Malik Bentalha and
          covers their years together at PSG, the move to Madrid, and the cultural identity both
          players share as French footballers from immigrant families.
        </p>

        {/* ── Episode Video ── */}
        <div className="my-8 not-prose">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="THE BRIDGE | Kylian Mbappé, Achraf Hakimi & Malik Bentalha"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Full episode via{' '}
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              The Bridge on YouTube
            </a>
          </p>
        </div>

        <h2>The Bridge Podcast | What Is the Show?</h2>
        <p>
          The Bridge is a YouTube podcast co-hosted by Hakimi and Malik Bentalha that has built a
          significant audience in France, Morocco, and among the wider North African diaspora. The
          show films in French and makes every episode available with English, Spanish, and Arabic
          subtitles, targeting the international football audience that follows players like Hakimi and
          Mbappé across multiple language communities. The format is conversational and long-form,
          typically running between 45 minutes and two hours. Learn more about the hosts and show
          concept on the{' '}
          <Link href="/youtube/the-bridge" className="text-blue-600 hover:text-blue-800 underline">
            The Bridge show page
          </Link>
          .
        </p>

        <h2>Mbappé on His PSG Years and the Move to Real Madrid</h2>
        <p>
          A significant portion of the episode covers leaving PSG, the club where Mbappé spent six
          years and became the most recognizable footballer in France. Mbappé joined Real Madrid on a
          free transfer in summer 2024, ending years of speculation. On The Bridge, he addresses what
          the transition actually felt like: adapting to a new city, a new language of play at Madrid,
          and the pressure that comes with joining a club that has won more European titles than any
          other institution in football.
        </p>
        <p>
          Hakimi and Mbappé were PSG teammates from 2021 to 2024. The podcast gives both a chance to
          reflect on that era: the Champions League campaigns, the dynamics of a star-heavy squad that
          included Neymar and Messi at various points, and how playing alongside world-class players
          shaped their professional standards. For broader Mbappé and soccer coverage, see the{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer hub
          </Link>
          .
        </p>

        <h2>Shared Background | Growing Up French with African Roots</h2>
        <p>
          Beyond football, the episode stands out for its depth on cultural identity. Both Hakimi and
          Mbappé grew up in the Parisian banlieues in families where parents had emigrated from North
          and West Africa. Hakimi&apos;s family is Moroccan; Mbappé&apos;s father is Cameroonian and
          his mother Algerian. The podcast covers how both players navigated questions of
          representation, expectations from both French football and their respective heritage
          communities, and the experience of becoming global icons while maintaining roots in
          working-class Parisian neighborhoods.
        </p>
        <p>
          Malik Bentalha, who shares a similar background as a French-Belgian comedian of Moroccan
          descent, guides the conversation with enough cultural familiarity to get specific rather
          than generic. The result is one of the more detailed public conversations Mbappé has given
          on questions of identity that go beyond the pitch. For more YouTube creator content, see
          the{' '}
          <Link href="/youtube" className="text-blue-600 hover:text-blue-800 underline">
            oWire YouTube hub
          </Link>
          .
        </p>

        <h2>Where to Watch | The Bridge Mbappé Episode</h2>
        <p>
          The full episode is available on{' '}
          <a
            href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            The Bridge YouTube channel
          </a>
          . For the complete show profile, hosts, and format breakdown, visit the{' '}
          <Link href="/youtube/the-bridge" className="text-blue-600 hover:text-blue-800 underline">
            The Bridge hub page
          </Link>
          . For French football and Ligue 1 news, see the{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            Soccer hub
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}