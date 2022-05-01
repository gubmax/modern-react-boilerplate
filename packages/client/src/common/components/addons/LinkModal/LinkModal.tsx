import { FC } from 'react'
import { useLocation } from 'react-router'

import { useLink } from 'client/src/common/hooks/useLink'
import { LinkModalProps } from './LinkModal.types'

const LinkModal: FC<LinkModalProps> = ({ to, ...rest }) => {
  const location = useLocation()
  const navigate = useLink(to, { state: { backgroundLocation: location.pathname } })

  return <a href={to} onClick={navigate} {...rest} />
}

export default LinkModal
