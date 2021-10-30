import { resolve } from 'path'
import { UserConfig } from 'vite'

import baseConfig from '../vite.config'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  ...baseConfig,
  publicDir: false,
  clearScreen: false,
  build: {
    ...baseConfig.build,
    ssr: true,
    outDir: resolve(__dirname, '../dist/server'),
    rollupOptions: {
      input: resolve(__dirname, './renderClient.tsx')
    }
  },
  server: {
    fs: { strict: true },
    middlewareMode: 'ssr',
  },
}

export default config
