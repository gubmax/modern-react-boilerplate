import { FC } from 'react'

import * as s from './CommonSvg.css'

const CommonSvg: FC = () => (
  <svg className={s.hide}>
    <defs>
      <linearGradient id="lg-accent-light" gradientTransform="rotate(45)">
        <stop offset="74%" stopColor="#3f51b5"></stop>
        <stop offset="100%" stopColor="#7f53ac"></stop>
      </linearGradient>
      <linearGradient id="lg-accent-dark" gradientTransform="rotate(45)">
        <stop offset="74%" stopColor="#647dee"></stop>
        <stop offset="100%" stopColor="#7f53ac"></stop>
      </linearGradient>
    </defs>
  </svg>
)

export default CommonSvg
