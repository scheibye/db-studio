export default {
  name: 'ctaProductsSection',
  title: 'CTA / Produkter Sektion',
  type: 'object',
  fields: [
    { name: 'title', title: 'Overskrift', type: 'string' },
    { name: 'subtitle', title: 'Underoverskrift', type: 'string' },
    {
      name: 'ctaLabel',
      title: 'Knap label',
      type: 'string',
    },
    {
      name: 'ctaHref',
      title: 'Knap link',
      type: 'string',
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }: { title?: string }) {
      return {
        title: `CTA / Produkter – ${title || 'Uden titel'}`,
      }
    },
  },
}
