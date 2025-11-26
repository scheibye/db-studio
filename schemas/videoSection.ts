export default {
  name: "videoSection",
  title: "Video Sektion",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "videoUrl",
      title: "YouTube / MP4 URL",
      type: "url",
    },
  ],
  preview: {
    select: { title: "title" },
  },
};
