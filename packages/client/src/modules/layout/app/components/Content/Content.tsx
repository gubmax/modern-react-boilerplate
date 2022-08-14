import { FC, memo, useCallback, useEffect, useRef } from 'react'
import { useNavigate, useRoutes } from 'react-router'

import { Modal } from 'client/src/common/components/addons/Modal'
import { useLocation } from 'client/src/common/hooks/history/useLocation'
import { BACKGROUND_ROUTES, ROUTES } from './Content.constants'

const Content: FC = () => {
  const isMountedRef = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { backgroundLocation } = location.state ?? {}
  const withTransition = isMountedRef.current && !!backgroundLocation
  const routes = withTransition ? BACKGROUND_ROUTES : ROUTES

  const routeEl = useRoutes(routes, location)
  const backgroundRouteEl = useRoutes(ROUTES, backgroundLocation)

  useEffect(() => {
    isMountedRef.current = true
  }, [])

  const navigateBack = useCallback(
    () => (backgroundLocation ? navigate(backgroundLocation) : navigate(-1)),
    [backgroundLocation, navigate],
  )

  return (
    <>
      {withTransition ? backgroundRouteEl : routeEl}
      <Modal active={withTransition} autoFocus={false} onClose={navigateBack}>
        {routeEl}
      </Modal>
    </>
  )
}

export default memo(Content)
