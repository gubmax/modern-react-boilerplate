import { FC, memo, useCallback, useEffect, useRef } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Modal } from 'client/src/common/components/addons/Modal'
import { NavigationState } from 'client/src/common/typings'
import { BACKGROUND_ROUTES, ROUTES } from './Content.constants'

const Content: FC = () => {
  const isMountedRef = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { backgroundLocation } = (location.state as NavigationState | undefined) ?? {}
  const withTransition = isMountedRef.current && !!backgroundLocation
  const routes = withTransition ? BACKGROUND_ROUTES : ROUTES

  const routeEl = useRoutes(routes, location)
  const backgroundRouteEl = useRoutes(ROUTES, backgroundLocation)

  useEffect(() => {
    isMountedRef.current = true
  }, [])

  const navigateBack = useCallback(() => navigate(-1), [navigate])

  return (
    <>
      {withTransition ? backgroundRouteEl : routeEl}
      <Modal
        active={withTransition}
        onClose={navigateBack}
        autoFocus={location.pathname !== PageRoutes.SIGN_IN}
      >
        {routeEl}
      </Modal>
    </>
  )
}

export default memo(Content)
