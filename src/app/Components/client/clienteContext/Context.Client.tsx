'use client'
import { ReactNode } from 'react'
import { CustonThemeProvider } from '../theme/MuiTheme.Context'
import SidebarContextProvider from '../../client/sidebar/Sidebar.Context'

const MuiThemeClient = ({children} : {children : ReactNode}) => {
  return (
    <CustonThemeProvider>
      <SidebarContextProvider>
        { children }
      </SidebarContextProvider>
    </CustonThemeProvider>
  )
}

export default MuiThemeClient
