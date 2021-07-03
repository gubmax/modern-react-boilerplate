import { forwardRef, ForwardRefRenderFunction } from 'react'

import { AnchorProps } from './Anchor.types'
import s from './Anchor.styles'

const Anchor: ForwardRefRenderFunction<HTMLAnchorElement, AnchorProps> = (
  { style, ...rest },
  ref,
) => {
  return <a css={[s.link, style]} ref={ref} {...rest} />
}

export default forwardRef(Anchor)
