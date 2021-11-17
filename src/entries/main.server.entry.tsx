import { StaticRouter } from 'react-router-dom/server'

import { ServerSideProps } from 'src/common/contexts'
import { App } from 'src/components/layout/App'

import 'src/styles/common.css'
import 'src/styles/global.css'

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
