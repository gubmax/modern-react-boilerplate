import { GetProductsResponse } from 'shared/http'
import { ServerSidePropsQueryModel } from 'src/models'
import { providerFactory } from 'src/utils'
import { getServerSideProps } from './Cart.server'

interface Deps {
  sspQueryModel: ServerSidePropsQueryModel<GetProductsResponse>
}

export const [provide, usePageDeps] = providerFactory<Deps>(() => ({
  sspQueryModel: new ServerSidePropsQueryModel(getServerSideProps),
}))
