import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ethanpalm.com',

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  integrations: [mdx(), sitemap()],
});
