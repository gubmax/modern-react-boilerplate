import { AnchorProps } from 'client/src/components/typography'
import { PageRoutes } from 'client/src/infra/http'
import { RefProp } from 'client/src/common/typings'

export interface LinkProps extends RefProp<HTMLAnchorElement>, Omit<AnchorProps, 'href'> {
  to: PageRoutes
}
