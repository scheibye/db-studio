const heroSection = {
  name: "heroSection",
  title: "Hero sektion",
  type: "object",
  fields: [
    {
      name: "eyebrow",
      title: "Overlinje (lille tekst over overskrift)",
      type: "string",
    },
    {
      name: "title",
      title: "Overskrift",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Underoverskrift",
      type: "text",
    },
    {
      name: "primaryCtaLabel",
      title: "Primær knap-tekst",
      type: "string",
    },
    {
      name: "primaryCtaHref",
      title: "Primær knap-link (fx /laan-i-frivaerdi)",
      type: "string",
    },
  ],
};

export default heroSection;
