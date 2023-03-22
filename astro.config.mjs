import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), frontendistahtmlMinify()],
  adapter: vercel()
});