import { FC, StrictMode } from 'react'

import { CommonSvg } from '../CommonSvg'
import { Page } from '../Page'
import { ProgressBar } from '../ProgressBar'

const App: FC = () => {
  return (
    <StrictMode>
      <ProgressBar />
      <Page />
      <CommonSvg />
    </StrictMode>
  )
}

export default App
