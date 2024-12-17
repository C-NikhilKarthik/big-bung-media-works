export const homeDifference = {
  name: "home-difference",
  title: "Home Difference",
  type: "document",
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "string" }],
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
  ],
};
