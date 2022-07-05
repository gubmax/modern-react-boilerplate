import { ProductDto } from 'shared/http/requests/getProducts.request'
import { HttpClientImpl } from 'shared/http/types'

export const SERVER_SIDE_PROPS = '__SERVER_SIDE_PROPS__'

export type GetServerSideProps<T> = (httpClient: HttpClientImpl) => Promise<T>

export interface ServerSideProps {
  products?: ProductDto[]
}
