export default {
  name: 'blogPostSection',
  title: 'Blog Post Sektion',
  type: 'object',
  fields: [
    { name: 'title', title: 'Overskrift', type: 'string' },
    {
      name: 'posts',
      title: 'Indlæg',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titel', type: 'string' },
            { name: 'excerpt', title: 'Uddrag', type: 'text' },
            { name: 'image', title: 'Billede', type: 'image' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }: { title?: string }) {
      return {
        title: `Blog – ${title || 'Uden titel'}`,
      }
    },
  },
}
