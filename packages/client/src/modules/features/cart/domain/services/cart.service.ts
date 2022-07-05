import { singleton } from 'tsyringe'

import { Product } from '../entities/product.entity'

const AMOUNT_MIN = 1
const AMOUNT_MAX = 10

@singleton()
export class CartService {
  products: Product[] = []
  #totalPrice = 0

  get totalPrice() {
    return this.#totalPrice
  }

  roundAmount = (val: number): number => {
    return Math.round((val + Number.EPSILON) * 100) / 100
  }

  calcTotalPrice = (): void => {
    let total = 0
    this.products.forEach(({ price, amount }) => (total += price * amount))
    this.#totalPrice = this.roundAmount(total)
  }

  getProductAmount = (id: string): number | undefined => {
    return this.products.find((product) => product.id === id)?.amount
  }

  setProductAmount = (id: string, amount: number): number => {
    if (amount < AMOUNT_MIN || amount > AMOUNT_MAX) return -1

    const index = this.products.findIndex((product) => product.id === id)
    if (index === -1) return -1

    const nextAmount = [AMOUNT_MIN, amount, AMOUNT_MAX].sort((a, b) => a - b)[1]

    this.products[index].amount = nextAmount

    return nextAmount
  }

  removeProduct = (id: string): void => {
    this.products = this.products.filter((product) => product.id !== id)
  }
}
