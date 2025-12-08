import { defineField, defineType } from 'sanity'
import { BlockElementIcon } from '@sanity/icons'

export const ctaSmallSectionType = defineType({
  name: 'ctaSmallSection',
  title: 'CTA - Small Section',
  type: 'object',
  icon: BlockElementIcon,

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
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
        title: title || 'CTA - Small Section',
      }
    },
  },
})
