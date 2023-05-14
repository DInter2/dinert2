'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { childName } from '@/core/splitName';
import { TayTypography } from '../../widgets/TayTypography';
import { useSidebar } from '@/Components/client/sidebar/Sidebar.Context';


const DrawerSubMenu = ({ title, id }: { title: string, id: string }) => {
  const router = useRouter();
  const { isOpen, toggleSidebar } = useSidebar();
  const handleClick = () => {
    toggleSidebar()
    router.push(`/drive/${id}`)
  }
  return (
    <div className="my-1 bg-amber-600w-full ml-2 box-border">
      <button
        className="flex w-full box-border px-3 items-center justify-between  rounded-md bg-opacity-80 bg-black backdrop-blur-sm py-2 text-white hover:bg-opacity-100 hover:bg-gray-700 focus:outline-none"
        style={{ backdropFilter: "blur(1px)" }}
        onClick={handleClick}
      >
        <TayTypography variant="subtitle2"  display="block" gutterBottom={false}>{childName(title)}</TayTypography >
      </button>
    </div>
  )
}

export default DrawerSubMenu