import { iocContainer } from 'client/src/utils'
import { GetServerSideProps } from 'shared/utils'
import { ServerSidePropsQueryModel } from './serverSidePropsQuery.model'

// Symbols

export const serverSidePropsModelFactorySymbol = Symbol('Factory<ServerSidePropsModel>')

// Types

export interface ServerSidePropsModelFactory {
  <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T>
}

// IoC

iocContainer.register(serverSidePropsModelFactorySymbol, {
  useFactory: (dependencyContainer) => {
    return <T>(getServerSideProps: GetServerSideProps<T>) => {
      const serverSidePropsQueryModel =
        dependencyContainer.resolve<ServerSidePropsQueryModel<T>>(ServerSidePropsQueryModel)

      serverSidePropsQueryModel.getServerSideProps = getServerSideProps

      return serverSidePropsQueryModel
    }
  },
})
