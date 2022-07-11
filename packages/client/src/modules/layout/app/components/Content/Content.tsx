import { FC, memo, useCallback } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router'
import { Action } from 'history'

import { PageRoutes } from 'client/src/browser/http/constants'
import { Modal } from 'client/src/common/components/addons/Modal'
import { useAction } from 'client/src/common/hooks/useAction'
import { NavigationState } from 'client/src/common/typings'
import { BACKGROUND_ROUTES, ROUTES } from './Content.constants'

const Content: FC = () => {
  const action = useAction()
  const location = useLocation()
  const navigate = useNavigate()

  const { backgroundLocation } = (location.state as NavigationState | undefined) ?? {}
  const routes = backgroundLocation && action === Action.Push ? BACKGROUND_ROUTES : ROUTES

  const routeEl = useRoutes(routes, location)
  const backgroundRouteEl = useRoutes(ROUTES, backgroundLocation)

  const withTransition = action === Action.Push && !!backgroundLocation

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
