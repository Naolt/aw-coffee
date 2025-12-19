"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    title: "Origin Guarantee",
    tagline: "From Kaffa to Your Cup",
    description: "100% traceable Ethiopian coffee with complete farm-to-export documentation",
    image: "/home/unique1.jpg",
    color: "from-green/20 to-transparent"
  },
  {
    title: "Grade 1 Specialty",
    tagline: "Uncompromising Quality",
    description: "Rigorous multi-stage testing ensures only premium beans reach you",
    image: "/home/unique2.jpg",
    color: "from-brown/20 to-transparent"
  },
  {
    title: "Direct Sourcing",
    tagline: "Fair Trade Partnerships",
    description: "Working directly with farmers for quality, sustainability, and fair prices",
    image: "/home/unique3.jpg",
    color: "from-green/20 to-transparent"
  },
  {
    title: "High Altitude",
    tagline: "Forest-Grown Excellence",
    description: "Cultivated above 1,800m in the pristine highlands of Kaffa",
    image: "/home/hero.jpg",
    color: "from-brown/20 to-transparent"
  }
];

export function ParallaxShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-white via-cream to-white overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 -left-20 w-96 h-96 bg-green/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-brown/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-green font-semibold text-lg mb-3 tracking-wide uppercase"
          >
            Ethiopian Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-brown mb-6"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brown/70 max-w-3xl mx-auto"
          >
            Experience the true taste of origin through our commitment to quality,
            traceability, and the timeless traditions of Kaffa.
          </motion.p>
        </motion.div>

        {/* Layered Feature Cards */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const featureRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: featureProgress } = useScroll({
              target: featureRef,
              offset: ["start end", "end start"]
            });

            const imageY = useTransform(featureProgress, [0, 1], [50, -50]);
            const imageScale = useTransform(featureProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
            const contentY = useTransform(featureProgress, [0, 1], [30, -30]);

            return (
              <motion.div
                key={index}
                ref={featureRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`relative grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image Side */}
                <motion.div
                  style={{ y: imageY, scale: imageScale }}
                  className={`relative ${isEven ? 'lg:col-start-1' : 'lg:col-start-2'}`}
                >
                  <div className="relative h-[500px] lg:h-[600px]">
                    {/* Main Image */}
                    <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${feature.color}`} />
                    </div>

                    {/* Floating Number */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className={`absolute ${
                        isEven ? '-right-8 -top-8' : '-left-8 -top-8'
                      } w-32 h-32 rounded-3xl bg-white shadow-2xl flex items-center justify-center`}
                    >
                      <span className="text-6xl font-bold bg-gradient-to-br from-green to-brown bg-clip-text text-transparent">
                        0{index + 1}
                      </span>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`absolute ${
                        isEven ? '-left-16 bottom-16' : '-right-16 bottom-16'
                      } w-32 h-32 border-4 border-green/20 rounded-full`}
                    />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  style={{ y: contentY }}
                  className={`space-y-6 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-green font-semibold text-sm uppercase tracking-wider mb-3">
                      {feature.tagline}
                    </p>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-6 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-brown/70 leading-relaxed mb-8">
                      {feature.description}
                    </p>
                  </motion.div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1 bg-gradient-to-r from-green to-brown rounded-full"
                    style={{ transformOrigin: isEven ? 'left' : 'right' }}
                  />

                  {/* Feature Highlights */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-3 pt-4"
                  >
                    <div className="px-5 py-2 bg-white rounded-full shadow-md border border-brown/10">
                      <span className="text-sm font-medium text-brown">Premium Quality</span>
                    </div>
                    <div className="px-5 py-2 bg-white rounded-full shadow-md border border-brown/10">
                      <span className="text-sm font-medium text-brown">Certified</span>
                    </div>
                    <div className="px-5 py-2 bg-white rounded-full shadow-md border border-brown/10">
                      <span className="text-sm font-medium text-brown">Sustainable</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-green to-brown rounded-full">
            <a
              href="/our-coffee"
              className="flex items-center gap-3 px-10 py-5 bg-white rounded-full font-bold text-brown hover:bg-cream transition-all duration-300 group"
            >
              <span className="text-lg">Explore Our Collection</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
