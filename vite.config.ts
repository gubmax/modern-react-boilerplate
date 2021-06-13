import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, '/src'),
      server: path.resolve(__dirname, '/server'),
    },
  }
})
