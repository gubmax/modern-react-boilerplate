import { ServerSideProps, SERVER_SIDE_PROPS } from 'shared/constants/serverSideProps'
import { App } from 'client/src/components/layout/App'
import { BrowserRouter } from 'client/src/components/auxiliary/BrowserRouter'
import { iocContainer } from 'client/src/utils/ioc'

import 'client/src/common/styles/common.css'
import 'client/src/common/styles/global.css'

export function renderMainTemplate(serverSideProps?: ServerSideProps): JSX.Element {
  iocContainer.register(SERVER_SIDE_PROPS, { useValue: serverSideProps })

  return (
    <BrowserRouter>
      <App iocContainer={iocContainer} />
    </BrowserRouter>
  )
}
