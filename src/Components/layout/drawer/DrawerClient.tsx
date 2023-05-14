'use client'
import React, { ReactNode, useState } from 'react'
import TayColapse from '../../widgets/TayColapse';
import { useRouter } from 'next/navigation';
import { useSidebar } from '@/Components/client/sidebar/Sidebar.Context';
import { useMediaQuery, useTheme } from '@mui/material';

const DrawerClient = ({ title, children, id }: { title: string, id: string, children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const { isOpen, toggleSidebar } = useSidebar();
  const router = useRouter();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const handleClick = () => {
    if(isLargeScreen){
      toggleSidebar()
    }
    router.push(`/${title.toLowerCase()}/${id}`)
  }

  return (
    <div className=" my-1 bg-amber-600w-full mx-2 box-border">
      <button
        className="hover:bg-orange-500 flex w-full box-border px-3 items-center justify-between  rounded-md bg-opacity-80 bg-black backdrop-blur-sm py-2 text-white hover:bg-opacity-100"
        style={{ backdropFilter: "blur(1px)" }}
        onClick={children!!? () => setExpanded(!expanded): handleClick }
      >
        <span>{title}</span>
        {children!!? <svg
          className={`h-4 w-4 ${expanded ? 'transform rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 6.707a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
            clipRule="evenodd"
          />
        </svg>: null}
      </button>
      <TayColapse isOpen={expanded} >
        {expanded && children}
      </TayColapse>
    </div>
  );
}

export default DrawerClient
