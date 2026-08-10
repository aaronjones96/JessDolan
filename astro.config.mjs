// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://jessdolan.netlify.app",
  adapter: netlify(),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/top-secret") && !page.includes("/404"),
    }),
    pagefind(),
    icon(),
    react(),
    markdoc(),
    keystatic(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.fontsource(),
        name: "IBM Plex Mono",
        cssVariable: "--font-mono",
      },
    ],
  },
});
