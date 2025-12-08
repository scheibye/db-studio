export default {
  name: 'videoSection',
  title: 'Video Sektion',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Overskrift',
      type: 'string',
    },
    {
      name: 'lead',
      title: 'Stor tekst / intro',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Brødtekst (mindre)',
      type: 'text',
    },
    {
      name: 'ctaLabel',
      title: 'Knap label',
      type: 'string',
    },
    {
      name: 'ctaHref',
      title: 'Knap link (fx /om-os)',
      type: 'string',
    },
    {
      name: 'videoUrl',
      title: 'YouTube / MP4 URL',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https'],
        }),
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }: { title?: string }) {
      return {
        title: `Video – ${title || 'Uden titel'}`,
      }
    },
  },
}
