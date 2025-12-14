"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import type { TeamMember } from "@/sanity/lib/types";

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Fetch team members from Sanity
  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const data = await client.fetch<TeamMember[]>(TEAM_MEMBERS_QUERY);
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    }
    fetchTeamMembers();
  }, []);

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
                In Kaffa, the birthplace of coffee, it's more than a beverage — it's a way of life. Coffee runs through our culture, our land, and our history. From this fertile, high-altitude region where Arabica first took root, our story began — one of passion, perseverance, and pride.
              </p>
              <p>
                Our founder, Asmamaw W/M, envisioned sharing Kaffa's authentic flavor with the world. What started as a dream soon became reality when we planted our first forest coffee farm, Tuga Farm, in Bitta Woreda. Guided by generations of tradition and a commitment to sustainable, organic methods, we cultivated coffee that reflects both heritage and heart.
              </p>
              <p>
                Over the years, our journey has been defined by growth and resilience. We began by supplying coffee through ECX and vertical integration, gaining invaluable experience and trust. Through dedication and consistent quality, we reached a new milestone — exporting directly to the U.S. and European markets, bringing the true taste of Kaffa to global coffee lovers.
              </p>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                style={{ overflow: 'hidden' }}
              >
                <div className="space-y-6 pt-6">
                  <p>
                    Of course, no journey is without challenges. From securing fertile farms to building skilled teams, every step tested our resolve. But our unwavering belief in quality and our deep connection to the land carried us through.
                  </p>
                  <p>
                    Today, we stand as a proud representation of Kaffa's legacy — combining tradition with innovation to produce coffee that is rich, authentic, and full of life. Every bean we harvest tells a story — of roots, resilience, and the timeless spirit of Kaffa.
                  </p>
                </div>
              </motion.div>
            </div>

            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="hover:bg-green/40 hover:scale-[1.02] active:scale-[0.98] text-brown rounded-full pl-6 pr-2 py-6 text-base flex items-center gap-3 transition-all duration-300 group"
              style={{ backgroundColor: 'rgba(10, 212, 97, 0.2)' }}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-[2fr_1fr] gap-12 items-center"
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
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-12">Our Team</h2>

            <div className="space-y-12">
              {teamMembers && teamMembers.length > 0 ? (
                teamMembers.map((member) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 items-start"
                  >
                    {member.photoUrl && (
                      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={member.photoUrl}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-2">
                        {member.name} — {member.role}
                      </h3>
                      <p className="text-lg md:text-xl text-brown/80 font-light leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>
                ))
              ) : (
                // Fallback content
                <>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-2">
                      Asmamaw Woldemariam — CEO & General Manager
                    </h3>
                    <p className="text-lg md:text-xl text-brown/80 font-light leading-relaxed">
                      Leads AW Coffee with vision, passion, and deep commitment to Kaffa's coffee legacy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-brown mb-2">
                      Abel Asmamaw — Export Manager
                    </h3>
                    <p className="text-lg md:text-xl text-brown/80 font-light leading-relaxed">
                      Ensures smooth global operations, quality export standards, and strong partner relationships.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
