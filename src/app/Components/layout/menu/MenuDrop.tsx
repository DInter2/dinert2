'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Folder } from '@/app/types/Folder';
import { childName } from '@/core/splitName';

export default function BasicMenu({menu}: {menu: Folder}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {menu.name.split("_")[1]}
      </Button>
      { menu.folders.length != 0 &&<Menu
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
