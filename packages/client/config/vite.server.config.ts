import { UserConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import { PATH_DIST_SERVER } from '../../shared/constants/paths'
import { HtmlEntries } from '../../server/src/common/constants/html'

const ENTRY_PATH_MAIN = resolve(__dirname, `../src/entries/${HtmlEntries.MAIN}.server.entry.tsx`)
const ENTRY_PATH_INTERNAL_ERROR = resolve(
  __dirname,
  `../src/entries/${HtmlEntries.INTERNAL_ERROR}.entry.tsx`,
)

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  publicDir: false,
  clearScreen: false,
  plugins: [vanillaExtractPlugin(), react()],
  resolve: {
    alias: {
      client: resolve(__dirname, '../../client'),
      server: resolve(__dirname, '../../server'),
      shared: resolve(__dirname, '../../shared'),
    },
  },
  build: {
    ssr: true,
    emptyOutDir: true,
    outDir: resolve(__dirname, `../../../${PATH_DIST_SERVER}`),
    rollupOptions: {
      input: {
        [HtmlEntries.MAIN]: ENTRY_PATH_MAIN,
        [HtmlEntries.INTERNAL_ERROR]: ENTRY_PATH_INTERNAL_ERROR,
      },
    },
  },
  server: {
    middlewareMode: 'ssr',
    fs: { strict: true },
  },
}

export default config
