import { FC, lazy, Suspense } from 'react'

import { Wrapper } from 'src/components/surfaces/Wrapper'

const Lazy = lazy(() => import('src/components/layout/Lazy/Lazy'))

const Main: FC = () => {
  return (
    <Wrapper>
      <p>Hello!</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Lazy />
      </Suspense>
    </Wrapper>
  )
}

export default Main
