import { defineField, defineType } from 'sanity'
import { RocketIcon } from '@sanity/icons'

export const missionSectionType = defineType({
  name: 'missionSection',
  title: 'Mission Section',
  type: 'object',
  icon: RocketIcon,

  fields: [
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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      validation: (Rule) => Rule.required().length(2),

      of: [
        defineField({
          name: 'section',
          type: 'object',
          fields: [
            defineField({
              name: 'subHeading',
              title: 'Subheading',
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
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Mission Section',
      }
    },
  },
})
