import { FC, lazy, Suspense } from 'react'

import { Wrapper } from 'src/components/surfaces'

const Lazy = lazy(() => import('../Lazy/Lazy'))

const App: FC = () => {
  return (
    <Wrapper>
      <p>Hello!</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Lazy />
      </Suspense>
    </Wrapper>
  )
}

export default App
