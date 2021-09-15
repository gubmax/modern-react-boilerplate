import { FC } from 'react'

import { cn } from 'src/common/helpers'
import { StyledProps } from 'src/types'
import { HeadingProps } from './Heading.types'
import { HeadingTags, stylesByTag } from './Heading.constants'

const Heading: FC<HeadingProps> = ({ as: Tag, className, children }) => {
  return <Tag className={cn(stylesByTag.get(Tag), className)}>{children}</Tag>
}

export const H1: FC<StyledProps> = ({ ...props }) => <Heading {...props} as={HeadingTags.H1} />
export const H2: FC<StyledProps> = ({ ...props }) => <Heading {...props} as={HeadingTags.H2} />
export const H3: FC<StyledProps> = ({ ...props }) => <Heading {...props} as={HeadingTags.H3} />
