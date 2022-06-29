import critical from 'critical'

import { PATH_RESOLVED_CLIENT } from 'shared/constants/paths'

/**
 * @link https://github.com/addyosmani/critical
 */
export const generateCriticalCss = (src: string): Promise<void> => {
  return critical.generate({
    inline: true,
    base: PATH_RESOLVED_CLIENT,
    src,
    target: src,
  })
}
