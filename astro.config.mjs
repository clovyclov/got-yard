import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gotyardlandscape.com',
  server: {
    port: 3000,
    host: true
  }
});
