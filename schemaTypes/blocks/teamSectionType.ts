import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const teamSectionType = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'object',
  icon: UsersIcon,

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

    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'team',
      title: 'Team',
      type: 'array',
      validation: (Rule) => Rule.required(),

      of: [
        defineField({
          name: 'teamMember',
          title: 'Member',
          type: 'object',
          validation: (Rule) => Rule.required(),

          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'email',
              title: 'Email',
              type: 'email',
            }),
          ],

          preview: {
            select: {
              title: 'heading',
              subtitle: 'role',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled member',
                subtitle: subtitle || 'No role',
              }
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Team Section',
      }
    },
  },
})
