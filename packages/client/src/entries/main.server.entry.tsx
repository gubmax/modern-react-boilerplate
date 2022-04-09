import { StaticRouter } from 'react-router-dom/server'

import { IocContainerContext } from 'client/src/common/contexts/IocContainerContext'
import { App } from 'client/src/modules/layout/app'
import { iocContainer } from 'client/src/utils/ioc'
import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'
import 'client/src/common/styles/reset.css'
import 'client/src/common/styles/global.css'

export function renderServerMainTemplate(
  url: string,
  clientConfig: ClientConfig = {},
  serverSideProps: ServerSideProps = {},
): JSX.Element {
  const childContainer = iocContainer.createChildContainer()
  childContainer.register(CLIENT_CONFIG, { useValue: clientConfig })
  childContainer.register(SERVER_SIDE_PROPS, { useValue: serverSideProps })

  return (
    <IocContainerContext.Provider value={childContainer}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </IocContainerContext.Provider>
  )
}
