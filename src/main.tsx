import { createRoot, hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'src/components/layout/App'

const container = document.getElementById('root') || document.body
// TODO: Remove ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const initRoot = import.meta.hot ? createRoot : hydrateRoot
const root = initRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
