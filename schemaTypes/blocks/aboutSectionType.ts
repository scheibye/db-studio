import { defineField, defineType } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  icon: InfoOutlineIcon,

  groups: [
    { name: 'left', title: 'Left side' },
    { name: 'right', title: 'Right side' },
  ],

  fields: [
    // --------------------
    // LEFT SIDE
    // --------------------
    defineField({
      name: 'left',
      title: 'Left side content',
      type: 'object',
      group: 'left',

      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
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
          name: 'list',
          title: 'List',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    // --------------------
    // RIGHT SIDE
    // --------------------
    defineField({
      name: 'right',
      title: 'Right side content',
      type: 'object',
      group: 'right',

      fields: [
        defineField({
          name: 'smallTitle',
          title: 'Small title',
          type: 'string',
          initialValue: 'Om os',
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
      ],
    }),
  ],

  preview: {
    select: {
      title: 'right.heading',
    },
    prepare({ title }) {
      return {
        title: title || 'About section',
      }
    },
  },
})
