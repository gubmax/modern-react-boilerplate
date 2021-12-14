import { GetServerSideProps } from 'shared/utils'
import { ServerSidePropsQueryModel } from './serverSidePropsQuery.model'

// Symbols

export const serverSidePropsModelFactorySymbol = Symbol('Factory<ServerSidePropsModel>')

// Types

export interface ServerSidePropsModelFactory {
  <T>(getServerSideProps: GetServerSideProps<T>): ServerSidePropsQueryModel<T>
}
