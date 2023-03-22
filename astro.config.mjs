import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import htmlMinify from "@frontendista/astro-html-minify";

import htmlMinifier from "astro-html-minifier";

// https://astro.build/config
export default defineConfig({
  output: "server",
  outDir: "./build",
  integrations: [tailwind(), compress(), htmlMinify(), htmlMinifier()],
  adapter: vercel()
});