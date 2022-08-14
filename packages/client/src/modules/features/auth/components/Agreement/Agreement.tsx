import { FC, memo } from 'react'

import { PageRoutes } from 'client/src/browser/http/constants'
import { A } from 'client/src/common/components/typography/Anchor'
import { cn } from 'client/src/common/helpers/classNames'
import { AgreementProps } from './Agreement.types'
import * as s from './Agreement.css'

const Agreement: FC<AgreementProps> = ({ className, style, actionText }) => {
  return (
    <p className={cn(s.text, className)} style={style}>
      Click &#34;{actionText}&#34; to&nbsp;agree to&nbsp;
      <A href={PageRoutes.ROOT}>Terms of&nbsp;Service</A> and acknowledge that{' '}
      <A href={PageRoutes.ROOT}>Privacy Policy</A> applies to&nbsp;you.
    </p>
  )
}

export default memo(Agreement)
