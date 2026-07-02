import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-england-2-1-dr-congo-round-of-32';
const URL_PATH = '/world-cup/2026/england-2-1-dr-congo-round-of-32';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;
const OG_IMAGE = '/thumbnails/world-cup-2026-england-2-1-dr-congo-round-of-32.jpg';

export const metadata: Metadata = {
  title: 'England 2-1 DR Congo | World Cup 2026 Round of 32 | Kane 86th-Minute Winner',
  description:
    "Harry Kane rescued England from a World Cup exit with an 86th-minute game-winner against a highly aggressive DR Congo in the Round of 32. England survived a nervy 2-1 scare as Kane's leadership proved decisive.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Kane 86 | England 2-1 DR Congo | World Cup 2026 Round of 32",
    description: "England stare at the exit. Kane finds a way. 86th minute. The Three Lions survive to fight another day. Report by Jack Brennan.",
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-01T22:00:00Z',
    modifiedTime: '2026-07-01T22:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'England', 'DR Congo', 'Round of 32', 'Kane', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "England were going out. Then Kane. 86 minutes. 2-1. World Cup 2026.",
    description: "DR Congo pushed England to the absolute edge. Captain Kane saved the nation with an 86th-minute hammer. The Three Lions live on. Report by Jack Brennan.",
  },
};

export default function EnglandDRCongoR32Page() {
  return (
    <NewsArticle
      title="England 2-1 DR Congo: Captain Kane's 86th-Minute Rescue Act Saves the Three Lions From Disaster"
      subtitle="England stared at a disastrous World Cup exit as a highly aggressive DR Congo side took the match to the very edge of extra time. With the clock running out and the stadium holding its breath, Harry Kane hammered home an 86th-minute game-winner to spare English blushes and advance to the Round of 16."
      category="World Cup 2026 · Round of 32"
      categoryColor="blue"
      topicTag="sports"
      publishDate="July 1, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'England 2-1 DR Congo Harry Kane 86th minute winner World Cup 2026 Round of 32' }}
      tags={['World Cup 2026', 'England', 'DR Congo', 'Round of 32', 'Kane', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'England vs DR Congo', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'belgium-3-2-senegal-aet-round-of-32', title: 'Belgium 3-2 Senegal AET | Round of 32', url: '/world-cup/2026/belgium-3-2-senegal-aet-round-of-32', publishDate: 'July 1, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'England defeated DR Congo 2-1 in the Round of 32 on July 1, 2026.',
        "Harry Kane scored the decisive goal in the 86th minute, rescuing England from what appeared to be an inevitable extra time or worse.",
        'DR Congo were highly aggressive and physical, threatening to knock England out in one of the tournament\'s biggest potential shocks.',
        'England advance to the Round of 16 but the performance will prompt serious scrutiny of their ability to handle high-intensity opposition.',
      ]}
      faqItems={[
        {
          question: 'What was the score in England vs DR Congo at the 2026 World Cup?',
          answer: 'England defeated DR Congo 2-1 in the Round of 32 on July 1, 2026. Harry Kane scored the winning goal in the 86th minute.',
        },
        {
          question: 'Did Kane score the winner against DR Congo?',
          answer: 'Yes. Harry Kane hammered home an 86th-minute game-winner to give England a 2-1 victory over DR Congo in the Round of 32.',
        },
        {
          question: 'How close were England to being eliminated?',
          answer: 'Very close. With the match level heading toward extra time in the 86th minute, England appeared to be heading for a nervy extension before Kane found the decisive goal.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          <strong>Harry Kane</strong>. 86th minute. England are through. That is the
          story of July 1, 2026, in its most concentrated form. The longer version is a
          tale of English anxiety, Congolese determination, and the enduring truth that
          when England need someone to step forward and deliver, their captain is the
          man who does it.
        </p>

        <p>
          DR Congo arrived in this match with absolutely nothing to lose and everything
          to gain. They were aggressive from the opening whistle, physical in the challenges,
          and strategically disciplined in a way that England's coaching staff had clearly
          not fully accounted for. The Three Lions were uncomfortable for most of the
          match and had large sections of the stadium wondering whether another chapter
          of English World Cup heartbreak was being written in real time.
        </p>

        <h2>DR Congo's Threat | England Pushed to the Edge</h2>

        <p>
          The Congolese approach was clear and it worked effectively. High pressure in
          England's half disrupted the Three Lions' build-up play. Physical challenges
          in midfield unsettled England's rhythm. When DR Congo pushed forward, they
          carried genuine threat and proved they were not at this World Cup to make up
          the numbers.
        </p>

        <p>
          England equalized to make it 1-1 and then spent much of the second half unable
          to find a second. DR Congo held their defensive shape, frustrated England's
          attempts to work openings, and with time running out, the prospect of extra
          time and the enormous psychological pressure that implied was becoming the
          dominant reality.
        </p>

        <h2>Kane | The Captain in the Moment</h2>

        <p>
          The 86th minute. England working possession on the edge of the Congolese
          penalty area. Kane making his run, finding his position, as captains do.
          The ball arrives. No hesitation. A hammered finish, powerful and precisely
          placed, into the net. England lead 2-1.
        </p>

        <p>
          The reaction said everything about the tension that had preceded it.
          The relief was audible, visible, and entirely understandable. England had
          been four minutes from extra time against a side that most people had not
          expected to push them this close. Kane prevented what would have been a
          deeply uncomfortable next chapter.
        </p>

        <h2>Questions England Must Answer</h2>

        <p>
          The Three Lions are through to the Round of 16. The performance will be
          analyzed with the kind of forensic detail that English football always applies
          to matches where the national team does not look comfortable. Questions about
          their ability to control knockout matches against organized and physical opponents
          will not disappear simply because Kane found the goal that resolved the issue.
        </p>

        <p>
          What is not in question is their captain. Kane delivered when England needed
          it most. That is the baseline expectation for a player of his quality and
          leadership, and he met it. The Round of 16 awaits, and England will need to
          find a more convincing gear than the one they displayed on July 1.
        </p>

      </div>
    </NewsArticle>
  );
}
