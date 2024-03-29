import { StaticRouter } from 'react-router-dom/server'

import { PageRoutes } from 'client/src/browser/http/constants'
import { IocContainerContext } from 'client/src/common/contexts/IocContainerContext'
import { App } from 'client/src/modules/layout/app'
import { iocContainer } from 'client/src/utils/ioc'
import { CLIENT_CONFIG } from 'shared/constants/clientConfig'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import { SERVER_SIDE_PROPS } from 'shared/utils/serverSideProps'
import 'client/src/common/styles/reset.css'
import 'client/src/common/styles/global.css'

export const renderTemplate: RenderTemplate = ({
  url = PageRoutes.ROOT,
  clientConfig = {},
  serverSideProps = {},
} = {}) => {
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
