import { Children, FC } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { Divider } from '../Divider'
import { ListProps } from './List.types'
import * as s from './List.css'

const List: FC<ListProps> = ({ as: Tag = 'div', children, className, ...rest }) => {
  return (
    <Tag className={cn(s.wrapper, className)} {...rest}>
      {Children.map(children, (child, index) => (
        <>
          {!!index && <Divider className={s.divider} />}
          {child}
        </>
      ))}
    </Tag>
  )
}

export default List
