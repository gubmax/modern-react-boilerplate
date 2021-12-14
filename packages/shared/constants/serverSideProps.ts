import { ProductDto } from 'shared/http'

export const SERVER_SIDE_PROPS = '__SERVER_SIDE_PROPS__'

export interface ServerSideProps {
  products?: ProductDto[]
}
