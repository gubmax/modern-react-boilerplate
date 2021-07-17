import { AnchorProps } from 'src/components/typography/Anchor/Anchor.types'
import { PageRoutes } from 'src/infra/http'
import { RefProp } from 'src/types'

export interface LinkProps extends RefProp<HTMLAnchorElement>, Omit<AnchorProps, 'href'> {
  to: PageRoutes
}
