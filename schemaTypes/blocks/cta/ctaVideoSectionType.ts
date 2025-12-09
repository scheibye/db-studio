import { defineField, defineType } from 'sanity'
import { VideoIcon } from '@sanity/icons'

export const ctaVideoSectionType = defineType({
  name: 'ctaVideoSection',
  title: 'CTA - Video Section',
  type: 'object',
  icon: VideoIcon,

  groups: [
    { name: 'main', title: 'Main' },
    { name: 'sidebar', title: 'Sidebar' },
  ],

  fields: [
    // --------------------
    // MAIN
    // --------------------
    defineField({
      name: 'main',
      title: 'Main',
      type: 'object',
      group: 'main',

      fields: [
        defineField({
          name: 'video',
          title: 'Video',
          description: 'The video that will be displayed as a background',
          type: 'file',
          options: { accept: 'video/*' },
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
          name: 'link',
          type: 'link',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // --------------------
    // Sidebar
    // --------------------
    defineField({
      name: 'sidebar',
      title: 'Sidebar',
      description: 'The sidebar with a blurred background',
      type: 'object',
      group: 'sidebar',

      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'button',
          type: 'ctaButton',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'main.heading',
    },
    prepare({ title }) {
      return {
        title: title || 'CTA - Video Section',
      }
    },
  },
})
