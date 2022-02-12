import { CONFIG_ENV } from '../config'
import { bootstrap } from './bootstrap'

// Bootstrap
if (!CONFIG_ENV.isTestEnv) {
  void bootstrap()
}

// For tests
export default bootstrap
