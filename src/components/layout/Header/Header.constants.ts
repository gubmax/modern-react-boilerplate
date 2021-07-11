import { PageRoutes } from 'src/infra/http'

export const ROUTES: Array<{ to: PageRoutes; text: string }> = [
  { to: PageRoutes.ROOT, text: 'About' },
  { to: PageRoutes.CART, text: 'Cart' },
]
