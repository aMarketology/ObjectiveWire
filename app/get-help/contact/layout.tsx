import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us | ObjectWire',
  description: 'Get in touch with the ObjectWire team. For news tips, press inquiries, or general questions.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
