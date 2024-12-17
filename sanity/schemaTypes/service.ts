export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      title: "Main Title 1",
      name: "mainTitle1",
      type: "string",
    },
    {
      title: "Main Title 2",
      name: "mainTitle2",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    { title: "Image Main", name: "imageMain", type: "image" },
    { title: "Section Title 1", name: "sectionTitle1", type: "string" },
    { title: "Section Title 2", name: "sectionTitle2", type: "string" },
    {
      title: "Section Description",
      name: "sectionDescription",
      type: "string",
    },
    {
      title: "Section Cards",
      name: "sectionCards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Heading",
              name: "heading",
              type: "string",
            },
            {
              title: "Description",
              name: "description",
              type: "string",
            },
            {
              name: "photo",
              title: "Photo",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      title: "Section 2 Title 1",
      name: "section2Title1",
      type: "string",
    },
    {
      title: "Section 2 Title 2",
      name: "section2Title2",
      type: "string",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      title: "Section 3 Title 1",
      name: "section3Title1",
      type: "string",
    },
    {
      title: "Section 3 Title 2",
      name: "section3Title2",
      type: "string",
    },
    {
      title: "Section 3 Description",
      name: "section3Description",
      type: "string",
    },
    {
      name: "section3Image",
      type: "image",
      title: "Section 3 Image",
    },
    {
      title: "Section 4",
      name: "section4",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Heading",
              name: "heading",
              type: "string",
            },
            {
              title: "Index",
              name: "index",
              type: "number",
            },
            {
              title: "Description",
              name: "description",
              type: "string",
            },
            {
              name: "photo",
              title: "Photo",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "finalPhoto",
      title: "Final Photo",
      type: "image",
    },
    {
      title: "Final Title",
      name: "finalTitle",
      type: "string",
    },
    {
      title: "Final Description",
      name: "finalDescription",
      type: "string",
    },
  ],
};
