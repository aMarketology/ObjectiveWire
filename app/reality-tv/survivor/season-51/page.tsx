import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/reality-tv-survivor-season51-premiere-recap.jpg';

export const revalidate = 86400;

const SLUG = '/reality-tv/survivor/season-51';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Survivor 51 Premiere | Aaliyah Puglia Voted Out, Open Era Begins',
  description:
    'Aaliyah Puglia became the first castaway voted off in the Survivor 51 premiere as Jeff Probst launched the Open Era, a format defined by permanent uncertainty where any twist or advantage can return.',
  keywords: [
    'Survivor 51 premiere',
    'Aaliyah Puglia voted out',
    'Survivor Open Era',
    'Survivor 51 first eliminated',
    'Jeff Probst Open Era',
    'Survivor 51 Toka tribe',
    'Survivor season 51 recap',
    'Survivor 51 castaways',
    'Jenna Doore Survivor 51',
    'Survivor fire-making challenge vote',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Survivor 51 Premiere | Aaliyah Puglia First Voted Out, Open Era Launches',
    description:
      'Aaliyah Puglia was voted off first in the Survivor 51 premiere as host Jeff Probst kicked off the Open Era, an anything-goes format defined by permanent uncertainty.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-09-24T15:00:00Z',
    modifiedTime: '2026-09-24T15:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Survivor 51 premiere Aaliyah Puglia voted out Open Era' }],
    tags: ['Survivor 51', 'Reality TV', 'Aaliyah Puglia', 'Jeff Probst', 'Open Era'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Survivor 51 Premiere | Aaliyah Puglia First Voted Out',
    description: 'The Open Era begins with a 6-2 vote sending chef Aaliyah Puglia home. Jeff Probst declared the end of the New Era.',
    images: [OG_IMAGE],
  },
};

export default function Survivor51PremierePage() {
  return (
    <>
      <NewsArticleSchema
        title="Survivor 51 Premiere | Aaliyah Puglia Voted Out, Open Era Begins"
        description="Aaliyah Puglia became the first castaway voted off in the Survivor 51 premiere as Jeff Probst launched the Open Era, a format defined by permanent uncertainty where any twist or advantage can return."
        author="Jack Sterling"
        authorUrl="https://www.objectivewire.com/authors/jack-sterling"
        publishedTime="2026-09-24T15:00:00Z"
        modifiedTime="2026-09-24T15:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Entertainment"
        keywords={[
          'Survivor 51 premiere',
          'Aaliyah Puglia voted out',
          'Survivor Open Era',
        ]}
      />

      <NewsArticle
        title="Survivor 51 Premiere | Aaliyah Puglia First Voted Out as the Open Era Begins"
        subtitle="Aaliyah Puglia was voted off first in the Season 51 premiere of Survivor, while the brand-new Open Era introduces an anything-goes format defined by permanent uncertainty. In a 6-2 vote, the 25-year-old chef became the first castaway eliminated."
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
        thumbnail={{ src: OG_IMAGE, alt: 'Survivor 51 premiere Aaliyah Puglia voted out Open Era' }}
        tags={['Survivor 51', 'Reality TV', 'Aaliyah Puglia', 'Jeff Probst', 'Open Era']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Reality TV', item: '/reality-tv' },
          { name: 'Survivor', item: '/reality-tv/survivor' },
          { name: 'Season 51 Premiere', item: SLUG },
        ]}
        keyTakeaways={[
          'Aaliyah Puglia, a 25-year-old chef, became the first castaway voted off in Survivor 51, eliminated in a 6-2 vote over Jenna Doore.',
          'Both Aaliyah and Jenna Doore played their Shot in the Dark advantages at Tribal Council, but neither turned up safe.',
          'The premiere launched the "Open Era," with host Jeff Probst declaring the end of the New Era and announcing that any twist, idol, or advantage from Survivor history can return in any order.',
          'The Toka tribe lost the first immunity challenge, and all 21 players began marooned on a single beach together, electing to send Lewis Kelly to Exile Island.',
          'Jeff Probst offered the players a chance to unanimously vote out the controversial Final Four fire-making challenge, but the vote failed to reach unanimity and the twist remains in play.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'Who was voted off first in Survivor 51?',
            answer:
              'Aaliyah Puglia, a 25-year-old chef, became the first castaway voted off Survivor 51 in the season premiere, eliminated in a 6-2 vote over Jenna Doore.',
          },
          {
            question: 'What is the Survivor Open Era?',
            answer:
              'The Open Era is the new format introduced after Survivor 50. Jeff Probst declared the end of the New Era and announced that any twist, idol, or advantage from the entire history of Survivor can return in any order, with no two seasons guaranteed to follow the same rules.',
          },
          {
            question: 'Who lost the first immunity challenge in Survivor 51?',
            answer:
              'The Toka tribe lost the first immunity challenge of Survivor 51, sending them to the season\'s first Tribal Council.',
          },
          {
            question: 'Did the Survivor 51 players vote out fire-making?',
            answer:
              'Jeff Probst offered the players a chance to unanimously vote out the controversial Final Four fire-making challenge, but the vote failed to reach unanimity, so the twist remains in play.',
          },
          {
            question: 'What happened with Shot in the Dark in the Survivor 51 premiere?',
            answer:
              'Both Aaliyah Puglia and Jenna Doore played their Shot in the Dark advantages at Tribal Council, but neither turned up safe, and Aaliyah was ultimately voted out 6-2.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Reality TV"
        moreFromHubHref="/reality-tv"
      >
        <p>
          <strong>Aaliyah Puglia</strong> was voted off first in the Season 51 premiere of Survivor, while the brand-new
          "Open Era" introduces an anything-goes format defined by permanent uncertainty. Following the milestone 50th
          season, host Jeff Probst declared the end of the "New Era" and kicked off the Open Era, where any twist, idol, or
          advantage from the entire history of Survivor can return in any order without warning.
        </p>

        <h2>What Happened in the Premiere</h2>

        <ul>
          <li><strong>The marooning:</strong> All 21 new players started marooned on a single beach together and immediately had to elect someone to leave camp, sending Lewis Kelly off to Exile Island for the episode.</li>
          <li><strong>The immunity loss:</strong> The Toka tribe lost the first immunity challenge.</li>
          <li><strong>The vote:</strong> Heading into Tribal Council, targets landed on Aaliyah Puglia and Jenna Doore. Both played their Shot in the Dark advantages, but neither turned up safe. In a 6-2 vote, the 25-year-old chef Aaliyah Puglia became the first castaway eliminated.</li>
        </ul>

        <h2>Twists on the Table</h2>

        <p>
          Jeff Probst offered the players a chance to unanimously vote out the controversial Final Four fire-making
          challenge, but it failed to get a unanimous vote and remains in play. The Open Era is defined by total variety:
          no two seasons are guaranteed to follow the same structural rules, bringing back a mix of nostalgic mechanics and
          chaotic unpredictability.
        </p>

        <p>
          For a full breakdown of the remaining castaways, read our{' '}
          <Link href="/reality-tv/survivor/season-51/castaways" className="text-blue-600 hover:text-blue-800 underline">
            Survivor 51 remaining castaways guide
          </Link>
          .
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://tvline.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">TVLine | Survivor 51 Premiere Recap</a></li>
          <li><a href="https://www.insidesurvivor.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Inside Survivor | Survivor 51 Episode 1 Recap: The Open Era</a></li>
          <li><a href="https://ew.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Entertainment Weekly | Survivor 51 Premiere Recap</a></li>
        </ul>

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