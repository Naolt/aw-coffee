"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Origin Guarantee",
    description: "Every bean is traceable to its source in Kaffa, the birthplace of coffee. We provide complete transparency from farm to cup."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Strict Quality Control",
    description: "Our rigorous quality standards ensure only Grade 1 Arabica beans make it to your roastery. Multiple checkpoints guarantee excellence."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Direct Sourcing",
    description: "We work directly with local farmers, cutting out middlemen. This ensures fair prices for farmers and premium quality for you."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Unmatched Quality",
    description: "High-elevation, forest-grown Ethiopian Arabica with distinctive flavor profiles. Our coffee represents the pinnacle of specialty coffee."
  }
];

export function UniqueFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            From the birthplace of coffee comes an unparalleled commitment to quality,
            traceability, and direct partnerships.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-brown/5"
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-green/10 group-hover:text-green/20 transition-colors">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-green/10 to-brown/10 flex items-center justify-center text-brown group-hover:text-green group-hover:scale-110 transition-all duration-300 mb-6">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-brown mb-3 group-hover:text-green transition-colors">
                {feature.title}
              </h3>
              <p className="text-brown/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green/20 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-brown/60 mb-6">
            Ready to experience the difference?
          </p>
          <a
            href="/our-coffee"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green text-white rounded-full font-medium hover:bg-green/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Our Coffee
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
