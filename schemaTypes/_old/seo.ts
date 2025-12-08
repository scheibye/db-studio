const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      description: 'Vises i browser-tab og søgeresultater',
    },
    {
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Kort beskrivelse til søgeresultater',
    },
    {
      name: 'ogImage',
      title: 'Social/OG billede',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}

export default seo
