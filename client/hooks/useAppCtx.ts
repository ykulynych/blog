import React from 'react'
import { AppContext } from '../AppContext'

export const useAppCtx = () => React.useContext(AppContext)
