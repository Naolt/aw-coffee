"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const journeySteps = [
  {
    number: "01",
    title: "Farm Selection",
    subtitle: "Kaffa Highlands",
    description: "We partner with select farms in Kaffa, Ethiopia - the birthplace of coffee. High-elevation, forest-grown Arabica with centuries of heritage.",
    image: "/home/unique1.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Harvest & Processing",
    subtitle: "Hand-Picked Excellence",
    description: "Only ripe cherries are hand-picked during peak season. Processed using traditional washed and natural methods to preserve unique flavor profiles.",
    image: "/home/unique2.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Quality Grading",
    subtitle: "Grade 1 Certification",
    description: "Rigorous quality control ensures only Grade 1 specialty coffee makes the cut. Multiple checkpoints verify size, density, and defect-free beans.",
    image: "/home/unique3.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Export & Delivery",
    subtitle: "Direct to Your Roastery",
    description: "Traceable shipping with full documentation. From our farms to your facility, every step is transparent and quality-guaranteed.",
    image: "/home/hero.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  }
];

export function CoffeeJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white">
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
            The Journey of Our Coffee
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            From the highlands of Kaffa to your cup, every step is a testament to quality,
            tradition, and excellence.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-brown/10 -translate-y-1/2 hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-green to-brown"
              initial={{ width: "0%" }}
              whileInView={{ width: `${(activeStep / (journeySteps.length - 1)) * 100}%` }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            {journeySteps.map((step, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center text-center transition-all duration-300 ${
                  activeStep === index ? 'scale-110' : 'scale-100 hover:scale-105'
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-green text-white shadow-lg shadow-green/30'
                      : 'bg-white border-2 border-brown/20 text-brown hover:border-green hover:text-green'
                  }`}
                >
                  {step.icon}
                </div>

                {/* Step Number */}
                <span
                  className={`text-sm font-bold mb-2 transition-colors ${
                    activeStep === index ? 'text-green' : 'text-brown/40'
                  }`}
                >
                  {step.number}
                </span>

                {/* Step Title */}
                <h3
                  className={`text-sm md:text-base font-semibold transition-colors ${
                    activeStep === index ? 'text-brown' : 'text-brown/60'
                  }`}
                >
                  {step.title}
                </h3>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden group">
            <Image
              src={journeySteps[activeStep].image}
              alt={journeySteps[activeStep].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent" />

            {/* Number Badge */}
            <div className="absolute bottom-6 left-6 text-8xl font-bold text-white/20">
              {journeySteps[activeStep].number}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-green font-semibold text-lg mb-2">
                {journeySteps[activeStep].subtitle}
              </p>
              <h3 className="text-4xl md:text-5xl font-bold text-brown mb-4">
                {journeySteps[activeStep].title}
              </h3>
            </div>

            <p className="text-lg text-brown/70 leading-relaxed">
              {journeySteps[activeStep].description}
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 pt-6">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : journeySteps.length - 1))}
                className="w-12 h-12 rounded-full border-2 border-brown/20 flex items-center justify-center text-brown hover:border-green hover:text-green transition-all hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < journeySteps.length - 1 ? prev + 1 : 0))}
                className="w-12 h-12 rounded-full bg-green text-white flex items-center justify-center hover:bg-green/90 transition-all hover:scale-110 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
