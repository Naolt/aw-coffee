"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import WorldMap from "@/components/ui/world-map";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutPage() {
  const missionSection = useScrollAnimation(0.05); // Trigger very early when only 5% visible

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-brown text-sm font-semibold tracking-wider mb-4">ABOUT AW COFFEE</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown">
              Rooted in Heritage. Crafted with Passion. Shared with the World.
            </h1>
          </div>

          {/* Two Square Images */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
                <Image
                  src="/home/unique1.jpg"
                  alt="AW Coffee Heritage"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
                <Image
                  src="/home/unique3.jpg"
                  alt="AW Coffee Passion"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 text-brown leading-relaxed font-light text-lg mb-8">
              <p>
                In Kaffa, coffee isn't just a crop — it's our identity. Our founder, Asmamaw W/M, saw the world's growing demand for specialty coffee and believed Kaffa deserved a prominent place on the global stage. We planted our first forest coffee farm, Tuga Farm, in Bitta Woreda, Kaffa where the high-altitude forests naturally nurture rich, aromatic beans.
              </p>
              <p>
                From there, our journey evolved: 2013 – Start of our first farm in Kaffa Years of Organic Cultivation – Building expertise, quality, & strong farming systems Local Supply to ECX & Vertical Integration – Strengthening operations & quality control 2022 – Direct Export to US begins (a major milestone)
              </p>
              <p>
                Today, AW Coffee works with its own farms and a network of trusted smallholder farmers who share our passion for quality and sustainability. Together, we are not just exporting coffee — we are sharing the true taste of Kaffa with the world.
              </p>
            </div>

            <Button className="hover:bg-green/40 hover:scale-[1.02] active:scale-[0.98] text-brown rounded-full pl-6 pr-2 py-6 text-base flex items-center gap-3 transition-all duration-300 group" style={{ backgroundColor: 'rgba(10, 212, 97, 0.2)' }}>
              Read More
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45" style={{ backgroundColor: '#331E0B' }}>
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-brown text-sm font-semibold tracking-wider mb-4">GLOBAL REACH</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brown mb-6">
              From Kaffa to the World
            </h3>
            <p className="text-brown/80 text-lg font-light max-w-3xl mx-auto">
              Currently exporting to the USA, with strategic expansion into Asia, Middle East, and South America
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <WorldMap
              dots={[
                {
                  start: { lat: -8, lng: 36.5 }, // Kaffa region, Ethiopia
                  end: { lat: 37.0, lng: -95.7 }, // USA
                  lineColor: "#0AD461", // Green for currently exporting
                },
                {
                  start: { lat: -8, lng: 36.5 }, // Kaffa region, Ethiopia
                  end: { lat: 35.0, lng: 105.0 }, // Asia (China center)
                  lineColor: "#331E0B", // Brown for expanding
                },
                {
                  start: { lat: -8, lng: 36.5 }, // Kaffa region, Ethiopia
                  end: { lat: 29.0, lng: 47.0 }, // Middle East (Kuwait)
                  lineColor: "#331E0B", // Brown for expanding
                },
                {
                  start: { lat: -8, lng: 36.5 }, // Kaffa region, Ethiopia
                  end: { lat: -14.0, lng: -51.0 }, // South America (Brazil)
                  lineColor: "#331E0B", // Brown for expanding
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={missionSection.ref}
            className={`grid md:grid-cols-[2fr_1fr] gap-12 items-center transition-all duration-700 ${
              missionSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Left - Mission Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Our Mission</h2>
              <p className="text-xl md:text-2xl text-brown leading-relaxed font-light">
                is To cultivate, craft, and share exceptional Arabica coffee from Kaffa — while empowering local farmers, preserving heritage, and delivering world-class quality with every bean.
              </p>
            </div>

            {/* Right - Small Square Image */}
            <div className="relative w-full aspect-square overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
              <Image
                src="/about/beans.jpg"
                alt="AW Coffee Mission"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-12">Our Team</h2>

            <div className="space-y-12">
              {/* Team Member 1 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-2">
                  Asmamaw Woldemariam — CEO & General Manager
                </h3>
                <p className="text-lg md:text-xl text-brown/80 font-light leading-relaxed">
                  Leads AW Coffee with vision, passion, and deep commitment to Kaffa's coffee legacy.
                </p>
              </div>

              {/* Team Member 2 */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-2">
                  Abel Asmamaw — Export Manager
                </h3>
                <p className="text-lg md:text-xl text-brown/80 font-light leading-relaxed">
                  Ensures smooth global operations, quality export standards, and strong partner relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
