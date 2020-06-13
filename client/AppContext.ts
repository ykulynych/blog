import React from 'react'
import { AppState } from './states'

const context = {
  appState: new AppState()
}

export type TAppContext = typeof context
export const AppContext = React.createContext(context)
