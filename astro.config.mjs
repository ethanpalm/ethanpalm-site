import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

export default defineConfig({

	site: 'https://ethanpalm.com',
	integrations: [mdx(), sitemap(), svelte()],

	assetsInclude: ["**/*.yaml"],
});
