'use client'
import React from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import useMenuDawer from '../../client/hooks/useMenuDrawer'

export const AppbarDrawerButton = () => {
  const menuDrawer = useMenuDawer()

  return (
    <button onClick={menuDrawer.onOpen} className=" lg:hidden block text-white p-2 m-2 rounded-lg focus:outline-none hover:shadow-md">
    <HiOutlineMenuAlt3 className="text-lg text-slate-800" size={25}/>
  </button>
  )
}
