import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Support page. Regenerates daily via ISR.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Tip the Newsroom | Contact Objective Wire",
  description: "Submit a confidential tip to Objective Wire. Our newsroom accepts public records leads, whistleblower tips, and accountability story pitches.",
  alternates: {
    canonical: 'https://www.objectivewire.com/get-help',
  },
  openGraph: {
    title: "Tip the Newsroom | Contact Objective Wire",
    description: "Submit a confidential tip to Objective Wire. Our newsroom accepts public records leads, whistleblower tips, and accountability story pitches.",
    type: 'article',
    url: "https://www.objectivewire.com/get-help",
    siteName: 'Objective Wire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tip the Newsroom | Contact Objective Wire",
    description: "Submit a confidential tip to Objective Wire. Public records leads, whistleblower tips, and accountability story pitches.",
  },
};

export default function GetHelpPage() {
  return <WikiArticle slug="get-help" />;
}
