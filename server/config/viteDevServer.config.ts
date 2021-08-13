import { InlineConfig } from 'vite'

export const CONFIG_VITE_DEV_SERVER: InlineConfig = {
  clearScreen: false,
  server: {
    middlewareMode: 'ssr',
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
}
