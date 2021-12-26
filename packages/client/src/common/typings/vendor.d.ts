/// <reference types="vite/client" />

import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'

declare global {
  interface Window {
    [SERVER_SIDE_PROPS]?: ServerSideProps
  }
}
