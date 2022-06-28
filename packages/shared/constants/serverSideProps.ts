import { ProductDto } from 'shared/http/requests/getProducts.request'

export const SERVER_SIDE_PROPS = '__SERVER_SIDE_PROPS__'

export interface ServerSideProps {
  products?: ProductDto[]
}
