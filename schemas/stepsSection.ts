const stepsSection = {
  name: "stepsSection",
  title: "Steps sektion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Sektionstitel",
      type: "string",
      description: "Fx 'Sådan foregår det'",
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Titel",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              title: "Beskrivelse",
              type: "text",
            },
          ],
          preview: {
            select: { title: "label", subtitle: "description" },
          },
        },
      ],
    },
  ],
};

export default stepsSection;
