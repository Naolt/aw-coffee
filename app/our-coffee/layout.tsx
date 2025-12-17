import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Coffee - AW Coffee Export | Premium Ethiopian Coffee',
  description: 'Discover our premium Ethiopian coffee selection from the birthplace of coffee. Explore arabica varieties, specialty grades, and sustainable single-origin beans from Kaffa.',
  keywords: [
    'Ethiopian coffee varieties',
    'premium arabica coffee',
    'specialty grade coffee',
    'single origin Ethiopian coffee',
    'Kaffa coffee beans',
    'Ethiopian coffee types',
    'arabica coffee Ethiopia',
    'specialty coffee beans',
    'Ethiopian coffee export',
    'premium coffee beans',
    'sustainable coffee Ethiopia',
    'coffee from origin'
  ],
  openGraph: {
    title: 'Our Coffee - Premium Ethiopian Coffee | AW Coffee Export',
    description: 'Explore our premium Ethiopian coffee selection. From the heritage of Kaffa, we bring you the finest arabica and specialty coffee beans.',
    url: 'https://awcoffeeexport.com/our-coffee',
    siteName: 'AW Coffee Export',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://awcoffeeexport.com/og-coffee.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Ethiopian Coffee from AW Coffee Export'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Coffee - Premium Ethiopian Coffee | AW Coffee Export',
    description: 'Explore our premium Ethiopian coffee selection from the birthplace of coffee. The true taste of origin.',
    images: ['https://awcoffeeexport.com/og-coffee.jpg']
  },
  alternates: {
    canonical: 'https://awcoffeeexport.com/our-coffee'
  }
};

export default function OurCoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
