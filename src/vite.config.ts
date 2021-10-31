import { resolve } from 'path'
import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import manifest from '../public/manifest.json'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  plugins: [
    vanillaExtractPlugin({ devStyleRuntime: 'vanilla-extract' }),
    VitePWA({ manifest, registerType: 'autoUpdate' }),
  ],
  resolve: {
    alias: {
      src: __dirname,
      shared: resolve(__dirname, '../shared'),
    },
  },
  build: {
    manifest: true,
    outDir: resolve(__dirname, '../dist/client'),
    rollupOptions: {
      input: resolve(__dirname, './main.tsx'),
    }
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
}

export default config
