import { QueryModel } from './Query.model'

export class ServerSidePropsQueryModel<R extends unknown = unknown> extends QueryModel<R> {
  getServerSideProps: () => Promise<R>

  constructor(fn: () => Promise<R>) {
    super()
    this.getServerSideProps = fn
  }

  async send(): Promise<R> {
    return super.run(this.getServerSideProps)
  }
}
