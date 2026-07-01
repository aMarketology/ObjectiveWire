import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'World Cup Boycott: ICE & Immigration Calls | ObjectWire',
  description: 'Coverage of boycott calls for the 2026 World Cup over immigration and ICE concerns.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/world-cup/boycott-calls-ice-immigration`,
  },
};

export default function WorldCupBoycottLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
