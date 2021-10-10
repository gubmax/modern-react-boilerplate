import { InlineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export const CONFIG_VITE_DEV_SERVER: InlineConfig = {
  clearScreen: false,
  plugins: [vanillaExtractPlugin()],
  server: {
    fs: { strict: true },
    middlewareMode: 'ssr',
  },
}
