import { hydrateRoot } from 'react-dom'

import { renderInternalErrorTemplate } from './entries/internalError.entry'

// Bootstrap

const container = document.getElementById('root') || document.body
const root = hydrateRoot(container, [])

root.render(renderInternalErrorTemplate())
