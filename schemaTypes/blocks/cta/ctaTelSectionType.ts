import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const ctaTelSectionType = defineType({
  name: 'ctaTelSection',
  title: 'CTA - Tel Section',
  type: 'object',
  icon: CommentIcon,

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'CTA - Tel Section',
      }
    },
  },
})
