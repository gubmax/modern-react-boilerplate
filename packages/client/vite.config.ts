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
        [HtmlEntries.MAIN]: `${PATH_ENTRIES}/main/main.entry.tsx`,
        [HtmlEntries.SIGN_IN]: `${PATH_ENTRIES}/signIn/signIn.entry.tsx`,
        [HtmlEntries.SIGN_UP]: `${PATH_ENTRIES}/signUp/signUp.entry.tsx`,
        [HtmlEntries.INTERNAL_ERROR]: `${PATH_ENTRIES}/internalError/internalError.entry.tsx`,
        [HtmlEntries.NOT_FOUND]: `${PATH_ENTRIES}/notFound/notFound.entry.tsx`,
      },
    },
  },
})
