import path from 'path'
import { UserConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  plugins: [
    reactRefresh(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '/src'),
      server: path.resolve(__dirname, '/server'),
    },
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
  build: {
    minify: false
  }
}

export default config
