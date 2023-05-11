'use client'
import React, { useState } from 'react'
const Menu = () => {
  const [ isOpen, setIsopen ] = useState(false)
  return (
    <div>
      <button onClick={() => setIsopen(!isOpen)} className='w-48 h-48  bg-green-200'>botão</button>
      <div className={isOpen?"":"none" + "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your e Profile</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a>
      </div>
    </div>
  )
}

export default Menu
