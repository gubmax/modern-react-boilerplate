import { App } from 'client/src/components/layout/App'
import { BrowserRouter } from 'client/src/components/auxiliary'
import { ServerSideProps } from 'client/src/common/contexts'

import 'client/src/styles/common.css'
import 'client/src/styles/global.css'

export function renderMainTemplate(serverSideProps?: ServerSideProps): JSX.Element {
  return (
    <BrowserRouter>
      <App serverSideProps={serverSideProps} />
    </BrowserRouter>
  )
}
