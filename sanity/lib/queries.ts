import { groq } from 'next-sanity'

// Contact Information Query
export const CONTACT_INFO_QUERY = groq`*[_type == "contactInfo"][0]{
  _id,
  email,
  phone,
  officeLocation,
  businessHours[]{
    day,
    hours
  },
  socialMedia{
    facebook,
    instagram,
    twitter,
    linkedin
  },
  mapEmbedUrl
}`

// Gallery Images Query with Pagination
// Usage: GALLERY_IMAGES_QUERY.replace('$start', start).replace('$end', end)
export const GALLERY_IMAGES_QUERY = groq`*[_type == "galleryImage"] | order(order asc) [$start...$end]{
  _id,
  caption,
  order,
  "imageUrl": image.asset->url,
  "imageLqip": image.asset->metadata.lqip
}`

// Get total count of gallery images
export const GALLERY_COUNT_QUERY = groq`count(*[_type == "galleryImage"])`

// Testimonials Query
export const TESTIMONIALS_QUERY = groq`*[_type == "testimonial" && active == true] | order(order asc){
  _id,
  quote,
  author,
  role,
  company,
  "imageUrl": image.asset->url
}`

// Team Members Query
export const TEAM_MEMBERS_QUERY = groq`*[_type == "teamMember" && active == true] | order(order asc){
  _id,
  name,
  role,
  bio,
  "photoUrl": photo.asset->url
}`
