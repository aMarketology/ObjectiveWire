import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { PrismTable } from '@/components/articles/PrismTable';

const OG_IMAGE = '/thumbnails/reality-tv-survivor-season51-castaways-guide.jpg';

export const revalidate = 86400;

const SLUG = '/reality-tv/survivor/season-51/castaways';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Survivor 51 Castaways | Full 20-Player Roster Guide',
  description:
    'Meet the 20 remaining castaways of Survivor 51 after Aaliyah Puglia became the first voted out. Full roster of ages, occupations, and backgrounds for the Open Era season.',
  keywords: [
    'Survivor 51 castaways',
    'Survivor 51 remaining players',
    'Survivor 51 cast list',
    'Aaliyah Puglia voted out first',
    'Survivor 51 contestants',
    'Survivor Open Era cast',
    'Survivor 51 occupations',
    'Survivor 51 tribe roster',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Survivor 51 Castaways | Meet the 20 Remaining Players After the Premiere',
    description:
      'Full roster of the 20 remaining Survivor 51 castaways after Aaliyah Puglia became the first voted out. Ages, occupations, and backgrounds for the Open Era season.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-09-24T15:30:00Z',
    modifiedTime: '2026-09-24T15:30:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Survivor 51 castaways full roster guide' }],
    tags: ['Survivor 51', 'Reality TV', 'Castaways', 'Open Era', 'Cast List'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Survivor 51 Castaways | The Full Remaining Roster',
    description: 'Meet all 20 remaining players after the Survivor 51 premiere ended Aaliyah Puglia game.',
    images: [OG_IMAGE],
  },
};

export default function Survivor51CastawaysPage() {
  return (
    <>
      <NewsArticleSchema
        title="Survivor 51 Castaways | Full 20-Player Roster Guide"
        description="Meet the 20 remaining castaways of Survivor 51 after Aaliyah Puglia became the first voted out. Full roster of ages, occupations, and backgrounds for the Open Era season."
        author="Jack Sterling"
        authorUrl="https://www.objectivewire.com/authors/jack-sterling"
        publishedTime="2026-09-24T15:30:00Z"
        modifiedTime="2026-09-24T15:30:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Entertainment"
        keywords={[
          'Survivor 51 castaways',
          'Survivor 51 remaining players',
          'Survivor 51 cast list',
        ]}
      />

      <NewsArticle
        title="Meet the Survivor 51 Cast | The 20 Remaining Castaways After the Premiere"
        subtitle="With chef Aaliyah Puglia becoming the first castaway voted out in the Survivor 51 premiere, 20 players remain in the Open Era game. Here is the full roster of ages and backgrounds for every remaining castaway."
        category="Entertainment"
        categoryColor="blue"
        topicTag="entertainment"
        publishDate="September 24, 2026"
        readTime="5 min read"
        author={{
          name: 'Jack Sterling',
          role: 'Reality TV Correspondent, Objective Wire',
          avatar: '/influncer/author/jack_sterling.jpg',
          authorSlug: 'jack-sterling',
        }}
        slug={SLUG}
        url={SLUG}
        thumbnail={{ src: OG_IMAGE, alt: 'Survivor 51 castaways full roster guide' }}
        tags={['Survivor 51', 'Reality TV', 'Castaways', 'Open Era', 'Cast List']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Reality TV', item: '/reality-tv' },
          { name: 'Survivor', item: '/reality-tv/survivor' },
          { name: 'Season 51 Castaways', item: SLUG },
        ]}
        keyTakeaways={[
          'The Survivor 51 cast features 21 players from a wide mix of professional backgrounds, with chef Aaliyah Puglia becoming the first castaway voted out in the premiere.',
          'The 20 remaining castaways include a criminal defense attorney, a federal prosecutor, a pro wrestler, a baseball executive, and a Resident OBGYN, among others.',
          'The cast skews diverse in age, ranging from medical student An Nguyen at 24 to crisis management professional Kristin Flickinger at 49.',
          'Survivor 51 launched the Open Era, where any twist or advantage from the show history can return, and the remaining players are split between the Toka and Savu tribes.',
          'Lewis Kelly spent the premiere on Exile Island after volunteering, gaining safety while the Toka tribe lost the first immunity challenge.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'How many castaways are on Survivor 51?',
            answer:
              'Survivor 51 features 21 castaways. After the premiere, 20 active players remain following the elimination of Aaliyah Puglia.',
          },
          {
            question: 'Who was the first person voted out of Survivor 51?',
            answer:
              'Aaliyah Puglia, a 25-year-old chef from Providence, Rhode Island, was the first castaway voted out, eliminated in a 6-2 vote over Jenna Doore.',
          },
          {
            question: 'What tribes are on Survivor 51?',
            answer:
              'Survivor 51 initially divided the 21 castaways into two tribes: Toka and Savu, after beginning the game marooned together on a single beach.',
          },
          {
            question: 'Who is the oldest castaway on Survivor 51?',
            answer:
              'Kristin Flickinger, a 49-year-old crisis management professional, is among the oldest remaining castaways on Survivor 51.',
          },
          {
            question: 'Who is the youngest castaway on Survivor 51?',
            answer:
              'An Nguyen, a 24-year-old medical student, is among the youngest remaining castaways on Survivor 51.',
          },
        ]}
        moreFromHub={[
          { slug: 'reality-tv/survivor/season-51', title: 'Survivor 51 Premiere | Aaliyah Puglia First Voted Out', url: '/reality-tv/survivor/season-51', publishDate: '2026', category: 'Entertainment' },
          { slug: 'reality-tv/big-brother/season-28', title: 'Big Brother 28 Final Four | Scenarios, Odds, Winner Analysis', url: '/reality-tv/big-brother/season-28', publishDate: '2026', category: 'Entertainment' },
        ]}
        moreFromHubLabel="Reality TV"
        moreFromHubHref="/reality-tv"
      >
        <p>
          The <strong>Survivor 51</strong> cast brings together 21 contestants from a wide mix of professional
          backgrounds, now competing in the newly launched <strong>Open Era</strong>. With chef Aaliyah Puglia voted out
          first, here is the full roster of the 20 remaining castaways by age and occupation.
        </p>

        <h2>The 20 Remaining Castaways</h2>

        <PrismTable
          accent="blue"
          headers={['Castaway', 'Age | Occupation']}
          rows={[
            ['Alexis Levine', '34 | Criminal Defense Attorney'],
            ['Ana Sani', '34 | Voice Actress'],
            ['An "Thien An" Nguyen', '24 | Medical Student'],
            ['Angelica "Jelly" Loblack', '29 | Sociology Professor'],
            ['Brady Booker', '27 | Pro Wrestler'],
            ['Carter Krull', '24 | Livestock Farmer'],
            ['Cristian Chavez', '26 | Head of HR'],
            ['Danny "Kilby" Kilby', '30 | Game Designer'],
            ['Devin Way', '33 | Actor'],
            ['Eric Macksoud', '34 | Mental Health Counselor'],
            ['Jenna Doore', '30 | Wedding Photographer'],
            ['Kristin Flickinger', '49 | Crisis Management'],
            ['Lewis Kelly', '28 | Farmer'],
            ['Linnea Capobianco', '25 | Entrepreneur'],
            ['Maggie Nestor', '40 | Farmer'],
            ['Mike Pinsky', '32 | Baseball Executive'],
            ['Ori Jean-Charles', '27 | Personal Trainer'],
            ['Patt Cannaday', '33 | Federal Prosecutor'],
            ['Rob Antonson', '40 | Airline Gate Agent'],
            ['Sharonda Cox', '34 | Resident OBGYN'],
          ]}
          caption="The 20 active Survivor 51 castaways following the premiere elimination of Aaliyah Puglia."
        />

        <h2>Notable Backgrounds and Early Standouts</h2>

        <p>
          The cast includes <strong>two legal professionals</strong> in criminal defense attorney Alexis Levine and
          federal prosecutor Patt Cannaday, a pairing that could produce fascinating strategic clashes if they align or
          collide. <strong>Rob Antonson</strong> already made an early splash by finding the season's first Hidden
          Immunity Idol, and <strong>Lewis Kelly</strong> spent the premiere on Exile Island after volunteering to leave
          camp.
        </p>

        <p>
          The roster skews toward a wide age range, from 24-year-old medical student An Nguyen to 49-year-old crisis
          management expert Kristin Flickinger, giving the Open Era season a diverse mix of physical competitors and
          social strategists heading into the second episode.
        </p>

        <p>
          For the full premiere recap, read our{' '}
          <Link href="/reality-tv/survivor/season-51" className="text-blue-600 hover:text-blue-800 underline">
            Survivor 51 premiere breakdown
          </Link>
          .
        </p>

        <p>
          For more entertainment coverage, visit the{' '}
          <Link href="/reality-tv" className="text-blue-600 hover:text-blue-800 underline">
            Reality TV hub
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}