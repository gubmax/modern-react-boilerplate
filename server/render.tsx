import { StaticRouter } from 'react-router-dom/server'

import { App } from 'src/components/layout'

function render(url: string): JSX.Element {
  return (
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}

export default render
