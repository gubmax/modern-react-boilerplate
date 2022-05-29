import { ClientConfig } from 'shared/constants/clientConfig'
import { ServerSideProps } from 'shared/constants/serverSideProps'

export type RenderTemplate = (ops?: {
  clientConfig?: ClientConfig
  serverSideProps?: ServerSideProps
  url?: string
}) => JSX.Element
