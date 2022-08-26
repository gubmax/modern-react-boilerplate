import { FONT_SIZE_DEFAULT } from '../styles/constants/font'

export function pxToRem(val: number) {
  return `${(val / FONT_SIZE_DEFAULT).toFixed(2)}rem`
}
