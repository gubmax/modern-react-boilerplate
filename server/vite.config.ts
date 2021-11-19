import { resolve } from 'path'
import { UserConfig } from 'vite'
import reactRefreshPlugin from '@vitejs/plugin-react-refresh'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { HtmlEntries } from './common/constants'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  publicDir: false,
  clearScreen: false,
  plugins: [
    vanillaExtractPlugin(),
    reactRefreshPlugin(),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, '../src'),
      server: __dirname,
      scripts: resolve(__dirname, '../scripts'),
      shared: resolve(__dirname, '../shared'),
    },
  },
  build: {
    ssr: true,
    outDir: resolve(__dirname, '../dist/server'),
    rollupOptions: {
      input: {
        [HtmlEntries.MAIN]: resolve(__dirname, `../src/entries/${HtmlEntries.MAIN}.server.entry.tsx`),
        [HtmlEntries.INTERNAL_ERROR]: resolve(__dirname, `../src/entries/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`),
      }
    }
  },
  server: {
    fs: { strict: true },
    middlewareMode: 'ssr',
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
}

export default config
