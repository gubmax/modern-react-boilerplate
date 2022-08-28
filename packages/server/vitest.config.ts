import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'

import viteConfig from '../client/vite.config.server'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'node',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
      },
    },
  }),
)
