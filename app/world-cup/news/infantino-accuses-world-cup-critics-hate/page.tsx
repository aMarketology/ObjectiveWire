import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SITE_CONFIG } from '@/lib/site-config';

export const revalidate = 86400;

const SLUG = '/world-cup/news/infantino-accuses-world-cup-critics-hate';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const OG_IMAGE = `${SITE_CONFIG.url}/thumbnails/world-cup-news-infantino-accuses-world-cup-critics-hate.jpg`;

export const metadata: Metadata = {
  title: 'Gianni Infantino World Cup Critics | Hate Speech Accusation',
  description:
    'FIFA president Gianni Infantino has accused critics of the 2026 World Cup of spreading hate, delivering a fiery defense of the tournament in a speech that has drawn sharp reactions from human rights groups and media organizations.',
  keywords: [
    'Gianni Infantino World Cup critics',
    'Infantino hate speech accusation',
    'FIFA president 2026 World Cup',
    'Infantino defends World Cup',
    'World Cup 2026 criticism',
    'FIFA human rights',
    'Infantino speech 2026',
    'World Cup controversy',
    'FIFA news 2026',
    'Infantino press conference',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FIFA Boss Gianni Infantino Accuses World Cup Critics of Spreading Hate',
    description:
      'Infantino delivered a fiery defense of the 2026 World Cup, accusing critics of spreading hate. Human rights groups and media organizations have pushed back sharply.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-28T16:00:00Z',
    modifiedTime: '2026-07-28T16:00:00Z',
    section: 'World Cup',
    tags: ['Gianni Infantino', 'FIFA', 'World Cup 2026', 'Soccer'],
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infantino Accuses World Cup Critics of Spreading Hate',
    description: 'The FIFA president delivered a fiery speech defending the 2026 tournament. Critics are pushing back.',
    images: [OG_IMAGE],
  },
};

export default function InfantinoWorldCupCriticsPage() {
  return (
    <>
      <NewsArticleSchema
        title="Gianni Infantino World Cup Critics | Hate Speech Accusation"
        description="FIFA president Gianni Infantino has accused critics of the 2026 World Cup of spreading hate, delivering a fiery defense of the tournament."
        author="Jack Brennan"
        authorUrl={`${SITE_CONFIG.url}/authors/jack-brennan`}
        publishedTime="2026-07-28T16:00:00Z"
        modifiedTime="2026-07-28T16:00:00Z"
        articleUrl={ARTICLE_URL}
        section="World Cup"
        keywords={[
          'Gianni Infantino World Cup critics',
          'Infantino hate speech accusation',
          'FIFA president 2026 World Cup',
        ]}
      />

      <NewsArticle
        title="FIFA Boss Gianni Infantino Accuses World Cup Critics of Spreading Hate"
        subtitle="FIFA president Gianni Infantino has accused critics of the 2026 World Cup of spreading hate, delivering a fiery and combative defense of the tournament in a speech that has drawn sharp reactions from human rights organizations and media groups."
        category="World Cup"
        categoryColor="green"
        topicTag="sports"
        publishDate="July 28, 2026"
        readTime="4 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Sports',
          authorSlug: 'jack-brennan',
        }}
        tags={['Gianni Infantino', 'FIFA', 'World Cup 2026', 'Soccer']}
        slug="world-cup-news-infantino-accuses-world-cup-critics-hate"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'World Cup', item: '/world-cup' },
          { name: 'Infantino Critics Speech', item: SLUG },
        ]}
        keyTakeaways={[
          'FIFA president Gianni Infantino has accused critics of the 2026 World Cup of spreading hate, delivering a fiery defense of the tournament in a speech that has drawn sharp reactions.',
          'Infantino framed criticism of FIFA and the World Cup as a form of discrimination, arguing that the organization and the tournament are being unfairly targeted.',
          'Human rights groups and media organizations have pushed back, noting that criticism of labor practices, environmental impact, and governance is not hate speech but legitimate accountability.',
          'The speech comes as the 2026 World Cup faces ongoing scrutiny over host city security, transit pricing, and the expanded 48-team format.',
          'Infantino has increasingly adopted a combative public posture, framing FIFA as a victim of external attacks rather than an organization subject to legitimate public scrutiny.',
        ]}
        keyTakeawaysColor="green"
        faqItems={[
          {
            question: 'What did Gianni Infantino say about World Cup critics?',
            answer:
              'Infantino accused critics of the 2026 World Cup of spreading hate, framing criticism of FIFA and the tournament as a form of discrimination rather than legitimate accountability.',
          },
          {
            question: 'Why are people criticizing the 2026 World Cup?',
            answer:
              'Criticism of the 2026 World Cup has focused on host city security concerns, transit pricing for fans, the environmental impact of the expanded 48-team format, and FIFA\'s governance and labor practices.',
          },
          {
            question: 'How have critics responded to Infantino?',
            answer:
              'Human rights organizations and media groups have pushed back sharply, arguing that criticism of labor practices, environmental impact, and governance is legitimate accountability, not hate speech.',
          },
          {
            question: 'Has Infantino made similar comments before?',
            answer:
              'Yes. Infantino has increasingly adopted a combative public posture, previously telling critics of the Qatar World Cup that Europeans should apologize for the next 3,000 years before criticizing others.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="World Cup"
        moreFromHubHref="/world-cup"
      >
        <p>
          FIFA president Gianni Infantino has accused critics of the 2026 World Cup of spreading hate, delivering a fiery and combative defense of the tournament in a speech that has drawn sharp reactions from human rights organizations and media groups around the world. Speaking at a FIFA congress event, Infantino framed criticism of the organization and its flagship tournament as a form of discrimination, arguing that FIFA and the World Cup are being unfairly targeted.
        </p>

        <h2>Infantino Speech | Critics Accused of Spreading Hate</h2>
        <p>
          Infantino's remarks marked an escalation in his increasingly confrontational public posture. The FIFA president argued that the volume and intensity of criticism directed at the 2026 tournament crossed a line from legitimate debate into something more malicious. He characterized the criticism as part of a broader pattern of attacks on FIFA that he suggested were motivated by prejudice rather than genuine concern.
        </p>
        <p>
          The speech did not name specific critics or organizations, but the context was clear. The 2026 World Cup has faced sustained scrutiny over multiple issues: host city security concerns, particularly in Mexico, where cartel violence has raised questions about fan safety; transit pricing that has drawn outrage from supporters traveling between venues; the environmental impact of the expanded 48-team format; and ongoing questions about FIFA's governance and labor practices.
        </p>

        <h2>Critics Push Back | Accountability Is Not Hate</h2>
        <p>
          Human rights organizations and media groups responded quickly to Infantino's remarks. Several organizations issued statements arguing that criticism of labor practices, environmental impact, and institutional governance is not hate speech but legitimate accountability, and that framing it as such is an attempt to delegitimize scrutiny that FIFA has invited through its own actions.
        </p>
        <p>
          The pushback noted that Infantino's framing echoes his controversial remarks ahead of the 2022 Qatar World Cup, when he told critics that Europeans should apologize for the next 3,000 years before criticizing others. That speech was widely condemned at the time, and the latest remarks suggest Infantino is doubling down on a strategy of casting FIFA as a victim of external attacks rather than an organization subject to legitimate public scrutiny.
        </p>

        <h2>World Cup 2026 | The Broader Context</h2>
        <p>
          The speech comes at a sensitive moment for FIFA. The 2026 World Cup, the first to feature 48 teams and the first hosted across three nations, has been a logistical and political challenge from the start. Security concerns in Mexico, transit pricing disputes in the United States, and the sheer scale of the tournament have generated headlines that FIFA would prefer to avoid. Infantino's decision to go on the offensive rather than address the substance of the criticism suggests a president who believes the best defense is a counterattack.
        </p>
        <p>
          Whether that strategy works with a global audience that has grown increasingly skeptical of FIFA's governance remains to be seen. What is clear is that Infantino has no intention of backing down.
        </p>
        <p>
          For full coverage of the 2026 World Cup, see the{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            oWire World Cup hub
          </Link>. For soccer and international football news, see{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            oWire Soccer
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}