import { FC, StrictMode } from 'react'
import { useRoutes } from 'react-router'

import { CommonSvg } from '../CommonSvg'
import { ProgressBar } from '../ProgressBar'
import { ROUTES } from './App.constants'

const App: FC = () => {
  const element = useRoutes(ROUTES)

  return (
    <StrictMode>
      <ProgressBar />
      {element}
      <CommonSvg />
    </StrictMode>
  )
}

export default App
