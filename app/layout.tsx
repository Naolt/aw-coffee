import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://awcoffeeexport.com'),
  title: {
    default: 'AW Coffee - The Heritage of Kaffa, The True Taste of Origin',
    template: '%s | AW Coffee'
  },
  description: 'Premium, traceable, and sustainably grown Ethiopian coffee from Kaffa — the birthplace of Arabica. Direct from our farms to specialty coffee lovers worldwide.',
  keywords: ['Ethiopian coffee', 'Kaffa coffee', 'specialty coffee', 'arabica coffee', 'sustainable coffee', 'direct trade coffee', 'premium coffee', 'coffee export', 'Ethiopian coffee beans'],
  authors: [{ name: 'AW Coffee' }],
  creator: 'AW Coffee',
  publisher: 'AW Coffee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://awcoffeeexport.com',
    siteName: 'AW Coffee',
    title: 'AW Coffee - The Heritage of Kaffa, The True Taste of Origin',
    description: 'Premium, traceable, and sustainably grown Ethiopian coffee from Kaffa — the birthplace of Arabica. Direct from our farms to specialty coffee lovers worldwide.',
    images: [
      {
        url: '/home/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'AW Coffee - Ethiopian Coffee from Kaffa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AW Coffee - The Heritage of Kaffa, The True Taste of Origin',
    description: 'Premium, traceable, and sustainably grown Ethiopian coffee from Kaffa — the birthplace of Arabica.',
    images: ['/home/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
