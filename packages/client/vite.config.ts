import { resolve } from 'node:path'
import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { visualizer } from 'rollup-plugin-visualizer'

import { PATH_CLIENT } from '../shared/constants/paths'
import { HtmlEntries } from '../server/src/common/constants/html'
import manifest from './public/manifest.json'

const VISUALIZE_MODE = !!process.env.VISUALIZE_MODE

const ENTRY_PATH_MAIN = `./src/${HtmlEntries.MAIN}.tsx`
const ENTRY_PATH_INTERNAL_ERROR = `./src/${HtmlEntries.INTERNAL_ERROR}.tsx`

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  publicDir: 'public',
  plugins: [
    react(),
    vanillaExtractPlugin(),
    !VISUALIZE_MODE && VitePWA({ manifest, registerType: 'autoUpdate' }),
    VISUALIZE_MODE &&
      visualizer({
        filename: '../../visualizer/stats.html',
        open: true,
        gzipSize: true,
        projectRoot: '../',
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      client: __dirname,
      shared: resolve(__dirname, '../shared'),
    },
  },
  build: {
    manifest: !VISUALIZE_MODE,
    emptyOutDir: !VISUALIZE_MODE,
    outDir: `../../dist/${PATH_CLIENT}`,
    rollupOptions: {
      input: {
        [HtmlEntries.MAIN]: ENTRY_PATH_MAIN,
        [HtmlEntries.INTERNAL_ERROR]: ENTRY_PATH_INTERNAL_ERROR,
      },
    },
  },
}

export default config
