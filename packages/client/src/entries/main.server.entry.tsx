import { StaticRouter } from 'react-router-dom/server'

import { ClientConfig, CLIENT_CONFIG } from 'shared/constants/clientConfig'
import { ServerSideProps, SERVER_SIDE_PROPS } from 'shared/constants/serverSideProps'
import { App } from 'client/src/components/layout/App'
import { IocContainerContext } from 'client/src/common/contexts/IocContainerContext'
import { iocContainer } from 'client/src/utils/ioc'

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
