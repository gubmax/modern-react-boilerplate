import { Injectable } from '@nestjs/common'

import { BadRequestException } from 'shared/exceptions'
import { wait } from 'server/src/common/helpers'

@Injectable()
export class CartService {
  amount: Record<string, number> = {}

  async increaseAmount(id: string): Promise<void | Error> {
    const nextAmount = (this.amount[id] || 0) + 1

    if (nextAmount > 5) {
      throw new BadRequestException('You can order no more than 5 items at a time')
    }

    this.amount[id] = nextAmount

    return wait(250)
  }

  async decreaseAmount(id: string): Promise<void | Error> {
    const nextAmount = (this.amount[id] || 0) - 1
    this.amount[id] = Math.max(nextAmount, 0)

    return wait(250)
  }
}
