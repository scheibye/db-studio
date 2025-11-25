const uspSection = {
  name: "uspSection",
  title: "USP sektion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Sektionstitel",
      type: "string",
    },
    {
      name: "items",
      title: "USPs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Overskrift",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              title: "Beskrivelse",
              type: "text",
            },
            {
              name: "icon",
              title: "Ikon (valgfrit – fx emoji eller kort label)",
              type: "string",
            },
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    },
  ],
};

export default uspSection;
