import { getProductsInit, GetProductsResponse } from 'shared/http/requests/getProducts.request'
import { GetServerSideProps } from 'shared/utils/serverSideProps'

export const getServerSideProps: GetServerSideProps<GetProductsResponse> = (httpClient) => {
  return httpClient.send<GetProductsResponse>(getProductsInit)
}
