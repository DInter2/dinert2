import React from 'react'
import DrawerClient from './DrawerClient';
import { FolderDto } from '@/types/Folder';
import DrawerSubMenu from './DrawerSubMenu.Client';

 const DrawerServer = ({data, link}: {data: FolderDto[], link: boolean})  => {
  return (
    <div className="container mx-auto pt-4">
      {data.map((folder, index) => (
        <DrawerClient link={link} index={index} key={folder.id} title={folder.name.split("_")[1]} id={folder.id}>
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
