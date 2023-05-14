import React from 'react'
import DrawerClient from './DrawerClient';
import { Folder } from '@/app/types/Folder';
import DrawerSubMenu from './DrawerSubMenu.Client';

 const DrawerServer = ({data}: {data: Folder[]})  => {

  return (
    <div className="container mx-auto pt-4">
      {data.map((folder) => (
        <DrawerClient key={folder.id} title={folder.name.split("_")[1]} id={folder.id}>
          {folder.folders.length!! && folder.folders.map((folder)=>
            <DrawerSubMenu key={folder.id} {...{
            id: folder.id,
            title: folder.name,
          }} />)}
        </DrawerClient>
      ))}
    </div>
  );
}

export default DrawerServer
