import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'

import viteConfig from './vite.config'

const PATH_SETUP = './config/setupTests.ts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: [PATH_SETUP],
      css: false,
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'html'],
        exclude: [...configDefaults.exclude, PATH_SETUP],
      },
    },
  }),
)
