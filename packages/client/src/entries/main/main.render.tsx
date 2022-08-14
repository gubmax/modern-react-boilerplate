import 'reflect-metadata'

import { BrowserRouter } from 'client/src/common/components/addons/BrowserRouter'
import { IocContainerContext } from 'client/src/common/contexts/IocContainerContext'
import { App } from 'client/src/modules/layout/app'
import { iocContainer } from 'client/src/utils/ioc'
import { CLIENT_CONFIG } from 'shared/constants/clientConfig'
import { RenderTemplate } from 'shared/typings/renderTemplate'
import { SERVER_SIDE_PROPS } from 'shared/utils/serverSideProps'
import 'client/src/common/styles/reset.css'
import 'client/src/common/styles/global.css'

export const renderTemplate: RenderTemplate = ({
  clientConfig = {},
  serverSideProps = {},
} = {}) => {
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
