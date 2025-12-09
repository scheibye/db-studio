import { defineField, defineType } from 'sanity'
import { FeedbackIcon } from '@sanity/icons'

export const socialProofSectionType = defineType({
  name: 'socialProofSection',
  title: 'Social Proof Section',
  type: 'object',
  icon: FeedbackIcon,

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      description: 'The image that will be displayed on the right side',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'button',
      type: 'ctaButton',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Social Proof Section',
      }
    },
  },
})
