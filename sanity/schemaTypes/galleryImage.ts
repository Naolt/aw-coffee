import { defineField, defineType } from 'sanity'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption to display with the image',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which the image appears (lower numbers appear first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      order: 'order',
      media: 'image',
    },
    prepare(selection) {
      const { caption, order, media } = selection
      return {
        title: caption || 'Untitled Image',
        subtitle: `Order: ${order}`,
        media,
      }
    },
  },
})
