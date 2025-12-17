import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - AW Coffee Export | Ethiopian Coffee Excellence',
  description: 'Learn about AW Coffee Export, a leading Ethiopian coffee exporter committed to quality, sustainability, and preserving the heritage of Kaffa - the birthplace of coffee.',
  keywords: [
    'AW Coffee Export',
    'Ethiopian coffee exporter',
    'coffee from Ethiopia',
    'Kaffa coffee heritage',
    'sustainable coffee',
    'specialty coffee Ethiopia',
    'coffee origin',
    'Ethiopian coffee company',
    'coffee export business',
    'authentic Ethiopian coffee'
  ],
  openGraph: {
    title: 'About AW Coffee Export | Ethiopian Coffee Excellence',
    description: 'Discover AW Coffee Export, your trusted partner for premium Ethiopian coffee. From the heritage of Kaffa to your cup.',
    url: 'https://awcoffeeexport.com/about',
    siteName: 'AW Coffee Export',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://awcoffeeexport.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'AW Coffee Export - Ethiopian Coffee Heritage'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AW Coffee Export | Ethiopian Coffee Excellence',
    description: 'Learn about AW Coffee Export, a leading Ethiopian coffee exporter committed to quality and sustainability.',
    images: ['https://awcoffeeexport.com/og-about.jpg']
  },
  alternates: {
    canonical: 'https://awcoffeeexport.com/about'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
