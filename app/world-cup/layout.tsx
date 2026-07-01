import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'World Cup 2026 | ObjectWire',
  description: 'Coverage, analysis, and news about the 2026 FIFA World Cup.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/world-cup`,
  },
};

export default function WorldCupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
