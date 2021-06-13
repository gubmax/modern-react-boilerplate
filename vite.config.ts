import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import eslint from '@rollup/plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    { ...eslint(), enforce: 'pre', apply: 'build' },
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '/src'),
      server: path.resolve(__dirname, '/server'),
    },
  }
})
