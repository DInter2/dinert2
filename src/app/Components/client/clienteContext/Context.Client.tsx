'use client'
import { ReactNode } from 'react'
import { CustonThemeProvider } from '../theme/MuiTheme.Context'
import SidebarContextProvider from '../../client/sidebar/Sidebar.Context'
import BreadDrumbsContextProvider from '../breadDrumbs/BreadDrumbs.Context'
import ToasterProvider from '../toast/ToasterProvider'

const MuiThemeClient = ({children} : {children : ReactNode}) => {
  return (
    <CustonThemeProvider>
      <SidebarContextProvider>
        <BreadDrumbsContextProvider>
          <ToasterProvider />
            { children }
        </BreadDrumbsContextProvider>
      </SidebarContextProvider>
    </CustonThemeProvider>
  )
}

export default MuiThemeClient
