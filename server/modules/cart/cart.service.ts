import { Injectable } from '@nestjs/common'

import { InternalServerException } from 'shared/domain/exceptions'

@Injectable()
export class CartService {
  amount: Record<string, number> = {}

  increaseAmount(id: string): void {
    const nextAmount = (this.amount[id] || 0) + 1

    if (nextAmount > 5) {
      throw new InternalServerException('You can order no more than 5 items at a time')
    }

    this.amount[id] = nextAmount
  }

  decreaseAmount(id: string): void {
    const nextAmount = (this.amount[id] || 0) - 1
    this.amount[id] = Math.max(nextAmount, 0)
  }
}
