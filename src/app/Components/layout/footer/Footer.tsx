'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Copyright } from './Copyright';

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { title } = props;

  return (
    <Box component="footer" sx={{ pt: 15, pb: 8, display: 'flex', alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom  color="text.secondary"  >
          {title}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
