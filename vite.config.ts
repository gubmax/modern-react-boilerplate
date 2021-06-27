import path from 'path'
import { UserConfigFn } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

/**
 * @link https://vitejs.dev/config/
 */
const config: UserConfigFn = ({ mode }) => {
  return {
    plugins: [
      reactRefresh(),
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, '/src'),
        server: path.resolve(__dirname, '/server'),
      },
    },
    esbuild: {
      jsxFactory: 'jsx',
      jsxInject: 'import { jsx } from "@emotion/react"',
    },
    build: {
      minify: false
    }
  }
}

export default config
