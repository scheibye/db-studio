const stepsSection = {
  name: 'stepsSection',
  title: 'Steps sektion',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Sektionstitel',
      type: 'string',
      description: "Fx 'Sådan foregår det'",
    },
    {
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: "Fx 'Det er nemt at komme i gang'",
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Titel',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Beskrivelse',
              type: 'text',
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'description' },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }: { title?: string }) {
      return {
        title: `Steps – ${title || 'Uden titel'}`,
      }
    },
  },
}

export default stepsSection
