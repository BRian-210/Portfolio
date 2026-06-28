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
  ],

  output: 'static',
  compressHTML: false,

  vite: {
    base: './',

    // Add this
    server: {
      host: true,
    },

    // Add this
    preview: {
      host: true,
      allowedHosts: [
        "portfolio-11sa.onrender.com"
      ],
    },

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