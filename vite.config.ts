import path from 'path'
import { UserConfigFn } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfigFn = ({ mode }) => {
  const preactMode = mode === 'preact'

  return {
    plugins: [
      reactRefresh(),
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, '/src'),
        server: path.resolve(__dirname, '/server'),
        ...(preactMode ? {
          react: 'preact/compat',
          'react-dom': 'preact/compat',
        } : {}),
      },
    },
    esbuild: {
      ...(preactMode ? {
          jsxFactory: 'h',
          jsxFragment: 'Fragment',
          jsxInject: 'import { h, Fragment } from "preact"',
        } : {
          jsxInject: 'import React from "react"',
        }),
    },
  }
}

export default config
