import { FC } from 'react'

import { Link } from 'src/components/services/Link'
import { PageRoutes } from 'src/infra/http'

const Header: FC = () => {
  return (
    <nav>
      <Link to={PageRoutes.ROOT}>Home</Link>
      <br />
      <Link to={PageRoutes.CART}>Cart</Link>
    </nav>
  )
}

export default Header
