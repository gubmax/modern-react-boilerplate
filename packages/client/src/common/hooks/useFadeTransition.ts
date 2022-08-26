import { Dispatch, SetStateAction, useMemo, useState } from 'react'

import { useEnhancedEffect } from './useEnhancedEffect'

interface Options {
  fadeIn?: string
  fadeOut?: string
}

export interface FadeProps {
  className?: string
  onAnimationEnd: () => false | void
}

export function useFadeTransition(
  initialValue = false,
  { fadeIn, fadeOut }: Options = {},
): [FadeProps, boolean, Dispatch<SetStateAction<boolean>>] {
  // CSS animation control
  const [transition, setTransition] = useState(initialValue)
  // Toggle visibility after animation
  const [isVisible, setVisible] = useState(transition)

  // Update visibility immediately if fadeOut is not defined
  useEnhancedEffect(() => {
    !fadeOut && setVisible(false)
  }, [transition, fadeOut])

  // Update visibility when transition changes
  useEnhancedEffect(() => {
    transition && setVisible(true)
  }, [transition])

  const fadeProps = useMemo<FadeProps>(
    () => ({
      className: transition ? fadeIn : fadeOut,
      onAnimationEnd: () => !transition && setVisible(false),
    }),
    [fadeIn, fadeOut, transition],
  )

  return [fadeProps, isVisible, setTransition]
}
