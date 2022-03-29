import { render, screen } from '@testing-library/react'

import { noop } from 'client/src/common/helpers/noop'
import { PageRoutes } from 'client/src/browser/http/constants'
import Link from './Link'

const TEXT = 'some text'

jest.mock('react-router', () => ({
  useNavigate: noop,
}))

test('renders link', () => {
  render(<Link to={PageRoutes.ROOT}>{TEXT}</Link>)
  const linkElement = screen.getByText(new RegExp(TEXT, 'i'))
  expect(linkElement).toBeInTheDocument()
})
