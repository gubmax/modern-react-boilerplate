import { getProductsInit, GetProductsResponse } from 'shared/http'
import { httpRequest } from 'src/infra/http'

export function getServerSideProps(): Promise<GetProductsResponse> {
  return httpRequest<GetProductsResponse>(getProductsInit)
}
