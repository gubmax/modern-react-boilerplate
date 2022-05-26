import { HttpClientImpl } from 'shared/http/types'

export type GetServerSideProps<T> = (httpClient: HttpClientImpl) => Promise<T>
