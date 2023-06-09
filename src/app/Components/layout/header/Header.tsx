'use client'
import { IconButton, Toolbar  } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Logo } from '../logo/Logo';
import { GoSearch } from 'react-icons/go';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import SocialIcons from './SocialIcons';
import HeaderMenu from './HeaderMenu';
import { useSidebar } from '../../client/sidebar/Sidebar.Context';

export const Header = ()  => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [ isSearch, setIssearch] = useState(false);
  return (
    <Toolbar  variant="regular">
      <IconButton
        size="small"
        edge="start"
        color="default"
        aria-label="menu"
        onClick={toggleSidebar}
        sx={{ mr: 2, display: { lg: "none" } }}
      >
        <HiOutlineMenuAlt3 size={30}/>
      </IconButton>
      <Box
        color="inherit"
        sx={{ mr: 2,
          display: { xs: "none", sm: "flex", lg: "none"}
          }}
      >
        <Logo />
      </Box>
      <Box sx={{ flexGrow: 1, display: "fex", alignItems: "center",justifyContent: "end" }} />

      <IconButton onClick={()=>{setIssearch(true)}}>
        <GoSearch />
      </IconButton>

      <Box sx={{display:{xs: "fex", md: "none"}}}>
        <SocialIcons />
        <HeaderMenu />
      </Box>
      <Box sx={{display:{xs: "none", md: "fex"}}}>
        <SocialIcons />
        <HeaderMenu />
      </Box>
    </Toolbar>
  )
}
