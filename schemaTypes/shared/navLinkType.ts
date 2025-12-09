import { defineField, defineType } from 'sanity'

export const navLinkType = defineType({
  name: 'navLink',
  title: 'Navigation link',
  type: 'object',

  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'type',
      title: 'Link type',
      type: 'string',
      initialValue: 'internal',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'internalUrl',
      title: 'Internal URL',
      type: 'url',
      hidden: ({ parent }) => parent?.type !== 'internal',
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),

    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({ parent }) => parent?.type !== 'external',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
