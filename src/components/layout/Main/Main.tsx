import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { Wrapper } from 'src/components/surfaces/Wrapper'
import { ROUTES } from './Main.constants'

const Main: FC = () => {
  const element = useRoutes(ROUTES)

  return <Wrapper as="main">{element}</Wrapper>
}

export default Main
