'use client'
import { Box, AppBar } from '@mui/material'
import React from 'react'
import { appBarHeight } from '../../consts/appBarHeigth'
import { drawerWidth } from '../../consts/drawerWidth'
import { Header } from './Header'

const AppBarHeader = ({ scrollPosition, handleDrawerToggle }: { scrollPosition: number, handleDrawerToggle: () => void }) => {
  return (
    <Box
    height={appBarHeight}
    >
      <AppBar
          elevation={scrollPosition === 0 ? 0: 0}
          position="fixed"
          sx={{
            backdropFilter:scrollPosition === 0 ? undefined : "blur(4px)",
            // backgroundColor:'rgba(100,100,100,0.3)',
            background: 'transparent',
            width: { lg: `calc(98% - ${drawerWidth}px)`, xs: "calc(98%)"},
            ml: { lg: `${drawerWidth}px` },
            borderRadius: 4,
            marginTop:{xs: "1%", sm: 1},
            marginX: "1%",
          }}
        >
          <Header
            handleDrawerToggle={handleDrawerToggle}
          />
      </AppBar>
    </Box>
  )
}

export default AppBarHeader
