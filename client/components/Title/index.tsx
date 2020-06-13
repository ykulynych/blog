import React from 'react'
import { useAppCtx, useVm } from '../../hooks'
import { TitleVm } from './vm'

export const Title = () => {
  const vm = useVm(TitleVm, useAppCtx())

  return <h1>{vm.title}</h1>
}
