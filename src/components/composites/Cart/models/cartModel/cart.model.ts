import { inject, injectable } from 'inversify'
import { BehaviorSubject } from 'rxjs'

import { UpdateAmountQueryModel, updateAmountQueryModelSymbol } from 'src/models/queries'
import { JSONPatchOperations, UpdateAmountPaths } from 'shared/http'
import { CartService, cartServiceSymbol } from '../../domain/services'
import { Product } from '../../domain/entities'

@injectable()
export class CartModel {
  #updateAmountQueryModel: UpdateAmountQueryModel
  #cartService: CartService
  products$ = new BehaviorSubject<Product[]>([])
  totalPrice = 0

  constructor(
    @inject(updateAmountQueryModelSymbol) updateAmountQueryModel: UpdateAmountQueryModel,
    @inject(cartServiceSymbol) cartService: CartService,
  ) {
    this.#updateAmountQueryModel = updateAmountQueryModel
    this.#cartService = cartService
    this.products$.subscribe(() => this.#updateTotalPrice())
  }

  get products(): Product[] {
    return this.products$.getValue()
  }

  #updateTotalPrice = (): void => {
    this.totalPrice = this.#cartService.calcTotalPrice(this.products)
  }

  add(product: Product): void {
    this.products$.next(this.#cartService.add(this.products, product))
  }

  #setAmount = async (id: string, path: UpdateAmountPaths): Promise<void> => {
    const amount = this.#cartService.getAmount(this.products, id)

    if (amount === undefined) return

    const nextAmount = {
      [UpdateAmountPaths.increase]: amount + 1,
      [UpdateAmountPaths.decrease]: amount - 1,
    }[path]

    const nextProducts = this.#cartService.setAmount(this.products, id, nextAmount)

    if (nextProducts === false) return

    this.products$.next([...nextProducts])

    await this.#updateAmountQueryModel.send({
      op: JSONPatchOperations.replace,
      path,
      value: { id },
    })
  }

  increaseAmount = async (id: string): Promise<void> => {
    return this.#setAmount(id, UpdateAmountPaths.increase)
  }

  decreaseAmount = async (id: string): Promise<void> => {
    return this.#setAmount(id, UpdateAmountPaths.decrease)
  }

  remove = (id: string): void => {
    this.products$.next(this.#cartService.remove(this.products, id))
  }
}
