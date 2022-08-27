import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { SELECTOR_CONTENT } from 'client/src/common/components/addons/Modal'
import { A } from 'client/src/common/components/typography/Anchor'
import { cn } from 'client/src/common/helpers/classNames'
import { dt } from 'client/src/common/styles/designTokens'
import { LinksGroup } from './components/LinksGroup'
import {
  TEXT_COPYRIGHT,
  TEXT_DESCRIPTION,
  TEXT_PRIVACY_POLICY,
  TEXT_TERMS_OF_SERVICE,
  TEXT_TITLE,
} from './Footer.constants'
import * as s from './Footer.css'

const Footer: FC = () => {
  return (
    <footer className={cn(SELECTOR_CONTENT, s.footer)}>
      <div className={s.wrapper}>
        <div className={s.topSection}>
          <div className={s.description}>
            <span className={s.title}>{TEXT_TITLE}</span>
            <p className={dt.style.typography.subtitle1}>{TEXT_DESCRIPTION}</p>
          </div>
          <LinksGroup />
        </div>
        <div className={s.bottomSection}>
          <span className={s.copyright}>{TEXT_COPYRIGHT}</span>
          <div className={s.links}>
            <A href={PageRoutes.ROOT} className={s.bottomLink}>
              {TEXT_PRIVACY_POLICY}
            </A>
            <A href={PageRoutes.ROOT}>{TEXT_TERMS_OF_SERVICE}</A>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
