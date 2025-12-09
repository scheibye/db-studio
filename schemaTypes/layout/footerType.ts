import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',

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
      validation: (Rule) => Rule.required(),

      fields: [
        defineField({
          name: 'headingleft',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),

      fields: [
        defineField({
          name: 'headingRight',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'ctaButton',
          type: 'ctaButton',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'copyrightText',
          title: 'Copyright text',
          description: 'Copyright text without the year',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'nav',
          title: 'Navigation',
          type: 'object',
          validation: (Rule) => Rule.required(),

          fields: [
            defineField({
              name: 'about',
              title: 'About links',
              type: 'array',
              of: [{ type: 'navLink' }],
              validation: (Rule) => Rule.required().min(1),
            }),

            defineField({
              name: 'social',
              title: 'Social links',
              type: 'array',
              of: [{ type: 'navLink' }],
              validation: (Rule) => Rule.required().min(1),
            }),

            defineField({
              name: 'useful',
              title: 'Useful links',
              type: 'array',
              of: [{ type: 'navLink' }],
              validation: (Rule) => Rule.required().min(1),
            }),

            defineField({
              name: 'legal',
              title: 'Legal links',
              type: 'array',
              of: [{ type: 'navLink' }],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
        }),
      ],
    }),
  ],
})
