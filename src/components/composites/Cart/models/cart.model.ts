import { BehaviorSubject } from 'rxjs'

import { autobind } from 'src/helpers'
import { Product } from 'src/domain/entities'
import { CartService } from 'src/domain/services'
import { JSONPatchOperations, UpdateAmountPaths } from 'shared/infra/http'
import { updateAmountQuery } from 'src/infra/http/queries'

export class CartModel {
  products$: BehaviorSubject<Product[]>
  totalPrice = 0

  constructor(products: Product[] = []) {
    this.products$ = new BehaviorSubject(products)

    this.products$.subscribe(() => {
      this.updateTotalPrice()
    })

    autobind(this)
  }

  get products(): Product[] {
    return this.products$.getValue()
  }

  updateTotalPrice(): void {
    this.totalPrice = CartService.calcTotalPrice(this.products)
  }

  add(product: Product): void {
    this.products$.next(CartService.add(this.products, product))
  }

  private async setAmount(id: string, path: UpdateAmountPaths): Promise<void> {
    const amount = CartService.getAmount(this.products, id)

    if (amount === undefined) return

    const nextAmount = {
      [UpdateAmountPaths.increase]: amount + 1,
      [UpdateAmountPaths.decrease]: amount - 1,
    }[path]

    const nextProducts = CartService.setAmount(this.products, id, nextAmount)

    if (nextProducts === false) return

    this.products$.next([...nextProducts])

    await updateAmountQuery.send({
      op: JSONPatchOperations.replace,
      path,
      value: { id },
    })
  }

  async increaseAmount(id: string): Promise<void> {
    return this.setAmount(id, UpdateAmountPaths.increase)
  }

  async decreaseAmount(id: string): Promise<void> {
    return this.setAmount(id, UpdateAmountPaths.decrease)
  }

  remove(id: string): void {
    this.products$.next(CartService.remove(this.products, id))
  }
}
