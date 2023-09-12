'use client'
import { ReactNode } from 'react'
import { CustonThemeProvider } from '../theme/MuiTheme.Context'
import BreadDrumbsContextProvider from '../breadDrumbs/BreadDrumbs.Context'
import ToasterProvider from '../toast/ToasterProvider'

const MuiThemeClient = ({children} : {children : ReactNode}) => {
  return (
    <CustonThemeProvider>
        <BreadDrumbsContextProvider>
          <ToasterProvider />
            { children }
        </BreadDrumbsContextProvider>
    </CustonThemeProvider>
  )
}

export default MuiThemeClient
