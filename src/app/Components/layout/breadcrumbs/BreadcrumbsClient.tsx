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

const BreadcrumbsWidget = ({path}: {path: FolderPath}) => {
  return (
        <Link underline="hover" key={path.id} color="inherit" href={`/drive/${path.id}`} >
          <Typography color="text.primary" sx={{pl: 0.4, fontSize: {lg: 14, md: 12, xs: 12}}}>
          {path.name.includes("_")? path.name.split("_")[1]: path.name.includes("-")? path.name.split("-")[1]: path.name}
          </Typography>
        </Link>
  )
}
const BreadcrumbsClient = ({ folderPath }: {folderPath?: FolderPath}) => {

  if(folderPath === undefined){
    return <div />
  }
  const breadcrumbs = pathArrayFactory(folderPath!).reverse()
  breadcrumbs.shift()
  breadcrumbs.shift()

  return (
    <Breadcrumbs
      sx={{maxWidth: "100vw", ml: 2, mb: 2}}
      separator={<GrFormNext fontSize="large" />}
      aria-label="breadcrumb"
    >
    <Link underline="hover" key="1" color="inherit" href="/" >
      <Box display="flex" justifyContent="center" alignItems="center" >
      <MdHome className='pb-2' size={32}/>
        <Typography key="@" color="text.primary" sx={{pl: 0.4, fontSize: {lg: 14, md: 12, xs: 12}}}>
          INÍCIO
        </Typography>
      </Box>
    </Link>
      {breadcrumbs.map((path)=><BreadcrumbsWidget key={path.id} path={path} />) }
    </Breadcrumbs>
  );
}

export default BreadcrumbsClient





