import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "server",
  outDir: "./build",
  integrations: [tailwind(), 
    compress({
      html: true,
      path: "./build",
    })
  ],
  adapter: vercel(),
});
