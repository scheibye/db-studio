import { defineField, defineType } from 'sanity'

export const ctaButtonType = defineType({
  name: 'ctaButton',
  title: 'Button',
  type: 'object',

  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'href',
      title: 'Href',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),
  ],
})
