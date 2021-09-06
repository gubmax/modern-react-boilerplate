/// <reference types="vite/client" />

import { ServerSideProps } from 'src/contexts'

declare global {
  interface Window {
    SERVER_SIDE_PROPS?: ServerSideProps
  }
}
