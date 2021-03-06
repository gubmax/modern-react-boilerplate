// import { registerSW } from 'virtual:pwa-register'
import { hydrateRoot } from 'react-dom/client'

import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/utils/serverSideProps'
import { reportWebVitals } from './browser/http/reportWebVitals'
import { getJSONData } from './common/helpers/getJSONData'
import { renderTemplate } from './entries/main.entry'

// Initial data

const clientConfig = getJSONData<ClientConfig>(CLIENT_CONFIG)
const serverSideProps = getJSONData<ServerSideProps>(SERVER_SIDE_PROPS)

// Bootstrap

const container = document.getElementById('root') ?? document.body
hydrateRoot(container, renderTemplate({ clientConfig, serverSideProps }))

// Service Worker
// registerSW()

// Web Vitals
if (process.env.NODE_ENV === 'production') {
  // If you want to start measuring performance in your app,
  // pass a function to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint.
  reportWebVitals(console.log)
}
