import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Texas Blog | Objective Wire',
  description: 'Public-interest reporting on Texas from Objective Wire. Austin, Houston, Greater Texas, courts, public records, and community accountability journalism.',
  alternates: {
    canonical: 'https://www.objectivewire.org/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
