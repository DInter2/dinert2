import  { MdHome, MdAutoStories, MdPhone, MdPhotoLibrary, MdPermMedia, MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import React, { ReactNode } from 'react'

type Menu = {
  title: string
  id: string
  icon: ReactNode
  children: ReactNode
}

export const selectMenu = ({id, title, children}: { id: string, title: string, children: ReactNode }): Menu =>{
  switch (title) {
    case "início":
      return {
        icon: <MdHome />,
        title: title,
        id: id,
        children: children
      }
    case "início":
      return {
        icon: <MdHome />,
        title: title,
        id: id,
        children: children
      }
    case "início":
      return {
        icon: <MdHome />,
        title: title,
        id: id,
        children: children
      }
    case "início":
      return {
        icon: <MdHome />,
        title: title,
        id: id,
        children: children
      }
    default:
      return {
        icon: <MdHome />,
        title: title,
        id: id,
        children: children
      }
  }
}


