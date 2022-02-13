import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  coverageDirectory: '<rootDir>/coverage',
  projects: ['<rootDir>/packages/client', '<rootDir>/packages/server'],
  verbose: true,
}

export default config
