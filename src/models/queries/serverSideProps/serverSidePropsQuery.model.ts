import { injectable } from 'inversify'

import { QueryModel } from '../query.model'
import { GetServerSideProps } from './serverSidePropsQuery.types'

@injectable()
export class ServerSidePropsQueryModel<R extends unknown = unknown> extends QueryModel<R> {
  getServerSideProps: GetServerSideProps<R>

  constructor(fn: GetServerSideProps<R>) {
    super()
    this.getServerSideProps = fn
  }

  async send(): Promise<R> {
    return super.run(this.getServerSideProps)
  }
}
