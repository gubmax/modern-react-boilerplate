import { produce } from 'immer'
import { singleton } from 'tsyringe'

import { Product } from '../entities/product.entity'

const AMOUNT_MIN = 1
const AMOUNT_MAX = 10

@singleton()
export class CartService {
  roundAmount = (val: number): number => {
    return Math.round((val + Number.EPSILON) * 100) / 100
  }

  calcTotalPrice = (products: Product[]): number => {
    let total = 0
    products.forEach(({ price, amount }) => (total += price * amount))
    return this.roundAmount(total)
  }

  getProductAmount = (products: Product[], id: string): number | undefined => {
    return products.find((product) => product.id === id)?.amount
  }

  setProductAmount = (products: Product[], id: string, amount: number): Product[] => {
    if (amount < AMOUNT_MIN || amount > AMOUNT_MAX) return products

    const index = products.findIndex((product) => product.id === id)
    if (index === -1) return products

    const nextAmount = [AMOUNT_MIN, amount, AMOUNT_MAX].sort((a, b) => a - b)[1]

    return produce(products, (draft) => {
      draft[index].amount = nextAmount
    })
  }

  removeProduct = (products: Product[], id: string): Product[] => {
    return products.filter((product) => product.id !== id)
  }
}
