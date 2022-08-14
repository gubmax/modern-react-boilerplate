import { FC } from 'react'
import { useOutlet } from 'react-router'

import { useComponentVariant } from 'client/src/common/hooks/useComponentVariant'
import { MainDesktop } from './components/desktop/MainDesktop'
import { MainTouch } from './components/touch/MainTouch'

const Main: FC = () => {
  const Component = useComponentVariant(MainTouch, MainDesktop)
  const element = useOutlet()
  return <Component>{element}</Component>
}

export default Main
