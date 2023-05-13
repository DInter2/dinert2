'use client'
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import  { GrFormNext } from 'react-icons/gr';
import  { MdHome } from 'react-icons/md';

const PathRoute = () => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  const breadcrumbs = [].map((path)=>(
      <Typography key={path} color="text.primary">
       {decodeURI(path)}
      </Typography>)
    )

  return (
    <Box>
      {breadcrumbs.length !== 0 && <Stack spacing={2} paddingBottom={2}>
       <Breadcrumbs
          separator={<GrFormNext fontSize="small" />}
          aria-label="breadcrumb"
        >
       <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
          <Box display="flex" >
          <MdHome className='pb-2'/>
            <Typography key="@" color="text.primary" sx={{pl: 0.4}}>
            Início
            </Typography>
          </Box>
        </Link>
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>}
    </Box>
  );
}

export default PathRoute





