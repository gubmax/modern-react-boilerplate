import { FC, Children } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { Divider } from '../Divider'
import { Wrapper } from '../Wrapper'
import { ListProps } from './List.types'
import * as s from './List.css'

const List: FC<ListProps> = ({ children, className, ...rest }) => {
  return (
    <Wrapper className={cn(s.wrapper, className)} {...rest}>
      {Children.map(children, (child, index) => (
        <>
          {!!index && <Divider className={s.divider} />}
          {child}
        </>
      ))}
    </Wrapper>
  )
}

export default List
