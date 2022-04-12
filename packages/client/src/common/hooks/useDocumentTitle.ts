import { useInsertionEffect } from 'react'

const TITLE_DEFAULT = 'Boilerplate'

export const useDocumentTitle = (title?: string): string => {
  const currTitle = title?.length ? `${title} · ${TITLE_DEFAULT}` : TITLE_DEFAULT

  useInsertionEffect(() => {
    document.title = currTitle
  }, [currTitle])

  return currTitle
}
