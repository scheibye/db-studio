import { defineField, defineType } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const helpCardsSectionType = defineType({
  name: 'helpCardsSection',
  title: 'Help Cards Section',
  type: 'object',
  icon: HelpCircleIcon,

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
      name: 'cards',
      title: 'Cards',
      type: 'array',
      validation: (Rule) => Rule.required().length(4),

      of: [
        defineField({
          name: 'item',
          title: 'Card Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              description: 'The image that will be displayed as a background',
              type: 'image',
              options: { hotspot: true },
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
        title: title || 'Help Cards Section',
      }
    },
  },
})
