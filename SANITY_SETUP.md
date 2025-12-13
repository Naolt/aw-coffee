# Sanity CMS Setup Guide

## What's Been Set Up

Sanity CMS has been integrated into your AW Coffee website to manage:
- **Gallery Images** - Upload and organize coffee farm photos
- **Testimonials** - Manage client testimonials
- **Contact Information** - Update contact details
- **Team Members** - Add/edit team bios and photos

## Next Steps to Complete Setup

### 1. Create a Sanity Account & Project

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Sign up with Google or GitHub
3. Create a new project:
   - Click "Create Project"
   - Name it "AW Coffee"
   - Choose "production" dataset
   - Note your **Project ID** (you'll need this)

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Sanity credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID="abc123xyz"  # Your project ID from step 1
   NEXT_PUBLIC_SANITY_DATASET="production"
   ```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Access Sanity Studio

1. Open your browser to: [http://localhost:3000/studio](http://localhost:3000/studio)
2. Log in with the same Google/GitHub account
3. You'll see your Sanity Studio with 4 content types ready to use!

## Using the Studio

### Gallery Images
1. Click "Gallery Image" → "Create"
2. Upload an image
3. Add a title, caption, and category
4. Mark as "Featured" for prominent display
5. Publish!

### Testimonials
1. Click "Testimonial" → "Create"
2. Add the quote, author name, and role
3. Upload author image
4. Set display order (lower numbers appear first)
5. Publish!

### Contact Information
1. Click "Contact Information"
2. Edit email, phone, address, business hours
3. Add social media links
4. Publish!

### Team Members
1. Click "Team Member" → "Create"
2. Add name, role, and bio
3. Upload photo
4. Set display order
5. Publish!

## Schema Details

### Gallery Image Fields
- **Title** (required) - Internal organization
- **Image** (required) - The photo
- **Caption** - Optional display text
- **Category** (required) - Farm, Processing, People, Coffee, Landscape
- **Featured** - Show prominently
- **Upload Date** - Auto-set

### Testimonial Fields
- **Quote** (required, 10-500 chars) - The testimonial text
- **Author** (required) - Person's name
- **Role** (required) - Job title
- **Company** - Company name
- **Image** (required) - Author photo
- **Display Order** (required) - Sort order
- **Active** - Show/hide on website

### Contact Info Fields
- **Email** (required) - Must be valid email
- **Phone** (required) - Contact number
- **Office Location** (required) - Full address
- **Business Hours** - Array of day/hours
- **Social Media** - Facebook, Instagram, Twitter, LinkedIn URLs

### Team Member Fields
- **Name** (required) - Full name
- **Role** (required) - Job title
- **Bio** (required, max 500 chars) - Description
- **Photo** - Headshot image
- **Display Order** (required) - Sort order
- **Active** - Show/hide on website

## Deployment

When you deploy to Vercel/Netlify:
1. Add the same environment variables in your hosting dashboard
2. The studio will be accessible at `yourdomain.com/studio`
3. Only authenticated users can edit content
4. Public users only see the published website

## Security

- Studio requires Sanity authentication (Google/GitHub)
- No one can edit content without being invited to your Sanity project
- To invite team members: Go to sanity.io/manage → Your Project → Members

## Troubleshooting

**"Project ID not found"**
- Make sure `.env.local` has correct project ID
- Restart dev server after changing env variables

**"Forbidden"**
- Log in to studio with same account used to create project
- Check project permissions at sanity.io/manage

**Can't see studio at /studio**
- Make sure dev server is running (`npm run dev`)
- Clear browser cache and try again

## Next: Fetching Data in Pages

Once you have content in Sanity, you'll update your Next.js pages to fetch and display it. I can help with that next!

Example query:
```typescript
import { client } from '@/sanity/lib/client'

const testimonials = await client.fetch(`*[_type == "testimonial" && active == true] | order(order asc)`)
```
