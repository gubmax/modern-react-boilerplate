import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import { NavigationMenu } from 'client/src/modules/layout/app/components/Main/components/NavigationMenu'
import { SearchField } from 'client/src/modules/layout/app/components/Main/components/SearchField'
import { LogoWithText } from '../../LogoWithText'
import * as s from './HeaderTouch.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <div className={s.header}>
        <LogoWithText />
        <NavigationMenu className={s.navigationMenu} />
      </div>
      <SearchField />
    </div>
  )
}

export default memo(Header)
