import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

	site: 'https://ethanpalm.com',
	integrations: [mdx(), sitemap()],
});
