'use client'
import React, { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebar } from '../../client/sidebar/Sidebar.Context';
import { Collapse, useMediaQuery, useTheme } from '@mui/material';
import { selectMenu } from './menus/selectMenusIcon';
const DrawerClient = ({ index, title, children, id, link }: {link: boolean, index: number, title: string, id: string, children: ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const { isOpen, toggleSidebar } = useSidebar();
  const router = useRouter();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const handleClick = () => {
    if(isLargeScreen){
      toggleSidebar()
    }
    router.push(title === "INÍCIO"? "/" :`/${title.toLowerCase()}/${id}`)
  }
  let icons!: JSX.Element;
  if(!link){
    icons = selectMenu({index})
  }
  return (
    <div className=" my-1 mx-2 box-border">
      <button
        className="hover:bg-orange-500 flex w-full box-border px-3 items-center justify-start  rounded-md bg-opacity-80 bg-black backdrop-blur-sm py-2 text-white hover:bg-opacity-100"
        style={{ backdropFilter: "blur(1px)" }}
        onClick={children!!? () => setExpanded(!expanded): handleClick }
      >
      { icons }
      <div className='flex w-full ml-4 items-center justify-between'>
        <span>{title}</span>
      </div>
        {children!!? <svg
          className={`h-6 w-6 ${expanded ? 'transform rotate-180' : ''}`}
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
      <Collapse in={expanded} timeout="auto" unmountOnExit >
        {expanded && children}
      </Collapse>
    </div>
  );
}

export default DrawerClient
