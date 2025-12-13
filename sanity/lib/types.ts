export interface ContactInfo {
  _id: string
  email: string
  phone: string
  officeLocation: string
  businessHours?: Array<{
    day: string
    hours: string
  }>
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
  mapEmbedUrl?: string
}

export interface GalleryImage {
  _id: string
  title: string
  caption?: string
  category: 'farm' | 'processing' | 'people' | 'coffee' | 'landscape'
  featured: boolean
  uploadDate: string
  imageUrl: string
  imageLqip?: string
}

export interface Testimonial {
  _id: string
  quote: string
  author: string
  role: string
  company?: string
  imageUrl: string
}

export interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  photoUrl?: string
}
