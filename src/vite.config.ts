import { resolve } from 'path'
import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import reactRefresh from '@vitejs/plugin-react-refresh'

import baseConfig from '../vite.config'
import manifest from '../public/manifest.json'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  ...baseConfig,
  plugins: [
    ...(baseConfig.plugins ||  []),
    reactRefresh(),
    VitePWA({ manifest, registerType: 'autoUpdate' }),
  ],
  build: {
    ...baseConfig.build,
    manifest: true,
    outDir: resolve(__dirname, '../dist/client'),
    rollupOptions: {
      input: resolve(__dirname, './main.tsx'),
    }
  }
}

export default config
