import type { Metadata } from 'next';
import Link from 'next/link';
import NewsArticle, { EmbedBox } from '@/components/articles/NewsArticle';
import { KeyTakeaways } from '@/components/articles/KeyTakeaways';

export const revalidate = 86400;

const SLUG = '/youtube/markiplier';
const PAGE_URL = `https://www.objectivewire.org${SLUG}`;

export const metadata: Metadata = {
  title: "Markiplier Iron Lung Film | YouTube Debut May 31, 2026",
  description:
    "Markiplier's self-financed horror film Iron Lung will debut exclusively on YouTube on May 31, 2026. Mark Fischbach announced the date at Cannes in a panel moderated by Deadline.",
  keywords: [
    'Markiplier Iron Lung',
    'Iron Lung film YouTube',
    'Markiplier movie 2026',
    'Iron Lung release date',
    'Mark Fischbach film',
    'Markiplier Cannes 2026',
    'Iron Lung YouTube premiere',
    'Markiplier horror film',
    'Iron Lung debut May 31',
    'Markiplier YouTube movie',
    'Iron Lung film release',
    'Markiplier filmmaker',
    'YouTube Movies Iron Lung',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Markiplier Iron Lung | YouTube Exclusive Debut May 31, 2026",
    description:
      "Mark Fischbach announced at Cannes that his self-financed horror film Iron Lung will debut exclusively on YouTube on May 31, 2026.",
    type: 'article',
    url: PAGE_URL,
    siteName: 'oWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-17T12:00:00Z',
    modifiedTime: '2026-05-21T12:00:00Z',
    section: 'YouTube',
    tags: ['Markiplier', 'Iron Lung', 'YouTube', 'Horror Film'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Markiplier Iron Lung | YouTube Debut May 31",
    description:
      "Markiplier's self-financed horror film Iron Lung hits YouTube exclusively on May 31. He announced the date at Cannes.",
  },
};

export default function MarkiplierIronLungPage() {
  return (
    <NewsArticle
      title="Markiplier's Iron Lung Film to Debut on YouTube May 31, 2026"
      subtitle="Mark Fischbach announced the exclusive YouTube release at Cannes, capping what he called an arduous legal process to bring his self-financed horror film to the platform's Movies storefront."
      category="YouTube"
      categoryColor="red"
      topicTag="entertainment"
      publishDate="May 17, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Sterling',
        role: 'Creator Economy Reporter',
        authorSlug: 'jack-sterling',
      }}
      slug="youtube-markiplier-iron-lung"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'YouTube', item: '/youtube' },
        { name: 'Markiplier | Iron Lung', item: SLUG },
      ]}
      tags={['Markiplier', 'Iron Lung', 'YouTube', 'Horror Film', 'YouTube Movies', 'Cannes 2026']}
      faqItems={[
        {
          question: 'When does Markiplier\'s Iron Lung film release on YouTube?',
          answer:
            'Iron Lung debuts on YouTube on May 31, 2026. Markiplier announced the release date during a panel at the Cannes Film Festival moderated by Deadline.',
        },
        {
          question: 'What is Iron Lung?',
          answer:
            'Iron Lung is a self-financed horror film written and directed by Mark Fischbach, known online as Markiplier. The film is based on the 2022 indie horror game of the same name by developer David Szymanski.',
        },
        {
          question: 'Where can you watch Iron Lung?',
          answer:
            'Iron Lung will be available exclusively on YouTube through the platform\'s Movies and TV storefront beginning May 31, 2026.',
        },
        {
          question: 'Who is Markiplier?',
          answer:
            'Markiplier is the online name of Mark Fischbach, a YouTube creator with over 35 million subscribers. He is known for gaming commentary, comedy, and philanthropy, and Iron Lung is his feature film directorial debut.',
        },
      ]}
      moreFromHub={[
        { slug: 'youtube-history', title: 'YouTube History | Founded 2005 to 2B Users', url: '/youtube/history', category: 'YouTube' },
        { slug: 'youtube-logan-paul', title: 'Logan Paul | Career, Boxing, WWE', url: '/youtube/logan-paul', category: 'YouTube' },
        { slug: 'youtube-nelk-boys', title: 'NELK Boys | Full History', url: '/youtube/nelk-boys', category: 'YouTube' },
      ]}
      moreFromHubLabel="YouTube"
      moreFromHubHref="/youtube"
    >
      <KeyTakeaways
        color="red"
        items={[
          "Markiplier's self-financed horror film Iron Lung will debut exclusively on YouTube on May 31, 2026.",
          'Mark Fischbach announced the release date at a Cannes Film Festival panel moderated by Deadline in May 2026.',
          'Fischbach described the process of bringing Iron Lung to YouTube Movies as an arduous legal undertaking that went well beyond a standard video upload.',
          'Iron Lung is based on the 2022 indie horror game of the same name by developer David Szymanski.',
        ]}
      />

      <div>
        <p>
          Markiplier's self-financed horror film <em>Iron Lung</em> will debut exclusively on YouTube on May 31, 2026. Mark Fischbach, the filmmaker and creator known as Markiplier, announced the date during a panel at the Cannes Film Festival moderated by Deadline, confirming that the YouTube platform's Movies and TV storefront will be the film's exclusive digital home.
        </p>

        <p>
          The announcement caps a months-long effort by Fischbach to navigate what he publicly called an "arduous legal" process to bring the film to YouTube's commercial movie infrastructure, a path he described as far more complicated than a standard video upload.
        </p>

        {/* Official Iron Lung trailer */}
        <div className="my-8 rounded-xl overflow-hidden shadow-lg aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/U5Xpd8ja9bk"
            title="Markiplier Iron Lung - Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <h2>What Is Iron Lung | The Film and Its Source Material</h2>

        <p>
          <em>Iron Lung</em> is a horror film written and directed by Fischbach, based on the 2022 indie game of the same name by developer David Szymanski. The original game, released for under $6, became a cult hit in the horror gaming community and gained mainstream attention in large part through Fischbach's own playthrough on YouTube, which drew millions of views and introduced the title to an audience far beyond its initial player base.
        </p>

        <p>
          The game is set in a submarine called the Iron Lung, adrift in a sea of blood on one of the few remaining moons in a universe where Earth and all oceans have inexplicably vanished. The player must photograph the ocean floor using a mounted camera while navigating blind, guided only by coordinates, with an unknown creature hunting the vessel. The claustrophobic, minimalist setting made it a natural candidate for a feature film adaptation that could lean into practical set design and a contained, high-tension atmosphere.
        </p>

        <p>
          Fischbach financed the film himself, wrote the screenplay, and took on the director's role. The production was notable for its independent funding structure, operating outside the traditional studio system entirely. It screened at a limited number of film festivals before the YouTube release was confirmed.
        </p>

        <h2>Cannes 2026 | Announcing the YouTube Date</h2>

        <p>
          Fischbach was present at the Cannes Film Festival in May 2026 as part of a panel focused on creator-led film and digital distribution. The panel, moderated by Deadline, featured a conversation about the growing overlap between YouTube's creator ecosystem and the traditional film industry. Fischbach used the platform to confirm the May 31 premiere date and to elaborate on the complexity of distributing the film through YouTube's Movies storefront rather than as a standard creator upload.
        </p>

        <p>
          The distinction matters. YouTube Movies and TV is a separate transactional and rental marketplace within the YouTube ecosystem, distinct from the free ad-supported video that most users associate with the platform. Placing <em>Iron Lung</em> there requires navigating content licensing agreements, digital rights management infrastructure, and revenue-sharing arrangements that differ substantially from the Partner Program terms that govern Fischbach's main channel.
        </p>

        <p>
          His comments at Cannes suggested the process required legal groundwork that had not previously been laid for a creator-originated feature film seeking placement in the YouTube Movies storefront. The implication is that Fischbach was, to some degree, charting new territory for how a YouTube creator brings an independently financed feature to their own platform's commercial movie product.
        </p>

        <h2>Why YouTube | The Platform as Distribution Strategy</h2>

        <p>
          The decision to debut <em>Iron Lung</em> on YouTube rather than a traditional streaming platform like Netflix, Amazon Prime Video, or Shudder is a strategic one that speaks to where Fischbach's audience lives. His YouTube channel has over 35 million subscribers, built over more than a decade of gaming content, charity fundraising, and collaborative projects. Distributing the film on YouTube means the audience he already has can watch it in the same environment where they discovered him.
        </p>

        <p>
          It also reflects a broader shift in how YouTube is positioning itself as a destination for premium video content. The platform has aggressively expanded its movie and TV catalog over the past three years, adding free ad-supported titles alongside paid rentals and purchases. A creator of Fischbach's scale bringing an original feature film to the platform is exactly the kind of content that differentiates YouTube Movies from generic digital storefronts. For a deeper look at how YouTube has evolved as a platform, see{' '}
          <Link href="/youtube/history" className="text-blue-600 hover:text-blue-800 underline">
            the full history of YouTube
          </Link>
          .
        </p>

        <p>
          For Fischbach, the choice also carries a philosophical logic. The game he is adapting became widely known because of YouTube. His own playthrough was, arguably, a significant driver of the game's cultural footprint. Bringing the film adaptation back to that same platform closes a loop that began when he first uploaded the playthrough years earlier.
        </p>

        <h2>Markiplier as Filmmaker | What Iron Lung Means for Creator Cinema</h2>

        <p>
          Fischbach is not the first YouTube creator to produce a feature film, but the scale of his audience and the seriousness of the production make <em>Iron Lung</em> one of the most closely watched creator-to-filmmaker transitions the platform has seen. Unlike creator films that function primarily as extended YouTube content, <em>Iron Lung</em> has pursued traditional film festival exposure and is being treated as a standalone cinematic work.
        </p>

        <p>
          The Cannes presence underscores that framing. Cannes is not a destination creators attend to promote YouTube videos. Fischbach's panel appearance signals that <em>Iron Lung</em> is being positioned in the film industry conversation, not only the creator economy one.
        </p>

        <p>
          Whether other creators follow a similar path, self-financing features and distributing them through YouTube Movies, will depend heavily on how <em>Iron Lung</em> performs commercially and critically after its May 31 debut. If the model works, it represents a new lane for major creators who have both the audience and the capital to produce work that operates simultaneously in the creator and film industries.
        </p>

        <p>
          For more on the creators shaping YouTube in 2026, visit the{' '}
          <Link href="/youtube" className="text-blue-600 hover:text-blue-800 underline">
            YouTube hub
          </Link>{' '}
          or the{' '}
          <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">
            Creator hub
          </Link>
          .
        </p>
      </div>
    </NewsArticle>
  );
}
