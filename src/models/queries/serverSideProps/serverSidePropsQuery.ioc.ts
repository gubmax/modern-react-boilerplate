import { ContainerModule } from 'inversify'
import { ServerSidePropsQueryModel } from './serverSidePropsQuery.model'
import { GetServerSideProps } from './serverSidePropsQuery.types'

// Symbols

export const serverSidePropsQueryModelSymbol = Symbol('ServerSidePropsQueryModel')
export const serverSidePropsModelFactorySymbol = Symbol('ServerSidePropsModelFactory')

// Types

export type { ServerSidePropsQueryModel }

export interface ServerSidePropsModelConstructor {
  new <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T>
}

export interface ServerSidePropsModelFactory {
  <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T>
}

// Module

export const ServerSidePropsQueryModule = new ContainerModule((bind) => {
  bind<ServerSidePropsQueryModel>(serverSidePropsQueryModelSymbol).toConstructor(
    ServerSidePropsQueryModel,
  )

  bind(serverSidePropsModelFactorySymbol).toFactory(({ container }) => {
    return <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T> => {
      const Constructor = container.get<ServerSidePropsModelConstructor>(
        serverSidePropsQueryModelSymbol,
      )

      return new Constructor(getServerSideProps)
    }
  })
})
