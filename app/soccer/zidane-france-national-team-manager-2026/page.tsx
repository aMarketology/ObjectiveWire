import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/soccer/zidane-france-national-team-manager-2026';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const OG_IMAGE = `${SITE_CONFIG.url}/thumbnails/soccer-zidane-france-national-team-manager-2026.jpg`;

export const metadata: Metadata = {
  title: 'Zinedine Zidane France Manager | 2026 Appointment Confirmed',
  description:
    'Zinedine Zidane has been confirmed as the new manager of the France national team, succeeding Didier Deschamps after the 2026 World Cup. The France legend returns to lead Les Bleus into the 2028 European Championship cycle.',
  keywords: [
    'Zinedine Zidane France manager',
    'Zidane France national team 2026',
    'Zidane replaces Deschamps',
    'France manager 2026',
    'Zidane Les Bleus',
    'France national team coach',
    'Zidane World Cup 2026',
    'Didier Deschamps successor',
    'FFF Zidane appointment',
    'France Euro 2028',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Zinedine Zidane Confirmed as New France National Team Manager',
    description:
      'Zidane finally takes the France job, succeeding Didier Deschamps after the 2026 World Cup. The appointment ends years of speculation about when the legendary midfielder would lead Les Bleus.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-28T14:00:00Z',
    modifiedTime: '2026-07-28T14:00:00Z',
    section: 'Soccer',
    tags: ['Zinedine Zidane', 'France', 'Les Bleus', 'Soccer', 'World Cup'],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Zinedine Zidane France Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zidane Is Finally the France Manager',
    description: 'The wait is over. Zinedine Zidane has been confirmed as the new head coach of the France national team.',
    images: [OG_IMAGE],
  },
};

export default function ZidaneFranceManagerPage() {
  return (
    <>
      <NewsArticleSchema
        title="Zinedine Zidane France Manager | 2026 Appointment Confirmed"
        description="Zinedine Zidane has been confirmed as the new manager of the France national team, succeeding Didier Deschamps after the 2026 World Cup."
        author="Jack Brennan"
        authorUrl={`${SITE_CONFIG.url}/authors/jack-brennan`}
        publishedTime="2026-07-28T14:00:00Z"
        modifiedTime="2026-07-28T14:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Soccer"
        keywords={[
          'Zinedine Zidane France manager',
          'Zidane France national team 2026',
          'Zidane replaces Deschamps',
        ]}
      />

      <NewsArticle
        title="Zinedine Zidane Confirmed as France National Team Manager | The Wait Is Over"
        subtitle="The French Football Federation has confirmed Zinedine Zidane as the new manager of the France national team, succeeding Didier Deschamps after the 2026 World Cup. The appointment ends years of speculation about when the legendary midfielder would take the reins of Les Bleus."
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
        tags={['Zinedine Zidane', 'France', 'Les Bleus', 'Soccer', 'World Cup']}
        slug="soccer-zidane-france-national-team-manager-2026"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Soccer', item: '/soccer' },
          { name: 'Zidane France Manager', item: SLUG },
        ]}
        keyTakeaways={[
          'Zinedine Zidane has been confirmed as the new manager of the France national team, succeeding Didier Deschamps after the 2026 World Cup.',
          'The appointment ends years of speculation about when the legendary midfielder and three-time Champions League-winning manager would take the France job.',
          'Zidane inherits a France squad that remains one of the deepest in world football, headlined by Kylian Mbappe, and will lead Les Bleus into the 2028 European Championship cycle.',
          'Deschamps departs after 14 years in charge, having won the 2018 World Cup and reached the 2022 final, making him the longest-serving and most successful France manager in history.',
          'Zidane had been linked with the France job since leaving Real Madrid in 2021, and the FFF had long viewed him as the natural successor to Deschamps.',
        ]}
        keyTakeawaysColor="green"
        faqItems={[
          {
            question: 'Is Zinedine Zidane the new France manager?',
            answer:
              'Yes. The French Football Federation has confirmed Zinedine Zidane as the new head coach of the France national team, succeeding Didier Deschamps after the 2026 World Cup.',
          },
          {
            question: 'Who did Zidane replace as France manager?',
            answer:
              'Zidane replaces Didier Deschamps, who stepped down after 14 years in charge. Deschamps won the 2018 World Cup, reached the 2022 final, and is the most successful manager in France national team history.',
          },
          {
            question: 'When was Zidane last a manager?',
            answer:
              'Zidane last managed Real Madrid, where he served two spells between 2016 and 2021, winning three consecutive Champions League titles and two La Liga titles. He had been without a club since leaving Madrid in 2021.',
          },
          {
            question: 'What will Zidane\'s first tournament be as France manager?',
            answer:
              'Zidane\'s first major tournament will be the 2028 European Championship, with World Cup 2030 qualifying also on the horizon. He takes over a squad headlined by Kylian Mbappe that remains one of the deepest in international football.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Soccer"
        moreFromHubHref="/soccer"
      >
        <p>
          Zinedine Zidane has been confirmed as the new manager of the France national team, the French Football Federation announced on Monday, ending years of speculation about when the legendary midfielder would finally take the reins of Les Bleus. Zidane succeeds Didier Deschamps, who stepped down after the 2026 World Cup, closing a 14-year tenure that made him the longest-serving and most successful manager in the history of the French national team.
        </p>

        <h2>Zidane France Manager | The Appointment That Was Always Coming</h2>
        <p>
          The appointment has felt inevitable for years. Zidane had been openly linked with the France job since leaving Real Madrid in 2021, and the FFF had long viewed him as the natural successor to Deschamps. The timing was the only question. Deschamps, who captained France to their 1998 World Cup triumph with Zidane as his teammate, had extended his contract through the 2026 tournament, and the federation was content to wait until the cycle concluded naturally.
        </p>
        <p>
          Zidane inherits a France squad that remains one of the deepest in world football. Kylian Mbappe, now 27, is the undisputed centerpiece, and the generation that won the 2018 World Cup still forms the spine of the team. The challenge for Zidane will be integrating the next wave of French talent while managing the expectations that come with a program that has reached three of the last four World Cup finals.
        </p>

        <h2>Zidane Managerial Record | Three Champions Leagues, Two La Liga Titles</h2>
        <p>
          Zidane's managerial resume is defined by his two spells at Real Madrid. In his first stint, between 2016 and 2018, he won three consecutive Champions League titles, a feat unmatched in the modern era, along with one La Liga title. He returned in 2019 and added a second La Liga title in 2020 before departing again in 2021. His ability to manage elite egos, navigate the political pressures of a superclub, and deliver in knockout competitions made him the obvious candidate for a France job that demands exactly those skills.
        </p>
        <p>
          The transition from club to international management is not always seamless, but Zidane's playing career with France, 108 caps, the 1998 World Cup, the 2000 European Championship, gives him an institutional credibility with the French public that no other candidate could match. He is the most iconic French footballer of his generation, and his appointment carries a symbolic weight that extends beyond tactics.
        </p>

        <h2>Deschamps Legacy | 14 Years, One World Cup, Two Finals</h2>
        <p>
          Deschamps leaves the France job as the most decorated figure in the program's history. He took over in 2012, rebuilt the team after the dysfunction of the 2010 World Cup, and delivered the 2018 World Cup title. France reached the 2022 final, losing to Argentina on penalties, and remained a consistent force through the 2026 cycle. His 14-year tenure is the longest of any France manager, and his departure marks the end of an era that restored French football to the top of the global hierarchy.
        </p>
        <p>
          For full coverage of international football and the 2026 World Cup, see the{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            oWire World Cup hub
          </Link>. For European club and national team news, see{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}