import { hydrateRoot } from 'react-dom/client'

import { renderTemplate } from './entries/signUp.entry'

// Bootstrap

const container = document.getElementById('root') ?? document.body
hydrateRoot(container, renderTemplate())
