import { Container } from 'inversify'

import { ServerSideProps } from 'src/common/contexts'

export interface AppProps {
  serverSideProps?: ServerSideProps
  iocContainer?: Container
}
