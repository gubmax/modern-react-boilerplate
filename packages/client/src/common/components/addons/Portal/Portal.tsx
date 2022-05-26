import { FC } from 'react'
import { createPortal } from 'react-dom'

import { PortalProps } from './Portal.types'

const Portal: FC<PortalProps> = ({ container, disabled, children }) => {
  return disabled ? null : createPortal(children, container ?? document.body)
}

export default Portal
