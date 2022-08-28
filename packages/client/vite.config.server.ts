import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { InlineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { HtmlEntries } from '../shared/constants/entries'
import { PATH_SERVER } from '../shared/constants/paths'

const PATH_ENTRIES = './src/entries'
const PATH_ENTRY_MAIN = `${PATH_ENTRIES}/${HtmlEntries.MAIN}/${HtmlEntries.MAIN}.render.server.tsx`
const PATH_ENTRY_SIGN_IN = `${PATH_ENTRIES}/${HtmlEntries.SIGN_IN}/${HtmlEntries.SIGN_IN}.render.tsx`
const PATH_ENTRY_SIGN_UP = `${PATH_ENTRIES}/${HtmlEntries.SIGN_UP}/${HtmlEntries.SIGN_UP}.render.tsx`
const PATH_ENTRY_INTERNAL_ERROR = `${PATH_ENTRIES}/${HtmlEntries.INTERNAL_ERROR}/${HtmlEntries.INTERNAL_ERROR}.render.tsx`
const PATH_ENTRY_NOT_FOUND = `${PATH_ENTRIES}/${HtmlEntries.NOT_FOUND}/${HtmlEntries.NOT_FOUND}.render.tsx`

/**
 * @link https://vitejs.dev/config/
 */
const inlineConfig: InlineConfig = {
  publicDir: false,
  clearScreen: false,
  plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
  build: {
    ssr: true,
    emptyOutDir: true,
    outDir: `../../dist/${PATH_SERVER}`,
    rollupOptions: {
      input: {
        [HtmlEntries.MAIN]: PATH_ENTRY_MAIN,
        [HtmlEntries.SIGN_IN]: PATH_ENTRY_SIGN_IN,
        [HtmlEntries.SIGN_UP]: PATH_ENTRY_SIGN_UP,
        [HtmlEntries.INTERNAL_ERROR]: PATH_ENTRY_INTERNAL_ERROR,
        [HtmlEntries.NOT_FOUND]: PATH_ENTRY_NOT_FOUND,
      },
    },
  },
  server: {
    middlewareMode: 'ssr',
  },
}

export default inlineConfig
