"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Coffee", href: "/our-coffee" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide navbar on Sanity Studio route
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50" style={{
      background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 46%, rgba(153, 153, 153, 1) 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-center items-center h-20 md:gap-[90px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="AW Coffee"
              width={180}
              height={60}
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-white rounded-full">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.05] active:scale-[0.98] ${
                  pathname === item.href
                    ? "bg-green text-black"
                    : "text-brown hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button className="hidden md:flex bg-green hover:bg-green/90 hover:scale-[1.05] active:scale-[0.98] text-black rounded-full px-6 transition-all duration-200">
            Order Sample
          </Button>

          <button
            className="md:hidden text-brown"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  pathname === item.href
                    ? "bg-green text-black"
                    : "text-brown hover:bg-white/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-green hover:bg-green/90 hover:scale-[1.02] active:scale-[0.98] text-black rounded-full px-4 py-3 mt-2 transition-all duration-200">
              Order Sample
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
