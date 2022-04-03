import { FC } from 'react'

import * as s from './CommonSvg.css'

const CommonSvg: FC = () => (
  <svg className={s.hide}>
    <defs>
      <linearGradient id="lg-accent-light" gradientTransform="rotate(45)">
        <stop stopColor="#6153f9"></stop>
        <stop offset="1" stopColor="#00b5dd"></stop>
      </linearGradient>
      <linearGradient id="lg-accent-dark" gradientTransform="rotate(45)">
        <stop stopColor="#7064f9"></stop>
        <stop offset="1" stopColor="#66e3ff"></stop>
      </linearGradient>
    </defs>
  </svg>
)

export default CommonSvg
