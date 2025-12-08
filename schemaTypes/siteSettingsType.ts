import { defineField, defineType } from 'sanity'
import { ControlsIcon } from '@sanity/icons'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: ControlsIcon,

  groups: [
    { name: 'general', title: 'General' },
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
  ],

  fields: [
    defineField({
      name: 'general',
      title: 'General information',
      type: 'object',
      group: 'general',
      fields: [
        defineField({
          name: 'siteTitle',
          title: 'Site title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'companyName',
          title: 'Company name',
          description: 'Full legal name of the company',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'companyAddress',
          title: 'Company address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'companyPhone',
          title: 'Company phone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'companyEmail',
          title: 'Company email',
          type: 'email',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'header',
      type: 'header',
      group: 'header',
    }),

    defineField({
      name: 'footer',
      type: 'footer',
      group: 'footer',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
