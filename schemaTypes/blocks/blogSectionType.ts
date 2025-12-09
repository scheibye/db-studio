import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const blogSectionType = defineType({
  name: 'blogSection',
  title: 'Blog Section',
  type: 'object',
  icon: DocumentTextIcon,

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
        title: title || 'Blog Section',
      }
    },
  },
})
