const settings = {
  name: 'settings',
  title: 'Indstillinger',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Website titel',
      type: 'string',
    },
    {
      name: 'logoText',
      title: 'Logo tekst',
      type: 'string',
      description: "Fx 'Dansk Boliglån'",
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
    },
    {
      name: 'navigation',
      title: 'Topnavigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    },
    {
      name: 'footerLinks',
      title: 'Footer links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'href' },
          },
        },
      ],
    },
  ],
}

export default settings
