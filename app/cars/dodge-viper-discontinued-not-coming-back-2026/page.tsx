import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { SourcesInterlink } from '@/components/SourcesInterlink';

const OG_IMAGE = '/thumbnails/cars-dodge-viper-discontinued-not-coming-back-2026.jpg';

export const revalidate = 86400;

const SLUG = '/cars/dodge-viper-discontinued-not-coming-back-2026';
const ARTICLE_URL = `https://www.objectivewire.com${SLUG}`;

export const metadata: Metadata = {
  title: 'Dodge Viper Not Coming Back | Tim Kuniskis Confirms 2026',
  description: 'Dodge Viper is officially not returning. SRT chief Tim Kuniskis confirmed on The DriveCast that the Viper has reached end of lifecycle. Here is why it is over for good.',
  keywords: [
    'Dodge Viper discontinued',
    'Dodge Viper not coming back',
    'Dodge Viper dead 2026',
    'Tim Kuniskis Viper',
    'Dodge Viper canceled',
    'Viper replacement',
    'Dodge Viper end of production',
    'Viper future',
    'Dodge Viper 2026',
    'SRT Viper discontinued',
    'Conner Avenue closed',
    'Viper production ended',
    'Dodge performance cars',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Dodge Viper Is Not Coming Back | Kuniskis Confirms It Is Over',
    description: 'SRT chief Tim Kuniskis told The DriveCast the Viper reached end of lifecycle. Airbag regs, economics, and the manual gearbox problem all point to a permanent end.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Wang'],
    publishedTime: '2026-06-01T14:00:00Z',
    modifiedTime: '2026-06-01T14:00:00Z',
    section: 'Cars',
    tags: ['Dodge Viper', 'SRT', 'American Muscle', 'Car News'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dodge Viper Is Dead | Kuniskis Says Manual Would Not Work on New Version',
    description: 'The SRT boss confirmed it: no new Viper. Modern power levels would require an automatic, eliminating the car\'s core identity.',
  },
};

export default function ViperDiscontinuedPage() {
  return (
    <NewsArticle
      title="Dodge Viper Is Not Coming Back | Tim Kuniskis Confirms It Is Over"
      subtitle="SRT chief Tim Kuniskis confirmed on The DriveCast podcast that the Dodge Viper has reached the end of its lifecycle, that a modern version would require an automatic transmission, and that Stellantis has no plans to revive it. The car that defined American performance for 25 years is permanently retired."
      category="Cars"
      categoryColor="red"
      topicTag="automotive"
      publishDate="2026-06-01T14:00:00Z"
      readTime="5 min read"
      author={{ name: 'Jack Wang', role: 'Cars', authorSlug: 'jack-wang' }}
      slug="dodge-viper-discontinued-not-coming-back-2026"
      url={SLUG}
      tags={['Dodge Viper', 'SRT', 'American Muscle', 'Car News']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Dodge Viper Discontinued', item: SLUG },
      ]}
      keyTakeaways={[
        'SRT chief Tim Kuniskis confirmed on The DriveCast podcast that the Dodge Viper has reached the end of its lifecycle and there are no plans to revive it.',
        'Kuniskis stated that a modern Viper would need a dual-clutch or automatic transmission because current power targets exceed what a manual clutch system can manage at track speeds.',
        'The 2016 and 2017 model year Vipers could not pass updated federal side-impact airbag regulations without a complete redesign that Stellantis declined to fund at the car\'s production volume.',
        'Dodge produced fewer than 800 Vipers per year in its final years at Conner Avenue Assembly in Detroit, making the economics of a compliance redesign unjustifiable.',
        'Dodge has shifted its American performance identity to the Charger platform, including the Charger Daytona EV and Charger Six-Pack, leaving no slot in the lineup for a two-seat V10.',
      ]}
      keyTakeawaysColor="red"
      faqItems={[
        {
          question: 'Is the Dodge Viper coming back?',
          answer: 'No. SRT chief Tim Kuniskis confirmed in 2026 on The DriveCast podcast that the Viper has reached the end of its lifecycle and there are no current plans to revive the nameplate. Stellantis has not funded a replacement program.',
        },
        {
          question: 'Why did Dodge discontinue the Viper?',
          answer: 'The Viper was discontinued after 2017 primarily due to updated federal side-impact airbag regulations that would have required a costly redesign of the car\'s interior structure. With fewer than 800 units sold per year, Stellantis decided the investment was not economically viable.',
        },
        {
          question: 'What did Tim Kuniskis say about the Viper?',
          answer: 'In a 2026 appearance on The DriveCast podcast by The Drive, SRT boss Tim Kuniskis said the Viper had "reached the end of its lifecycle." He also stated that any modern Viper would need an automatic or dual-clutch transmission because power levels would be too high for a traditional clutch-based manual to handle cleanly at track speeds.',
        },
        {
          question: 'What replaced the Dodge Viper?',
          answer: 'There is no direct Viper replacement. Dodge has focused its performance lineup on the Charger platform, including the Charger Daytona EV, the Charger Six-Pack with a 3.0L Hurricane turbocharged inline-six, and the Challenger successor models. None are a two-seat roadster.',
        },
        {
          question: 'Will the Dodge Viper ever come back?',
          answer: 'There is no confirmed plan to revive the Viper. Tim Kuniskis\'s 2026 comments suggest that even if Dodge explored a new Viper, the car would need to be fundamentally different, with an automatic gearbox, which would change its core character. The 2017 Viper remains the last production model.',
        },
      ]}
    >
      <p>
        The <strong>Dodge Viper is not coming back.</strong> SRT chief Tim Kuniskis made that clear in a 2026 conversation on The DriveCast, the podcast produced by automotive publication The Drive. Kuniskis stated that the Viper had "reached the end of its lifecycle" and confirmed that Stellantis has no active program to replace it. The two-seat, V10-powered, manual-only American sports car that debuted at the 1989 Detroit Auto Show and ran in various forms through 2017 is permanently retired.
      </p>

      <p>
        The full story of what the Viper was across its five generations, from Bob Lutz's 1989 concept to the final 2017 ACR, is covered in the{' '}
        <Link href="/cars/dodge-viper-history" className="text-blue-600 hover:text-blue-800 underline">
          complete Dodge Viper history
        </Link>.
      </p>

      <h2>What Kuniskis Said | The DriveCast Statement</h2>

      <p>
        Kuniskis's comments on The DriveCast were the clearest official statement Dodge has made about the Viper's future. He did not hedge. He said the car had reached its lifecycle end, a formulation that in automotive corporate language means engineering resources have moved on and no return is being funded.
      </p>

      <p>
        The most revealing portion of his comments addressed the gearbox question. Kuniskis acknowledged that enthusiasts want a manual Viper, but stated that a modern car at the power levels Dodge would target would require a <strong>dual-clutch or automatic transmission</strong>. His reasoning: the clutch forces required to launch a car with 700 or 800 horsepower quickly and consistently would exceed what a human leg can reliably apply, and that the shift speed advantage of a DCT at those power levels is significant enough that building a manual-only car would mean leaving performance on the table.
      </p>

      <p>
        This is a significant admission. The Viper's manual gearbox was not incidental to its identity. It was the whole point. The car was heavy, loud, physically demanding, and had no traction aids in early generations. The 6-speed manual was the mechanism through which a driver accepted or declined the terms of the car. Kuniskis essentially acknowledged that a modern Viper with the powertrain it would need to be competitive could not honestly remain a manual car.
      </p>

      <h2>Why It Really Ended | Airbag Regulations and Volume Economics</h2>

      <p>
        The official reason the Viper ended after 2017 was federal safety regulations. The National Highway Traffic Safety Administration's updated <strong>Federal Motor Vehicle Safety Standard 214</strong> required enhanced side-impact airbag protection that the Viper's existing cabin structure could not accommodate without a significant redesign.
      </p>

      <p>
        Dodge faced a straightforward economic calculation. The Viper was selling <strong>fewer than 800 units per year</strong> in its final production years. Conner Avenue Assembly in Detroit, the facility dedicated exclusively to building Vipers by hand, had annual capacity well above what demand required. A FMVSS 214 compliance redesign would cost hundreds of millions of dollars across engineering, tooling, and crash-testing certification, amortized over a car that Dodge was selling fewer of each year.
      </p>

      <p>
        Fiat Chrysler, which became Stellantis through its merger with PSA Group, had different priorities for that capital. The Dodge brand was being repositioned around the Charger and Challenger platforms, with electrification of those models representing the major investment area. A bespoke two-seat sports car with its own dedicated factory, its own supply chain, and its own compliance requirements was a luxury the business case could not support.
      </p>

      <h2>Conner Avenue | The Factory That Made Vipers</h2>

      <p>
        The Viper was assembled at <strong>Conner Avenue Assembly</strong> on East Conner Avenue in Detroit, a plant that FCA opened specifically for Viper production in 1995. Workers there assembled the car largely by hand. The plant was not automated in the conventional automotive sense. Each Viper took roughly three days to build, a process that required skilled technicians rather than robotic assembly lines.
      </p>

      <p>
        FCA used Conner Avenue as a demonstration facility and tourist attraction during its peak years, offering public tours that highlighted the hand-built nature of the car. After Viper production ended in 2017, the plant was repurposed. It no longer builds Vipers. The physical infrastructure of the program — the tooling, the fixtures, the supply relationships — has been wound down.
      </p>

      <p>
        Restarting Viper production would not simply mean turning a key. It would mean rebuilding a supply chain, retooling a facility, recertifying the car to current safety standards, and funding an entirely new engineering program. None of that is in motion.
      </p>

      <h2>What Dodge Is Doing Instead</h2>

      <p>
        Dodge's performance focus has shifted entirely to the <strong>Charger platform</strong>. The Charger Daytona is Dodge's first mass-produced EV, using an electric powertrain with what the company calls "fratzonic chambered exhaust" to generate exhaust-style sound through a speaker system. The Charger Six-Pack uses a 3.0-liter turbocharged inline-six engine called the Hurricane, available in standard and high-output configurations.
      </p>

      <p>
        Neither the Daytona EV nor the Six-Pack is a two-seat sports car. Neither is rear-wheel drive only. Neither has a manual gearbox. Dodge is building volume muscle cars for its traditional buyer base, not low-volume exotics for the collector market. The Viper sat in a different commercial space, one Dodge has chosen not to occupy.
      </p>

      <h2>What Collectors Should Know</h2>

      <p>
        Kuniskis's confirmation of the Viper's permanent end is relevant to the collector market. Cars without announced successors, built at declining volumes, with manufacturing infrastructure that has been dismantled, tend to appreciate. The 2016 and 2017 ACR variants in particular have already seen meaningful value increases.
      </p>

      <p>
        The{' '}
        <Link href="/cars/dodge-viper-acr-2016-most-powerful-specs-value" className="text-blue-600 hover:text-blue-800 underline">
          2016 Dodge Viper ACR
        </Link>{' '}
        now trades for $80,000 to $110,000 at auction for documented Extreme Aero examples, above the original MSRP for the car. As the supply of low-mileage survivors declines — tracked examples accumulate miles and wear quickly — well-preserved street examples will become increasingly rare.
      </p>

      <p>
        Kuniskis's DCT comment adds a specific layer. If any future Dodge sports car in the Viper tradition appeared with a dual-clutch automatic, enthusiasts who want a V10 manual American sports car would have exactly one option: buy what was already built. That scarcity premium is already visible in ACR auction results.
      </p>

      <SourcesInterlink
        accentColor="red"
        sources={[
          {
            number: 1,
            url: 'https://www.thedrive.com/drivecast',
            title: 'The DriveCast | The Drive',
            description: 'The podcast where SRT chief Tim Kuniskis confirmed the Viper has reached end of lifecycle and discussed what a modern Viper would require.',
          },
          {
            number: 2,
            url: 'https://www.motortrend.com/cars/dodge/viper/',
            title: 'Dodge Viper News | MotorTrend',
            description: 'Production history, final year coverage, and sales figures for the Viper program.',
          },
          {
            number: 3,
            url: 'https://www.nhtsa.gov/vehicle-safety/side-impact-protection',
            title: 'FMVSS 214 Side Impact Protection | NHTSA',
            description: 'Federal Motor Vehicle Safety Standard 214 side-impact airbag requirements that affected Viper compliance.',
          },
        ]}
        internalLinks={[
          { href: '/cars/dodge-viper-history', label: 'Dodge Viper History | All Five Generations' },
          { href: '/cars/dodge-viper-acr-2016-most-powerful-specs-value', label: '2016 Dodge Viper ACR | Specs and Collector Value' },
          { href: '/cars', label: 'ObjectWire Cars Hub' },
        ]}
      />
    </NewsArticle>
  );
}
