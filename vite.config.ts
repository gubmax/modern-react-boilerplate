import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import eslint from '@rollup/plugin-eslint'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const preactMode = mode === 'preact'

  return defineConfig({
    plugins: [
      { ...eslint({ throwOnError: true }), enforce: 'pre', apply: 'build' },
      reactRefresh(),
      vanillaExtractPlugin(),
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
  })
}
