import { FC, memo } from 'react'

import { cn } from 'client/src/common/helpers/classNames'
import { StyledProps } from 'client/src/common/typings'
import LogoWithText from '../../LogoWithText/LogoWithText'
import { NavigationMenu } from '../../NavigationMenu'
import { SearchField } from '../../SearchField'
import * as s from './HeaderDesktop.css'

const Header: FC<StyledProps> = ({ className, ...rest }) => {
  return (
    <div className={cn(s.wrapper, className)} {...rest}>
      <div className={s.bar}>
        <div className={s.linkWrapper}>
          <LogoWithText />
        </div>
        <SearchField className={s.search} />
        <NavigationMenu className={s.navigationMenu} />
      </div>
    </div>
  )
}

export default memo(Header)
