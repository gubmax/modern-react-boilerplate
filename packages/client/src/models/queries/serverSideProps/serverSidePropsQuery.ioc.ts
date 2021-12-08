import { ContainerModule } from 'inversify'

import { GetServerSideProps } from 'shared/utils'
import { ServerSidePropsQueryModel } from './serverSidePropsQuery.model'

// Symbols

export const serverSidePropsModelFactorySymbol = Symbol('Factory<ServerSidePropsModel>')

// Types

export interface ServerSidePropsModelFactory {
  <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T>
}

// Module

export const ServerSidePropsQueryModule = new ContainerModule((bind) => {
  bind(ServerSidePropsQueryModel).to(ServerSidePropsQueryModel)

  bind(serverSidePropsModelFactorySymbol).toFactory(({ container }) => {
    return <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T> => {
      const serverSidePropsQueryModel =
        container.get<ServerSidePropsQueryModel<T>>(ServerSidePropsQueryModel)

      serverSidePropsQueryModel.getServerSideProps = getServerSideProps

      return serverSidePropsQueryModel
    }
  })
})
