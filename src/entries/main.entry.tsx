import { App } from 'src/components/layout/App'
import { BrowserRouter } from 'src/components/auxiliary'
import { ServerSideProps } from 'src/common/contexts'

import 'src/styles/common.css'
import 'src/styles/global.css'

export function renderMainTemplate(serverSideProps?: ServerSideProps): JSX.Element {
  return (
    <BrowserRouter>
      <App serverSideProps={serverSideProps} />
    </BrowserRouter>
  )
}
