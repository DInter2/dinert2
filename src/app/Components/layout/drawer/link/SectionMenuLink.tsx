'use client'
import { FolderDto } from '@/types/Folder';
import { Box, Divider, Typography } from '@mui/material';
import React from 'react'
import { MdFireTruck, MdAddToPhotos } from 'react-icons/md'
import MenuLink from './MenuLink';

const SectionMenuLink = ({ folders, index }: {folders: FolderDto[], index: number}) => {
  const sections = (index: number) =>{
    const sections = [
    {
      title: "OPERACIONAL",
      isOperation: true,
      icon: <MdFireTruck />
    },{
      title: "DIVERSOS",
      isOperation: false,
      icon: <MdAddToPhotos />
    }
  ]
  return sections[index]
}
const section = index > 1 ? sections(1) : sections(index)
  return (
    <div>
      {
        <div key={section.title}>
            <Box  sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(6px)",
              mb: 1,
              mt: 4,
              p: 1,
              }}>
                {section.icon}
              <Typography variant="subtitle1"  color="white" display="block" marginLeft={section.icon!!? 2 : 0}>
                {section.title}
              </Typography>
            </Box>
            <MenuLink  folder={folders}/>
        </div>
      }
    </div>
  );
}

export default SectionMenuLink
