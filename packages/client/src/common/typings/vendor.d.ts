import { ClientConfig, CLIENT_CONFIG } from 'shared/constants/clientConfig'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/constants/serverSideProps'

declare global {
  interface Window {
    [CLIENT_CONFIG]?: ClientConfig
    [SERVER_SIDE_PROPS]?: ServerSideProps
  }
}
