import { HttpClientImpl } from 'shared/http'

export interface GetServerSideProps<T> {
  (httpClient: HttpClientImpl): Promise<T>
}
