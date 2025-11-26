const heroSection = {
  name: "heroSection",
  title: "Hero sektion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
      validation: (Rule: any) => Rule.required(),
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
 preview: {
  select: { title: "title" },
  prepare({ title }: { title?: string }) {
    return {
      title: `Hero – ${title || "Uden titel"}`,
    };
  },
},

};

export default heroSection;
