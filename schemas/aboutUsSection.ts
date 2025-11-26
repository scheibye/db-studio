export default {
  name: "aboutUsSection",
  title: "About Us Sektion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "text",
      title: "Tekst",
      type: "text",
    },
    {
      name: "image",
      title: "Billede",
      type: "image",
    },
  ],
  preview: {
  select: { title: "title" },
  prepare({ title }: { title?: string }) {
    return {
      title: `Om os – ${title || "Uden titel"}`,
    };
  },
},
};
