import { PageRoutes } from 'client/src/browser/http/constants'
import { AnchorProps } from 'client/src/common/components/typography/Anchor'
import { RefProp } from 'client/src/common/typings'

export interface LinkProps extends RefProp<HTMLAnchorElement>, Omit<AnchorProps, 'href'> {
  to: PageRoutes
  background?: boolean
}
