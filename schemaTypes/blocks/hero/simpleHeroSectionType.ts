import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const simpleHeroSectionType = defineType({
  name: 'simpleHeroSection',
  title: 'Simple Hero Section',
  type: 'object',
  icon: EyeOpenIcon,

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
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Simple Hero Section',
      }
    },
  },
})
