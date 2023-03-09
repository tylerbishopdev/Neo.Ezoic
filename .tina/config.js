import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7271aecf-40ff-45f1-bbf7-f270e47a7568", // Get this from tina.io
  token: "cd8ab2ad30bb2cbfe125448fa82e9a3167da58c0", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            label: "Featured Image",
            name: "featuredImage",
            type: "image",
            parse: (media) => `/images/${media.filename}`,
            uploadDir: () => `/images/`,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: "Author",
            name: "author",
            type: "string",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            label: "Categories",
            name: "categories",
            type: "string",
            list: true,
            options: [
              {
                value: "exploreai",
                label: "Explore AI",
              },
              {
                value: "discover",
                label: "New Tricks",
              },
              {
                value: "examples",
                label: "Examples",
              },
              {
                value: "docs",
                label: "Docs",
              },
            ],
          },
          {
            label: "Tags",
            name: "tags",
            type: "string",
            list: true,
            options: [
              {
                value: "article",
                label: "article",
              },
              {
                value: "resource",
                label: "resource",
              },
              {
                value: "video",
                label: "video",
              },
              {
                value: "example",
                label: "example",
              },
            ],
          },
          {
            label: "Featured",
            name: "featured",
            type: "boolean",
          },
        ],
      },
    ],
  },
});
