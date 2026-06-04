import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const isGhPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: 'https://www-6wp.pages.dev',
  base: isGhPages ? '/www' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
