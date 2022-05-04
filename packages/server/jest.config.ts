import type { Config } from '@jest/types'

import baseConfig from '../../jest.config.base'

const NAME = 'SERVER'

const config: Config.InitialOptions = {
  ...baseConfig,
  displayName: NAME,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'esbuild-jest',
  },
}

export default config
