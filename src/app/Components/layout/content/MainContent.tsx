'use client'
import React from 'react';
import { drawerWidth } from '../../consts/drawerWidth';
import { Box } from '@mui/material';

export default function MainContent({ children }: {children: React.ReactNode }) {

  return (
    <Box
      sx={{
        px: {sm: 2, xs: 1},
        boxSizing: "border-box",
        color: "white",
        ml: { lg: `${drawerWidth}px`, xs:0 },
        width: { lg: `calc(100% - ${drawerWidth}px)`, xs: "100%"},
        minHeight: "85vh",
      }}>
      {children}
    </Box>
  )
}
