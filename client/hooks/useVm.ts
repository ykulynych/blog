import React from 'react'
import * as R from 'ramda'
import { Maybe } from 'monet'
import { TAppContext } from '../AppContext'

type TViewModal<V> = new (context: TAppContext, ...params: any[]) => V

export function useVm<V>(
  vm: TViewModal<V>,
  context: TAppContext,
  ...params: any[]
): V {
  const vmRef = React.useRef<V | null>(null)

  const initializeVm = () => new vm(context, ...params)
  const assignVm = (initVm: V) => {
    vmRef.current = initVm
  }

  return Maybe.fromNull(vmRef.current)
    .catchMap(
      R.compose<V, V, Maybe<V>>(Maybe.of, R.tap(assignVm), initializeVm)
    )
    .some()
}
