import { hydrateRoot } from 'react-dom'
// import { registerSW } from 'virtual:pwa-register'

import { MARK_SERVER_SIDE_PROPS } from 'shared/constants'
import { App } from './components/layout'
import { BrowserRouter } from './components/auxiliary'
import { ServerSideProps } from './common/contexts'
import { reportWebVitals } from './infra/http'

// Server-side props

const serverSideProps: ServerSideProps = window[MARK_SERVER_SIDE_PROPS] || {}

// Bootstrap

const container = document.getElementById('root') || document.body
const root = hydrateRoot(container)

root.render(
  <BrowserRouter>
    <App serverSideProps={serverSideProps} />
  </BrowserRouter>,
)

// Service Worker
// registerSW()

// Web Vitals
if (process.env.NODE_ENV === 'production') {
  // If you want to start measuring performance in your app,
  // pass a function to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint.
  reportWebVitals(console.log)
}
