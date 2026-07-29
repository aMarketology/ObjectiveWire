import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/soccer/real-madrid-yan-diomande-transfer-2026';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const OG_IMAGE = `${SITE_CONFIG.url}/thumbnails/soccer-real-madrid-yan-diomande-transfer-2026.jpg`;

export const metadata: Metadata = {
  title: 'Real Madrid Yan Diomande Transfer | RB Leipzig Winger Deal',
  description:
    'Real Madrid have agreed personal terms with RB Leipzig winger Yan Diomande, with the 21-year-old Ivorian international set to join Los Blancos in a deal that reinforces Madrid\'s commitment to signing the best young talent in world football.',
  keywords: [
    'Real Madrid Yan Diomande',
    'Yan Diomande transfer',
    'Real Madrid transfer news 2026',
    'RB Leipzig winger',
    'Diomande Real Madrid',
    'Real Madrid signings 2026',
    'Yan Diomande age',
    'Ivorian winger Real Madrid',
    'La Liga transfers 2026',
    'Real Madrid squad 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Real Madrid Agree Terms With RB Leipzig Winger Yan Diomande',
    description:
      'The 21-year-old Ivorian international has agreed personal terms with Real Madrid. The deal reinforces Madrid\'s strategy of signing the best young talent in world football.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-28T17:00:00Z',
    modifiedTime: '2026-07-28T17:00:00Z',
    section: 'Soccer',
    tags: ['Real Madrid', 'Yan Diomande', 'RB Leipzig', 'Transfer', 'La Liga'],
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Madrid Agree Terms With RB Leipzig Winger Yan Diomande',
    description: 'The 21-year-old Ivorian international is heading to the Bernabeu. Madrid continue to stockpile the best young talent in the world.',
    images: [OG_IMAGE],
  },
};

export default function RealMadridDiomandeTransferPage() {
  return (
    <>
      <NewsArticleSchema
        title="Real Madrid Yan Diomande Transfer | RB Leipzig Winger Deal"
        description="Real Madrid have agreed personal terms with RB Leipzig winger Yan Diomande, with the 21-year-old Ivorian international set to join Los Blancos."
        author="Jack Brennan"
        authorUrl={`${SITE_CONFIG.url}/authors/jack-brennan`}
        publishedTime="2026-07-28T17:00:00Z"
        modifiedTime="2026-07-28T17:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Soccer"
        keywords={[
          'Real Madrid Yan Diomande',
          'Yan Diomande transfer',
          'Real Madrid transfer news 2026',
        ]}
      />

      <NewsArticle
        title="Real Madrid Agree Terms With RB Leipzig Winger Yan Diomande"
        subtitle="Real Madrid have agreed personal terms with RB Leipzig winger Yan Diomande, with the 21-year-old Ivorian international set to join Los Blancos in a deal that reinforces Madrid's commitment to signing the best young talent in world football."
        category="Soccer"
        categoryColor="green"
        topicTag="sports"
        publishDate="July 28, 2026"
        readTime="4 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        tags={['Real Madrid', 'Yan Diomande', 'RB Leipzig', 'Transfer', 'La Liga']}
        slug="soccer-real-madrid-yan-diomande-transfer-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Soccer', item: '/soccer' },
          { name: 'Diomande to Real Madrid', item: SLUG },
        ]}
        keyTakeaways={[
          'Real Madrid have agreed personal terms with RB Leipzig winger Yan Diomande, with the 21-year-old Ivorian international set to join Los Blancos.',
          'Diomande has emerged as one of the most exciting young attacking talents in the Bundesliga, known for his pace, dribbling, and ability to play across the front line.',
          'The deal reinforces Real Madrid\'s strategy of signing the best young talent in world football, following a pattern established with signings like Vinicius Jr, Rodrygo, and Endrick.',
          'RB Leipzig are expected to receive a significant transfer fee, though the exact figure has not been disclosed. Diomande\'s contract in Leipzig ran through 2028.',
          'Diomande will join a Real Madrid attack that already features Kylian Mbappe and Vinicius Jr, adding depth and competition to the forward line.',
        ]}
        keyTakeawaysColor="green"
        faqItems={[
          {
            question: 'Who is Yan Diomande?',
            answer:
              'Yan Diomande is a 21-year-old Ivorian international winger who plays for RB Leipzig in the Bundesliga. He is known for his pace, dribbling ability, and versatility across the front line.',
          },
          {
            question: 'Has Diomande agreed to join Real Madrid?',
            answer:
              'Yes. Real Madrid have agreed personal terms with Diomande, and the deal is expected to be finalized pending the completion of negotiations with RB Leipzig over the transfer fee.',
          },
          {
            question: 'How much will Real Madrid pay for Diomande?',
            answer:
              'The exact transfer fee has not been disclosed, but RB Leipzig are expected to receive a significant sum. Diomande\'s contract in Leipzig ran through 2028, giving the German club strong negotiating leverage.',
          },
          {
            question: 'Where will Diomande fit in at Real Madrid?',
            answer:
              'Diomande will add depth and competition to a Real Madrid attack that already features Kylian Mbappe and Vinicius Jr. His versatility across the front line gives manager Zinedine Zidane additional tactical options.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Soccer"
        moreFromHubHref="/soccer"
      >
        <p>
          Real Madrid have agreed personal terms with RB Leipzig winger Yan Diomande, with the 21-year-old Ivorian international set to join Los Blancos in a deal that reinforces the club's commitment to signing the best young talent in world football. The agreement on personal terms clears the most significant hurdle in the transfer, with negotiations between the two clubs over the final fee now the remaining step before the deal can be formally completed.
        </p>

        <h2>Yan Diomande | Who Is Real Madrid's New Winger</h2>
        <p>
          Diomande has emerged as one of the most exciting young attacking talents in the Bundesliga since joining RB Leipzig. Known for his explosive pace, close control at high speed, and ability to play across the front line, he fits the profile of the modern wide forward that Real Madrid have targeted consistently in recent transfer windows. He can operate on either flank or through the middle, giving manager Zinedine Zidane a versatile attacking option who can rotate with or complement the existing forward line.
        </p>
        <p>
          The Ivorian international has been tracked by several of Europe's elite clubs, but Real Madrid moved decisively to secure his signature. Diomande's contract in Leipzig ran through 2028, giving the German club strong negotiating leverage, and the final transfer fee is expected to reflect his status as one of the most coveted young attackers in the game.
        </p>

        <h2>Real Madrid Transfer Strategy | Stockpiling Young Talent</h2>
        <p>
          The Diomande deal follows a clear pattern in Real Madrid's recruitment strategy under Florentino Perez. The club has prioritized signing the best young talent in world football before they reach their peak market value, a strategy that produced Vinicius Jr, Rodrygo, Eduardo Camavinga, Aurelien Tchouameni, Jude Bellingham, and Endrick. Diomande fits that profile precisely: young, physically gifted, technically accomplished, and available at a price that, while significant, is likely to look like value within two to three seasons.
        </p>
        <p>
          The signing also addresses a practical squad need. Real Madrid's attack, headlined by Kylian Mbappe and Vinicius Jr, has depth but has been vulnerable to injuries and fatigue during congested fixture periods. Diomande provides a high-level rotation option who can start in cup competitions and against lower-table La Liga opposition without a significant drop in quality.
        </p>

        <h2>What Comes Next</h2>
        <p>
          With personal terms agreed, the focus now shifts to the club-to-club negotiation. RB Leipzig have a reputation for driving hard bargains, and Diomande's long-term contract gives them the leverage to demand a premium. Real Madrid are expected to complete the deal before the close of the transfer window, adding another piece to a squad that, under Zidane's management, is being rebuilt to compete for every major trophy in the 2026-27 season and beyond.
        </p>
        <p>
          For full coverage of Real Madrid and La Liga, see the{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer hub
          </Link>. For transfer news and European football coverage, see{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}