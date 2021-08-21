import { StaticRouter } from 'react-router-dom/server'

import { App } from 'src/components/layout'

export function renderClient(url: string): JSX.Element {
  return (
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
