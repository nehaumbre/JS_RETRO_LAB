import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Using relative paths for easy deployment to GitHub Pages
  server: {
    port: 3000
  }
});
