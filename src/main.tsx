import { StrictMode } from 'react'
import { createRoot } from 'react-dom'

import { App } from 'src/components/layout'

const container = document.getElementById('root') || document.body
const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
