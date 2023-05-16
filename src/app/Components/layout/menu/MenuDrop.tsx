'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FolderDto } from '@/app/types/Folder';
import { childName } from '@/app/core/splitName';
import { useRouter } from 'next/navigation';

export default function BasicMenu({menu}: {menu: FolderDto}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isEmptyFolder = menu.folders.length != 0;
  const router = useRouter()
  return (
    <div>
      <Button
        sx={{
          color: "white"
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={isEmptyFolder?  handleClick: () =>  router.push(`/${menu.name.split("_")[1]}/${menu.id}`)}
      >
        {menu.name.split("_")[1]}
      </Button>
      { isEmptyFolder &&<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >{
        menu.folders.map((children)=><MenuItem  key={children.id} onClick={handleClose}><a href={`/drive/${children.id}`}>{childName(children.name)}</a></MenuItem>)
      }
      </Menu>}
    </div>
  );
}
