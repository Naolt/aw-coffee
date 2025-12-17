import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - AW Coffee Export | Get in Touch',
  description: 'Contact AW Coffee Export for inquiries about Ethiopian coffee exports, partnerships, or bulk orders. We\'re here to help you experience the true taste of origin.',
  keywords: [
    'contact AW Coffee',
    'Ethiopian coffee supplier',
    'coffee export inquiry',
    'bulk coffee orders',
    'coffee partnership',
    'Ethiopian coffee wholesale',
    'specialty coffee supplier',
    'coffee export contact',
    'get in touch coffee exporter',
    'coffee business inquiry'
  ],
  openGraph: {
    title: 'Contact AW Coffee Export | Get in Touch',
    description: 'Ready to experience authentic Ethiopian coffee? Contact AW Coffee Export for inquiries, partnerships, and bulk orders.',
    url: 'https://awcoffeeexport.com/contact',
    siteName: 'AW Coffee Export',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://awcoffeeexport.com/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact AW Coffee Export'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AW Coffee Export | Get in Touch',
    description: 'Ready to experience authentic Ethiopian coffee? Contact us for inquiries, partnerships, and bulk orders.',
    images: ['https://awcoffeeexport.com/og-contact.jpg']
  },
  alternates: {
    canonical: 'https://awcoffeeexport.com/contact'
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
