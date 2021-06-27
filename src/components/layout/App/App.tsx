import { FC, StrictMode } from 'react'
import { Global } from '@emotion/react'

import { Main } from 'src/components/layout/Main'

import s from './App.styles'

const App: FC = () => {
  return (
    <StrictMode>
      <Global styles={s} />
      <Main />
    </StrictMode>
  )
}

export default App
