import { FC, Children } from 'react'

import { Divider } from '../Divider'
import { Wrapper } from '../Wrapper'
import { ListProps } from './List.types'
import * as s from './List.css'

const List: FC<ListProps> = ({ children, ...rest }) => {
  return (
    <Wrapper noPadding {...rest}>
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
