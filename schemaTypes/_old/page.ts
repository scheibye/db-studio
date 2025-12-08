const page = {
  name: 'page',
  title: 'Side',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sektioner',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'uspSection' },
        { type: 'stepsSection' },
        { type: 'faqSection' },
        { type: 'trustpilotSection' },
        { type: 'aboutUsSection' },
        { type: 'applyNowSection' },
        { type: 'blogPostSection' },
        { type: 'ctaProductsSection' },
        { type: 'videoSection' },
        // flere sektionstyper kommer senere
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
}

export default page
