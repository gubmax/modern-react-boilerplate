import type { Config } from '@jest/types'

import baseConfig from '../../jest.config.base'

const NAME = 'CLIENT'
const CLIENT_PATH = '<rootDir>/packages/client'

const config: Config.InitialOptions = {
  ...baseConfig,
  displayName: NAME,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFilesAfterEnv: [`${CLIENT_PATH}/config/setupTests.ts`],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.css.ts$': `${CLIENT_PATH}/config/cssTransform.js`,
  },
}

export default config
