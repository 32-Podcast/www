import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGhPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGhPages ? 'https://32-podcast.github.io' : 'https://www-6wp.pages.dev',
  base: isGhPages ? '/www' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
