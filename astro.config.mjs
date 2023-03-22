import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";

import htmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  outDir: "./build",
  integrations: [tailwind(), compress({
    css: false,
			html: false,
			img: false,
			js: false,
			svg: false,
  }), htmlMinify({
    reportCompressedSize: true,
    htmlTerserMinifierOptions: {
      removeComments: false,
      preserveLineBreaks: true,
      collapseWhitespace: true,
      noNewlinesBeforeTagClose: true
    }
  })],
  adapter: vercel()
});