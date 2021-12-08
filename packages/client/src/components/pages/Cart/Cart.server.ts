import { getProductsInit, GetProductsResponse } from 'shared/http'
import { GetServerSideProps } from 'shared/utils'

export const getServerSideProps: GetServerSideProps<GetProductsResponse> = (httpClient) => {
  return httpClient.send<GetProductsResponse>(getProductsInit)
}
