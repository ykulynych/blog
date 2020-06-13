import React from 'react'
import { TAppContext } from '../AppContext'

type ViewModal<V> = new (context: TAppContext, ...params: any[]) => V

export function useVm<V>(
  vm: ViewModal<V>,
  context: TAppContext,
  ...params: any[]
): V {
  const vmRef = React.useRef<V | null>(null)

  if (!vmRef.current) {
    vmRef.current = new vm(context, ...params)
  }

  return vmRef.current
}
