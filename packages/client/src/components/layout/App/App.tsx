import { FC, StrictMode } from 'react'
import { useRoutes } from 'react-router'
import 'reflect-metadata'

import { IocContainerContext, ServerSidePropsContext } from 'client/src/common/contexts'
import { iocContainer } from 'client/src/utils'
import { ROUTES } from './App.constants'
import { AppProps } from './App.types'

const App: FC<AppProps> = ({ serverSideProps = {} }) => {
  const element = useRoutes(ROUTES)

  return (
    <StrictMode>
      <IocContainerContext.Provider value={iocContainer}>
        <ServerSidePropsContext.Provider value={serverSideProps}>
          {element}
        </ServerSidePropsContext.Provider>
      </IocContainerContext.Provider>
    </StrictMode>
  )
}

export default App
