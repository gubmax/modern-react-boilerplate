import { PageRoutes } from 'client/src/browser/http/constants'
import { getServerSideProps as getCartSSP } from 'client/src/modules/pages/cart/dataFetching'
import { HtmlEntries } from 'shared/constants/entries'
import { GetServerSideProps, ServerSideProps } from 'shared/utils/serverSideProps'

interface PageOptions {
  name: string
  entry: HtmlEntries
  getServerSideProps?: GetServerSideProps<ServerSideProps>
}

export const CONFIG_PAGES: Record<string, PageOptions | undefined> = {
  [PageRoutes.ROOT]: {
    name: 'root',
    entry: HtmlEntries.MAIN,
  },
  [PageRoutes.ABOUT]: {
    name: 'about',
    entry: HtmlEntries.MAIN,
  },
  [PageRoutes.CART]: {
    name: 'cart',
    entry: HtmlEntries.MAIN,
    getServerSideProps: getCartSSP,
  },
  [PageRoutes.COLLECTION]: {
    name: 'collection',
    entry: HtmlEntries.MAIN,
  },
  [PageRoutes.HELP]: {
    name: 'help',
    entry: HtmlEntries.MAIN,
  },
  [PageRoutes.SALES]: {
    name: 'sales',
    entry: HtmlEntries.MAIN,
  },
  [PageRoutes.SCHEDULE]: {
    name: 'schedule',
    entry: HtmlEntries.MAIN,
  },
  [PageRoutes.SETTINGS]: {
    name: 'settings',
    entry: HtmlEntries.MAIN,
  },
  [PageRoutes.SIGN_IN]: {
    name: 'signIn',
    entry: HtmlEntries.SIGN_IN,
  },
  [PageRoutes.SIGN_UP]: {
    name: 'signUp',
    entry: HtmlEntries.SIGN_UP,
  },
}
