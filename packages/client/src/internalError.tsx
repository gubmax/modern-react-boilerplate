import { hydrateRoot } from 'react-dom/client'

import { renderInternalErrorTemplate } from './entries/internalError.entry'

// Bootstrap

const container = document.getElementById('root') ?? document.body
hydrateRoot(container, renderInternalErrorTemplate())
