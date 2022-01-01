import { HttpClientImpl } from 'shared/http/types'

export interface GetServerSideProps<T> {
  (httpClient: HttpClientImpl): Promise<T>
}
