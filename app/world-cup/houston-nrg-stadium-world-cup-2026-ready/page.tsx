import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';

const OG_IMAGE = '/thumbnails/world-cup-houston-nrg-stadium-world-cup-2026-ready.jpg';

export const revalidate = 3600;

const SLUG = '/world-cup/houston-nrg-stadium-world-cup-2026-ready';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Houston World Cup 2026 | NRG Stadium Ready, Fan Festival Live',
  description:
    'Houston is live for the 2026 FIFA World Cup. The FIFA Fan Festival has opened at Discovery Green, NRG Stadium hosts six matches, and bars across the city are packed as the tournament kicks off in Mexico.',
  keywords: [
    'Houston World Cup 2026',
    'NRG Stadium World Cup 2026',
    'FIFA World Cup Houston',
    'Houston FIFA Fan Festival 2026',
    'World Cup 2026 Houston matches',
    'NRG Stadium FIFA 2026',
    'where to watch World Cup Houston',
    'Houston World Cup bars',
    'FIFA 2026 Houston ready',
    'World Cup Houston schedule',
    'Discovery Green FIFA Fan Festival',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Houston Is Ready for World Cup 2026 | NRG Stadium, Fan Festival, and Where to Watch',
    description:
      'The FIFA Fan Festival is open at Discovery Green, NRG Stadium hosts six World Cup matches, and Houston is fully in tournament mode as the 2026 opening phase gets underway.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-06-12T14:00:00Z',
    modifiedTime: '2026-06-12T14:00:00Z',
    section: 'Sports',
    tags: ['World Cup 2026', 'Houston', 'NRG Stadium', 'FIFA', 'Soccer'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston World Cup 2026 | NRG Stadium, Fan Festival Open, Bars Packed',
    description:
      'FIFA Fan Festival is live at Discovery Green. NRG Stadium hosts 6 matches. Full guide to Houston World Cup 2026.',
    images: ['https://www.objectivewire.com/api/og?slug=%2Fworld-cup%2Fhouston-nrg-stadium-world-cup-2026-ready&v=1'],
  },
};

export default function HoustonNRGWorldCup2026Page() {
  return (
    <NewsArticle
      title="Houston Is Ready for the World Cup | NRG Stadium, FIFA Fan Festival, and Where to Watch"
      subtitle="FIFA fever has taken hold of Houston as the 2026 World Cup opens in Mexico. The FIFA Fan Festival is live at Discovery Green, NRG Stadium is match-ready for its six fixtures, and bars across the city are reporting sellout crowds for every opening group stage match."
      category="Sports"
      categoryColor="red"
      topicTag="sports"
      publishDate="2026-06-12T14:00:00Z"
      readTime="4 min read"
      author={{ name: 'Jack Brennan', role: 'Sports Reporter', authorSlug: 'jack-brennan' }}
      thumbnail={{
        src: 'https://www.objectivewire.com/api/og?slug=%2Fworld-cup%2Fhouston-nrg-stadium-world-cup-2026-ready&v=1',
        alt: 'Houston NRG Stadium World Cup 2026',
      }}
      slug="houston-nrg-stadium-world-cup-2026-ready"
      url={SLUG}
      tags={['World Cup 2026', 'Houston', 'NRG Stadium', 'FIFA', 'Fan Festival']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: 'Houston | NRG Stadium', item: SLUG },
      ]}
      keyTakeaways={[
        'NRG Stadium in Houston is an official 2026 FIFA World Cup venue hosting six matches across the group stage and knockout rounds, with a tournament configuration capacity of approximately 72,220.',
        'The FIFA Fan Festival opened at Discovery Green in downtown Houston on June 12, offering free entry, live match screenings on a giant outdoor screen, food vendors, and interactive soccer activations.',
        'Houston is one of 11 US cities hosting World Cup 2026 matches, with the city\'s first fixture scheduled for mid-June and the final group stage match at NRG in late June.',
        'Bars and sports venues across Houston — including Market Square Bar, Johnny\'s Gold Brick, and Flying Saucer Draught Emporium — reported standing-room crowds for the tournament opener in Mexico City on June 11.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'What World Cup 2026 matches are in Houston?',
          answer: 'NRG Stadium in Houston hosts six 2026 FIFA World Cup matches: multiple group stage fixtures and at least one knockout round game. The full fixture list for NRG Stadium is confirmed by FIFA at fifa.com.',
        },
        {
          question: 'Where is the FIFA Fan Festival in Houston?',
          answer: 'The 2026 FIFA Fan Festival in Houston is located at Discovery Green, the 12-acre public park in downtown Houston adjacent to the George R. Brown Convention Center. It is free to enter and runs through the end of the group stage.',
        },
        {
          question: 'What is the capacity of NRG Stadium for the World Cup?',
          answer: 'NRG Stadium has a World Cup configuration capacity of approximately 72,220. It is home to the Houston Texans (NFL) and was previously the site of Super Bowl LI in 2017.',
        },
        {
          question: 'Where can I watch the World Cup in Houston?',
          answer: 'The FIFA Fan Festival at Discovery Green offers free outdoor screenings of every match. Bars showing World Cup games across Houston include Market Square Bar, Flying Saucer Draught Emporium, Johnny\'s Gold Brick, and dozens of venues across Midtown, Montrose, and the Heights.',
        },
      ]}
      moreFromHub={[
        { slug: 'world-cup-2026-group-stage-draw-all-48-groups', title: 'World Cup 2026 Group Stage Draw | All 48 Teams', url: '/world-cup/world-cup-2026-group-stage-draw-all-48-groups', category: 'Sports' },
        { slug: 'world-cup-2026-metlife-stadium-new-york-final', title: 'MetLife Stadium | World Cup Final July 19', url: '/world-cup/world-cup-2026-metlife-stadium-new-york-final', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026"
      moreFromHubHref="/world-cup"
    >
      <p>
        <strong>Houston is officially in World Cup mode.</strong> As the 2026 FIFA World Cup opened with its first matches in Mexico City on June 11, H-Town was already packed — bars overflowing, streets buzzing, and the FIFA Fan Festival drawing thousands to Discovery Green for the tournament's first full day. For a city that has waited years for this moment, the wait is over.
      </p>

      <h2>NRG Stadium | Houston&apos;s World Cup Venue</h2>

      <p>
        <strong>NRG Stadium</strong> is Houston's anchor for the 2026 tournament. The 72,220-capacity domed stadium on Kirby Drive has been configured for FIFA specifications — the natural grass playing surface was installed to meet international standards, the lower bowl expanded with temporary seating additions, and the stadium's famously loud indoor atmosphere positions it as one of the most distinctive venues in the entire 16-city host portfolio.
      </p>

      <p>
        NRG hosts <strong>six matches</strong> across the group stage and knockout rounds. Houston's first World Cup fixture is scheduled for mid-June, with the stadium's final match expected in the Round of 32 or Round of 16 depending on bracket alignment. For a city that hosted Super Bowl LI in 2017 and has twice held the Houston Livestock Show and Rodeo — one of the largest events in the United States — the logistical footprint of World Cup is familiar. City officials say more than 500,000 out-of-town visitors are expected to pass through Houston over the course of the tournament.
      </p>

      <h2>FIFA Fan Festival | Discovery Green Is Open Now</h2>

      <p>
        The <strong>FIFA Fan Festival at Discovery Green</strong> opened on June 12 and runs through the end of the group stage on June 27. Entry is free. The 12-acre park in the heart of downtown Houston has been transformed into a full-scale FIFA activation: a giant outdoor screen broadcasting every match live, interactive skill zones, merchandise vendors, food trucks from Houston's famously diverse culinary scene, and live entertainment between fixtures.
      </p>

      <p>
        The festival is modeled on FIFA's Fan Festival format first deployed at the 2006 World Cup in Germany, which drew over 18 million visitors across host cities during the tournament. Houston's version is one of the largest in the US portfolio, benefiting from Discovery Green's central location steps from the convention center, light rail access, and the density of hotels in the downtown core.
      </p>

      <h2>Where to Watch in Houston | Bars and Venues</h2>

      <p>
        For fans without match tickets, Houston's bar scene has risen to the occasion. Venues across Midtown, Montrose, Downtown, and the Heights are opening early for morning kickoffs and running extended hours for evening fixtures. According to local reports from FOX 26 and ABC13, standing-room conditions were already the norm at several venues for the June 11 opener, hours before local matches were even on the schedule.
      </p>

      <p>
        Bars flagged by Houston outlets as top spots for World Cup viewing include <strong>Market Square Bar</strong> in downtown, <strong>Flying Saucer Draught Emporium</strong> in Midtown, <strong>Johnny's Gold Brick</strong> near Midtown, and <strong>Pitch 25</strong> — an indoor soccer bar near EaDo that was built with exactly this tournament in mind. Many venues have set up outdoor screens and patio extensions to handle overflow crowds.
      </p>

      <p>
        For fans planning to attend matches at NRG, parking on-site is available but FIFA strongly recommends using METRORail — the Red Line runs directly to the NRG Park complex from downtown Houston in approximately 20 minutes and will run extended match-day service throughout the tournament.
      </p>

      <p>
        For the full group stage draw — including which nations play in Houston — see the{' '}
        <Link href="/world-cup/world-cup-2026-group-stage-draw-all-48-groups" className="text-blue-600 hover:text-blue-800 underline">
          World Cup 2026 complete group draw
        </Link>. For New York&apos;s MetLife Stadium and the July 19 Final, see the{' '}
        <Link href="/world-cup/world-cup-2026-metlife-stadium-new-york-final" className="text-blue-600 hover:text-blue-800 underline">
          MetLife Stadium host city guide
        </Link>.
      </p>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.fox26houston.com/sports/live-updates-fan-festival-begins-in-houston-for-fifa-world-cup',
            title: 'Live Updates: Fan Festival Begins in Houston | FOX 26',
            description: 'FOX 26 Houston live coverage of the FIFA Fan Festival opening at Discovery Green.',
          },
          {
            number: 2,
            url: 'https://www.click2houston.com/sports/2026/06/12/list-bars-where-you-can-watch-the-fifa-world-cup-around-houston/',
            title: 'Bars Where You Can Watch the FIFA World Cup in Houston | Click2Houston',
            description: 'KPRC Click2Houston list of Houston venues showing every World Cup match.',
          },
          {
            number: 3,
            url: 'https://abc13.com/post/fifa-fever-takes-over-houston-first-matches-take-place-mexico/live-updates',
            title: 'FIFA Fever Takes Over Houston | ABC13 Live Updates',
            description: 'ABC13 Houston live updates as FIFA fever hits the city during the Mexico opening matches.',
          },
        ]}
        internalLinks={[
          { href: '/world-cup/world-cup-2026-group-stage-draw-all-48-groups', label: 'World Cup 2026 Group Stage Draw' },
          { href: '/world-cup/world-cup-2026-metlife-stadium-new-york-final', label: 'MetLife Stadium | World Cup Final' },
          { href: '/world-cup/world-cup-2026-schedule-dates', label: 'World Cup 2026 Full Schedule' },
          { href: '/world-cup', label: 'World Cup 2026 Hub' },
          { href: '/authors/jack-brennan', label: 'Jack Brennan, Sports Reporter' },
        ]}
      />
    </NewsArticle>
  );
}
