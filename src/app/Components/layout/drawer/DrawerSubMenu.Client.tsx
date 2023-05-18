'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { childName } from '@/app/core/splitName';
import { TayTypography } from '../../widgets/TayTypography';
import { useSidebar } from '@/app/Components/client/sidebar/Sidebar.Context';
import Link from 'next/link';


const DrawerSubMenu = ({ title, id }: { title: string, id: string }) => {
  const router = useRouter();
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <Link href={`/drive/${id}`}>
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
          onClick={isOpen? toggleSidebar: () => null}
        >
          <TayTypography variant="subtitle2"  display="block" gutterBottom={false}>{childName(title)}</TayTypography >
        </button>
      </div>
    </Link>
  )
}

export default DrawerSubMenu
