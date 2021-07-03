import { AnchorProps } from 'src/components/typography/Anchor/Anchor.types'
import { PageRoutes } from 'src/infra/http'

export interface LinkProps extends Omit<AnchorProps, 'href'> {
  to: PageRoutes
}
