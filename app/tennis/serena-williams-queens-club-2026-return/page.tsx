import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage } from '@/components/articles/ArticlePage';

export const revalidate = 86400;

const SLUG = '/tennis/serena-williams-queens-club-2026-return';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: "Serena Williams Queen's Club 2026 | Wildcard Return, Victoria Mboko",
  description: "Serena Williams returns to competitive tennis at the 2026 WTA 500 Queen's Club Championships in London, competing in doubles with Canadian Victoria Mboko on a wildcard entry.",
  keywords: [
    'Serena Williams Queens Club 2026',
    "Serena Williams Queen's Club",
    'Serena Williams tennis comeback 2026',
    'Serena Williams doubles wildcard',
    'Victoria Mboko doubles partner',
    'Serena Williams return to tennis',
    'WTA 500 Queens Club 2026',
    'Serena Williams Wimbledon 2026',
    'Serena Williams grass court',
    'Serena Williams Victoria Mboko',
    'Serena Williams 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Serena Williams Returns at Queen's Club 2026 | Wildcard Doubles With Victoria Mboko",
    description: "One of the greatest players ever returns to grass at Queen's Club with Canadian rising star Victoria Mboko. Full profile of the partnership and what the wildcard appearance means.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Madison Younghans'],
    publishedTime: '2026-06-01T16:00:00Z',
    modifiedTime: '2026-06-01T16:00:00Z',
    section: 'Sports',
    tags: ['Serena Williams', "Queen's Club", 'WTA', 'Grass Court Tennis'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Serena Williams at Queen's Club 2026 | Doubles Wildcard With Victoria Mboko",
    description: "Serena is back on grass. She and Victoria Mboko enter the WTA 500 doubles draw as wildcards in West Kensington.",
  },
};

export default function SerenaWilliamsQueensPage() {
  return (
    <ArticlePage
      title="Serena Williams Returns to Competitive Tennis at Queen's Club 2026"
      subtitle="The most decorated player in the history of women's tennis accepts a wildcard doubles entry at the WTA 500 Queen's Club Championships, partnering with rising Canadian star Victoria Mboko on the grass courts of West Kensington."
      category="Sports"
      lastUpdated="June 1, 2026"
      slug="serena-williams-queens-club-2026-return"
      url={SLUG}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/sports', label: 'Sports' },
        { href: '/tennis/queens-club-championships-2026-guide', label: "Queen's Club 2026" },
        { href: SLUG, label: 'Serena Williams' },
      ]}
      infoBox={{
        title: 'Serena Williams | Quick Facts',
        items: [
          { label: 'Full Name', value: 'Serena Jameka Williams' },
          { label: 'Born', value: 'September 26, 1981 (age 44)' },
          { label: 'Nationality', value: 'American' },
          { label: 'Turned Pro', value: '1995' },
          { label: 'Grand Slams', value: '23 Singles titles' },
          { label: 'Career titles', value: '73 WTA singles, 23 WTA doubles' },
          { label: 'Peak Ranking', value: 'World No. 1' },
          { label: 'Weeks at No. 1', value: '319 weeks' },
          { label: 'Queen\'s Club 2026', value: 'Wildcard doubles, partnering Victoria Mboko' },
          { label: 'Event', value: 'WTA 500 HSBC Championships, June 8 to 14' },
          { label: 'Surface', value: 'Grass, West Kensington, London' },
        ],
      }}
      tableOfContents={[
        { id: 'return', label: "The Return at Queen's Club" },
        { id: 'mboko', label: 'Victoria Mboko | The Partner' },
        { id: 'career', label: 'Career Overview and Grass Court Record' },
        { id: 'grand-slams', label: 'Grand Slam Titles' },
        { id: 'queens-club', label: "Why Queen's Club and Why Now" },
        { id: 'legacy', label: 'Legacy in the Women\'s Game' },
      ]}
      relatedLinks={[
        {
          href: '/tennis/queens-club-championships-2026-guide',
          label: "Queen's Club Championships 2026 | Full Guide",
          description: "What is Queen's Club, the tournament structure, and why it defines the grass court season.",
        },
        {
          href: '/sports',
          label: 'ObjectWire Sports Hub',
          description: 'NFL, soccer, tennis, golf, and MLB coverage.',
        },
      ]}
      backLink={{ href: '/sports', label: 'Back to Sports' }}
    >
      <section id="return">
        <h2>The Return at Queen's Club</h2>
        <p>
          Serena Williams is returning to competitive tennis. She accepted a wildcard entry to the doubles draw at the <strong>2026 WTA 500 HSBC Championships</strong> at Queen's Club in West Kensington, London, competing alongside Canadian teenager <strong>Victoria Mboko</strong> during the women's week running June 8 to 14.
        </p>
        <p>
          The appearance is a wildcard doubles entry, not a singles return. Williams, who retired from singles competition after the 2022 US Open, has made clear that she has no interest in returning to the rigors of a full singles draw. The doubles format gives her competitive tennis on a grass surface she has dominated across her career without the physical demand of five singles matches in seven days.
        </p>
        <p>
          The choice of Queen's Club as the venue for her return is deliberate. Williams has won at this club before. She knows the courts, she knows how the grass plays, and she knows that competing here in June places her in the most visible warm-up window before Wimbledon. For the full context of what Queen's Club is and why it sits at the center of the grass court season, see the{' '}
          <Link href="/tennis/queens-club-championships-2026-guide" className="text-blue-600 hover:text-blue-800 underline">
            complete Queen's Club Championships 2026 guide
          </Link>.
        </p>
      </section>

      <section id="mboko">
        <h2>Victoria Mboko | The Partner</h2>
        <p>
          <strong>Victoria Mboko</strong> is a Canadian tennis player who has rapidly emerged as one of the most exciting names in women's tennis entering the 2026 season. Young, athletic, and technically advanced, Mboko represents exactly the kind of next-generation player the WTA has been building its marketing around.
        </p>
        <p>
          The Williams-Mboko pairing is a generational collaboration by design. Mboko gets a doubles partner whose knowledge of grass court positioning and net approach has no equal in the women's game. Williams gets an athletic partner who can cover the court at the pace the modern game requires. Wildcards for this pairing reflect Queen's Club's desire to build the 2026 women's event into a genuine marquee draw rather than a secondary booking after the men's week.
        </p>
        <p>
          Mboko's singles ranking and WTA 500 participation marks her as a legitimate competitor in her own right, not a placeholder chosen to accommodate the returning legend. The doubles partnership is constructed to be competitive, not ceremonial.
        </p>
      </section>

      <section id="career">
        <h2>Serena Williams | Career Overview and Grass Court Record</h2>
        <p>
          Serena Williams turned professional in 1995 at age 14 and went on to become the most successful player in the Open Era of women's tennis. She holds <strong>23 Grand Slam singles titles</strong>, more than any other player in the Open Era, and spent <strong>319 weeks ranked World No. 1</strong>. Her career singles record is among the best in the history of the sport.
        </p>
        <p>
          On grass specifically, Williams was dominant to a degree that set her apart even within her broader dominance on all surfaces. She won <strong>Wimbledon seven times</strong> across her career, more than any player of her generation. Her serve on grass, with its flat trajectory and ball skid through the court, was arguably the most effective delivery ever deployed by a woman in Grand Slam competition.
        </p>
        <p>
          Grass court tennis rewards the physical tools Williams built her game around: flat, heavy groundstrokes that stay low; a serve that functions as a weapon at any point in a match; and movement patterns built on explosive first steps rather than clay court grinding endurance. Queen's Club in 2026 puts her back in a context where her game, even in doubles at age 44, is relevant.
        </p>
      </section>

      <section id="grand-slams">
        <h2>Grand Slam Titles | The Career Record</h2>
        <p>
          Williams' 23 Grand Slam singles titles span all four major surfaces: hard court at the Australian Open and US Open, clay at the French Open, and grass at Wimbledon. Her Wimbledon record is the most relevant context for her Queen's Club appearance.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#1d4ed8', color: 'white' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Grand Slam</th>
              <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 700 }}>Titles</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Most Recent Win</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Australian Open (Hard)', '7', '2017'],
              ['French Open (Clay)', '3', '2015'],
              ['Wimbledon (Grass)', '7', '2016'],
              ['US Open (Hard)', '6', '2014'],
            ].map(([slam, titles, year], i) => (
              <tr key={slam} style={{ backgroundColor: i % 2 === 0 ? '#f9fafb' : 'white', borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '10px 14px', fontWeight: 600 }}>{slam}</td>
                <td style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 700 }}>{titles}</td>
                <td style={{ padding: '10px 14px', color: '#4b5563' }}>{year}</td>
              </tr>
            ))}
            <tr style={{ backgroundColor: '#1e3a8a', color: 'white', fontWeight: 700 }}>
              <td style={{ padding: '10px 14px' }}>Total</td>
              <td style={{ padding: '10px 14px', textAlign: 'center' }}>23</td>
              <td style={{ padding: '10px 14px' }}>Open Era record</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="queens-club">
        <h2>Why Queen's Club and Why Now</h2>
        <p>
          Williams has not played competitive tennis since her retirement announcement at the 2022 US Open, where she lost to Ajla Tomljanovic in the third round and acknowledged afterward that her body could no longer sustain the physical demands of full-season singles competition. That retirement was on her own terms, on her preferred surface at Flushing Meadows, in front of the kind of crowd she deserved as a sendoff.
        </p>
        <p>
          A doubles wildcard at Queen's Club in 2026 is a different kind of appearance. It is not a final act. It is a competitive visit to a surface she loves, alongside a partner who gives the pairing genuine relevance in the draw, at an event that will receive significant television coverage across Eurosport, Tennis Channel, and international broadcasters who will treat her appearance as a legitimate story rather than a farewell tour footnote.
        </p>
        <p>
          The Wimbledon proximity matters. Queen's Club sits two weeks before Wimbledon on the calendar. Williams will be in the building, on the grass, in the broader conversation about the fortnight to come. Whether that proximity is a precursor to any future Wimbledon appearance is a question Williams has not answered publicly. The Queen's Club wildcard acceptance, by itself, answers nothing except that she is still willing to compete on the surface where she was most dominant.
        </p>
      </section>

      <section id="legacy">
        <h2>Legacy in the Women's Game</h2>
        <p>
          The conversation about Serena Williams' legacy does not require qualification. She is the benchmark against which every player in the women's game since 2000 has been measured. Her 23 Grand Slams, her physical transformation of what a professional tennis player's body could look like and still produce elite results, her longevity, her business career, and her advocacy within the sport collectively define a 27-year professional career with no close parallel in women's tennis history.
        </p>
        <p>
          Her return at Queen's Club in 2026 is not a legacy event in the sense of a retirement tribute. It is a competitive tennis appearance by a 44-year-old woman who still believes she can win a doubles draw on the surface she knows best. That belief, maintained at that age at that level, is itself a data point worth tracking.
        </p>
        <p>
          For the full context of the 2026 HSBC Championships structure, both women's and men's draws, see the{' '}
          <Link href="/tennis/queens-club-championships-2026-guide" className="text-blue-600 hover:text-blue-800 underline">
            Queen's Club Championships 2026 complete guide
          </Link>.
        </p>
      </section>
    </ArticlePage>
  );
}
