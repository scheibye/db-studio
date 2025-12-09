import { defineField, defineType } from 'sanity'
import { DocumentVideoIcon } from '@sanity/icons'

export const textWithVideoSectionType = defineType({
  name: 'textWithVideoSection',
  title: 'Text with Video Section',
  type: 'object',
  icon: DocumentVideoIcon,

  fields: [
    defineField({
      name: 'video',
      title: 'YouTube Video URL',
      type: 'url',
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
      name: 'underlinedText',
      title: 'Underlined text',
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
        title: title || 'Text with Video Section',
      }
    },
  },
})
