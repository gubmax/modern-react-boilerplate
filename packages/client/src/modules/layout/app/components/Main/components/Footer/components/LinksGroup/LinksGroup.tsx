import { FC, memo } from 'react'

import { A } from 'client/src/common/components/typography/Anchor'
import { links } from './LinksGroup.constants'
import * as s from './LinksGroup.css'

const LinksGroup: FC = () => {
  return (
    <div className={s.wrapper}>
      {links.map(({ title, items }, i) => (
        <ul key={i} className={s.column}>
          <span className={s.title}>{title}</span>
          {items.map(({ text, link }, j) => (
            <li key={j} className={s.link}>
              <A href={link}>{text}</A>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default memo(LinksGroup)
