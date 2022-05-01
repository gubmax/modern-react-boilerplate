import { FC, StrictMode } from 'react'

import { CommonSvg } from '../CommonSvg'
import { Content } from '../Content'
import { ProgressBar } from '../ProgressBar'

const App: FC = () => {
  return (
    <StrictMode>
      <ProgressBar />
      <Content />
      <CommonSvg />
    </StrictMode>
  )
}

export default App
