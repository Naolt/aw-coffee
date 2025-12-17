import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - AW Coffee Export | Ethiopian Coffee Journey',
  description: 'Explore our gallery showcasing the journey of Ethiopian coffee from the farms of Kaffa to processing, roasting, and export. Experience the authentic coffee heritage.',
  keywords: [
    'Ethiopian coffee gallery',
    'coffee farm photos',
    'Kaffa coffee images',
    'coffee processing Ethiopia',
    'coffee roasting gallery',
    'specialty coffee photos',
    'Ethiopian coffee heritage',
    'coffee export gallery',
    'coffee plantation images',
    'authentic coffee photos'
  ],
  openGraph: {
    title: 'Gallery - AW Coffee Export | Ethiopian Coffee Journey',
    description: 'Explore stunning images of Ethiopian coffee from farm to cup. Witness the heritage of Kaffa and the true taste of origin.',
    url: 'https://awcoffeeexport.com/gallery',
    siteName: 'AW Coffee Export',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://awcoffeeexport.com/og-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'AW Coffee Export Gallery - Ethiopian Coffee Journey'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - AW Coffee Export | Ethiopian Coffee Journey',
    description: 'Explore stunning images of Ethiopian coffee from farm to cup. Witness the heritage of Kaffa.',
    images: ['https://awcoffeeexport.com/og-gallery.jpg']
  },
  alternates: {
    canonical: 'https://awcoffeeexport.com/gallery'
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
