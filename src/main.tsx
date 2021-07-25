import { hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'src/components/layout'
import reportWebVitals from './reportWebVitals'
import 'src/styles/global.css'

const container = document.getElementById('root') || document.body
const root = hydrateRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

if (process.env.NODE_ENV === 'production') {
  // If you want to start measuring performance in your app,
  // pass a function to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint.
  reportWebVitals(console.log)
}
