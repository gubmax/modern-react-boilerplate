import { GetServerSideProps } from 'shared/utils/serverSideProps'
import { HttpClientModel } from 'client/src/common/models/http'
import { QueryModel } from '../query'

export abstract class ServerSidePropsQueryModel<R = unknown> extends QueryModel<R> {
  constructor(
    protected readonly getServerSideProps: GetServerSideProps<R>,
    protected readonly httpClientModel: HttpClientModel,
  ) {
    super()
  }

  async send(): Promise<R> {
    return super.run(() => this.getServerSideProps(this.httpClientModel))
  }
}
