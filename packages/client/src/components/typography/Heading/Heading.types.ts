import { AsProp, StyledProps } from 'client/src/typings'
import { HeadingTags } from './Heading.constants'

export type HeadingProps = StyledProps & Required<AsProp<HeadingTags>>
