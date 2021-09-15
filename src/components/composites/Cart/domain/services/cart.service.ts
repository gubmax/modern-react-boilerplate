import produce from 'immer'

import { Product } from '../entities'

const AMOUNT_MIN = 1
const AMOUNT_MAX = 10

function calcAmount(amount: number) {
  return [AMOUNT_MIN, amount, AMOUNT_MAX].sort((a, b) => a - b)[1]
}

export class CartService {
  static calcTotalPrice(products: Product[]): number {
    return products.reduce((total, { price, amount }) => total + price * amount, 0)
  }

  static add(products: Product[], product: Product): Product[] {
    return Array.from(new Set([...products, product]))
  }

  static getAmount(products: Product[], id: string): number | undefined {
    return products.find((product) => product.id === id)?.amount
  }

  static setAmount(products: Product[], id: string, amount: number): Product[] | false {
    if (amount < AMOUNT_MIN || amount > AMOUNT_MAX) return false

    const index = products.findIndex((product) => product.id === id)
    if (index === -1) return false

    const nextAmount = calcAmount(amount)

    return produce(products, (draft) => {
      draft[index].amount = nextAmount
    })
  }

  static remove(products: Product[], id: string): Product[] {
    return products.filter((product) => product.id !== id)
  }
}
