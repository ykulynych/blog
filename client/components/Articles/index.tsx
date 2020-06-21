import * as R from 'ramda'
import React from 'react'
import { observer } from 'mobx-react-lite'
import { useAppCtx, useVm } from '../../hooks'
import { ArticlesVm } from './vm'

export const Articles = observer(() => {
  const vm = useVm(ArticlesVm, useAppCtx())

  return (
    <>
      <ul>
        {R.toPairs(vm.articles).map(([id, articleData]) => (
          <li key={id}>
            <h6>{articleData.title}</h6>
            <p>{articleData.description}</p>
            <button onClick={R.partial(vm.removeArticle, [id])}>
              Remove article
            </button>
          </li>
        ))}
      </ul>
      <button onClick={vm.addArticle}>Add article</button>
    </>
  )
})
