import React from 'react'
import DrawerClient from './DrawerClient';
import DrawerSubMenu from './DrawerSubMenu.Client';
import { Menu } from '@/types/Menu';

 const DrawerServer = ({data, link}: {data: Menu[], link: boolean})  => {
  return (
    <div className="container mx-auto pt-0">
      {data.map((menu, index) => (
        <DrawerClient
          menu={menu}
          key={menu.title}>
          {menu.subMenu! && menu.subMenu.map((subMenu)=>
            <DrawerSubMenu key={subMenu.title} Submenu={subMenu} />)}
        </DrawerClient>
      ))}
    </div>
  );
}

export default DrawerServer
