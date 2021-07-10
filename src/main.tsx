import { hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'src/components/layout/App'

const container = document.getElementById('root') || document.body
const root = hydrateRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
