import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch:"main",

  // Get this from tina.io
  clientId:"c5e98461-4634-4412-a84e-3dcafb6322f2",
  // Get this from tina.io
  token: "f4ed87ece3b8329589a675c88e5ffc21677aa3e4",

  build: {
    outputFolder: "admin",
    publicFolder: "src",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "src",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
