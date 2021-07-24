import { BehaviorSubject } from 'rxjs'

import { autobind } from 'src/helpers'
import { Product } from '../models'

export class CartService {
  goods$: BehaviorSubject<Product[]>
  totalPrice = 0

  constructor(goods: Product[] = []) {
    this.goods$ = new BehaviorSubject(goods)
    this.goods$.subscribe(() => this.updateTotalPrice())
    this.updateTotalPrice()
    autobind(this)
  }

  get goods(): Product[] {
    return this.goods$.getValue()
  }

  updateTotalPrice(): void {
    this.totalPrice = this.goods.reduce((total, { price, amount }) => total + price * amount, 0)
  }

  add(product: Product): void {
    this.goods$.next(Array.from(new Set([...this.goods, product])))
  }

  setAmount(id: string, newCurrent: number): void {
    const product = this.goods.find((product) => product.id === id)

    if (!product) return

    product.amount = [1, newCurrent, 10].sort((a, b) => a - b)[1]
    this.goods$.next([...this.goods])
  }

  remove(id: string): void {
    this.goods$.next(this.goods.filter((product) => product.id !== id))
  }
}
