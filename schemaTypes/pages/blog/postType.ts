import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,

  groups: [
    { name: 'meta', title: 'Meta' },
    { name: 'content', title: 'Content' },
  ],

  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'meta',
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
      name: 'intro',
      title: 'Intro',
      type: 'text',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      media: 'image',
      title: 'seo.title',
      subtitle: 'publishedAt',
    },
    prepare({ title, media, subtitle }) {
      return {
        media: media || DocumentTextIcon,
        title: title || 'Untitled post',
        subtitle: subtitle || 'No published date',
      }
    },
  },
})
