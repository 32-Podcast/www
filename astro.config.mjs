import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://32podcast.xyz',
  vite: {
    plugins: [tailwindcss()],
  },
});
