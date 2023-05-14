'use client'
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { drawerWidth } from '@/Components/consts/drawerWidth';


function MuiDrawer() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          position: 'relative',
          color: 'black',
        },
        '&::before': {
          width: drawerWidth,
          content: '" "',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(/images/drawer.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5, // Define a opacidade da imagem de fundo
          zIndex: -1,
        },
      }}
      variant="permanent"
    >

    </Drawer>
  );
}

export default MuiDrawer;
