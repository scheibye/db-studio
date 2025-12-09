import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const mainHeroSectionType = defineType({
  name: 'mainHeroSection',
  title: 'Main Hero Section',
  type: 'object',
  icon: EyeOpenIcon,

  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      description: 'An image that will be used as a background',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Main Hero Section',
      }
    },
  },
})
