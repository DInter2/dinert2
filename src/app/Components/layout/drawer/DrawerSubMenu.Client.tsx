'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { childName } from '@/app/core/splitName';
import { TayTypography } from '../../widgets/TayTypography';
import { useSidebar } from '@/app/Components/client/sidebar/Sidebar.Context';
import { Menu } from '@/types/Menu';


const DrawerSubMenu = ({ Submenu }: { Submenu: Menu}) => {
  const router = useRouter();
  const { isOpen, toggleSidebar } = useSidebar();
  const handleClick = () => {
    if(isOpen){
      toggleSidebar()
    }
    router.push(Submenu.link ?? "/")
  }
  return (
      <div className="my-1 bg-amber-600w-full ml-2 box-border">
        <button
          className="flex hover:bg-orange-500
                      w-full box-border px-3
                      items-center justify-between
                      rounded-md bg-opacity-80
                      bg-black backdrop-blur-sm py-2
                      text-white hover:bg-opacity-100
                      focus:bg-orange-500"
          style={{ backdropFilter: "blur(1px)" }}
          onClick={handleClick}
        >
          <TayTypography variant="subtitle2"  display="block" gutterBottom={false}>{childName(Submenu.title)}</TayTypography >
        </button>
      </div>
  )
}

export default DrawerSubMenu
