import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Options {
  fadeIn?: string
  fadeOut?: string
}

interface FadeProps {
  className?: string
  onAnimationEnd: () => false | void
}

export function useFadeTransition(
  initialValue = false,
  { fadeIn, fadeOut }: Options = {},
): [FadeProps, boolean, Dispatch<SetStateAction<boolean>>] {
  // CSS animation control
  const [transition, setTransition] = useState(initialValue)
  // Toggle visability after animation
  const [isVisible, setVisible] = useState(transition)

  // Update visibility immediately if fadeOut is not defined
  useEffect(() => {
    !fadeOut && setVisible(false)
  }, [transition, fadeOut])

  // Update visibility when transition changes
  useEffect(() => {
    transition && setVisible(true)
  }, [transition])

  const fadeProps: FadeProps = {
    className: transition ? fadeIn : fadeOut,
    onAnimationEnd: () => !transition && setVisible(false),
  }

  return [fadeProps, isVisible, setTransition]
}
