import { FC } from 'react'

import { useLink } from 'client/src/common/hooks/useLink'
import { LinkProps } from './Link.types'

const Link: FC<LinkProps> = ({ to, ...rest }) => {
  const navigate = useLink(to)
  return <a href={to} onClick={navigate} {...rest} />
}

export default Link
