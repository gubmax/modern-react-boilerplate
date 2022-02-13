import { render, screen } from '@testing-library/react'

import { PageRoutes } from 'client/src/infra/http/constants'
import Link from './Link'

const TEXT = 'some text'

jest.mock('react-router', () => ({
  useNavigate: () => {
    // noop
  },
}))

test('renders link', () => {
  render(<Link to={PageRoutes.ROOT}>{TEXT}</Link>)
  const linkElement = screen.getByText(new RegExp(TEXT, 'i'))
  expect(linkElement).toBeInTheDocument()
})
