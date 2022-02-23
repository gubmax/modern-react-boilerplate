import { resolve } from 'path'
import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { visualizer } from 'rollup-plugin-visualizer'

import { PATH_DIST_CLIENT } from '../../shared/constants/paths'
import { HtmlEntries } from '../../server/src/common/constants/html'
import manifest from '../public/manifest.json'

const VISUALIZE_MODE = !!process.env.VISUALIZE_MODE

const ENTRY_PATH_MAIN = resolve(__dirname, `../src/${HtmlEntries.MAIN}.tsx`)
const ENTRY_PATH_INTERNAL_ERROR = resolve(__dirname, `../src/${HtmlEntries.INTERNAL_ERROR}.tsx`)

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  publicDir: resolve(__dirname, '../public'),
  plugins: [
    react(),
    vanillaExtractPlugin(),
    !VISUALIZE_MODE && VitePWA({ manifest, registerType: 'autoUpdate' }),
    VISUALIZE_MODE &&
      visualizer({
        filename: '../../visualizer/stats.html',
        open: true,
        gzipSize: true,
        projectRoot: resolve(__dirname, '../../'),
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      client: resolve(__dirname, '../../client'),
      shared: resolve(__dirname, '../../shared'),
    },
  },
  build: {
    manifest: !VISUALIZE_MODE,
    emptyOutDir: !VISUALIZE_MODE,
    outDir: resolve(__dirname, `../../../${PATH_DIST_CLIENT}`),
    rollupOptions: {
      input: {
        [HtmlEntries.MAIN]: ENTRY_PATH_MAIN,
        [HtmlEntries.INTERNAL_ERROR]: ENTRY_PATH_INTERNAL_ERROR,
      },
    },
  },
}

export default config
