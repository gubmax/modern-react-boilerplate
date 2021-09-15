import { FC, StrictMode } from 'react'

import { ServerSidePropsContext } from 'src/common/contexts'
import { Main } from '../Main'
import { AppProps } from './App.types'

const App: FC<AppProps> = ({ serverSideProps = {} }) => {
  return (
    <StrictMode>
      <ServerSidePropsContext.Provider value={serverSideProps}>
        <Main />
      </ServerSidePropsContext.Provider>
    </StrictMode>
  )
}

export default App
