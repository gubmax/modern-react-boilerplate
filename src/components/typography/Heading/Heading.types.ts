import { AsProp, StyledProps } from 'src/types'
import { HeadingTags } from './Heading.constants'

export type HeadingProps = StyledProps & Required<AsProp<HeadingTags>>
