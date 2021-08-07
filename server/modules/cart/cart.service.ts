import { Injectable, UnprocessableEntityException } from '@nestjs/common'

@Injectable()
export class CartService {
  amount: Record<string, number> = {}

  increaseAmount(id: string): void {
    const nextAmount = (this.amount[id] || 0) + 1

    if (nextAmount > 5) {
      throw new UnprocessableEntityException('You can order no more than 5 items at a time')
    }

    this.amount[id] = nextAmount
  }

  decreaseAmount(id: string): void {
    const nextAmount = (this.amount[id] || 0) - 1
    this.amount[id] = Math.max(nextAmount, 0)
  }
}
