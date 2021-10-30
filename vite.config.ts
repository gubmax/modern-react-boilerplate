import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import { UserConfig } from 'vite'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfig = {
  plugins: [
    vanillaExtractPlugin({ devStyleRuntime: 'vanilla-extract' }),
  ],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      server: resolve(__dirname, 'server'),
      scripts: resolve(__dirname, 'scripts'),
      shared: resolve(__dirname, 'shared'),
    },
  },
  esbuild: {
    jsxInject: 'import React from "react"',
  },
}

export default config
