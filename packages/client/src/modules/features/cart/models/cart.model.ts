import { BehaviorSubject } from 'rxjs'
import { inject, singleton } from 'tsyringe'

import { invariant } from 'client/src/common/helpers/invariant'
import { CartSspQueryModel } from 'client/src/modules/pages/cart/models/cartSspQuery.model'
import { JSONPatchOperations } from 'shared/http/jsonPatch'
import { UpdateAmountPaths } from 'shared/http/requests/updateAmount.request'
import type { ServerSideProps } from 'shared/utils/serverSideProps'
import { SERVER_SIDE_PROPS } from 'shared/utils/serverSideProps'
import { Product } from '../domain/entities/product.entity'
import { CartService } from '../domain/services/cart.service'
import { UpdateAmountQueryModel } from './updateAmountQuery.model'

@singleton()
export class CartModel {
  products$: BehaviorSubject<Product[]>

  constructor(
    @inject(SERVER_SIDE_PROPS)
    private readonly serverSideProps: ServerSideProps,
    @inject(CartSspQueryModel)
    private readonly cartSspQueryModel: CartSspQueryModel,
    @inject(UpdateAmountQueryModel)
    private readonly updateAmountQueryModel: UpdateAmountQueryModel,
    @inject(CartService)
    private readonly cartService: CartService,
  ) {
    this.products$ = new BehaviorSubject(serverSideProps.products ?? [])

    cartSspQueryModel.query$.subscribe(({ response: { products } = {} }) => {
      products && this.products$.next(products)
    })

    this.products$.subscribe((products) => {
      this.cartService.products = products
      this.cartService.calcTotalPrice()
    })
  }

  get totalPrice() {
    return this.cartService.totalPrice
  }

  #updateProducts = () => this.products$.next([...this.cartService.products])

  #setAmount = (id: string, path: UpdateAmountPaths): void => {
    const prevAmount = this.cartService.getProductAmount(id)

    invariant(prevAmount !== undefined)

    const nextAmount = {
      [UpdateAmountPaths.increase]: prevAmount + 1,
      [UpdateAmountPaths.decrease]: prevAmount - 1,
    }[path]

    const amount = this.cartService.setProductAmount(id, nextAmount)

    if (amount === -1) return

    this.#updateProducts()
    void this.updateAmountQueryModel.send({
      op: JSONPatchOperations.replace,
      path,
      value: { id },
    })
  }

  increaseAmount = (id: string): void => this.#setAmount(id, UpdateAmountPaths.increase)
  decreaseAmount = (id: string): void => this.#setAmount(id, UpdateAmountPaths.decrease)

  remove = (id: string): void => {
    this.cartService.removeProduct(id)
    this.#updateProducts()
  }
}
