import { DependencyContainer } from 'tsyringe'

import { ServerSideProps } from 'client/src/common/contexts'

export interface AppProps {
  serverSideProps?: ServerSideProps
  iocContainer?: DependencyContainer
}
