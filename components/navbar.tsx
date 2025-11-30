"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Coffee", href: "/our-coffee" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50" style={{
      background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 46%, rgba(153, 153, 153, 1) 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 gap-[90px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="AW Coffee"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-white rounded-full">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  pathname === item.href
                    ? "bg-green text-black"
                    : "text-brown hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Button className="hidden md:flex bg-green hover:bg-green/90 text-black rounded-full px-6">
            Order Sample
          </Button>

          <button className="md:hidden text-brown">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
