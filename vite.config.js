import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'umd'],
      name: 'brazil-map',
    },
    rollupOptions: {
      input: {
        index: './src/index.ts',
      },
      output: [
        {
          format: 'es',
          entryFileNames: 'brazil-map.[format].js',
          name: 'brazil-map',
        },
        {
          format: 'es',
          entryFileNames: 'brazil-map.[format].min.js',
          name: 'brazil-map',
          plugins: [
            // Minify JS
            terser({
              ecma: 2021,
              module: true,
              warnings: true,
            }),
          ],
        },
        {
          format: 'umd',
          entryFileNames: 'brazil-map.[format].js',
          name: 'brazil-map',
        },
        {
          format: 'umd',
          entryFileNames: 'brazil-map.[format].min.js',
          name: 'brazil-map',
          plugins: [
            // Minify JS
            terser({
              ecma: 2021,
              module: true,
              warnings: true,
            }),
          ],
        },
      ],
      plugins: [
        // Resolve bare module specifiers to relative paths
        resolve(),
        // Minify HTML template literals
        minifyHTML.default(),
        // Print bundle summary
        summary(),
      ],
      onwarn(warning) {
        console.warn(`${warning.message}`);
      },
    },
  },
});
