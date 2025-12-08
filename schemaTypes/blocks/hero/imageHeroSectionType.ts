import { defineField, defineType } from 'sanity'
import { EyeOpenIcon } from '@sanity/icons'

export const imageHeroSectionType = defineType({
  name: 'imageHeroSection',
  title: 'Image Hero Section',
  type: 'object',
  icon: EyeOpenIcon,

  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      description: 'An image that will be used as a background',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
