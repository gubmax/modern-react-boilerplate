import { FC, StrictMode } from 'react'
import { useRoutes } from 'react-router'
import 'reflect-metadata'

import { IocContainerContext } from 'client/src/common/contexts'
import { ROUTES } from './App.constants'
import { AppProps } from './App.types'

const App: FC<AppProps> = ({ iocContainer }) => {
  const element = useRoutes(ROUTES)

  return (
    <StrictMode>
      <IocContainerContext.Provider value={iocContainer}>{element}</IocContainerContext.Provider>
    </StrictMode>
  )
}

export default App
