// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://j-r-j.github.io',
  base: '/blue-ox-tree-care/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
