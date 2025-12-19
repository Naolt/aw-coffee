"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const stats = [
  { value: "10+", label: "Washing Stations" },
  { value: "5+", label: "Drying Stations" },
  { value: "100+", label: "Permanent Workers" }
];

export function SplitHero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-white to-brown/5 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brown/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green/10 rounded-full border border-green/20"
            >
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green">Est. 2013 | Kaffa, Ethiopia</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-brown leading-tight mb-6">
                AW Coffee
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-brown/80 leading-tight">
                The Heritage of Kaffa,
                <br />
                <span className="text-green font-medium">The True Taste of Origin</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-brown/70 leading-relaxed max-w-xl"
            >
              Premium, traceable, and sustainably grown coffee from Kaffa — the birthplace of Arabica.
              Crafted for specialty coffee lovers across the globe.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => router.push('/our-coffee')}
                className="group px-8 py-4 bg-brown text-white rounded-full font-semibold hover:bg-brown/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <span>Explore Our Coffee</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white text-brown border-2 border-brown/20 rounded-full font-semibold hover:border-green hover:text-green transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-brown/10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-brown mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-brown/60 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-green/20 to-brown/20 rounded-[3rem] transform rotate-3" />

              {/* Image Container */}
              <div className="relative h-full rounded-[3rem] overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/home/hero.jpg"
                  alt="Ethiopian Coffee from Kaffa"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent" />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-brown/60 font-medium">100% Traceable</p>
                        <p className="text-xl font-bold text-brown">Grade 1 Specialty</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-32 h-32 border-4 border-green/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-brown/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-brown/40">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
