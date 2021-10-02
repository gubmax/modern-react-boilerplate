import { ContainerModule } from 'inversify'
import { ServerSidePropsQueryModel } from './serverSidePropsQuery.model'
import { GetServerSideProps } from './serverSidePropsQuery.types'

// Symbols

export const serverSidePropsQueryModelSymbol = Symbol('ServerSidePropsQueryModel')
export const serverSidePropsModelFactorySymbol = Symbol('ServerSidePropsModelFactory')

// Types

export type { ServerSidePropsQueryModel }

export interface ServerSidePropsModelFactory {
  <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T>
}

// Module

export const ServerSidePropsQueryModule = new ContainerModule((bind) => {
  bind<ServerSidePropsQueryModel>(serverSidePropsQueryModelSymbol).to(ServerSidePropsQueryModel)

  bind(serverSidePropsModelFactorySymbol).toFactory(({ container }) => {
    return <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T> => {
      const ServerSidePropsQueryModel = container.get<ServerSidePropsQueryModel<T>>(
        serverSidePropsQueryModelSymbol,
      )

      ServerSidePropsQueryModel.getServerSideProps = getServerSideProps

      return ServerSidePropsQueryModel
    }
  })
})
