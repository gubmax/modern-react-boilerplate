/// <reference types="vite/client" />

import { ServerSideProps } from 'src/common/contexts'

declare global {
  interface Window {
    SERVER_SIDE_PROPS?: ServerSideProps
  }
}
