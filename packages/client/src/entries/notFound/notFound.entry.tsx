import { hydrateRoot } from 'react-dom/client'

import { renderTemplate } from './notFound.render'

// Bootstrap

const container = document.getElementById('root') ?? document.body
hydrateRoot(container, renderTemplate())
