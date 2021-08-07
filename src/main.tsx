import { hydrateRoot } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './components/layout'
import { reportWebVitals } from './infra/http'
import './styles/global.css'

// Bootstrap

const container = document.getElementById('root') || document.body
const root = hydrateRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

// Web Vitals
if (process.env.NODE_ENV === 'production') {
  // If you want to start measuring performance in your app,
  // pass a function to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint.
  reportWebVitals(console.log)
}
