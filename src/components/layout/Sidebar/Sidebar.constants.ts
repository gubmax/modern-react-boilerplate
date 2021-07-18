import { PageRoutes } from 'src/infra/http'

export const ROUTES: Array<{ to: PageRoutes; icon: string; text: string }> = [
  { to: PageRoutes.ROOT, icon: 'ℹ️', text: 'About' },
  { to: PageRoutes.CART, icon: '🛒', text: 'Shopping Cart' },
]
