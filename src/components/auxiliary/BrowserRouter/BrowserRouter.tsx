import { useRef, useState, useLayoutEffect, FC } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { HistoryContext } from 'src/common/contexts'

const BrowserRouter: FC = ({ children }) => {
  const { current: history } = useRef(createBrowserHistory({ window }))
  const [{ location }, setHistory] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setHistory), [history])

  return (
    <Router location={location} navigator={history}>
      <HistoryContext.Provider value={history}>{children}</HistoryContext.Provider>
    </Router>
  )
}

export default BrowserRouter
