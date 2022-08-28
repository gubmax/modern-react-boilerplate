import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

import { HtmlEntries } from '../shared/constants/entries'
import { PATH_CLIENT } from '../shared/constants/paths'
import manifest from './public/manifest.json'

const VISUALIZE_MODE = !!process.env.VISUALIZE_MODE

const PATH_ENTRIES = './src/entries'
const PATH_ENTRY_MAIN = `${PATH_ENTRIES}/${HtmlEntries.MAIN}/${HtmlEntries.MAIN}.entry.tsx`
const PATH_ENTRY_SIGN_IN = `${PATH_ENTRIES}/${HtmlEntries.SIGN_IN}/${HtmlEntries.SIGN_IN}.entry.tsx`
const PATH_ENTRY_SIGN_UP = `${PATH_ENTRIES}/${HtmlEntries.SIGN_UP}/${HtmlEntries.SIGN_UP}.entry.tsx`
const PATH_ENTRY_INTERNAL_ERROR = `${PATH_ENTRIES}/${HtmlEntries.INTERNAL_ERROR}/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`
const PATH_ENTRY_NOT_FOUND = `${PATH_ENTRIES}/${HtmlEntries.NOT_FOUND}/${HtmlEntries.NOT_FOUND}.entry.tsx`

/**
 * @link https://vitejs.dev/config/
 */
export default defineConfig({
  publicDir: 'public',
  plugins: [
    react(),
    vanillaExtractPlugin(),
    tsconfigPaths(),
    !VISUALIZE_MODE && VitePWA({ manifest, registerType: 'autoUpdate' }),
    VISUALIZE_MODE &&
      visualizer({
        filename: '../../visualizer/stats.html',
        open: true,
        gzipSize: true,
        projectRoot: '../',
      }),
  ].filter(Boolean),
  build: {
    manifest: !VISUALIZE_MODE,
    emptyOutDir: !VISUALIZE_MODE,
    outDir: `../../dist/${PATH_CLIENT}`,
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
})
