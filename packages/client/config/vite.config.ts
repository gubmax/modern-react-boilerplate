import { resolve } from 'path'
import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import { PATH_DIST_CLIENT } from '../../shared/constants/paths'
import { HtmlEntries } from '../../server/src/common/constants'
import manifest from '../public/manifest.json'

const ENTRY_PATH_MAIN = resolve(__dirname, `../src/${HtmlEntries.MAIN}.tsx`)
const ENTRY_PATH_INTERNAL_ERROR = resolve(__dirname, `../src/${HtmlEntries.INTERNAL_ERROR}.tsx`)

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  publicDir: resolve(__dirname, '../public'),
  plugins: [react(), vanillaExtractPlugin(), VitePWA({ manifest, registerType: 'autoUpdate' })],
  resolve: {
    alias: {
      client: resolve(__dirname, '../../client'),
      shared: resolve(__dirname, '../../shared'),
    },
  },
  build: {
    manifest: true,
    emptyOutDir: true,
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
