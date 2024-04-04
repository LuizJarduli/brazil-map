import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      name: 'BrazilMap',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'brazil-mentioned.js',
      },
    },
  },
});
