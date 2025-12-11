"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { motion } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown mb-6">
              CONTACT US
            </h1>
            <p className="text-xl md:text-2xl text-brown font-light max-w-3xl mx-auto leading-relaxed">
              Let's Start a Conversation About Quality Coffee
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-brown font-semibold mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-brown/20 focus:border-green focus:ring-green"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-brown font-semibold mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-brown/20 focus:border-green focus:ring-green"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-brown font-semibold mb-2 block">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-brown/20 focus:border-green focus:ring-green"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-brown font-semibold mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-brown/20 focus:border-green focus:ring-green"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-brown font-semibold mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-brown/20 focus:border-green focus:ring-green min-h-[150px]"
                    placeholder="Tell us about your coffee needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full relative overflow-hidden hover:scale-[1.02] active:scale-[0.98] text-brown hover:text-white rounded-full py-6 text-base font-semibold transition-all duration-300 group"
                  style={{ backgroundColor: 'rgba(10, 212, 97, 0.2)' }}
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ borderRadius: '9999px' }}></div>
                </Button>
              </form>
            </motion.div>

            {/* Right - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Office Location */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-2">Office Location</h3>
                    <p className="text-brown/80 font-light leading-relaxed">
                      Addis Ababa, Ethiopia<br />
                      Kaffa Region
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-2">Email</h3>
                    <a
                      href="mailto:info@awcoffee.com"
                      className="text-brown/80 font-light hover:text-green transition-colors"
                    >
                      info@awcoffee.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-2">Phone</h3>
                    <a
                      href="tel:+251900000000"
                      className="text-brown/80 font-light hover:text-green transition-colors"
                    >
                      +251 900 000 000
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-2">Business Hours</h3>
                    <p className="text-brown/80 font-light leading-relaxed">
                      Monday - Friday: 8:00 AM - 5:00 PM EAT<br />
                      Saturday: 9:00 AM - 1:00 PM EAT<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brown/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brown mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center hover:bg-green transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center hover:bg-green transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center hover:bg-green transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative w-full h-[500px] overflow-hidden" style={{ borderRadius: '30px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02153253514!2d38.61333034664393!3d8.963479604295102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AW Coffee Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
