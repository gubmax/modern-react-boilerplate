import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom'

import { App } from 'src/components/layout'

const container = document.getElementById('root') || document.body
const root = hydrateRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
