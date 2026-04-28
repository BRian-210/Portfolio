import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import AutoImport from 'unplugin-auto-import/vite';

// import { reactNodeTransform, astroSourceIntegration } from './scripts/inject-source-info';   // ← Commented out

// ... (keep your collectRoutes and redirectMissingRoutes functions as they are)

export default defineConfig({
  integrations: [
    react(),                       // ← Fixed
    tailwind({
      applyBaseStyles: false
    }),
    // astroSourceIntegration(),   // ← Remove or comment if it also causes issues
    redirectMissingRoutes()
  ],
  output: 'static',
  compressHTML: false,

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