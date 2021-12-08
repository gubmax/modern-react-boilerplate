import { Container } from 'inversify'

import { ServerSideProps } from 'client/src/common/contexts'

export interface AppProps {
  serverSideProps?: ServerSideProps
  iocContainer?: Container
}
