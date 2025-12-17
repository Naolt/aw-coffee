import { client } from '@/sanity/lib/client';
import { CONTACT_INFO_QUERY } from '@/sanity/lib/queries';

interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

interface ContactInfo {
  email: string;
  socialMedia?: SocialMedia;
}

async function getContactInfo(): Promise<ContactInfo | null> {
  try {
    const data = await client.fetch(CONTACT_INFO_QUERY, {}, { cache: 'no-store' });
    return data;
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
}

export async function OrganizationStructuredData() {
  const contactInfo = await getContactInfo();

  const socialLinks = contactInfo?.socialMedia
    ? Object.values(contactInfo.socialMedia).filter(Boolean)
    : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AW Coffee Export",
    "alternateName": "AW Coffee",
    "url": "https://awcoffeeexport.com",
    "logo": "https://awcoffeeexport.com/logo.png",
    "description": "Premium, traceable, and sustainably grown Ethiopian coffee from Kaffa — the birthplace of Arabica. Direct from our farms to specialty coffee lovers worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ET",
      "addressRegion": "Kaffa"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": contactInfo?.email || process.env.CONTACT_EMAIL || "contact@awcoffeeexport.com"
    },
    ...(socialLinks.length > 0 && { "sameAs": socialLinks })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AW Coffee Export",
    "url": "https://awcoffeeexport.com",
    "description": "Premium Ethiopian coffee from the birthplace of Arabica - Kaffa",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://awcoffeeexport.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ProductStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ethiopian Coffee from Kaffa",
    "description": "Premium, traceable, and sustainably grown Ethiopian Arabica coffee beans from Kaffa — the birthplace of coffee.",
    "brand": {
      "@type": "Brand",
      "name": "AW Coffee Export"
    },
    "category": "Food & Beverages > Coffee",
    "origin": {
      "@type": "Place",
      "name": "Kaffa, Ethiopia"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: { items: { name: string; url: string }[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
