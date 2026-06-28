import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    })
    // Do NOT put redirectMissingRoutes() here unless it's properly defined as an integration
  ],

  output: 'static',
  compressHTML: false,

  // You can add redirects manually here:
  // redirects: {
  //   '/old': '/new',
  // },

  vite: {
    base: './',
    plugins: [
      AutoImport({
        imports: [
          'react',
          { '@/lib/utils': ['cn'] }
        ],
        dts: 'src/auto-imports.d.ts',
      })
    ],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    build: {
      target: 'es2022',
      minify: 'esbuild',
      chunkSizeWarningLimit: 10000,
    },
    esbuild: {
      target: 'esnext',
    },
    optimizeDeps: {
      force: false
    },
  }
});