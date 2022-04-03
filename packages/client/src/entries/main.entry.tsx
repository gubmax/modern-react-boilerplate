import { ServerSideProps, SERVER_SIDE_PROPS } from 'shared/constants/serverSideProps'
import { ClientConfig, CLIENT_CONFIG } from 'shared/constants/clientConfig'
import { App } from 'client/src/modules/layout/app'
import { BrowserRouter } from 'client/src/common/components/addons/BrowserRouter'
import { IocContainerContext } from 'client/src/common/contexts/IocContainerContext'
import { iocContainer } from 'client/src/utils/ioc'

import 'client/src/common/styles/global.css'

export function renderMainTemplate(
  clientConfig: ClientConfig = {},
  serverSideProps: ServerSideProps = {},
): JSX.Element {
  iocContainer.register(CLIENT_CONFIG, { useValue: clientConfig })
  iocContainer.register(SERVER_SIDE_PROPS, { useValue: serverSideProps })

  return (
    <IocContainerContext.Provider value={iocContainer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IocContainerContext.Provider>
  )
}
