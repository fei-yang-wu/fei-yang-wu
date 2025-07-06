// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Replace with your GitHub Pages URL
  // For user/organization sites: https://<username>.github.io
  // For project sites: https://<username>.github.io/<repository-name>
  site: "https://fei-yang-wu.github.io",

  // If deploying to a project repository, uncomment and set the base path
  base: "/fei-yang-wu",
  output: "static",

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
