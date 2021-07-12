import { InlineConfig } from 'vite'

export const ENV_TEST = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD
export const ENV_PROD = process.env.NODE_ENV === 'production'

export const SERVER_PORT = 3000

export const VITE_SERVER_CONFIG: InlineConfig = {
  server: {
    middlewareMode: 'ssr',
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
}
