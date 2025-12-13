# Contact Page Update Instructions

## Step 1: Update the imports at the top of `/app/contact/page.tsx`

Replace lines 1-7 with:

```typescript
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { client } from "@/sanity/lib/client";
import { CONTACT_INFO_QUERY } from "@/sanity/lib/queries";
import type { ContactInfo } from "@/sanity/lib/types";
```

## Step 2: Update the component state (after line 9)

Replace the `ContactPage` function start with:

```typescript
export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  // Fetch contact info from Sanity
  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const data = await client.fetch<ContactInfo>(CONTACT_INFO_QUERY);
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    }
    fetchContactInfo();
  }, []);
```

## Step 3: Update the Office Location section (around line 152-169)

Replace the hardcoded office location with:

```typescript
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
                    <p className="text-brown/80 font-light leading-relaxed whitespace-pre-line">
                      {contactInfo?.officeLocation || 'Addis Ababa, Ethiopia\nKaffa Region'}
                    </p>
                  </div>
                </div>
              </div>
```

## Step 4: Update the Email section (around line 171-189)

Replace with:

```typescript
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
                      href={`mailto:${contactInfo?.email || 'info@awcoffee.com'}`}
                      className="text-brown/80 font-light hover:text-green transition-colors"
                    >
                      {contactInfo?.email || 'info@awcoffee.com'}
                    </a>
                  </div>
                </div>
              </div>
```

## Step 5: Update the Phone section (around line 191-209)

Replace with:

```typescript
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
                      href={`tel:${contactInfo?.phone || '+251900000000'}`}
                      className="text-brown/80 font-light hover:text-green transition-colors"
                    >
                      {contactInfo?.phone || '+251 900 000 000'}
                    </a>
                  </div>
                </div>
              </div>
```

## Step 6: Update the Business Hours section (around line 211-225)

Replace with:

```typescript
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
                    {contactInfo?.businessHours && contactInfo.businessHours.length > 0 ? (
                      <div className="text-brown/80 font-light leading-relaxed">
                        {contactInfo.businessHours.map((schedule, index) => (
                          <p key={index}>
                            {schedule.day}: {schedule.hours}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-brown/80 font-light leading-relaxed">
                        Monday - Friday: 8:00 AM - 5:00 PM EAT<br />
                        Saturday: 9:00 AM - 1:00 PM EAT<br />
                        Sunday: Closed
                      </p>
                    )}
                  </div>
                </div>
              </div>
```

## Step 7: Update the Social Media section (around line 218-262)

Replace with:

```typescript
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
                      {contactInfo?.socialMedia?.facebook && (
                        <a
                          href={contactInfo.socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center hover:bg-green transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                      )}
                      {contactInfo?.socialMedia?.instagram && (
                        <a
                          href={contactInfo.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center hover:bg-green transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                      {contactInfo?.socialMedia?.twitter && (
                        <a
                          href={contactInfo.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-brown/10 flex items-center justify-center hover:bg-green transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
```

---

## Quick Summary:

1. **Add imports** for Sanity client, queries, and types
2. **Add useEffect** to fetch contact info on page load
3. **Replace hardcoded values** with `contactInfo?.field || 'fallback'` pattern
4. **Conditional social media** - only show icons if URLs exist in Sanity

This way, the page works even if no data is in Sanity (shows fallback values), but updates automatically when you add contact info in the Studio!
