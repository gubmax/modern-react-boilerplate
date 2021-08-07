import fetch from 'node-fetch'

import { ENV_TEST, SERVER_PORT } from './constants'
import { bootstrap } from './bootstrap'

// Fetch
;(global.fetch as unknown) = fetch

// Bootstrap
if (!ENV_TEST) {
  void bootstrap().then((server) => {
    server.listen(SERVER_PORT, () => {
      console.log(`Server is started at http://localhost:${SERVER_PORT}`)
    })
  })
}

// For tests
export default bootstrap
