/// <reference types="vite/client" />

import { MARK_SERVER_SIDE_PROPS } from 'shared/constants'
import { ServerSideProps } from 'src/common/contexts'

declare global {
  interface Window {
    [MARK_SERVER_SIDE_PROPS]?: ServerSideProps
  }
}
