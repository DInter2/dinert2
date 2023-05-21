'use client'
import React from 'react';
import { drawerWidth } from '../../consts/drawerWidth';
import { Box } from '@mui/material';

export default function MainContent({ children }: {children: React.ReactNode }) {

  return (
    <div className='flex-grow'>
        <Box
          maxWidth="xl"
          sx={{
            color: "white",
            ml: { lg: `${drawerWidth}px`, xs:0 },
            width: { lg: `calc(100% - ${drawerWidth}px)`, xs: "calc(100%)"},
          }}>
          {children}
        </Box>
    </div>
  )
}
