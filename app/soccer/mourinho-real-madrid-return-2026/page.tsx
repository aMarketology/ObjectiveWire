import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

const OG_IMAGE = '/thumbnails/soccer-mourinho-real-madrid-return-2026.jpg';

export const revalidate = 86400;

const SLUG = '/soccer/mourinho-real-madrid-return-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Jose Mourinho Real Madrid Return | 2026 Appointment',
  description:
    'Jose Mourinho is returning to Real Madrid as manager in 2026, 13 years after his first spell. Florentino Perez confirmed the appointment as Los Blancos end two trophy-less seasons.',
  keywords: [
    'Jose Mourinho Real Madrid',
    'Mourinho Real Madrid return 2026',
    'Real Madrid manager 2026',
    'Mourinho manager',
    'Real Madrid new manager',
    'Jose Mourinho 2026',
    'Mourinho Bernabeu',
    'Real Madrid sack Arbeloa',
    'Florentino Perez Mourinho',
    'La Liga 2026',
    'Vinicius Mbappe Real Madrid',
    'Real Madrid squad 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Jose Mourinho Returns to Real Madrid | 2026 Appointment Confirmed',
    description:
      'Mourinho is back at the Bernabeu after 13 years, confirmed by Florentino Perez. Real Madrid have gone two consecutive seasons without a major trophy.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-05-13T18:00:00Z',
    modifiedTime: '2026-05-13T18:00:00Z',
    section: 'Soccer',
    tags: ['Real Madrid', 'Jose Mourinho', 'La Liga', 'Soccer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mourinho Is Back at Real Madrid, 13 Years Later',
    description: 'Florentino Perez confirms the return. Two trophy-less seasons. One iron fist.',
  },
};

export default function MourinhoRealMadrid2026() {
  return (
    <>
      <NewsArticleSchema
        title="Jose Mourinho Real Madrid Return | 2026 Appointment"
        description="Jose Mourinho is returning to Real Madrid as manager in 2026, 13 years after his first spell. Florentino Perez confirmed the appointment as Los Blancos end two trophy-less seasons."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-05-13T18:00:00Z"
        modifiedTime="2026-05-13T18:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Soccer"
        keywords={[
          'Jose Mourinho Real Madrid',
          'Mourinho Real Madrid return 2026',
          'Real Madrid manager 2026',
        ]}
      />

      <NewsArticle
        title="Jose Mourinho Returns to Real Madrid | 13 Years, Two Trophy-Less Seasons Later"
        subtitle="Florentino Perez confirmed the appointment at a press conference on Tuesday. Mourinho has not won a league title in 11 years."
        category="Soccer"
        categoryColor="green"
        topicTag="sports"
        publishDate="2026-05-13T18:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        tags={['Real Madrid', 'Jose Mourinho', 'La Liga', 'Soccer']}
        slug="soccer-mourinho-real-madrid-return-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Soccer', item: '/soccer' },
          { name: 'Mourinho Real Madrid Return 2026', item: SLUG },
        ]}
        keyTakeaways={[
          'Jose Mourinho is returning to Real Madrid as head coach in 2026, confirmed by president Florentino Perez, 13 years after his first spell at the club ended in 2013.',
          'Real Madrid finished two consecutive seasons without a major trophy, including back-to-back Champions League group-stage exits inside the top 10.',
          'Mourinho has not won a league title in 11 years and was effectively pushed out of five of his last six managerial positions.',
          'The dressing room he inherits is fractured, with Vinicius Jr and Kylian Mbappe failing to form a functional partnership under three previous managers.',
          'Mourinho has demanded input on signings and his own staff in key roles, with the club retaining their medical and physical department.',
        ]}
        keyTakeawaysColor="green"
        faqItems={[
          {
            question: 'Is Jose Mourinho the new Real Madrid manager?',
            answer:
              'Yes. Jose Mourinho has been confirmed as Real Madrid head coach for the 2026 season by president Florentino Perez, returning to the club 13 years after his first spell ended in 2013.',
          },
          {
            question: 'Why did Real Madrid hire Mourinho?',
            answer:
              'Real Madrid hired Mourinho after two consecutive trophy-less seasons, back-to-back Champions League group-stage exits, and a fractured dressing room that three previous managers failed to fix. Mourinho replaced Alvaro Arbeloa, who was sacked after Vinicius Jr reportedly pushed for the change.',
          },
          {
            question: 'When was Mourinho last at Real Madrid?',
            answer:
              'Mourinho managed Real Madrid between 2010 and 2013. He won one La Liga title and one Copa del Rey during that spell, but left behind damaged relationships he himself described in January 2026 as "almost violent".',
          },
          {
            question: 'What is the problem between Vinicius and Mbappe at Real Madrid?',
            answer:
              'Vinicius Jr and Kylian Mbappe have failed to form an effective attacking partnership at Real Madrid under Carlo Ancelotti, Xabi Alonso, and Alvaro Arbeloa. The combination, expected to be the most feared attack in Europe, has not produced the chemistry or results that were expected.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Soccer"
        moreFromHubHref="/soccer"
      >
        <p>
          Jose Mourinho is returning to Real Madrid as head coach in 2026, confirmed by club president
          Florentino Perez at a press conference on Tuesday, 13 years after his first and famously turbulent
          spell at the Bernabeu ended in 2013. Mourinho inherits a squad that has gone two consecutive
          seasons without a major trophy and a dressing room that three successive managers could not
          stabilise.
        </p>

        <h2>Mourinho Real Madrid Return | Why Perez Made the Call</h2>
        <p>
          The appointment makes a specific kind of logic for Perez. Real Madrid's dressing room is
          fractured, with reports of fights between players. Vinicius Jr is said to have pushed for the
          sacking of predecessor Xabi Alonso. Kylian Mbappe, signed in 2024 as the marquee acquisition
          to pair with Vinicius, has not settled and is described by sources inside the club as a
          "strange body." Into this environment walks Mourinho, a manager whose iron-discipline
          approach and zero tolerance for insubordination is precisely what Perez believes the
          dressing room needs.
        </p>
        <p>
          The alignment between manager and president runs deeper than tactics.
          Mourinho's signature siege mentality, us-against-the-world framing, and use of the media as
          adversaries maps directly onto the culture Perez has spent years building at the club.
          At the press conference itself, Perez spoke about conspiracies and enemies, barely mentioning
          the football. He was, in the words of BBC Sport columnist Guillem Balague, "singing from the
          Mourinho songsheet."
        </p>

        <h2>Mourinho Record | No League Title in 11 Years</h2>
        <p>
          The counterargument to the appointment is Mourinho's recent managerial record. He has not
          won a league title since 2015. He has been sacked, or effectively pushed out, in five of his
          last six jobs. At Tottenham, his training sessions were described as tedious, his half-time
          team talks ranged between indifference and screaming, and the dressing room eventually split
          into three distinct factions: a small group of loyalists, a larger group who actively resented
          him, and a majority who had simply stopped caring. At Manchester United and Roma, the diagnosis
          of each club's problems was often accurate, but the remedy applied made things worse.
        </p>
        <p>
          Real Madrid is a different scale of institution to any of those clubs, and Mourinho knows
          it. When he was last at the Bernabeu, between 2010 and 2013, he left behind relationships so
          damaged he himself described the period as "almost violent." He won one La Liga title and one
          Copa del Rey. The fans are divided on his return. But Perez has moved.
        </p>

        <h2>Vinicius and Mbappe | The Problem Mourinho Must Solve</h2>
        <p>
          The most concrete challenge waiting for Mourinho is the partnership between Vinicius Jr and
          Mbappe. Three managers have failed to make them work together. The chemistry that was supposed
          to make Real Madrid the most feared attack in Europe has not materialised.
          Mourinho does have relevant precedent: at Inter Milan he deployed Samuel Eto'o as a
          right winger and they won the Treble; at Madrid in his first spell he managed the
          Cristiano Ronaldo and Karim Benzema dynamic and kept it functional. Whether he can
          repeat that with two players whose relationship is reportedly more fractured is the
          first test of whether, as he claims, he has changed.
        </p>

        <h2>Mourinho Demands | Signings Input and His Own Staff</h2>
        <p>
          Mourinho has set early conditions for the role. He wants input on the transfer window, not
          necessarily specific names, but positions and areas of need he has identified as imbalances in
          the current squad. In his first Real Madrid tenure, he pushed successfully for Luka Modric,
          Sami Khedira, and Mesut Ozil, and all three proved correct calls. He also wants his own
          coaching staff installed in key roles. The club's medical and physical department will stay.
          Whether Mourinho can operate within that hybrid structure is considered an early indicator of
          how much he has genuinely evolved as a manager.
        </p>
        <p>
          For full coverage of the 2026 La Liga season and Real Madrid, see the{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer hub
          </Link>. For Premier League and European football news, see{' '}
          <Link href="/premier-league" className="text-blue-600 hover:text-blue-800 underline">
            oWire Premier League
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}