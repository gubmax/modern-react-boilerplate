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
  totalPrice = 0

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

    cartSspQueryModel.query$.subscribe(({ response }) => {
      const { products } = response ?? {}
      if (products) this.products$.next(products)
    })

    this.products$.subscribe((products) => {
      this.totalPrice = this.cartService.calcTotalPrice(products)
    })
  }

  #setAmount = (id: string, path: UpdateAmountPaths): void => {
    const prevAmount = this.cartService.getProductAmount(this.products$.value, id)

    invariant(prevAmount !== undefined)

    const nextAmount = {
      [UpdateAmountPaths.increase]: prevAmount + 1,
      [UpdateAmountPaths.decrease]: prevAmount - 1,
    }[path]

    const updatedProducts = this.cartService.setProductAmount(this.products$.value, id, nextAmount)

    this.products$.next(updatedProducts)

    void this.updateAmountQueryModel.send({
      op: JSONPatchOperations.replace,
      path,
      value: { id },
    })
  }

  increaseAmount = (id: string): void => this.#setAmount(id, UpdateAmountPaths.increase)
  decreaseAmount = (id: string): void => this.#setAmount(id, UpdateAmountPaths.decrease)

  remove = (id: string): void => {
    const updatedProducts = this.cartService.removeProduct(this.products$.value, id)
    this.products$.next(updatedProducts)
  }
}
