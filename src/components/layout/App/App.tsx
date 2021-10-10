import { FC, StrictMode } from 'react'
import { useRoutes } from 'react-router'
import 'reflect-metadata'

import { IocContainerContext, ServerSidePropsContext } from 'src/common/contexts'
import { iocContainer } from 'src/utils'
import { ROUTES } from './App.constants'
import { AppProps } from './App.types'

import 'src/styles/common.css'
import 'src/styles/global.css'

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
