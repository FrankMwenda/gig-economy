import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gig Economy | Client Portfolio',
  description: 'Modern portfolio website for the Gig Economy platform showcasing services, delivery quality, and client outcomes.',
  keywords: ['gig economy', 'portfolio', 'services', 'client projects', 'freelance platform'],
  openGraph: {
    title: 'Gig Economy | Client Portfolio',
    description: 'Explore services, portfolio case studies, and contact options for the Gig Economy platform.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
