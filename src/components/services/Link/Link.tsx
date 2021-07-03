import { forwardRef, ForwardRefRenderFunction, MouseEvent } from 'react'
import { useNavigate } from 'react-router'

import { A } from 'src/components/typography/Anchor'
import { noop } from 'src/helpers'
import { LinkProps } from './Link.types'

const Link: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  { to, style, onClick = noop, ...rest },
  ref,
) => {
  const navigate = useNavigate()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    onClick(event)
    navigate(to)
  }

  return <A css={style} href={to} ref={ref} onClick={handleClick} {...rest} />
}

export default forwardRef(Link)
