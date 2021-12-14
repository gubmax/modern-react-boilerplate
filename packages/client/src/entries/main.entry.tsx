import { ServerSideProps, SERVER_SIDE_PROPS } from 'shared/constants/serverSideProps'
import { App } from 'client/src/components/layout/App'
import { BrowserRouter } from 'client/src/components/auxiliary'
import { iocContainer } from 'client/src/utils'

import 'client/src/styles/common.css'
import 'client/src/styles/global.css'

export function renderMainTemplate(serverSideProps?: ServerSideProps): JSX.Element {
  iocContainer.register(SERVER_SIDE_PROPS, { useValue: serverSideProps })

  return (
    <BrowserRouter>
      <App iocContainer={iocContainer} />
    </BrowserRouter>
  )
}
