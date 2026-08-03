import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/houston/unique-green-battle-funeral-home-estate-fraud-2-2m';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-houston-unique-green-battle-funeral-home-estate-fraud-2-2m.jpg`;

export const metadata: Metadata = {
  title: 'Unique Green-Battle | $2.2M Funeral Home Fraud Charges',
  description:
    'Unlicensed Houston funeral director Unique Green-Battle stormed out of a Harris County courthouse after being charged with $2.2 million in estate fraud, including forging a will and posing as a deceased client widow.',
  keywords: [
    'Unique Green-Battle funeral home fraud',
    'Houston funeral director estate theft',
    'unlicensed funeral home operator Houston',
    'A Community Funeral Home fraud',
    'Harris County funeral home charges',
    'Lawrence Gammon estate theft',
    'forged will probate fraud Houston',
    'funeral home cremains seized',
    'Harris County DA consumer fraud',
    'Houston funeral home raid 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Unlicensed Houston Funeral Director Stormed Out of Courthouse After $2.2M Estate Fraud Charges',
    description:
      'Unique Green-Battle, an unlicensed funeral home operator, allegedly forged a will, posed as a widow, and stole $2.2 million from a deceased client estate. She stormed out of a Harris County courthouse after her bond hearing.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-08-03T14:00:00Z',
    modifiedTime: '2026-08-03T14:00:00Z',
    section: 'News',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Harris County Criminal Courthouse Houston' }],
    tags: ['Unique Green-Battle', 'Houston', 'Funeral Home Fraud', 'Estate Theft', 'Harris County'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drama at the Courthouse | Unlicensed Funeral Director Stormed Out After $2.2M Fraud Charges',
    description: 'She posed as a widow, forged a will, and stole $2.2 million. Then she called herself a celebrity and walked out.',
    images: [OG_IMAGE],
  },
};

export default function UniqueGreenBattlePage() {
  return (
    <>
      <NewsArticleSchema
        title="Unique Green-Battle Funeral Home Fraud | $2.2M Estate Theft Charges"
        description="Unlicensed Houston funeral director Unique Green-Battle stormed out of a Harris County courthouse after being charged with $2.2 million in estate fraud, including forging a will and posing as a deceased client widow."
        author="Jack Brennan"
        authorUrl="https://www.objectivewire.org/authors/jack-brennan"
        publishedTime="2026-08-03T14:00:00Z"
        modifiedTime="2026-08-03T14:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        section="News"
        keywords={[
          'Unique Green-Battle funeral home fraud',
          'Houston funeral director estate theft',
          'unlicensed funeral home operator Houston',
        ]}
      />

      <NewsArticle
        title="Drama at the Courthouse | Unlicensed Houston Funeral Director Stormed Out After $2.2M Estate Fraud Charges"
        subtitle="A routine bond hearing descended into a dramatic outburst at the Harris County Criminal Courthouse after Unique Green-Battle, an unlicensed Houston funeral home operator facing multiple felony counts, confronted local media and hurled insults outside the courtroom. She is accused of forging a will, posing as a widow, and stealing $2.2 million from a deceased client estate."
        category="News"
        categoryColor="orange"
        topicTag="investigations"
        publishDate="August 3, 2026"
        publishedTime="2026-08-03T14:00:00Z"
        readTime="5 min read"
        author={{
          name: 'Jack Brennan',
          role: 'Reporter, Objective Wire',
          authorSlug: 'jack-brennan',
        }}
        slug={SLUG}
        url={SLUG}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Houston', item: '/local/houston' },
          { name: 'Green-Battle Fraud Charges', item: SLUG },
        ]}
        tags={['Unique Green-Battle', 'Houston', 'Funeral Home Fraud', 'Estate Theft', 'Harris County']}
        keyTakeaways={[
          'Unique Green-Battle, an unlicensed Houston funeral home operator, stormed out of a Harris County courthouse after a bond hearing and hurled insults at reporters, calling herself a celebrity.',
          'She is charged with forging a last will and testament to pose as the common-law spouse of deceased 78-year-old Lawrence Gammon, whom she had no prior connection with before his passing.',
          'Authorities allege Green-Battle seized Gammon home, three vehicles, and approximately $2.2 million from his personal bank accounts through the fraudulent probate filing.',
          'Green-Battle operated A Community Funeral Home on Wheeler Avenue without a valid funeral director or embalmer license, using forged credentials submitted to state licensing authorities.',
          'HPD officers previously raided the Wheeler Avenue location during an active funeral service, seizing dozens of boxes of unreturned human cremains.',
        ]}
        keyTakeawaysColor="orange"
        faqItems={[
          {
            question: 'Who is Unique Green-Battle?',
            answer:
              'Unique Green-Battle is an unlicensed Houston funeral home operator who faces multiple felony charges for allegedly forging a will, posing as a widow, and stealing $2.2 million from the estate of a deceased client. She operated A Community Funeral Home on Wheeler Avenue.',
          },
          {
            question: 'What did Unique Green-Battle allegedly do?',
            answer:
              'Green-Battle allegedly forged a last will and testament claiming to be the common-law spouse of 78-year-old Lawrence Gammon, whom she had no prior connection with. She then seized his home, three vehicles, and emptied approximately $2.2 million from his bank accounts.',
          },
          {
            question: 'What happened at the courthouse?',
            answer:
              'After a bond hearing on July 31, 2026, where a judge set conditions including a ban on funeral industry work, Green-Battle stormed out of the Harris County Criminal Courthouse, proclaimed herself a celebrity to reporters, and hurled insults at journalists and camera operators.',
          },
          {
            question: 'Was she licensed to operate a funeral home?',
            answer:
              'No. Investigators revealed that Green-Battle operated A Community Funeral Home without a valid funeral director or embalmer license and had submitted forged credentials to state licensing authorities.',
          },
          {
            question: 'What happened during the police raid?',
            answer:
              'Houston Police officers raided the Wheeler Avenue funeral home in the middle of an active funeral service, seizing dozens of boxes of unreturned human cremains. The raid was part of the broader investigation into Green-Battle operations.',
          },
        ]}
        moreFromHub={[]}
        moreFromHubLabel="Houston"
        moreFromHubHref="/local/houston"
      >
        <p>
          A routine bond hearing descended into a dramatic outburst at the Harris County Criminal Courthouse after <strong>Unique Green-Battle</strong>, an unlicensed Houston funeral home operator facing multiple felony counts, confronted local media and hurled insults outside the courtroom.
        </p>

        <p>
          The outburst followed a judicial order setting her bond and issuing a strict injunction barring her from engaging in any capacity within the funeral service industry.
        </p>

        <h2>The Courthouse Incident</h2>

        <p>
          On <strong>July 31, 2026</strong>, Green-Battle appeared before a Harris County judge to address formal felony charges stemming from an extensive, monthslong joint investigation by the Houston Police Department and the Harris County Precinct 1 Constable Office.
        </p>

        <p>
          During the hearing, the judge set her bond requirements and handed down explicit conditions prohibiting her from continuing operations in funeral services or handling human remains. Following the ruling, Green-Battle stormed out of the courthouse facility. When approached by local news crews filming her departure, she proclaimed to reporters that she was a <strong>celebrity</strong>, refused to address or clarify the specifics of her criminal charges, and verbally attacked local journalists and camera operators before exiting the property.
        </p>

        <h2>The $2.2 Million Estate Theft Allegations</h2>

        <p>
          According to court filings from the Harris County District Attorney Office Consumer Fraud Unit, Green-Battle was hired by the out-of-state family of 78-year-old <strong>Lawrence Gammon</strong> to manage his funeral services after he passed away.
        </p>

        <p>Investigators allege that Green-Battle subsequently executed a sophisticated identity theft scheme:</p>

        <ul>
          <li><strong>Forged probate filings:</strong> Within weeks of Gammon death, Green-Battle filed a fraudulent last will and testament, claiming to be Gammon common-law spouse and sole heir. Authorities confirmed the two had no prior connection before his passing.</li>
          <li><strong>Asset seizure:</strong> Posing as his surviving widow, she allegedly seized Gammon home, three vehicles, and emptied approximately $2.2 million across his personal bank accounts.</li>
          <li><strong>Unlicensed funeral operations:</strong> Investigators revealed that Green-Battle operated <em>A Community Funeral Home</em> on Wheeler Avenue without a valid funeral director or embalmer license, submitting forged credentials to state licensing authorities.</li>
        </ul>

        <p>
          The case came to a public head after HPD officers previously raided the Wheeler Avenue location in the middle of an active funeral service, seizing dozens of boxes of unreturned human cremains. Green-Battle remains subject to ongoing criminal proceedings in Harris County.
        </p>

        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.click2houston.com/news/local/2026/07/21/funeral-home-director-charged-with-5-felonies-after-allegedly-stealing-nearly-dollar22m-from-dead-mans-estate/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Click2Houston | Funeral Home Director Charged With Stealing $2.2M From Estate</a></li>
          <li><a href="https://www.khou.com/video/news/local/funeral-home-director-accused-of-forging-harris-county-mans-will/285-cfd2d7bd-3667-4e89-8eab-e024d71a7552" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">KHOU 11 | Funeral Home Director Accused of Forging Will</a></li>
          <li><a href="https://www.fox26houston.com/news/houston-funeral-director-court-bond-hearing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">FOX 26 Houston | Unlicensed Funeral Director Faces Court Hearing</a></li>
          <li><a href="https://app.dao.hctx.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Harris County DA Office | Consumer Fraud Unit Case Filings</a></li>
        </ul>

        <p>
          For more Houston coverage, see the{' '}
          <Link href="/local/houston" className="text-blue-600 hover:text-blue-800 underline">
            oWire Houston hub
          </Link>{' '}
          or read our reporting on{' '}
          <Link href="/local/houston/emylee-thai-fbi-most-wanted-fraud-ankle-monitor-vietnam" className="text-blue-600 hover:text-blue-800 underline">
            the Emylee Thai FBI fugitive case
          </Link>{' '}
          and{' '}
          <Link href="/local/greater-texas/magnolia-diagnostics-24m-covid-testing-fraud-settlement-2026" className="text-blue-600 hover:text-blue-800 underline">
            the Magnolia Diagnostics COVID testing fraud settlement
          </Link>.
        </p>
      </NewsArticle>
    </>
  );
}