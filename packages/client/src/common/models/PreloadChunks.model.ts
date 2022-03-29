import { ElementType } from 'react'
import { from, map, of, Subject, switchMap, tap } from 'rxjs'
import { singleton } from 'tsyringe'

import { QueryModel } from './queries/query'

interface Chunk {
  default: ElementType
}

interface PreloadOptions<T> {
  payload?: T
  loadable?(): Promise<Chunk>
}

@singleton()
export class PreloadChunksModel<T = unknown> extends QueryModel<Chunk> {
  #loadedChunks = new WeakSet<() => Promise<Chunk>>()
  #preloadSubject$ = new Subject<PreloadOptions<T>>()

  #preloadObservable$ = this.#preloadSubject$.pipe(
    tap(() => this.reset()),
    switchMap(({ payload, loadable }) => {
      if (!loadable || this.#loadedChunks.has(loadable)) {
        return of(payload)
      }

      this.#loadedChunks.add(loadable)

      return from(this.run(loadable)).pipe(map(() => payload))
    }),
  )

  // Public

  get status() {
    return this.query$.value.status
  }

  preload = (options: PreloadOptions<T>): void => {
    this.#preloadSubject$.next(options)
  }

  subscribe = (callback: (payload?: T) => void): void => {
    this.#preloadObservable$.subscribe(callback)
  }
}
