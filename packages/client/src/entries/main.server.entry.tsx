import { StaticRouter } from 'react-router-dom/server'

import { ServerSideProps } from 'client/src/common/contexts'
import { App } from 'client/src/components/layout/App'

import 'client/src/styles/common.css'
import 'client/src/styles/global.css'

export function renderServerMainTemplate(
  url: string,
  serverSideProps?: ServerSideProps,
): JSX.Element {
  return (
    <StaticRouter location={url}>
      <App serverSideProps={serverSideProps} />
    </StaticRouter>
  )
}
