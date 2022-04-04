import { useRef, useState, useLayoutEffect, FC } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory, Update } from 'history'

import { useInject } from 'client/src/common/hooks/useInject'
import { HistoryContext } from 'client/src/common/contexts/HistoryContext'
import { PreloadChunksModel } from 'client/src/common/models/preloadChunks.model'
import { dynamicRoutes } from './dynamicRoutes'

const BrowserRouter: FC = ({ children }) => {
  const preloadChunksModel = useInject<PreloadChunksModel<Update>>(PreloadChunksModel)

  const { current: history } = useRef(createBrowserHistory({ window }))
  const [{ location }, setHistory] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => {
    preloadChunksModel.subscribe((update) => update && setHistory(update))

    history.listen((update) => {
      const loadable = dynamicRoutes[update.location.pathname]
      preloadChunksModel.preload({ loadable, payload: update })
    })
  }, [history, preloadChunksModel])

  return (
    <Router location={location} navigator={history}>
      <HistoryContext.Provider value={history}>{children}</HistoryContext.Provider>
    </Router>
  )
}

export default BrowserRouter
