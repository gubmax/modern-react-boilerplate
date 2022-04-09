import { StrictMode, VFC } from 'react'
import { useRoutes } from 'react-router'

import { CommonSvg } from '../CommonSvg'
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
