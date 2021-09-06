import { StaticRouter } from 'react-router-dom/server'

import { App } from 'src/components/layout'
import { ServerSideProps } from 'src/contexts'

export function renderClient(url: string, serverSideProps?: ServerSideProps): JSX.Element {
  return (
    <StaticRouter location={url}>
      <App serverSideProps={serverSideProps} />
    </StaticRouter>
  )
}
