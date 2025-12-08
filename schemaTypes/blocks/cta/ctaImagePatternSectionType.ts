import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const ctaImagePatternSectionType = defineType({
  name: 'ctaImagePatternSection',
  title: 'CTA - Image Pattern Section',
  type: 'object',
  icon: ImageIcon,

  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'smallTitle',
      title: 'Small title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

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
        title: title || 'CTA - Image Pattern Section',
      }
    },
  },
})
