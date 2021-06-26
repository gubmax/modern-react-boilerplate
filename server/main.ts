import fetch from 'node-fetch'

import { ENV_TEST } from './env'
import { bootstrap } from './bootstrap'

global.fetch = fetch

if (!ENV_TEST) {
  void bootstrap().then((app) => {
    app.listen(3000, () => {
      console.log('Server is started at http://localhost:3000')
    })
  })
}

// For tests
export default bootstrap
