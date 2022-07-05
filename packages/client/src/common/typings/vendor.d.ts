import { CLIENT_CONFIG, ClientConfig } from 'shared/constants/clientConfig'
import { SERVER_SIDE_PROPS, ServerSideProps } from 'shared/utils/serverSideProps'

declare global {
  interface Window {
    [CLIENT_CONFIG]?: ClientConfig
    [SERVER_SIDE_PROPS]?: ServerSideProps
  }
}
