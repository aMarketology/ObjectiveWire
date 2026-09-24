import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { PrismTable } from '@/components/articles/PrismTable';

const OG_IMAGE = '/thumbnails/reality-tv-amazing-race-season39-cast-teams.jpg';

export const revalidate = 86400;

const SLUG = '/reality-tv/amazing-race/season-39';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Amazing Race 39 Cast | Full 13-Team Roster and Bios',
  description:
    'Meet the 13 teams competing on The Amazing Race Season 39, featuring USWNT World Cup champions Ali Krieger and Joanna Lohman, a record-breaking grandfather-grandson duo, and the all-Express Pass twist.',
  keywords: [
    'The Amazing Race 39 cast list teams',
    'The Amazing Race season 39 contestants',
    'Ali Krieger Joanna Lohman Amazing Race',
    'Doug and Dylan Matter',
    'All Express Pass twist TAR39',
    'CBS Amazing Race 2026 premiere',
    'Amazing Race 39 teams',
    'TAR39 cast',
    'Amazing Race season 39 premiere date',
    'Phil Keoghan Amazing Race 39',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Meet the Cast of The Amazing Race Season 39 | Full Roster and Bios',
    description:
      'Get the complete profile on all 13 teams competing on The Amazing Race Season 39, featuring pro soccer stars, a record-breaking grandfather-grandson duo, and more.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-09-24T16:00:00Z',
    modifiedTime: '2026-09-24T16:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'The Amazing Race Season 39 cast teams roster' }],
    tags: ['Amazing Race 39', 'Reality TV', 'CBS', 'Ali Krieger', 'Express Pass'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazing Race 39 Teams | World Cup Champions, Record-Breakers and Family Duos',
    description: 'Full 13-team roster for TAR39: USWNT stars, a 73-year-old grandfather, and an all-Express Pass twist.',
    images: [OG_IMAGE],
  },
};

export default function AmazingRace39CastPage() {
  return (
    <>
      <NewsArticleSchema
        title="Amazing Race 39 Cast | Full 13-Team Roster and Bios"
        description="Meet the 13 teams competing on The Amazing Race Season 39, featuring USWNT World Cup champions Ali Krieger and Joanna Lohman, a record-breaking grandfather-grandson duo, and the all-Express Pass twist."
        author="Jack Sterling"
        authorUrl="https://www.objectivewire.com/authors/jack-sterling"
        publishedTime="2026-09-24T16:00:00Z"
        modifiedTime="2026-09-24T16:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="Entertainment"
        keywords={[
          'The Amazing Race 39 cast list teams',
          'The Amazing Race season 39 contestants',
          'Ali Krieger Joanna Lohman Amazing Race',
        ]}
      />

      <NewsArticle
        title="Global Gauntlet | Meet the 13 Teams Competing on The Amazing Race Season 39"
        subtitle="Shifting away from last season reality-crossover lineup, The Amazing Race Season 39 returns with 13 dynamic duos, including USWNT World Cup champions, a record-breaking grandfather-grandson pair, and an all-Express Pass twist at the starting line."
        category="Entertainment"
        categoryColor="blue"
        topicTag="entertainment"
        publishDate="September 24, 2026"
        readTime="6 min read"
        author={{
          name: 'Jack Sterling',
          role: 'Reality TV Correspondent, Objective Wire',
          avatar: '/influncer/author/jack_sterling.jpg',
          authorSlug: 'jack-sterling',
        }}
        slug={SLUG}
        url={SLUG}
        thumbnail={{ src: OG_IMAGE, alt: 'The Amazing Race Season 39 cast teams roster' }}
        tags={['Amazing Race 39', 'Reality TV', 'CBS', 'Ali Krieger', 'Express Pass']}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Reality TV', item: '/reality-tv' },
          { name: 'Amazing Race', item: '/reality-tv/amazing-race' },
          { name: 'Season 39 Cast', item: SLUG },
        ]}
        keyTakeaways={[
          'The Amazing Race Season 39 features 13 teams competing for the $1 million grand prize, kicking off with a two-night premiere on September 30 and October 1, 2026 on CBS.',
          'The cast includes USWNT World Cup champions Ali Krieger and Joanna Lohman, the widest age gap in TAR history with 73-year-old Doug Matter and his 19-year-old grandson Dylan, and a U.S. Marine Officer.',
          'Every team receives an Express Pass at the Vancouver starting line, but only one team can use a pass per challenge, creating a strategic bottleneck through the first six legs.',
          'The race spans 25,000 miles and nine countries, with host Phil Keoghan overseeing the competition.',
          'Team backgrounds range from pro athletes and a forensic scientist to a retired fire chief, a commercial pilot, and lifelong super-fans of the show.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'When does The Amazing Race 39 premiere?',
            answer:
              'The Amazing Race Season 39 premieres with a two-night event on Wednesday, September 30, and Thursday, October 1, 2026, at 9:30 p.m. ET/PT on CBS and streaming on Paramount+.',
          },
          {
            question: 'How many teams are on The Amazing Race 39?',
            answer:
              'There are 13 teams competing on The Amazing Race Season 39, each consisting of two people with pre-existing relationships.',
          },
          {
            question: 'Who are the most notable contestants on Amazing Race 39?',
            answer:
              'Ali Krieger and Joanna Lohman, both former USWNT players with World Cup championships, are the most recognizable contestants. Doug Matter, a 73-year-old retired fire chief racing with his 19-year-old grandson Dylan, represents the widest age gap in TAR history.',
          },
          {
            question: 'What is the Express Pass twist in Amazing Race 39?',
            answer:
              'Every team receives an Express Pass at the starting line in Vancouver. However, only one team can use an Express Pass per individual challenge, creating a first-come, first-served tactical dynamic through the first six legs.',
          },
          {
            question: 'What is the prize for winning The Amazing Race 39?',
            answer:
              'The winning team receives the $1 million grand prize.',
          },
        ]}
        moreFromHub={[
          { slug: 'reality-tv/survivor/season-51', title: 'Survivor 51 Premiere | Aaliyah Puglia First Voted Out', url: '/reality-tv/survivor/season-51', publishDate: '2026', category: 'Entertainment' },
          { slug: 'reality-tv/big-brother/season-28', title: 'Big Brother 28 Final Four | Scenarios, Odds, Winner Analysis', url: '/reality-tv/big-brother/season-28', publishDate: '2026', category: 'Entertainment' },
        ]}
        moreFromHubLabel="Reality TV"
        moreFromHubHref="/reality-tv"
      >
        <p>
          Shifting away from last season's reality-crossover lineup, <strong>The Amazing Race Season 39</strong> returns
          to a fresh, everyday roster of 13 dynamic duos competing for the <strong>$1 million grand prize</strong>.
          Kicking off with a special two-night premiere on <strong>Wednesday, September 30, and Thursday, October 1,
          2026</strong> at 9:30 p.m. ET/PT on CBS, host Phil Keoghan drops a bombshell right at the Vancouver starting
          line: every single team is awarded an <strong>Express Pass</strong>, triggering a high-stakes strategic showdown
          across 25,000 miles and nine countries.
        </p>

        <h2>The Complete Roster of Teams</h2>

        <p>
          The Season 39 lineup features an eclectic mix of elite athletes, record-breaking family pairs, and lifelong
          friends spanning diverse occupations and age groups across the United States.
        </p>

        <PrismTable
          accent="blue"
          headers={['Team', 'Notable Highlights']}
          rows={[
            [<><span className="block font-black">Ali Krieger and Joanna Lohman</span><span className="block text-xs">Pro Athletes and Moms | Montclair, NJ and Silver Spring, MD</span></>, 'Ali is a 2x USWNT World Cup champion; Joanna is a former USWNT star.'],
            [<><span className="block font-black">Ann-Marie and Riley Tejcek</span><span className="block text-xs">Mother and Daughter | Carmel, IN and San Diego, CA</span></>, 'Riley serves as a U.S. Marine Officer and competitive bobsledder.'],
            [<><span className="block font-black">Anuar Tager and Andrea Tager Ballesca</span><span className="block text-xs">Father and Daughter | Houston, TX</span></>, 'Analytical father-daughter duo with medical and tech backgrounds.'],
            [<><span className="block font-black">Cody Langlois and Jaime Tribo</span><span className="block text-xs">Siblings | Los Angeles, CA and Tinley Park, IL</span></>, 'Coast-to-coast siblings leveraging engineering problem-solving.'],
            [<><span className="block font-black">Conner Wilson and Garrett McGuire</span><span className="block text-xs">Childhood Friends | Loomis, CA and Rocklin, CA</span></>, 'Lifelong West Coast friends with technical and physical backgrounds.'],
            [<><span className="block font-black">Dafina and Saran Dunmore</span><span className="block text-xs">Sisters and Best Friends | Chicago, IL</span></>, 'Bond analyst/DJ and personal trainer combining endurance with strategy.'],
            [<><span className="block font-black">Daisha Wilks and Dalton Hamby</span><span className="block text-xs">Dating | Flat Rock, AL and Jacksonville, AL</span></>, 'Creative Southern partners used to working under tight filming deadlines.'],
            [<><span className="block font-black">Doug and Dylan Matter</span><span className="block text-xs">Grandfather and Grandson | San Diego, CA</span></>, 'At 73 and 19, the widest age gap in TAR history.'],
            [<><span className="block font-black">Erin Taylor and Javi Vintimilla</span><span className="block text-xs">Married | Fort Lauderdale, FL</span></>, 'Javi aviation background gives an edge in airport navigation.'],
            [<><span className="block font-black">Jody Rebhun and Jenn Naso</span><span className="block text-xs">Best Friends and Moms | Branford, CT and Larchmont, NY</span></>, 'History teacher and forensic scientist bringing analytical precision.'],
            [<><span className="block font-black">Katie and Charlotte Schultz</span><span className="block text-xs">Sisters | Murray, KY</span></>, 'Kentucky sisters relying on close communication and agility.'],
            [<><span className="block font-black">Michelle and Matthew Patterson</span><span className="block text-xs">Married Parents | Rutherford, NJ</span></>, 'Real estate agent and business director with negotiation skills.'],
            [<><span className="block font-black">Zach and Nate Johnson</span><span className="block text-xs">Brothers | Dallas, TX</span></>, 'High-energy Texas siblings and lifelong super-fans of the show.'],
          ]}
          caption="The 13 teams competing on The Amazing Race Season 39."
        />

        <h2>Strategic Shift | The All-Express Pass Twist</h2>

        <p>
          While the team backgrounds range from professional sports to higher education, all 13 duos face an identical
          starting-line challenge: managing their Express Pass. Because only one team can play an Express Pass per
          individual task, teams cannot simply hoard their passes. If two trailing teams arrive at a brutal Detour
          simultaneously, the duo that burns their pass first forces the second team to complete the challenge manually,
          creating an intense tactical bottleneck during the opening six legs.
        </p>

        <p>
          For more reality TV coverage, see the{' '}
          <Link href="/reality-tv" className="text-blue-600 hover:text-blue-800 underline">
            Reality TV hub
          </Link>
          , or read our{' '}
          <Link href="/reality-tv/survivor/season-51" className="text-blue-600 hover:text-blue-800 underline">
            Survivor 51 premiere recap
          </Link>
          .
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.paramountpressexpress.com/cbs-entertainment/shows/the-amazing-race/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Paramount Press Express | Season 39 Press Release</a></li>
          <li><a href="https://www.cbs.com/shows/amazing_race/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">CBS | Official Amazing Race Portal</a></li>
        </ul>
      </NewsArticle>
    </>
  );
}