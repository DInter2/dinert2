'use client'
import { ReactNode } from 'react'
import { CustonThemeProvider } from './MuiTheme.Context'

const MuiThemeClient = ({children} : {children : ReactNode}) => {
  return (
    <CustonThemeProvider>
      { children }
    </CustonThemeProvider>
  )
}

export default MuiThemeClient
