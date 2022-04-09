import 'reflect-metadata'

import { BrowserRouter } from 'client/src/common/components/addons/BrowserRouter'
import { IocContainerContext } from 'client/src/common/contexts/IocContainerContext'
import { App } from 'client/src/modules/layout/app'
import { iocContainer } from 'client/src/utils/ioc'
import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'
import 'client/src/common/styles/reset.css'
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
