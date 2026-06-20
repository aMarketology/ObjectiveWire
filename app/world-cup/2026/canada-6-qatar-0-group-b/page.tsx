import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 86400;

const SLUG = 'world-cup-2026-canada-6-qatar-0-group-b';
const URL_PATH = '/world-cup/2026/canada-6-qatar-0-group-b';
const CANONICAL = `https://www.objectivewire.com${URL_PATH}`;

const OG_IMAGE = '/thumbnails/world-cup-2026-canada-6-qatar-0-group-b.jpg';

export const metadata: Metadata = {
  title: 'Canada 6–0 Qatar | World Cup 2026 Group B Match Report',
  description:
    'Canada demolished Qatar 6–0 in Vancouver in a commanding co-host display fueled by set-piece dominance, rapid transitions, and Qatar discipline failures that left Group B\'s opening fixture one-sided from the 20th minute.',
  keywords: [
    'Canada Qatar World Cup 2026',
    'Canada 6-0 Qatar World Cup',
    'World Cup 2026 Group B',
    'Canada World Cup 2026',
    'Canada co-host World Cup',
    'Canada Qatar match report',
    'World Cup 2026 match report',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Canada 6–0 Qatar | World Cup 2026 Group B',
    description: 'Canada put six past Qatar in Vancouver. The co-hosts deliver a statement. Report by Jack Brennan.',
    type: 'article',
    url: CANONICAL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-16T04:00:00Z',
    modifiedTime: '2026-06-16T04:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Canada', 'Qatar', 'Group B', 'Match Report'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canada 6–0 Qatar | World Cup 2026',
    description: 'Canada 6, Qatar 0. The co-hosts announced themselves in Vancouver. Full report.',
  },
};

export default function CanadaQatarPage() {
  return (
    <NewsArticle
      title="Canada 6–0 Qatar: Co-Hosts Deliver a Statement Performance in Vancouver"
      subtitle="Canada exploited Qatar's disciplinary breakdown and set-piece vulnerability with clinical efficiency, scoring six without reply in a result that reshapes Group B entirely"
      category="World Cup 2026 · Group B"
      categoryColor="purple"
      topicTag="sports"
      publishDate="June 15, 2026"
      readTime="5 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Reporter, ObjectWire',
        avatar: '/influncer/author/jack_brennen.JPG',
        authorSlug: 'jack-brennan',
      }}
      slug={SLUG}
      url={URL_PATH}
      thumbnail={{ src: OG_IMAGE, alt: 'Canada 6–0 Qatar: Co-Hosts Deliver a Statement Performance in Vancouver' }}
      tags={['World Cup 2026', 'Canada', 'Qatar', 'Group B', 'Match Report']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'Match Reports', item: '/world-cup/2026' },
        { name: 'Canada vs Qatar', item: URL_PATH },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 Hub', url: '/world-cup', publishDate: 'June 2026', category: 'Sports' },
        { slug: 'canada-bosnia', title: 'Canada 1–1 Bosnia | Group B Report', url: '/world-cup/2026/canada-1-bosnia-1-group-b', publishDate: 'June 13, 2026', category: 'Sports' },
        { slug: 'switzerland-qatar', title: 'Switzerland 1–1 Qatar | Group B Report', url: '/world-cup/2026/switzerland-1-qatar-1-group-b', publishDate: 'June 13, 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
      keyTakeaways={[
        'Canada defeated Qatar 6–0 in Vancouver in their second Group B match, scoring six without reply for the largest win of the tournament so far.',
        'Qatar received multiple disciplinary sanctions that disrupted their defensive structure and allowed Canada\'s press to become overwhelming.',
        'Canada held 58% possession, registered 11 shots on target, and generated an xG of 4.2 against Qatar\'s 0.3.',
        'Multiple Canadian attackers contributed to the scoring, demonstrating squad depth and tactical flexibility across all positions.',
        'The result puts Canada in command of Group B with superior goal difference and positions them to qualify with a positive result in their final group fixture.',
      ]}
      faqItems={[
        {
          question: 'What was the score in Canada vs Qatar at World Cup 2026?',
          answer: 'Canada defeated Qatar 6–0 in Vancouver in their World Cup 2026 Group B match. It was the largest margin of victory in the tournament to that point.',
        },
        {
          question: 'Why did Canada score so many goals against Qatar?',
          answer: 'Canada combined intense high pressing, set-piece efficiency and rapid transitions with Qatar\'s disciplinary breakdown. Multiple red cards and yellow cards disrupted Qatar\'s structure from the 20th minute onward, allowing Canada to exploit numerical and positional advantages repeatedly.',
        },
        {
          question: 'How does Canada\'s 6–0 win affect Group B standings?',
          answer: 'Canada move to the top of Group B with strong goal difference. They need only a positive result in their final group fixture to secure qualification. Qatar are mathematically eliminated from contention for first place.',
        },
        {
          question: 'Who scored for Canada against Qatar?',
          answer: 'Multiple Canadian attackers contributed to the six goals, reflecting the squad depth and collective attacking approach that defined the performance. No single player dominated the scoresheet.',
        },
      ]}
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Canada needed a result against Qatar. They got something considerably larger than that.
          The 6–0 scoreline that flashed up at BC Place in Vancouver by the 80th minute was not
          simply a comfortable win for the co-hosts — it was a comprehensive display of everything
          a home nation wants to project at a World Cup: intensity, depth, clinical finishing, and
          the ability to crush an opponent once the first crack appears.
        </p>

        <p>
          Qatar provided the crack themselves. Their disciplinary record across the 90 minutes
          was a liability that compounded every other tactical problem they faced. Canada, to their
          significant credit, showed no mercy each time the numerical or positional advantage
          shifted further in their favor.
        </p>

        <h2 id="canada-press">Canada's Pressing System at Home</h2>

        <p>
          Playing in front of a Vancouver crowd that had waited years for this moment, Canada
          pressed from the first minute with an intensity that Qatar's ball-carriers could not
          consistently escape. The Canadian high press was not simply aggressive — it was
          organized. The triggers were clear, the cover shadows well-set, and the moments of
          press activation well-timed enough that Qatar regularly turned the ball over in their
          own half under direct pressure.
        </p>

        <p>
          When Qatar did manage to build through Canada's first line, they found a second line
          equally compact and engaged. Canada's midfield shape denied the central channels that
          Qatar needed to access in order to threaten. The result was a team forced increasingly
          into low-percentage options — long balls, wide passes under pressure — that Canada
          won at a high rate and immediately converted into forward momentum.
        </p>

        <p>
          Eleven shots on target from 58% possession is a ratio that reflects both volume and
          quality. Canada were not just shooting from distance and hoping. The majority of their
          attempts came from positions inside the penalty area created either by set pieces or
          by direct transition attacks that cut through Qatar's disorganized defensive structure.
        </p>

        <h2 id="qatar-discipline">Qatar's Disciplinary Collapse</h2>

        <p>
          The details of Qatar's disciplinary record across this match make for uncomfortable
          reading from the Qatari coaching perspective. Multiple cautions and at least one
          dismissal fundamentally altered the tactical balance of the fixture from the early
          stages of the second half onward.
        </p>

        <p>
          When you are already facing a 2–0 deficit against a pressing team that is organized
          and confident on their own ground, losing numerical strength is catastrophic. Each
          disciplinary incident shifted the balance further, opened spaces that Canada's forwards
          exploited, and made the defensive reorganization that Qatar needed to stem the tide
          practically impossible to implement.
        </p>

        <p>
          Qatar's coaching staff will review those sanctions carefully. Some were inevitable given
          the pressure Canada's press applied — players in difficult recovery positions make
          desperate challenges. Others reflected a lack of discipline under pressure that has
          to be corrected before any future tournament campaign can be taken seriously.
        </p>

        <h2 id="canada-squad-depth">The Depth That Makes Canada Dangerous</h2>

        <p>
          One of the most significant features of Canada's six goals was that they came from
          multiple sources. This was not a performance built around one player delivering a
          hat trick. This was a team effort where the goalscoring was distributed across the
          squad in a way that makes Canada significantly harder to defend against than a side
          built around a single focal point.
        </p>

        <p>
          Canada's expected-goals figure of 4.2 against Qatar's 0.3 reflects a match that was
          even more one-sided than the 6–0 scoreline suggests in purely chance-creation terms.
          Canada created more quality opportunities than they converted. Qatar created almost
          nothing from their 42% possession.
        </p>

        <h2 id="group-b-table">Group B | Canada in Command</h2>

        <p>
          Canada now sit atop Group B with substantial goal difference. Their path to the knockout
          stage requires only avoiding defeat in their remaining group fixture, and given the
          momentum this result generates — both physically and psychologically — that is a
          manageable requirement.
        </p>

        <p>
          For Qatar, the result ends whatever realistic hope they had of advancing. Recovering
          from a 6–0 defeat in a four-team group that includes other quality opposition requires
          a combination of results across multiple matches that is extraordinarily unlikely to
          materialise. The 2022 World Cup hosts in Qatar leave the 2026 edition they helped
          inspire with an unenviable record.
        </p>

        <p>
          Canada, meanwhile, gave their home crowd exactly what a co-host nation needs from
          its opening fixtures: evidence that they belong at this level and are capable of
          competing with the tournament's strongest sides. The real test will come in the
          knockout rounds, but the foundation has been laid with authority.
        </p>

      </div>
    </NewsArticle>
  );
}
