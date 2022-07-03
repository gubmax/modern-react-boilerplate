import { FC } from 'react'

import { useLink } from 'client/src/common/hooks/useLink'
import { LinkProps } from './Link.types'

const Link: FC<LinkProps> = ({ to, background = false, ...rest }) => {
  const navigate = useLink(to, { background })

  return <a href={to} onClick={navigate} {...rest} />
}

export default Link
