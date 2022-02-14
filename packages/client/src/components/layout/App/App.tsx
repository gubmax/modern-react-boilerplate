import { VFC, StrictMode } from 'react'
import { useRoutes } from 'react-router'
import 'reflect-metadata'

import { IocContainerContext } from 'client/src/common/contexts/IocContainerContext'
import { CommonSvg } from 'client/src/components/auxiliary/CommonSvg'
import { ROUTES } from './App.constants'
import { AppProps } from './App.types'

const App: VFC<AppProps> = ({ iocContainer }) => {
  const element = useRoutes(ROUTES)

  return (
    <StrictMode>
      <IocContainerContext.Provider value={iocContainer}>{element}</IocContainerContext.Provider>
      <CommonSvg />
    </StrictMode>
  )
}

export default App
