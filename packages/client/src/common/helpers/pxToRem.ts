import { FONT_SIZE_DEFAULT } from '../constants/fonts'

export const pxToRem = (val: number) => `${(val / FONT_SIZE_DEFAULT).toFixed(2)}rem`
