import { VFC, StrictMode } from 'react'
import { useRoutes } from 'react-router'
import 'reflect-metadata'

import { CommonSvg } from 'client/src/components/auxiliary/CommonSvg'
import { ROUTES } from './App.constants'

const App: VFC = () => {
  const element = useRoutes(ROUTES)

  return (
    <StrictMode>
      {element}
      <CommonSvg />
    </StrictMode>
  )
}

export default App
