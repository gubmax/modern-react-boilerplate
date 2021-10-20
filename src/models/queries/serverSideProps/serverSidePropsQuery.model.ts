import { inject, injectable } from 'inversify'

import { GetServerSideProps } from 'shared/utils'
import { FatalException } from 'src/domain/exceptions'
import { HttpClientModel } from 'src/models/http'
import { QueryModel } from '../query.model'

@injectable()
export class ServerSidePropsQueryModel<R = unknown> extends QueryModel<R> {
  getServerSideProps?: GetServerSideProps<R>

  constructor(@inject(HttpClientModel) private readonly httpClientModel: HttpClientModel) {
    super()
  }

  async send(): Promise<R> {
    const { getServerSideProps } = this

    if (!getServerSideProps) {
      throw new FatalException({ message: 'Property "getServerSideProps" is undefined' })
    }

    return super.run(() => getServerSideProps(this.httpClientModel))
  }
}
