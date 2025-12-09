import { defineField, defineType } from 'sanity'

export const headerType = defineType({
  name: 'header',
  title: 'Header',
  type: 'object',

  fields: [
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'array',
      of: [
        defineField({
          name: 'navItem',
          type: 'navLink',
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'ctaButton',
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),
  ],
})
