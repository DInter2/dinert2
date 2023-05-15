'use client'
import  { MdHome, MdAutoStories, MdPhone, MdPhotoLibrary, MdPermMedia } from 'react-icons/md';
import React, { ReactNode } from 'react'

export const selectMenu = ({index}: { index: number}): JSX.Element =>{
const menus = [
  {
      icon: <MdHome size={30} />,
    },{
      icon: <MdAutoStories size={30} />,
    },{
      icon: <MdPhone size={30}/>,
    },{
      icon: <MdPhotoLibrary size={30}/>,
    },{
      icon: <MdPermMedia size={30}/>,
    }]

    return menus[index].icon
}


