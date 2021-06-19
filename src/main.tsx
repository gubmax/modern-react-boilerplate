import { StrictMode } from 'react'
import { render } from 'react-dom'

import { App } from 'src/components/layout'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
