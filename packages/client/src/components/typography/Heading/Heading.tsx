import { FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { HeadingProps } from './Heading.types'
import { HeadingTags } from './Heading.constants'
import * as s from './Heading.css'

const Heading: FC<HeadingProps> = ({ as: Tag, className, style, children }) => {
  return (
    <Tag className={cn(s.heading({ type: Tag }), className)} style={style}>
      {children}
    </Tag>
  )
}

export const H1: FC<StyledProps> = (props) => <Heading {...props} as={HeadingTags.H1} />
export const H2: FC<StyledProps> = (props) => <Heading {...props} as={HeadingTags.H2} />
export const H3: FC<StyledProps> = (props) => <Heading {...props} as={HeadingTags.H3} />
