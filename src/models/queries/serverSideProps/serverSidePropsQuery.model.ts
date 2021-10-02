import { injectable } from 'inversify'

import { FatalException } from 'src/domain/exceptions'
import { QueryModel } from '../query.model'
import { GetServerSideProps } from './serverSidePropsQuery.types'

@injectable()
export class ServerSidePropsQueryModel<R extends unknown = unknown> extends QueryModel<R> {
  getServerSideProps?: GetServerSideProps<R>

  async send(): Promise<R> {
    if (!this.getServerSideProps) {
      throw new FatalException({ message: 'Property "getServerSideProps" is undefined' })
    }

    return super.run(this.getServerSideProps)
  }
}
