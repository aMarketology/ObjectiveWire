import type { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 3600;

const PAGE_URL = 'https://www.objectivewire.com/crime';

export const metadata: Metadata = {
  title: 'Texas Crime and Courts | FOIA, Criminal Justice, Indictments',
  description:
    'Texas crime and courts coverage. FOIA filings, criminal justice reporting, court indictments, and accountability journalism from Objective Wire TX.',
  keywords: [
    'Texas crime news',
    'Texas courts',
    'Texas FOIA',
    'Texas criminal justice',
    'Texas indictments 2026',
    'Austin courts',
    'Houston crime news',
    'Objective Wire TX crime',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Texas Crime and Courts | Objective Wire TX',
    description:
      'Texas crime and courts. FOIA filings, criminal justice, indictments, and accountability journalism from Objective Wire TX.',
    type: 'website',
    url: PAGE_URL,
    siteName: 'Objective Wire TX',
  },
};

const BEATS = [
  {
    href: '/crime',
    label: 'Courts',
    kicker: 'COURTS',
    desc: 'State and federal court coverage. Trials, rulings, and docket reporting across Texas.',
  },
  {
    href: '/crime',
    label: 'FOIA Filings',
    kicker: 'FOIA',
    desc: 'Public records requests and responses. Accountability through Texas open records law.',
  },
  {
    href: '/crime',
    label: 'Criminal Justice',
    kicker: 'JUSTICE',
    desc: 'Policing, prosecution, corrections, and criminal justice reform across Texas.',
  },
];

export default function TexasCrimePage() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 py-10">

        {/* Hub header */}
        <div className="border-b-2 border-[#2d0a00] pb-6 mb-8">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#8b2000] mb-2 font-mono">Hub</p>
          <h1
            className="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
          >
            Crime &amp; Courts
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl">
            FOIA filings, court coverage, and criminal justice reporting across Texas. Primary-source accountability journalism.
          </p>
        </div>

        {/* Beat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {BEATS.map((beat) => (
            <Link
              key={beat.label}
              href={beat.href}
              className="group block bg-white border border-gray-200 p-6 hover:border-[#8b2000] transition-colors"
            >
              <span className="inline-block text-[9px] font-black tracking-[0.2em] uppercase text-white bg-[#8b2000] px-2 py-0.5 mb-3">
                {beat.kicker}
              </span>
              <h2
                className="text-xl font-black text-gray-900 group-hover:text-[#c45c2a] transition-colors mb-2"
                style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
              >
                {beat.label}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">{beat.desc}</p>
            </Link>
          ))}
        </div>

        {/* Tip submission CTA */}
        <div className="bg-[#1a1a1a] text-white p-8 mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#c45c2a] mb-1">Tip Line</p>
          <p
            className="font-black text-xl mb-2"
            style={{ fontFamily: 'var(--font-source-serif), Georgia, serif' }}
          >
            Got a tip on a court case or public records story?
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Submit tips, FOIA denials, court documents, or whistleblower information through our secure contact form.
          </p>
          <Link
            href="/get-help/contact"
            className="inline-block bg-[#c45c2a] hover:bg-[#d4723e] text-white font-black px-6 py-2.5 transition-colors text-sm uppercase tracking-widest"
          >
            Submit a Tip
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <Link href="/" className="text-xs font-bold text-[#c45c2a] hover:underline tracking-wide uppercase">
            &larr; Objective Wire TX Home
          </Link>
        </div>

      </div>
    </div>
  );
}
