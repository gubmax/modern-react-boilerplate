import { FC, StrictMode } from 'react'

import { Header } from 'src/components/layout/Header'
import { Main } from 'src/components/layout/Main'

import './App.css'

const App: FC = () => {
  return (
    <StrictMode>
      <Header />
      <br />
      <Main />
    </StrictMode>
  )
}

export default App
