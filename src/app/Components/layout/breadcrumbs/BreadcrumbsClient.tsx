'use client'
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import  { GrFormNext } from 'react-icons/gr';
import  { MdHome } from 'react-icons/md';
import { FolderPath } from '@/types/FolderPath';

const pathArrayFactory= (path: FolderPath): FolderPath[] => {

  let letPath: FolderPath = path
  let  array: FolderPath[] =  []

  while (letPath!!) {
    array = [...array, {
      id: letPath.id,
      name: letPath.name,
      path: null
    }]
    letPath = letPath.path!
  }
  return array
}
const BreadcrumbsClient = ({ folderPath }: {folderPath?: FolderPath}) => {

  if(folderPath === undefined){
    return <div />
  }
  const breadcrumbs = pathArrayFactory(folderPath!).reverse()
  breadcrumbs.shift()
  breadcrumbs.shift()

return (
  <nav className="flex items-center space-x-1 overflow-x-auto mx-auto w-[98vw]">
    <div className="flex items-center">
          <MdHome className="h-6 w-6 text-gray-500 mr-2" />
        <Link
          href={`/`}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-300 no-underline"
        >
         {"Início"}
        </Link>
        <GrFormNext className="h-4 w-4 text-gray-500" />
      </div>
    {breadcrumbs.map((item, index) => (
      <div key={item.id} className="flex items-center">
        {index !== 0 && (
          <span  className="h-4 w-4"><GrFormNext className="h-4 w-4 text-gray-500" /></span>
        )}
        <Link
          href={`/drive/${item.id}`}
          className="text-gray-500 hover:text-gray-700 min-w-fit transition-colors duration-300 no-underline"
        >
          {item.name.split("- ")[1]}
        </Link>
      </div>
    ))}
  </nav>
);
}

export default BreadcrumbsClient





