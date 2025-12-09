import { defineField, defineType } from 'sanity'
import { NumberIcon } from '@sanity/icons'

export const stepsSectionType = defineType({
  name: 'stepsSection',
  title: 'Steps Section',
  type: 'object',
  icon: NumberIcon,

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

    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      validation: (Rule) => Rule.required().length(3),

      of: [
        defineField({
          name: 'item',
          title: 'Step Item',
          type: 'object',
          validation: (Rule) => Rule.required(),

          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'link',
              type: 'link',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Steps Section',
      }
    },
  },
})
