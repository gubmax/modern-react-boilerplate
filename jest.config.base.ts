import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  rootDir: '../..',
  moduleNameMapper: {
    '^client(.*)$': '<rootDir>/packages/client$1',
    '^server/(.*)$': '<rootDir>/packages/server$1',
    '^shared/(.*)$': '<rootDir>/packages/shared$1',
  },
}

export default config
