import fetch from 'node-fetch'

import { CONFIG_ENV } from './config'
import { bootstrap } from './bootstrap'

// Fetch
;(global.fetch as unknown) = fetch

// Bootstrap
if (!CONFIG_ENV.isTestEnv) {
  void bootstrap()
}

// For tests
export default bootstrap
