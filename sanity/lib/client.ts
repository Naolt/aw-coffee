import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'azl4iirx',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
