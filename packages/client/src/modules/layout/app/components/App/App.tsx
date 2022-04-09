import { FC, StrictMode } from 'react'
import { useRoutes } from 'react-router'

import { CommonSvg } from '../CommonSvg'
import { ROUTES } from './App.constants'

const App: FC = () => {
  const element = useRoutes(ROUTES)

  return (
    <StrictMode>
      {element}
      <CommonSvg />
    </StrictMode>
  )
}

export default App
