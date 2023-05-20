'use client'
import { Box, Collapse, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useState } from 'react'
import { useSidebar } from "@/app/Components/client/sidebar/Sidebar.Context";
import { FolderDto } from "@/types/Folder";
import { useRouter } from "next/navigation";
type OpenProps = {
  open: boolean;
  key: string;
}

const MenuLink = ({ folder }: {folder: FolderDto[]}) => {
  const { isOpen, toggleSidebar } = useSidebar();
  const router = useRouter();
  const handleOpenMenu = (id: string)=>{
    router.push(`/drive/${id}`)
    toggleSidebar()
  }

  return (
    <Box bgcolor="transparent ">
        <Collapse  in={true} timeout="auto" unmountOnExit>
          {folder.map((menu) => (
            <div  key={menu.id}>
              <ListItemButton
                sx={{ mb: 1, mx: 1, borderRadius: 2, backdropFilter: "blur(1px)", bgcolor: "rgba(0, 0, 0, 0.80)"}}
                onClick={() => handleOpenMenu(menu.id)}
              >
                <ListItem  disablePadding >
                  <ListItemText>
                    <Typography variant="subtitle2"  display="block" color="white">
                      {menu.name.split("-")[1]}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </ ListItemButton>
            </div>
            ))}
        </Collapse>
    </Box>
  );
}

export default MenuLink

