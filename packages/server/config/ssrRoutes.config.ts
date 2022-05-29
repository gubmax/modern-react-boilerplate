import { PageRoutes } from 'client/src/browser/http/constants'
import { getServerSideProps as getCartSSP } from 'client/src/modules/pages/cart/dataFetching'
import { ServerSideProps } from 'shared/constants/serverSideProps'
import { GetServerSideProps } from 'shared/utils/serverSideProps'

interface RouteOptions {
  getServerSideProps?: GetServerSideProps<ServerSideProps>
}

/**
 * Dynamic Rendering / Server-side Rendering routes
 */
export const CONFIG_SSR_ROUTES: Record<string, RouteOptions | undefined> = {
  [PageRoutes.CART]: { getServerSideProps: getCartSSP },
}
