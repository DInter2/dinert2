'use client'
import { ReactNode } from 'react'
import { CustonThemeProvider } from '../theme/MuiTheme.Context'
import SidebarContextProvider from '../../client/sidebar/Sidebar.Context'
import BreadDrumbsContextProvider from '../breadDrumbs/BreadDrumbs.Context'

const MuiThemeClient = ({children} : {children : ReactNode}) => {
  return (
    <CustonThemeProvider>
      <SidebarContextProvider>
        <BreadDrumbsContextProvider>
          { children }
        </BreadDrumbsContextProvider>
      </SidebarContextProvider>
    </CustonThemeProvider>
  )
}

export default MuiThemeClient
