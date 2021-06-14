import { StrictMode } from 'react'
import { render } from 'react-dom'

import { App } from 'src/components/layout'
import './index.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
