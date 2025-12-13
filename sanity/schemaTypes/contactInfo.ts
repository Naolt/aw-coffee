import { defineField, defineType } from 'sanity'

export const contactInfoType = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'officeLocation',
      title: 'Office Location',
      type: 'text',
      description: 'Full office address',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
            },
            {
              name: 'hours',
              title: 'Hours',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'day',
              subtitle: 'hours',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Go to Google Maps > Share > Embed a map > Copy the src URL from the iframe code',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'phone',
    },
  },
})
