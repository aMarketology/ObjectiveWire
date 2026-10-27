import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/soccer/harry-kane-2026-ballon-dor-winner';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const OG_IMAGE = '/thumbnails/soccer-harry-kane-2026-ballon-dor-winner.jpg';
const VIDEO_ID = '407tY1wz-w0';

export const metadata: Metadata = {
  title: "Harry Kane 2026 Ballon dOr | First English Winner Since Owen",
  description:
    "Bayern Munich striker Harry Kane won the 2026 Men's Ballon d'Or, beating Kylian Mbappé and Lamine Yamal to end England's 25-year wait.",
  keywords: [
    'Harry Kane 2026 Ballon dOr winner',
    'Harry Kane Alexia Putellas Ballon dOr',
    'first English Ballon dOr winner since Michael Owen',
    'Gerd Müller Trophy Harry Kane',
    '2026 Ballon dOr voting results Mbappé Yamal',
    'Harry Kane Bayern Munich Ballon dOr',
    '2026 Ballon dOr London Palladium',
    'Men Ballon dOr 2026 winner',
    'Harry Kane 73 goals season',
    'Lamine Yamal Kopa Trophy 2026',
    'Ronaldo Nazario Ballon dOr presenter',
    'Ballon dOr 2026 winners list',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Golden Triumph | Harry Kane Wins 2026 Men\'s Ballon d\'Or',
    description:
      'Harry Kane beat Kylian Mbappé and Lamine Yamal to win the 2026 Men\'s Ballon d\'Or, ending a 25-year English drought. Full voting, awards, and ceremony details.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-10-26T20:00:00Z',
    modifiedTime: '2026-10-26T20:00:00Z',
    section: 'Sports',
    tags: ['Harry Kane', 'Ballon dOr', 'Bayern Munich', 'England', 'Soccer'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Harry Kane 2026 Ballon dOr winner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harry Kane Wins 2026 Ballon dOr | First English Winner Since Owen',
    description: 'Kane edges Mbappé and Yamal to end England\'s 25-year wait. Also took the Gerd Müller Trophy.',
    images: [OG_IMAGE],
  },
};

export default function HarryKaneBallonDorPage() {
  return (
    <>
      <NewsArticleSchema
        title="Harry Kane 2026 Ballon dOr | First English Winner Since Owen"
        description="Bayern Munich striker Harry Kane won the 2026 Men's Ballon d'Or, beating Kylian Mbappé and Lamine Yamal to end England's 25-year wait."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.com/authors/jack-brennan"
        publishedTime="2026-10-26T20:00:00Z"
        modifiedTime="2026-10-26T20:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Sports"
        keywords={[
          'Harry Kane 2026 Ballon dOr winner',
          'first English Ballon dOr winner since Michael Owen',
          '2026 Ballon dOr voting results',
        ]}
      />

      <QuickArticle
        title="Golden Triumph | Harry Kane Claims 2026 Men's Ballon d'Or to End England's 25-Year Wait"
        subtitle="England captain and Bayern Munich superstar Harry Kane has officially been crowned the world's best player, winning the 2026 Men's Ballon d'Or at a gala held at the London Palladium."
        department="Soccer"
        category="Sports"
        accentColor="green"
        publishDate="October 26, 2026"
        readTime="5 min read"
        author={{ name: 'Jack Brennan', slug: 'jack-brennan' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Harry Kane 2026 Ballon dOr winner',
          caption: 'Harry Kane wins the 2026 Men\'s Ballon d\'Or at the London Palladium.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/soccer', label: 'Soccer' },
          { href: SLUG, label: 'Kane Ballon dOr' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Ballon dOr 2026: Harry Kane Crowned in London Ceremony',
            url: 'https://www.theguardian.com/football/2026/oct/26/harry-kane-ballon-dor-2026',
            publisher: 'The Guardian',
          },
          {
            number: 2,
            title: 'Harry Kane Wins 2026 Ballon dOr Ahead of Kylian Mbappé, Lamine Yamal',
            url: 'https://www.espn.com/soccer/story/_/id/harry-kane-2026-ballon-dor',
            publisher: 'ESPN',
          },
          {
            number: 3,
            title: "England's Harry Kane Wins 2026 Ballon d'Or",
            url: 'https://www.aljazeera.com/sports/2026/10/26/harry-kane-ballon-dor',
            publisher: 'Al Jazeera',
          },
          {
            number: 4,
            title: 'Harry Kane Tops Kylian Mbappé for First Ballon dOr Prize',
            url: 'https://www.cbssports.com/soccer/news/harry-kane-ballon-dor-2026/',
            publisher: 'CBS Sports',
          },
        ]}
        relatedArticles={[
          { href: '/soccer/zidane-france-national-team-manager-2026', title: 'Zinedine Zidane Confirmed as France National Team Manager', category: 'Sports' },
          { href: '/soccer/real-madrid-yan-diomande-transfer-2026', title: 'Real Madrid Yan Diomande Transfer 2026', category: 'Sports' },
          { href: '/world-cup/2026/spain-1-0-argentina-final-aet', title: 'Spain 1-0 Argentina AET | 2026 World Cup Final', category: 'Sports' },
          { href: '/soccer', title: 'Soccer Hub | World Cup, Premier League, MLS', category: 'Sports' },
        ]}
        tags={['Harry Kane', 'Ballon dOr', 'Bayern Munich', 'England', 'Soccer']}
      >
        <p>
          England captain and Bayern Munich superstar <strong>Harry Kane</strong> has officially been crowned the world's best player, winning the <strong>2026 Men's Ballon d'Or</strong> at a gala held at the London Palladium.
        </p>

        <p>
          Presented the golden trophy by legendary Brazilian forward <strong>Ronaldo Nazário</strong>, Kane edged out Real Madrid forward <strong>Kylian Mbappé</strong> (2nd) and Barcelona phenom <strong>Lamine Yamal</strong> (3rd).
        </p>

        <p>
          The victory ends a quarter-century drought for English football, making Kane the fifth Englishman in history to claim the award and the first since Michael Owen in 2001.
        </p>

        <div className="my-8 not-prose rounded-xl border border-green-200 bg-green-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">2026 Men's Ballon d'Or Voting Summary</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>1st Place (Winner):</strong> Harry Kane, England and Bayern Munich</li>
            <li><strong>2nd Place:</strong> Kylian Mbappé, France and Real Madrid</li>
            <li><strong>3rd Place:</strong> Lamine Yamal, Spain and Barcelona</li>
            <li><strong>4th Place:</strong> Ousmane Dembélé, France and Paris Saint-Germain</li>
            <li><strong>5th Place:</strong> Lionel Messi, Argentina and Inter Miami</li>
          </ul>
        </div>

        <h2>A Record-Breaking Campaign</h2>

        <p>
          Kane's coronation follows a staggering 2025-26 season where he averaged over a goal per appearance across all competitions, finishing with one of the highest single-season scoring tallies of the 21st century.
        </p>

        <p>
          His prolific <strong>73-goal output</strong> also earned him the <strong>Gerd Müller Trophy</strong> as the top striker of the year, making Kane the first player in history to walk away from a single Ballon d'Or ceremony with both honors.
        </p>

        <div className="my-8 not-prose overflow-hidden rounded-xl border border-green-200 shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2 text-left font-bold">Award Category</th>
                <th className="px-4 py-2 text-left font-bold">2026 Winner</th>
                <th className="px-4 py-2 text-left font-bold">Team and Country</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Men's Ballon d'Or", 'Harry Kane', 'Bayern Munich and England'],
                ["Women's Ballon d'Or", 'Alexia Putellas', 'London City Lionesses and Spain'],
                ['Kopa Trophy (Best U21)', 'Lamine Yamal', 'Barcelona and Spain'],
                ["Yashin Trophy (Men's Goalkeeper)", 'Unai Simón', 'Athletic Bilbao and Spain'],
                ['Gerd Müller Trophy (Top Scorer)', 'Harry Kane', 'Bayern Munich and England'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 ? 'bg-green-50/50' : ''}>
                  <td className="px-4 py-2 font-semibold text-green-900">{row[0]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-2 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Putellas Wins Third Women's Ballon d'Or</h2>

        <p>
          On the women's side, Spanish midfielder <strong>Alexia Putellas</strong> captured her third Women's Ballon d'Or. Putellas was rewarded for leading Barcelona Femení to a historic domestic and European campaign before making her high-profile transfer to the London City Lionesses.
        </p>

        <p>
          The night marked a sweeping showcase for Spanish football as well, with Barcelona's <strong>Lamine Yamal</strong> claiming his third consecutive Kopa Trophy, while <strong>Unai Simón</strong> and <strong>Cata Coll</strong> took home the men's and women's Yashin Trophies for top goalkeepers.
        </p>

        <p>
          For more soccer coverage, see the{' '}
          <Link href="/soccer" className="text-blue-600 hover:text-blue-800 underline">
            Soccer hub
          </Link>{' '}
          and our{' '}
          <Link href="/soccer/zidane-france-national-team-manager-2026" className="text-blue-600 hover:text-blue-800 underline">
            Zinedine Zidane France appointment report
          </Link>
          .
        </p>

        {/* ── Ballon d'Or Video ── */}
        <div className="my-8 not-prose">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Harry Kane Wins 2026 Ballon d'Or | Ceremony Coverage"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Harry Kane 2026 Ballon d'Or coverage via{' '}
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              YouTube
            </a>
          </p>
        </div>
      </QuickArticle>
    </>
  );
}