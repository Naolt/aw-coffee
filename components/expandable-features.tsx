"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Origin Guarantee",
    subtitle: "Traceable from Farm to Cup",
    description: "Every bean we export is traceable to its specific origin in Kaffa, Ethiopia - the birthplace of coffee. We provide complete transparency with documented supply chain records, GPS coordinates of farms, and detailed harvest information. Our commitment to traceability ensures authenticity and builds trust with our partners.",
    image: "/home/unique1.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stats: ["100% Traceable", "GPS Verified", "Full Documentation"]
  },
  {
    id: 2,
    title: "Strict Quality Control",
    subtitle: "Grade 1 Specialty Coffee Only",
    description: "Our multi-stage quality control process ensures only the finest beans reach your roastery. From initial sorting to final grading, we implement rigorous standards that exceed international specialty coffee requirements. Every batch undergoes cupping tests, moisture analysis, and visual inspection before export certification.",
    image: "/home/unique2.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    stats: ["Grade 1 Certified", "Lab Tested", "Zero Defects"]
  },
  {
    id: 3,
    title: "Direct Sourcing",
    subtitle: "Fair Trade Partnerships",
    description: "We work directly with smallholder farmers and cooperatives in Kaffa, eliminating unnecessary middlemen. This direct relationship ensures fair compensation for farmers while guaranteeing premium quality for our clients. Our long-term partnerships foster sustainable farming practices and community development.",
    image: "/home/unique3.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stats: ["Direct Trade", "Fair Prices", "Sustainable"]
  },
  {
    id: 4,
    title: "Unmatched Quality",
    subtitle: "High-Altitude Excellence",
    description: "Our coffee grows at elevations exceeding 1,800 meters in the pristine forests of Kaffa. The unique terroir, combined with traditional farming methods and ideal growing conditions, produces beans with complex flavor profiles and exceptional cup quality. This is the authentic taste of origin that only Ethiopian coffee can deliver.",
    image: "/home/hero.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    stats: ["1,800m+ Elevation", "Forest-Grown", "Unique Terroir"]
  }
];

export function ExpandableFeatures() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">
            What Makes Us Unique
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            Click each card to discover the exceptional qualities that set our Ethiopian coffee apart.
          </p>
        </motion.div>

        {/* Expandable Cards */}
        <div className="space-y-4">
          {features.map((feature, index) => {
            const isExpanded = expandedId === feature.id;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                  isExpanded ? 'border-green' : 'border-transparent'
                }`}
              >
                {/* Card Header - Always Visible */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : feature.id)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-6 text-left hover:bg-cream/30 transition-colors"
                >
                  <div className="flex items-center gap-6 flex-1">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? 'bg-green text-white'
                          : 'bg-brown/10 text-brown'
                      }`}
                    >
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-brown mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-brown/60">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Expand/Collapse Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ${
                      isExpanded ? 'text-green' : 'text-brown/40'
                    }`}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                          {/* Left - Content */}
                          <div className="space-y-6">
                            <p className="text-brown/80 leading-relaxed">
                              {feature.description}
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-3">
                              {feature.stats.map((stat, idx) => (
                                <div
                                  key={idx}
                                  className="px-4 py-2 bg-green/10 text-green rounded-full text-sm font-medium"
                                >
                                  {stat}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right - Image */}
                          <div className="relative h-64 md:h-full rounded-xl overflow-hidden group">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent" />

                            {/* Number Badge */}
                            <div className="absolute bottom-4 right-4 text-6xl font-bold text-white/30">
                              0{feature.id}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/our-coffee"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green text-white rounded-full font-medium hover:bg-green/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Our Coffee Collection
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
