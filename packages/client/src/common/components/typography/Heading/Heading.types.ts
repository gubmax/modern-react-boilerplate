import { AsProp, StyledProps } from 'client/src/common/typings'
import { HeadingTags } from './Heading.constants'

export type HeadingProps = StyledProps & Required<AsProp<HeadingTags>>
