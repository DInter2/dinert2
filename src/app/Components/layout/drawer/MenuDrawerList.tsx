'use client'

import { FolderDto } from '@/types/Folder';
import { FolderPath } from '@/types/FolderPath';
import { Collapse, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import  { MdHome, MdAutoStories, MdPhone, MdPhotoLibrary, MdPermMedia, MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

type OpenProps = {
  open: boolean;
  key: string;
}

type MenuProps = {
  tite: string
  subMenus: FolderDto[]
  router: string
  icon: JSX.Element
}

const MenuDrawerList = () => {
  const [openMenu, setOpenMenu] = useState<OpenProps>({key:"@", open: false});
  const handleOpenMenu = (key: string)=>{
    if(key === openMenu.key){
      setOpenMenu({...openMenu, open: !openMenu.open});
    }else{
      setOpenMenu({key: key, open: true});
    }
  }
  const icons = [
    {icon: <MdHome />},
    {icon:<MdAutoStories />},
    {icon:<MdPhone />},
    {icon:<MdPhotoLibrary />},
    {icon:<MdPermMedia />},
  ];
  const pages : MenuProps[] = ([{
        description: "description",
        id: "id",
        name: "name",
        folders: [],
        page: "",
        files: [],
        path: {} as FolderPath
      }] as FolderDto[]).map((folder, i)=>{
    return {
      tite: folder.name.split("_")[1],
      subMenus: folder.folders,
      router: `/${folder.name.split("_")[1]}/${folder.id}`,
      icon: icons[1].icon
    }
  })
  const list = pages.map((page) => (
    <div  key={page.tite}>
      <ListItemButton
      key={page.tite}
        sx={{ m: 1, borderRadius: 2, backdropFilter: "blur(1px)", bgcolor: "rgba(0, 0, 0, 0.80)"}}
        onClick={page.router!!? ()=> {} :() => page.subMenus.length && handleOpenMenu(page.tite)}
      >
        <ListItem  disablePadding >
            {page.icon}
          <ListItemText sx={{pl: 2}}>
            <Typography variant="subtitle1"  display="block" >
              {page.tite}
            </Typography>
          </ListItemText>
            {page.subMenus.length !== 0 && (openMenu.open && openMenu.key ? <MdKeyboardArrowDown/> : <MdKeyboardArrowRight /> )}
        </ListItem>
      </ ListItemButton>
      <Collapse  in={openMenu.open && openMenu.key === page.tite} timeout="auto" unmountOnExit>
        { page.subMenus.map((subMenu) => (
          <Link
            key={subMenu.id}
            style={{ textDecoration: "none", color: "inherit" }}
            href={`/drive/${subMenu.id}`}>
              <ListItemButton sx={{ mx: 2, my: 1, borderRadius: 2, backdropFilter: "blur(4px)", bgcolor: "rgba(0, 0, 0, 0)"}}>
                <ListItemText primary={(
                  <Typography variant="subtitle1"  display="block" gutterBottom>
                  {subMenu.name.split("_")[1]}
                  </Typography>
                )} />
              </ListItemButton>
          </Link>
        ))}
      </Collapse>
    </div>
));
  return (
    <List >
      {list}
    </List>
  )
}

export default MenuDrawerList
