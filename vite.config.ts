import path from 'path'
import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import manifest from './public/manifest.json'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  plugins: [
    reactRefresh(),
    vanillaExtractPlugin(),
    VitePWA({ manifest, registerType: 'autoUpdate' }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '/src'),
      server: path.resolve(__dirname, '/server'),
      scripts: path.resolve(__dirname, '/scripts'),
      shared: path.resolve(__dirname, '/shared'),
    },
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  }
}

export default config
