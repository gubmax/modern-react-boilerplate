import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import { PageRoutes } from 'client/src/browser/http/constants'
import { noop } from 'client/src/common/helpers/noop'
import Link from './Link'

const TEXT = 'some text'

vi.mock('react-router', () => ({
  useNavigate: noop,
  useLocation: () => ({}),
}))

test('renders link', () => {
  render(<Link to={PageRoutes.ROOT}>{TEXT}</Link>)
  const linkElement = screen.getByText(new RegExp(TEXT, 'i'))
  expect(linkElement).toBeDefined()
})
