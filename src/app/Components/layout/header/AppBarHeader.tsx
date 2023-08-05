'use client'
import { Box, AppBar } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import { appBarHeight } from '../../consts/appBarHeigth'
import { drawerWidth } from '../../consts/drawerWidth'
import { Header } from './Header'
import { User } from '@/types/user'

const AppBarHeader = ({ currentUser }: {currentUser: User}) => {
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return (
    <Box
    height={appBarHeight}
    sx={{maxWidth: "98vw"}}
    >
      <AppBar
          elevation={scrollPosition === 0 ? 0: 1}
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
          <Header currentUser={currentUser} />
      </AppBar>
    </Box>
  )
}

export default AppBarHeader
