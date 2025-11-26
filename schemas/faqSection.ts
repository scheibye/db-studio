const faqSection = {
  name: "faqSection",
  title: "FAQ sektion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Sektionstitel",
      type: "string",
      description: "Fx 'Ofte stillede spørgsmål'",
    },
    {
      name: "items",
      title: "Spørgsmål og svar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Spørgsmål",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "answer",
              title: "Svar",
              type: "text",
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: { title: "question", subtitle: "answer" },
          },
        },
      ],
    },
  ],
};

export default faqSection;
