import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,

  groups: [
    { name: 'meta', title: 'Meta' },
    { name: 'content', title: 'Content' },
  ],

  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'meta',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'content',
      type: 'pageBuilder',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'slug.current',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled page',
        subtitle: subtitle || 'No slug',
      }
    },
  },
})
