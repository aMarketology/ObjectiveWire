import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const revalidate = 3600;

const SLUG = '/world-cup/news/fbi-nrg-stadium-threat-houston-2026';
const ARTICLE_URL = `${SITE_CONFIG.url}${SLUG}`;
const OG_IMAGE = '/thumbnails/world-cup-news-fbi-nrg-stadium-threat-houston-2026.jpg';

export const metadata: Metadata = {
  title: 'FBI Investigates NRG Stadium World Cup Threat | No Credibility Found',
  description:
    'The FBI Houston field office investigated an online threat targeting NRG Stadium during 2026 FIFA World Cup matches, finding no credibility after initial analysis on June 29, hours before the Brazil vs. Japan Round of 32 match.',
  keywords: [
    'FBI NRG Stadium threat World Cup',
    'NRG Stadium World Cup threat 2026',
    'FBI Houston World Cup security',
    'NRG Stadium security threat investigation',
    'Houston World Cup FBI threat',
    'Brazil Japan World Cup Houston',
    'World Cup 2026 stadium threat',
    'FBI Houston World Cup 2026',
    'NRG Stadium 2026 FIFA security',
    'Houston Police World Cup threat',
    'World Cup Houston safety 2026',
    'NRG Stadium Round of 32',
    'FIFA World Cup 2026 Houston',
    'online threat NRG Stadium',
    'Houston World Cup security update',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FBI Finds No Credibility in Online Threat to NRG Stadium | World Cup 2026',
    description:
      'FBI Houston and Houston Police investigated an online threat targeting NRG Stadium on June 25, disclosing no credibility on June 29 ahead of the Brazil vs. Japan Round of 32 match.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Objective Wire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-07-01T10:00:00Z',
    modifiedTime: '2026-07-01T10:00:00Z',
    section: 'World Cup',
    images: [{ url: `${SITE_CONFIG.url}${OG_IMAGE}`, width: 1200, height: 675, alt: 'NRG Stadium Houston Texas, FBI World Cup security investigation 2026' }],
    tags: ['FBI', 'NRG Stadium', 'Houston', 'World Cup 2026', 'Security'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FBI: No Credibility in Online Threat to NRG Stadium Before Brazil vs. Japan',
    description:
      'FBI Houston and HPD investigated a June 25 online threat, cleared the stadium on June 29. Investigation into the source continues.',
    images: [`${SITE_CONFIG.url}${OG_IMAGE}`],
  },
};

export default function FbiNrgStadiumThreatPage() {
  return (
    <NewsArticle
      title="FBI Investigates Online Threat to NRG Stadium, Finds No Credibility Before World Cup Match"
      subtitle="The FBI Houston field office and Houston Police Department investigated an online threat targeting NRG Stadium during the 2026 FIFA World Cup, determining after initial analysis that the threat carried no credibility, and publicly releasing the update on June 29 hours before the Brazil vs. Japan Round of 32 match."
      category="Sports"
      categoryColor="blue"
      topicTag="sports"
      publishDate="July 1, 2026"
      readTime="4 min read"
      author={{
        name: 'Jack Brennan',
        role: 'Sports Correspondent',
        authorSlug: 'jack-brennan',
      }}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup 2026', item: '/world-cup' },
        { name: 'FBI NRG Stadium Threat', item: SLUG },
      ]}
      keyTakeaways={[
        'The FBI Houston field office found no credibility to an online threat targeting NRG Stadium during the 2026 FIFA World Cup after its initial analysis on June 29, 2026.',
        'The threat was first flagged on June 25, 2026; the FBI disclosed its findings publicly on June 29, hours before the Brazil vs. Japan Round of 32 match at NRG Stadium.',
        'The FBI and Houston Police Department are actively investigating to identify who posted the online threat.',
        'Attendees at remaining World Cup matches at NRG Stadium are advised to arrive early, pass through enhanced checkpoint screening, and report any suspicious activity to law enforcement.',
      ]}
      keyTakeawaysColor="blue"
      faqItems={[
        {
          question: 'Was the NRG Stadium World Cup threat real?',
          answer:
            'No. The FBI Houston field office determined the online threat had no credibility after its initial analysis on June 29, 2026. The investigation into who posted the threat remains active.',
        },
        {
          question: 'When was the NRG Stadium threat first reported?',
          answer:
            'The FBI originally flagged the online threat on Thursday morning, June 25, 2026. It publicly released its security update on Monday, June 29, the same day NRG Stadium hosted the Brazil vs. Japan Round of 32 match.',
        },
        {
          question: 'Who is investigating the NRG Stadium threat?',
          answer:
            'The FBI Houston field office and the Houston Police Department are jointly working to trace and identify the person who posted the online threat.',
        },
        {
          question: 'Is NRG Stadium safe for World Cup matches?',
          answer:
            'Yes. Authorities confirmed no credible threat exists. Enhanced security screening is in place at NRG Stadium and attendees are advised to arrive early and report suspicious activity immediately.',
        },
      ]}
      tags={['FBI', 'NRG Stadium', 'Houston', 'World Cup 2026', 'Security', 'Brazil', 'FIFA']}
      slug="world-cup-news-fbi-nrg-stadium-threat-houston-2026"
      url={ARTICLE_URL}
      thumbnail={{ src: OG_IMAGE, alt: 'NRG Stadium Houston Texas, FBI World Cup security investigation 2026' }}
    >
      <p>
        The FBI Houston field office found no credibility to an online threat targeting{' '}
        <strong>NRG Stadium</strong> during the 2026 FIFA World Cup matches, disclosing the finding publicly on{' '}
        June 29, 2026, just hours before the venue hosted the high-profile{' '}
        <strong>Brazil vs. Japan Round of 32</strong> knockout match. The FBI and{' '}
        <strong>Houston Police Department</strong> are jointly investigating to identify who posted the threat.
      </p>

      <p>
        Federal agents first flagged the online communication on Thursday morning, <strong>June 25, 2026</strong>.
        After several days of analysis, the FBI released its update on June 29, choosing to disclose ahead of
        the match to allow stadium staff and attendees to make informed decisions. For full context on Houston's
        role as a World Cup host, see the{' '}
        <Link
          href="/world-cup"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          2026 FIFA World Cup hub
        </Link>.
      </p>

      <h2>The Threat | FBI Houston Finds No Credibility After Initial Analysis</h2>

      <p>
        The FBI Houston division released a formal public statement confirming its assessment and urging
        tournament attendees to remain alert:
      </p>

      <blockquote>
        <p>
          "FBI Houston is aware of a threat to Houston stadium circulating online. At this time, there is no
          credibility to the threat. We continue to analyze and assess the situation. We urge the public to
          remain vigilant and report any suspicious activity or individuals to law enforcement immediately."
        </p>
      </blockquote>

      <p>
        The disclosure came at a sensitive moment. NRG Stadium was hours away from hosting{' '}
        <strong>Brazil vs. Japan</strong> in the Round of 32, one of the most-watched matches of the tournament
        group stage. Security officials elected to release the update proactively rather than hold it, in
        keeping with the FBI's posture of transparency at major public events.
      </p>

      <p>
        The investigation into the origin of the post is ongoing. Authorities have not named any suspects or
        disclosed the platform on which the threat appeared. Identifying and prosecuting the source remains a
        priority for both the FBI Houston field office and Houston Police regardless of the threat's
        non-credible status, as false threats directed at public events carry federal criminal liability.
      </p>

      <h2>Timeline | June 25 Flag to June 29 Public Disclosure</h2>

      <p>
        The five-day gap between the initial flag and the public statement reflects standard FBI threat
        assessment protocol. The agency analyzes the communication's origin, specificity, operational plausibility,
        and any corroborating intelligence before making a public determination.
      </p>

      <ul>
        <li><strong>June 25, 2026 (Thursday morning):</strong> FBI Houston field office flags an online post
        threatening NRG Stadium. Internal assessment begins.</li>
        <li><strong>June 25 to June 28:</strong> FBI and Houston Police work jointly to analyze the
        communication, cross-reference intelligence databases, and assess credibility.</li>
        <li><strong>June 29, 2026 (Monday):</strong> FBI publicly releases no-credibility finding ahead of
        the Brazil vs. Japan match. Enhanced security posture remains in place.</li>
        <li><strong>Ongoing:</strong> Source investigation continues. No arrests or named suspects as of
        July 1, 2026.</li>
      </ul>

      <p>
        This is not the first security incident tied to a 2026 World Cup venue. Earlier in the tournament,
        Congress was warned about frozen DHS security funding affecting all 11 U.S. host cities. See our
        earlier coverage:{' '}
        <Link
          href="/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Host cities warn of frozen DHS World Cup security funding
        </Link>.
      </p>

      <h2>Security at NRG Stadium | What Attendees Should Know</h2>

      <p>
        Despite the no-credibility finding, security at NRG Stadium remains tight as Houston finishes out
        its remaining slate of World Cup matches. The FBI and Houston Police have advised all attendees to:
      </p>

      <ul>
        <li>Arrive early to account for <strong>strict checkpoint screenings</strong> at all entry points</li>
        <li>Keep a close eye on your surroundings inside and outside the stadium</li>
        <li><strong>Report any suspicious activity or individuals to law enforcement immediately</strong></li>
        <li>Follow all instructions from security personnel and venue staff</li>
      </ul>

      <p>
        NRG Stadium is one of 11 U.S. venues hosting the 2026 FIFA World Cup. Houston's full match schedule
        and remaining fixtures are listed on the{' '}
        <Link
          href="/world-cup/world-cup-2026-schedule-dates"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          World Cup 2026 schedule and dates page
        </Link>. Fans attending any remaining match are encouraged to review the venue's official security
        guidance before arrival.
      </p>

      <p>
        Report suspicious activity to stadium security or call the FBI's tip line at{' '}
        <strong>1-800-CALL-FBI (1-800-225-5324)</strong> or submit a tip online at{' '}
        <a
          href="https://tips.fbi.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          tips.fbi.gov
        </a>.
      </p>
    </NewsArticle>
  );
}
