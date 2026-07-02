import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-norway-2-1-ivory-coast-round-of-32';
const URL_PATH = '/world-cup/2026/norway-2-1-ivory-coast-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-norway-2-1-ivory-coast-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'Norway 2-1 Ivory Coast | World Cup 2026 Round of 32 | Haaland 86th-Minute Winner',
  description:
    "Erling Haaland struck an 86th-minute winner to send Norway into the Round of 16, defeating a physical Ivory Coast 2-1 in the Round of 32. Haaland's clinical late finish spared Norway from extra time.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Haaland 86 | Norway 2-1 Ivory Coast | World Cup 2026 Round of 32",
    description: "Of course it was Haaland. Norway's talisman finds space at the death to fire home a clinical match-winner. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-30T22:00:00Z',
    modifiedTime: '2026-06-30T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Norway', 'Ivory Coast', 'Round of 32', 'Haaland', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Haaland. 86th minute. Norway through. World Cup 2026.",
    description: "Ivory Coast pushed Norway deep into the dying minutes. Then Haaland found space and buried it. 2-1. Norway are in the last 16. Report by Jack Brennan.",
  },
};

export default function NorwayIvoryCoastR32Page() {
  return (
    <NewsArticle
      title="Norway 2-1 Ivory Coast: Haaland's 86th-Minute Strike Sends Norway Into the Last 16"
      subtitle="Erling Haaland again carried the weight of a nation on his shoulders, finding space in the dying minutes to fire home a clinical match-winner as Norway defeated a highly physical Ivory Coast 2-1 in the Round of 32."
      category="World Cup 2026 · Round of 32"
      categoryColor="blue"
      topicTag="sports"
      publishDate="June 30, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Norway 2-1 Ivory Coast Haaland 86th minute winner World Cup 2026 Round of 32' }}
      tags={['World Cup 2026', 'Norway', 'Ivory Coast', 'Haaland', 'Round of 32', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Norway vs Ivory Coast', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'france-3-0-sweden-round-of-32', title: 'France 3-0 Sweden | Round of 32', url: '/world-cup/2026/france-3-0-sweden-round-of-32', publishDate: 'June 30, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Norway defeated Ivory Coast 2-1 in the Round of 32 on June 30, 2026.',
        "Erling Haaland scored the winning goal in the 86th minute, sparing Norway from extra time against a physically powerful Ivory Coast side.",
        'Haaland continues to be Norway\'s decisive difference-maker at every critical moment of this tournament.',
        'Norway advance to the Round of 16, where the quality of their opposition will escalate significantly.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Norway vs Ivory Coast at the 2026 World Cup?',
          answer: 'Norway defeated Ivory Coast 2-1 in the Round of 32 on June 30, 2026.',
        },
        {
          question: 'Did Haaland score against Ivory Coast?',
          answer: "Yes. Erling Haaland scored an 86th-minute match-winner to give Norway a 2-1 victory over Ivory Coast in the Round of 32.",
        },
        {
          question: 'How did Ivory Coast perform against Norway?',
          answer: 'Ivory Coast were highly physical and organized, pushing Norway deep into the final minutes and threatening extra time before Haaland found the decisive goal.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          When Norway need a goal, they turn to <strong>Erling Haaland</strong>. When Haaland gets
          the chance, he takes it. It is the tournament's most reliable equation, and it delivered
          again on June 30 as Norway survived a physical Ivory Coast challenge to advance to the
          Round of 16 with a 2-1 victory, secured in the most nerve-wracking fashion possible.
        </p>

        <p>
          This was not a comfortable Norwegian evening. Ivory Coast were well-organized, physically
          powerful, and prepared to take the match into extra time if that is what it required.
          For 85 minutes, it looked exactly like that was where the contest was heading.
          Then Haaland found space. One touch to control. One strike to finish. A goal that
          sent Norway through and confirmed what everyone in this tournament already knows:
          the man is simply different to everyone else on the pitch.
        </p>

        <h2>Ivory Coast | A Physical Problem Norway Struggled to Solve</h2>

        <p>
          Ivory Coast built their Round of 32 game plan around physicality and organization.
          Their midfield was compact and aggressive. Their defenders were powerful and willing
          to engage in the kind of aerial and physical battles that can disrupt technically
          superior opponents. For large parts of the match, the plan worked.
        </p>

        <p>
          Norway had the ball but struggled to create clear openings. Ivory Coast defended
          their penalty area with numbers, blocked shooting lanes, and matched Norwegian
          intensity with their own. The 1-1 scoreline approaching the 80th minute felt
          accurate and ominous.
        </p>

        <h2>Haaland | The Man for the Moments That Matter Most</h2>

        <p>
          The 86th minute. Norway working the ball into a dangerous position. Haaland making
          his run, finding his space, as he always does, at exactly the moment the match required
          it most. The finish was clinical, because Haaland's finishes at this level are always
          clinical. The ball in the net. The stadium erupting. Norway through.
        </p>

        <p>
          The statistics of Haaland's involvement in this World Cup tell one part of the story.
          The weight of what he means to this Norwegian team, the way entire match plans from
          opposition coaches are constructed around containing him, and the way he finds goals
          regardless, tells the part that statistics cannot capture.
        </p>

        <h2>What the Round of 16 Holds</h2>

        <p>
          Norway are through to the last 16 and they are dangerous. Their team is not a
          one-man side. Their defensive organization has been solid throughout the tournament
          and their ability to absorb pressure and counter with pace is a genuine weapon.
          But Haaland is the reason every potential opponent studies their files carefully
          and sleeps a little less soundly than they otherwise would.
        </p>

        <p>
          Ivory Coast leave the tournament with dignity. They pushed one of Europe's
          strongest sides to the 86th minute and proved their quality. Their future at
          major tournaments looks bright. Norway's future in this one depends, as it
          always has, on the man who just saved them again.
        </p>

      </div>
    </NewsArticle>
  );
}
