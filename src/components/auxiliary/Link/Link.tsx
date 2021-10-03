import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router'

import { noop } from 'src/common/helpers'
import { LinkProps } from './Link.types'

const Link: FC<LinkProps> = ({ to, onClick = noop, ...rest }) => {
  const navigate = useNavigate()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    onClick(event)
    navigate(to)
  }

  return <a href={to} onClick={handleClick} {...rest} />
}

export default Link
