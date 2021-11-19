import { resolve } from 'path'
import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import manifest from '../public/manifest.json'
import { HtmlEntries } from '../server/common/constants'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  plugins: [
    vanillaExtractPlugin(),
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
      input: {
        [HtmlEntries.MAIN]: resolve(__dirname, `./${HtmlEntries.MAIN}.tsx`),
        [HtmlEntries.INTERNAL_ERROR]: resolve(__dirname, `./${HtmlEntries.INTERNAL_ERROR}.tsx`),
      }
    }
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
}

export default config
