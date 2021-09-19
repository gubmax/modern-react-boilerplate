import { FC, StrictMode } from 'react'
import { useRoutes } from 'react-router'

import { ServerSidePropsContext } from 'src/common/contexts'
import { ROUTES } from './App.constants'
import { AppProps } from './App.types'

const App: FC<AppProps> = ({ serverSideProps = {} }) => {
  const element = useRoutes(ROUTES)

  return (
    <StrictMode>
      <ServerSidePropsContext.Provider value={serverSideProps}>
        {element}
      </ServerSidePropsContext.Provider>
    </StrictMode>
  )
}

export default App
