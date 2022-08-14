import { resolve } from 'node:path'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { UserConfig } from 'vite'

import { HtmlEntries } from '../shared/constants/entries'
import { PATH_SERVER } from '../shared/constants/paths'

const ENTRY_PATH_MAIN = `./src/entries/${HtmlEntries.MAIN}.server.entry.tsx`
const ENTRY_PATH_SIGN_IN = `./src/entries/${HtmlEntries.SIGN_IN}.entry.tsx`
const ENTRY_PATH_SIGN_UP = `./src/entries/${HtmlEntries.SIGN_UP}.entry.tsx`
const ENTRY_PATH_INTERNAL_ERROR = `./src/entries/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`
const ENTRY_PATH_NOT_FOUND = `./src/entries/${HtmlEntries.NOT_FOUND}.entry.tsx`

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  publicDir: false,
  clearScreen: false,
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      client: __dirname,
      server: resolve(__dirname, '../server'),
      shared: resolve(__dirname, '../shared'),
    },
  },
  build: {
    ssr: true,
    emptyOutDir: true,
    outDir: `../../dist/${PATH_SERVER}`,
    rollupOptions: {
      input: {
        [HtmlEntries.MAIN]: ENTRY_PATH_MAIN,
        [HtmlEntries.SIGN_IN]: ENTRY_PATH_SIGN_IN,
        [HtmlEntries.SIGN_UP]: ENTRY_PATH_SIGN_UP,
        [HtmlEntries.INTERNAL_ERROR]: ENTRY_PATH_INTERNAL_ERROR,
        [HtmlEntries.NOT_FOUND]: ENTRY_PATH_NOT_FOUND,
      },
    },
  },
  server: {
    middlewareMode: 'ssr',
    fs: { strict: true },
  },
}

export default config
