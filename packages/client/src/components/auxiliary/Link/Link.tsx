import { FC } from 'react'

import { useLink } from 'client/src/common/hooks'
import { LinkProps } from './Link.types'

const Link: FC<LinkProps> = ({ to, onClick, ...rest }) => {
  const navigate = useLink(to, onClick)
  return <a href={to} onClick={navigate} {...rest} />
}

export default Link
