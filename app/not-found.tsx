import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Coffee Bean Icon */}
        <div className="mb-8">
          <svg
            className="w-32 h-32 mx-auto text-brown/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.5 2C5.42 2 3 4.42 3 7.5c0 2.28 1.17 4.41 3.11 5.63C7.29 14.29 8 15.74 8 17.5c0 1.93-1.57 3.5-3.5 3.5v2c3.03 0 5.5-2.47 5.5-5.5 0-2.28-1.17-4.41-3.11-5.63C5.71 10.71 5 9.26 5 7.5 5 5.57 6.57 4 8.5 4S12 5.57 12 7.5h2c0-3.08-2.42-5.5-5.5-5.5zm7 0C12.42 2 10 4.42 10 7.5h2c0-1.93 1.57-3.5 3.5-3.5S19 5.57 19 7.5c0 1.76-.71 3.21-1.89 4.37C15.17 12.91 14 15.04 14 17.32c0 3.03 2.47 5.5 5.5 5.5v-2c-1.93 0-3.5-1.57-3.5-3.5 0-1.76.71-3.21 1.89-4.37C19.83 11.79 21 9.66 21 7.38 21 4.42 18.58 2 15.5 2z"/>
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-brown mb-4">404</h1>

        {/* Message */}
        <h2 className="text-3xl font-semibold text-brown mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-brown/70 mb-8 max-w-md mx-auto">
          Oops! It seems this page got lost in the coffee fields.
          Let's get you back to where the coffee flows.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-8 py-4 bg-green text-white rounded-full font-medium hover:bg-green/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/our-coffee"
            className="px-8 py-4 bg-white text-brown border-2 border-brown rounded-full font-medium hover:bg-brown hover:text-white transition-all duration-300 hover:scale-105"
          >
            Explore Our Coffee
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-brown/10">
          <p className="text-sm text-brown/60 mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="text-brown/80 hover:text-green transition-colors">
              About Us
            </Link>
            <Link href="/gallery" className="text-brown/80 hover:text-green transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-brown/80 hover:text-green transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Brand Tagline */}
        <p className="mt-8 text-sm text-green font-medium">
          The Heritage of Kaffa, The True Taste of Origin
        </p>
      </div>
    </div>
  );
}
