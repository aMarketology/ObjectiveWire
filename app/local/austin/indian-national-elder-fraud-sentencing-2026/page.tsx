import type { Metadata } from 'next';
import Link from 'next/link';
import QuickArticle from '@/components/articles/QuickArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';

export const revalidate = 86400;

const SLUG = '/local/austin/indian-national-elder-fraud-sentencing-2026';
const ARTICLE_URL = `https://www.objectivewire.org${SLUG}`;
const OG_IMAGE = `https://www.objectivewire.org/thumbnails/local-austin-indian-national-elder-fraud-sentencing-2026.jpg`;

export const metadata: Metadata = {
  title: 'Austin Elder Fraud Sentencing | 97 Months for Indian',
  description:
    'Dhruv Rajeshbhai Mangukiya was sentenced to 97 months in an Austin federal court for an elder fraud scheme involving phishing and courier-collected gold.',
  keywords: [
    'Austin elder fraud sentencing Indian national',
    'Dhruv Rajeshbhai Mangukiya',
    'Kishan Rajeshkumar Patel',
    'Austin federal court',
    'phishing elder fraud gold cash',
    '$2.5 million restitution',
    'elder fraud scheme Austin Texas',
    'Indian call center phishing scam',
    'courier collected gold fraud',
    'money laundering conspiracy Austin',
    'elder fraud courier network',
    'FBI elder fraud investigation Texas',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Indian National Sentenced to 97 Months in Austin for $2.5M Elder Fraud Scheme',
    description:
      'Dhruv Rajeshbhai Mangukiya was sentenced in an Austin federal court for a phishing and gold-courier elder fraud scheme that stripped victims of their life savings.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Carson Scott'],
    publishedTime: '2026-10-16T16:00:00Z',
    modifiedTime: '2026-10-16T16:00:00Z',
    section: 'News',
    tags: ['Elder Fraud', 'Austin', 'Federal Court', 'Phishing', 'Money Laundering'],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Austin elder fraud sentencing Indian national' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indian National Gets 97 Months in Austin Elder Fraud Scheme',
    description: 'Phishing attacks, courier-collected gold, and $2.5 million in restitution. The sentencing breakdown.',
    images: [OG_IMAGE],
  },
};

export default function AustinElderFraudSentencingPage() {
  return (
    <>
      <NewsArticleSchema
        title="Austin Elder Fraud Sentencing | Indian National Gets 97 Months"
        description="Dhruv Rajeshbhai Mangukiya was sentenced to 97 months in prison by an Austin federal court for his role in a devastating elder fraud scheme involving phishing and courier-collected gold."
        author="Carson Scott"
        authorUrl="https://www.objectivewire.org/authors/carson-scott"
        publishedTime="2026-10-16T16:00:00Z"
        modifiedTime="2026-10-16T16:00:00Z"
        articleUrl={ARTICLE_URL}
        imageUrl={OG_IMAGE}
        imageWidth={1200}
        imageHeight={630}
        section="News"
        keywords={[
          'Austin elder fraud sentencing Indian national',
          'Dhruv Rajeshbhai Mangukiya',
          'phishing elder fraud gold cash',
        ]}
      />

      <QuickArticle
        title="Indian National Sentenced to 97 Months in Austin for $2.5M Elder Fraud Scheme"
        subtitle="A devastating multi-million-dollar elder fraud scheme that stripped vulnerable Americans of their life savings has resulted in a massive federal prison sentence in an Austin federal court."
        department="Crime"
        category="News"
        accentColor="red"
        publishDate="October 16, 2026"
        readTime="4 min read"
        author={{ name: 'Carson Scott', slug: 'carson-scott' }}
        heroImage={{
          src: OG_IMAGE,
          alt: 'Austin elder fraud sentencing Indian national',
          caption: 'Dhruv Rajeshbhai Mangukiya was sentenced to 97 months in an Austin federal court.',
        }}
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/local/austin', label: 'Austin' },
          { href: SLUG, label: 'Elder Fraud Sentencing' },
        ]}
        sources={[
          {
            number: 1,
            title: 'Indian National Sentenced in Austin for Role in Multi-Million Dollar Elder Fraud Scheme',
            url: 'https://www.justice.gov/usao-wdtx/pr/indian-national-sentenced-austin-role-multi-million-dollar-elder-fraud-scheme',
            publisher: 'Department of Justice',
          },
          {
            number: 2,
            title: 'Indian Student Sentenced to 97 Months in Prison for Multi-Million Dollar Fraud Scheme in Texas',
            url: 'https://timesofindia.indiatimes.com/world/us/indian-student-sentenced-to-97-months-in-prison-for-multi-million-dollar-fraud-scheme-in-texas-phishing-attack-targeting-elderly/articleshow/125388454.cms',
            publisher: 'The Times of India',
          },
          {
            number: 3,
            title: 'Jury Convicts Indian National in $150 Million Elder Fraud Scheme',
            url: 'https://www.breitbart.com/immigration/2026/10/07/jury-convicts-indian-national-150-million-elder-fraud-scheme/',
            publisher: 'Breitbart',
          },
        ]}
        relatedArticles={[
          { href: '/local/austin/apd-mail-theft-fraud-ring-eight-arrests-2026', title: 'APD Mail Theft Fraud Ring | Eight Arrests', category: 'News' },
          { href: '/local/us-news/elon-musk-1-million-giveaway-lawsuit-settlement-2026', title: 'Elon Musk $1 Million Giveaway Lawsuit Settlement', category: 'News' },
          { href: '/local/austin', title: 'Austin Local Coverage', category: 'Local' },
        ]}
        tags={['Elder Fraud', 'Austin', 'Federal Court', 'Phishing', 'Money Laundering']}
      >
        <p>
          A devastating multi-million-dollar elder fraud scheme that stripped vulnerable Americans of their life savings has resulted in a massive federal prison sentence.
        </p>

        <p>
          An Indian national, <strong>Dhruv Rajeshbhai Mangukiya</strong>, was sentenced in an Austin federal court to <strong>97 months in prison</strong> for his role in an extensive conspiracy to commit money laundering. In addition to his prison term, Mangukiya has been ordered to pay a staggering <strong>$2,515,780 in restitution</strong> to the victims of the scam.
        </p>

        <p>
          The sentencing highlights the severe penalties facing international cyber-criminal networks that prey on the elderly using sophisticated fear tactics and physical money couriers.
        </p>

        <h2>Phishing and Courier-Collected Gold</h2>

        <p>
          The fraudulent operation was highly organized and designed to exploit older individuals' trust and fear. According to the Department of Justice, the scheme originated from illicit call centers based in India. Scammers would target elderly victims using phishing attacks, often posing as government officials or tech support agents, to convince the victims that their finances were in immediate danger.
        </p>

        <p>
          Once the victims were manipulated into withdrawing large sums of cash or purchasing physical gold, the scammers dispatched local couriers to collect the assets directly from the victims' homes. During the court proceedings, Mangukiya admitted that his role involved managing these collections on the American end. He collected the cash and gold, moved the proceeds along to hubs like New York and Los Angeles for overseas laundering, and personally kept a 2% cut of the fraudulent proceeds he handled.
        </p>

        <h2>A Wider Crackdown on Scam Networks</h2>

        <p>
          Mangukiya is not the only individual facing consequences for the sweeping $150 million international scam operation. Court documents reveal that Mangukiya explicitly recruited his co-defendant, <strong>Kishan Rajeshkumar Patel</strong>, to act as a physical courier for the stolen assets. Patel previously pleaded guilty to conspiracy to commit wire fraud and was sentenced to <strong>63 months in federal prison</strong>.
        </p>

        <p>
          The FBI, alongside local law enforcement agencies including the Fort Worth Police Department and Granite Shoals Police Department, spearheaded the investigation.
        </p>

        <div className="my-8 not-prose rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">Austin Elder Fraud Sentencing Quick Intel Grid</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Defendant:</strong> Dhruv Rajeshbhai Mangukiya, Indian National</li>
            <li><strong>Sentence:</strong> 97 months in federal prison</li>
            <li><strong>Restitution Ordered:</strong> $2,515,780</li>
            <li><strong>Co-Defendant:</strong> Kishan Rajeshkumar Patel, sentenced to 63 months</li>
            <li><strong>Method:</strong> Phishing attacks, call centers, and physical cash and gold couriers</li>
          </ul>
        </div>

        <p>
          Federal authorities continue to urge families to educate themselves on the warning signs of elder fraud. Officials stress that no legitimate government agency or tech company will ever demand payment via physical gold bars, cash handed to couriers, or cryptocurrency.
        </p>

        <p>
          For more Austin crime coverage, see the{' '}
          <Link href="/local/austin" className="text-blue-600 hover:text-blue-800 underline">
            Austin local hub
          </Link>{' '}
          and our report on the{' '}
          <Link href="/local/austin/apd-mail-theft-fraud-ring-eight-arrests-2026" className="text-blue-600 hover:text-blue-800 underline">
            APD mail theft fraud ring
          </Link>
          .
        </p>
      </QuickArticle>
    </>
  );
}