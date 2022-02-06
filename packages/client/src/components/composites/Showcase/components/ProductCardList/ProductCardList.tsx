import { FC, useMemo } from 'react'

import { Modal } from 'client/src/components/auxiliary/Modal'
import { cn } from 'client/src/common/helpers/classNames'
import { useToggle } from 'client/src/common/hooks/useToggle'
import { ProductCard } from './components/ProductCard'
import { backgrounds } from './ProductCardList.constants'
import { ProductCardListProps } from './ProductCardList.types'
import * as s from './ProductCardList.css'

const ProductCardList: FC<ProductCardListProps> = ({ className, style, items }) => {
  const [shown, toggleShown] = useToggle()

  const listTemplate = useMemo(
    () =>
      items.map(({ bg, icon, price }, index) => (
        <ProductCard
          key={index}
          className={s.productCard}
          imageClassName={backgrounds[bg]}
          icon={icon}
          price={price}
          onClick={toggleShown}
        />
      )),
    [items, toggleShown],
  )

  return (
    <div className={cn(s.wrapper, className)} style={style}>
      {listTemplate}
      <Modal active={shown} onClose={toggleShown}>
        🚧
      </Modal>
    </div>
  )
}

export default ProductCardList
