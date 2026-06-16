import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-switzerland-1-qatar-1-group-b';
const URL_PATH = '/world-cup/2026/switzerland-1-qatar-1-group-b';
const CANONICAL = `https://www.objectwire.org${URL_PATH}`;

export const metadata: Metadata = {
  title: 'Switzerland 1–1 Qatar | World Cup 2026 Group B Match Report',
  description:
    "Switzerland dominated but were denied victory by Qatar's last-gasp equalizer from Boualem Khoukhi. The Swiss had 23 shots but could not hold their 1–0 lead.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Switzerland 1–1 Qatar | World Cup 2026 Group B',
    description: "Switzerland's dominance goes unrewarded as Qatar equalise at the death. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-13T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Switzerland', 'Qatar', 'Group B', 'Match Report'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Switzerland 1–1 Qatar | World Cup 2026',
    description: '23 shots and still no win for Switzerland. Khoukhi breaks Swiss hearts. Report by Jack Brennan.',
  },
};

export default function SwitzerlandQatarPage() {
  return (
    <NewsArticle
      title="Switzerland 1–1 Qatar: 23 Shots, a Penalty, and a Last-Gasp Gut Punch"
      subtitle="Switzerland's dominance yields only a draw as Boualem Khoukhi's stoppage-time equalizer denies the Swiss all three points"
      category="World Cup 2026 · Group B"
      categoryColor="red"
      topicTag="sports"
      publishDate="June 13, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      tags={['World Cup 2026', 'Switzerland', 'Qatar', 'Group B', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Switzerland vs Qatar', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'canada-bosnia', title: 'Canada 1–1 Bosnia | Group B Report', url: '/world-cup/2026/canada-1-bosnia-1-group-b', publishDate: 'June 12, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Switzerland drew 1–1 with Qatar despite 23 shots and total territorial dominance.',
        'Breel Embolo converted a penalty in the 17th minute to give Switzerland the lead.',
        "Qatar's Boualem Khoukhi equalizes in stoppage time to deny the Swiss all three points.",
        'This may be the most dominant performance by a team that failed to win at this World Cup.',
        'A point against a European side of Switzerland\'s quality is a genuine achievement for Qatar.',
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Statistics can tell a story on their own. Switzerland had 23 shots. Seven of them were on
          target. They opened the scoring in the 17th minute from the penalty spot. They spent the
          vast majority of the match in Qatar's half of the field, pressing relentlessly and creating
          chance after chance. None of it was enough.
        </p>

        <p>
          Boualem Khoukhi's late equalizer for Qatar — a goal that arrived deep into the match as
          Switzerland were seemingly managing their way to a comfortable three-point opening —
          was one of those results that can define a group stage. From the perspective of football
          justice, it felt harsh. From a tactical standpoint, it was entirely in keeping with how
          Qatar had approached the match.
        </p>

        <h2 id="switzerland-dominance">A Record of Frustration</h2>

        <p>
          Switzerland's opening to the match was precisely what the FIFA rankings — which position
          them comfortably above Qatar — would have predicted. Breel Embolo stroked home a penalty
          kick in the 17th minute with a calm authority that suggested this was simply the first goal
          in what would become a comfortable afternoon.
        </p>

        <p>
          Qatar had other ideas. Their defensive structure, deep and disciplined, absorbed
          Switzerland's attacks and forced the Europeans into increasingly speculative efforts
          from range. The Swiss created quality opportunities throughout the second half but
          were consistently denied by the Qatari goalkeeper and a resolute defensive block that
          refused to collapse under pressure.
        </p>

        <p>
          In statistical terms, this may qualify as the most dominant performance by a team that
          still failed to win at this World Cup. The expected goals metrics will make grim reading
          for Switzerland's coaching staff. At some point, you have to put the chances away.
        </p>

        <h2 id="qatar-equalizer">Qatar's Late Lifeline</h2>

        <p>
          With Switzerland preparing for what felt like an inevitable three-point opening,
          Khoukhi arrived at the right moment to complete one of the day's great upsets. His
          equalizer silenced the Swiss contingent in the stadium and sent Qatar's limited but
          passionate support into something approaching delirium.
        </p>

        <p>
          For Qatar — appearing in their second consecutive World Cup as hosts-turned-participants —
          a point against a European side of Switzerland's caliber is a genuine achievement.
          The result keeps them alive in Group B, though their path to the knockout stage remains
          extremely narrow given the competition they face.
        </p>

        <h2 id="analysis">Group B Implications</h2>

        <p>
          The draw means Group B remains extraordinarily open. Switzerland, the group favorites,
          dropped two points they should not have. Canada drew 1–1 with Bosnia the previous day.
          Every side in the group now sits on one point apiece after their respective openers.
        </p>

        <p>
          For Switzerland, the frustration will linger. Coach Murat Yakin will have difficult
          conversations this week about clinical finishing and match management in the closing
          stages. A team that creates 23 shots should not be drawing. Their next fixtures must
          deliver the results their performances keep threatening — or the group stage could
          end in embarrassment for one of the tournament's expected contenders.
        </p>

      </div>
    </NewsArticle>
  );
}
