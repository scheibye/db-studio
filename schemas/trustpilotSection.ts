const trustpilotSection = {
  name: "trustpilotSection",
  title: "Trustpilot sektion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
      description: "Fx 'TrustScore 4,9 | 112 anmeldelser'",
    },
    {
      name: "ratingText",
      title: "Rating-tekst",
      type: "string",
      description: "Vises under stjernerne. Fx 'TrustScore 4,9 | 112 anmeldelser'",
    },
    {
      name: "stars",
      title: "Antal stjerner",
      type: "number",
      initialValue: 5,
      validation: (Rule: any) => Rule.min(0).max(5),
    },
  ],
  preview: {
    select: {
      title: "title",
      stars: "stars",
    },
    prepare({ title, stars }: { title?: string; stars?: number }) {
      return {
        title: title || "Trustpilot sektion",
        subtitle: stars != null ? `${stars} stjerner` : undefined,
      };
    },
  },
};

export default trustpilotSection;
