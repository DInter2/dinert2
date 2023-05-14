'use client'
import { Folder } from '@/app/types/Folder';
import { ListItem, ListItemButton, ListItemText, Collapse, Box, Typography, Stack, Skeleton } from '@mui/material';
import { useState } from 'react';
export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  isOparation: boolean;
  folders: Folder[]
};
type OpenProps = {
  open: boolean;
  key: string;
}
export default function MenuDrawer({ open, onClose, isOparation, folders }: DrawerProps) {

  const [openMenu, setOpenMenu] = useState<OpenProps>({key:"@", open: false});

  const handleOpenMenu = (key: string)=>{
    if(key === openMenu.key){
      setOpenMenu({...openMenu, open: !openMenu.open});
    }else{
      setOpenMenu({key: key, open: true});
    }
  }

  const list = folders.map((menu) => (
    <div  key={menu.id}>
      <ListItemButton
        sx={{ mb: 1, mx: 1, borderRadius: 2, backdropFilter: "blur(1px)", bgcolor: "rgba(0, 0, 0, 0.80)"}}
        onClick={() => handleOpenMenu(menu.id)}
      >
        <ListItem  disablePadding >
          <ListItemText>
            <Typography variant="subtitle1"  display="block">
              {menu.name}
            </Typography>
          </ListItemText>
          {/* {menu.folders.length !== 0 && (openMenu.open && openMenu.key === menu.id ? <KeyboardArrowDownIcon/> : <ChevronRight /> )} */}
        </ListItem>
      </ ListItemButton>
      <Collapse  in={openMenu.open && openMenu.key === menu.id} timeout="auto" unmountOnExit>
        {/* { menu.folders.map((directory) => (
            <DiretoryDrawer menu={menu} directory={directory} onClick={onClose} key={directory.id}/>
        ))} */}
      </Collapse>
    </div>
));
  return (
    <Box bgcolor="transparent ">
        <Collapse  in={true} timeout="auto" unmountOnExit>
          {list}
        </Collapse>
    </Box>
  );
}
