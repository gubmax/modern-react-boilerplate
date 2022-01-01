import { AnchorProps } from 'client/src/components/typography/Anchor'
import { PageRoutes } from 'client/src/infra/http/constants'
import { RefProp } from 'client/src/common/typings'

export interface LinkProps extends RefProp<HTMLAnchorElement>, Omit<AnchorProps, 'href'> {
  to: PageRoutes
}
