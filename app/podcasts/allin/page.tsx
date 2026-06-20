import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/podcasts/allin';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;
const VIDEO_ID = '10MdOvK-aG4';

export const metadata: Metadata = {
  title: 'All-In Podcast | SpaceX-Anthropic Deal, AI Monopoly, FDA for AI',
  description:
    'All-In Podcast recap: Chamath, Sacks, Jason, and Friedberg break down the SpaceX-Anthropic compute deal, whether Anthropic is the next AI monopoly, the White House FDA-for-AI proposal, and how to trade the AI boom.',
  keywords: [
    'All-In Podcast recap',
    'All-In Podcast May 2026',
    'SpaceX Anthropic deal',
    'Elon Web Services',
    'Anthropic AI monopoly',
    'FDA for AI',
    'AI regulation 2026',
    'Chamath Palihapitiya',
    'David Sacks AI',
    'Jason Calacanis',
    'David Friedberg',
    'trading AI stocks 2026',
    'All-In Podcast bestie recap',
    'Anthropic growth 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'All-In Podcast | SpaceX-Anthropic Deal, AI Monopoly, FDA for AI Recap',
    description:
      'Chamath, Sacks, Jason, and Friedberg on the SpaceX-Anthropic compute deal, Anthropic monopoly fears, the White House AI safety panic, and trading the AI boom.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-13T19:00:00Z',
    modifiedTime: '2026-05-13T19:00:00Z',
    section: 'Culture',
    tags: ['All-In Podcast', 'Anthropic', 'Elon Musk', 'Chamath Palihapitiya'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All-In Podcast: SpaceX-Anthropic Deal, AI Monopoly, FDA for AI',
    description: 'Full recap of the latest All-In episode with Chamath, Sacks, Jason, and Friedberg.',
  },
};

export default function AllInPodcastRecap() {
  return (
    <>
      <NewsArticleSchema
        title="All-In Podcast | SpaceX-Anthropic Deal, AI Monopoly, FDA for AI"
        description="All-In Podcast recap: Chamath, Sacks, Jason, and Friedberg break down the SpaceX-Anthropic compute deal, whether Anthropic is the next AI monopoly, the White House FDA-for-AI proposal, and how to trade the AI boom."
        author="Jack Sterling"
        authorUrl="https://www.objectivewire.com/authors/jack-sterling"
        publishedTime="2026-05-13T19:00:00Z"
        modifiedTime="2026-05-13T19:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Culture"
        keywords={[
          'All-In Podcast recap',
          'SpaceX Anthropic deal',
          'FDA for AI',
          'Anthropic AI monopoly',
        ]}
      />

      <NewsArticle
        title="All-In Podcast Recap | SpaceX-Anthropic Deal, The Next AI Monopoly, FDA for AI"
        subtitle="Chamath, Sacks, Jason, and Friedberg cover Elon Web Services, Anthropic's growth trajectory, White House AI safety proposals, and how to position in the AI trade."
        category="Culture"
        categoryColor="blue"
        topicTag="entertainment"
        publishDate="2026-05-13T19:00:00Z"
        readTime="4 min read"
        author={{
          name: 'Jack Sterling',
          role: 'Creators',
          authorSlug: 'jack-sterling',
        }}
        tags={['All-In Podcast', 'Anthropic', 'Elon Musk', 'Chamath Palihapitiya']}
        slug="podcasts-allin"
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Podcasts', item: '/podcasts' },
          { name: 'All-In Podcast', item: SLUG },
        ]}
        keyTakeaways={[
          'SpaceX signed a compute deal with Anthropic to supply GPU infrastructure, framing Elon Musk\'s cloud ambitions as "Elon Web Services" and raising questions about the SpaceX IPO valuation.',
          'The besties debated whether Anthropic is forming an AI monopoly, with Anthropic\'s revenue growth described as one of the fastest ramps in enterprise software history.',
          'A proposal circulating in Washington to create an "FDA for AI" that would require pre-approval of new AI models before public release triggered strong pushback from the All-In panel.',
          'David Sacks outlined how the White House is thinking about AI safety: supporting voluntary commitments and American competitiveness rather than a new regulatory agency.',
          'The final segment covered how to position in AI stocks, with the besties split on whether the current valuations are pricing in a winner-take-all outcome or leaving room for multiple winners.',
        ]}
        keyTakeawaysColor="blue"
        faqItems={[
          {
            question: 'What is the SpaceX-Anthropic deal?',
            answer:
              'SpaceX signed an agreement to provide compute infrastructure to Anthropic, positioning SpaceX as a cloud and GPU supplier to one of the leading AI frontier labs. The besties framed this as the foundation of "Elon Web Services," a direct competitor to AWS and Azure in the AI infrastructure market.',
          },
          {
            question: 'Is Anthropic a monopoly?',
            answer:
              'The All-In panel debated whether Anthropic\'s revenue growth rate is an early signal of monopoly formation or an overreaction. Anthropic has achieved one of the fastest enterprise software revenue ramps on record, but the panel was split on whether that translates to durable market dominance given OpenAI and Google\'s competing positions.',
          },
          {
            question: 'What is the FDA for AI proposal?',
            answer:
              'A proposal circulating in Washington would require AI model developers to submit new frontier models for pre-release approval by a federal body, similar to how the FDA approves drugs before sale. The All-In panel broadly opposed this approach, with David Sacks saying the White House favors voluntary safety commitments over a new regulatory agency.',
          },
          {
            question: 'Who are the All-In Podcast hosts?',
            answer:
              'The All-In Podcast is hosted by Chamath Palihapitiya (Social Capital), Jason Calacanis (LAUNCH), David Sacks (formerly Trump White House AI and crypto czar), and David Friedberg (The Production Board). They publish weekly episodes on YouTube and all major podcast platforms.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Creator Coverage"
        moreFromHubHref="/creator"
      >
        <p>
          The All-In Podcast's latest episode, published May 11, 2026, runs 1 hour 11 minutes and
          covers four major topics: the SpaceX-Anthropic compute deal and Elon Musk's cloud ambitions,
          the question of whether Anthropic is forming a structural AI monopoly, the Washington panic
          over an FDA-style AI regulatory body, and how the besties are thinking about trading the
          AI market cycle. Hosts are Chamath Palihapitiya, Jason Calacanis, David Sacks, and
          David Friedberg.
        </p>

        {/* ── Episode Video ── */}
        <div className="my-8 not-prose">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="All-In Podcast: Elon's Anthropic Deal, The Next AI Monopoly?, FDA for AI Panic, Trading the AI Boom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Full episode via{' '}
            <a
              href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              All-In Podcast on YouTube
            </a>
          </p>
        </div>

        <h2>All-In Podcast Recap | SpaceX-Anthropic Deal and Elon Web Services (4:38)</h2>
        <p>
          The main segment opens with the SpaceX-Anthropic compute agreement, in which SpaceX will
          supply GPU infrastructure to Anthropic for model training and inference. The panel frames
          this as the first concrete step toward what Jason Calacanis calls "Elon Web Services,"
          positioning Musk's infrastructure assets, including SpaceX's compute build-out, Starlink
          connectivity, and xAI's own model stack, as a vertically integrated cloud platform that
          could challenge Amazon Web Services and Microsoft Azure for AI workloads.
        </p>
        <p>
          The discussion also covers Anthropic's growth trajectory, which the panel describes as
          unprecedented in enterprise software: faster revenue ramp than Salesforce, faster than
          Workday, and accelerating rather than slowing. Chamath argues this is the most important
          data point in tech right now. The SpaceX IPO valuation question runs through the segment,
          with the besties debating how a cloud infrastructure business changes the multiple.
        </p>

        <h2>Is Anthropic the Next AI Monopoly? (26:48)</h2>
        <p>
          The second segment picks up the Anthropic thread and asks a harder question: is the
          revenue growth a sign of permanent structural dominance, or is it a moment in time that
          OpenAI and Google can disrupt? David Friedberg takes the skeptical view, pointing to the
          history of technology markets where first-mover advantages in infrastructure eroded quickly
          once hyperscalers commoditized the underlying capability. Sacks and Chamath are more
          bullish on Anthropic's moat, citing Claude's enterprise adoption in legal, finance, and
          software development, sectors where switching costs are high once workflows are built.
        </p>

        <h2>FDA for AI Panic and White House AI Safety Thinking (35:21)</h2>
        <p>
          The panel addresses a proposal circulating in Washington to require pre-release federal
          approval for frontier AI models, modeled on the FDA's drug approval process. All four
          besties oppose the approach, with David Sacks providing the most detailed window into
          administration thinking: the White House favors voluntary safety commitments from labs and
          an America-first competitiveness frame over creating a new federal agency that could slow
          US development while China accelerates. The segment references a New York Times report
          from May 4, 2026, on the Trump administration's AI safety policy direction, and the
          White House national policy framework document published in March 2026. The panel also
          spends time on the positive flip side: specific cases where AI is already delivering
          measurable outcomes in charitable giving platforms, early cancer detection, and
          personalized education tools.
        </p>

        <h2>Trading the AI Boom | State of the Economy (1:00:04)</h2>
        <p>
          The closing segment covers market positioning. Chamath lays out his current thesis:
          the market is not yet pricing in a winner-take-all outcome in AI infrastructure, and the
          most asymmetric trade is in companies supplying the physical layer, power, cooling,
          and networking, rather than the model layer itself. Friedberg is more cautious on
          valuations across the board, noting that the AI trade has already re-rated significantly
          from 2024 lows and that incremental buyers are taking on more duration risk. The full
          episode is available on{' '}
          <a
            href="https://open.spotify.com/episode/1ACF9FTTexWc9S5X4mpzUF"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Spotify
          </a>{' '}
          and{' '}
          <a
            href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            YouTube
          </a>
          . For more creator and podcast coverage, see the{' '}
          <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">
            oWire Creator hub
          </Link>
          .
        </p>
      </NewsArticle>
    </>
  );
}