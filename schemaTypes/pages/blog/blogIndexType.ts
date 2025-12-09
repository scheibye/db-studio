import { defineField, defineType } from 'sanity'
import { DocumentsIcon } from '@sanity/icons'

export const blogIndexType = defineType({
  name: 'blogIndex',
  title: 'Blog index',
  type: 'document',
  icon: DocumentsIcon,

  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'button',
      type: 'ctaButton',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Blog' }
    },
  },
})
