import { GetProductsResponse } from 'shared/infra/http'
import { GetProductsQuery } from 'src/infra/http/queries'

export function getServerSideProps(): Promise<GetProductsResponse> {
  const getProductsQuery = new GetProductsQuery()
  return getProductsQuery.send()
}
