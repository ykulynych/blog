import React from 'react'
import * as States from './states'

const context = {
  articlesState: new States.ArticlesState()
}

export type TAppContext = typeof context

export const AppContext = React.createContext(context)
