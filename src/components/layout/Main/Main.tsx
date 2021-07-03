import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { Header } from 'src/components/layout/Header'
import { Wrapper } from 'src/components/surfaces/Wrapper'
import { ROUTES } from './Main.constants'

const Main: FC = () => {
  const element = useRoutes(ROUTES)
  return (
    <Wrapper as="main">
      <Header />
      {element}
    </Wrapper>
  )
}

export default Main
