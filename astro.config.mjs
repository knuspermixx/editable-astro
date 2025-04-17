// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://knuspermixx.github.io',
	base: 'editable-astro',
	integrations: [mdx(), sitemap()],
});
