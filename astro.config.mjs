import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  outDir: "./build",
  integrations: [tailwind(), compress({
    html: true,
    path: "./build"
  }), frontendistahtmlMinify()],
  adapter: vercel()
});