import { singleton, inject } from 'tsyringe'
import { BehaviorSubject } from 'rxjs'

import { ServerSidePropsQueryModel, UpdateAmountQueryModel } from 'client/src/models/queries'
import { GetProductsResponse, JSONPatchOperations, UpdateAmountPaths } from 'shared/http'
import { CartService } from '../domain/services'
import { Product } from '../domain/entities'

@singleton()
export class CartModel {
  products$ = new BehaviorSubject<Product[]>([])

  constructor(
    @inject(ServerSidePropsQueryModel)
    readonly serverSidePropsQueryModel: ServerSidePropsQueryModel<GetProductsResponse>,
    @inject(UpdateAmountQueryModel)
    private readonly updateAmountQueryModel: UpdateAmountQueryModel,
    @inject(CartService) private readonly cartService: CartService,
  ) {
    serverSidePropsQueryModel.state$.subscribe(({ response: { products } = {} }) => {
      products && this.products$.next(products)
    })

    this.products$.subscribe((products) => {
      this.cartService.products = products
      this.cartService.calcTotalPrice()
    })
  }

  #updateProducts = () => this.products$.next([...this.cartService.products])

  get totalPrice() {
    return this.cartService.totalPrice
  }

  #setAmount = (id: string, path: UpdateAmountPaths): void => {
    const prevAmount = this.cartService.getProductAmount(id)

    if (prevAmount === undefined) return

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
