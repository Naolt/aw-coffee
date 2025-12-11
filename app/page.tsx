"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    quote: "Working with AW Coffee was a pleasure. Their team was professional and our Delivery was on time.",
    author: "Michael Setiawan",
    role: "Founder Baku Hantam",
    image: "/home/green.jpg"
  },
  {
    id: 2,
    quote: "The quality of coffee from AW is exceptional. Our customers love the authentic Ethiopian taste and we've seen great growth since partnering with them.",
    author: "Sarah Johnson",
    role: "CEO Coffee House NYC",
    image: "/home/hero.jpg"
  },
  {
    id: 3,
    quote: "AW Coffee has been our trusted supplier for 3 years. Their commitment to sustainability and quality is unmatched in the industry.",
    author: "David Chen",
    role: "Director of Operations, Brew Masters",
    image: "/home/hero.jpg"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-black">
        <Image
          src="/home/hero.jpg"
          alt="AW Coffee Hero"
          fill
          className="object-cover opacity-40"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            {/* Left Aligned Text */}
            <div className="text-white max-w-3xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6">AW Coffee</h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                Born in Kaffa,<br />Brewed for the World
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-light">
                Premium, traceable, and sustainably grown coffee from Kaffa — the origin of Arabica,
                crafted for specialty coffee lovers across the globe.
              </p>
            </div>

            {/* Right Aligned Stats */}
            <div className="mt-12 flex gap-8 md:gap-12 justify-start md:justify-end">
              <div className="text-white text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
                <div className="text-sm md:text-base">more than ten<br />washing station</div>
              </div>
              <div className="text-white text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-sm md:text-base">drying<br />station</div>
              </div>
              <div className="text-white text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-sm md:text-base">permanent<br />workers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-stretch">
            {/* Left - Text Content */}
            <div className="flex flex-col">
              <h2 className="text-brown text-sm font-semibold tracking-wider mb-4">ABOUT AW COFFEE</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-brown mb-6">
                Rooted in Heritage. Crafted with Passion. Shared with the World.
              </h3>
              <div className="space-y-4 text-brown leading-relaxed font-light">
                <p>
                  Founded in 2013 in Bitta Woreda, Kaffa, Ethiopia, Aw Coffee is rooted
                  in the birthplace of Arabica coffee. Established by Asmamaw W/M,
                  the company began with a vision to share Kaffa's rich coffee
                  heritage globally. In just three years, we became a leading supplier
                  in the region and, in 2022, expanded into the export market, shipping
                  specialty coffee to the USA.
                </p>
                <p>
                  Operating from our own farms, including the pioneering Tuga Farm,
                  practices and exceptional quality. At Aw Coffee, we are not just
                  producers; we are stewards of tradition, bringing the authentic taste
                  of Kaffa to the world
                </p>
              </div>
              <Button className="mt-12 hover:bg-green/40 hover:scale-[1.02] active:scale-[0.98] text-brown rounded-full pl-6 pr-2 py-6 text-base flex items-center gap-3 self-start transition-all duration-300 group" style={{ backgroundColor: 'rgba(10, 212, 97, 0.2)' }}>
                GET TO KNOW US MORE
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

            {/* Right - Image */}
            <div className="relative w-full overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
              <Image
                src="/home/home2.jpg"
                alt="AW Coffee About"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-[1.5fr_1fr] gap-12"
          >
            {/* Left Section - Text and Small Images */}
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-bold text-brown mb-12">
                WHAT MAKES US UNIQUE
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-baseline justify-between">
                  <div className="text-5xl">
                    <span className="font-normal text-brown">Origin - </span>
                    <span className="font-light text-black">Guarantee</span>
                  </div>
                  <span className="text-4xl font-bold text-brown opacity-20 ml-4">01</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="text-5xl">
                    <span className="font-normal text-brown">Strict Quality - </span>
                    <span className="font-light text-black">Control</span>
                  </div>
                  <span className="text-4xl font-bold text-brown opacity-20 ml-4">02</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="text-5xl">
                    <span className="font-normal text-brown">Direct - </span>
                    <span className="font-light text-black">Sourcing</span>
                  </div>
                  <span className="text-4xl font-bold text-brown opacity-20 ml-4">03</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div className="text-5xl">
                    <span className="font-normal text-brown">Unmatched - </span>
                    <span className="font-light text-black">Quality</span>
                  </div>
                  <span className="text-4xl font-bold text-brown opacity-20 ml-4">04</span>
                </div>
              </div>

              {/* Bottom - Two Small Square Images */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative w-full aspect-square overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
                  <Image
                    src="/home/unique1.jpg"
                    alt="AW Coffee Feature 1"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative w-full aspect-square overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
                  <Image
                    src="/home/unique2.jpg"
                    alt="AW Coffee Feature 2"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Right - Full Height Image */}
            <div className="relative w-full overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
              <Image
                src="/home/unique3.jpg"
                alt="AW Coffee Unique"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-[2fr_1fr] gap-12 items-center"
          >
            {/* Left - Vision Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">Our Vision</h2>
              <p className="text-xl md:text-2xl text-brown leading-relaxed font-light">
                is To become a globally recognized Ethiopian coffee brand that honours Kaffa's legacy,
                leads sustainable coffee farming, and brings the true taste of Ethiopian coffee to every
                cup around the world.
              </p>
            </div>

            {/* Right - Small Square Image */}
            <div className="relative w-full aspect-square overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
              <Image
                src="/home/map.jpg"
                alt="AW Coffee Vision"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-brown mb-12 uppercase">
            What our users say
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
          >
            {/* Left - Square Image */}
            <div className="relative w-full aspect-square overflow-hidden group cursor-pointer" style={{ borderRadius: '30px' }}>
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Right - Quote and Details */}
            <div className="flex flex-col">
              {/* Navigation Arrows - Top Right */}
              <div className="flex gap-4 justify-end mb-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-green flex items-center justify-center hover:bg-green/80 hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-brown flex items-center justify-center hover:bg-brown/80 hover:scale-110 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Opening Quote */}
              <svg className="w-16 h-16 mb-6" viewBox="0 0 24 24" fill="black">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>

              {/* Testimonial Text */}
              <p className="text-2xl md:text-3xl text-brown font-light leading-relaxed mb-8">
                {testimonials[currentTestimonial].quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brown overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold text-brown">{testimonials[currentTestimonial].author}</div>
                  <div className="text-sm text-brown font-light">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-6">
            Rooted in Kaffa. Crafted for the World.
          </h2>
          <p className="text-xl md:text-2xl text-brown leading-relaxed font-light mb-12">
            AW Coffee delivers high-elevation, forest-grown Ethiopian Arabica with full traceability from farm to export. Taste the heritage, quality, and purity that define Kaffa's legendary coffee.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="hover:bg-green/40 hover:scale-[1.02] active:scale-[0.98] text-brown rounded-full pl-6 pr-2 py-6 text-base flex items-center gap-3 transition-all duration-300 group" style={{ backgroundColor: 'rgba(10, 212, 97, 0.2)' }}>
              Order a sample
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

            <Button className="hover:bg-green/40 hover:scale-[1.02] active:scale-[0.98] text-brown rounded-full pl-6 pr-2 py-6 text-base flex items-center gap-3 transition-all duration-300 group" style={{ backgroundColor: 'rgba(10, 212, 97, 0.2)' }}>
              Explore Our Coffee
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
        </motion.div>
      </section>
    </main>
  );
}
