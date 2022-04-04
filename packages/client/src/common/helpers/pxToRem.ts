import { FONT_SIZE_DEFAULT } from '../styles/constants/font'

export const pxToRem = (val: number) => `${(val / FONT_SIZE_DEFAULT).toFixed(2)}rem`
